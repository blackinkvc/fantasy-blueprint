// ============================================================
// 奇幻造物元素表模板
// 任何奇幻世界观的造物，都可映射到这棵六分支模板树上：
// 每个世界观"点亮"自己已掌握的节点，未点亮的显示为虚线轮廓。
// 纵轴为造物阶梯（自下而上，从现实基线到世界观限定），
// 节点右上角的罗马数字为其真实"实现等级"（对应 LEVELS）。
// 第七分支为"奇点"，承载该世界观独有的标志性造物（representativeTechs）。
// ============================================================

const TREE_BRANCHES = [
  {
    key: "F", label: "魔法", motto: "言灵所及，便是法则",
    nodes: [
      { id: "F1", name: "符文与手势", level: 1, desc: "以符号、手势与咒文触发效应的雏形，多对应现实中的编程与遥控。" },
      { id: "F2", name: "元素塑能", level: 2, desc: "稳定调用火水风土等元素，现实中对应受控能源与定向能。" },
      { id: "F3", name: "咒法编织", level: 3, desc: "复合咒文与法术系统，依赖"意图即结果"的设定公理。" },
      { id: "F4", name: "现实改写（奇术）", level: 4, desc: "以言语/真名直接重排局部现实，触及因果中介的边界。" },
      { id: "F5", name: "创世与法则级法术", level: 5, desc: "许愿、真名支配、概念性权能——只在写下它的世界里成立。" }
    ]
  },
  {
    key: "B", label: "生灵", motto: "改写造物的源代码",
    nodes: [
      { id: "B1", name: "驯化与畜牧", level: 1, desc: "对生物的驯养与选育，现实农业的基底。" },
      { id: "B2", name: "杂交与诱变育种", level: 2, desc: "以遗传手段定向改造性状，现实中对应育种与基因编辑。" },
      { id: "B3", name: "魔改生物", level: 3, desc: "跨物种、稳定可遗传的全身改造，触及系统级重排。" },
      { id: "B4", name: "不死与构装体", level: 4, desc: "以灵魂/咒文激活的无机或亡灵生命，现实对应机器人与具身智能。" },
      { id: "B5", name: "龙与奇美拉（神话造物）", level: 5, desc: "龙、外神、召唤兽——只属于神话与设定的巨型存在。" }
    ]
  },
  {
    key: "A", label: "炼金", motto: "把物质重新写过",
    nodes: [
      { id: "A1", name: "冶金与提纯", level: 1, desc: "从矿石到合金的古典工艺，一切材料的根基。" },
      { id: "A2", name: "火药与药剂", level: 2, desc: "燃烧剂与配方药学，现实中对应高能材料与药物化学。" },
      { id: "A3", name: "元素嬗变", level: 3, desc: "把一种元素变为另一种，现实里核嬗变可做到但不经济。" },
      { id: "A4", name: "异变矿物", level: 4, desc: "携带异常能量的设定矿物（如次元石），现实无对应。" },
      { id: "A5", name: "贤者之石 / 永生药剂", level: 5, desc: "点金与赐永生的终极造物，只在传说与世界观里成立。" }
    ]
  },
  {
    key: "R", label: "界域", motto: "去多远，算多大",
    nodes: [
      { id: "R1", name: "航海与制图", level: 1, desc: "对世界的丈量与航行，现实探索的起点。" },
      { id: "R2", name: "飞行器与热气球", level: 2, desc: "克服重力、升空远行，现实航空已成熟。" },
      { id: "R3", name: "异界门 / 传送", level: 3, desc: "跨越距离的空间跳跃，现实仅有理论雏形。" },
      { id: "R4", name: "浮空城与位面旅行", level: 4, desc: "在异维度或可居结构上存续，现实仅处设想。" },
      { id: "R5", name: "世界树 / 多维宇宙", level: 5, desc: "碟形世界、幽冥界——只对设定成立的几何。" }
    ]
  },
  {
    key: "W", label: "造物", motto: "能造出什么，取决于手里拿着什么",
    nodes: [
      { id: "W1", name: "冷兵器与甲胄", level: 1, desc: "钢铁锻造的兵器与防护，现实冶金早已覆盖。" },
      { id: "W2", name: "机械与发条", level: 2, desc: "预编程自动机械，现实对应机器人与控制系统。" },
      { id: "W3", name: "附魔武器 / 神器", level: 3, desc: "注入能量或智能的器物，现实对应可穿戴与智能装备。" },
      { id: "W4", name: "智械 / 活化物品", level: 4, desc: "具自主意识的造物，现实对应高阶具身智能。" },
      { id: "W5", name: "许愿物 / 概念性神器", level: 5, desc: "统御魔戒、魔神器——只在世界观里成立的权能载体。" }
    ]
  },
  {
    key: "L", label: "秘术", motto: "窥见命数与魂灵",
    nodes: [
      { id: "L1", name: "文字与记录", level: 1, desc: "以符号保存与传递知识，现实信息文明的基底。" },
      { id: "L2", name: "占星与卜算", level: 2, desc: "从征兆推断未知，现实对应受限的预测科学。" },
      { id: "L3", name: "预言与通灵", level: 3, desc: "隔空窥视与命运推演，现实仅有遥感与预测的弱近似。" },
      { id: "L4", name: "灵魂操纵 / 夺舍", level: 4, desc: "灵魂的存储、迁移与分裂，现实触及意识本质的边界。" },
      { id: "L5", name: "命运 / 时间编织", level: 5, desc: "改写命数、重置世界——只在设定里成立的元机制。" }
    ]
  }
];

// 领域 key → 模板分支 key（本版直接用同名 key）
const TREE_DOMAIN_MAP = {
  magic: "F", beast: "B", alchemy: "A", realm: "R", artifact: "W", lore: "L"
};

// 层级标签（自下而上）
const TREE_TIERS = [
  { tier: 1, label: "现实基线" },
  { tier: 2, label: "延伸可达" },
  { tier: 3, label: "工程挑战" },
  { tier: 4, label: "法则边界" },
  { tier: 5, label: "世界观限定" }
];

// 把一条造物条目挂载到模板节点：同分支内找 level 最接近的节点
function treeMountTech(tech) {
  const bKey = TREE_DOMAIN_MAP[tech.domain];
  if (!bKey) return null;
  const branch = TREE_BRANCHES.find(b => b.key === bKey);
  if (!branch) return null;
  let best = null, bestDiff = Infinity;
  for (const n of branch.nodes) {
    const diff = Math.abs(n.level - tech.level);
    if (diff < bestDiff) { bestDiff = diff; best = n; }
  }
  return best ? best.id : null;
}

// 汇总所有模板节点 id
function treeAllNodeIds() {
  const ids = [];
  for (const b of TREE_BRANCHES) for (const n of b.nodes) ids.push(n.id);
  return ids;
}
