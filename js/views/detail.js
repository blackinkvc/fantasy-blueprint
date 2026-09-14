// ============================================================
// 造物条目详情页视图
// 头部信息 + 设定 + 原理分析表 + 实现路径时间线 + SOP + 依赖关系 + 相关条目
// ============================================================
const DetailView = {
  render(id) {
    const t = TECHS.find(x => x.id === id);
    if (!t) return `<div class="not-found"><h1>未找到</h1><p>造物条目「${id}」不存在。</p><a class="btn" href="#/">返回首页</a></div>`;

    const lv = LEVELS[t.level];
    const dom = DOMAINS[t.domain];
    const work = WORKS.find(w => w.id === t.workId);

    // 原理分析表
    const verdictMap = {
      achieved:   { label: "已实现", color: "#000000", icon: "●" },
      breakthrough: { label: "需突破", color: "#555555", icon: "▲" },
      violated:   { label: "违反法则", color: "#000000", icon: "✕" }
    };
    const fpRows = t.firstPrinciples.map(fp => {
      const v = verdictMap[fp.verdict] || verdictMap.breakthrough;
      return `
        <tr>
          <td>${fp.principle}</td>
          <td><span class="verdict" style="color:${v.color}">${v.icon} ${v.label}</span></td>
          <td>${fp.note}</td>
        </tr>`;
    }).join("");

    // 实现路径时间线
    const pathItems = t.implementation.path.map((step, i) =>
      `<li class="tl-item"><span class="tl-num">${i + 1}</span><span class="tl-text">${step}</span></li>`
    ).join("");

    // 本阶段贯彻的方法论（据 sopStage 前缀映射）
    const stageCode = ((t.implementation.sopStage || "").match(/^SOP-\d/) || [])[0];
    const methodChips = ((stageCode && STAGE_METHODS[stageCode]) || [])
      .map(k => getMethod(k)).filter(Boolean)
      .map(m => `<a class="m-chip" href="#/sop?m=${m.key}">${m.code} ${m.label}</a>`).join("");

    // 依赖前置
    const deps = (t.dependencies || []).map(did => {
      const d = TECHS.find(x => x.id === did);
      return d ? `<a class="dep-link" href="#/tech/${d.id}">${d.name}</a>` : `<span class="dep-link dead">${did}</span>`;
    }).join(" ") || '<span class="muted">无前置依赖（源头技术）</span>';

    // 被依赖（谁需要本造物）
    const dependents = TECHS.filter(x => (x.dependencies || []).includes(t.id))
      .map(d => `<a class="dep-link" href="#/tech/${d.id}">${d.name}</a>`).join(" ") || '<span class="muted">暂无下游技术</span>';

    // 相关条目
    const related = TECHS.filter(x => x.id !== t.id && (x.workId === t.workId || x.domain === t.domain || x.level === t.level))
      .slice(0, 6).map(x => {
        const xlv = LEVELS[x.level];
        return `<a class="chip-link" href="#/tech/${x.id}" style="--lvcolor:${xlv.color}">${x.name}</a>`;
      }).join("");

    return `
      <article class="detail">
        <nav class="breadcrumb"><a href="#/">首页</a> / <a href="#/category">检索</a> / <a href="#/work/${t.workId}">《${work ? work.title : t.workId}》</a></nav>

        <header class="detail-head" style="--lvcolor:${lv.color}">
          <div class="dh-top">
            <div>
              <h1>${t.name}</h1>
              ${t.aliases.length ? `<p class="aliases">别名：${t.aliases.join(" / ")}</p>` : ""}
            </div>
            <div class="dh-badges">
              <span class="lv-badge big" style="--lvcolor:${lv.color}">${lv.badge}</span>
            </div>
          </div>
          <p class="summary">${t.summary}</p>
          <div class="dh-meta">
            <span class="meta-item">作品：<a href="#/work/${t.workId}">《${work ? work.title : t.workId}》</a></span>
            <span class="meta-item" style="--dcolor:${dom.color}">领域：${dom.icon} ${dom.label}</span>
            <span class="meta-item">分级：${lv.key} · ${lv.label}</span>
          </div>
        </header>

        <section class="block tech-progress">
          <h2>实现进度</h2>
          ${ProgressCharts.techMeter(t)}
        </section>

        <figure class="davinci-plate">
          <img src="${DaVinciImg.forTech(t)}" alt="${t.name} 古卷铭图">
          <figcaption>铭图 · 古卷手稿 · ${dom.label}领域 ${lv.label}造物示意</figcaption>
        </figure>

        <section class="block">
          <h2>作品内设定</h2>
          <p class="body-text">${t.description}</p>
        </section>

        <section class="block">
          <h2>原理分析</h2>
          <p class="muted note">逐条核对底层自然法则，判断该造物是符合、需要突破、还是违反已知法则。</p>
          <table class="fp-table">
            <thead><tr><th>原理 / 机制</th><th>判定</th><th>说明</th></tr></thead>
            <tbody>${fpRows}</tbody>
          </table>
        </section>

        <section class="block">
          <h2>实现路径</h2>
          <p class="body-text">现状：${t.implementation.current}</p>
          <ul class="timeline">${pathItems}</ul>
          ${t.implementation.blockers.length ? `<div class="blockers"><strong>关键瓶颈：</strong>${t.implementation.blockers.map(b => `<span class="tag danger">${b}</span>`).join(" ")}</div>` : ""}
        </section>

        <section class="block">
          <h2>对应研发阶段</h2>
          <p class="sop-tag">${t.implementation.sopStage}</p>
          ${methodChips ? `<div class="sop-methods"><span class="sm-label">本阶段贯彻</span>${methodChips}</div>` : ""}
          <a class="btn ghost" href="#/sop">查看完整研发 SOP →</a>
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
