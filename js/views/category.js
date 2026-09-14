// ============================================================
// 分类检索页视图
// 支持：五级(单选) + 领域(多选) + 关键词 组合过滤，状态编码在 hash query
// ============================================================
const CategoryView = {
  render(query) {
    const level = query.level || "ALL";
    const domains = (query.domains ? query.domains.split(",") : []).filter(Boolean);
    const keyword = (query.q || "").toLowerCase();

    // 筛选
    let list = TECHS.slice();
    if (level !== "ALL") list = list.filter(t => t.level === level);
    if (domains.length) list = list.filter(t => domains.includes(t.domain));
    if (keyword) list = list.filter(t =>
      (t.name + " " + t.aliases.join(" ") + " " + t.summary + " " + t.tags.join(" ")).toLowerCase().includes(keyword)
    );

    // 五级单选按钮
    const levelBtns = [{ key: "ALL", badge: "全部" }, ...Object.values(LEVELS).sort((a, b) => a.order - b.order)]
      .map(lv => {
        const k = lv.key;
        if (k === "ALL") {
          return `<button class="flt ${level === "ALL" ? "on" : ""}" data-k="ALL">全部</button>`;
        }
        return `<button class="flt ${level === k ? "on" : ""}" style="--fc:${lv.color}" data-k="${k}">${lv.badge}</button>`;
      }).join("");

    // 领域多选按钮
    const domainBtns = Object.values(DOMAINS).map(d => {
      const on = domains.includes(d.key);
      return `<button class="flt ${on ? "on" : ""}" style="--fc:${d.color}" data-d="${d.key}">${d.icon}${d.label}</button>`;
    }).join("");

    // 结果卡片
    const results = list.length
      ? list.map(t => this.card(t)).join("")
      : `<div class="empty">没有符合条件的造物条目。</div>`;

    return `
      <section class="page-title">
        <h1>造物检索</h1>
        <p>分级、领域、关键词——三重过滤，查遍全卷。</p>
      </section>

      <section class="filter-bar">
        <div class="filter-row">
          <label>实现分级</label>
          <div class="chips">${levelBtns}</div>
        </div>
        <div class="filter-row">
          <label>造物领域</label>
          <div class="chips">${domainBtns}</div>
        </div>
        <div class="filter-row search-row">
          <input id="kw" type="search" placeholder="搜索造物名称 / 摘要 / 标签…" value="${escapeHtml(query.q || "")}">
          <a class="btn reset" href="#/category">重置</a>
        </div>
      </section>

      <section class="results-head">
        <span>共 <strong>${list.length}</strong> 项</span>
        <span class="hint">点击卡片查看详情与实现路径</span>
      </section>

      <section class="tech-list">${results}</section>
    `;
  },

  card(t) {
    const lv = LEVELS[t.level];
    const dom = DOMAINS[t.domain];
    const work = WORKS.find(w => w.id === t.workId);
    return `
      <a class="tech-card" href="#/tech/${t.id}" style="--lvcolor:${lv.color}">
        <div class="lv-stripe"></div>
        <div class="tc-main">
          <div class="tc-title">
            <h3>${t.name}</h3>
            <span class="lv-badge" style="--lvcolor:${lv.color}">${lv.badge}</span>
          </div>
          <p class="summary">${t.summary}</p>
          <div class="tc-meta">
            <span class="work-tag">《${work ? work.title : t.workId}》</span>
            <span class="domain-tag" style="--dcolor:${dom.color}">${dom.icon} ${dom.label}</span>
            ${t.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join("")}
          </div>
        </div>
      </a>`;
  }
};

// 事件委托：处理分类页的筛选点击
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".flt");
  if (!btn) return;
  if (!location.hash.startsWith("#/category")) return;
  const { query } = Router.parseHash();
  let level = query.level || "ALL";
  let domains = (query.domains ? query.domains.split(",") : []).filter(Boolean);
  if (btn.dataset.k) {
    level = btn.dataset.k;
  }
  if (btn.dataset.d) {
    const k = btn.dataset.d;
    domains = domains.includes(k) ? domains.filter(x => x !== k) : [...domains, k];
  }
  const qs = new URLSearchParams();
  if (level !== "ALL") qs.set("level", level);
  if (domains.length) qs.set("domains", domains.join(","));
  if (query.q) qs.set("q", query.q);
  location.hash = "#/category" + (qs.toString() ? "?" + qs.toString() : "");
});

// 关键词搜索（输入防抖后跳转）
let kwTimer;
document.addEventListener("input", (e) => {
  if (e.target.id !== "kw") return;
  clearTimeout(kwTimer);
  kwTimer = setTimeout(() => {
    const { query } = Router.parseHash();
    const qs = new URLSearchParams();
    if (query.level) qs.set("level", query.level);
    if (query.domains) qs.set("domains", query.domains);
    if (e.target.value.trim()) qs.set("q", e.target.value.trim());
    location.hash = "#/category" + (qs.toString() ? "?" + qs.toString() : "");
  }, 400);
});
