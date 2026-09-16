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
    const t = TECHS.find(x => x.id === id);
    if (!t) return false;

    const dom = DOMAINS[t.domain] || { label: t.domain, icon: "", color: "#1a1512" };
    const work = WORKS.find(w => w.id === t.workId);

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
            ${t.aliases.length ? `<p class="tc-alias">别名：${esc(t.aliases.join(" / "))}</p>` : ""}
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
document.addEventListener("click", (e) => {
  // 关闭优先
  if (e.target.closest("[data-tc-close]") && TechCard.isOpen()) {
    // 点遮罩或 × 才关；点卡片主体不关
    const overlay = e.target.closest(".tc-overlay");
    const insideModal = e.target.closest(".tc-modal");
    const isX = e.target.closest(".tc-x");
    if (isX || (overlay && !insideModal)) {
      e.preventDefault();
      TechCard.close();
      return;
    }
  }
  // 打开
  const trigger = e.target.closest("[data-tech-card]");
  if (trigger) {
    e.preventDefault();
    TechCard.open(trigger.getAttribute("data-tech-card"));
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && TechCard.isOpen()) TechCard.close();
});

// 路由变化或浏览器后退时收卡
window.addEventListener("hashchange", () => TechCard.close());