// ============================================================
// 方法论核心数据
// 八条核心原则，分两组：
//   判定之道（HOW TO JUDGE）—— 在动手之前，先给幻想定坐标
//   工程之道（HOW TO BUILD）—— 把「原则上可行」造成实物
// 每条含编号 M-01~M-08、名称、一句话原则、展开说明
// STAGE_METHODS：六阶段 SOP 与方法论的编织关系（每条恰好落位一次）
// ============================================================
const METHOD_GROUPS = {
  judge: {
    key: "judge",
    label: "判定之道",
    en: "HOW TO JUDGE",
    desc: "在动手之前，先给幻想定坐标——判断一项技术离现实究竟有多远。",
  },
  build: {
    key: "build",
    label: "工程之道",
    en: "HOW TO BUILD",
    desc: "把「原则上可行」造成实物——判定给出行踪，工程负责追上它。",
  },
};

const METHODS = [
  // —— 判定之道 ——
  {
    key: "empirical", code: "M-01", group: "judge",
    label: "实证优先",
    principle: "物理定律是唯一的裁判。",
    detail: "判断只认实验事实与已验证的理论。一部作品再迷人，也不能为它的设定作证；一句「看起来可行」，在这里不算论证。",
  },
  {
    key: "first-principles", code: "M-02", group: "judge",
    label: "原理",
    principle: "回到方程与常数，不做类比。",
    detail: "「现在的手机很像剧中的通讯器」是修辞，不是论证。每条设定都从物理底层重新推演一遍，哪怕结论早已人人皆知。",
  },
  {
    key: "energy-audit", code: "M-03", group: "judge",
    label: "守恒核算",
    principle: "先算能量账、熵账、强度账。",
    detail: "任何方案先过三本账：能量从哪来，熵往哪去，材料扛不扛得住。宇宙不接受赊账——账算不平的方案，工程上必然破产。",
  },
  {
    key: "gap-typology", code: "M-04", group: "judge",
    label: "差距分型",
    principle: "分清「工程差距」与「原理差距」。",
    detail: "差的是钱、工艺和时间，还是差一条物理定律？前者是 L1–L3 的事，后者才落在 L4–L5。分型一旦做错，后面的路线图全是白纸。",
  },
  // —— 工程之道 ——
  {
    key: "decomposition", code: "M-05", group: "build",
    label: "系统拆解",
    principle: "拆到每个零件都能被单独审判。",
    detail: "任何技术都是子系统之网。拆不干净，就谈不上判定；拆得干净，难题就变成清单——而清单是可以逐项解决的。",
  },
  {
    key: "dependency", code: "M-06", group: "build",
    label: "依赖显性",
    principle: "可行性是前置科技的乘积。",
    detail: "一项科技的可行概率，等于所有前置科技可行概率的连乘。图纸画得再漂亮，也救不了「负质量材料」这一环——最弱的一环决定成败。",
  },
  {
    key: "super-engineer", code: "M-07", group: "build",
    label: "超级工程",
    principle: "不满足于「可能」，要回答「怎么造」。",
    detail: "材料、工艺、能源、预算，逐项落到可执行的步骤。哪怕结论是「此步无解」，也要写明卡在哪一环、差多少个量级。",
  },
  {
    key: "honest-boundary", code: "M-08", group: "build",
    label: "边界诚实",
    principle: "不知道就说不知道。",
    detail: "对 L5 条目写明是哪一条定律关上了门；对原理未明的领域，宁可写「暂时不通」，不写「永不」——科学史偏爱留下活口的人。",
  },
];

// 六阶段 SOP ↔ 方法论编织（key 为阶段编号）
// SOP-1 拆解 → 系统拆解；SOP-2 判定定级 → 实证/第一性/差距分型；
// SOP-3 建模 → 守恒核算；SOP-4 攻关 → 依赖显性（抓最弱一环）；
// SOP-5 造原型 → 超级工程；SOP-6 验证 → 边界诚实（测试不过就是不过）
const STAGE_METHODS = {
  "SOP-1": ["decomposition"],
  "SOP-2": ["empirical", "first-principles", "gap-typology"],
  "SOP-3": ["energy-audit"],
  "SOP-4": ["dependency"],
  "SOP-5": ["super-engineer"],
  "SOP-6": ["honest-boundary"],
};

// 辅助：按 key 取方法论
function getMethod(key) {
  return METHODS.find(m => m.key === key) || null;
}
