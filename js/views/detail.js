// ============================================================
// 造物条目详情页视图
// 头部信息 + 设定 + 依赖关系 + 相关条目
// ============================================================
const DetailView = {
  render(id) {
    const t = TECHS.find(x => x.id === id);
    if (!t) return `<div class="not-found"><h1>未找到</h1><p>造物条目「${id}」不存在。</p><a class="btn" href="#/">返回首页</a></div>`;

    const dom = DOMAINS[t.domain];
    const work = WORKS.find(w => w.id === t.workId);

    // 依赖前置
    const deps = (t.dependencies || []).map(did => {
      const d = TECHS.find(x => x.id === did);
      return d ? `<a class="dep-link" href="#/tech/${d.id}" data-tech-card="${d.id}">${d.name}</a>` : `<span class="dep-link dead">${did}</span>`;
    }).join(" ") || '<span class="muted">无前置依赖（源头概念）</span>';

    // 被依赖（谁需要本造物）
    const dependents = TECHS.filter(x => (x.dependencies || []).includes(t.id))
      .map(d => `<a class="dep-link" href="#/tech/${d.id}" data-tech-card="${d.id}">${d.name}</a>`).join(" ") || '<span class="muted">暂无下游概念</span>';

    // 相关条目：同世界观优先，其次同领域
    const sameWork = TECHS.filter(x => x.id !== t.id && x.workId === t.workId);
    const sameDomain = TECHS.filter(x => x.id !== t.id && x.workId !== t.workId && x.domain === t.domain);
    const related = sameWork.concat(sameDomain).slice(0, 8).map(x =>
      `<a class="chip-link" href="#/tech/${x.id}" data-tech-card="${x.id}">${x.name}</a>`
    ).join("");

    return `
      <article class="detail">
        <nav class="breadcrumb"><a href="#/">首页</a> / <a href="#/category">检索</a> / <a href="#/work/${t.workId}">《${work ? work.title : t.workId}》</a></nav>

        <header class="detail-head">
          <div class="dh-top">
            <div>
              <h1>${t.name}</h1>
              ${t.aliases.length ? `<p class="aliases">别名：${t.aliases.join(" / ")}</p>` : ""}
            </div>
          </div>
          <p class="summary">${t.summary}</p>
          <div class="dh-meta">
            <span class="meta-item">作品：<a href="#/work/${t.workId}">《${work ? work.title : t.workId}》</a></span>
            <span class="meta-item" style="--dcolor:${dom.color}">领域：${dom.icon} ${dom.label}</span>
          </div>
        </header>

        <section class="block">
          <h2>作品内设定</h2>
          <p class="body-text">${t.description}</p>
          ${t.tags.length ? `<div class="chips-wrap" style="margin-top:14px">${t.tags.map(x => `<span class="tag">${x}</span>`).join("")}</div>` : ""}
        </section>

        <section class="block deps">
          <div class="dep-col">
            <h3>依赖前置</h3>
            <div class="deps-wrap">${deps}</div>
          </div>
          <div class="dep-col">
            <h3>被依赖</h3>
            <div class="deps-wrap">${dependents}</div>
          </div>
        </section>

        <section class="block">
          <h2>相关条目</h2>
          <div class="chips-wrap">${related}</div>
        </section>
      </article>
    `;
  }
};