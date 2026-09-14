// ============================================================
// 造物元素表视图（普世模板）
// 每个世界观点亮自己已掌握的节点；未点亮为虚线轮廓。
// 有造物卷宗挂载的节点带双线边框与条数徽章，可点击跳转。
// 纵轴为技术阶梯（下：现实基线 → 上：世界观限定），
// 节点右上角罗马数字为真实实现等级。
// ============================================================
const WorkTreeView = (() => {
  const COL_W = 158, NODE_W = 132, NODE_H = 50;
  const LEFT = 90;                       // 左侧层级标签区宽度
  const TIER_Y = { 5: 78, 4: 183, 3: 288, 2: 393, 1: 498 };
  const HEAD_Y = 578;                    // 分支头基线
  const SIG_X = LEFT + 6 * COL_W + 26;
  const SIG_W = 178;
  const VB_W = SIG_X + SIG_W + 22;
  const VB_H = 648;
  const ROMAN = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];
  const SIG_MAX = 7;

  const esc = s => String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const clip = (s, n) => s.length > n ? s.slice(0, n - 1) + "…" : s;

  // 该世界观造物条目 → 模板节点 挂载表
  function buildMountMap(workId) {
    const map = {};
    for (const t of TECHS) {
      if (t.workId !== workId) continue;
      const nid = treeMountTech(t);
      if (!nid) continue;
      (map[nid] = map[nid] || []).push(t);
    }
    return map;
  }

  function nodeSvg(x, y, node, lit, techs) {
    const cx = x + NODE_W / 2;
    const roman = ROMAN[node.level - 1];
    const hasTech = techs && techs.length;
    let body = "";

    // 卷宗双线框（有造物条目挂载）
    if (hasTech) {
      body += `<rect x="${x - 3.5}" y="${y - 3.5}" width="${NODE_W + 7}" height="${NODE_H + 7}"
        fill="none" stroke="#141414" stroke-width="1"/>`;
    }

    body += `<rect x="${x}" y="${y}" width="${NODE_W}" height="${NODE_H}"
      fill="${lit ? "#141414" : "none"}" stroke="${lit ? "#141414" : "#a09890"}"
      stroke-width="1.2" ${lit ? "" : 'stroke-dasharray="4,3"'} rx="1.5"/>
      <text x="${cx}" y="${y + 30}" text-anchor="middle" font-size="12"
        fill="${lit ? "#f6f2e7" : "#a09890"}" letter-spacing="0.4">${esc(node.name)}</text>
      <text x="${x + NODE_W - 7}" y="${y + 15}" text-anchor="end" font-size="9"
        fill="${lit ? "#bdb5a8" : "#b8b0a4"}">${roman}</text>`;

    if (hasTech) {
      body += `<rect x="${x + 5}" y="${y + 5}" width="15" height="14" fill="#f6f2e7"/>
        <text x="${x + 12.5}" y="${y + 15.5}" text-anchor="middle" font-size="9.5"
          fill="#141414" font-weight="bold">${techs.length}</text>`;
    }
    return { body, title: esc(node.name + " · 等级 " + roman + "\n" + node.desc +
      (hasTech ? "\n本作卷宗：" + techs.map(t => t.name).join("、") : "")) };
  }

  function render(workId) {
    const w = WORKS.find(x => x.id === workId);
    if (!w) return "";
    const litSet = new Set(w.treeLit || []);
    const mount = buildMountMap(workId);
    for (const nid of Object.keys(mount)) litSet.add(nid); // 有卷宗必然已掌握

    let s = "";

    // 分支列
    TREE_BRANCHES.forEach((b, bi) => {
      const x = LEFT + bi * COL_W;
      const cx = x + NODE_W / 2;

      // 点亮连线（相邻层都点亮）
      for (let i = 0; i < 4; i++) {
        const lower = b.nodes[i], upper = b.nodes[i + 1];
        if (litSet.has(lower.id) && litSet.has(upper.id)) {
          s += `<line x1="${cx}" y1="${TIER_Y[i + 1]}" x2="${cx}"
            y2="${TIER_Y[i + 2] + NODE_H}" stroke="#141414" stroke-width="1.4"/>`;
        }
      }

      // 节点
      b.nodes.forEach((n, i) => {
        const tier = i + 1;
        const y = TIER_Y[tier];
        const lit = litSet.has(n.id);
        const techs = mount[n.id];
        const { body, title } = nodeSvg(x, y, n, lit, techs);
        const clickable = techs && techs.length
          ? `<a href="#/tech/${techs[0].id}"><title>${title}</title>${body}</a>`
          : `<g><title>${title}</title>${body}</g>`;
        s += clickable;
      });

      // 分支头
      s += `<text x="${cx}" y="${HEAD_Y}" text-anchor="middle" font-size="12.5"
        fill="#141414" font-weight="bold" letter-spacing="1">〔${b.key}〕${esc(b.label)}</text>
        <text x="${cx}" y="${HEAD_Y + 17}" text-anchor="middle" font-size="8.5"
        fill="#a09890">${esc(clip(b.motto, 11))}</text>`;
    });

    // 左侧层级标签
    TREE_TIERS.forEach(t => {
      s += `<text x="46" y="${TIER_Y[t.tier] + 29}" text-anchor="middle" font-size="9"
        fill="#a09890" letter-spacing="1.5" transform="rotate(-90 46 ${TIER_Y[t.tier] + 29})">${t.label}</text>`;
    });

    // 奇点列（该世界观独有造物）
    const sigs = (w.representativeTechs || []).slice(0, SIG_MAX).map(rt => {
      const t = TECHS.find(x => x.id === rt);
      return t
        ? { name: t.name, href: "#/tech/" + t.id, roman: ROMAN[t.level - 1], tip: "等级 " + ROMAN[t.level - 1] + " · 点击查看卷宗" }
        : { name: rt, tip: "本世界观登记造物" };
    });
    // 奇点列竖线
    const sigCount = sigs.length;
    if (sigCount) {
      s += `<line x1="${SIG_X - 14}" y1="${TIER_Y[1]}" x2="${SIG_X - 14}"
        y2="${TIER_Y[5] + NODE_H}" stroke="#a09890" stroke-width="0.8" stroke-dasharray="2,4"/>`;
    }
    sigs.forEach((sg, i) => {
      const y = TIER_Y[1] - i * 62;
      const nameClip = clip(sg.name, 9);
      const body = `<rect x="${SIG_X}" y="${y}" width="${SIG_W}" height="${NODE_H}"
          fill="#141414" stroke="#141414" stroke-width="1.2" rx="1.5"/>
        <text x="${SIG_X + 12}" y="${y + 30}" font-size="11.5" fill="#f6f2e7"
          letter-spacing="0.3">★ ${esc(nameClip)}</text>
        ${sg.roman ? `<text x="${SIG_X + SIG_W - 7}" y="${y + 15}" text-anchor="end"
          font-size="9" fill="#bdb5a8">${sg.roman}</text>` : ""}`;
      const title = esc(sg.name + "\n" + sg.tip);
      s += sg.href
        ? `<a href="${sg.href}"><title>${title}</title>${body}</a>`
        : `<g><title>${title}</title>${body}</g>`;
    });

    // 奇点列头
    s += `<text x="${SIG_X + SIG_W / 2}" y="${HEAD_Y}" text-anchor="middle" font-size="12.5"
      fill="#141414" font-weight="bold" letter-spacing="1">〔★〕奇点</text>
      <text x="${SIG_X + SIG_W / 2}" y="${HEAD_Y + 17}" text-anchor="middle" font-size="8.5"
      fill="#a09890">此界独有</text>`;

    return `
      <div class="skill-tree-wrap">
        <svg viewBox="0 0 ${VB_W} ${VB_H}" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" role="img"
          aria-label="《${esc(w.title)}》造物元素表" class="skill-tree-svg">
          <text x="${LEFT}" y="40" font-size="9.5" fill="#a09890" letter-spacing="1">
            纵轴：自下而上，由现实基线至世界观限定</text>
          ${s}
        </svg>
      </div>`;
  }

  return { render };
})();
