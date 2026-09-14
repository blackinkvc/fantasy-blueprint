// ============================================================
// 世界观简介页视图
// 作品设定 + 法则偏离点 + 该世界观造物列表(按分级分组)
// ============================================================
const WorkView = {
  render(id) {
    const w = WORKS.find(x => x.id === id);
    if (!w) return `<div class="not-found"><h1>未找到</h1><p>作品「${id}」不存在。</p><a class="btn" href="#/">返回首页</a></div>`;

    const techs = TECHS.filter(t => t.workId === w.id);
    const levelsSorted = Object.values(LEVELS).sort((a, b) => a.order - b.order);

    // 按分级分组的造物
    const grouped = levelsSorted.map(lv => {
      const items = techs.filter(t => t.level === lv.key);
      if (!items.length) return "";
      return `
        <div class="lv-group">
          <div class="lv-group-head" style="--lvcolor:${lv.color}">
            <span class="lv-dot"></span> ${lv.badge} (${items.length})
          </div>
          <div class="lv-group-items">
            ${items.map(t => {
              const dom = DOMAINS[t.domain];
              return `<a class="lv-item" href="#/tech/${t.id}">
                <strong>${t.name}</strong>
                <span class="muted">${t.summary}</span>
                <span class="dom-pill" style="--dcolor:${dom.color}">${dom.icon}${dom.label}</span>
              </a>`;
            }).join("")}
          </div>
        </div>`;
    }).join("");

    // 世界观覆盖等级范围徽章
    const levelBadges = w.techLevels.map(l => {
      const lv = LEVELS[l];
      return `<span class="lv-badge" style="--lvcolor:${lv.color}">${lv.badge}</span>`;
    }).join(" ");

    const divergences = w.physicalDivergences.map(d =>
      `<li class="div-item">${d}</li>`).join("");

    // 代表造物：若与造物库条目 id 对应则作链接，否则为登记名词标签
    const repTechs = (w.representativeTechs || []).map(rt => {
      const t = TECHS.find(x => x.id === rt);
      return t
        ? `<a class="chip-link" href="#/tech/${t.id}" style="--lvcolor:${LEVELS[t.level].color}">${t.name}</a>`
        : `<span class="tag">${rt}</span>`;
    }).join(" ");

    const deepCount = TECHS.filter(t => t.workId === w.id).length;

    // 系列构成（同系列多部作品聚合呈现）
    const seriesHtml = w.series ? `
      <section class="block">
        <h2>系列构成</h2>
        <p class="muted note">本条目以「${w.series.name}」系列整体收录，同一系列的多部作品归于一卷。</p>
        <ul class="series-list">
          ${w.series.members.map(m => `<li>${m}</li>`).join("")}
        </ul>
      </section>` : "";

    // 影响与致敬（双向检索关系网）
    const rel = getRelations(w.id);
    const linkChip = (rid, type, dir) => {
      const t = WORKS.find(x => x.id === rid);
      return `<a class="chip-link rel-chip" href="#/work/${rid}">
        <span class="rel-title">${t ? t.title : rid}</span>
        <span class="rel-type ${dir}">${type}</span>
      </a>`;
    };
    const relOut = rel.out.map(r => linkChip(r.to, r.type, "out"));
    const relInc = rel.inc.map(r => linkChip(r.from, r.type, "in"));
    const relationsHtml = (relOut.length || relInc.length) ? `
      <section class="block">
        <h2>影响与致敬</h2>
        <p class="muted note">奇幻作品在彼此之间投下长长的影子。下列关系来自真实的创作谱系与母题传承。</p>
        ${relOut.length ? `<p class="rel-line"><span class="rel-dir">本作致敬 / 受启发于</span>${relOut.join("")}</p>` : ""}
        ${relInc.length ? `<p class="rel-line"><span class="rel-dir">本作影响 / 被致敬于</span>${relInc.join("")}</p>` : ""}
      </section>` : "";

    const techChainHtml = `
      <section class="block">
        <h2>造物演进逻辑链</h2>
        <p class="muted note">以依赖关系还原该世界观的技术演进因果：实线指向下游造物，表示「先有前者，方有后者」；灰色虚框为来自其他世界观的外部前提。</p>
        ${renderTechChain(w.id)}
      </section>`;

    return `
      <article class="work-detail">
        <nav class="breadcrumb"><a href="#/">首页</a> / <a href="#/works">世界观总库</a> / ${w.title}</nav>

        <header class="work-head">
          <h1>《${w.title}》</h1>
          <p class="meta">${w.creator} · ${w.media}${w.year ? " · " + w.year + " 年" : ""} · ${w.era}</p>
          <div class="level-badges">${levelBadges}</div>
        </header>

        <section class="work-split">
          <div class="work-split-main">
            <section class="block">
              <h2>世界观设定</h2>
              <p class="body-text">${w.setting}</p>
            </section>

            <section class="block">
              <h2>法则偏离点</h2>
              <p class="muted note">该世界观中与现实法则明显偏离的设定，是判断其造物"只能在世界观内实现"的依据。</p>
              <ul class="div-list">${divergences}</ul>
            </section>
          </div>

          <aside class="work-split-aside">
            <figure class="davinci-plate">
              <img src="${DaVinciImg.forWork(w.id)}" alt="《${w.title}》古卷铭图">
              <figcaption>铭图 · 古卷手稿 · 与《${w.title}》的主导造物分支相应</figcaption>
            </figure>
          </aside>
        </section>

        ${seriesHtml}

        <section class="block">
          <h2>造物元素表</h2>
          <p class="muted note">普世模板 · 六大分支，自下而上由现实基线至世界观限定。<strong>实心</strong>为该文明已掌握，<strong>虚线</strong>为未点亮；节点右上角罗马数字为实现等级；双线边框与数字徽章表示挂有本作造物卷宗（可点击）；右列 ★ 为该世界观独有的奇点造物。</p>
          ${WorkTreeView.render(w.id)}
        </section>

        ${techChainHtml}

        ${relationsHtml}

        <section class="block">
          <h2>本世界观造物（${deepCount} 项）</h2>
          ${grouped || (`
            <div class="chips-wrap">${repTechs}</div>
            <p class="muted note" style="margin-top:12px">本卷为登记条目：已登记代表造物如上。原理逐条分析、实现路径与依赖链，优先覆盖已有深度条目的核心卷宗，其余将陆续展开。</p>
            <a class="btn ghost" href="#/category">浏览已有深度条目 →</a>
          `)}
        </section>
      </article>
    `;
  }
};

