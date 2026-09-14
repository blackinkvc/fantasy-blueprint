// ============================================================
// 奇幻世界观关联数据
// 奇幻作品之间真实的致敬 / 影响 / 同源谱系关系。
// type: "致敬" = from 明确致敬或受启发于 to（创作影响，含方向）
//       "谱系" = from 与 to 同属一个奇幻子类型家族（并列，无明确时序）
//       "母题" = 共享同一核心母题，互文而生
// 关系网图将每条边作无向处理（连线），线型按 type 区分。
// ============================================================

const RELATIONS = [
  // —— 神话：一切奇幻的源头 ——
  { from: "lord-of-rings", to: "mythology", type: "谱系" },
  { from: "harry-potter", to: "mythology", type: "谱系" },
  { from: "got", to: "mythology", type: "谱系" },
  { from: "dnd", to: "mythology", type: "母题" },
  { from: "warcraft", to: "mythology", type: "谱系" },
  { from: "elder-scrolls", to: "mythology", type: "谱系" },
  { from: "narnia", to: "mythology", type: "谱系" },
  { from: "witcher", to: "mythology", type: "谱系" },
  { from: "dragon-age", to: "mythology", type: "谱系" },
  { from: "final-fantasy", to: "mythology", type: "谱系" },
  { from: "dark-souls", to: "mythology", type: "谱系" },
  { from: "discworld", to: "mythology", type: "谱系" },
  { from: "earthsea", to: "mythology", type: "谱系" },
  { from: "lord-of-the-mysteries", to: "mythology", type: "谱系" },

  // —— 托尔金：现代史诗奇幻的奠基 ——
  { from: "harry-potter", to: "lord-of-rings", type: "致敬" },
  { from: "got", to: "lord-of-rings", type: "致敬" },
  { from: "witcher", to: "lord-of-rings", type: "谱系" },
  { from: "narnia", to: "lord-of-rings", type: "谱系" },
  { from: "earthsea", to: "lord-of-rings", type: "谱系" },
  { from: "warhammer", to: "lord-of-rings", type: "致敬" },
  { from: "dnd", to: "lord-of-rings", type: "致敬" },
  { from: "warcraft", to: "lord-of-rings", type: "致敬" },
  { from: "dark-souls", to: "lord-of-rings", type: "致敬" },
  { from: "dragon-age", to: "lord-of-rings", type: "谱系" },

  // —— 黑暗奇幻 /  grimdark 谱系 ——
  { from: "dark-souls", to: "warhammer", type: "谱系" },
  { from: "dragon-age", to: "got", type: "谱系" },
  { from: "witcher", to: "got", type: "母题" },
  { from: "lord-of-the-mysteries", to: "warhammer", type: "谱系" },
  { from: "lord-of-the-mysteries", to: "dark-souls", type: "母题" },

  // —— RPG 谱系（规则宇宙互通）——
  { from: "elder-scrolls", to: "dnd", type: "谱系" },
  { from: "warcraft", to: "dnd", type: "谱系" },
  { from: "final-fantasy", to: "dnd", type: "谱系" },
  { from: "final-fantasy", to: "warcraft", type: "谱系" },

  // —— 环境叙事 / 考据式世界 ——
  { from: "dark-souls", to: "elder-scrolls", type: "母题" },
  { from: "discworld", to: "lord-of-rings", type: "母题" },
  { from: "witcher", to: "earthsea", type: "谱系" }
];

// 确定性伪随机
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 力导向布局（Fruchterman-Reingold 简化版，固定 seed → 确定性）
function forceLayout(ids, edges, W, H, seed) {
  const rand = mulberry32(seed || 42);
  const pos = {};
  const n = ids.length;
  ids.forEach((id) => {
    const ang = (ids.indexOf(id) / n) * Math.PI * 2;
    const r = Math.min(W, H) * 0.36;
    pos[id] = {
      x: W / 2 + Math.cos(ang) * r + (rand() - 0.5) * 40,
      y: H / 2 + Math.sin(ang) * r + (rand() - 0.5) * 40
    };
  });
  const k = Math.sqrt((W * H) / n);
  const ITER = 380;
  for (let it = 0; it < ITER; it++) {
    const disp = {};
    ids.forEach(id => disp[id] = { x: 0, y: 0 });
    // 斥力
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const a = ids[i], b = ids[j];
        let dx = pos[a].x - pos[b].x, dy = pos[a].y - pos[b].y;
        let d = Math.hypot(dx, dy) || 0.01;
        const f = (k * k) / d;
        const ux = dx / d, uy = dy / d;
        disp[a].x += ux * f; disp[a].y += uy * f;
        disp[b].x -= ux * f; disp[b].y -= uy * f;
      }
    }
    // 引力（边）
    edges.forEach(e => {
      const a = e.from, b = e.to;
      if (!pos[a] || !pos[b]) return;
      let dx = pos[a].x - pos[b].x, dy = pos[a].y - pos[b].y;
      let d = Math.hypot(dx, dy) || 0.01;
      const f = (d - k * 1.1) * 0.08;
      const ux = dx / d, uy = dy / d;
      disp[a].x -= ux * f; disp[a].y -= uy * f;
      disp[b].x += ux * f; disp[b].y += uy * f;
    });
    // 位移 + 中心引力 + 边界
    const temp = Math.max(W * 0.04, 2);
    ids.forEach(id => {
      disp[id].x += (W / 2 - pos[id].x) * 0.012;
      disp[id].y += (H / 2 - pos[id].y) * 0.012;
      const len = Math.hypot(disp[id].x, disp[id].y) || 1;
      const step = Math.min(len, temp);
      pos[id].x += disp[id].x / len * step;
      pos[id].y += disp[id].y / len * step;
      pos[id].x = Math.max(36, Math.min(W - 36, pos[id].x));
      pos[id].y = Math.max(36, Math.min(H - 36, pos[id].y));
    });
  }
  return pos;
}

// 取某作品的全部关系（双向）
function getRelations(id) {
  const out = [], inc = [];
  RELATIONS.forEach(r => {
    if (r.from === id) out.push(r);
    if (r.to === id) inc.push(r);
  });
  return { out, inc };
}
