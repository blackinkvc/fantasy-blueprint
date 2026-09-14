// ============================================================
// 世界观关联网络页（独立页面 #/relations）— 重做版
// 把作品之间真实的致敬 / 影响 / 谱系 / 母题关系，以力导向布局呈现。
// 改进点：
//   1) 力导向加「碰撞松弛」+ 末尾按包围盒缩放适配，节点不再重叠、铺满画布；
//   2) 节点按「关联度数」定大小，按「社群（连通分量）」着色，结构一目了然；
//   3) 边改为贝塞尔曲线，按类型用实线/点线/虚线区分；
//   4) 标签显示完整作品名（带纸色描边 halo），悬停高亮邻居、点击进入档案。
// ============================================================
const RelationsView = {
  _cache: null,
  _nodes: null,
  _comms: null,
  _deg: null,

  render() {
    this._ensureLayout();
    const _titleOf = id => { const w = WORKS.find(x => x.id === id); return w ? w.title : id; };
    const W = 1200, H = 760;

    const typeClass = t => t === "致敬" ? "rel-edge--tribute" : (t === "谱系" ? "rel-edge--lineage" : "rel-edge--motif");
    const edgeEls = RELATIONS.map((r, i) => {
      const a = this._cache[r.from], b = this._cache[r.to];
      if (!a || !b) return "";
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      // 法向微偏移，让双向/多线不重叠
      const nx = -(b.y - a.y), ny = (b.x - a.x);
      const nl = Math.hypot(nx, ny) || 1;
      const off = ((i % 3) - 1) * 14;
      const cx = mx + nx / nl * off, cy = my + ny / nl * off;
      return `<path class="rel-edge ${typeClass(r.type)}" data-from="${r.from}" data-to="${r.to}" d="M${a.x.toFixed(1)},${a.y.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${b.x.toFixed(1)},${b.y.toFixed(1)}"/>`;
    }).join("");

    const nodeEls = this._nodes.map(id => {
      const p = this._cache[id];
      const title = _titleOf(id);
      const deg = this._deg[id] || 0;
      const r = 7 + Math.min(deg, 9) * 1.7;
      const col = COMM_COLORS[this._comms[id] % COMM_COLORS.length];
      const hub = deg >= 4 ? "hub" : "";
      return `<g class="rel-node ${hub}" data-rel="${id}" transform="translate(${p.x.toFixed(1)},${p.y.toFixed(1)})">
        <circle class="rel-dot" r="${r.toFixed(1)}" fill="${deg >= 4 ? '#141414' : 'var(--paper)'}" stroke="${col}" stroke-width="2.2"/>
        <text class="rel-label" y="${(r + 12).toFixed(1)}">${title}</text>
        <title>${title} · ${deg} 条关联</title>
      </g>`;
    }).join("");

    const graph = `<svg viewBox="0 0 ${W} ${H}" class="rel-graph-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="世界观关联网络">${edgeEls}${nodeEls}</svg>`;

    const legend = `
      <div class="rel-legend">
        <span><i class="ln solid"></i>致敬 / 影响</span>
        <span><i class="ln dot"></i>谱系</span>
        <span><i class="ln dash"></i>母题</span>
        <span class="rel-size-note">○ 越大 = 关联越多</span>
        <span class="rel-count">${this._nodes.length} 节点 · ${RELATIONS.length} 关系 · ${new Set(Object.values(this._comms)).size} 个社群</span>
      </div>`;

    return `
      <section class="page-title">
        <h1>世界观关联网络</h1>
        <p>奇幻作品在彼此之间投下长长的影子。本图汇集了相互致敬、影响、共享母题的宇宙——节点大小代表关联数量，颜色区分不同谱系社群，点击任一节点进入对应档案。</p>
      </section>

      <section class="block rel-graph-block">
        <p class="muted note">实线为「致敬 / 影响」，点线为「谱系」（同属一类），虚线为「母题」（互文而生）。布局由力导向算法确定，连线无方向。</p>
        <div class="rel-graph-wrap">${graph}</div>
        ${legend}
      </section>
    `;
  },

  // 在视图挂载后绑定交互（app.js 调用）
  mount() {
    const wrap = document.querySelector(".rel-graph-svg");
    if (!wrap) return;
    const nodes = wrap.querySelectorAll(".rel-node");
    const edges = wrap.querySelectorAll(".rel-edge");
    nodes.forEach(g => {
      const id = g.getAttribute("data-rel");
      g.addEventListener("mouseenter", () => {
        wrap.classList.add("rel-hover");
        edges.forEach(e => {
          const on = e.dataset.from === id || e.dataset.to === id;
          e.classList.toggle("on", on);
        });
        nodes.forEach(n => {
          const nid = n.getAttribute("data-rel");
          const near = nid === id ||
            [...edges].some(e => (e.dataset.from === id && e.dataset.to === nid) || (e.dataset.to === id && e.dataset.from === nid));
          n.classList.toggle("dim", !near);
          n.classList.toggle("hot", nid === id);
        });
      });
      g.addEventListener("mouseleave", () => {
        wrap.classList.remove("rel-hover");
        edges.forEach(e => e.classList.remove("on"));
        nodes.forEach(n => n.classList.remove("dim", "hot"));
      });
      g.addEventListener("click", () => { location.hash = "#/work/" + id; });
    });
  },

  _ensureLayout() {
    if (this._cache) return;
    const rnIds = [...new Set(RELATIONS.flatMap(r => [r.from, r.to]))];
    const { pos, comms, deg } = forceLayoutRel(rnIds, RELATIONS, 1200, 760, 7);
    this._cache = pos;
    this._nodes = rnIds;
    this._comms = comms;
    this._deg = deg;
  }
};

