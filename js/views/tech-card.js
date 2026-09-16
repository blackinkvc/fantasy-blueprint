// ============================================================
// 概念梗概卡（轻量浮层）
// 交互约定：站内任何指向造物条目的元素加 data-tech-card="<id>"，
// 点击时先弹出本卡（梗概 + 标签 + 依赖），卡内「查看详细」再进入
// #/tech/<id> 完整页面。直接访问 #/tech/<id> 不受影响。
// 关闭方式：点遮罩、点 ×、按 Esc、切换路由。
// ============================================================
const TechCard = {
  root: null,

  ensureRoot() {
    if (this.root && document.body.contains(this.root)) return this.root;
    this.root = document.createElement("div");
    this.root.id = "tc-root";
    document.body.appendChild(this.root);
    return this.root;
  },

  open(id) {
    // 全程防御：任何一步失败都返回 false，由调用方放行原始跳转
    try {
      return this._render(id);
    } catch (err) {
      if (typeof console !== "undefined" && console.warn) console.warn("梗概卡渲染失败，已放行跳转：", err);
      return false;
    }
  },

  _render(id) {
    if (typeof TECHS === "undefined") return false;
    const t = TECHS.find(x => x.id === id);
    if (!t) return false;

    const dom = (typeof DOMAINS !== "undefined" && DOMAINS[t.domain]) || { label: t.domain, icon: "", color: "#1a1512" };
    const work = (typeof WORKS !== "undefined") && WORKS.find(w => w.id === t.workId);
    const aliases = t.aliases || [];

    const deps = (t.dependencies || []).map(d => {
      const x = TECHS.find(y => y.id === d);
      return x
        ? `<a class="tc-dep" href="#/tech/${x.id}" data-tech-card="${x.id}">${esc(x.name)}</a>`
        : `<span class="tc-dep dead">${esc(d)}</span>`;
    }).join("") || `<span class="muted">无前置依赖</span>`;

    const tags = (t.tags || []).map(x => `<span class="tag">${esc(x)}</span>`).join("");

    const root = this.ensureRoot();
    root.innerHTML = `
      <div class="tc-overlay" data-tc-close>
        <div class="tc-modal" role="dialog" aria-modal="true" aria-label="${esc(t.name)} 梗概">
          <button class="tc-x" data-tc-close aria-label="关闭">×</button>

          <div class="tc-head">
            <span class="tc-dom" style="--dcolor:${dom.color}">${dom.icon} ${esc(dom.label)}</span>
            <h3>${esc(t.name)}</h3>
            ${aliases.length ? `<p class="tc-alias">别名：${esc(aliases.join(" / "))}</p>` : ""}
          </div>

          <p class="tc-work">《${esc(work ? work.title : t.workId)}》</p>
          <p class="tc-summary">${esc(t.summary)}</p>

          ${tags ? `<div class="tc-row"><span class="tc-k">标签</span><div class="tc-v">${tags}</div></div>` : ""}
          <div class="tc-row"><span class="tc-k">依赖</span><div class="tc-v">${deps}</div></div>

          <div class="tc-foot">
            <a class="btn tc-more" href="#/tech/${t.id}">查看详细 →</a>
          </div>
        </div>
      </div>`;
    document.body.classList.add("tc-open");
    return true;
  },

  close() {
    if (this.root) this.root.innerHTML = "";
    document.body.classList.remove("tc-open");
  },

  isOpen() {
    return !!(this.root && this.root.innerHTML);
  }
};

// ---- 全局事件：打开 / 关闭 ----
// 原则：只有卡片**确实弹出**时才拦截跳转。任何异常或失败一律放行，
// 让链接按原样跳转到 #/tech/<id>，绝不让点击变成「没反应」。
document.addEventListener("click", (e) => {
  const el = e.target;
  if (!el || typeof el.closest !== "function") return;
  if (typeof TechCard === "undefined") return;

  // 关闭优先：点遮罩或 ×；点卡片主体不关
  if (TechCard.isOpen()) {
    const overlay = el.closest(".tc-overlay");
    const isX = el.closest(".tc-x");
    const insideModal = el.closest(".tc-modal");
    if (overlay && (!insideModal || isX)) {
      e.preventDefault();
      TechCard.close();
      return;
    }
  }

  // 打开：失败则放行
  const trigger = el.closest("[data-tech-card]");
  if (!trigger) return;
  let opened = false;
  try {
    opened = TechCard.open(trigger.getAttribute("data-tech-card"));
  } catch (err) {
    opened = false;
  }
  if (opened) e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && TechCard.isOpen()) TechCard.close();
});

// 路由变化或浏览器后退时收卡
window.addEventListener("hashchange", () => TechCard.close());