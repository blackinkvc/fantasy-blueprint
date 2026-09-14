// ============================================================
// 造物树可视化视图（重做版）
// 问题：原布局把全体造物按"依赖层数"铺成左右长条，但 200+ 无依赖的
//       孤立造物全堆在 layer 0 单列，SVG 高达两万余像素且层间纵向重叠，
//       适配后缩成微缩点，完全不可读。
// 新方案：① 先求依赖图的「连通分量」；② 每个分量内部做无重叠的分层 DAG；
//         ③ 把各分量像货架一样紧凑排布成网格。孤立造物不再撑高整图。
// 节点改为纸质底 + 墨边 + 分级色条，更像"思维导图"。
// ============================================================
const TT_NODE_W = 184;
const TT_NODE_H = 60;
const TT_GAP_X = 64;   // 层间水平间距
const TT_GAP_Y = 18;   // 同层节点垂直间距
const TT_PAD = 28;
const TT_PACK_X = 70;  // 分量之间水平留白
const TT_PACK_Y = 64;  // 分量之间垂直留白
const TT_ROW_W = 1500; // 货架目标行宽（超过则换行）

const TechTreeView = {
  state: { levels: [], domains: [], focus: "" },

  mount() {
    const c = document.getElementById("tree-canvas");
    if (!c) return;
    this.draw(c);
    const svg = c.querySelector("svg");
    if (svg) {
      try {
        const bb = svg.getBBox();
        const cw = c.clientWidth || 900, ch = c.clientHeight || 480;
        const s = Math.min(cw / (bb.width || 1), ch / (bb.height || 1), 1.6);
        c._transform = { scale: Math.max(s, 0.12), tx: 0, ty: 0 };
        this.applyTransform(c);
      } catch (e) { /* bbox 可能暂不可得，忽略 */ }
    }
  },

  render() {
    this.state = { levels: [], domains: [], focus: "" };
    const levelsFilter = Object.values(LEVELS)
      .sort((a, b) => a.order - b.order)
      .map(l => `<button class="flt tflt" data-lv="${l.key}">${l.badge}</button>`).join("");
    const domainFilter = Object.values(DOMAINS)
      .map(d => `<button class="flt tflt" data-dom="${d.key}">${d.icon}${d.label}</button>`).join("");

    // 世界观聚焦下拉（按系列分组）
    const workOpts = WORKS
      .filter(w => TECHS.some(t => t.workId === w.id))
      .sort((a, b) => a.title.localeCompare(b.title, "zh"))
      .map(w => `<option value="${w.id}">${w.title}</option>`).join("");

    return `
      <section class="page-title">
        <h1>造物树</h1>
        <p>依赖图按「连通分量」拆成若干棵小树：彼此无依赖关系的技术各成一支，有依赖者向左溯源、向右展开。墨色越深，离现实越远。</p>
      </section>

      ${ProgressCharts.overviewPanel()}

      <section class="tree-controls">
        <div class="filter-row"><label>聚焦世界观</label>
          <select id="tree-focus" class="tree-select">
            <option value="">全部（按连通分量排布）</option>
            ${workOpts}
          </select>
        </div>
        <div class="filter-row"><label>分级</label><div class="chips">${levelsFilter}</div></div>
        <div class="filter-row"><label>领域</label><div class="chips">${domainFilter}</div></div>
        <div class="tree-btns">
          <button class="btn" data-action="fit">适配全图</button>
          <button class="btn" data-action="zoom-in">＋</button>
          <button class="btn" data-action="zoom-out">－</button>
          <button class="btn" data-action="reset">重置</button>
        </div>
        <div class="legend">
          ${Object.values(LEVELS).sort((a, b) => a.order - b.order).map(l =>
            `<span class="leg"><i style="background:${l.color}"></i>${l.badge}</span>`).join("")}
        </div>
      </section>

      <section class="tree-canvas-wrap">
        <div class="tree-canvas" id="tree-canvas"></div>
      </section>
    `;
  },

  // 连通分量（无向）
  components(nodes) {
    const idSet = new Set(nodes.map(n => n.id));
    const adj = {};
    nodes.forEach(n => adj[n.id] = []);
    nodes.forEach(n => (n.dependencies || []).forEach(d => {
      if (idSet.has(d)) { adj[n.id].push(d); adj[d].push(n.id); }
    }));
    const seen = new Set();
    const comps = [];
    nodes.forEach(n => {
      if (seen.has(n.id)) return;
      const q = [n.id]; seen.add(n.id); const comp = [];
      while (q.length) {
        const cur = q.shift(); comp.push(cur);
        adj[cur].forEach(id => { if (!seen.has(id)) { seen.add(id); q.push(id); } });
      }
      comps.push(comp);
    });
    return comps;
  },

  // 单个分量内部的无重叠分层布局（层自顶向下堆叠，x 按层推进）
  layoutComponent(ids) {
    const map = {}; TECHS.forEach(t => map[t.id] = t);
    const nodes = ids.map(id => map[id]).filter(Boolean);
    const idSet = new Set(ids);
    const layer = {};
    const compute = (id, guard = new Set()) => {
      if (layer[id] !== undefined) return layer[id];
      if (guard.has(id)) return 0; guard.add(id);
      const deps = (map[id].dependencies || []).filter(d => idSet.has(d) && map[d]);
      if (!deps.length) { layer[id] = 0; return 0; }
      let m = -1;
      for (const d of deps) m = Math.max(m, compute(d, guard));
      layer[id] = m + 1; return layer[id];
    };
    nodes.forEach(n => compute(n.id));

    const groups = {};
    nodes.forEach(n => (groups[layer[n.id]] = groups[layer[n.id]] || []).push(n));
    const maxLayer = Math.max(0, ...Object.keys(groups).map(Number));

    const pos = {};
    let yCursor = 0;
    for (let l = 0; l <= maxLayer; l++) {
      const arr = groups[l] || [];
      const colH = arr.length * TT_NODE_H + (arr.length - 1) * TT_GAP_Y;
      arr.forEach((n, i) => {
        pos[n.id] = { x: l * (TT_NODE_W + TT_GAP_X), y: yCursor + i * (TT_NODE_H + TT_GAP_Y) };
      });
      yCursor += colH + TT_GAP_Y + 10;
    }
    const w = maxLayer * (TT_NODE_W + TT_GAP_X) + TT_NODE_W;
    const h = Math.max(0, yCursor - TT_GAP_Y - 10);
    return { pos, w, h, maxLayer };
  },

  // 货架式打包：把各分量排成多行
  pack(comps) {
    // 先算出每个分量的局部布局
    const cells = comps.map(ids => {
      const lay = this.layoutComponent(ids);
      return { ids, ...lay };
    });
    // 大分量优先（按面积），排得更紧凑
    cells.sort((a, b) => (b.w * b.h) - (a.w * a.h));
    const place = {};
    let x = TT_PAD, y = TT_PAD, rowH = 0, rowW = 0;
    cells.forEach(cell => {
      if (rowW + cell.w > TT_ROW_W && rowW > 0) {
        x = TT_PAD; y += rowH + TT_PACK_Y; rowW = 0; rowH = 0;
      }
      cell.ox = x; cell.oy = y;
      cell.ids.forEach(id => {
        const p = cell.pos[id];
        place[id] = { x: p.x + x, y: p.y + y };
      });
      x += cell.w + TT_PACK_X; rowW += cell.w + TT_PACK_X;
      rowH = Math.max(rowH, cell.h);
    });
    const totalW = Math.max(...cells.map(c => c.ox + c.w), TT_ROW_W) + TT_PAD;
    const totalH = Math.max(...cells.map(c => c.oy + c.h)) + TT_PAD;
    return { place, totalW, totalH };
  },

  draw(container) {
    const { levels, domains, focus } = this.state;
    let nodes = TECHS.filter(t =>
      (!levels.length || levels.includes(t.level)) &&
      (!domains.length || domains.includes(t.domain))
    );
    if (focus) {
      // 聚焦：取该世界观造物 + 其依赖（向上溯源一层）
      const own = new Set(TECHS.filter(t => t.workId === focus).map(t => t.id));
      const deps = new Set();
      TECHS.filter(t => t.workId === focus).forEach(t => (t.dependencies || []).forEach(d => deps.add(d)));
      nodes = TECHS.filter(t => own.has(t.id) || deps.has(t.id));
    }
    if (!nodes.length) { container.innerHTML = '<div class="empty">当前过滤条件下没有造物条目。</div>'; return; }

    const comps = this.components(nodes);
    const { place, totalW, totalH } = this.pack(comps);

    const idSet = new Set(nodes.map(n => n.id));
    const edges = [];
    nodes.forEach(n => (n.dependencies || []).forEach(d => {
      if (idSet.has(d) && place[d]) edges.push({ from: d, to: n.id });
    }));

    const W = totalW + TT_PAD, H = totalH + TT_PAD;

    const edgePaths = edges.map(e => {
      const a = place[e.from], b = place[e.to];
      if (!a || !b) return "";
      const x1 = a.x + TT_NODE_W, y1 = a.y + TT_NODE_H / 2;
      const x2 = b.x, y2 = b.y + TT_NODE_H / 2;
      const cx = (x1 + x2) / 2;
      return `<path d="M${x1},${y1} C${cx},${y1} ${cx},${y2} ${x2},${y2}" class="tree-edge" data-from="${e.from}" data-to="${e.to}"/>`;
    }).join("");

    const nodeEls = nodes.map(n => {
      const lv = LEVELS[n.level];
      const dom = DOMAINS[n.domain];
      const p = place[n.id];
      if (!p) return "";
      const name = n.name.length > 11 ? n.name.slice(0, 10) + "…" : n.name;
      return `
        <g class="tree-node" transform="translate(${p.x},${p.y})" data-id="${n.id}" style="cursor:pointer">
          <rect width="${TT_NODE_W}" height="${TT_NODE_H}" rx="3" fill="var(--paper)" stroke="#141414" stroke-width="1.4"/>
          <rect width="6" height="${TT_NODE_H}" rx="2" fill="${lv.color}"/>
          <text x="16" y="20" text-anchor="start" class="tn-flag">${lv.glyph} ${lv.key}</text>
          <text x="16" y="38" text-anchor="start" class="tn-name">${name}</text>
          <text x="16" y="52" text-anchor="start" class="tn-sub">${lv.badge} · ${dom.label}</text>
        </g>`;
    }).join("");

    container.innerHTML = `
      <svg id="tree-svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
        <g class="tree-edges">${edgePaths}</g>
        <g class="tree-nodes">${nodeEls}</g>
      </svg>`;

    // tooltip
    let tip = document.createElement("div");
    tip.className = "tree-tooltip";
    document.body.appendChild(tip);

    container.querySelectorAll(".tree-node").forEach(g => {
      const id = g.getAttribute("data-id");
      const t = TECHS.find(x => x.id === id);
      if (!t) return;
      g.addEventListener("mousemove", (e) => {
        const lv = LEVELS[t.level];
        tip.innerHTML = `<strong>${t.name}</strong><span class="tt-lv">${lv.badge}</span><p>${t.summary}</p>`;
        tip.style.display = "block";
        const r = container.getBoundingClientRect();
        tip.style.left = (e.clientX - r.left + 16) + "px";
        tip.style.top = (e.clientY - r.top + 16) + "px";
      });
      g.addEventListener("mouseleave", () => { tip.style.display = "none"; });
      g.addEventListener("click", () => { location.hash = "#/tech/" + id; });
    });

    container._transform = { scale: 1, tx: 0, ty: 0 };
  },

  applyTransform(container) {
    const svg = container.querySelector("svg");
    const t = container._transform;
    if (!svg || !t) return;
    svg.style.transformOrigin = "0 0";
    svg.style.transform = `translate(${t.tx}px,${t.ty}px) scale(${t.scale})`;
  }
};