const COMM_COLORS = ['#141414', '#4a453d', '#6f685b', '#938b7b', '#7a5c3e', '#5b6b63', '#9a6b4f'];

// 确定性伪随机
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 力导向布局（Fruchterman-Reingold 简化 + 碰撞松弛 + 缩放适配）
function forceLayoutRel(ids, edges, W, H, seed) {
  const rand = mulberry32(seed || 7);
  const n = ids.length;
  // 度数
  const deg = {};
  ids.forEach(id => deg[id] = 0);
  edges.forEach(e => { if (deg[e.from] !== undefined) deg[e.from]++; if (deg[e.to] !== undefined) deg[e.to]++; });

  // 社群（无向连通分量）
  const adj = {}; ids.forEach(id => adj[id] = []);
  edges.forEach(e => { if (adj[e.from] && adj[e.to]) { adj[e.from].push(e.to); adj[e.to].push(e.from); } });
  const comms = {}; let ci = 0;
  const seen = new Set();
  ids.forEach(id => {
    if (seen.has(id)) return;
    const q = [id]; seen.add(id); comms[id] = ci;
    while (q.length) { const c = q.shift(); adj[c].forEach(x => { if (!seen.has(x)) { seen.add(x); comms[x] = ci; q.push(x); } }); }
    ci++;
  });

  // 初始化：圆上 + 抖动
  const pos = {};
  ids.forEach((id, i) => {
    const ang = (i / n) * Math.PI * 2;
    pos[id] = { x: Math.cos(ang) * 0.45 + (rand() - 0.5) * 0.12, y: Math.sin(ang) * 0.45 + (rand() - 0.5) * 0.12 };
  });

  const k = 1 / Math.sqrt(n);
  const ITER = 480;
  for (let it = 0; it < ITER; it++) {
    const disp = {}; ids.forEach(id => disp[id] = { x: 0, y: 0 });
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const a = ids[i], b = ids[j];
        let dx = pos[a].x - pos[b].x, dy = pos[a].y - pos[b].y;
        let d = Math.hypot(dx, dy) || 1e-4;
        const f = (k * k) / d; const ux = dx / d, uy = dy / d;
        disp[a].x += ux * f; disp[a].y += uy * f;
        disp[b].x -= ux * f; disp[b].y -= uy * f;
      }
    }
    edges.forEach(e => {
      const a = pos[e.from], b = pos[e.to]; if (!a || !b) return;
      let dx = a.x - b.x, dy = a.y - b.y;
      let d = Math.hypot(dx, dy) || 1e-4;
      const f = (d * d) / k; const ux = dx / d, uy = dy / d;
      disp[e.from].x -= ux * f; disp[e.from].y -= uy * f;
      disp[e.to].x += ux * f; disp[e.to].y += uy * f;
    });
    const temp = Math.max(0.004, 0.09 * (1 - it / ITER));
    ids.forEach(id => {
      disp[id].x += -pos[id].x * 0.02;
      disp[id].y += -pos[id].y * 0.02;
      const len = Math.hypot(disp[id].x, disp[id].y) || 1e-4;
      const step = Math.min(len, temp);
      pos[id].x += disp[id].x / len * step;
      pos[id].y += disp[id].y / len * step;
    });
  }

  // 缩放适配到 W×H（含 padding）
  const pad = 46;
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  ids.forEach(id => { minX = Math.min(minX, pos[id].x); maxX = Math.max(maxX, pos[id].x); minY = Math.min(minY, pos[id].y); maxY = Math.max(maxY, pos[id].y); });
  const bw = (maxX - minX) || 1, bh = (maxY - minY) || 1;
  const s = Math.min((W - pad * 2) / bw, (H - pad * 2) / bh);
  const out = {};
  ids.forEach(id => {
    out[id] = { x: pad + (pos[id].x - minX) * s, y: pad + (pos[id].y - minY) * s };
  });

  // 像素空间碰撞松弛：用真实节点半径，彻底分离过近节点
  const radii = {}; ids.forEach(id => radii[id] = 7 + Math.min(deg[id] || 0, 9) * 1.7);
  const GAP = 6;
  for (let pass = 0; pass < 200; pass++) {
    let moved = false;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const a = ids[i], b = ids[j];
        let dx = out[a].x - out[b].x, dy = out[a].y - out[b].y;
        let d = Math.hypot(dx, dy) || 1e-4;
        const min = radii[a] + radii[b] + GAP;
        if (d < min) {
          const push = (min - d) / 2 + 1e-3; const ux = dx / d, uy = dy / d;
          out[a].x += ux * push; out[a].y += uy * push;
          out[b].x -= ux * push; out[b].y -= uy * push;
          out[a].x = Math.max(pad * 0.4, Math.min(W - pad * 0.4, out[a].x));
          out[a].y = Math.max(pad * 0.4, Math.min(H - pad * 0.4, out[a].y));
          out[b].x = Math.max(pad * 0.4, Math.min(W - pad * 0.4, out[b].x));
          out[b].y = Math.max(pad * 0.4, Math.min(H - pad * 0.4, out[b].y));
          moved = true;
        }
      }
    }
    if (!moved) break;
  }
  return { pos: out, comms, deg };
}
