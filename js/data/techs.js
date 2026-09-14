// ============================================================
// 奇幻造物条目数据（核心）
// 每一条：世界出处、实现分级、所属领域、原理分析、实现路径、依赖关系
// dependencies 为"本造物所依赖的前置造物 id"，用于科技树 DAG
// verdict: achieved(符合) / breakthrough(需突破) / violated(违反法则)
// ============================================================
const TECHS = [
  // ===================== 现实基线（神话·传说锚点） =====================
  {
    id: "real-metallurgy",
    name: "真实冶金与锻造",
    aliases: ["青铜", "钢铁冶炼"],
    workId: "mythology", level: "L1", domain: "alchemy",
    summary: "从矿石冶炼金属、锻造合金，是人类最古老的技术之一，神话中的神兵多以此为原型。",
    description: "从青铜器到坩埚钢，人类用数千年的时间把地下的石头变成兵刃与工具。秘银、瓦雷利亚钢的传说，本质上都是对"更好的钢铁"的想象投射。",
    firstPrinciples: [
      { principle: "高温还原金属氧化物得金属", verdict: "achieved", note: "高炉、电弧炉均为成熟工业，原理完全成立。" },
      { principle: "合金化改善强度与韧性", verdict: "achieved", note: "现代冶金可定制性能，远超传说中的神兵描述。" }
    ],
    implementation: { current: "现代冶金已能生产远超任何神话兵器的材料（如马氏体时效钢、钛合金）。", path: ["现实参考：坩埚钢、大马士革钢、现代合金设计。", "理论可行性：完全成立，是工程而非原理问题。", "预研路径：向更高比强度、自修复、形状记忆方向演进。"], blockers: [], sopStage: "SOP-1 定义与拆解" },
    dependencies: [], tags: ["炼金", "冶金", "材料"]
  },
  {
    id: "real-herbalism",
    name: "草药与疗愈",
    aliases: ["药典", "自然疗法"],
    workId: "mythology", level: "L1", domain: "alchemy",
    summary: "以植物提取有效成分制药，现实中早已是药学的根基，也是魔药体系的现实母体。",
    description: "阿司匹林来自柳树皮，青蒿素来自青蒿——神话里的"治愈草"很多都有真实原型。魔药、煎药、突变药剂，都是把这套逻辑推到极致。",
    firstPrinciples: [
      { principle: "植物次生代谢物具生理活性", verdict: "achieved", note: "现代药物化学已系统验证并纯化大量植物活性成分。" },
      { principle: "配方协同增效", verdict: "achieved", note: "复方制剂、缓释系统是成熟工程。" }
    ],
    implementation: { current: "植物药现代化、标准化提取已是制药常规。", path: ["现实参考：提取纯化、靶点与剂量研究。", "理论可行性：成立。", "预研路径：从经验配方走向精准分子药理。"], blockers: [], sopStage: "SOP-1 定义与拆解" },
    dependencies: [], tags: ["炼金", "草药", "药学"]
  },
  {
    id: "real-gunpowder",
    name: "黑火药与燃烧剂",
    aliases: ["火药", "希腊火"],
    workId: "mythology", level: "L1", domain: "alchemy",
    summary: "以硝石、硫磺、木炭混合的燃烧与推进剂，是真实存在且改变历史的炼金产物。",
    description: "中国的火药与拜占庭的希腊火，证明了"配方即威力"。野火、炼金炸弹等设定，是其夸张化的后代。",
    firstPrinciples: [
      { principle: "氧化剂+燃料快速放热", verdict: "achieved", note: "固体推进剂原理清楚，工程成熟。" },
      { principle: "受控点火与稳定燃烧", verdict: "achieved", note: "现代火工品安全可控。" }
    ],
    implementation: { current: "火药及现代高能推进剂早已量产。", path: ["现实参考：黑火药、无烟火药、燃烧弹。", "理论可行性：成立。", "预研路径：更高能量密度与稳定性。"], blockers: [], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["炼金", "燃烧", "武器"]
  },
  {
    id: "real-flight",
    name: "飞行与空气动力学",
    aliases: ["航空器", "升力"],
    workId: "mythology", level: "L1", domain: "realm",
    summary: "重于空气的飞行已在现实中实现，是飞空艇、传送门等奇幻造物的物理地基。",
    description: "从风筝到喷气客机，人类已征服低空与平流层。飞空艇、浮空城的前提——产生并控制升力——早已不是问题。",
    firstPrinciples: [
      { principle: "机翼产生升力（伯努利/环量）", verdict: "achieved", note: "空气动力学成熟，飞行器日常运行。" },
      { principle: "推进克服阻力", verdict: "achieved", note: "涡轮、电动推进均已商用。" }
    ],
    implementation: { current: "固定翼、旋翼、升力体飞行器遍布全球。", path: ["现实参考：飞艇、无人机、eVTOL。", "理论可行性：成立。", "预研路径：垂直起降与分布式推进。"], blockers: [], sopStage: "SOP-1 定义与拆解" },
    dependencies: [], tags: ["界域", "飞行", "航空"]
  },
  {
    id: "steam-engine",
    name: "蒸汽机与热机",
    aliases: ["外燃机", "锅炉"],
    workId: "mythology", level: "L1", domain: "artifact",
    summary: "将热能转为机械能的通用动力装置，是一切机械造物、发条与蒸汽坦克的源头。",
    description: "瓦特之后，蒸汽机驱动了第一次工业革命。齿轮、连杆、凸轮——这套机械语言是魔像、矮人机械、蒸汽坦克的现实祖先。",
    firstPrinciples: [
      { principle: "蒸汽膨胀做功（热力学）", verdict: "achieved", note: "卡诺循环与热机工程完全成立。" },
      { principle: "机械传动与运动合成", verdict: "achieved", note: "齿轮、连杆、凸轮机构成熟。" }
    ],
    implementation: { current: "热机与精密机械是当代工业基础。", path: ["现实参考：蒸汽机、内燃机、机器人关节。", "理论可行性：成立。", "预研路径：高能效与微型化机械。"], blockers: [], sopStage: "SOP-1 定义与拆解" },
    dependencies: [], tags: ["造物", "机械", "动力"]
  },
  {
    id: "dragon-myth",
    name: "龙之传说",
    aliases: ["巨龙", "dragon"],
    workId: "mythology", level: "L5", domain: "beast",
    summary: "跨文明反复出现的喷火巨翼爬行动物，是幻想生物的原型，现实无对应实体。",
    description: "从北欧的尼德霍格到中国的应龙，龙的形态各异却共享"巨大、飞行、危险"的内核。它是所有"龙"类造物的神话母体。",
    firstPrinciples: [
      { principle: "楼宇级质量的生物飞行", verdict: "violated", note: "方解石骨骼与肌肉的升力/重量比在现实尺度上不可维持。" },
      { principle: "生物体内生成并喷射可燃/腐蚀液体", verdict: "violated", note: "无已知生化通路能在活体内安全储存与点燃大量燃料。" }
    ],
    implementation: { current: "现实无活体龙；仅有化石近亲（翼龙、恐龙）与机械仿生。", path: ["现实参考：大型航空器、机械龙偶。", "理论可行性：受尺度与代谢限制，生物学上不可行。", "预研路径：以无人飞行器模拟"龙"的形态与功能，而非生物学复制。"], blockers: ["生物飞行尺度极限", "内源喷火生化通路", "能量代谢"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["生灵", "龙", "神话"]
  },
  {
    id: "necromancy-folklore",
    name: "招魂与亡灵传说",
    aliases: ["通灵", "亡灵术"],
    workId: "mythology", level: "L5", domain: "lore",
    summary: "召唤并驱使逝者灵魂或尸体的古老母题，现实无对应，是亡灵天灾、魂器的原型。",
    description: "几乎每个文明都有与死者沟通的仪式想象。它把"死亡可逆""意识可脱离身体"这两个根本愿望，凝结成巫术母题。",
    firstPrinciples: [
      { principle: "意识脱离大脑独立存在", verdict: "violated", note: "目前所有证据指向意识是脑的涌现，无独立灵魂的物理证据。" },
      { principle: "以意志驱动尸体", verdict: "violated", note: "死亡后组织分解，无能量来源维持运动。" }
    ],
    implementation: { current: "无；仅有神经科学对濒死与意识的解释性研究。", path: ["现实参考：脑机接口、意识研究。", "理论可行性：违反已知神经科学。", "预研路径：以"意识上传"等工程议题近似，而非巫术复制。"], blockers: ["意识本质", "灵魂实体性"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["秘术", "亡灵", "灵魂"]
  },
  {
    id: "divination-folklore",
    name: "占卜与星命",
    aliases: ["占星", "卜算"],
    workId: "mythology", level: "L3", domain: "lore",
    summary: "通过观察天象、牌阵、卦象推测命运，现实中可部分对应为模式识别与概率推理。",
    description: "占星、周易、塔罗共享"从表象推演未知"的结构。其现代近似是统计预测与贝叶斯推断——虽不神秘，但确有信息价值。",
    firstPrinciples: [
      { principle: "从观测推断未知", verdict: "achieved", note: "贝叶斯推理、时间序列预测已大规模应用。" },
      { principle: "天体位置决定个人命运", verdict: "violated", note: "无机制使遥远天体的几何布局作用于个体命运。" }
    ],
    implementation: { current: "预测科学（气象、经济、舆情）已成体系；占星本身无科学支撑。", path: ["现实参考：计算社会科学、AI 预测。", "理论可行性：预测可行，神秘因果不成立。", "预研路径：把"占卜"定位为受限的贝叶斯推断工具。"], blockers: ["神秘因果缺失", "数据噪声"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: [], tags: ["秘术", "占卜", "预测"]
  },
  {
    id: "alchemy-history",
    name: "历史炼金术",
    aliases: ["点金术", "贤者之术"],
    workId: "mythology", level: "L2", domain: "alchemy",
    summary: "前科学时代以实验追求"贱金属变黄金"与"长生"，虽目标落空，却孕育了化学本身。",
    description: "炼金术士发明了蒸馏、结晶、酸碱操作，留下大量真实工艺。它把"转化物质"的执念，变成了现代化学的胚胎。",
    firstPrinciples: [
      { principle: "物质可被精制与转化", verdict: "achieved", note: "核嬗变确实能把一种元素变为另一种，但需要粒子加速器。" },
      { principle: "以配方实现元素蜕变", verdict: "breakthrough", note: "元素嬗变在实验室可行（如铋→金），但成本远超产物价值。" }
    ],
    implementation: { current: "化学与核物理已能实现部分"转化"，但点石成金不经济。", path: ["现实参考：核嬗变、湿法冶金。", "理论可行性：元素可变，能量账极不划算。", "预研路径：聚焦有价值的转化（材料再生、核废料处理）。"], blockers: ["嬗变能耗", "经济性"], sopStage: "SOP-2 原理分析" },
    dependencies: ["real-metallurgy"], tags: ["炼金", "历史", "转化"]
  },
  {
    id: "monster-lore",
    name: "怪物知识与狩猎",
    aliases: ["博物学", "狩猎术"],
    workId: "witcher", level: "L2", domain: "beast",
    summary: "系统记录生物习性、弱点与应对的博物学，现实中对应动物行为与生态研究。",
    description: "猎魔人以图谱与谚语记录怪物，本质是田野博物学。现代生态学、寄生虫学、行为学已能系统解释多数"怪物"现象。",
    firstPrinciples: [
      { principle: "生物习性可被观察归类", verdict: "achieved", note: "分类学、行为生态学成熟。" },
      { principle: "以知识针对性制服危险生物", verdict: "achieved", note: "毒理、防疫、控制学均为现实工程。" }
    ],
    implementation: { current: "生态学、兽医学、毒理学已体系化。", path: ["现实参考：物种数据库、疫苗与解毒剂。", "理论可行性：成立。", "预研路径：AI 辅助的物种识别与风险评估。"], blockers: [], sopStage: "SOP-1 定义与拆解" },
    dependencies: ["real-herbalism"], tags: ["生灵", "博物", "狩猎"]
  },
  {
    id: "metamaterial-cloak",
    name: "超材料隐身",
    aliases: ["隐身斗篷", "折射斗篷"],
    workId: "harry-potter", level: "L2", domain: "artifact",
    summary: "以人工微结构引导电磁波绕行实现"不可见"，现实中已在实验室频段验证。",
    description: "隐身衣的奇幻想象，在现实里对应超材料（metamaterial）对光/电磁波路径的操控。目前可在微波段实现窄带隐身。",
    firstPrinciples: [
      { principle: "超材料调控波前", verdict: "achieved", note: "负折射率材料已被制造并验证。" },
      { principle: "全频段可见光隐身", verdict: "breakthrough", note: "需在纳米尺度排布、覆盖宽频、低损耗，工程极难。" }
    ],
    implementation: { current: "微波段隐身斗篷已有原型；可见光宽频仍远。", path: ["现实参考：超材料、变换光学。", "理论可行性：原理成立，工艺受限。", "预研路径：从单频到宽频，从电磁波到声波/热。"], blockers: ["纳米制造精度", "宽频损耗", "体积"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: [], tags: ["造物", "隐身", "光学"]
  },
  {
    id: "portal-basics",
    name: "传送与空间折叠（理论）",
    aliases: ["量子隐形传态", "空间跳跃"],
    workId: "dnd", level: "L3", domain: "realm",
    summary: "把物体或信息在两点间瞬时转移，现实里的量子隐形传态能传态不能传物。",
    description: "飞路网、异界门、魔衣橱共享"跨越距离"的内核。现实的量子隐形传态可传输量子态（需经典信道），但传"物"仍属科幻/奇幻。",
    firstPrinciples: [
      { principle: "量子态可远程重建", verdict: "achieved", note: "量子隐形传态已实验验证，但仅传态、不超光速。" },
      { principle: "宏观物体瞬时位移", verdict: "breakthrough", note: "需解构并重建约 10²⁵ 量级的原子，且不破坏信息，远超工程。" }
    ],
    implementation: { current: "量子隐形传态传态不传物；宏观传送无路径。", path: ["现实参考：量子通信、3D 打印+物流。", "理论可行性：传物违反热力学与信息约束。", "预研路径：以'扫描-传输信息-重打印'近似，代价是原件销毁。"], blockers: ["原子级重建", "量子退相干", "光速极限"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["real-flight"], tags: ["界域", "传送", "空间"]
  },
  {
    id: "scrying",
    name: "远程窥视（占卜镜）",
    aliases: ["水晶球", "真知视界"],
    workId: "lord-of-rings", level: "L3", domain: "lore",
    summary: "隔空观察远方之人事物，现实对应为监控网络、卫星与遥感。",
    description: "真知晶球、鱼梁木的绿视共享"看见远处"的愿望。现实中，摄像头、卫星、无人机已让"千里眼"成为基础设施。",
    firstPrinciples: [
      { principle: "远程采集图像并回传", verdict: "achieved", note: "卫星、监控、遥感完全实现。" },
      { principle: "穿透遮挡/任意地点直视", verdict: "breakthrough", note: "受视线、遮挡与隐私限制，无法"全知"。" }
    ],
    implementation: { current: "地球观测与监控网络已常态化。", path: ["现实参考：遥感、IoT 视觉。", "理论可行性：可见处已可行。", "预研路径：更广覆盖的分布式视觉传感。"], blockers: ["遮挡", "隐私与算力"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["divination-folklore"], tags: ["秘术", "窥视", "遥感"]
  },
  {
    id: "controlled-mutation",
    name: "定向诱变与改造",
    aliases: ["基因改造", "突变育种"],
    workId: "witcher", level: "L3", domain: "beast",
    summary: "以化学/辐射/基因手段定向改变生物性状，现实中对应诱变育种与基因编辑。",
    description: "鼠人、突变猎魔人、魔改生物都建立在"可控改造生命"之上。CRISPR 与诱变育种已能实现部分，但稳定、可控、跨代可遗传的全身改造仍难。",
    firstPrinciples: [
      { principle: "改变基因可改变性状", verdict: "achieved", note: "基因编辑与诱变育种已规模化。" },
      { principle: "成体整体重构（非局部）", verdict: "breakthrough", note: "成年个体的全身、神经、代谢重排超出当前能力。" }
    ],
    implementation: { current: "局部基因治疗、作物诱变已应用；全身重构无。", path: ["现实参考：CRISPR、基因治疗、合成生物。", "理论可行性：单基因可行，系统重构难。", "预研路径：从治疗走向受限的增强与改造。"], blockers: ["系统级重排", "脱靶与伦理"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["real-herbalism"], tags: ["生灵", "基因", "改造"]
  },
  {
    id: "transmutation",
    name: "元素嬗变（炼金转化）",
    aliases: ["点石成金", "物质转化"],
    workId: "mythology", level: "L3", domain: "alchemy",
    summary: "把一种元素变为另一种，现实里核嬗变可做到，但需要巨大能量且极不经济。",
    description: "炼金术的终极目标——贱金属变黄金——在核物理层面确有可能，只是代价高昂。它是"物质可被重写"这一执念的科学回声。",
    firstPrinciples: [
      { principle: "原子核可被改变（嬗变）", verdict: "achieved", note: "核反应已能改变元素种类。" },
      { principle: "低成本日常化转化", verdict: "breakthrough", note: "能耗与核废料的约束使经济转化不可行。" }
    ],
    implementation: { current: "实验室核嬗变可行；商业点金不经济。", path: ["现实参考：粒子加速器、核反应堆嬗变。", "理论可行性：成立但昂贵。", "预研路径：聚焦贵重金属回收与核废料处理。"], blockers: ["能耗", "经济性", "放射性"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["alchemy-history"], tags: ["炼金", "嬗变", "元素"]
  },
  {
    id: "clockwork-automata",
    name: "发条与自动机",
    aliases: ["机械人偶", "automaton"],
    workId: "warhammer", level: "L2", domain: "artifact",
    summary: "以齿轮与程序预演动作的自动机械，现实里从雅克德罗人偶到现代机器人皆其后代。",
    description: "魔像、矮人机械、蒸汽坦克都建立在"预编程机械可自主运行"之上。今天的机器人与 CNC 正是这条线的延伸。",
    firstPrinciples: [
      { principle: "机械可存储并执行程序", verdict: "achieved", note: "数控、机器人、PLC 已成熟。" },
      { principle: "自主感知与决策", verdict: "breakthrough", note: "开放环境自主决策仍需 AI 突破。" }
    ],
    implementation: { current: "工业机器人、自动驾驶已商用。", path: ["现实参考：机器人、控制系统。", "理论可行性：成立。", "预研路径：更高自主性与适应性。"], blockers: ["开放环境智能"], sopStage: "SOP-5 工程实现与原型" },
    dependencies: ["steam-engine"], tags: ["造物", "机械", "自动机"]
  },
  {
    id: "soul-storage",
    name: "灵魂锚定与存储",
    aliases: ["魂器原理", "灵魂容器"],
    workId: "harry-potter", level: "L4", domain: "lore",
    summary: "把人格/意识锚定于外物以求存续，现实最接近的是意识上传与数字人格的设想。",
    description: "魂器、灵魂石、亡灵复生都假设"自我可脱离身体被保存"。这是意识哲学与脑科学的前沿难题。",
    firstPrinciples: [
      { principle: "意识可被完整编码", verdict: "breakthrough", note: "意识的本质与可计算性尚未解决。" },
      { principle: "编码后的自我可重放", verdict: "breakthrough", note: "即便编码，重放是否仍是"同一自我"存疑。" }
    ],
    implementation: { current: "脑机接口与数字存档研究起步；完整灵魂存储无。", path: ["现实参考：全脑仿真、意识上传设想。", "理论可行性：触及意识本质，属 L4。", "预研路径：先实现局部记忆与人格的数字孪生。"], blockers: ["意识本质", "自我同一性", "载体寿命"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["necromancy-folklore"], tags: ["秘术", "灵魂", "意识"]
  },
  {
    id: "true-name",
    name: "真名支配",
    aliases: ["真名", "言灵"],
    workId: "earthsea", level: "L5", domain: "magic",
    summary: "知晓一物之真名便可支配它，是所有"言语即因果"类魔法的公理源头。",
    description: "地海的真名、龙吼、咒文共享一个设定：世界的内在名称即其控制权。现实中语言只描述世界，不构造世界。",
    firstPrinciples: [
      { principle: "名称直接赋予对事物的控制权", verdict: "violated", note: "语言是符号，不携带改变现实的因果力。" },
      { principle: "以吟诵直接改写现实", verdict: "violated", note: "无机制使声音/符号越过物理过程改变物质状态。" }
    ],
    implementation: { current: "无；仅存在于语言哲学与设定学中。", path: ["现实参考：编程（对机器）是弱化的"命名即控制"。", "理论可行性：对物理世界违反法则。", "预研路径：把"真名"理解为强 AI 对系统的完全接口权限。"], blockers: ["符号-因果鸿沟", "法则独立性"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["魔法", "真名", "言灵"]
  },
  {
    id: "spellcasting",
    name: "法术位施法",
    aliases: ["施法", "咒文"],
    workId: "dnd", level: "L5", domain: "magic",
    summary: "以意志与咒文直接驱动超自然效应，是绝大多数奇幻魔法的统一范式。",
    description: "从 D&D 的法术位到哈利波特的魔杖，魔法被抽象为"消耗资源→产生效应"的系统。其公理是"意图可直接成为结果"。",
    firstPrinciples: [
      { principle: "意图直接产生物理效应", verdict: "violated", note: "现实中意图须经身体与工具的中介，无直接因果通道。" },
      { principle: "能量来自可恢复的法术池", verdict: "violated", note: "无已知的"魔法能量"储量与恢复机制。" }
    ],
    implementation: { current: "无；工程上以机器与外骨骼近似"赋能"。", path: ["现实参考：外骨骼、远程操控、自动化。", "理论可行性：违反能量守恒与因果中介。", "预研路径：以可穿戴增强+AI 模拟"所想即所得"的弱形式。"], blockers: ["直接因果通道", "魔法能量", "守恒定律"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["魔法", "施法", "咒文"]
  },
  {
    id: "the-one-ring",
    name: "统御魔戒",
    aliases: ["至尊魔戒", "魔戒"],
    workId: "lord-of-rings", level: "L5", domain: "artifact",
    summary: "以一句咒文统御众戒、放大意志并赋予隐形的概念性造物，依赖"咒文即法则"的设定。",
    description: "至尊魔戒是"物品承载意志与支配力"的极致。现实中物品不承载意志，也不跨空间施加支配。",
    firstPrinciples: [
      { principle: "器物承载并可施加意志", verdict: "violated", note: "无机制使物体获得跨距的支配力。" },
      { principle: "咒文绑定主权（统御众戒）", verdict: "violated", note: "依赖设定的"名分即权能"公理。" }
    ],
    implementation: { current: "无；现实中以品牌/密钥/权限系统弱近似"支配"。", path: ["现实参考：权限系统、催眠与影响力。", "理论可行性：违反法则。", "预研路径：以中心化控制协议模拟"统御"的弱形式。"], blockers: ["意志物化", "跨距支配"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["造物", "魔戒", "支配"]
  },

  // ===================== 指环王 =====================
  {
    id: "mithril",
    name: "秘银锻造",
    aliases: ["mithril", "银钢"],
    workId: "lord-of-rings", level: "L2", domain: "artifact",
    summary: "轻于银而坚于钢的稀有金属甲胄，现实中对应高比强度合金与复合材料。",
    description: "秘银是托尔金笔下"理想材料"的代表。今天的钛合金、陶瓷复合装甲已在"轻且硬"上接近其描述。",
    firstPrinciples: [
      { principle: "高比强度材料", verdict: "achieved", note: "钛合金、碳纤维、陶瓷复合已达或超越描述。" },
      { principle: "自带魔法抗性", verdict: "violated", note: "材料无法天然抵御"魔法"这一非物理攻击。" }
    ],
    implementation: { current: "现代防护材料性能已可覆盖其描述。", path: ["现实参考：钛合金、PE 纤维、陶瓷装甲。", "理论可行性：物理性能成立。", "预研路径：自修复、自适应装甲。"], blockers: ["魔法抗性（不可实现）"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["real-metallurgy"], tags: ["造物", "材料", "甲胄"]
  },
  {
    id: "palantir",
    name: "真知晶球",
    aliases: ["palantír", "远见石"],
    workId: "lord-of-rings", level: "L4", domain: "lore",
    summary: "隔远距窥视并与他者心灵相联的晶球，现实对应为远程视觉+通信，但"心灵联机"超出现实。",
    description: "真知晶球把"看见远方"与"思维互联"结合。前者已被监控网络实现，后者触及脑机接口的远景。",
    firstPrinciples: [
      { principle: "远程视觉", verdict: "achieved", note: "遥感与监控已覆盖。" },
      { principle: "跨距心灵直连", verdict: "breakthrough", note: "脑际直接通信仍处实验早期。" }
    ],
    implementation: { current: "远程视觉成熟；脑际直连探索中。", path: ["现实参考：卫星、脑机接口。", "理论可行性：视觉可行，心灵联机难。", "预研路径：以XR+通信模拟"共视"。"], blockers: ["心灵直连", "带宽"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["scrying"], tags: ["秘术", "晶球", "窥视"]
  },
  {
    id: "ent",
    name: "树人（古老生灵）",
    aliases: ["Ent", "牧树者"],
    workId: "lord-of-rings", level: "L4", domain: "beast",
    summary: "以树木为身、能言会思的古老生灵，现实对应为植物智能与合成生物的远景。",
    description: "树人是"植物获得行动与意识"的想象。现实里植物有信号网络但无神经，全株移动与言语远超生物现状。",
    firstPrinciples: [
      { principle: "植物具分布式信号网络", verdict: "achieved", note: "植物电化学信号已被证实。" },
      { principle: "植物整体移动与言语", verdict: "violated", note: "缺乏肌肉/神经支撑移动与发声。" }
    ],
    implementation: { current: "无移动植物；机器人与仿生植物研究活跃。", path: ["现实参考：软体机器人、植物电调控。", "理论可行性：移动植物违反生物结构。", "预研路径：以植物-机器混合体近似。"], blockers: ["植物运动结构", "植物意识"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["controlled-mutation"], tags: ["生灵", "植物", "合成生物"]
  },
  {
    id: "rings-of-power",
    name: "统御众戒",
    aliases: ["力量之戒", "九戒七戒"],
    workId: "lord-of-rings", level: "L5", domain: "artifact",
    summary: "由至尊魔戒统御的一批赋予能力（不朽、力量）的戒指，属概念性造物。",
    description: "众戒把"佩戴即获得权能"极致化，并受至尊魔戒支配。其机制完全依赖世界观设定的名分公理。",
    firstPrinciples: [
      { principle: "佩戴即获得超凡权能", verdict: "violated", note: "物品无法凭佩戴授予物理上不可能的权能。" },
      { principle: "受单一器物远程支配", verdict: "violated", note: "依赖至尊魔戒的设定逻辑。" }
    ],
    implementation: { current: "无；以智能戒指、AR 设备弱近似"增强"。", path: ["现实参考：可穿戴设备、神经刺激。", "理论可行性：违反法则。", "预研路径：以个性化增强设备模拟局部"权能"。"], blockers: ["权能授予", "远程支配"], sopStage: "SOP-2 原理分析" },
    dependencies: ["the-one-ring"], tags: ["造物", "魔戒", "权能"]
  },

  // ===================== 哈利·波特 =====================
  {
    id: "wand-magic",
    name: "魔杖施法",
    aliases: ["wand", "咒语"],
    workId: "harry-potter", level: "L5", domain: "magic",
    summary: "以魔杖为媒介、手势+咒文直接改写现实，是"工具化魔法"的代表。",
    description: "魔杖把分散的魔法收束进一个手持接口。它仍是"意图直接成真"的魔法公理，只是加了媒介与学习曲线。",
    firstPrinciples: [
      { principle: "媒介放大并定向施法", verdict: "violated", note: "无物理通道使咒文变现实。" },
      { principle: "学习即可掌握因果改写", verdict: "violated", note: "依赖设定的"训练即授权"。" }
    ],
    implementation: { current: "无；以遥控设备弱近似"指哪打哪"。", path: ["现实参考：遥控、AR 标注。", "理论可行性：违反法则。", "预研路径：以"增强现实+自动化"模拟施法体验。"], blockers: ["因果改写", "魔法能量"], sopStage: "SOP-2 原理分析" },
    dependencies: ["spellcasting"], tags: ["魔法", "魔杖", "咒语"]
  },
  {
    id: "invisibility-cloak",
    name: "隐身衣",
    aliases: ["隐形斗篷", "cloak"],
    workId: "harry-potter", level: "L3", domain: "artifact",
    summary: "穿戴后不可见的衣物，现实对应为超材料隐身（窄带）与主动伪装。",
    description: "隐身衣把"不被看见"具象为一件衣服。现实的超材料斗篷与自适应迷彩已能在受限条件下实现部分隐身。",
    firstPrinciples: [
      { principle: "引导波绕过物体", verdict: "achieved", note: "超材料在微波段验证。" },
      { principle: "全可见光、任意姿态隐身", verdict: "breakthrough", note: "宽频、动态、低成本仍极难。" }
    ],
    implementation: { current: "微波段与热/声隐身有原型；可见光全身隐身无。", path: ["现实参考：超材料、自适应迷彩。", "理论可行性：受限可行。", "预研路径：从单频到宽频、从设备到织物。"], blockers: ["宽频", "动态", "织物化"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["metamaterial-cloak"], tags: ["造物", "隐身", "织物"]
  },
  {
    id: "potions",
    name: "魔药炼制",
    aliases: ["药剂", "brew"],
    workId: "harry-potter", level: "L2", domain: "alchemy",
    summary: "以草药与生物材料熬煮出超常效用的药剂，现实对应为药物化学与复方制剂。",
    description: "魔药把"配方即效果"推到奇幻程度（变形、增慧）。其现实底座是真实药理学——只是现实中配不出"变身水"。",
    firstPrinciples: [
      { principle: "配方产生生理效应", verdict: "achieved", note: "药物化学成熟。" },
      { principle: "大幅改写形态/本质", verdict: "violated", note: "无药剂能改变物种形态。" }
    ],
    implementation: { current: "真实药剂广泛存在；变身/变形无。", path: ["现实参考：激素、基因药物。", "理论可行性：常规效应可行，本质改写不可。", "预研路径：以精准药理逼近"强效"。"], blockers: ["形态改写"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["real-herbalism"], tags: ["炼金", "药剂", "草药"]
  },
  {
    id: "horcrux",
    name: "魂器",
    aliases: ["horcrux", "分裂灵魂"],
    workId: "harry-potter", level: "L5", domain: "lore",
    summary: "裂魂藏入器物以求永生，是"灵魂可分割存储"的极端化，完全依赖设定公理。",
    description: "魂器把灵魂容器推到"分裂自我以避死"的极致。现实中灵魂不可分、不可裂，意识同一性也无法如此切割。",
    firstPrinciples: [
      { principle: "灵魂可主动分裂", verdict: "violated", note: "无灵魂实体，更无分裂机制。" },
      { principle: "碎片锚定外物续命", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以数字人格备份弱近似。", path: ["现实参考：意识上传设想。", "理论可行性：违反法则。", "预研路径：以分布式数字自我近似"续命"。"], blockers: ["灵魂分裂", "自我同一性"], sopStage: "SOP-2 原理分析" },
    dependencies: ["soul-storage"], tags: ["秘术", "魂器", "永生"]
  },
  {
    id: "floo-network",
    name: "飞路网（壁炉传送）",
    aliases: ["飞路粉", "floo"],
    workId: "harry-potter", level: "L3", domain: "realm",
    summary: "踏入壁炉并念出地名即可抵达对应壁炉，是"定点传送"的温馨化版本。",
    description: "飞路网把传送收束为"已知节点间瞬移"。现实中对应分布式运输+通信，但物理瞬移仍不可行。",
    firstPrinciples: [
      { principle: "已知节点间瞬移", verdict: "breakthrough", note: "宏观传送受信息/热力学约束。" },
      { principle: "经火焰通道位移", verdict: "violated", note: "无"火焰通道"这一物理介质。" }
    ],
    implementation: { current: "无瞬移；以高速交通+视频弱近似。", path: ["现实参考：高铁、远程呈现。", "理论可行性：违反约束。", "预研路径：以'重打印'近似，原件销毁。"], blockers: ["宏观传送", "信息重建"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["portal-basics"], tags: ["界域", "传送", "网络"]
  },
  {
    id: "patronus",
    name: "守护神咒",
    aliases: ["Patronus", "快乐护盾"],
    workId: "harry-potter", level: "L5", domain: "magic",
    summary: "以快乐记忆召唤银色护兽驱散黑暗生物，是纯情感驱动的魔法效应。",
    description: "守护神咒把"情绪直接具象为护体实体"极致化。现实中情绪影响生理但无法凝成实体生物。",
    firstPrinciples: [
      { principle: "情绪凝成实体护兽", verdict: "violated", note: "无机制使情感外化为物理实体。" },
      { principle: "对"黑暗"概念性克制", verdict: "violated", note: "依赖设定的善恶公理。" }
    ],
    implementation: { current: "无；以投影/机器人弱近似护体形象。", path: ["现实参考：情感计算、全息投影。", "理论可行性：违反法则。", "预研路径：以情感驱动的外显形象近似。"], blockers: ["情感物化", "概念克制"], sopStage: "SOP-2 原理分析" },
    dependencies: ["wand-magic"], tags: ["魔法", "守护", "情感"]
  },

  // ===================== 冰与火之歌 =====================
  {
    id: "valyrian-steel",
    name: "瓦雷利亚钢",
    aliases: ["龙钢", "Valyrian steel"],
    workId: "got", level: "L2", domain: "artifact",
    summary: "以陨铁折叠锻造、轻韧不朽的传奇钢材，现实对应为顶级大马士革钢与现代合金。",
    description: "瓦雷利亚钢是"失传神兵"的原型。今天的粉末冶金与折叠钢在性能上已可媲美其传说描述。",
    firstPrinciples: [
      { principle: "折叠锻造细化组织", verdict: "achieved", note: "大马士革钢、粉末冶金原理清楚。" },
      { principle: "永不锈蚀且轻韧", verdict: "achieved", note: "现代不锈钢与钛合金可覆盖。" }
    ],
    implementation: { current: "高端合金性能已超传说描述。", path: ["现实参考：大马士革钢、马氏体时效钢。", "理论可行性：成立。", "预研路径：自锐、自修复刃具。"], blockers: [], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["real-metallurgy"], tags: ["造物", "钢材", "兵器"]
  },
  {
    id: "dragons-got",
    name: "维斯特洛的龙",
    aliases: ["龙", "Dragon"],
    workId: "got", level: "L5", domain: "beast",
    summary: "体型如楼宇、喷吐可燃液体的活体飞行巨兽，受生物尺度与代谢限制不可实现。",
    description: "剧中的龙把神话龙具象为生物兵器。其飞行与喷火在现实生物物理上均不可维持。",
    firstPrinciples: [
      { principle: "巨型生物飞行", verdict: "violated", note: "升力/重量比在楼宇尺度不可维持。" },
      { principle: "内源喷火", verdict: "violated", note: "无安全的内源燃烧通路。" }
    ],
    implementation: { current: "无活体；机械龙与飞行器可模拟形态。", path: ["现实参考：大型无人机、机械龙偶。", "理论可行性：生物学不可行。", "预研路径：以无人平台模拟功能。"], blockers: ["尺度极限", "内源喷火"], sopStage: "SOP-2 原理分析" },
    dependencies: ["dragon-myth"], tags: ["生灵", "龙", "生物兵器"]
  },
  {
    id: "weirwood",
    name: "鱼梁木绿视",
    aliases: ["heart tree", "绿先知"],
    workId: "got", level: "L4", domain: "lore",
    summary: "通过嵌入鱼梁木的瞳孔远程窥视与预知，现实对应为分布式传感+通信。",
    description: "鱼梁木网络把"千里眼"植物化、网络化了。现实中遥感与监控可近似其视觉部分，预知仍不可得。",
    firstPrinciples: [
      { principle: "网络化的远程视觉", verdict: "achieved", note: "监控与卫星网络已实现。" },
      { principle: "预知未来", verdict: "breakthrough", note: "精确长时预测受混沌限制。" }
    ],
    implementation: { current: "远程视觉可行；预知无。", path: ["现实参考：传感网络、AI 预测。", "理论可行性：视觉可行，预知难。", "预研路径：分布式视觉+受限预测。"], blockers: ["预知", "混沌"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["scrying"], tags: ["秘术", "窥视", "网络"]
  },
  {
    id: "wildfire",
    name: "野火",
    aliases: ["炼金炸弹", " wildfire"],
    workId: "got", level: "L2", domain: "alchemy",
    summary: "比希腊火更剧烈、遇水反旺的绿色炼金燃烧剂，现实对应为高活性燃烧剂。",
    description: "野火是"失控的炼金产物"。现实中确有高活性燃烧剂（如铝热剂、白磷），但"遇水更旺"需特殊化学。",
    firstPrinciples: [
      { principle: "高活性自持燃烧", verdict: "achieved", note: "铝热剂、燃烧弹已验证。" },
      { principle: "遇水反而更旺", verdict: "breakthrough", note: "需遇水放能的配方，工程受限且危险。" }
    ],
    implementation: { current: "强燃烧剂存在；"遇水更旺"配方受限。", path: ["现实参考：铝热反应、储氢材料。", "理论可行性：部分可行。", "预研路径：更安全的强燃烧剂。"], blockers: ["遇水放能配方", "安全性"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["real-gunpowder"], tags: ["炼金", "燃烧", "武器"]
  },

  // ===================== 龙与地下城 =====================
  {
    id: "wish",
    name: "许愿术",
    aliases: ["Wish", "祈愿"],
    workId: "dnd", level: "L5", domain: "magic",
    summary: "以一句愿望直接重排现实因果，是魔法公理的极致——不耗能量，只耗"规则允许"。",
    description: "许愿术把"所愿即所得"推到全知全能的边缘。它不经由任何物理过程，是纯设定层面的因果改写。",
    firstPrinciples: [
      { principle: "愿望直接成为现实", verdict: "violated", note: "无任何机制使语句越过物理过程改变世界。" },
      { principle: "不产生能量/熵债", verdict: "violated", note: "违反能量守恒与热力学。" }
    ],
    implementation: { current: "无；以自动化/AI 弱近似"达成目标"。", path: ["现实参考：规划与执行系统。", "理论可行性：违反法则。", "预研路径：以强自动化近似"许愿"的工程面。"], blockers: ["因果改写", "守恒违反"], sopStage: "SOP-2 原理分析" },
    dependencies: ["spellcasting"], tags: ["魔法", "许愿", "因果"]
  },
  {
    id: "golem",
    name: "魔像",
    aliases: ["Golem", "构装体"],
    workId: "dnd", level: "L4", domain: "beast",
    summary: "以泥土/金属注入灵魂或咒文而活的构装体，现实对应为机器人与具身智能。",
    description: "魔像是"无生命物质被赋予行动"的想象。今天的机器人与具身 AI 已能在功能上高度近似。",
    firstPrinciples: [
      { principle: "物质被赋予行动", verdict: "achieved", note: "机器人已具行动力。" },
      { principle: "以"灵魂/咒文"激活", verdict: "breakthrough", note: "不需灵魂，软件+控制即可驱动。" }
    ],
    implementation: { current: "机器人与具身 AI 已商用。", path: ["现实参考：人形机器人、具身智能。", "理论可行性：功能可行。", "预研路径：更高自主性的通用机器人。"], blockers: ["通用自主", "常识推理"], sopStage: "SOP-5 工程实现与原型" },
    dependencies: ["clockwork-automata"], tags: ["生灵", "构装体", "机器人"]
  },
  {
    id: "portal-dnd",
    name: "异界门",
    aliases: ["Portal", "传送门"],
    workId: "dnd", level: "L3", domain: "realm",
    summary: "稳定开启连接两地的瞬时通道，现实对应为受限的传送理论与远程呈现。",
    description: "异界门把传送收束为"稳定的双向通道"。现实中宏观物体传送不可行，但通道的"连接"意象可由网络近似。",
    firstPrinciples: [
      { principle: "稳定空间通道", verdict: "breakthrough", note: "宏观传送受信息/热力学约束。" },
      { principle: "双向即时通行", verdict: "breakthrough", note: "无物理通道支持。" }
    ],
    implementation: { current: "无瞬移；以高速运输+远程呈现近似。", path: ["现实参考：远程操作、重打印设想。", "理论可行性：违反约束。", "预研路径：以机器人+通信模拟通道两端。"], blockers: ["空间通道", "信息重建"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["portal-basics"], tags: ["界域", "传送", "通道"]
  },
  {
    id: "raise-dead",
    name: "复活术",
    aliases: ["Resurrection", "复生"],
    workId: "dnd", level: "L4", domain: "lore",
    summary: "使死者复生，现实对应为濒死复苏与低温医学的远景，但真正"死而复生"不可得。",
    description: "复活术把"死亡可逆"直接施为。现实中死亡判定后脑不可逆损伤，复生超出当前医学。",
    firstPrinciples: [
      { principle: "临床死亡可复苏", verdict: "achieved", note: "CPR、除颤、亚低温已能挽救部分骤停。" },
      { principle: "脑死亡后完整复生", verdict: "breakthrough", note: "脑死亡后神经结构不可逆损毁。" }
    ],
    implementation: { current: "骤停复苏可行；脑死亡复生无。", path: ["现实参考：器官保存、神经修复。", "理论可行性：受限可行。", "预研路径：神经再生的长程研究。"], blockers: ["脑死亡不可逆", "神经重建"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["soul-storage"], tags: ["秘术", "复活", "生命"]
  },

  // ===================== 魔兽世界 =====================
  {
    id: "fel-magic",
    name: "邪能",
    aliases: ["Fel", "混沌绿火"],
    workId: "warcraft", level: "L5", domain: "magic",
    summary: "源自扭曲虚空的腐蚀性能量，不经由任何物质-能量转换，属纯设定能量。",
    description: "邪能是"异维度恶意能量"的代表。它绕过能量守恒，是世界观独有的魔法资源。",
    firstPrinciples: [
      { principle: "异维度无源能量", verdict: "violated", note: "无机制从"虚空"凭空取能。" },
      { principle: "能量即腐蚀", verdict: "violated", note: "依赖设定的善恶公理。" }
    ],
    implementation: { current: "无；以高危能源（放射/化学）弱近似"腐蚀"。", path: ["现实参考：放射性、腐蚀性介质。", "理论可行性：违反法则。", "预研路径：以受控危险能源模拟其危险面。"], blockers: ["无源能量", "虚空维度"], sopStage: "SOP-2 原理分析" },
    dependencies: ["spellcasting"], tags: ["魔法", "邪能", "虚空"]
  },
  {
    id: "undead-scourge",
    name: "亡灵天灾",
    aliases: ["Scourge", "不死瘟疫"],
    workId: "warcraft", level: "L5", domain: "lore",
    summary: "以瘟疫批量转化生命为不死的奴兵，完全违反热力学与生物分解规律。",
    description: "亡灵天灾把"死亡可被征用"推到军团规模。现实中尸体分解、能量耗散，无法被"转化"为持续战力。",
    firstPrinciples: [
      { principle: "尸体保持战力", verdict: "violated", note: "分解与能量耗散不可避免。" },
      { principle: "瘟疫式意识转化", verdict: "violated", note: "无机制批量改写意识。" }
    ],
    implementation: { current: "无；以自主机器人集群弱近似"奴兵"。", path: ["现实参考：无人集群、控制网络。", "理论可行性：违反法则。", "预研路径：以机器人集群模拟"天灾"形态。"], blockers: ["尸体活化", "意识转化"], sopStage: "SOP-2 原理分析" },
    dependencies: ["necromancy-folklore"], tags: ["秘术", "亡灵", "瘟疫"]
  },
  {
    id: "portals-wow",
    name: "传送门（艾泽拉斯）",
    aliases: ["Portal", "奥术门"],
    workId: "warcraft", level: "L3", domain: "realm",
    summary: "法师开启的瞬时空间门，现实对应为受限传送理论与远程呈现。",
    description: "艾泽拉斯的传送门把"开门即达"常态化。现实中宏观传送不可行，但"门"的意象可由网络与运输近似。",
    firstPrinciples: [
      { principle: "瞬时空间门", verdict: "breakthrough", note: "宏观传送受约束。" },
      { principle: "奥术能量维持", verdict: "violated", note: "无"奥术能量"这一资源。" }
    ],
    implementation: { current: "无瞬移；以高速交通+通信近似。", path: ["现实参考：远程操作。", "理论可行性：违反约束。", "预研路径：以重打印设想近似。"], blockers: ["空间门", "奥术能量"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["portal-basics"], tags: ["界域", "传送", "门"]
  },
  {
    id: "dragons-wow",
    name: "巨龙（艾泽拉斯）",
    aliases: ["Dragon", "守护巨龙"],
    workId: "warcraft", level: "L5", domain: "beast",
    summary: "具智慧、能言、可施法的守护巨龙，受生物尺度与代谢限制不可实现。",
    description: "魔兽的巨龙把神话龙升格为"有智慧的神兽"。其飞行与喷吐在现实生物物理上不可维持。",
    firstPrinciples: [
      { principle: "巨型智慧飞行生物", verdict: "violated", note: "尺度与代谢不可维持。" },
      { principle: "龙类施法", verdict: "violated", note: "依赖魔法公理。" }
    ],
    implementation: { current: "无活体；机械龙可模拟。", path: ["现实参考：大型无人机。", "理论可行性：生物学不可行。", "预研路径：以无人平台模拟。"], blockers: ["尺度", "内源喷吐"], sopStage: "SOP-2 原理分析" },
    dependencies: ["dragon-myth"], tags: ["生灵", "龙", "神兽"]
  },
  {
    id: "titan-forging",
    name: "泰坦造物",
    aliases: ["Titanforged", "星魂造物"],
    workId: "warcraft", level: "L3", domain: "artifact",
    summary: "由泰坦（星魂）以秩序之力塑造的机械生命与器物，现实对应为高级机器人与具身智能。",
    description: "泰坦造物把"被更高存在塑造"具象为机械生命。其功能可由现代机器人近似，但"星魂塑造"属设定。",
    firstPrinciples: [
      { principle: "机械生命体", verdict: "achieved", note: "机器人已具行动与一定智能。" },
      { principle: "秩序之力直接塑形", verdict: "violated", note: "依赖设定的"秩序能量"。" }
    ],
    implementation: { current: "机器人与具身 AI 可行。", path: ["现实参考：具身智能。", "理论可行性：功能可行。", "预研路径：更高自主机器人。"], blockers: ["秩序能量"], sopStage: "SOP-5 工程实现与原型" },
    dependencies: ["real-metallurgy"], tags: ["造物", "机械生命", "泰坦"]
  },

  // ===================== 上古卷轴 =====================
  {
    id: "dragon-shout",
    name: "龙吼（Thu'um）",
    aliases: ["Thu'um", "真言之力"],
    workId: "elder-scrolls", level: "L5", domain: "magic",
    summary: "以真实之语直接命令现实（推开山、定住时），是"真名即权能"的极端化。",
    description: "龙吼把"言语即因果"推到物理层面：一声吼能撼动山脉。它完全依赖"真实语言即世界接口"的设定。",
    firstPrinciples: [
      { principle: "真实语言直接命令现实", verdict: "violated", note: "语言不携带改变现实的因果力。" },
      { principle: "声波产生巨力效应", verdict: "violated", note: "声波能量密度远低于所述效果。" }
    ],
    implementation: { current: "无；以声波武器弱近似"声学效应"。", path: ["现实参考：声学、定向能。", "理论可行性：违反法则。", "预研路径：以声/能近似局部效果。"], blockers: ["言灵因果", "声波巨力"], sopStage: "SOP-2 原理分析" },
    dependencies: ["true-name"], tags: ["魔法", "龙吼", "真言"]
  },
  {
    id: "soul-gem",
    name: "灵魂石",
    aliases: ["Soul Gem", "囚魂晶"],
    workId: "elder-scrolls", level: "L4", domain: "lore",
    summary: "囚禁灵魂于晶体以供附魔的造物，现实对应为意识存储与数字人格的远景。",
    description: "灵魂石把"灵魂可压缩存储"工具化。其现实近似是意识上传与数字人格的设想，但仍触及意识本质。",
    firstPrinciples: [
      { principle: "灵魂可囚禁存储", verdict: "breakthrough", note: "意识可编码性未证。" },
      { principle: "存储后可重新释放利用", verdict: "breakthrough", note: "重放是否同"我"存疑。" }
    ],
    implementation: { current: "无；以数字存档弱近似。", path: ["现实参考：全脑仿真设想。", "理论可行性：属 L4。", "预研路径：局部记忆/人格数字孪生。"], blockers: ["意识本质", "重放同一性"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["soul-storage"], tags: ["秘术", "灵魂", "附魔"]
  },
  {
    id: "dwemer",
    name: "矮人机械（ Dwemer ）",
    aliases: ["Dwemer", "远古机械"],
    workId: "elder-scrolls", level: "L3", domain: "artifact",
    summary: "失落文明留下的精密蒸汽机械与自治装置，现实对应为高级机器人与自控系统。",
    description: "矮人科技把"失传的精密机械"具象为会自行运转的造物。其现实底座是现代机器人与自动化。",
    firstPrinciples: [
      { principle: "精密自治机械", verdict: "achieved", note: "机器人与自控系统成熟。" },
      { principle: "机械具群体智能", verdict: "breakthrough", note: "多机协同仍在演进。" }
    ],
    implementation: { current: "机器人与多机系统已商用。", path: ["现实参考：工业自动化、多智能体。", "理论可行性：成立。", "预研路径：更高自主的多机系统。"], blockers: ["群体自主"], sopStage: "SOP-5 工程实现与原型" },
    dependencies: ["clockwork-automata"], tags: ["造物", "机械", "自治"]
  },
  {
    id: "daedric",
    name: "魔神器",
    aliases: ["Daedric Artifact", "魔族造物"],
    workId: "elder-scrolls", level: "L5", domain: "artifact",
    summary: "由魔神锻造、具概念性权能的器物（如吸魂剑），依赖世界观独有设定。",
    description: "魔神器把"器物承载神性权能"极致化。其效果（吞噬灵魂、改写命运）完全依赖设定公理。",
    firstPrinciples: [
      { principle: "器物承载神性权能", verdict: "violated", note: "无机制使物品获得超自然权能。" },
      { principle: "概念性效果（噬魂）", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以智能/数据采集设备弱近似。", path: ["现实参考：可穿戴、数据系统。", "理论可行性：违反法则。", "预研路径：以功能设备模拟局部效果。"], blockers: ["神性权能", "概念效果"], sopStage: "SOP-2 原理分析" },
    dependencies: ["the-one-ring"], tags: ["造物", "魔神", "权能"]
  },

  // ===================== 黑暗之魂 =====================
  {
    id: "soul-transference",
    name: "灵魂转移",
    aliases: ["魂移", "不死诅咒"],
    workId: "dark-souls", level: "L4", domain: "lore",
    summary: "记忆与能力随灵魂在躯体间迁移，现实对应为意识上传与数字自我的远景。",
    description: "魂系把"自我可迁移"置于死亡循环的中心。其现实近似是意识上传，但仍受意识本质约束。",
    firstPrinciples: [
      { principle: "自我可迁移载体", verdict: "breakthrough", note: "意识可移植性未证。" },
      { principle: "死亡后保留连续性", verdict: "breakthrough", note: "脑死亡后结构不可逆。" }
    ],
    implementation: { current: "无；以数字备份弱近似。", path: ["现实参考：全脑仿真设想。", "理论可行性：属 L4。", "预研路径：局部记忆数字孪生。"], blockers: ["意识本质", "连续性"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["soul-storage"], tags: ["秘术", "灵魂", "迁移"]
  },
  {
    id: "bonfire",
    name: "营火（检查点）",
    aliases: ["Bonfire", "篝火"],
    workId: "dark-souls", level: "L5", domain: "artifact",
    summary: "跨死亡重置世界的"存档点"，是元设定层面的概念性造物。",
    description: "营火把"游戏存档"具象为世界观内的实体。它在叙事层面重置状态，属纯设定机制。",
    firstPrinciples: [
      { principle: "实体重置世界状态", verdict: "violated", note: "无机制使一个火堆回滚现实。" },
      { principle: "跨死亡保留进度", verdict: "violated", note: "依赖元设定。" }
    ],
    implementation: { current: "无；以存档系统弱近似。", path: ["现实参考：状态保存。", "理论可行性：违反法则。", "预研路径：以数字孪生模拟"重置"。"], blockers: ["世界回滚", "元机制"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["造物", "概念", "存档"]
  },
  {
    id: "lord-soul",
    name: "王魂",
    aliases: ["Lord Soul", "原初魂"],
    workId: "dark-souls", level: "L5", domain: "lore",
    summary: "赋予神祇级权能的原初灵魂碎片，依赖"灵魂即力量"的设定公理。",
    description: "王魂把"灵魂=能量=权能"推到极致。现实中意识不携带可直接使用的巨量能量。",
    firstPrinciples: [
      { principle: "灵魂即可调用能量", verdict: "violated", note: "意识不携带可用能量。" },
      { principle: "碎片授予神级权能", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以能量系统弱近似。", path: ["现实参考：能源网络。", "理论可行性：违反法则。", "预研路径：以能源权限模拟"权能"。"], blockers: ["灵魂能量", "神级权能"], sopStage: "SOP-2 原理分析" },
    dependencies: ["soul-transference"], tags: ["秘术", "灵魂", "权能"]
  },
  {
    id: "greatsword",
    name: "巨剑",
    aliases: "巨刃",
    workId: "dark-souls", level: "L1", domain: "artifact",
    summary: "超大尺寸的单手/双手剑，现实中作为仪式兵器与工程挑战均有先例。",
    description: "魂系巨剑是"夸张化冷兵器"的代表。现实中的超大剑（如苏格兰斩剑）确实存在，只是实用性有限。",
    firstPrinciples: [
      { principle: "大尺寸钢刃可锻造", verdict: "achieved", note: "历史上有多种大型剑，冶金可行。" },
      { principle: "人可高效挥舞", verdict: "achieved", note: "受人体工学限制，但可造可用。" }
    ],
    implementation: { current: "大型剑作为藏品/仪式兵器存在。", path: ["现实参考：历史巨剑、现代锻造。", "理论可行性：成立。", "预研路径：以材料优化提升实用性。"], blockers: [], sopStage: "SOP-1 定义与拆解" },
    dependencies: ["real-metallurgy"], tags: ["造物", "兵器", "剑"]
  },

  // ===================== 战锤·奇幻 =====================
  {
    id: "chaos-magic",
    name: "混沌魔法",
    aliases: ["Chaos", "邪术"],
    workId: "warhammer", level: "L5", domain: "magic",
    summary: "直接汲取异维度神祇之力的魔法，施法即与不可名状存在缔约，属纯设定。",
    description: "混沌魔法把"魔法来自危险的外神"具象化。它绕过任何物理能量链，是世界观独有的危险资源。",
    firstPrinciples: [
      { principle: "异维度神力可直接取用", verdict: "violated", note: "无机制从异维度取能。" },
      { principle: "缔约即获权能", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以高危能源弱近似。", path: ["现实参考：危险能源管理。", "理论可行性：违反法则。", "预研路径：以受控危险能源模拟代价。"], blockers: ["异维度神力", "缔约机制"], sopStage: "SOP-2 原理分析" },
    dependencies: ["spellcasting"], tags: ["魔法", "混沌", "邪神"]
  },
  {
    id: "warpstone",
    name: "次元石（闹鬼石）",
    aliases: ["Warpstone", "绿石"],
    workId: "warhammer", level: "L4", domain: "alchemy",
    summary: "来自混沌魔域、扭曲血肉与因果的辐射矿物，现实无对应，是设定独有物质。",
    description: "次元石把"矿物即异常"具象化。它既像放射性又像因果污染，现实中无单一物质能同时具备。",
    firstPrinciples: [
      { principle: "矿物携带异维度异常", verdict: "violated", note: "无物质能扭曲因果。" },
      { principle: "辐射即变异催化", verdict: "breakthrough", note: "辐射致突变真实，但非"魔法""。" }
    ],
    implementation: { current: "无；以放射性矿物弱近似。", path: ["现实参考：放射性同位素。", "理论可行性：违反法则。", "预研路径：以受控诱变模拟局部效果。"], blockers: ["因果扭曲", "异维度来源"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["alchemy-history"], tags: ["炼金", "矿物", "混沌"]
  },
  {
    id: "skaven",
    name: "鼠人",
    aliases: ["Skaven", "鼠族"],
    workId: "warhammer", level: "L4", domain: "beast",
    summary: "由人类突变而来的类鼠智慧族群，现实对应为定向诱变与合成生物的远景。",
    description: "鼠人把"定向突变出全新智慧物种"具象化。现实中可局部改造，但塑造完整新物种极难。",
    firstPrinciples: [
      { principle: "定向诱变出新物种", verdict: "breakthrough", note: "跨代稳定、可育的新物种超出当前能力。" },
      { principle: "维持智慧与社会", verdict: "breakthrough", note: "神经与认知的物种级设计未解。" }
    ],
    implementation: { current: "局部基因改造可行；新物种无。", path: ["现实参考：合成生物、诱变。", "理论可行性：受限可行。", "预研路径：从治疗到受限新性状。"], blockers: ["新物种稳定性", "认知设计"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["controlled-mutation"], tags: ["生灵", "突变", "新物种"]
  },
  {
    id: "steam-tank",
    name: "蒸汽坦克",
    aliases: ["Steam Tank", "蒸汽战车"],
    workId: "warhammer", level: "L2", domain: "artifact",
    summary: "以蒸汽驱动的装甲战车，现实中对应早期装甲车辆与工程机械。",
    description: "蒸汽坦克把"蒸汽动力+装甲"组合为战场机械。其现实底座是蒸汽工程与车辆制造。",
    firstPrinciples: [
      { principle: "蒸汽驱动装甲车辆", verdict: "achieved", note: "早期蒸汽车辆与装甲工程成熟。" },
      { principle: "持续作战机动", verdict: "achieved", note: "现代车辆已远超。" }
    ],
    implementation: { current: "装甲车辆与工程机械已成熟。", path: ["现实参考：蒸汽机车、装甲车。", "理论可行性：成立。", "预研路径：更高效动力与防护。"], blockers: [], sopStage: "SOP-5 工程实现与原型" },
    dependencies: ["clockwork-automata"], tags: ["造物", "蒸汽", "战车"]
  },

  // ===================== 巫师 =====================
  {
    id: "signs",
    name: "法印",
    aliases: ["Sign", "昆特法印"],
    workId: "witcher", level: "L3", domain: "magic",
    summary: "以手势与简短意志释放的简单魔法效应（火焰、束缚、误导），现实对应为便携式能量装置。",
    description: "法印把"魔法"降级为可随手释放的小技能。其现实近似是便携能源与效应器（点火、投影、束缚）。",
    firstPrinciples: [
      { principle: "便携释放定向效应", verdict: "breakthrough", note: "效应需设备中介，非徒手。" },
      { principle: "手势即触发", verdict: "violated", note: "无机制使手势直接产生物理效应。" }
    ],
    implementation: { current: "效应可由设备实现；徒手触发无。", path: ["现实参考：便携点火器、AR、束缚装置。", "理论可行性：受限可行。", "预研路径：以可穿戴效应器模拟法印。"], blockers: ["徒手触发", "能量源"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["spellcasting"], tags: ["魔法", "法印", "手势"]
  },
  {
    id: "mutagens",
    name: "突变药剂",
    aliases: ["Mutagen", "青草试炼"],
    workId: "witcher", level: "L2", domain: "alchemy",
    summary: "以剧毒配方重排生理、赋予超感与自愈，现实对应为药物改造与基因治疗。",
    description: "突变药剂把"服药即强化"具象化。现实中药物可局部改造生理，但稳定、可逆、全面的强化仍难。",
    firstPrinciples: [
      { principle: "药物改造生理", verdict: "achieved", note: "药物与基因治疗已能局部改变。" },
      { principle: "全面稳定强化", verdict: "breakthrough", note: "系统级、可逆、无副作用的强化未得。" }
    ],
    implementation: { current: "局部药理改造可行；全面强化无。", path: ["现实参考：兴奋剂、基因治疗。", "理论可行性：受限可行。", "预研路径：更安全的增强药理。"], blockers: ["系统强化", "副作用"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["real-herbalism", "controlled-mutation"], tags: ["炼金", "药剂", "突变"]
  },
  {
    id: "decoctions",
    name: "煎药",
    aliases: ["Decoction", "强效药剂"],
    workId: "witcher", level: "L2", domain: "alchemy",
    summary: "以怪物材料熬煮的强效临时增益药剂，现实对应为靶向药物与兴奋剂。",
    description: "煎药把"以敌制敌"的炼金逻辑具象化。现实中靶向药物可提供临时增益，但无怪物素材的奇效。",
    firstPrinciples: [
      { principle: "配方提供临时增益", verdict: "achieved", note: "兴奋剂、营养剂已应用。" },
      { principle: "敌材转化增益", verdict: "breakthrough", note: "无机制从怪物提取超常增益。" }
    ],
    implementation: { current: "增益药物存在；怪物素材奇效无。", path: ["现实参考：靶向药物。", "理论可行性：常规增益可行。", "预研路径：更精准的靶向增益。"], blockers: ["怪物素材效应"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["mutagens"], tags: ["炼金", "药剂", "增益"]
  },

  // ===================== 纳尼亚 =====================
  {
    id: "wardrobe",
    name: "魔衣橱（异界门）",
    aliases: ["Wardrobe", "衣橱之门"],
    workId: "narnia", level: "L3", domain: "realm",
    summary: "一件家具背面连通整片异世界，是"日常物即传送门"的温柔版本。",
    description: "魔衣橱把传送收束为"推门即入他界"。现实中宏观传送不可行，但"门"的意象可由空间组织近似。",
    firstPrinciples: [
      { principle: "家具背面连通异界", verdict: "violated", note: "空间拓扑上不成立。" },
      { principle: "推门即瞬移", verdict: "breakthrough", note: "宏观传送受约束。" }
    ],
    implementation: { current: "无瞬移；以空间设计/远程呈现近似。", path: ["现实参考：远程操作。", "理论可行性：违反约束。", "预研路径：以重打印设想近似。"], blockers: ["空间拓扑", "瞬移"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["portal-basics"], tags: ["界域", "传送", "门"]
  },
  {
    id: "aslan-resurrection",
    name: "石桌复活",
    aliases: ["献祭复活", "Lion's sacrifice"],
    workId: "narnia", level: "L4", domain: "lore",
    summary: "以献祭在石桌重置生命的机制，现实对应为濒死复苏的远景，但"献祭换复活"属神学设定。",
    description: "纳尼亚的复活以象征性献祭为机制。现实中复苏仅限临床早期，且不涉及"代价换生命"。",
    firstPrinciples: [
      { principle: "献祭重置生命", verdict: "violated", note: "无机制使献祭换回死亡。" },
      { principle: "死亡可逆", verdict: "breakthrough", note: "脑死亡后不可逆。" }
    ],
    implementation: { current: "骤停复苏可行；脑死亡复活无。", path: ["现实参考：神经修复研究。", "理论可行性：受限可行。", "预研路径：神经再生长程研究。"], blockers: ["脑死亡不可逆", "神學机制"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["soul-transference"], tags: ["秘术", "复活", "献祭"]
  },
  {
    id: "stone-table",
    name: "石桌",
    aliases: ["Stone Table", "祭桌"],
    workId: "narnia", level: "L5", domain: "artifact",
    summary: "承载献祭与法则重置的概念性圣物，纯设定机制。",
    description: "石桌把"器物承载法则"具象化。其效果（深裂以释放生命）完全依赖世界观的神学设定。",
    firstPrinciples: [
      { principle: "器物承载法则重置", verdict: "violated", note: "无机制使物体改写法则。" },
      { principle: "裂开即释放生命", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以仪式/象征弱近似。", path: ["现实参考：仪式符号。", "理论可行性：违反法则。", "预研路径：以象征系统模拟。"], blockers: ["法则重置", "概念机制"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["造物", "圣物", "概念"]
  },

  // ===================== 碟形世界 =====================
  {
    id: "discworld-geometry",
    name: "碟形世界几何",
    aliases: ["Discworld", "巨龟背上的世界"],
    workId: "discworld", level: "L5", domain: "realm",
    summary: "平面大陆驮于巨龟象群、绕双星运行的几何，在引力与力学上完全不成立。",
    description: "碟形世界把"世界本身就是笑话"具象化。其几何是对奇幻套路的智性戏仿，物理上不可维持。",
    firstPrinciples: [
      { principle: "平面大陆稳定存在", verdict: "violated", note: "引力会使平面塌缩为球体。" },
      { principle: "巨龟承载世界", verdict: "violated", note: "结构强度与质量均不可维持。" }
    ],
    implementation: { current: "无；以球形/空间站近似"可居结构"。", path: ["现实参考：空间站、人工重力设想。", "理论可行性：违反力学。", "预研路径：以封闭生态模拟"可居世界"。"], blockers: ["平面引力", "巨龟结构"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["界域", "几何", "世界"]
  },
  {
    id: "magic-disc",
    name: "八色魔法",
    aliases: ["Octarine", "源质之色"],
    workId: "discworld", level: "L5", domain: "magic",
    summary: "魔法被量化为八种颜色（第八色为"源质"），是戏仿式设定公理。",
    description: "八色魔法把"魔法可分光"具象化，是对严肃魔法体系的幽默解构。其机制纯属设定。",
    firstPrinciples: [
      { principle: "魔法可分八色", verdict: "violated", note: "魔法非电磁波，无可分色谱。" },
      { principle: "第八色为"源质"", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以光谱/能量分级弱近似。", path: ["现实参考：能量谱分类。", "理论可行性：违反法则。", "预研路径：以能量分级模拟。"], blockers: ["魔法光谱", "源质"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["魔法", "八色", "戏仿"]
  },
  {
    id: "librarian",
    name: "图书管理员（红毛猩猩）",
    aliases: ["Librarian", " orangutan"],
    workId: "discworld", level: "L4", domain: "beast",
    summary: "被法术变为红毛猩猩且拒绝变回的人，现实对应为跨物种基因改造的远景，但"智人↔猿"转换不可行。",
    description: "图书管理员把"变形"以温和荒诞的方式呈现。现实中跨物种整体转换超出基因工程。",
    firstPrinciples: [
      { principle: "跨物种整体转换", verdict: "violated", note: "无机制把一种成体整体变为另一物种。" },
      { principle: "保留人格与智力", verdict: "breakthrough", note: "意识跨形态连续性未解。" }
    ],
    implementation: { current: "无；以基因治疗局部改造。", path: ["现实参考：基因编辑。", "理论可行性：整体转换不可行。", "预研路径：以局部改造近似。"], blockers: ["跨物种转换", "意识连续性"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["controlled-mutation"], tags: ["生灵", "变形", "基因"]
  },

  // ===================== 诡秘之主 =====================
  {
    id: "beyonder",
    name: "序列途径（非凡者）",
    aliases: ["Beyonder", "魔药晋升"],
    workId: "lord-of-the-mysteries", level: "L5", domain: "magic",
    summary: "服食魔药沿序列逐级改写生命形态、获得超凡权能，是"物质即权能"的设定公理。",
    description: "诡秘之主把"升级"做成严谨的神秘学体系：每升一级既得能力也逼近疯狂。其机制是"喝下即蜕变"。",
    firstPrinciples: [
      { principle: "服食即重排生命", verdict: "violated", note: "无物质能整体重排生命形态。" },
      { principle: "权能与代价共生", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以药物/神经改造弱近似局部。", path: ["现实参考：神经增强、药理。", "理论可行性：违反法则。", "预研路径：以受限增强近似。"], blockers: ["生命重排", "序列机制"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["魔法", "序列", "魔药"]
  },
  {
    id: "sealed-artifact",
    name: "封印物",
    aliases: ["Sealed Artifact", "收容物"],
    workId: "lord-of-the-mysteries", level: "L5", domain: "artifact",
    summary: "被收容的、具概念性危险权能的造物，依赖"物品携带异常"的设定公理。",
    description: "封印物把"异常物品"体系化（近似 SCP）。其效果多违反物理，靠"收容"而非"使用"来叙事。",
    firstPrinciples: [
      { principle: "物品携带概念性异常", verdict: "violated", note: "无机制使物体获得超自然权能。" },
      { principle: "异常可被测度收容", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以危险设备+管控弱近似。", path: ["现实参考：危险品管理。", "理论可行性：违反法则。", "预研路径：以管控系统模拟收容。"], blockers: ["概念异常", "收容机制"], sopStage: "SOP-2 原理分析" },
    dependencies: ["the-one-ring"], tags: ["造物", "封印", "异常"]
  },
  {
    id: "divination-lom",
    name: "占卜（诡秘）",
    aliases: ["Divination", "命运窥视"],
    workId: "lord-of-the-mysteries", level: "L3", domain: "lore",
    summary: "以仪式与媒介窥探命运与隐秘，现实对应为受限预测与信息搜集。",
    description: "诡秘的占卜把"窥探命运"严肃化。现实中预测科学可部分实现，但"命运"的确定性仍不可得。",
    firstPrinciples: [
      { principle: "从征兆推断未知", verdict: "achieved", note: "贝叶斯推断已应用。" },
      { principle: "确定个体命运", verdict: "breakthrough", note: "长时精确预测受混沌限制。" }
    ],
    implementation: { current: "预测科学可行；命运确定性无。", path: ["现实参考：计算社会科学。", "理论可行性：受限可行。", "预研路径：以受限预测定位为"气象式"。"], blockers: ["混沌", "命运确定性"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["divination-folklore"], tags: ["秘术", "占卜", "命运"]
  },
  {
    id: "outer-deity",
    name: "外神 / 旧日",
    aliases: ["Outer Deity", "旧日"],
    workId: "lord-of-the-mysteries", level: "L5", domain: "beast",
    summary: "来自宇宙之外的不可名状存在，其存在本身即改写物理与认知，纯设定。",
    description: "外神把"宇宙外的不可知"具象为威胁。其机制是"存在即异常"，完全依赖克苏鲁式设定。",
    firstPrinciples: [
      { principle: "域外存在改写物理", verdict: "violated", note: "无机制使"存在"改写常数。" },
      { principle: "不可名状即危险", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以未知风险建模弱近似。", path: ["现实参考：风险评估。", "理论可行性：违反法则。", "预研路径：以未知系统模拟。"], blockers: ["域外改写", "不可名状"], sopStage: "SOP-2 原理分析" },
    dependencies: ["dragon-myth"], tags: ["生灵", "外神", "克苏鲁"]
  },

  // ===================== 地海 =====================
  {
    id: "summon-wind",
    name: "呼风唤雨",
    aliases: ["Wind召唤", "召风"],
    workId: "earthsea", level: "L3", domain: "magic",
    summary: "以吟诵古语调动气象，现实对应为人工影响天气（受限）与数值预报。",
    description: "地海的呼风把"语言驱动自然"具象化。现实中人工影响天气（增雨、消雹）有限，且不经吟诵。",
    firstPrinciples: [
      { principle: "干预天气", verdict: "breakthrough", note: "人工增雨等有限可行。" },
      { principle: "吟诵直接驱动", verdict: "violated", note: "无机制使语言改变气象。" }
    ],
    implementation: { current: "人工影响天气有限；吟诵驱动无。", path: ["现实参考：人工增雨、数值预报。", "理论可行性：受限可行。", "预研路径：更精细的天气干预。"], blockers: ["吟诵驱动", "干预尺度"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["true-name"], tags: ["魔法", "气象", "言灵"]
  },
  {
    id: "rune-earthsea",
    name: "符文（地海）",
    aliases: ["Rune", "古语符"],
    workId: "earthsea", level: "L3", domain: "magic",
    summary: "以古语符文铭刻并引导魔力的书写魔法，现实对应为程序化/符号化控制。",
    description: "地海符文把"书写即施法"具象化。现实中编程是对机器最贴近的"符号即控制"，但对自然无效。",
    firstPrinciples: [
      { principle: "符号铭刻引导效应", verdict: "achieved", note: "编程对机器即"符号控制"。" },
      { principle: "符号直接引导自然", verdict: "violated", note: "自然语言/符文不改变物理。" }
    ],
    implementation: { current: "编程控制机器可行；引导自然无。", path: ["现实参考：控制系统、编程。", "理论可行性：对机器可行。", "预研路径：以自动化近似符号控制。"], blockers: ["自然引导", "言灵"], sopStage: "SOP-3 理论研究与建模" },
    dependencies: ["true-name"], tags: ["魔法", "符文", "书写"]
  },

  // ===================== 最终幻想 =====================
  {
    id: "materia",
    name: "魔石",
    aliases: ["Materia", "魔珠"],
    workId: "final-fantasy", level: "L3", domain: "magic",
    summary: "把一段魔法封入可镶嵌结晶、镶嵌即获得能力，现实对应为模块化可插拔功能单元。",
    description: "魔石把"能力即物件"具象化。现实中模块化硬件/软件插件可弱近似"镶嵌即获得能力"。",
    firstPrinciples: [
      { principle: "能力封入可插拔单元", verdict: "breakthrough", note: "模块化硬件/软件可行，但"魔法能力"无。" },
      { principle: "镶嵌即生效", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "模块化插件可行；魔法能力无。", path: ["现实参考：模块化硬件、APP 插件。", "理论可行性：受限可行。", "预研路径：以可插拔增强设备模拟。"], blockers: ["魔法封装", "镶嵌生效"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["spellcasting"], tags: ["魔法", "魔石", "模块化"]
  },
  {
    id: "summon-ff",
    name: "召唤兽",
    aliases: ["Summon", "英灵"],
    workId: "final-fantasy", level: "L5", domain: "beast",
    summary: "以契约唤来独立存在的巨型生物协同作战，依赖"异界契约"机制，纯设定。",
    description: "召唤兽把"借来一头神兽"具象化。其机制是跨越维度的契约，现实中无对应。",
    firstPrinciples: [
      { principle: "契约唤来异界生物", verdict: "violated", note: "无机制跨维度召唤生物。" },
      { principle: "生物协同作战", verdict: "breakthrough", note: "无人协同可弱近似（非生物）。" }
    ],
    implementation: { current: "无；以无人平台弱近似协同。", path: ["现实参考：无人机 swarm。", "理论可行性：违反法则。", "预研路径：以无人集群模拟召唤形态。"], blockers: ["异界契约", "巨兽召唤"], sopStage: "SOP-2 原理分析" },
    dependencies: ["dragon-myth"], tags: ["生灵", "召唤", "契约"]
  },
  {
    id: "crystal-ff",
    name: "水晶（世界之心）",
    aliases: ["Crystal", "源水晶"],
    workId: "final-fantasy", level: "L5", domain: "artifact",
    summary: "作为世界能量心脏的概念性水晶，依赖"晶体即能源核心"的设定公理。",
    description: "FF 水晶把"世界靠一块水晶运转"具象化。现实中能源来自物理过程，不来自概念晶体。",
    firstPrinciples: [
      { principle: "晶体即世界能源", verdict: "violated", note: "无晶体能充当世界能量核心。" },
      { principle: "概念性供能", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以能源系统弱近似。", path: ["现实参考：能源网络。", "理论可行性：违反法则。", "预研路径：以分布式能源模拟核心。"], blockers: ["概念供能", "水晶核心"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["造物", "水晶", "能源"]
  },
  {
    id: "airship",
    name: "飞空艇",
    aliases: ["Airship", "空艇"],
    workId: "final-fantasy", level: "L2", domain: "realm",
    summary: "在云海之上航行的飞行器，现实对应为飞艇、飞机与垂直起降航空器。",
    description: "飞空艇把"自由飞行"浪漫化。现实中航空器已能实现其形态与功能，只是动力与操控不同。",
    firstPrinciples: [
      { principle: "重于空气自由飞行", verdict: "achieved", note: "飞机、飞艇已常态运行。" },
      { principle: "长时间巡航", verdict: "achieved", note: "现代航空器航程充足。" }
    ],
    implementation: { current: "航空器已成熟。", path: ["现实参考：飞艇、eVTOL。", "理论可行性：成立。", "预研路径：更安静、高效的城市空运。"], blockers: [], sopStage: "SOP-5 工程实现与原型" },
    dependencies: ["real-flight"], tags: ["界域", "飞行", "空艇"]
  },

  // ===================== 龙腾世纪 =====================
  {
    id: "lyrium",
    name: "莱瑞姆",
    aliases: ["Lyrium", "蓝石"],
    workId: "dragon-age", level: "L3", domain: "alchemy",
    summary: "魔法师赖以施法的蓝色矿物，现实对应为特殊功能材料与能源介质。",
    description: "莱瑞姆把"矿物即魔力源"具象化。现实中功能矿物（如锂离子）可弱近似"储能介质"，但无魔法内涵。",
    firstPrinciples: [
      { principle: "矿物作为能源介质", verdict: "achieved", note: "电池矿物（锂、钴）已应用。" },
      { principle: "供魔法施法", verdict: "violated", note: "无"魔法"这一可储能量。" }
    ],
    implementation: { current: "储能矿物存在；魔法无。", path: ["现实参考：电池材料。", "理论可行性：储能可行。", "预研路径：更高能量密度介质。"], blockers: ["魔法能量"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["alchemy-history"], tags: ["炼金", "矿物", "能源"]
  },
  {
    id: "blood-magic",
    name: "血魔法",
    aliases: ["Blood Magic", "血祭"],
    workId: "dragon-age", level: "L5", domain: "magic",
    summary: "以献祭生命直接换取魔法效能，是"生命即燃料"的设定公理。",
    description: "血魔法把"代价具象为鲜血"的黑暗魔法具象化。其机制完全依赖设定，现实中无"生命换法力"通道。",
    firstPrinciples: [
      { principle: "生命直接换效能", verdict: "violated", note: "无机制使牺牲转化为魔法。" },
      { principle: "无媒直接施法", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以生物能源弱近似（极不伦理）。", path: ["现实参考：生物能。", "理论可行性：违反法则。", "预研路径：以能源逻辑模拟代价。"], blockers: ["生命换能", "魔法公理"], sopStage: "SOP-2 原理分析" },
    dependencies: ["spellcasting"], tags: ["魔法", "血祭", "代价"]
  },
  {
    id: "thedas-dragon",
    name: "赛达斯巨龙",
    aliases: ["Dragon", "古龙"],
    workId: "dragon-age", level: "L5", domain: "beast",
    summary: "远古造物级的飞行巨兽，受生物尺度与代谢限制不可实现。",
    description: "龙腾的巨龙把神话龙置于"远古造物"语境。其飞行与吐息在现实生物物理上不可维持。",
    firstPrinciples: [
      { principle: "巨型飞行生物", verdict: "violated", note: "尺度与代谢不可维持。" },
      { principle: "吐息攻击", verdict: "violated", note: "无内源喷吐通路。" }
    ],
    implementation: { current: "无活体；机械龙可模拟。", path: ["现实参考：大型无人机。", "理论可行性：生物学不可行。", "预研路径：以无人平台模拟。"], blockers: ["尺度", "内源吐息"], sopStage: "SOP-2 原理分析" },
    dependencies: ["dragon-myth"], tags: ["生灵", "龙", "古龙"]
  },
  {
    id: "fade",
    name: "幽冥界（ Fade ）",
    aliases: ["The Fade", "梦境维度"],
    workId: "dragon-age", level: "L4", domain: "realm",
    summary: "与现实交叠的梦境维度，睡眠与死亡皆可通往，拓扑上不成立，属设定。",
    description: "幽冥界把"梦是另一个地方"具象化。现实中梦是脑状态，不存在可通往的独立维度。",
    firstPrinciples: [
      { principle: "梦境为独立维度", verdict: "violated", note: "梦是神经活动，非空间。" },
      { principle: "死亡/睡眠可通往", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以 VR/梦境记录弱近似。", path: ["现实参考：脑机接口、VR。", "理论可行性：违反法则。", "预研路径：以沉浸式模拟近似。"], blockers: ["梦境维度", "通往机制"], sopStage: "SOP-2 原理分析" },
    dependencies: [], tags: ["界域", "梦境", "维度"]
  },

  // ===================== 炼金之巅 =====================
  {
    id: "philosopher-stone",
    name: "贤者之石",
    aliases: ["Philosopher's Stone", "点金石"],
    workId: "mythology", level: "L5", domain: "alchemy",
    summary: "传说中兼能点金与赐永生的终极造物，依赖"一物解万难"的设定公理。",
    description: "贤者之石是炼金术的巅峰幻想：一块石头同时解开转化与永生。现实中二者皆无单一解。",
    firstPrinciples: [
      { principle: "一物实现元素嬗变", verdict: "breakthrough", note: "嬗变可行但不经济。" },
      { principle: "一物赐予永生", verdict: "violated", note: "无物质能阻断衰老死亡。" }
    ],
    implementation: { current: "无；分别以核嬗变与衰老研究近似。", path: ["现实参考：核嬗变、衰老生物学。", "理论可行性：分项目标受限可行。", "预研路径：拆解为独立工程问题。"], blockers: ["永生", "统一解"], sopStage: "SOP-4 关键技术攻关" },
    dependencies: ["transmutation"], tags: ["炼金", "贤者之石", "永生"]
  }
];
