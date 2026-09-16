// ============================================================
// 开发日志视图（#/log）
// 倒序展示历次版本迭代：版本号 / 日期 / 协作 AI / 标题 /
// 说明 / 要点，最新在前。
// ============================================================
const ChangelogView = {
  // 供路由调用的主渲染入口
  render() {
    return this.renderChangelog();
  },

  renderChangelog() {
    const entries = (typeof CHANGELOG !== "undefined") ? CHANGELOG : [];

    const list = entries.map(e => `
      <div class="log-entry">
        <div class="log-head">
          <span class="log-ver">${esc(e.version)}</span>
          <span class="log-date">${esc(e.date)}</span>
          <span class="log-ai">协作 AI · ${esc(e.ai)}</span>
        </div>
        <h2 class="log-title">${esc(e.title)}</h2>
        <p class="log-desc">${esc(e.desc)}</p>
        ${e.points && e.points.length ? `
        <ul class="log-points">
          ${e.points.map(p => `<li>${esc(p)}</li>`).join("")}
        </ul>` : ""}
      </div>`).join("") || '<div class="empty">还没有迭代记录。</div>';

    return `
      <section class="page-title">
        <h1>开发日志</h1>
        <p>按迭代倒序列出：版本号 / 日期 / 协作 AI / 标题 / 说明 / 要点。</p>
      </section>

      <section class="log-list">${list}</section>
    `;
  }
};
