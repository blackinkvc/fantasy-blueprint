// ============================================================
// 世界观总库列表页视图
// 媒介筛选 + 关键词搜索 + 编年/标题排序，hash query 保留状态
// ============================================================
const WorksView = {
  MEDIA_FILTERS: ["神话", "小说", "电影", "剧集", "动画", "游戏", "漫画"],

  render(query) {
    const media = query.media || "ALL";
    const keyword = (query.q || "").toLowerCase().trim();
    const sort = query.sort === "title" ? "title" : "year";

    // 筛选
    let list = WORKS.slice();
    if (media !== "ALL") list = list.filter(w => w.media.indexOf(media) > -1);
    if (keyword) list = list.filter(w =>
      (w.title + " " + w.creator).toLowerCase().includes(keyword));

    // 排序
    list.sort((a, b) => sort === "title"
      ? a.title.localeCompare(b.title, "zh-Hans-CN")
      : (a.year - b.year));

    // 编年跨度（用于副标题）
    const byYear = WORKS.slice().sort((a, b) => a.year - b.year);
    const oldest = byYear[0], newest = byYear[byYear.length - 1];

    // 媒介统计
    const mediaCounts = {};
    this.MEDIA_FILTERS.forEach(m => {
      mediaCounts[m] = WORKS.filter(w => w.media.indexOf(m) > -1).length;
    });

    // 媒介筛选按钮
    const chips = [
      { key: "ALL", label: `全部 ${WORKS.length}` },
      ...this.MEDIA_FILTERS.map(m => ({ key: m, label: `${m} ${mediaCounts[m]}` }))
    ].map(c =>
      `<button class="flt ${media === c.key ? "on" : ""}" data-wm="${c.key}">${c.label}</button>`
    ).join("");

    // 排序按钮
    const sortBtns = `
      <button class="flt ${sort === "year" ? "on" : ""}" data-ws="year">按年代</button>
      <button class="flt ${sort === "title" ? "on" : ""}" data-ws="title">按标题</button>`;

    // 登记卡
    const cards = list.map((w, i) => {
      const techCount = TECHS.filter(t => t.workId === w.id).length;
      const levels = (w.techLevels || []).map(l => LEVELS[l]).filter(Boolean);
      const lvBadges = levels.map(lv =>
        `<span class="wl-badge" style="--lvcolor:${lv.color}">${lv.badge}</span>`).join("");
      return `
      <a class="work-entry" href="#/work/${w.id}">
        <div class="we-top">
          <span class="we-no">NO.${String(i + 1).padStart(3, "0")}</span>
          <span class="we-year">${w.year}</span>
        </div>
        <h3>《${w.title}》</h3>
        <p class="we-creator">${w.creator} · ${w.media}</p>
        <p class="we-setting">${w.setting}</p>
        <div class="we-foot">
          <span class="we-levels">${lvBadges}</span>
          ${techCount
            ? `<span class="we-tech">深度条目 ${techCount}</span>`
            : `<span class="we-tech lite">登记卷</span>`}
        </div>
      </a>`;
    }).join("") || `<div class="empty">没有符合条件的世界观。</div>`;

    const relLink = `<a class="btn ghost rel-enter" href="#/relations">查看世界观关联网络 →</a>`;

    return `
      <section class="page-title">
        <h1>世界观总库</h1>
        <p>${WORKS.length} 个幻想宇宙的登记索引——从 ${oldest.year} 年的《${oldest.title}》，到 ${newest.year} 年的《${newest.title}》。</p>
        ${relLink}
      </section>

      <section class="filter-bar">
        <div class="filter-row">
          <label>媒介类型</label>
          <div class="chips">${chips}</div>
        </div>
        <div class="filter-row">
          <label>排序方式</label>
          <div class="chips">${sortBtns}</div>
        </div>
        <div class="filter-row search-row">
          <input id="wq" type="search" placeholder="搜索作品名 / 作者 / 导演…" value="${escapeHtml(query.q || "")}">
          <a class="btn reset" href="#/works">重置</a>
        </div>
      </section>

      <section class="results-head">
        <span>共 <strong>${list.length}</strong> 部</span>
        <span class="hint">点击卡片进入世界观档案</span>
      </section>

      <section class="works-grid">${cards}</section>
    `;
  }
};

// 事件委托：媒介 / 排序切换
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-wm],[data-ws]");
  if (!btn) return;
  if (!location.hash.startsWith("#/works")) return;
  const { query } = Router.parseHash();
  const qs = new URLSearchParams();
  if (btn.dataset.wm) {
    if (btn.dataset.wm !== "ALL") qs.set("media", btn.dataset.wm);
  } else if (query.media) {
    qs.set("media", query.media);
  }
  if (btn.dataset.ws) qs.set("sort", btn.dataset.ws);
  else if (query.sort) qs.set("sort", query.sort);
  if (query.q) qs.set("q", query.q);
  location.hash = "#/works" + (qs.toString() ? "?" + qs.toString() : "");
});

// 关键词搜索（输入防抖后跳转）
let wqTimer;
document.addEventListener("input", (e) => {
  if (e.target.id !== "wq") return;
  clearTimeout(wqTimer);
  wqTimer = setTimeout(() => {
    const { query } = Router.parseHash();
    const qs = new URLSearchParams();
    if (query.media) qs.set("media", query.media);
    if (query.sort) qs.set("sort", query.sort);
    if (e.target.value.trim()) qs.set("q", e.target.value.trim());
    location.hash = "#/works" + (qs.toString() ? "?" + qs.toString() : "");
  }, 400);
});
