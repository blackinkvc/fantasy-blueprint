// ============================================================
// 分类分析页（实时更新）
// 从 WORKS + WORKS_TAGS + TAG_TAXONOMY 实时计算各维度标签分布，
// 点击标签即在当前维度内 OR、跨维度 AND 地筛选世界观列表，
// 全程不刷新路由、不重载页面（模块级 state + 事件委托重渲染结果区）。
// 标签计数采用分面（faceted）逻辑：每个标签的计数反映「除本维度外
// 其它所有已选维度」约束下的匹配数，随点击实时变化。
// ============================================================
const ClassifyView = {
  // 模块级筛选状态：dimension -> Set(tagKey)
  state: {},

  activeDims() {
    return Object.keys(this.state).filter(d => this.state[d] && this.state[d].size > 0);
  },

  // 某个标签在当前筛选上下文下的分面计数
  facetCount(dim, tag) {
    const others = this.activeDims().filter(d => d !== dim);
    return WORKS.filter(w => {
      const tags = (WORKS_TAGS[w.id] || []);
      if (tags.indexOf(tag) === -1) return false;
      return others.every(d => Array.from(this.state[d]).some(t => tags.indexOf(t) > -1));
    }).length;
  },

  // 当前筛选命中的世界观
  matches() {
    const dims = this.activeDims();
    if (dims.length === 0) return WORKS.slice();
    return WORKS.filter(w => {
      const tags = (WORKS_TAGS[w.id] || []);
      return dims.every(d => Array.from(this.state[d]).some(t => tags.indexOf(t) > -1));
    });
  },

  toggle(dim, tag) {
    if (!this.state[dim]) this.state[dim] = new Set();
    if (this.state[dim].has(tag)) this.state[dim].delete(tag);
    else this.state[dim].add(tag);
    this.update();
  },

  clear() {
    this.state = {};
    this.update();
  },

  // ---------- 渲染片段 ----------
  chipsHtml() {
    return Object.entries(TAG_TAXONOMY).map(([dim, def]) => {
      const keys = Object.keys(def.tags);
      const max = Math.max(1, ...keys.map(t => this.facetCount(dim, t)));
      const chips = keys.map(tag => {
        const label = def.tags[tag];
        const n = this.facetCount(dim, tag);
        const on = this.state[dim] && this.state[dim].has(tag);
        const pct = Math.round(n / max * 100);
        return `
        <button class="cf-chip ${on ? "on" : ""}" data-dim="${dim}" data-tag="${tag}">
          <span class="cf-chip-top">
            <span class="cf-chip-label">${label}</span>
            <span class="cf-chip-n">${n}</span>
          </span>
          <span class="cf-bar"><i style="width:${pct}%"></i></span>
        </button>`;
      }).join("");
      return `
      <div class="cf-group">
        <div class="cf-group-label">${def.label}</div>
        <div class="cf-chips">${chips}</div>
      </div>`;
    }).join("");
  },

  summaryHtml() {
    const active = this.activeDims();
    const matches = this.matches();
    const tagText = active
      .flatMap(d => [...this.state[d]].map(t => TAG_TAXONOMY[d].tags[t]))
      .join(" · ");
    const filterChip = active.length
      ? `<button class="btn reset" data-cf-clear>清空筛选</button>`
      : "";
    return `
      <div class="cf-match">
        命中 <strong>${matches.length}</strong> / ${WORKS.length} 部世界观
        ${active.length ? `<span class="cf-filter-text">（ ${escapeHtml(tagText)} ）</span>` : ""}
      </div>
      ${filterChip}`;
  },

  resultsHtml() {
    const list = this.matches();
    const cards = list.map((w) => {
      const techCount = TECHS.filter(t => t.workId === w.id).length;
      const tags = (WORKS_TAGS[w.id] || []);
      // 取该世界观 2 个最具代表性的标签作脚注
      const foot = tags.slice(0, 3).map(t => {
        const dim = Object.keys(TAG_TAXONOMY).find(d => TAG_TAXONOMY[d].tags[t]);
        return dim ? TAG_TAXONOMY[dim].tags[t] : t;
      }).join(" · ");
      return `
      <a class="work-entry" href="#/work/${w.id}">
        <div class="we-top">
          <span class="we-year">${w.year}</span>
        </div>
        <h3>《${w.title}》</h3>
        <p class="we-creator">${w.creator} · ${w.media}</p>
        <p class="we-setting">${w.setting}</p>
        <div class="we-foot">
          ${techCount
            ? `<span class="we-tech">深度条目 ${techCount}</span>`
            : `<span class="we-tech lite">登记卷</span>`}
          <span class="we-tags">${foot}</span>
        </div>
      </a>`;
    }).join("") || `<div class="empty">没有符合当前筛选条件的世界观。</div>`;

    return `<div class="works-grid">${cards}</div>`;
  },

  // 点击后只重渲染面板 + 摘要 + 结果，不触发路由重载
  update() {
    const panel = document.getElementById("cf-panel");
    const summary = document.getElementById("cf-summary");
    const results = document.getElementById("cf-results");
    if (panel) panel.innerHTML = this.chipsHtml();
    if (summary) summary.innerHTML = this.summaryHtml();
    if (results) results.innerHTML = this.resultsHtml();
  },

  render() {
    return `
      <section class="page-title">
        <h1>分类分析</h1>
        <p>对全部 ${WORKS.length} 个幻想宇宙按「背景设定 · 时代 · 神话借用度 · 来源媒介 · 文化渊源 · 子类型 · 基调」七个维度实时打标。点击任意标签即可筛选，标签计数随所选维度联动更新。</p>
      </section>

      <section class="cf-panel" id="cf-panel">${this.chipsHtml()}</section>
      <section class="cf-summary" id="cf-summary">${this.summaryHtml()}</section>
      <section class="cf-results" id="cf-results">${this.resultsHtml()}</section>
    `;
  }
};

// 事件委托：标签筛选 / 清空（仅在分类页内生效）
document.addEventListener("click", (e) => {
  if (!location.hash.startsWith("#/classify")) return;
  const chip = e.target.closest("[data-dim][data-tag]");
  if (chip) { ClassifyView.toggle(chip.dataset.dim, chip.dataset.tag); return; }
  const clear = e.target.closest("[data-cf-clear]");
  if (clear) { ClassifyView.clear(); }
});
