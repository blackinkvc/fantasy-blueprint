// ============================================================
// 开发进度跟踪页（#/audit）
// 实时由 TECHS / WORKS 推导：
//   · 已收录世界观 / 技术总数
//   · 每个世界观的技术数量与完成度
//   · 每条技术的完整度评分与自评诊断
//   · 待补写缺口（质量性 + 结构性）
// 纯静态、零依赖、档案风。
// ============================================================

const AuditView = {
  // 单条造物完整度评分（0-100）
  _techScore(t) {
    let s = 0;
    if (t.summary && t.summary.length >= 8) s += 10;
    if (t.description) s += Math.min(30, t.description.length / 100 * 30);
    const fp = (t.firstPrinciples || []).length;
    if (fp >= 1) s += 10;
    if (fp >= 3) s += 10;
    if (t.implementation) {
      if (t.implementation.current) s += 15;
      const p = (t.implementation.path || []).length;
      if (p >= 1) s += 7;
      if (p >= 3) s += 8;
    }
    if ((t.dependencies || []).length >= 1) s += 10;
    return Math.round(s);
  },

  // 自评诊断（缺什么就标什么）
  _diag(t, score) {
    if (score >= 78) return ["内容完整"];
    const tags = [];
    if (!t.description || t.description.length < 60) tags.push("描述偏薄");
    const fp = (t.firstPrinciples || []).length;
    if (fp < 2) tags.push("原理分析不足");
    const p = (t.implementation && t.implementation.path) ? t.implementation.path.length : 0;
    if (p < 2) tags.push("实现路径简略");
    if ((t.dependencies || []).length < 1) tags.push("未接入技术树");
    if (!tags.length) tags.push("可小幅润色");
    return tags;
  },

  _band(score) {
    if (score >= 75) return "excellent";
    if (score >= 50) return "good";
    return "weak";
  },

  // 计算全部派生数据（render/mount 共用）
  _compute() {
    const byWork = {};
    TECHS.forEach(t => { (byWork[t.workId] = byWork[t.workId] || []).push(t); });

    // 技术维度
    const techRows = TECHS.map(t => {
      const score = this._techScore(t);
      return {
        id: t.id, name: t.name, workId: t.workId,
        level: t.level, domain: t.domain, score,
        band: this._band(score), diag: this._diag(t, score)
      };
    });
    const avgTech = techRows.length ? techRows.reduce((a, b) => a + b.score, 0) / techRows.length : 0;

    // 世界观维度
    const workRows = WORKS.map(w => {
      const list = byWork[w.id] || [];
      const avg = list.length ? list.reduce((a, t) => a + this._techScore(t), 0) / list.length : 0;
      const coverage = Math.min(100, list.length / 4 * 100); // 以每世界观≥4项技术为完整基线
      const completion = Math.round(0.7 * avg + 0.3 * coverage);
      return {
        id: w.id, title: w.title, n: list.length,
        avg: Math.round(avg), completion,
        status: completion >= 70 && list.length >= 4 ? "complete"
              : completion >= 50 ? "good" : "weak"
      };
    });

    // 结构性缺口：补齐到每世界观至少 4 项所需的新造物数
    let structuralGap = 0;
    workRows.forEach(r => { structuralGap += Math.max(0, 4 - r.n); });

    const bands = { excellent: 0, good: 0, weak: 0 };
    techRows.forEach(r => bands[r.band]++);

    return { byWork, techRows, workRows, avgTech, structuralGap, bands, total: TECHS.length, works: WORKS.length };
  },

  // ---------- 图表：完成度分布（优秀/良好/待补） ----------
  _bandBars(bands, total) {
    const W = 600, padL = 36, padR = 20, padT = 18, padB = 48, plotW = W - padL - padR, plotH = 180;
    const baseY = padT + plotH;
    const maxC = Math.max(bands.excellent, bands.good, bands.weak, 1);
    const scale = (plotH - 10) / maxC;
    const items = [
      { k: "excellent", label: "优秀", sub: "≥75", color: "#16140f" },
      { k: "good", label: "良好", sub: "50–74", color: "#6f6a5d" },
      { k: "weak", label: "待补", sub: "<50", color: "#a39d8e" }
    ];
    const slot = plotW / items.length, bw = slot * 0.5;
    const grid = [];
    for (let i = 0; i <= 4; i++) {
      const val = Math.round(maxC * i / 4), y = baseY - val * scale;
      grid.push(`<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W - padR}" y2="${y.toFixed(1)}" class="c-grid"/>
        <text x="${padL - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" class="c-axis">${val}</text>`);
    }
    const bars = items.map((it, i) => {
      const c = bands[it.k], h = Math.max(c * scale, c > 0 ? 2 : 0), x = padL + slot * i + (slot - bw) / 2, y = baseY - h;
      return `<g>
        <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" fill="${it.color}" stroke="#16140f" stroke-width="1"/>
        <text x="${(x + bw / 2).toFixed(1)}" y="${(y - 8).toFixed(1)}" text-anchor="middle" class="c-num">${c}</text>
        <text x="${(x + bw / 2).toFixed(1)}" y="${(baseY + 18).toFixed(1)}" text-anchor="middle" class="c-lbl">${it.label}</text>
        <text x="${(x + bw / 2).toFixed(1)}" y="${(baseY + 36).toFixed(1)}" text-anchor="middle" class="c-sub">${it.sub}</text>
      </g>`;
    }).join("");
    return `<svg class="chart-svg" viewBox="0 0 ${W} ${padT + plotH + padB}" role="img" aria-label="技术完成度分布">${grid.join("")}
      <line x1="${padL}" y1="${baseY}" x2="${W - padR}" y2="${baseY}" class="c-base"/>${bars}</svg>`;
  },

  // ---------- 图表：世界观完成度分布（按完成度分桶） ----------
  _workCompHist(workRows) {
    const buckets = [["<40", 0, 40], ["40–59", 40, 60], ["60–79", 60, 80], ["80–100", 80, 101]];
    const counts = buckets.map(b => workRows.filter(r => r.completion >= b[1] && r.completion < b[2]).length);
    const W = 600, padL = 36, padR = 20, padT = 18, padB = 48, plotW = W - padL - padR, plotH = 180;
    const baseY = padT + plotH;
    const maxC = Math.max(...counts, 1), scale = (plotH - 10) / maxC;
    const slot = plotW / buckets.length, bw = slot * 0.5;
    const grid = [];
    for (let i = 0; i <= 4; i++) {
      const val = Math.round(maxC * i / 4), y = baseY - val * scale;
      grid.push(`<line x1="${padL}" y1="${y.toFixed(1)}" x2="${W - padR}" y2="${y.toFixed(1)}" class="c-grid"/>
        <text x="${padL - 8}" y="${(y + 4).toFixed(1)}" text-anchor="end" class="c-axis">${val}</text>`);
    }
    const bars = buckets.map((b, i) => {
      const c = counts[i], h = Math.max(c * scale, c > 0 ? 2 : 0), x = padL + slot * i + (slot - bw) / 2, y = baseY - h;
      const lab = b[0];
      return `<g>
        <rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${bw.toFixed(1)}" height="${h.toFixed(1)}" fill="#423e35" stroke="#16140f" stroke-width="1"/>
        <text x="${(x + bw / 2).toFixed(1)}" y="${(y - 8).toFixed(1)}" text-anchor="middle" class="c-num">${c}</text>
        <text x="${(x + bw / 2).toFixed(1)}" y="${(baseY + 18).toFixed(1)}" text-anchor="middle" class="c-lbl">${lab}</text>
      </g>`;
    }).join("");
    return `<svg class="chart-svg" viewBox="0 0 ${W} ${padT + plotH + padB}" role="img" aria-label="世界观完成度分布">${grid.join("")}
      <line x1="${padL}" y1="${baseY}" x2="${W - padR}" y2="${baseY}" class="c-base"/>${bars}</svg>`;
  },

  // ---------- 渲染 ----------
  render() {
    const d = this._compute();
    const needImprove = d.bands.good + d.bands.weak; // 非优秀、可深化
    const avgPct = d.avgTech.toFixed(0);

    // 排序默认：按完成度升序（最待补的在前），便于行动
    const workSorted = d.workRows.slice().sort((a, b) => a.completion - b.completion);
    const techSorted = d.techRows.slice().sort((a, b) => a.score - b.score);

    const workRowsHtml = workSorted.map(r => `
      <tr data-completion="${r.completion}" data-n="${r.n}">
        <td class="aw-name"><a href="#/work/${r.id}">${esc(r.title)}</a></td>
        <td class="num">${r.n}</td>
        <td class="num">${r.avg}%</td>
        <td class="num aw-bar-cell"><div class="aw-bar"><span style="width:${r.completion}%"></span></div></td>
        <td><span class="aw-badge ${r.status}">${r.status === "complete" ? "完整" : r.status === "good" ? "良好" : "待补"}</span></td>
      </tr>`).join("");

    const techRowsHtml = techSorted.map(r => `
      <tr data-score="${r.score}">
        <td class="aw-name"><a href="#/tech/${r.id}">${esc(r.name)}</a></td>
        <td>${esc(this._workTitle(r.workId))}</td>
        <td class="num">${r.level}</td>
        <td class="num">${r.score}</td>
        <td class="aw-diag">${r.diag.map(x => `<span class="aw-tag ${r.band}">${x}</span>`).join("")}</td>
      </tr>`).join("");

    // 补完待办（可勾选，localStorage 持久化）
    const doneSet = this._doneSet();
    const todo = this._todoData(d);
    const todoDone = todo.filter(r => doneSet.has(r.id)).length;
    const todoHtml = todo.map(r => `
      <tr class="todo-row ${doneSet.has(r.id) ? "done" : ""}" data-id="${r.id}">
        <td class="todo-chk"><input type="checkbox" class="todo-cb" ${doneSet.has(r.id) ? "checked" : ""}></td>
        <td class="aw-name"><a href="#/tech/${r.id}">${esc(r.name)}</a></td>
        <td>${esc(this._workTitle(r.workId))}</td>
        <td class="num">${r.score}</td>
        <td class="aw-diag">${r.diag.map(x => `<span class="aw-tag ${r.band}">${x}</span>`).join("")}</td>
      </tr>`).join("");

    // 按领域 / 分级拆层
    const bd = this._breakdown(d);
    const domainRows = this._breakRows(bd.byDomain, k => DOMAINS[k].label);
    const levelRows = this._breakRows(bd.byLevel, k => (LEVELS[k] ? LEVELS[k].badge : k));

    return `
      <section class="view audit-view">
        <header class="view-head">
          <h1>开发进度跟踪</h1>
          <p class="muted note">本页由全站数据实时推导：已收录的世界观与技术数量、每个世界观的技术完成度、每条技术的自评质量，以及待补写缺口。每次补完数据后刷新即更新。</p>
        </header>

        <div class="audit-stats">
          <div class="as-card"><span class="as-num">${d.works}</span><span class="as-lbl">收录世界观</span></div>
          <div class="as-card"><span class="as-num">${d.total}</span><span class="as-lbl">收录技术</span></div>
          <div class="as-card"><span class="as-num">${avgPct}%</span><span class="as-lbl">技术平均完整度</span></div>
          <div class="as-card warn"><span class="as-num">${needImprove}</span><span class="as-lbl">可深化技术<br>（非优秀）</span></div>
          <div class="as-card warn"><span class="as-num">≈${d.structuralGap}</span><span class="as-lbl">结构缺口<br>（补齐至每世界观≥4项）</span></div>
        </div>

        <div class="audit-grid2">
          <figure class="audit-fig">
            <figcaption>技术完成度分布（按自评质量分）</figcaption>
            ${this._bandBars(d.bands, d.total)}
            <p class="muted note">优秀 ${d.bands.excellent} · 良好 ${d.bands.good} · 待补 ${d.bands.weak}</p>
          </figure>
          <figure class="audit-fig">
            <figcaption>世界观完成度分布（每世界观综合评分）</figcaption>
            ${this._workCompHist(d.workRows)}
            <p class="muted note">综合＝0.7×技术平均质量＋0.3×技术覆盖度（以≥4项/世界观为满）</p>
          </figure>
        </div>

        <section class="audit-block">
          <div class="ab-head">
            <h2>补完待办</h2>
            <span id="todo-count" class="ab-meta">已完成 ${todoDone} / 共 ${todo.length}</span>
          </div>
          <p class="muted note">下列技术自评未达「内容完整」，勾选表示已在原数据文件中补写完善。状态保存在本机浏览器，刷新或重访后保留；新增待补项会自动出现。</p>
          <div class="audit-table-wrap todo-wrap">
            <table class="audit-table" id="audit-todo-table">
              <thead><tr><th></th><th>技术</th><th>所属世界观</th><th>完整度</th><th>待补方向</th></tr></thead>
              <tbody>${todoHtml}</tbody>
            </table>
          </div>
        </section>

        <section class="audit-block">
          <div class="ab-head"><h2>按领域 / 分级拆层完成度</h2></div>
          <div class="audit-grid2" style="margin-bottom:0">
            <figure class="audit-fig">
              <figcaption>按领域</figcaption>
              <div class="audit-table-wrap" style="max-height:none;border:none;overflow:visible">
                <table class="audit-table"><thead><tr><th>领域</th><th>技术数</th><th>平均质量</th><th>优劣构成</th></tr></thead><tbody>${domainRows}</tbody></table>
              </div>
            </figure>
            <figure class="audit-fig">
              <figcaption>按实现分级</figcaption>
              <div class="audit-table-wrap" style="max-height:none;border:none;overflow:visible">
                <table class="audit-table"><thead><tr><th>分级</th><th>技术数</th><th>平均质量</th><th>优劣构成</th></tr></thead><tbody>${levelRows}</tbody></table>
              </div>
            </figure>
          </div>
        </section>

        <section class="audit-block">
          <div class="ab-head">
            <h2>各世界观技术完成度</h2>
            <div class="ab-sort">
              <span>排序：</span>
              <button class="ab-btn active" data-sort="completion" data-dir="asc">完成度↑</button>
              <button class="ab-btn" data-sort="completion" data-dir="desc">完成度↓</button>
              <button class="ab-btn" data-sort="n" data-dir="asc">技术数↑</button>
              <button class="ab-btn" data-sort="n" data-dir="desc">技术数↓</button>
            </div>
          </div>
          <div class="audit-table-wrap">
            <table class="audit-table" id="audit-work-table">
              <thead><tr><th>世界观</th><th>技术数</th><th>平均质量</th><th>完成度</th><th>自评</th></tr></thead>
              <tbody>${workRowsHtml}</tbody>
            </table>
          </div>
        </section>

        <section class="audit-block">
          <div class="ab-head">
            <h2>技术质量自评</h2>
            <div class="ab-filter">
              <span>筛选：</span>
              <button class="ab-btn active" data-filter="all">全部</button>
              <button class="ab-btn" data-filter="excellent">优秀</button>
              <button class="ab-btn" data-filter="good">良好</button>
              <button class="ab-btn" data-filter="weak">待补</button>
            </div>
          </div>
          <div class="audit-table-wrap">
            <table class="audit-table" id="audit-tech-table">
              <thead><tr><th>技术</th><th>所属世界观</th><th>分级</th><th>完整度</th><th>自检诊断</th></tr></thead>
              <tbody>${techRowsHtml}</tbody>
            </table>
          </div>
          <p class="muted note">诊断说明：系统按字段丰富度打分——缺失描述/原理分析/实现路径/技术树依赖会被逐一标注，便于定向补写。</p>
        </section>
      </section>`;
  },

  _workTitle(id) {
    const w = WORKS.find(x => x.id === id);
    return w ? w.title : id;
  },

  // ---------- 待办持久化（localStorage） ----------
  _doneKey() { return "audit_todo_v1"; },
  _doneSet() {
    try { return new Set(JSON.parse(localStorage.getItem(this._doneKey()) || "[]")); }
    catch (e) { return new Set(); }
  },
  _saveDone(set) {
    try { localStorage.setItem(this._doneKey(), JSON.stringify([...set])); } catch (e) {}
  },

  // 待补写清单：自评未达「优秀」（score<75，即非优秀）的技术，按分数升序（最待补在前）
  _todoData(d) {
    return d.techRows.filter(r => r.score < 75).sort((a, b) => a.score - b.score);
  },

  // 按领域 / 分级拆层统计
  _breakdown(d) {
    const byDomain = {};
    Object.keys(DOMAINS).forEach(k => byDomain[k] = { total: 0, sum: 0, b: { excellent: 0, good: 0, weak: 0 } });
    const byLevel = {};
    Object.values(LEVELS).sort((a, b) => a.order - b.order).forEach(l => byLevel[l.key] = { total: 0, sum: 0, b: { excellent: 0, good: 0, weak: 0 } });
    d.techRows.forEach(r => {
      const dm = byDomain[r.domain]; if (dm) { dm.total++; dm.sum += r.score; dm.b[r.band]++; }
      const lv = byLevel[r.level]; if (lv) { lv.total++; lv.sum += r.score; lv.b[r.band]++; }
    });
    return { byDomain, byLevel };
  },

  _breakRows(map, nameOf) {
    return Object.keys(map).map(k => {
      const o = map[k];
      const tot = o.total || 1;
      const avg = o.total ? Math.round(o.sum / o.total) : 0;
      const pct = v => (v / tot * 100).toFixed(1);
      return `<tr>
        <td class="aw-name">${esc(nameOf(k))}</td>
        <td class="num">${o.total}</td>
        <td class="num">${avg}%</td>
        <td class="aw-bar-cell"><div class="bd-bar">
          <span class="bd-e" style="width:${pct(o.b.excellent)}%"></span><span class="bd-g" style="width:${pct(o.b.good)}%"></span><span class="bd-w" style="width:${pct(o.b.weak)}%"></span>
        </div></td>
      </tr>`;
    }).join("");
  },

  // ---------- 交互绑定 ----------
  mount() {
    // 世界观表排序
    const wTable = document.getElementById("audit-work-table");
    const wBody = wTable && wTable.querySelector("tbody");
    if (wBody) {
      const baseRows = [...wBody.querySelectorAll("tr")];
      document.querySelectorAll(".ab-sort .ab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".ab-sort .ab-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const key = btn.dataset.sort, dir = btn.dataset.dir === "desc" ? -1 : 1;
          const sorted = baseRows.slice().sort((a, b) => {
            const va = +a.dataset[key], vb = +b.dataset[key];
            return (va - vb) * dir;
          });
          wBody.innerHTML = "";
          sorted.forEach(r => wBody.appendChild(r));
        });
      });
    }
    // 技术表筛选
    const tTable = document.getElementById("audit-tech-table");
    const tBody = tTable && tTable.querySelector("tbody");
    if (tBody) {
      const allRows = [...tBody.querySelectorAll("tr")];
      document.querySelectorAll(".ab-filter .ab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          document.querySelectorAll(".ab-filter .ab-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          const f = btn.dataset.filter;
          allRows.forEach(r => {
            const score = +r.dataset.score;
            const band = score >= 75 ? "excellent" : score >= 50 ? "good" : "weak";
            const show = f === "all" || band === f;
            r.style.display = show ? "" : "none";
          });
        });
      });
    }
    // 补完待办勾选（持久化到 localStorage）
    const todoBody = document.getElementById("audit-todo-body") || (document.getElementById("audit-todo-table") && document.getElementById("audit-todo-table").querySelector("tbody"));
    if (todoBody) {
      const refresh = () => {
        const set = this._doneSet();
        let done = 0;
        todoBody.querySelectorAll(".todo-cb").forEach(c => {
          const row = c.closest("tr");
          const id = row.dataset.id;
          if (c.checked) { set.add(id); done++; row.classList.add("done"); }
          else { set.delete(id); row.classList.remove("done"); }
        });
        this._saveDone(set);
        const cnt = document.getElementById("todo-count");
        if (cnt) cnt.textContent = `已完成 ${done} / 共 ${todoBody.querySelectorAll("tr").length}`;
      };
      todoBody.querySelectorAll(".todo-cb").forEach(c => c.addEventListener("change", refresh));
      refresh();
    }
  }
};
