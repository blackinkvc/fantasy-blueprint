// ============================================================
// 实现进度图表（纯 SVG，零依赖，羊皮卷宗风）
// 数据全部实时由 TECHS / LEVELS / DOMAINS 推导
// 三张图：
//   A. 分级分布柱状图  —— 全量造物在各实现层级的数量分布
//   B. 分领域堆叠条    —— 各领域造物在五级上的横向构成
//   C. 单条实现梯度    —— 某造物处于 L1~L5 可现实性阶梯的位置
// 注：图表配色采用「越接近现实越浅、越不可实现越浓」的石青→奥术斜坡，
//     与全站「墨色越浓越远」的隐喻一致；与 LEVELS.color 区分（后者用于徽章文字）。
// ============================================================

// 图表专用斜坡（L1→L5 由浅石青到浓奥术虚空）
const PROGRESS_PALETTE = {
  "L1": "#b9b09a",
  "L2": "#8f8674",
  "L3": "#6a6076",
  "L4": "#4a4260",
  "L5": "#2a2348"
};

const ProgressCharts = {
  // 统计：每个层级的数量
  _levelCounts() {
    const c = { L1: 0, L2: 0, L3: 0, L4: 0, L5: 0 };
    TECHS.forEach(t => { if (c.hasOwnProperty(t.level)) c[t.level]++; });
    return c;
  },

  // 统计：每个领域在各层级的数量
  _domainMatrix() {
    const matrix = {};
    Object.keys(DOMAINS).forEach(k => {
      matrix[k] = { L1: 0, L2: 0, L3: 0, L4: 0, L5: 0, total: 0 };
    });
    TECHS.forEach(t => {
      if (matrix[t.domain]) { matrix[t.domain][t.level]++; matrix[t.domain].total++; }
    });
    return matrix;
  },

  // ---------- 图 A：分级分布柱状图 ----------
  levelBars() {
    const counts = this._levelCounts();
    const levels = Object.values(LEVELS).sort((a, b) => a.order - b.order);
    const total = TECHS.length || 1;
    const W = 600, padL = 40, padR = 20, padT = 30, padB = 70;
    const plotW = W - padL - padR;
    const plotH = 220;
    const maxC = Math.max(...levels.map(l => counts[l.key]), 1);
    const n = levels.length;
    const slot = plotW / n;
    const bw = slot * 0.56;
    const scale = (plotH - 10) / maxC;

    const baseY = padT + plotH;

    // 纵轴刻度线（按 maxC 取 4 等分）
    const grid = [];
    const ticks = 4;
    for (let i = 0; i <= ticks; i++) {
      const val = Math.round(maxC * i / ticks);
      const y = baseY - val * scale;
      grid.push(`<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W - padR}" y2="${y.toFixed(1)}" class="c-grid"/>
                 <text x="${padL - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" class="c-axis">${val}</text>`);
    }

    const bars = levels.map((l, i) => {
      const c = counts[l.key];
      const h = Math.max(c * scale, c > 0 ? 2 : 0);
      const x = padL + slot * i + (slot - bw) / 2;
      const y = baseY - h;
      const pct = ((c / total) * 100).toFixed(0);
      return `
        <g>
          <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" fill="${PROGRESS_PALETTE[l.key]}" stroke="#16140f" stroke-width="1"/>
          <text x="${(x + bw / 2).toFixed(1)}" y="${(y - 8).toFixed(1)}" text-anchor="middle" class="c-num">${c}</text>
          <text x="${(x + bw / 2).toFixed(1)}" y="${(baseY + 18).toFixed(1)}" text-anchor="middle" class="c-cap">${l.glyph}</text>
          <text x="${(x + bw / 2).toFixed(1)}" y="${(baseY + 36).toFixed(1)}" text-anchor="middle" class="c-lbl">${l.badge}</text>
          <text x="${(x + bw / 2).toFixed(1)}" y="${(baseY + 54).toFixed(1)}" text-anchor="middle" class="c-sub">${pct}%</text>
        </g>`;
    }).join("");

    return `
      <svg class="chart-svg" viewBox="0 0 ${W} ${padT + plotH + padB}" role="img" aria-label="造物实现分级分布柱状图" preserveAspectRatio="xMidYMid meet">
        ${grid.join("")}
        <line x1="${padL}" y1="${baseY}" x2="${W - padR}" y2="${baseY}" class="c-base"/>
        ${bars}
      </svg>`;
  },

  // ---------- 图 B：分领域堆叠条 ----------
  domainStacks() {
    const matrix = this._domainMatrix();
    const levels = Object.values(LEVELS).sort((a, b) => a.order - b.order);
    const W = 600, padL = 70, padR = 30, barH = 22, gap = 14, padT = 16, padB = 16;
    const plotW = W - padL - padR;
    const maxTotal = Math.max(...Object.values(matrix).map(m => m.total), 1);
    const scale = plotW / maxTotal;

    const rows = Object.keys(DOMAINS).map((k, i) => {
      const m = matrix[k];
      const d = DOMAINS[k];
      const y = padT + i * (barH + gap);
      let x = padL;
      const segs = levels.map(l => {
        const c = m[l.key];
        if (!c) return "";
        const w = c * scale;
        const seg = `<rect x="${x.toFixed(1)}" y="${y}" width="${w.toFixed(1)}" height="${barH}" fill="${PROGRESS_PALETTE[l.key]}" stroke="#f6f2e7" stroke-width="0.8"/>`;
        x += w;
        return seg;
      }).join("");
      return `
        <g>
          <text x="${padL - 10}" y="${(y + barH / 2 + 4).toFixed(1)}" text-anchor="end" class="c-lbl">${d.label}</text>
          ${segs}
          <text x="${padL + m.total * scale + 8}" y="${(y + barH / 2 + 4).toFixed(1)}" text-anchor="start" class="c-num">${m.total}</text>
        </g>`;
    }).join("");

    const H = padT + Object.keys(DOMAINS).length * (barH + gap) + padB - gap;

    return `
      <svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="各领域造物实现分级堆叠图" preserveAspectRatio="xMidYMid meet">
        ${rows}
      </svg>`;
  },

  // ---------- 图 C：单条实现梯度（详情页用，返回 HTML） ----------
  // 5 格阶梯，L1（已实现，最接近现实）在左，L5（仅限世界观）在右。
  // 该造物所在格实心，更可实现侧浅填充（代表已验证），更不可实现侧留空。
  techMeter(t) {
    const lv = LEVELS[t.level];
    const levels = Object.values(LEVELS).sort((a, b) => a.order - b.order);
    const cur = lv.order; // 1..5
    const cells = levels.map(l => {
      let cls = "tm-cell";
      if (l.order < cur) cls += " passed";      // 比它更可实现的层级：已验证
      else if (l.order === cur) cls += " current"; // 当前所处层级
      else cls += " ahead";                       // 比它更难：尚未抵达
      return `<div class="${cls}" style="--pc:${PROGRESS_PALETTE[l.key]}">
                <span class="tm-glyph">${l.glyph}</span>
                <span class="tm-badge">${l.badge}</span>
              </div>`;
    }).join("");

    const total = TECHS.length || 1;
    const sameLevel = TECHS.filter(x => x.level === t.level).length;
    const pct = ((sameLevel / total) * 100).toFixed(0);

    return `
      <div class="tech-meter" aria-label="《${esc(t.name)}》实现梯度：${lv.badge}">
        <div class="tm-cells">${cells}</div>
        <p class="tm-note">实现梯度 · 越靠左越接近现实；该项处于 <strong>${lv.badge}</strong>（共 ${sameLevel} 项同级，占全卷 ${pct}%）。在 ${total} 项奇幻造物中，越靠右者越依赖该世界观独有设定或未知法则。</p>
      </div>`;
  },

  // ---------- 图 D：进度坐标系散点图（#/map 主图） ----------
  // x 轴 = 实现进度（L1 左 / 最接近现实 → L5 右 / 仅限世界观）
  // 每行一个世界观，行内按进度铺开其全部造物；点墨色=分级，可点击进造物页
  scatterByProgress() {
    const levels = Object.values(LEVELS).sort((a, b) => a.order - b.order);
    const lvX = {}; // order(1..5) -> x 坐标
    levels.forEach(l => { lvX[l.order] = l.order; });

    // 按世界观聚合
    const byWork = {};
    TECHS.forEach(t => { (byWork[t.workId] = byWork[t.workId] || []).push(t); });
    const works = WORKS.filter(w => byWork[w.id] && byWork[w.id].length);
    // 行序：按该世界观"平均进度"升序（最现实的在上）
    works.sort((a, b) => {
      const avg = id => { const l = byWork[id]; return l.reduce((s, t) => s + LEVELS[t.level].order, 0) / l.length; };
      return avg(a.id) - avg(b.id);
    });

    const W = 760, padL = 130, padR = 24, padT = 46, padB = 44;
    const plotW = W - padL - padR;
    const rowH = 26, dot = 5.5;
    const xOf = order => padL + (order - 1) / 4 * plotW; // order 1..5
    const H = padT + works.length * rowH + padB;

    // x 轴刻度（5 个分级）
    const axis = levels.map(l =>
      `<text x="${xOf(l.order).toFixed(1)}" y="${(padT - 14).toFixed(1)}" text-anchor="middle" class="c-cap">${l.glyph}</text>
       <text x="${xOf(l.order).toFixed(1)}" y="${(padT - 1).toFixed(1)}" text-anchor="middle" class="c-sub">${l.badge}</text>`
    ).join("");
    const axisLine = `<line x1="${padL}" y1="${padT - 6}" x2="${W - padR}" y2="${padT - 6}" class="c-base"/>`;
    // 分级分隔竖线
    const vlines = levels.map(l =>
      `<line x1="${xOf(l.order).toFixed(1)}" y1="${padT}" x2="${xOf(l.order).toFixed(1)}" y2="${H - padB}" class="c-grid"/>`
    ).join("");

    const rows = works.map((w, i) => {
      const list = byWork[w.id];
      const y = padT + i * rowH + rowH / 2;
      const pts = list.map(t => {
        const x = xOf(LEVELS[t.level].order);
        return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${dot}" fill="${PROGRESS_PALETTE[t.level]}" stroke="#16140f" stroke-width="0.8">
                  <title>《${esc(w.title)}》· ${esc(t.name)}（${LEVELS[t.level].badge}）</title>
                </circle>
                <a href="#/tech/${t.id}"><rect x="${(x - dot - 2).toFixed(1)}" y="${(y - dot - 2).toFixed(1)}" width="${(dot * 2 + 4).toFixed(1)}" height="${(dot * 2 + 4).toFixed(1)}" fill="transparent"/></a>`;
      }).join("");
      return `
        <g>
          <text x="${padL - 10}" y="${(y + 4).toFixed(1)}" text-anchor="end" class="c-lbl">${esc(w.title)}</text>
          <line x1="${padL}" y1="${(y + rowH / 2 - 2).toFixed(1)}" x2="${W - padR}" y2="${(y + rowH / 2 - 2).toFixed(1)}" class="c-grid"/>
          ${pts}
        </g>`;
    }).join("");

    const note = `<text x="${padL}" y="${(H - padB + 24).toFixed(1)}" class="c-sub">横向 = 实现进度（左：最接近现实；右：仅限世界观）。每行一个世界观，点墨色越浓离现实越远，点击点可进造物页。</text>`;

    return `
      <svg class="chart-svg scat" viewBox="0 0 ${W} ${H}" role="img" aria-label="造物实现进度坐标系" preserveAspectRatio="xMidYMid meet">
        ${vlines}
        ${axisLine}
        ${axis}
        ${rows}
        ${note}
      </svg>`;
  },

  // ---------- 图 E：世界观 × 分级 热力图 ----------
  heatmap() {
    const levels = Object.values(LEVELS).sort((a, b) => a.order - b.order);
    const byWork = {};
    TECHS.forEach(t => { (byWork[t.workId] = byWork[t.workId] || []).push(t); });
    const works = WORKS.filter(w => byWork[w.id] && byWork[w.id].length);
    // 热力强度：按该世界观造物总数归一化的"离现实度"视角，这里用 数量 着色
    const matrix = {};
    let maxC = 1;
    works.forEach(w => {
      const m = { L1: 0, L2: 0, L3: 0, L4: 0, L5: 0, total: byWork[w.id].length };
      byWork[w.id].forEach(t => m[t.level]++);
      matrix[w.id] = m;
      levels.forEach(l => { if (m[l.key] > maxC) maxC = m[l.key]; });
    });
    // 仅取有较充实数据的世界观（≥3 项）以免太稀疏，按 total 降序取前 24
    const top = works.slice().sort((a, b) => matrix[b.id].total - matrix[a.id].total).slice(0, 24);

    const W = 760, padL = 130, padT = 40, cellW = 96, cellH = 20, gap = 2, padR = 20, padB = 30;
    const H = padT + top.length * (cellH + gap) + padB;
    const colX = i => padL + i * (cellW + gap);

    const head = levels.map((l, i) =>
      `<text x="${(colX(i) + cellW / 2).toFixed(1)}" y="${(padT - 14).toFixed(1)}" text-anchor="middle" class="c-cap">${l.glyph}</text>
       <text x="${(colX(i) + cellW / 2).toFixed(1)}" y="${(padT - 2).toFixed(1)}" text-anchor="middle" class="c-sub">${l.badge}</text>`
    ).join("");

    const cells = top.map((w, ri) => {
      const m = matrix[w.id];
      const y = padT + ri * (cellH + gap);
      const row = levels.map((l, ci) => {
        const c = m[l.key];
        const fill = c === 0 ? "#f1ece0" : PROGRESS_PALETTE[l.key];
        const op = c === 0 ? 0.25 : (0.35 + 0.65 * (c / maxC));
        return `<rect x="${colX(ci).toFixed(1)}" y="${y.toFixed(1)}" width="${cellW}" height="${cellH}" fill="${fill}" fill-opacity="${op.toFixed(2)}" stroke="#cfc7b6" stroke-width="0.6">
                  <title>《${esc(w.title)}》· ${l.badge}：${c} 项</title>
                </rect>
                ${c > 0 ? `<text x="${(colX(ci) + cellW / 2).toFixed(1)}" y="${(y + cellH / 2 + 4).toFixed(1)}" text-anchor="middle" class="hm-num">${c}</text>` : ""}`;
      }).join("");
      return `
        <g>
          <text x="${padL - 10}" y="${(y + cellH / 2 + 4).toFixed(1)}" text-anchor="end" class="c-lbl">${esc(w.title)}</text>
          ${row}
        </g>`;
    }).join("");

    return `
      <svg class="chart-svg heat" viewBox="0 0 ${W} ${H}" role="img" aria-label="世界观与实现分级热力图" preserveAspectRatio="xMidYMid meet">
        ${head}
        ${cells}
      </svg>`;
  },

  // ---------- 图 F：按世界观平均进度条形（谁最接近现实） ----------
  workAvgBar() {
    const byWork = {};
    TECHS.forEach(t => { (byWork[t.workId] = byWork[t.workId] || []).push(t); });
    const works = WORKS.filter(w => byWork[w.id] && byWork[w.id].length >= 3);
    const arr = works.map(w => {
      const l = byWork[w.id];
      const avg = l.reduce((s, t) => s + LEVELS[t.level].order, 0) / l.length;
      return { w, avg, n: l.length };
    }).sort((a, b) => a.avg - b.avg); // 最现实在前

    const W = 760, padL = 130, padR = 60, padT = 14, barH = 18, gap = 8, padB = 16;
    const plotW = W - padL - padR;
    const scale = plotW / 5; // order 1..5
    const H = padT + arr.length * (barH + gap) + padB - gap;

    const rows = arr.map((o, i) => {
      const y = padT + i * (barH + gap);
      const w = o.avg * scale;
      const col = PROGRESS_PALETTE["L" + Math.round(o.avg)];
      return `
        <g>
          <text x="${padL - 10}" y="${(y + barH / 2 + 4).toFixed(1)}" text-anchor="end" class="c-lbl">${esc(o.w.title)}</text>
          <rect x="${padL}" y="${y}" width="${w.toFixed(1)}" height="${barH}" fill="${col}" stroke="#16140f" stroke-width="0.8"/>
          <text x="${(padL + w + 8).toFixed(1)}" y="${(y + barH / 2 + 4).toFixed(1)}" text-anchor="start" class="c-sub">${o.avg.toFixed(2)} · ${o.n}项</text>
        </g>`;
    }).join("");
    // x 轴分级标尺
    const ticks = Object.values(LEVELS).sort((a,b)=>a.order-b.order).map(l =>
      `<text x="${(padL + (l.order - 1) * scale).toFixed(1)}" y="${(H - 2).toFixed(1)}" text-anchor="middle" class="c-sub">${l.glyph}</text>`
    ).join("");

    return `
      <svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="各世界观平均实现进度" preserveAspectRatio="xMidYMid meet">
        ${rows}
        <line x1="${padL}" y1="${H - 8}" x2="${W - padR}" y2="${H - 8}" class="c-grid"/>
        ${ticks}
      </svg>`;
  },

  // ---------- 总览面板（造物树页顶部调用） ----------
  overviewPanel() {
    const counts = this._levelCounts();
    const total = TECHS.length;
    const realized = counts.L1 + counts.L2; // 已实现 + 目前可实现
    const fiction = counts.L4 + counts.L5;  // 未来较难 + 仅限世界观
    const rp = ((realized / total) * 100).toFixed(0);
    const fp = ((fiction / total) * 100).toFixed(0);

    return `
      <section class="progress-panel">
        <div class="pp-head">
          <h2>实现进度总览</h2>
          <p class="muted note">全卷 ${total} 项造物按五级实现分级的分布。浅色=已走近现实，浓墨=仍属纸上宇宙。</p>
        </div>
        <div class="pp-stats">
          <div class="pp-stat"><span class="pps-num">${realized}</span><span class="pps-lbl">已可现实化<br>（L1+L2）</span><span class="pps-bar" style="width:${rp}%"></span></div>
          <div class="pp-stat"><span class="pps-num">${counts.L3}</span><span class="pps-lbl">未来可能<br>（L3）</span><span class="pps-bar" style="width:${(counts.L3/total*100).toFixed(0)}%"></span></div>
          <div class="pp-stat"><span class="pps-num">${fiction}</span><span class="pps-lbl">暂难/仅限世界观<br>（L4+L5）</span><span class="pps-bar" style="width:${fp}%"></span></div>
        </div>
        <div class="pp-grid">
          <figure class="pp-fig">
            <figcaption>分级分布 · 全 ${total} 项</figcaption>
            ${this.levelBars()}
          </figure>
          <figure class="pp-fig">
            <figcaption>分领域构成</figcaption>
            ${this.domainStacks()}
          </figure>
        </div>
        <div class="pp-legend">
          ${Object.values(LEVELS).sort((a,b)=>a.order-b.order).map(l =>
            `<span class="leg"><i style="background:${PROGRESS_PALETTE[l.key]}"></i>${l.glyph} ${l.badge}</span>`).join("")}
        </div>
      </section>`;
  }
};