// 事件委托：造物树控件与画布交互
document.addEventListener("click", (e) => {
  const treeCanvas = document.getElementById("tree-canvas");
  if (!treeCanvas) return;

  const tf = e.target.closest(".tflt");
  if (tf) {
    const isLv = tf.dataset.lv;
    const key = isLv ? "levels" : "domains";
    const val = isLv ? tf.dataset.lv : tf.dataset.dom;
    const arr = TechTreeView.state[key];
    if (arr.includes(val)) { TechTreeView.state[key] = arr.filter(x => x !== val); tf.classList.remove("on"); }
    else { TechTreeView.state[key] = [...arr, val]; tf.classList.add("on"); }
    TechTreeView.draw(treeCanvas);
    return;
  }

  const act = e.target.closest("[data-action]");
  if (act) {
    const a = act.dataset.action;
    const t = treeCanvas._transform || { scale: 1, tx: 0, ty: 0 };
    if (a === "fit") {
      const svg = treeCanvas.querySelector("svg");
      const cw = treeCanvas.clientWidth, ch = treeCanvas.clientHeight;
      let s = 0.12;
      try { const bb = svg.getBBox(); s = Math.min(cw / (bb.width || 1), ch / (bb.height || 1), 1.6); } catch (e) {}
      t.scale = Math.max(s, 0.12); t.tx = 0; t.ty = 0;
      treeCanvas._transform = t;
      TechTreeView.applyTransform(treeCanvas);
    } else if (a === "zoom-in") { t.scale = Math.min(t.scale * 1.2, 3); treeCanvas._transform = t; TechTreeView.applyTransform(treeCanvas); }
    else if (a === "zoom-out") { t.scale = Math.max(t.scale / 1.2, 0.1); treeCanvas._transform = t; TechTreeView.applyTransform(treeCanvas); }
    else if (a === "reset") { treeCanvas._transform = { scale: 1, tx: 0, ty: 0 }; TechTreeView.applyTransform(treeCanvas); }
    return;
  }
});