// ============================================================
// 造物演进逻辑链视图
// 以该世界观造物条目的 dependencies 字段构建因果 DAG：
// 前置造物 → 后续造物（「先有前者，方有后者」）。
// 内部依赖为实线；来自其他世界观的前提为灰色虚框节点。
// 按最长依赖路径分层（根在上），同层水平均布。
// ============================================================
function renderTechChain(workId) {
  const ownTechs = TECHS.filter(t => t.workId === workId);
  if (!ownTechs.length) {
    return `<p class="muted note">本卷为登记条目，造物条目尚在补充，暂无法绘制技术演进逻辑链。</p>`;
  }

  // 收集节点：本世界观造物 + 跨作品的外部前提
  const nodeMap = {};
  ownTechs.forEach(t => {
    nodeMap[t.id] = { id: t.id, name: t.name, level: t.level, domain: t.domain, workId: t.workId, external: false };
  });
  const edges = [];
  for (const t of ownTechs) {
    for (const d of (t.dependencies || [])) {
      const dt = TECHS.find(x => x.id === d);
      if (!dt) continue;
      if (dt.workId !== workId) {
        nodeMap[d] = nodeMap[d] || { id: d, name: dt.name, level: dt.level, domain: dt.domain, workId: dt.workId, external: true };
      }
      edges.push({ from: d, to: t.id });
    }
  }

  const ids = Object.keys(nodeMap);

  // 分层：最长依赖路径（根在上）。防环。
  const layerMemo = {};
  function layerOf(id, stack) {
    if (layerMemo[id] !== undefined) return layerMemo[id];
    stack = stack || new Set();
    if (stack.has(id)) return 0;
    stack.add(id);
    layerMemo[id] = 0;
    let l = 0;
    for (const e of edges) {
      if (e.to === id && nodeMap[e.from]) l = Math.max(l, layerOf(e.from, stack) + 1);
    }
    layerMemo[id] = l;
    return l;
  }
  ids.forEach(id => layerOf(id));

  const layers = {};
  ids.forEach(id => { const l = layerMemo[id]; (layers[l] = layers[l] || []).push(id); });
  const maxLayer = Math.max(...Object.keys(layers).map(Number));
  const maxCount = Math.max(...Object.values(layers).map(a => a.length), 1);

  // 布局
  const COL_W = 182, NODE_W = 158, NODE_H = 60, ROW_H = 134, PAD = 26;
  const VB_W = Math.max(maxCount * COL_W, 320);
  const VB_H = (maxLayer + 1) * ROW_H + PAD;
  const pos = {};
  Object.keys(layers).forEach(l => {
    const arr = layers[l], n = arr.length;
    const startX = (VB_W - n * COL_W) / 2;
    arr.forEach((id, i) => { pos[id] = { x: startX + i * COL_W + (COL_W - NODE_W) / 2, y: PAD + Number(l) * ROW_H }; });
  });

  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const clip = (s, n) => s.length > n ? s.slice(0, n - 1) + "…" : s;

  // 边
  let edgeSvg = "";
  for (const e of edges) {
    const a = pos[e.from], b = pos[e.to];
    if (!a || !b) continue;
    const x1 = a.x + NODE_W / 2, y1 = a.y + NODE_H;
    const x2 = b.x + NODE_W / 2, y2 = b.y;
    const my = (y1 + y2) / 2;
    const ext = nodeMap[e.from].external;
    edgeSvg += `<path d="M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}" fill="none" stroke="${ext ? '#a09890' : '#141414'}" stroke-width="1.3" ${ext ? 'stroke-dasharray="4,3"' : ''} marker-end="url(#tca-arrow)"/>`;
  }

  // 节点
  let nodeSvg = "";
  ids.forEach(id => {
    const n = nodeMap[id];
    const x = pos[id].x, y = pos[id].y;
    const dom = DOMAINS[n.domain];
    const lv = LEVELS[n.level];
    const ext = n.external;
    const fill = ext ? "none" : "#141414";
    const stroke = ext ? "#a09890" : "#141414";
    const txtFill = ext ? "#a09890" : "#f6f2e7";
    const fromTitle = ext ? ((WORKS.find(w => w.id === n.workId) || {}).title || n.workId) : "";
    const title = esc(n.name + (ext ? "\n外部前提 · 来自《" + fromTitle + "》" : "\n等级 " + (lv ? lv.badge : "") + " · 点击查看卷宗"));
    let body = "";
    if (ext) body += `<rect x="${x - 3}" y="${y - 3}" width="${NODE_W + 6}" height="${NODE_H + 6}" fill="none" stroke="#a09890" stroke-width="0.8" stroke-dasharray="3,3"/>`;
    body += `<rect x="${x}" y="${y}" width="${NODE_W}" height="${NODE_H}" fill="${fill}" stroke="${stroke}" stroke-width="1.2" rx="1.5"/>
      <circle cx="${x + 13}" cy="${y + 14}" r="4" fill="${ext ? '#a09890' : dom.color}"/>
      <text x="${x + 24}" y="${y + 18}" font-size="12.5" fill="${txtFill}" letter-spacing="0.3">${esc(clip(n.name, 9))}</text>
      ${lv ? `<text x="${x + NODE_W - 7}" y="${y + 16}" text-anchor="end" font-size="9" fill="${ext ? '#a09890' : '#bdb5a8'}">${lv.badge}</text>` : ""}
      ${ext
        ? `<text x="${x + NODE_W / 2}" y="${y + NODE_H - 9}" text-anchor="middle" font-size="8" fill="#a09890">外·《${esc(clip(fromTitle, 6))}》</text>`
        : (dom ? `<text x="${x + 13}" y="${y + NODE_H - 10}" font-size="8" fill="#bdb5a8">${esc(dom.icon)} ${esc(clip(dom.label, 4))}</text>` : "")}`;
    nodeSvg += ext
      ? `<g><title>${title}</title>${body}</g>`
      : `<a href="#/tech/${id}"><title>${title}</title>${body}</a>`;
  });

  const wTitle = (WORKS.find(x => x.id === workId) || {}).title || '';
  return `
    <div class="skill-tree-wrap">
      <svg viewBox="0 0 ${VB_W} ${VB_H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="《${esc(wTitle)}》造物演进逻辑链" class="skill-tree-svg tech-chain-svg">
        <defs><marker id="tca-arrow" markerWidth="10" markerHeight="10" refX="7.5" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#141414"/></marker></defs>
        ${edgeSvg}
        ${nodeSvg}
      </svg>
    </div>`;
}