// 聚焦下拉
document.addEventListener("change", (e) => {
  if (e.target && e.target.id === "tree-focus") {
    const c = document.getElementById("tree-canvas");
    if (!c) return;
    TechTreeView.state.focus = e.target.value;
    TechTreeView.draw(c);
  }
});

// 滚轮缩放
document.addEventListener("wheel", (e) => {
  const c = document.getElementById("tree-canvas");
  if (!c || !c.contains(e.target)) return;
  if (e.target.closest(".tree-node")) return;
  e.preventDefault();
  const t = c._transform || { scale: 1, tx: 0, ty: 0 };
  const delta = e.deltaY < 0 ? 1.1 : 0.9;
  t.scale = Math.min(Math.max(t.scale * delta, 0.1), 3);
  c._transform = t;
  TechTreeView.applyTransform(c);
}, { passive: false });

// 拖拽平移
document.addEventListener("mousedown", (e) => {
  const c = document.getElementById("tree-canvas");
  if (!c || !c.contains(e.target)) return;
  if (e.target.closest(".tree-node")) return;
  const start = { x: e.clientX, y: e.clientY, tx: (c._transform || {}).tx || 0, ty: (c._transform || {}).ty || 0 };
  const move = (ev) => {
    c._transform = c._transform || { scale: 1, tx: 0, ty: 0 };
    c._transform.tx = start.tx + (ev.clientX - start.x);
    c._transform.ty = start.ty + (ev.clientY - start.y);
    TechTreeView.applyTransform(c);
  };
  const up = () => { document.removeEventListener("mousemove", move); document.removeEventListener("mouseup", up); };
  document.addEventListener("mousemove", move);
  document.addEventListener("mouseup", up);
});
