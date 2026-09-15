// ============================================================
// 奇幻造物条目数据（核心）
// 每一条：世界出处、所属领域、原理分析、实现路径、依赖关系
// dependencies 为"本造物所依赖的前置造物 id"，用于科技树 DAG
// verdict: achieved(符合) / breakthrough(需突破) / violated(违反法则)
// ============================================================
const TECHS = [
  // ===================== 现实基线（神话·传说锚点） =====================
  {
    id: "real-metallurgy",
    name: "真实冶金与锻造",
    aliases: ["青铜", "钢铁冶炼"],
    workId: "mythology", domain: "alchemy",
    summary: "从矿石冶炼金属、锻造合金，是人类最古老的概念之一，神话中的神兵多以此为原型。",
    description: "从青铜器到坩埚钢，人类用数千年的时间把地下的石头变成兵刃与工具。秘银、瓦雷利亚钢的传说，本质上都是对“更好的钢铁”的想象投射。",
    firstPrinciples: [
      { principle: "高温还原金属氧化物得金属", verdict: "achieved", note: "高炉、电弧炉均为成熟工业，原理完全成立。" },
      { principle: "合金化改善强度与韧性", verdict: "achieved", note: "现代冶金可定制性能，远超传说中的神兵描述。" }
    ],
    implementation: { current: "现代冶金已能生产远超任何神话兵器的材料（如马氏体时效钢、钛合金）。", path: ["现实参考：坩埚钢、大马士革钢、现代合金设计。", "理论可行性：完全成立，是工程而非原理问题。", "预研路径：向更高比强度、自修复、形状记忆方向演进。"], blockers: [] },
    dependencies: [], tags: ["炼金", "冶金", "材料"]
  },
  {
    id: "real-herbalism",
    name: "草药与疗愈",
    aliases: ["药典", "自然疗法"],
    workId: "mythology", domain: "alchemy",
    summary: "以植物提取有效成分制药，现实中早已是药学的根基，也是魔药体系的现实母体。",
    description: "阿司匹林来自柳树皮，青蒿素来自青蒿——神话里的“治愈草”很多都有真实原型。魔药、煎药、突变药剂，都是把这套逻辑推到极致。",
    firstPrinciples: [
      { principle: "植物次生代谢物具生理活性", verdict: "achieved", note: "现代药物化学已系统验证并纯化大量植物活性成分。" },
      { principle: "配方协同增效", verdict: "achieved", note: "复方制剂、缓释系统是成熟工程。" }
    ],
    implementation: { current: "植物药现代化、标准化提取已是制药常规。", path: ["现实参考：提取纯化、靶点与剂量研究。", "理论可行性：成立。", "预研路径：从经验配方走向精准分子药理。"], blockers: [] },
    dependencies: [], tags: ["炼金", "草药", "药学"]
  },
  {
    id: "real-gunpowder",
    name: "黑火药与燃烧剂",
    aliases: ["火药", "希腊火"],
    workId: "mythology", domain: "alchemy",
    summary: "以硝石、硫磺、木炭混合的燃烧与推进剂，是真实存在且改变历史的炼金产物。",
    description: "中国的火药与拜占庭的希腊火，证明了“配方即威力”。野火、炼金炸弹等设定，是其夸张化的后代。",
    firstPrinciples: [
      { principle: "氧化剂+燃料快速放热", verdict: "achieved", note: "固体推进剂原理清楚，工程成熟。" },
      { principle: "受控点火与稳定燃烧", verdict: "achieved", note: "现代火工品安全可控。" }
    ],
    implementation: { current: "火药及现代高能推进剂早已量产。", path: ["现实参考：黑火药、无烟火药、燃烧弹。", "理论可行性：成立。", "预研路径：更高能量密度与稳定性。"], blockers: [] },
    dependencies: [], tags: ["炼金", "燃烧", "武器"]
  },
  {
    id: "real-flight",
    name: "飞行与空气动力学",
    aliases: ["航空器", "升力"],
    workId: "mythology", domain: "realm",
    summary: "重于空气的飞行已在现实中实现，是飞空艇、传送门等奇幻造物的物理地基。",
    description: "从风筝到喷气客机，人类已征服低空与平流层。飞空艇、浮空城的前提——产生并控制升力——早已不是问题。",
    firstPrinciples: [
      { principle: "机翼产生升力（伯努利/环量）", verdict: "achieved", note: "空气动力学成熟，飞行器日常运行。" },
      { principle: "推进克服阻力", verdict: "achieved", note: "涡轮、电动推进均已商用。" }
    ],
    implementation: { current: "固定翼、旋翼、升力体飞行器遍布全球。", path: ["现实参考：飞艇、无人机、eVTOL。", "理论可行性：成立。", "预研路径：垂直起降与分布式推进。"], blockers: [] },
    dependencies: [], tags: ["界域", "飞行", "航空"]
  },
  {
    id: "steam-engine",
    name: "蒸汽机与热机",
    aliases: ["外燃机", "锅炉"],
    workId: "mythology", domain: "artifact",
    summary: "将热能转为机械能的通用动力装置，是一切机械造物、发条与蒸汽坦克的源头。",
    description: "瓦特之后，蒸汽机驱动了第一次工业革命。齿轮、连杆、凸轮——这套机械语言是魔像、矮人机械、蒸汽坦克的现实祖先。",
    firstPrinciples: [
      { principle: "蒸汽膨胀做功（热力学）", verdict: "achieved", note: "卡诺循环与热机工程完全成立。" },
      { principle: "机械传动与运动合成", verdict: "achieved", note: "齿轮、连杆、凸轮机构成熟。" }
    ],
    implementation: { current: "热机与精密机械是当代工业基础。", path: ["现实参考：蒸汽机、内燃机、机器人关节。", "理论可行性：成立。", "预研路径：高能效与微型化机械。"], blockers: [] },
    dependencies: [], tags: ["造物", "机械", "动力"]
  },
  {
    id: "dragon-myth",
    name: "龙之传说",
    aliases: ["巨龙", "dragon"],
    workId: "mythology", domain: "beast",
    summary: "跨文明反复出现的喷火巨翼爬行动物，是幻想生物的原型，现实无对应实体。",
    description: "从北欧的尼德霍格到中国的应龙，龙的形态各异却共享“巨大、飞行、危险”的内核。它是所有“龙”类造物的神话母体。",
    firstPrinciples: [
      { principle: "楼宇级质量的生物飞行", verdict: "violated", note: "方解石骨骼与肌肉的升力/重量比在现实尺度上不可维持。" },
      { principle: "生物体内生成并喷射可燃/腐蚀液体", verdict: "violated", note: "无已知生化通路能在活体内安全储存与点燃大量燃料。" }
    ],
    implementation: { current: "现实无活体龙；仅有化石近亲（翼龙、恐龙）与机械仿生。", path: ["现实参考：大型航空器、机械龙偶。", "理论可行性：受尺度与代谢限制，生物学上不可行。", "预研路径：以无人飞行器模拟“龙”的形态与功能，而非生物学复制。"], blockers: ["生物飞行尺度极限", "内源喷火生化通路", "能量代谢"] },
    dependencies: [], tags: ["生灵", "龙", "神话"]
  },
  {
    id: "necromancy-folklore",
    name: "招魂与亡灵传说",
    aliases: ["通灵", "亡灵术"],
    workId: "mythology", domain: "lore",
    summary: "召唤并驱使逝者灵魂或尸体的古老母题，现实无对应，是亡灵天灾、魂器的原型。",
    description: "几乎每个文明都有与死者沟通的仪式想象。它把“死亡可逆”“意识可脱离身体”这两个根本愿望，凝结成巫术母题。",
    firstPrinciples: [
      { principle: "意识脱离大脑独立存在", verdict: "violated", note: "目前所有证据指向意识是脑的涌现，无独立灵魂的物理证据。" },
      { principle: "以意志驱动尸体", verdict: "violated", note: "死亡后组织分解，无能量来源维持运动。" }
    ],
    implementation: { current: "无；仅有神经科学对濒死与意识的解释性研究。", path: ["现实参考：脑机接口、意识研究。", "理论可行性：违反已知神经科学。", "预研路径：以“意识上传”等工程议题近似，而非巫术复制。"], blockers: ["意识本质", "灵魂实体性"] },
    dependencies: [], tags: ["秘术", "亡灵", "灵魂"]
  },
  {
    id: "divination-folklore",
    name: "占卜与星命",
    aliases: ["占星", "卜算"],
    workId: "mythology", domain: "lore",
    summary: "通过观察天象、牌阵、卦象推测命运，现实中可部分对应为模式识别与概率推理。",
    description: "占星、周易、塔罗共享“从表象推演未知”的结构。其现代近似是统计预测与贝叶斯推断——虽不神秘，但确有信息价值。",
    firstPrinciples: [
      { principle: "从观测推断未知", verdict: "achieved", note: "贝叶斯推理、时间序列预测已大规模应用。" },
      { principle: "天体位置决定个人命运", verdict: "violated", note: "无机制使遥远天体的几何布局作用于个体命运。" }
    ],
    implementation: { current: "预测科学（气象、经济、舆情）已成体系；占星本身无科学支撑。", path: ["现实参考：计算社会科学、AI 预测。", "理论可行性：预测可行，神秘因果不成立。", "预研路径：把“占卜”定位为受限的贝叶斯推断工具。"], blockers: ["神秘因果缺失", "数据噪声"] },
    dependencies: [], tags: ["秘术", "占卜", "预测"]
  },
  {
    id: "alchemy-history",
    name: "历史炼金术",
    aliases: ["点金术", "贤者之术"],
    workId: "mythology", domain: "alchemy",
    summary: "前科学时代以实验追求“贱金属变黄金”与“长生”，虽目标落空，却孕育了化学本身。",
    description: "炼金术士发明了蒸馏、结晶、酸碱操作，留下大量真实工艺。它把“转化物质”的执念，变成了现代化学的胚胎。",
    firstPrinciples: [
      { principle: "物质可被精制与转化", verdict: "achieved", note: "核嬗变确实能把一种元素变为另一种，但需要粒子加速器。" },
      { principle: "以配方实现元素蜕变", verdict: "breakthrough", note: "元素嬗变在实验室可行（如铋→金），但成本远超产物价值。" }
    ],
    implementation: { current: "化学与核物理已能实现部分“转化”，但点石成金不经济。", path: ["现实参考：核嬗变、湿法冶金。", "理论可行性：元素可变，能量账极不划算。", "预研路径：聚焦有价值的转化（材料再生、核废料处理）。"], blockers: ["嬗变能耗", "经济性"] },
    dependencies: ["real-metallurgy"], tags: ["炼金", "历史", "转化"]
  },
  {
    id: "monster-lore",
    name: "怪物知识与狩猎",
    aliases: ["博物学", "狩猎术"],
    workId: "witcher", domain: "beast",
    summary: "系统记录生物习性、弱点与应对的博物学，现实中对应动物行为与生态研究。",
    description: "猎魔人以图谱与谚语记录怪物，本质是田野博物学。现代生态学、寄生虫学、行为学已能系统解释多数“怪物”现象。",
    firstPrinciples: [
      { principle: "生物习性可被观察归类", verdict: "achieved", note: "分类学、行为生态学成熟。" },
      { principle: "以知识针对性制服危险生物", verdict: "achieved", note: "毒理、防疫、控制学均为现实工程。" }
    ],
    implementation: { current: "生态学、兽医学、毒理学已体系化。", path: ["现实参考：物种数据库、疫苗与解毒剂。", "理论可行性：成立。", "预研路径：AI 辅助的物种识别与风险评估。"], blockers: [] },
    dependencies: ["real-herbalism"], tags: ["生灵", "博物", "狩猎"]
  },
  {
    id: "metamaterial-cloak",
    name: "超材料隐身",
    aliases: ["隐身斗篷", "折射斗篷"],
    workId: "harry-potter", domain: "artifact",
    summary: "以人工微结构引导电磁波绕行实现“不可见”，现实中已在实验室频段验证。",
    description: "隐身衣的奇幻想象，在现实里对应超材料（metamaterial）对光/电磁波路径的操控。目前可在微波段实现窄带隐身。",
    firstPrinciples: [
      { principle: "超材料调控波前", verdict: "achieved", note: "负折射率材料已被制造并验证。" },
      { principle: "全频段可见光隐身", verdict: "breakthrough", note: "需在纳米尺度排布、覆盖宽频、低损耗，工程极难。" }
    ],
    implementation: { current: "微波段隐身斗篷已有原型；可见光宽频仍远。", path: ["现实参考：超材料、变换光学。", "理论可行性：原理成立，工艺受限。", "预研路径：从单频到宽频，从电磁波到声波/热。"], blockers: ["纳米制造精度", "宽频损耗", "体积"] },
    dependencies: [], tags: ["造物", "隐身", "光学"]
  },
  {
    id: "portal-basics",
    name: "传送与空间折叠（理论）",
    aliases: ["量子隐形传态", "空间跳跃"],
    workId: "dnd", domain: "realm",
    summary: "把物体或信息在两点间瞬时转移，现实里的量子隐形传态能传态不能传物。",
    description: "飞路网、异界门、魔衣橱共享“跨越距离”的内核。现实的量子隐形传态可传输量子态（需经典信道），但传“物”仍属科幻/奇幻。",
    firstPrinciples: [
      { principle: "量子态可远程重建", verdict: "achieved", note: "量子隐形传态已实验验证，但仅传态、不超光速。" },
      { principle: "宏观物体瞬时位移", verdict: "breakthrough", note: "需解构并重建约 10²⁵ 量级的原子，且不破坏信息，远超工程。" }
    ],
    implementation: { current: "量子隐形传态传态不传物；宏观传送无路径。", path: ["现实参考：量子通信、3D 打印+物流。", "理论可行性：传物违反热力学与信息约束。", "预研路径：以'扫描-传输信息-重打印'近似，代价是原件销毁。"], blockers: ["原子级重建", "量子退相干", "光速极限"] },
    dependencies: ["real-flight"], tags: ["界域", "传送", "空间"]
  },
  {
    id: "scrying",
    name: "远程窥视（占卜镜）",
    aliases: ["水晶球", "真知视界"],
    workId: "lord-of-rings", domain: "lore",
    summary: "隔空观察远方之人事物，现实对应为监控网络、卫星与遥感。",
    description: "真知晶球、鱼梁木的绿视共享“看见远处”的愿望。现实中，摄像头、卫星、无人机已让“千里眼”成为基础设施。",
    firstPrinciples: [
      { principle: "远程采集图像并回传", verdict: "achieved", note: "卫星、监控、遥感完全实现。" },
      { principle: "穿透遮挡/任意地点直视", verdict: "breakthrough", note: "受视线、遮挡与隐私限制，无法“全知”。" }
    ],
    implementation: { current: "地球观测与监控网络已常态化。", path: ["现实参考：遥感、IoT 视觉。", "理论可行性：可见处已可行。", "预研路径：更广覆盖的分布式视觉传感。"], blockers: ["遮挡", "隐私与算力"] },
    dependencies: ["divination-folklore"], tags: ["秘术", "窥视", "遥感"]
  },
  {
    id: "controlled-mutation",
    name: "定向诱变与改造",
    aliases: ["基因改造", "突变育种"],
    workId: "witcher", domain: "beast",
    summary: "以化学/辐射/基因手段定向改变生物性状，现实中对应诱变育种与基因编辑。",
    description: "鼠人、突变猎魔人、魔改生物都建立在“可控改造生命”之上。CRISPR 与诱变育种已能实现部分，但稳定、可控、跨代可遗传的全身改造仍难。",
    firstPrinciples: [
      { principle: "改变基因可改变性状", verdict: "achieved", note: "基因编辑与诱变育种已规模化。" },
      { principle: "成体整体重构（非局部）", verdict: "breakthrough", note: "成年个体的全身、神经、代谢重排超出当前能力。" }
    ],
    implementation: { current: "局部基因治疗、作物诱变已应用；全身重构无。", path: ["现实参考：CRISPR、基因治疗、合成生物。", "理论可行性：单基因可行，系统重构难。", "预研路径：从治疗走向受限的增强与改造。"], blockers: ["系统级重排", "脱靶与伦理"] },
    dependencies: ["real-herbalism"], tags: ["生灵", "基因", "改造"]
  },
  {
    id: "transmutation",
    name: "元素嬗变（炼金转化）",
    aliases: ["点石成金", "物质转化"],
    workId: "mythology", domain: "alchemy",
    summary: "把一种元素变为另一种，现实里核嬗变可做到，但需要巨大能量且极不经济。",
    description: "炼金术的终极目标——贱金属变黄金——在核物理层面确有可能，只是代价高昂。它是“物质可被重写”这一执念的科学回声。",
    firstPrinciples: [
      { principle: "原子核可被改变（嬗变）", verdict: "achieved", note: "核反应已能改变元素种类。" },
      { principle: "低成本日常化转化", verdict: "breakthrough", note: "能耗与核废料的约束使经济转化不可行。" }
    ],
    implementation: { current: "实验室核嬗变可行；商业点金不经济。", path: ["现实参考：粒子加速器、核反应堆嬗变。", "理论可行性：成立但昂贵。", "预研路径：聚焦贵重金属回收与核废料处理。"], blockers: ["能耗", "经济性", "放射性"] },
    dependencies: ["alchemy-history"], tags: ["炼金", "嬗变", "元素"]
  },
  {
    id: "clockwork-automata",
    name: "发条与自动机",
    aliases: ["机械人偶", "automaton"],
    workId: "warhammer", domain: "artifact",
    summary: "以齿轮与程序预演动作的自动机械，现实里从雅克德罗人偶到现代机器人皆其后代。",
    description: "魔像、矮人机械、蒸汽坦克都建立在“预编程机械可自主运行”之上。今天的机器人与 CNC 正是这条线的延伸。",
    firstPrinciples: [
      { principle: "机械可存储并执行程序", verdict: "achieved", note: "数控、机器人、PLC 已成熟。" },
      { principle: "自主感知与决策", verdict: "breakthrough", note: "开放环境自主决策仍需 AI 突破。" }
    ],
    implementation: { current: "工业机器人、自动驾驶已商用。", path: ["现实参考：机器人、控制系统。", "理论可行性：成立。", "预研路径：更高自主性与适应性。"], blockers: ["开放环境智能"] },
    dependencies: ["steam-engine"], tags: ["造物", "机械", "自动机"]
  },
  {
    id: "soul-storage",
    name: "灵魂锚定与存储",
    aliases: ["魂器原理", "灵魂容器"],
    workId: "harry-potter", domain: "lore",
    summary: "把人格/意识锚定于外物以求存续，现实最接近的是意识上传与数字人格的设想。",
    description: "魂器、灵魂石、亡灵复生都假设“自我可脱离身体被保存”。这是意识哲学与脑科学的前沿难题。",
    firstPrinciples: [
      { principle: "意识可被完整编码", verdict: "breakthrough", note: "意识的本质与可计算性尚未解决。" },
      { principle: "编码后的自我可重放", verdict: "breakthrough", note: "即便编码，重放是否仍是“同一自我”存疑。" }
    ],
    implementation: { current: "脑机接口与数字存档研究起步；完整灵魂存储无。", path: ["现实参考：全脑仿真、意识上传设想。", "理论可行性：触及意识本质，属 L4。", "预研路径：先实现局部记忆与人格的数字孪生。"], blockers: ["意识本质", "自我同一性", "载体寿命"] },
    dependencies: ["necromancy-folklore"], tags: ["秘术", "灵魂", "意识"]
  },
  {
    id: "true-name",
    name: "真名支配",
    aliases: ["真名", "言灵"],
    workId: "earthsea", domain: "magic",
    summary: "知晓一物之真名便可支配它，是所有“言语即因果”类魔法的公理源头。",
    description: "地海的真名、龙吼、咒文共享一个设定：世界的内在名称即其控制权。现实中语言只描述世界，不构造世界。",
    firstPrinciples: [
      { principle: "名称直接赋予对事物的控制权", verdict: "violated", note: "语言是符号，不携带改变现实的因果力。" },
      { principle: "以吟诵直接改写现实", verdict: "violated", note: "无机制使声音/符号越过物理过程改变物质状态。" }
    ],
    implementation: { current: "无；仅存在于语言哲学与设定学中。", path: ["现实参考：编程（对机器）是弱化的“命名即控制”。", "理论可行性：对物理世界违反法则。", "预研路径：把“真名”理解为强 AI 对系统的完全接口权限。"], blockers: ["符号-因果鸿沟", "法则独立性"] },
    dependencies: [], tags: ["魔法", "真名", "言灵"]
  },
  {
    id: "spellcasting",
    name: "法术位施法",
    aliases: ["施法", "咒文"],
    workId: "dnd", domain: "magic",
    summary: "以意志与咒文直接驱动超自然效应，是绝大多数奇幻魔法的统一范式。",
    description: "从 D&D 的法术位到哈利波特的魔杖，魔法被抽象为“消耗资源→产生效应”的系统。其公理是“意图可直接成为结果”。",
    firstPrinciples: [
      { principle: "意图直接产生物理效应", verdict: "violated", note: "现实中意图须经身体与工具的中介，无直接因果通道。" },
      { principle: "能量来自可恢复的法术池", verdict: "violated", note: "无已知的“魔法能量”储量与恢复机制。" }
    ],
    implementation: { current: "无；工程上以机器与外骨骼近似“赋能”。", path: ["现实参考：外骨骼、远程操控、自动化。", "理论可行性：违反能量守恒与因果中介。", "预研路径：以可穿戴增强+AI 模拟“所想即所得”的弱形式。"], blockers: ["直接因果通道", "魔法能量", "守恒定律"] },
    dependencies: [], tags: ["魔法", "施法", "咒文"]
  },
  {
    id: "the-one-ring",
    name: "统御魔戒",
    aliases: ["至尊魔戒", "魔戒"],
    workId: "lord-of-rings", domain: "artifact",
    summary: "以一句咒文统御众戒、放大意志并赋予隐形的概念性造物，依赖“咒文即法则”的设定。",
    description: "至尊魔戒是“物品承载意志与支配力”的极致。现实中物品不承载意志，也不跨空间施加支配。",
    firstPrinciples: [
      { principle: "器物承载并可施加意志", verdict: "violated", note: "无机制使物体获得跨距的支配力。" },
      { principle: "咒文绑定主权（统御众戒）", verdict: "violated", note: "依赖设定的“名分即权能”公理。" }
    ],
    implementation: { current: "无；现实中以品牌/密钥/权限系统弱近似“支配”。", path: ["现实参考：权限系统、催眠与影响力。", "理论可行性：违反法则。", "预研路径：以中心化控制协议模拟“统御”的弱形式。"], blockers: ["意志物化", "跨距支配"] },
    dependencies: [], tags: ["造物", "魔戒", "支配"]
  },

  // ===================== 指环王 =====================
  {
    id: "mithril",
    name: "秘银锻造",
    aliases: ["mithril", "银钢"],
    workId: "lord-of-rings", domain: "artifact",
    summary: "轻于银而坚于钢的稀有金属甲胄，现实中对应高比强度合金与复合材料。",
    description: "秘银是托尔金笔下“理想材料”的代表。今天的钛合金、陶瓷复合装甲已在“轻且硬”上接近其描述。",
    firstPrinciples: [
      { principle: "高比强度材料", verdict: "achieved", note: "钛合金、碳纤维、陶瓷复合已达或超越描述。" },
      { principle: "自带魔法抗性", verdict: "violated", note: "材料无法天然抵御“魔法”这一非物理攻击。" }
    ],
    implementation: { current: "现代防护材料性能已可覆盖其描述。", path: ["现实参考：钛合金、PE 纤维、陶瓷装甲。", "理论可行性：物理性能成立。", "预研路径：自修复、自适应装甲。"], blockers: ["魔法抗性（不可实现）"] },
    dependencies: ["real-metallurgy"], tags: ["造物", "材料", "甲胄"]
  },
  {
    id: "palantir",
    name: "真知晶球",
    aliases: ["palantír", "远见石"],
    workId: "lord-of-rings", domain: "lore",
    summary: "隔远距窥视并与他者心灵相联的晶球，现实对应为远程视觉+通信，但“心灵联机”超出现实。",
    description: "真知晶球把“看见远方”与“思维互联”结合。前者已被监控网络实现，后者触及脑机接口的远景。",
    firstPrinciples: [
      { principle: "远程视觉", verdict: "achieved", note: "遥感与监控已覆盖。" },
      { principle: "跨距心灵直连", verdict: "breakthrough", note: "脑际直接通信仍处实验早期。" }
    ],
    implementation: { current: "远程视觉成熟；脑际直连探索中。", path: ["现实参考：卫星、脑机接口。", "理论可行性：视觉可行，心灵联机难。", "预研路径：以XR+通信模拟“共视”。"], blockers: ["心灵直连", "带宽"] },
    dependencies: ["scrying"], tags: ["秘术", "晶球", "窥视"]
  },
  {
    id: "ent",
    name: "树人（古老生灵）",
    aliases: ["Ent", "牧树者"],
    workId: "lord-of-rings", domain: "beast",
    summary: "以树木为身、能言会思的古老生灵，现实对应为植物智能与合成生物的远景。",
    description: "树人是“植物获得行动与意识”的想象。现实里植物有信号网络但无神经，全株移动与言语远超生物现状。",
    firstPrinciples: [
      { principle: "植物具分布式信号网络", verdict: "achieved", note: "植物电化学信号已被证实。" },
      { principle: "植物整体移动与言语", verdict: "violated", note: "缺乏肌肉/神经支撑移动与发声。" }
    ],
    implementation: { current: "无移动植物；机器人与仿生植物研究活跃。", path: ["现实参考：软体机器人、植物电调控。", "理论可行性：移动植物违反生物结构。", "预研路径：以植物-机器混合体近似。"], blockers: ["植物运动结构", "植物意识"] },
    dependencies: ["controlled-mutation"], tags: ["生灵", "植物", "合成生物"]
  },
  {
    id: "rings-of-power",
    name: "统御众戒",
    aliases: ["力量之戒", "九戒七戒"],
    workId: "lord-of-rings", domain: "artifact",
    summary: "由至尊魔戒统御的一批赋予能力（不朽、力量）的戒指，属概念性造物。",
    description: "众戒把“佩戴即获得权能”极致化，并受至尊魔戒支配。其机制完全依赖世界观设定的名分公理。",
    firstPrinciples: [
      { principle: "佩戴即获得超凡权能", verdict: "violated", note: "物品无法凭佩戴授予物理上不可能的权能。" },
      { principle: "受单一器物远程支配", verdict: "violated", note: "依赖至尊魔戒的设定逻辑。" }
    ],
    implementation: { current: "无；以智能戒指、AR 设备弱近似“增强”。", path: ["现实参考：可穿戴设备、神经刺激。", "理论可行性：违反法则。", "预研路径：以个性化增强设备模拟局部“权能”。"], blockers: ["权能授予", "远程支配"] },
    dependencies: ["the-one-ring"], tags: ["造物", "魔戒", "权能"]
  },

  // ===================== 哈利·波特 =====================
  {
    id: "wand-magic",
    name: "魔杖施法",
    aliases: ["wand", "咒语"],
    workId: "harry-potter", domain: "magic",
    summary: "以魔杖为媒介、手势+咒文直接改写现实，是“工具化魔法”的代表。",
    description: "魔杖把分散的魔法收束进一个手持接口。它仍是“意图直接成真”的魔法公理，只是加了媒介与学习曲线。",
    firstPrinciples: [
      { principle: "媒介放大并定向施法", verdict: "violated", note: "无物理通道使咒文变现实。" },
      { principle: "学习即可掌握因果改写", verdict: "violated", note: "依赖设定的“训练即授权”。" }
    ],
    implementation: { current: "无；以遥控设备弱近似“指哪打哪”。", path: ["现实参考：遥控、AR 标注。", "理论可行性：违反法则。", "预研路径：以“增强现实+自动化”模拟施法体验。"], blockers: ["因果改写", "魔法能量"] },
    dependencies: ["spellcasting"], tags: ["魔法", "魔杖", "咒语"]
  },
  {
    id: "invisibility-cloak",
    name: "隐身衣",
    aliases: ["隐形斗篷", "cloak"],
    workId: "harry-potter", domain: "artifact",
    summary: "穿戴后不可见的衣物，现实对应为超材料隐身（窄带）与主动伪装。",
    description: "隐身衣把“不被看见”具象为一件衣服。现实的超材料斗篷与自适应迷彩已能在受限条件下实现部分隐身。",
    firstPrinciples: [
      { principle: "引导波绕过物体", verdict: "achieved", note: "超材料在微波段验证。" },
      { principle: "全可见光、任意姿态隐身", verdict: "breakthrough", note: "宽频、动态、低成本仍极难。" }
    ],
    implementation: { current: "微波段与热/声隐身有原型；可见光全身隐身无。", path: ["现实参考：超材料、自适应迷彩。", "理论可行性：受限可行。", "预研路径：从单频到宽频、从设备到织物。"], blockers: ["宽频", "动态", "织物化"] },
    dependencies: ["metamaterial-cloak"], tags: ["造物", "隐身", "织物"]
  },
  {
    id: "potions",
    name: "魔药炼制",
    aliases: ["药剂", "brew"],
    workId: "harry-potter", domain: "alchemy",
    summary: "以草药与生物材料熬煮出超常效用的药剂，现实对应为药物化学与复方制剂。",
    description: "魔药把“配方即效果”推到奇幻程度（变形、增慧）。其现实底座是真实药理学——只是现实中配不出“变身水”。",
    firstPrinciples: [
      { principle: "配方产生生理效应", verdict: "achieved", note: "药物化学成熟。" },
      { principle: "大幅改写形态/本质", verdict: "violated", note: "无药剂能改变物种形态。" }
    ],
    implementation: { current: "真实药剂广泛存在；变身/变形无。", path: ["现实参考：激素、基因药物。", "理论可行性：常规效应可行，本质改写不可。", "预研路径：以精准药理逼近“强效”。"], blockers: ["形态改写"] },
    dependencies: ["real-herbalism"], tags: ["炼金", "药剂", "草药"]
  },
  {
    id: "horcrux",
    name: "魂器",
    aliases: ["horcrux", "分裂灵魂"],
    workId: "harry-potter", domain: "lore",
    summary: "裂魂藏入器物以求永生，是“灵魂可分割存储”的极端化，完全依赖设定公理。",
    description: "魂器把灵魂容器推到“分裂自我以避死”的极致。现实中灵魂不可分、不可裂，意识同一性也无法如此切割。",
    firstPrinciples: [
      { principle: "灵魂可主动分裂", verdict: "violated", note: "无灵魂实体，更无分裂机制。" },
      { principle: "碎片锚定外物续命", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以数字人格备份弱近似。", path: ["现实参考：意识上传设想。", "理论可行性：违反法则。", "预研路径：以分布式数字自我近似“续命”。"], blockers: ["灵魂分裂", "自我同一性"] },
    dependencies: ["soul-storage"], tags: ["秘术", "魂器", "永生"]
  },
  {
    id: "floo-network",
    name: "飞路网（壁炉传送）",
    aliases: ["飞路粉", "floo"],
    workId: "harry-potter", domain: "realm",
    summary: "踏入壁炉并念出地名即可抵达对应壁炉，是“定点传送”的温馨化版本。",
    description: "飞路网把传送收束为“已知节点间瞬移”。现实中对应分布式运输+通信，但物理瞬移仍不可行。",
    firstPrinciples: [
      { principle: "已知节点间瞬移", verdict: "breakthrough", note: "宏观传送受信息/热力学约束。" },
      { principle: "经火焰通道位移", verdict: "violated", note: "无“火焰通道”这一物理介质。" }
    ],
    implementation: { current: "无瞬移；以高速交通+视频弱近似。", path: ["现实参考：高铁、远程呈现。", "理论可行性：违反约束。", "预研路径：以'重打印'近似，原件销毁。"], blockers: ["宏观传送", "信息重建"] },
    dependencies: ["portal-basics"], tags: ["界域", "传送", "网络"]
  },
  {
    id: "patronus",
    name: "守护神咒",
    aliases: ["Patronus", "快乐护盾"],
    workId: "harry-potter", domain: "magic",
    summary: "以快乐记忆召唤银色护兽驱散黑暗生物，是纯情感驱动的魔法效应。",
    description: "守护神咒把“情绪直接具象为护体实体”极致化。现实中情绪影响生理但无法凝成实体生物。",
    firstPrinciples: [
      { principle: "情绪凝成实体护兽", verdict: "violated", note: "无机制使情感外化为物理实体。" },
      { principle: "对“黑暗”概念性克制", verdict: "violated", note: "依赖设定的善恶公理。" }
    ],
    implementation: { current: "无；以投影/机器人弱近似护体形象。", path: ["现实参考：情感计算、全息投影。", "理论可行性：违反法则。", "预研路径：以情感驱动的外显形象近似。"], blockers: ["情感物化", "概念克制"] },
    dependencies: ["wand-magic"], tags: ["魔法", "守护", "情感"]
  },

  // ===================== 冰与火之歌 =====================
  {
    id: "valyrian-steel",
    name: "瓦雷利亚钢",
    aliases: ["龙钢", "Valyrian steel"],
    workId: "got", domain: "artifact",
    summary: "以陨铁折叠锻造、轻韧不朽的传奇钢材，现实对应为顶级大马士革钢与现代合金。",
    description: "瓦雷利亚钢是“失传神兵”的原型。今天的粉末冶金与折叠钢在性能上已可媲美其传说描述。",
    firstPrinciples: [
      { principle: "折叠锻造细化组织", verdict: "achieved", note: "大马士革钢、粉末冶金原理清楚。" },
      { principle: "永不锈蚀且轻韧", verdict: "achieved", note: "现代不锈钢与钛合金可覆盖。" }
    ],
    implementation: { current: "高端合金性能已超传说描述。", path: ["现实参考：大马士革钢、马氏体时效钢。", "理论可行性：成立。", "预研路径：自锐、自修复刃具。"], blockers: [] },
    dependencies: ["real-metallurgy"], tags: ["造物", "钢材", "兵器"]
  },
  {
    id: "dragons-got",
    name: "维斯特洛的龙",
    aliases: ["龙", "Dragon"],
    workId: "got", domain: "beast",
    summary: "体型如楼宇、喷吐可燃液体的活体飞行巨兽，受生物尺度与代谢限制不可实现。",
    description: "剧中的龙把神话龙具象为生物兵器。其飞行与喷火在现实生物物理上均不可维持。",
    firstPrinciples: [
      { principle: "巨型生物飞行", verdict: "violated", note: "升力/重量比在楼宇尺度不可维持。" },
      { principle: "内源喷火", verdict: "violated", note: "无安全的内源燃烧通路。" }
    ],
    implementation: { current: "无活体；机械龙与飞行器可模拟形态。", path: ["现实参考：大型无人机、机械龙偶。", "理论可行性：生物学不可行。", "预研路径：以无人平台模拟功能。"], blockers: ["尺度极限", "内源喷火"] },
    dependencies: ["dragon-myth"], tags: ["生灵", "龙", "生物兵器"]
  },
  {
    id: "weirwood",
    name: "鱼梁木绿视",
    aliases: ["heart tree", "绿先知"],
    workId: "got", domain: "lore",
    summary: "通过嵌入鱼梁木的瞳孔远程窥视与预知，现实对应为分布式传感+通信。",
    description: "鱼梁木网络把“千里眼”植物化、网络化了。现实中遥感与监控可近似其视觉部分，预知仍不可得。",
    firstPrinciples: [
      { principle: "网络化的远程视觉", verdict: "achieved", note: "监控与卫星网络已实现。" },
      { principle: "预知未来", verdict: "breakthrough", note: "精确长时预测受混沌限制。" }
    ],
    implementation: { current: "远程视觉可行；预知无。", path: ["现实参考：传感网络、AI 预测。", "理论可行性：视觉可行，预知难。", "预研路径：分布式视觉+受限预测。"], blockers: ["预知", "混沌"] },
    dependencies: ["scrying"], tags: ["秘术", "窥视", "网络"]
  },
  {
    id: "wildfire",
    name: "野火",
    aliases: ["炼金炸弹", " wildfire"],
    workId: "got", domain: "alchemy",
    summary: "比希腊火更剧烈、遇水反旺的绿色炼金燃烧剂，现实对应为高活性燃烧剂。",
    description: "野火是“失控的炼金产物”。现实中确有高活性燃烧剂（如铝热剂、白磷），但“遇水更旺”需特殊化学。",
    firstPrinciples: [
      { principle: "高活性自持燃烧", verdict: "achieved", note: "铝热剂、燃烧弹已验证。" },
      { principle: "遇水反而更旺", verdict: "breakthrough", note: "需遇水放能的配方，工程受限且危险。" }
    ],
    implementation: { current: "强燃烧剂存在；“遇水更旺”配方受限。", path: ["现实参考：铝热反应、储氢材料。", "理论可行性：部分可行。", "预研路径：更安全的强燃烧剂。"], blockers: ["遇水放能配方", "安全性"] },
    dependencies: ["real-gunpowder"], tags: ["炼金", "燃烧", "武器"]
  },

  // ===================== 龙与地下城 =====================
  {
    id: "wish",
    name: "许愿术",
    aliases: ["Wish", "祈愿"],
    workId: "dnd", domain: "magic",
    summary: "以一句愿望直接重排现实因果，是魔法公理的极致——不耗能量，只耗“规则允许”。",
    description: "许愿术把“所愿即所得”推到全知全能的边缘。它不经由任何物理过程，是纯设定层面的因果改写。",
    firstPrinciples: [
      { principle: "愿望直接成为现实", verdict: "violated", note: "无任何机制使语句越过物理过程改变世界。" },
      { principle: "不产生能量/熵债", verdict: "violated", note: "违反能量守恒与热力学。" }
    ],
    implementation: { current: "无；以自动化/AI 弱近似“达成目标”。", path: ["现实参考：规划与执行系统。", "理论可行性：违反法则。", "预研路径：以强自动化近似“许愿”的工程面。"], blockers: ["因果改写", "守恒违反"] },
    dependencies: ["spellcasting"], tags: ["魔法", "许愿", "因果"]
  },
  {
    id: "golem",
    name: "魔像",
    aliases: ["Golem", "构装体"],
    workId: "dnd", domain: "beast",
    summary: "以泥土/金属注入灵魂或咒文而活的构装体，现实对应为机器人与具身智能。",
    description: "魔像是“无生命物质被赋予行动”的想象。今天的机器人与具身 AI 已能在功能上高度近似。",
    firstPrinciples: [
      { principle: "物质被赋予行动", verdict: "achieved", note: "机器人已具行动力。" },
      { principle: "以“灵魂/咒文”激活", verdict: "breakthrough", note: "不需灵魂，软件+控制即可驱动。" }
    ],
    implementation: { current: "机器人与具身 AI 已商用。", path: ["现实参考：人形机器人、具身智能。", "理论可行性：功能可行。", "预研路径：更高自主性的通用机器人。"], blockers: ["通用自主", "常识推理"] },
    dependencies: ["clockwork-automata"], tags: ["生灵", "构装体", "机器人"]
  },
  {
    id: "portal-dnd",
    name: "异界门",
    aliases: ["Portal", "传送门"],
    workId: "dnd", domain: "realm",
    summary: "稳定开启连接两地的瞬时通道，现实对应为受限的传送理论与远程呈现。",
    description: "异界门把传送收束为“稳定的双向通道”。现实中宏观物体传送不可行，但通道的“连接”意象可由网络近似。",
    firstPrinciples: [
      { principle: "稳定空间通道", verdict: "breakthrough", note: "宏观传送受信息/热力学约束。" },
      { principle: "双向即时通行", verdict: "breakthrough", note: "无物理通道支持。" }
    ],
    implementation: { current: "无瞬移；以高速运输+远程呈现近似。", path: ["现实参考：远程操作、重打印设想。", "理论可行性：违反约束。", "预研路径：以机器人+通信模拟通道两端。"], blockers: ["空间通道", "信息重建"] },
    dependencies: ["portal-basics"], tags: ["界域", "传送", "通道"]
  },
  {
    id: "raise-dead",
    name: "复活术",
    aliases: ["Resurrection", "复生"],
    workId: "dnd", domain: "lore",
    summary: "使死者复生，现实对应为濒死复苏与低温医学的远景，但真正“死而复生”不可得。",
    description: "复活术把“死亡可逆”直接施为。现实中死亡判定后脑不可逆损伤，复生超出当前医学。",
    firstPrinciples: [
      { principle: "临床死亡可复苏", verdict: "achieved", note: "CPR、除颤、亚低温已能挽救部分骤停。" },
      { principle: "脑死亡后完整复生", verdict: "breakthrough", note: "脑死亡后神经结构不可逆损毁。" }
    ],
    implementation: { current: "骤停复苏可行；脑死亡复生无。", path: ["现实参考：器官保存、神经修复。", "理论可行性：受限可行。", "预研路径：神经再生的长程研究。"], blockers: ["脑死亡不可逆", "神经重建"] },
    dependencies: ["soul-storage"], tags: ["秘术", "复活", "生命"]
  },

  // ===================== 魔兽世界 =====================
  {
    id: "fel-magic",
    name: "邪能",
    aliases: ["Fel", "混沌绿火"],
    workId: "warcraft", domain: "magic",
    summary: "源自扭曲虚空的腐蚀性能量，不经由任何物质-能量转换，属纯设定能量。",
    description: "邪能是“异维度恶意能量”的代表。它绕过能量守恒，是世界观独有的魔法资源。",
    firstPrinciples: [
      { principle: "异维度无源能量", verdict: "violated", note: "无机制从“虚空”凭空取能。" },
      { principle: "能量即腐蚀", verdict: "violated", note: "依赖设定的善恶公理。" }
    ],
    implementation: { current: "无；以高危能源（放射/化学）弱近似“腐蚀”。", path: ["现实参考：放射性、腐蚀性介质。", "理论可行性：违反法则。", "预研路径：以受控危险能源模拟其危险面。"], blockers: ["无源能量", "虚空维度"] },
    dependencies: ["spellcasting"], tags: ["魔法", "邪能", "虚空"]
  },
  {
    id: "undead-scourge",
    name: "亡灵天灾",
    aliases: ["Scourge", "不死瘟疫"],
    workId: "warcraft", domain: "lore",
    summary: "以瘟疫批量转化生命为不死的奴兵，完全违反热力学与生物分解规律。",
    description: "亡灵天灾把“死亡可被征用”推到军团规模。现实中尸体分解、能量耗散，无法被“转化”为持续战力。",
    firstPrinciples: [
      { principle: "尸体保持战力", verdict: "violated", note: "分解与能量耗散不可避免。" },
      { principle: "瘟疫式意识转化", verdict: "violated", note: "无机制批量改写意识。" }
    ],
    implementation: { current: "无；以自主机器人集群弱近似“奴兵”。", path: ["现实参考：无人集群、控制网络。", "理论可行性：违反法则。", "预研路径：以机器人集群模拟“天灾”形态。"], blockers: ["尸体活化", "意识转化"] },
    dependencies: ["necromancy-folklore"], tags: ["秘术", "亡灵", "瘟疫"]
  },
  {
    id: "portals-wow",
    name: "传送门（艾泽拉斯）",
    aliases: ["Portal", "奥术门"],
    workId: "warcraft", domain: "realm",
    summary: "法师开启的瞬时空间门，现实对应为受限传送理论与远程呈现。",
    description: "艾泽拉斯的传送门把“开门即达”常态化。现实中宏观传送不可行，但“门”的意象可由网络与运输近似。",
    firstPrinciples: [
      { principle: "瞬时空间门", verdict: "breakthrough", note: "宏观传送受约束。" },
      { principle: "奥术能量维持", verdict: "violated", note: "无“奥术能量”这一资源。" }
    ],
    implementation: { current: "无瞬移；以高速交通+通信近似。", path: ["现实参考：远程操作。", "理论可行性：违反约束。", "预研路径：以重打印设想近似。"], blockers: ["空间门", "奥术能量"] },
    dependencies: ["portal-basics"], tags: ["界域", "传送", "门"]
  },
  {
    id: "dragons-wow",
    name: "巨龙（艾泽拉斯）",
    aliases: ["Dragon", "守护巨龙"],
    workId: "warcraft", domain: "beast",
    summary: "具智慧、能言、可施法的守护巨龙，受生物尺度与代谢限制不可实现。",
    description: "魔兽的巨龙把神话龙升格为“有智慧的神兽”。其飞行与喷吐在现实生物物理上不可维持。",
    firstPrinciples: [
      { principle: "巨型智慧飞行生物", verdict: "violated", note: "尺度与代谢不可维持。" },
      { principle: "龙类施法", verdict: "violated", note: "依赖魔法公理。" }
    ],
    implementation: { current: "无活体；机械龙可模拟。", path: ["现实参考：大型无人机。", "理论可行性：生物学不可行。", "预研路径：以无人平台模拟。"], blockers: ["尺度", "内源喷吐"] },
    dependencies: ["dragon-myth"], tags: ["生灵", "龙", "神兽"]
  },
  {
    id: "titan-forging",
    name: "泰坦造物",
    aliases: ["Titanforged", "星魂造物"],
    workId: "warcraft", domain: "artifact",
    summary: "由泰坦（星魂）以秩序之力塑造的机械生命与器物，现实对应为高级机器人与具身智能。",
    description: "泰坦造物把“被更高存在塑造”具象为机械生命。其功能可由现代机器人近似，但“星魂塑造”属设定。",
    firstPrinciples: [
      { principle: "机械生命体", verdict: "achieved", note: "机器人已具行动与一定智能。" },
      { principle: "秩序之力直接塑形", verdict: "violated", note: "依赖设定的“秩序能量”。" }
    ],
    implementation: { current: "机器人与具身 AI 可行。", path: ["现实参考：具身智能。", "理论可行性：功能可行。", "预研路径：更高自主机器人。"], blockers: ["秩序能量"] },
    dependencies: ["real-metallurgy"], tags: ["造物", "机械生命", "泰坦"]
  },

  // ===================== 上古卷轴 =====================
  {
    id: "dragon-shout",
    name: "龙吼（Thu'um）",
    aliases: ["Thu'um", "真言之力"],
    workId: "elder-scrolls", domain: "magic",
    summary: "以真实之语直接命令现实（推开山、定住时），是“真名即权能”的极端化。",
    description: "龙吼把“言语即因果”推到物理层面：一声吼能撼动山脉。它完全依赖“真实语言即世界接口”的设定。",
    firstPrinciples: [
      { principle: "真实语言直接命令现实", verdict: "violated", note: "语言不携带改变现实的因果力。" },
      { principle: "声波产生巨力效应", verdict: "violated", note: "声波能量密度远低于所述效果。" }
    ],
    implementation: { current: "无；以声波武器弱近似“声学效应”。", path: ["现实参考：声学、定向能。", "理论可行性：违反法则。", "预研路径：以声/能近似局部效果。"], blockers: ["言灵因果", "声波巨力"] },
    dependencies: ["true-name"], tags: ["魔法", "龙吼", "真言"]
  },
  {
    id: "soul-gem",
    name: "灵魂石",
    aliases: ["Soul Gem", "囚魂晶"],
    workId: "elder-scrolls", domain: "lore",
    summary: "囚禁灵魂于晶体以供附魔的造物，现实对应为意识存储与数字人格的远景。",
    description: "灵魂石把“灵魂可压缩存储”工具化。其现实近似是意识上传与数字人格的设想，但仍触及意识本质。",
    firstPrinciples: [
      { principle: "灵魂可囚禁存储", verdict: "breakthrough", note: "意识可编码性未证。" },
      { principle: "存储后可重新释放利用", verdict: "breakthrough", note: "重放是否同“我”存疑。" }
    ],
    implementation: { current: "无；以数字存档弱近似。", path: ["现实参考：全脑仿真设想。", "理论可行性：属 L4。", "预研路径：局部记忆/人格数字孪生。"], blockers: ["意识本质", "重放同一性"] },
    dependencies: ["soul-storage"], tags: ["秘术", "灵魂", "附魔"]
  },
  {
    id: "dwemer",
    name: "矮人机械（ Dwemer ）",
    aliases: ["Dwemer", "远古机械"],
    workId: "elder-scrolls", domain: "artifact",
    summary: "失落文明留下的精密蒸汽机械与自治装置，现实对应为高级机器人与自控系统。",
    description: "矮人科技把“失传的精密机械”具象为会自行运转的造物。其现实底座是现代机器人与自动化。",
    firstPrinciples: [
      { principle: "精密自治机械", verdict: "achieved", note: "机器人与自控系统成熟。" },
      { principle: "机械具群体智能", verdict: "breakthrough", note: "多机协同仍在演进。" }
    ],
    implementation: { current: "机器人与多机系统已商用。", path: ["现实参考：工业自动化、多智能体。", "理论可行性：成立。", "预研路径：更高自主的多机系统。"], blockers: ["群体自主"] },
    dependencies: ["clockwork-automata"], tags: ["造物", "机械", "自治"]
  },
  {
    id: "daedric",
    name: "魔神器",
    aliases: ["Daedric Artifact", "魔族造物"],
    workId: "elder-scrolls", domain: "artifact",
    summary: "由魔神锻造、具概念性权能的器物（如吸魂剑），依赖世界观独有设定。",
    description: "魔神器把“器物承载神性权能”极致化。其效果（吞噬灵魂、改写命运）完全依赖设定公理。",
    firstPrinciples: [
      { principle: "器物承载神性权能", verdict: "violated", note: "无机制使物品获得超自然权能。" },
      { principle: "概念性效果（噬魂）", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以智能/数据采集设备弱近似。", path: ["现实参考：可穿戴、数据系统。", "理论可行性：违反法则。", "预研路径：以功能设备模拟局部效果。"], blockers: ["神性权能", "概念效果"] },
    dependencies: ["the-one-ring"], tags: ["造物", "魔神", "权能"]
  },

  // ===================== 黑暗之魂 =====================
  {
    id: "soul-transference",
    name: "灵魂转移",
    aliases: ["魂移", "不死诅咒"],
    workId: "dark-souls", domain: "lore",
    summary: "记忆与能力随灵魂在躯体间迁移，现实对应为意识上传与数字自我的远景。",
    description: "魂系把“自我可迁移”置于死亡循环的中心。其现实近似是意识上传，但仍受意识本质约束。",
    firstPrinciples: [
      { principle: "自我可迁移载体", verdict: "breakthrough", note: "意识可移植性未证。" },
      { principle: "死亡后保留连续性", verdict: "breakthrough", note: "脑死亡后结构不可逆。" }
    ],
    implementation: { current: "无；以数字备份弱近似。", path: ["现实参考：全脑仿真设想。", "理论可行性：属 L4。", "预研路径：局部记忆数字孪生。"], blockers: ["意识本质", "连续性"] },
    dependencies: ["soul-storage"], tags: ["秘术", "灵魂", "迁移"]
  },
  {
    id: "bonfire",
    name: "营火（检查点）",
    aliases: ["Bonfire", "篝火"],
    workId: "dark-souls", domain: "artifact",
    summary: "跨死亡重置世界的“存档点”，是元设定层面的概念性造物。",
    description: "营火把“游戏存档”具象为世界观内的实体。它在叙事层面重置状态，属纯设定机制。",
    firstPrinciples: [
      { principle: "实体重置世界状态", verdict: "violated", note: "无机制使一个火堆回滚现实。" },
      { principle: "跨死亡保留进度", verdict: "violated", note: "依赖元设定。" }
    ],
    implementation: { current: "无；以存档系统弱近似。", path: ["现实参考：状态保存。", "理论可行性：违反法则。", "预研路径：以数字孪生模拟“重置”。"], blockers: ["世界回滚", "元机制"] },
    dependencies: [], tags: ["造物", "概念", "存档"]
  },
  {
    id: "lord-soul",
    name: "王魂",
    aliases: ["Lord Soul", "原初魂"],
    workId: "dark-souls", domain: "lore",
    summary: "赋予神祇级权能的原初灵魂碎片，依赖“灵魂即力量”的设定公理。",
    description: "王魂把“灵魂=能量=权能”推到极致。现实中意识不携带可直接使用的巨量能量。",
    firstPrinciples: [
      { principle: "灵魂即可调用能量", verdict: "violated", note: "意识不携带可用能量。" },
      { principle: "碎片授予神级权能", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以能量系统弱近似。", path: ["现实参考：能源网络。", "理论可行性：违反法则。", "预研路径：以能源权限模拟“权能”。"], blockers: ["灵魂能量", "神级权能"] },
    dependencies: ["soul-transference"], tags: ["秘术", "灵魂", "权能"]
  },
  {
    id: "greatsword",
    name: "巨剑",
    aliases: "巨刃",
    workId: "dark-souls", domain: "artifact",
    summary: "超大尺寸的单手/双手剑，现实中作为仪式兵器与工程挑战均有先例。",
    description: "魂系巨剑是“夸张化冷兵器”的代表。现实中的超大剑（如苏格兰斩剑）确实存在，只是实用性有限。",
    firstPrinciples: [
      { principle: "大尺寸钢刃可锻造", verdict: "achieved", note: "历史上有多种大型剑，冶金可行。" },
      { principle: "人可高效挥舞", verdict: "achieved", note: "受人体工学限制，但可造可用。" }
    ],
    implementation: { current: "大型剑作为藏品/仪式兵器存在。", path: ["现实参考：历史巨剑、现代锻造。", "理论可行性：成立。", "预研路径：以材料优化提升实用性。"], blockers: [] },
    dependencies: ["real-metallurgy"], tags: ["造物", "兵器", "剑"]
  },

  // ===================== 战锤·奇幻 =====================
  {
    id: "chaos-magic",
    name: "混沌魔法",
    aliases: ["Chaos", "邪术"],
    workId: "warhammer", domain: "magic",
    summary: "直接汲取异维度神祇之力的魔法，施法即与不可名状存在缔约，属纯设定。",
    description: "混沌魔法把“魔法来自危险的外神”具象化。它绕过任何物理能量链，是世界观独有的危险资源。",
    firstPrinciples: [
      { principle: "异维度神力可直接取用", verdict: "violated", note: "无机制从异维度取能。" },
      { principle: "缔约即获权能", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以高危能源弱近似。", path: ["现实参考：危险能源管理。", "理论可行性：违反法则。", "预研路径：以受控危险能源模拟代价。"], blockers: ["异维度神力", "缔约机制"] },
    dependencies: ["spellcasting"], tags: ["魔法", "混沌", "邪神"]
  },
  {
    id: "warpstone",
    name: "次元石（闹鬼石）",
    aliases: ["Warpstone", "绿石"],
    workId: "warhammer", domain: "alchemy",
    summary: "来自混沌魔域、扭曲血肉与因果的辐射矿物，现实无对应，是设定独有物质。",
    description: "次元石把“矿物即异常”具象化。它既像放射性又像因果污染，现实中无单一物质能同时具备。",
    firstPrinciples: [
      { principle: "矿物携带异维度异常", verdict: "violated", note: "无物质能扭曲因果。" },
      { principle: "辐射即变异催化", verdict: "breakthrough", note: "辐射致突变真实，但非“魔法”“。" }
    ],
    implementation: { current: "无；以放射性矿物弱近似。", path: ["现实参考：放射性同位素。", "理论可行性：违反法则。", "预研路径：以受控诱变模拟局部效果。"], blockers: ["因果扭曲", "异维度来源"] },
    dependencies: ["alchemy-history"], tags: ["炼金", "矿物", "混沌"]
  },
  {
    id: "skaven",
    name: "鼠人",
    aliases: ["Skaven", "鼠族"],
    workId: "warhammer", domain: "beast",
    summary: "由人类突变而来的类鼠智慧族群，现实对应为定向诱变与合成生物的远景。",
    description: "鼠人把“定向突变出全新智慧物种”具象化。现实中可局部改造，但塑造完整新物种极难。",
    firstPrinciples: [
      { principle: "定向诱变出新物种", verdict: "breakthrough", note: "跨代稳定、可育的新物种超出当前能力。" },
      { principle: "维持智慧与社会", verdict: "breakthrough", note: "神经与认知的物种级设计未解。" }
    ],
    implementation: { current: "局部基因改造可行；新物种无。", path: ["现实参考：合成生物、诱变。", "理论可行性：受限可行。", "预研路径：从治疗到受限新性状。"], blockers: ["新物种稳定性", "认知设计"] },
    dependencies: ["controlled-mutation"], tags: ["生灵", "突变", "新物种"]
  },
  {
    id: "steam-tank",
    name: "蒸汽坦克",
    aliases: ["Steam Tank", "蒸汽战车"],
    workId: "warhammer", domain: "artifact",
    summary: "以蒸汽驱动的装甲战车，现实中对应早期装甲车辆与工程机械。",
    description: "蒸汽坦克把“蒸汽动力+装甲”组合为战场机械。其现实底座是蒸汽工程与车辆制造。",
    firstPrinciples: [
      { principle: "蒸汽驱动装甲车辆", verdict: "achieved", note: "早期蒸汽车辆与装甲工程成熟。" },
      { principle: "持续作战机动", verdict: "achieved", note: "现代车辆已远超。" }
    ],
    implementation: { current: "装甲车辆与工程机械已成熟。", path: ["现实参考：蒸汽机车、装甲车。", "理论可行性：成立。", "预研路径：更高效动力与防护。"], blockers: [] },
    dependencies: ["clockwork-automata"], tags: ["造物", "蒸汽", "战车"]
  },

  // ===================== 巫师 =====================
  {
    id: "signs",
    name: "法印",
    aliases: ["Sign", "昆特法印"],
    workId: "witcher", domain: "magic",
    summary: "以手势与简短意志释放的简单魔法效应（火焰、束缚、误导），现实对应为便携式能量装置。",
    description: "法印把“魔法”降级为可随手释放的小技能。其现实近似是便携能源与效应器（点火、投影、束缚）。",
    firstPrinciples: [
      { principle: "便携释放定向效应", verdict: "breakthrough", note: "效应需设备中介，非徒手。" },
      { principle: "手势即触发", verdict: "violated", note: "无机制使手势直接产生物理效应。" }
    ],
    implementation: { current: "效应可由设备实现；徒手触发无。", path: ["现实参考：便携点火器、AR、束缚装置。", "理论可行性：受限可行。", "预研路径：以可穿戴效应器模拟法印。"], blockers: ["徒手触发", "能量源"] },
    dependencies: ["spellcasting"], tags: ["魔法", "法印", "手势"]
  },
  {
    id: "mutagens",
    name: "突变药剂",
    aliases: ["Mutagen", "青草试炼"],
    workId: "witcher", domain: "alchemy",
    summary: "以剧毒配方重排生理、赋予超感与自愈，现实对应为药物改造与基因治疗。",
    description: "突变药剂把“服药即强化”具象化。现实中药物可局部改造生理，但稳定、可逆、全面的强化仍难。",
    firstPrinciples: [
      { principle: "药物改造生理", verdict: "achieved", note: "药物与基因治疗已能局部改变。" },
      { principle: "全面稳定强化", verdict: "breakthrough", note: "系统级、可逆、无副作用的强化未得。" }
    ],
    implementation: { current: "局部药理改造可行；全面强化无。", path: ["现实参考：兴奋剂、基因治疗。", "理论可行性：受限可行。", "预研路径：更安全的增强药理。"], blockers: ["系统强化", "副作用"] },
    dependencies: ["real-herbalism", "controlled-mutation"], tags: ["炼金", "药剂", "突变"]
  },
  {
    id: "decoctions",
    name: "煎药",
    aliases: ["Decoction", "强效药剂"],
    workId: "witcher", domain: "alchemy",
    summary: "以怪物材料熬煮的强效临时增益药剂，现实对应为靶向药物与兴奋剂。",
    description: "煎药把“以敌制敌”的炼金逻辑具象化。现实中靶向药物可提供临时增益，但无怪物素材的奇效。",
    firstPrinciples: [
      { principle: "配方提供临时增益", verdict: "achieved", note: "兴奋剂、营养剂已应用。" },
      { principle: "敌材转化增益", verdict: "breakthrough", note: "无机制从怪物提取超常增益。" }
    ],
    implementation: { current: "增益药物存在；怪物素材奇效无。", path: ["现实参考：靶向药物。", "理论可行性：常规增益可行。", "预研路径：更精准的靶向增益。"], blockers: ["怪物素材效应"] },
    dependencies: ["mutagens"], tags: ["炼金", "药剂", "增益"]
  },

  // ===================== 纳尼亚 =====================
  {
    id: "wardrobe",
    name: "魔衣橱（异界门）",
    aliases: ["Wardrobe", "衣橱之门"],
    workId: "narnia", domain: "realm",
    summary: "一件家具背面连通整片异世界，是“日常物即传送门”的温柔版本。",
    description: "魔衣橱把传送收束为“推门即入他界”。现实中宏观传送不可行，但“门”的意象可由空间组织近似。",
    firstPrinciples: [
      { principle: "家具背面连通异界", verdict: "violated", note: "空间拓扑上不成立。" },
      { principle: "推门即瞬移", verdict: "breakthrough", note: "宏观传送受约束。" }
    ],
    implementation: { current: "无瞬移；以空间设计/远程呈现近似。", path: ["现实参考：远程操作。", "理论可行性：违反约束。", "预研路径：以重打印设想近似。"], blockers: ["空间拓扑", "瞬移"] },
    dependencies: ["portal-basics"], tags: ["界域", "传送", "门"]
  },
  {
    id: "aslan-resurrection",
    name: "石桌复活",
    aliases: ["献祭复活", "Lion's sacrifice"],
    workId: "narnia", domain: "lore",
    summary: "以献祭在石桌重置生命的机制，现实对应为濒死复苏的远景，但“献祭换复活”属神学设定。",
    description: "纳尼亚的复活以象征性献祭为机制。现实中复苏仅限临床早期，且不涉及“代价换生命”。",
    firstPrinciples: [
      { principle: "献祭重置生命", verdict: "violated", note: "无机制使献祭换回死亡。" },
      { principle: "死亡可逆", verdict: "breakthrough", note: "脑死亡后不可逆。" }
    ],
    implementation: { current: "骤停复苏可行；脑死亡复活无。", path: ["现实参考：神经修复研究。", "理论可行性：受限可行。", "预研路径：神经再生长程研究。"], blockers: ["脑死亡不可逆", "神學机制"] },
    dependencies: ["soul-transference"], tags: ["秘术", "复活", "献祭"]
  },
  {
    id: "stone-table",
    name: "石桌",
    aliases: ["Stone Table", "祭桌"],
    workId: "narnia", domain: "artifact",
    summary: "承载献祭与法则重置的概念性圣物，纯设定机制。",
    description: "石桌把“器物承载法则”具象化。其效果（深裂以释放生命）完全依赖世界观的神学设定。",
    firstPrinciples: [
      { principle: "器物承载法则重置", verdict: "violated", note: "无机制使物体改写法则。" },
      { principle: "裂开即释放生命", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以仪式/象征弱近似。", path: ["现实参考：仪式符号。", "理论可行性：违反法则。", "预研路径：以象征系统模拟。"], blockers: ["法则重置", "概念机制"] },
    dependencies: [], tags: ["造物", "圣物", "概念"]
  },

  // ===================== 碟形世界 =====================
  {
    id: "discworld-geometry",
    name: "碟形世界几何",
    aliases: ["Discworld", "巨龟背上的世界"],
    workId: "discworld", domain: "realm",
    summary: "平面大陆驮于巨龟象群、绕双星运行的几何，在引力与力学上完全不成立。",
    description: "碟形世界把“世界本身就是笑话”具象化。其几何是对奇幻套路的智性戏仿，物理上不可维持。",
    firstPrinciples: [
      { principle: "平面大陆稳定存在", verdict: "violated", note: "引力会使平面塌缩为球体。" },
      { principle: "巨龟承载世界", verdict: "violated", note: "结构强度与质量均不可维持。" }
    ],
    implementation: { current: "无；以球形/空间站近似“可居结构”。", path: ["现实参考：空间站、人工重力设想。", "理论可行性：违反力学。", "预研路径：以封闭生态模拟“可居世界”。"], blockers: ["平面引力", "巨龟结构"] },
    dependencies: [], tags: ["界域", "几何", "世界"]
  },
  {
    id: "magic-disc",
    name: "八色魔法",
    aliases: ["Octarine", "源质之色"],
    workId: "discworld", domain: "magic",
    summary: "魔法被量化为八种颜色（第八色为“源质”），是戏仿式设定公理。",
    description: "八色魔法把“魔法可分光”具象化，是对严肃魔法体系的幽默解构。其机制纯属设定。",
    firstPrinciples: [
      { principle: "魔法可分八色", verdict: "violated", note: "魔法非电磁波，无可分色谱。" },
      { principle: "第八色为“源质”", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以光谱/能量分级弱近似。", path: ["现实参考：能量谱分类。", "理论可行性：违反法则。", "预研路径：以能量分级模拟。"], blockers: ["魔法光谱", "源质"] },
    dependencies: [], tags: ["魔法", "八色", "戏仿"]
  },
  {
    id: "librarian",
    name: "图书管理员（红毛猩猩）",
    aliases: ["Librarian", " orangutan"],
    workId: "discworld", domain: "beast",
    summary: "被法术变为红毛猩猩且拒绝变回的人，现实对应为跨物种基因改造的远景，但“智人↔猿”转换不可行。",
    description: "图书管理员把“变形”以温和荒诞的方式呈现。现实中跨物种整体转换超出基因工程。",
    firstPrinciples: [
      { principle: "跨物种整体转换", verdict: "violated", note: "无机制把一种成体整体变为另一物种。" },
      { principle: "保留人格与智力", verdict: "breakthrough", note: "意识跨形态连续性未解。" }
    ],
    implementation: { current: "无；以基因治疗局部改造。", path: ["现实参考：基因编辑。", "理论可行性：整体转换不可行。", "预研路径：以局部改造近似。"], blockers: ["跨物种转换", "意识连续性"] },
    dependencies: ["controlled-mutation"], tags: ["生灵", "变形", "基因"]
  },

  // ===================== 诡秘之主 =====================
  {
    id: "beyonder",
    name: "序列途径（非凡者）",
    aliases: ["Beyonder", "魔药晋升"],
    workId: "lord-of-the-mysteries", domain: "magic",
    summary: "服食魔药沿序列逐级改写生命形态、获得超凡权能，是“物质即权能”的设定公理。",
    description: "诡秘之主把“升级”做成严谨的神秘学体系：每升一级既得能力也逼近疯狂。其机制是“喝下即蜕变”。",
    firstPrinciples: [
      { principle: "服食即重排生命", verdict: "violated", note: "无物质能整体重排生命形态。" },
      { principle: "权能与代价共生", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以药物/神经改造弱近似局部。", path: ["现实参考：神经增强、药理。", "理论可行性：违反法则。", "预研路径：以受限增强近似。"], blockers: ["生命重排", "序列机制"] },
    dependencies: [], tags: ["魔法", "序列", "魔药"]
  },
  {
    id: "sealed-artifact",
    name: "封印物",
    aliases: ["Sealed Artifact", "收容物"],
    workId: "lord-of-the-mysteries", domain: "artifact",
    summary: "被收容的、具概念性危险权能的造物，依赖“物品携带异常”的设定公理。",
    description: "封印物把“异常物品”体系化（近似 SCP）。其效果多违反物理，靠“收容”而非“使用”来叙事。",
    firstPrinciples: [
      { principle: "物品携带概念性异常", verdict: "violated", note: "无机制使物体获得超自然权能。" },
      { principle: "异常可被测度收容", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以危险设备+管控弱近似。", path: ["现实参考：危险品管理。", "理论可行性：违反法则。", "预研路径：以管控系统模拟收容。"], blockers: ["概念异常", "收容机制"] },
    dependencies: ["the-one-ring"], tags: ["造物", "封印", "异常"]
  },
  {
    id: "divination-lom",
    name: "占卜（诡秘）",
    aliases: ["Divination", "命运窥视"],
    workId: "lord-of-the-mysteries", domain: "lore",
    summary: "以仪式与媒介窥探命运与隐秘，现实对应为受限预测与信息搜集。",
    description: "诡秘的占卜把“窥探命运”严肃化。现实中预测科学可部分实现，但“命运”的确定性仍不可得。",
    firstPrinciples: [
      { principle: "从征兆推断未知", verdict: "achieved", note: "贝叶斯推断已应用。" },
      { principle: "确定个体命运", verdict: "breakthrough", note: "长时精确预测受混沌限制。" }
    ],
    implementation: { current: "预测科学可行；命运确定性无。", path: ["现实参考：计算社会科学。", "理论可行性：受限可行。", "预研路径：以受限预测定位为“气象式”。"], blockers: ["混沌", "命运确定性"] },
    dependencies: ["divination-folklore"], tags: ["秘术", "占卜", "命运"]
  },
  {
    id: "outer-deity",
    name: "外神 / 旧日",
    aliases: ["Outer Deity", "旧日"],
    workId: "lord-of-the-mysteries", domain: "beast",
    summary: "来自宇宙之外的不可名状存在，其存在本身即改写物理与认知，纯设定。",
    description: "外神把“宇宙外的不可知”具象为威胁。其机制是“存在即异常”，完全依赖克苏鲁式设定。",
    firstPrinciples: [
      { principle: "域外存在改写物理", verdict: "violated", note: "无机制使“存在”改写常数。" },
      { principle: "不可名状即危险", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以未知风险建模弱近似。", path: ["现实参考：风险评估。", "理论可行性：违反法则。", "预研路径：以未知系统模拟。"], blockers: ["域外改写", "不可名状"] },
    dependencies: ["dragon-myth"], tags: ["生灵", "外神", "克苏鲁"]
  },

  // ===================== 地海 =====================
  {
    id: "summon-wind",
    name: "呼风唤雨",
    aliases: ["Wind召唤", "召风"],
    workId: "earthsea", domain: "magic",
    summary: "以吟诵古语调动气象，现实对应为人工影响天气（受限）与数值预报。",
    description: "地海的呼风把“语言驱动自然”具象化。现实中人工影响天气（增雨、消雹）有限，且不经吟诵。",
    firstPrinciples: [
      { principle: "干预天气", verdict: "breakthrough", note: "人工增雨等有限可行。" },
      { principle: "吟诵直接驱动", verdict: "violated", note: "无机制使语言改变气象。" }
    ],
    implementation: { current: "人工影响天气有限；吟诵驱动无。", path: ["现实参考：人工增雨、数值预报。", "理论可行性：受限可行。", "预研路径：更精细的天气干预。"], blockers: ["吟诵驱动", "干预尺度"] },
    dependencies: ["true-name"], tags: ["魔法", "气象", "言灵"]
  },
  {
    id: "rune-earthsea",
    name: "符文（地海）",
    aliases: ["Rune", "古语符"],
    workId: "earthsea", domain: "magic",
    summary: "以古语符文铭刻并引导魔力的书写魔法，现实对应为程序化/符号化控制。",
    description: "地海符文把“书写即施法”具象化。现实中编程是对机器最贴近的“符号即控制”，但对自然无效。",
    firstPrinciples: [
      { principle: "符号铭刻引导效应", verdict: "achieved", note: "编程对机器即“符号控制”。" },
      { principle: "符号直接引导自然", verdict: "violated", note: "自然语言/符文不改变物理。" }
    ],
    implementation: { current: "编程控制机器可行；引导自然无。", path: ["现实参考：控制系统、编程。", "理论可行性：对机器可行。", "预研路径：以自动化近似符号控制。"], blockers: ["自然引导", "言灵"] },
    dependencies: ["true-name"], tags: ["魔法", "符文", "书写"]
  },

  // ===================== 最终幻想 =====================
  {
    id: "materia",
    name: "魔石",
    aliases: ["Materia", "魔珠"],
    workId: "final-fantasy", domain: "magic",
    summary: "把一段魔法封入可镶嵌结晶、镶嵌即获得能力，现实对应为模块化可插拔功能单元。",
    description: "魔石把“能力即物件”具象化。现实中模块化硬件/软件插件可弱近似“镶嵌即获得能力”。",
    firstPrinciples: [
      { principle: "能力封入可插拔单元", verdict: "breakthrough", note: "模块化硬件/软件可行，但“魔法能力”无。" },
      { principle: "镶嵌即生效", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "模块化插件可行；魔法能力无。", path: ["现实参考：模块化硬件、APP 插件。", "理论可行性：受限可行。", "预研路径：以可插拔增强设备模拟。"], blockers: ["魔法封装", "镶嵌生效"] },
    dependencies: ["spellcasting"], tags: ["魔法", "魔石", "模块化"]
  },
  {
    id: "summon-ff",
    name: "召唤兽",
    aliases: ["Summon", "英灵"],
    workId: "final-fantasy", domain: "beast",
    summary: "以契约唤来独立存在的巨型生物协同作战，依赖“异界契约”机制，纯设定。",
    description: "召唤兽把“借来一头神兽”具象化。其机制是跨越维度的契约，现实中无对应。",
    firstPrinciples: [
      { principle: "契约唤来异界生物", verdict: "violated", note: "无机制跨维度召唤生物。" },
      { principle: "生物协同作战", verdict: "breakthrough", note: "无人协同可弱近似（非生物）。" }
    ],
    implementation: { current: "无；以无人平台弱近似协同。", path: ["现实参考：无人机 swarm。", "理论可行性：违反法则。", "预研路径：以无人集群模拟召唤形态。"], blockers: ["异界契约", "巨兽召唤"] },
    dependencies: ["dragon-myth"], tags: ["生灵", "召唤", "契约"]
  },
  {
    id: "crystal-ff",
    name: "水晶（世界之心）",
    aliases: ["Crystal", "源水晶"],
    workId: "final-fantasy", domain: "artifact",
    summary: "作为世界能量心脏的概念性水晶，依赖“晶体即能源核心”的设定公理。",
    description: "FF 水晶把“世界靠一块水晶运转”具象化。现实中能源来自物理过程，不来自概念晶体。",
    firstPrinciples: [
      { principle: "晶体即世界能源", verdict: "violated", note: "无晶体能充当世界能量核心。" },
      { principle: "概念性供能", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以能源系统弱近似。", path: ["现实参考：能源网络。", "理论可行性：违反法则。", "预研路径：以分布式能源模拟核心。"], blockers: ["概念供能", "水晶核心"] },
    dependencies: [], tags: ["造物", "水晶", "能源"]
  },
  {
    id: "airship",
    name: "飞空艇",
    aliases: ["Airship", "空艇"],
    workId: "final-fantasy", domain: "realm",
    summary: "在云海之上航行的飞行器，现实对应为飞艇、飞机与垂直起降航空器。",
    description: "飞空艇把“自由飞行”浪漫化。现实中航空器已能实现其形态与功能，只是动力与操控不同。",
    firstPrinciples: [
      { principle: "重于空气自由飞行", verdict: "achieved", note: "飞机、飞艇已常态运行。" },
      { principle: "长时间巡航", verdict: "achieved", note: "现代航空器航程充足。" }
    ],
    implementation: { current: "航空器已成熟。", path: ["现实参考：飞艇、eVTOL。", "理论可行性：成立。", "预研路径：更安静、高效的城市空运。"], blockers: [] },
    dependencies: ["real-flight"], tags: ["界域", "飞行", "空艇"]
  },

  // ===================== 龙腾世纪 =====================
  {
    id: "lyrium",
    name: "莱瑞姆",
    aliases: ["Lyrium", "蓝石"],
    workId: "dragon-age", domain: "alchemy",
    summary: "魔法师赖以施法的蓝色矿物，现实对应为特殊功能材料与能源介质。",
    description: "莱瑞姆把“矿物即魔力源”具象化。现实中功能矿物（如锂离子）可弱近似“储能介质”，但无魔法内涵。",
    firstPrinciples: [
      { principle: "矿物作为能源介质", verdict: "achieved", note: "电池矿物（锂、钴）已应用。" },
      { principle: "供魔法施法", verdict: "violated", note: "无“魔法”这一可储能量。" }
    ],
    implementation: { current: "储能矿物存在；魔法无。", path: ["现实参考：电池材料。", "理论可行性：储能可行。", "预研路径：更高能量密度介质。"], blockers: ["魔法能量"] },
    dependencies: ["alchemy-history"], tags: ["炼金", "矿物", "能源"]
  },
  {
    id: "blood-magic",
    name: "血魔法",
    aliases: ["Blood Magic", "血祭"],
    workId: "dragon-age", domain: "magic",
    summary: "以献祭生命直接换取魔法效能，是“生命即燃料”的设定公理。",
    description: "血魔法把“代价具象为鲜血”的黑暗魔法具象化。其机制完全依赖设定，现实中无“生命换法力”通道。",
    firstPrinciples: [
      { principle: "生命直接换效能", verdict: "violated", note: "无机制使牺牲转化为魔法。" },
      { principle: "无媒直接施法", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以生物能源弱近似（极不伦理）。", path: ["现实参考：生物能。", "理论可行性：违反法则。", "预研路径：以能源逻辑模拟代价。"], blockers: ["生命换能", "魔法公理"] },
    dependencies: ["spellcasting"], tags: ["魔法", "血祭", "代价"]
  },
  {
    id: "thedas-dragon",
    name: "赛达斯巨龙",
    aliases: ["Dragon", "古龙"],
    workId: "dragon-age", domain: "beast",
    summary: "远古造物级的飞行巨兽，受生物尺度与代谢限制不可实现。",
    description: "龙腾的巨龙把神话龙置于“远古造物”语境。其飞行与吐息在现实生物物理上不可维持。",
    firstPrinciples: [
      { principle: "巨型飞行生物", verdict: "violated", note: "尺度与代谢不可维持。" },
      { principle: "吐息攻击", verdict: "violated", note: "无内源喷吐通路。" }
    ],
    implementation: { current: "无活体；机械龙可模拟。", path: ["现实参考：大型无人机。", "理论可行性：生物学不可行。", "预研路径：以无人平台模拟。"], blockers: ["尺度", "内源吐息"] },
    dependencies: ["dragon-myth"], tags: ["生灵", "龙", "古龙"]
  },
  {
    id: "fade",
    name: "幽冥界（ Fade ）",
    aliases: ["The Fade", "梦境维度"],
    workId: "dragon-age", domain: "realm",
    summary: "与现实交叠的梦境维度，睡眠与死亡皆可通往，拓扑上不成立，属设定。",
    description: "幽冥界把“梦是另一个地方”具象化。现实中梦是脑状态，不存在可通往的独立维度。",
    firstPrinciples: [
      { principle: "梦境为独立维度", verdict: "violated", note: "梦是神经活动，非空间。" },
      { principle: "死亡/睡眠可通往", verdict: "violated", note: "依赖设定逻辑。" }
    ],
    implementation: { current: "无；以 VR/梦境记录弱近似。", path: ["现实参考：脑机接口、VR。", "理论可行性：违反法则。", "预研路径：以沉浸式模拟近似。"], blockers: ["梦境维度", "通往机制"] },
    dependencies: [], tags: ["界域", "梦境", "维度"]
  },

  // ===================== 炼金之巅 =====================
  {
    id: "philosopher-stone",
    name: "贤者之石",
    aliases: ["Philosopher's Stone", "点金石"],
    workId: "mythology", domain: "alchemy",
    summary: "传说中兼能点金与赐永生的终极造物，依赖“一物解万难”的设定公理。",
    description: "贤者之石是炼金术的巅峰幻想：一块石头同时解开转化与永生。现实中二者皆无单一解。",
    firstPrinciples: [
      { principle: "一物实现元素嬗变", verdict: "breakthrough", note: "嬗变可行但不经济。" },
      { principle: "一物赐予永生", verdict: "violated", note: "无物质能阻断衰老死亡。" }
    ],
    implementation: { current: "无；分别以核嬗变与衰老研究近似。", path: ["现实参考：核嬗变、衰老生物学。", "理论可行性：分项目标受限可行。", "预研路径：拆解为独立工程问题。"], blockers: ["永生", "统一解"] },
    dependencies: ["transmutation"], tags: ["炼金", "贤者之石", "永生"]
  }
,
  {
    id: "myth-creation",
    name: "创世神话",
    aliases: [],
    workId: "mythology",
    domain: "realm",
    summary: "各文明以神祇创世解释天地与人类的起源。",
    description: "各文明以神祇创世解释天地与人类的起源。",
    firstPrinciples: [
      { principle: "神以言语或劳作分出天地", verdict: "violated", note: "仅神话叙事成立" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "myth-underworld",
    name: "冥界与轮回",
    aliases: [],
    workId: "mythology",
    domain: "lore",
    summary: "亡灵赴冥界受审，部分信仰轮回与转生。",
    description: "亡灵赴冥界受审，部分信仰轮回与转生。",
    firstPrinciples: [
      { principle: "死后灵魂有去处并可转生", verdict: "violated", note: "无实证机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "myth-oracle",
    name: "神谕与预言",
    aliases: [],
    workId: "mythology",
    domain: "lore",
    summary: "德尔斐神谕等借征兆与祭仪预告命运。",
    description: "德尔斐神谕等借征兆与祭仪预告命运。",
    firstPrinciples: [
      { principle: "从征兆推断未知", verdict: "breakthrough", note: "现实仅有弱近似预测" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "myth-shapeshift",
    name: "变形术",
    aliases: [],
    workId: "mythology",
    domain: "beast",
    summary: "神、妖与术士以变形自由改变形体。",
    description: "神、妖与术士以变形自由改变形体。",
    firstPrinciples: [
      { principle: "生物自由变换物种形态", verdict: "violated", note: "违反发育与解剖" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "myth-immortal",
    name: "仙人与长生",
    aliases: [],
    workId: "mythology",
    domain: "alchemy",
    summary: "东方仙话与西方炼金皆求不老不死。",
    description: "东方仙话与西方炼金皆求不老不死。",
    firstPrinciples: [
      { principle: "以修炼或丹药达长生", verdict: "violated", note: "衰老不可逆" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "myth-totem",
    name: "万物有灵与图腾",
    aliases: [],
    workId: "mythology",
    domain: "lore",
    summary: "图腾与精灵信仰赋予自然与器物灵性。",
    description: "图腾与精灵信仰赋予自然与器物灵性。",
    firstPrinciples: [
      { principle: "自然与器物具灵性", verdict: "violated", note: "仅为信仰投射" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "myth-hero",
    name: "英雄之旅",
    aliases: [],
    workId: "mythology",
    domain: "realm",
    summary: "英雄跨越阈限、历险归返并赐福族群。",
    description: "英雄跨越阈限、历险归返并赐福族群。",
    firstPrinciples: [
      { principle: "个人冒险改变社群命运", verdict: "achieved", note: "文学母题真实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "myth-astrology",
    name: "占星术",
    aliases: [],
    workId: "mythology",
    domain: "lore",
    summary: "以星象位置推断人事与国运。",
    description: "以星象位置推断人事与国运。",
    firstPrinciples: [
      { principle: "星体位置影响人间", verdict: "violated", note: "无物理机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "myth-divineweapon",
    name: "神兵利器",
    aliases: [],
    workId: "mythology",
    domain: "artifact",
    summary: "神赐兵器往往超出现实冶金性能。",
    description: "神赐兵器往往超出现实冶金性能。",
    firstPrinciples: [
      { principle: "器物自带超自然神力", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "myth-flood",
    name: "灭世洪水",
    aliases: [],
    workId: "mythology",
    domain: "realm",
    summary: "多文明共有神意降洪水涤荡人类的母题。",
    description: "多文明共有神意降洪水涤荡人类的母题。",
    firstPrinciples: [
      { principle: "神意改写文明进程", verdict: "violated", note: "仅叙事层成立" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-silmaril",
    name: "精灵宝钻",
    aliases: [],
    workId: "lord-of-rings",
    domain: "artifact",
    summary: "费艾诺所铸三颗蕴含双圣树之光的宝石。",
    description: "费艾诺所铸三颗蕴含双圣树之光的宝石。",
    firstPrinciples: [
      { principle: "以光本身铸成的造物", verdict: "violated", note: "光无法实体封存" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-numenor",
    name: "努门诺尔",
    aliases: [],
    workId: "lord-of-rings",
    domain: "realm",
    summary: "人类被赐予的西大洋孤岛王国，终因傲慢沉没。",
    description: "人类被赐予的西大洋孤岛王国，终因傲慢沉没。",
    firstPrinciples: [
      { principle: "神赐文明因僭越而覆灭", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-anduril",
    name: "安都瑞尔",
    aliases: [],
    workId: "lord-of-rings",
    domain: "artifact",
    summary: "纳希尔圣剑重铸，阿拉贡的王权之刃。",
    description: "纳希尔圣剑重铸，阿拉贡的王权之刃。",
    firstPrinciples: [
      { principle: "断裂圣剑重铸复勇", verdict: "achieved", note: "现代冶金可重铸" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-eyesauron",
    name: "巴拉督尔之眼",
    aliases: [],
    workId: "lord-of-rings",
    domain: "lore",
    summary: "索伦以意志凝聚的监察之眼笼罩中洲。",
    description: "索伦以意志凝聚的监察之眼笼罩中洲。",
    firstPrinciples: [
      { principle: "意志远程持续监视", verdict: "violated", note: "仅设定成立" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-mirror",
    name: "凯兰崔尔之镜",
    aliases: [],
    workId: "lord-of-rings",
    domain: "lore",
    summary: "银盆水面映出过去、现在与可能的未来。",
    description: "银盆水面映出过去、现在与可能的未来。",
    firstPrinciples: [
      { principle: "水面显现异时异地的影像", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-white-tree",
    name: "刚铎圣白树",
    aliases: [],
    workId: "lord-of-rings",
    domain: "realm",
    summary: "刚铎王权的象征，枯而复萌标志王归来。",
    description: "刚铎王权的象征，枯而复萌标志王归来。",
    firstPrinciples: [
      { principle: "象征物关联国运兴衰", verdict: "achieved", note: "仅为象征" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-rohan",
    name: "洛汗骠骑",
    aliases: [],
    workId: "lord-of-rings",
    domain: "beast",
    summary: "以马匹与轻骑兵著称的人类王国。",
    description: "以马匹与轻骑兵著称的人类王国。",
    firstPrinciples: [
      { principle: "人类与马协同机动作战", verdict: "achieved", note: "骑兵史实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-dwarf",
    name: "都林矮人",
    aliases: [],
    workId: "lord-of-rings",
    domain: "artifact",
    summary: "擅采矿与锻造、居地下堡垒的族群。",
    description: "擅采矿与锻造、居地下堡垒的族群。",
    firstPrinciples: [
      { principle: "地下开采与金属工艺", verdict: "achieved", note: "现实采矿冶金成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-istari",
    name: "巫师伊斯塔力",
    aliases: [],
    workId: "lord-of-rings",
    domain: "magic",
    summary: "维拉派来的迈雅，以老人形貌引导中洲。",
    description: "维拉派来的迈雅，以老人形貌引导中洲。",
    firstPrinciples: [
      { principle: "神灵化形介入世事", verdict: "violated", note: "仅神话层" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotr-barrow",
    name: "古墓尸妖",
    aliases: [],
    workId: "lord-of-rings",
    domain: "lore",
    summary: "被魔多唤醒、操纵古墓亡灵的邪物。",
    description: "被魔多唤醒、操纵古墓亡灵的邪物。",
    firstPrinciples: [
      { principle: "唤醒并驱使古代亡灵", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-patronus",
    name: "呼神护卫",
    aliases: [],
    workId: "harry-potter",
    domain: "magic",
    summary: "以最快乐记忆具象化守护灵抵御摄魂怪。",
    description: "以最快乐记忆具象化守护灵抵御摄魂怪。",
    firstPrinciples: [
      { principle: "正面情感投影抵御负面实体", verdict: "violated", note: "仅设定成立" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-avada",
    name: "阿瓦达索命",
    aliases: [],
    workId: "harry-potter",
    domain: "magic",
    summary: "三大不可饶恕咒之一，瞬杀无痕。",
    description: "三大不可饶恕咒之一，瞬杀无痕。",
    firstPrinciples: [
      { principle: "一句咒语直接夺命", verdict: "violated", note: "无因果机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-polyjuice",
    name: "复方汤剂",
    aliases: [],
    workId: "harry-potter",
    domain: "alchemy",
    summary: "饮下含目标毛发则可化身其貌。",
    description: "饮下含目标毛发则可化身其貌。",
    firstPrinciples: [
      { principle: "药剂改写外貌与身份", verdict: "violated", note: "生物形态不可如此切换" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-marauder",
    name: "活点地图",
    aliases: [],
    workId: "harry-potter",
    domain: "lore",
    summary: "显示霍格沃茨所有人实时位置的魔图。",
    description: "显示霍格沃茨所有人实时位置的魔图。",
    firstPrinciples: [
      { principle: "实时定位全体人员", verdict: "breakthrough", note: "需 ubiquitous 传感" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-pensieve",
    name: "冥想盆",
    aliases: [],
    workId: "harry-potter",
    domain: "lore",
    summary: "抽取并回放记忆以供检视的石盆。",
    description: "抽取并回放记忆以供检视的石盆。",
    firstPrinciples: [
      { principle: "将记忆外存回放", verdict: "breakthrough", note: "脑机接口弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-portkey",
    name: "门钥匙",
    aliases: [],
    workId: "harry-potter",
    domain: "realm",
    summary: "触碰即把人传送至预设地点的器物。",
    description: "触碰即把人传送至预设地点的器物。",
    firstPrinciples: [
      { principle: "器物触发空间传送", verdict: "violated", note: "无瞬移机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-broom",
    name: "飞天扫帚",
    aliases: [],
    workId: "harry-potter",
    domain: "realm",
    summary: "巫师骑乘飞行、用于魁地奇的交通工具。",
    description: "巫师骑乘飞行、用于魁地奇的交通工具。",
    firstPrinciples: [
      { principle: "人体乘扫帚稳定飞行", verdict: "violated", note: "无升力与平衡" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-transfig",
    name: "变形术",
    aliases: [],
    workId: "harry-potter",
    domain: "magic",
    summary: "将一物暂时变为另一物的高阶咒法。",
    description: "将一物暂时变为另一物的高阶咒法。",
    firstPrinciples: [
      { principle: "物体类别被咒法改写", verdict: "violated", note: "物质不可如此变" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-apparate",
    name: "幻影移形",
    aliases: [],
    workId: "harry-potter",
    domain: "realm",
    summary: "巫师凭意志在眨眼间空间跳跃。",
    description: "巫师凭意志在眨眼间空间跳跃。",
    firstPrinciples: [
      { principle: "自身瞬间位移", verdict: "violated", note: "无瞬移" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hp-muggle",
    name: "麻瓜科技对照",
    aliases: [],
    workId: "harry-potter",
    domain: "artifact",
    summary: "以麻瓜电器对照魔法造物，凸显设定边界。",
    description: "以麻瓜电器对照魔法造物，凸显设定边界。",
    firstPrinciples: [
      { principle: "对照现实概念标定魔法", verdict: "achieved", note: "作为现实锚点" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "got-direwolf",
    name: "冰原狼",
    aliases: [],
    workId: "got",
    domain: "beast",
    summary: "史塔克家养、体大聪慧的北方巨狼。",
    description: "史塔克家养、体大聪慧的北方巨狼。",
    firstPrinciples: [
      { principle: "超常体型的犬科伴兽", verdict: "breakthrough", note: "体型受代谢限制" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "got-whitewalker",
    name: "异鬼",
    aliases: [],
    workId: "got",
    domain: "lore",
    summary: "极北以寒冰与亡灵军团威胁人间的存在。",
    description: "极北以寒冰与亡灵军团威胁人间的存在。",
    firstPrinciples: [
      { principle: "亡灵可被唤醒并操控", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "got-greenseer",
    name: "绿先知",
    aliases: [],
    workId: "got",
    domain: "lore",
    summary: "易形者与三眼乌鸦连通鱼梁木网络视通古今。",
    description: "易形者与三眼乌鸦连通鱼梁木网络视通古今。",
    firstPrinciples: [
      { principle: "借树网远程窥视与预知", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "got-valyrian",
    name: "瓦雷利亚钢",
    aliases: [],
    workId: "got",
    domain: "artifact",
    summary: "轻韧不死、可杀异鬼的失传锻造钢。",
    description: "轻韧不死、可杀异鬼的失传锻造钢。",
    firstPrinciples: [
      { principle: "兼具性能与魔法抗性的合金", verdict: "breakthrough", note: "材料可近似不可复现" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "got-wildfire",
    name: "野火",
    aliases: [],
    workId: "got",
    domain: "alchemy",
    summary: "遇空气自燃、无法扑灭的绿色烈性燃烧剂。",
    description: "遇空气自燃、无法扑灭的绿色烈性燃烧剂。",
    firstPrinciples: [
      { principle: "自发剧烈放热的配方", verdict: "breakthrough", note: "现实有类似高能物" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "got-sparrow",
    name: "红袍祭司复活",
    aliases: [],
    workId: "got",
    domain: "lore",
    summary: "光之王祭司以殉身换取死者复生。",
    description: "光之王祭司以殉身换取死者复生。",
    firstPrinciples: [
      { principle: "死亡可被神力逆转", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "got-warging",
    name: "易形者",
    aliases: [],
    workId: "got",
    domain: "beast",
    summary: "狼灵等以意识驾驭动物躯壳。",
    description: "狼灵等以意识驾驭动物躯壳。",
    firstPrinciples: [
      { principle: "意识远程占据兽身", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "got-faceless",
    name: "无面者",
    aliases: [],
    workId: "got",
    domain: "lore",
    summary: "黑白之院刺客，借面具互换身份与死亡。",
    description: "黑白之院刺客，借面具互换身份与死亡。",
    firstPrinciples: [
      { principle: "以仪式剥夺并赋予死亡", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "got-ironbank",
    name: "铁金库",
    aliases: [],
    workId: "got",
    domain: "realm",
    summary: "布拉佛斯掌控各国债务的跨国银行。",
    description: "布拉佛斯掌控各国债务的跨国银行。",
    firstPrinciples: [
      { principle: "跨国信贷影响政局", verdict: "achieved", note: "现实金融成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "got-dragonglass",
    name: "龙晶黑曜石",
    aliases: [],
    workId: "got",
    domain: "artifact",
    summary: "唯一能杀死异鬼的矿石。",
    description: "唯一能杀死异鬼的矿石。",
    firstPrinciples: [
      { principle: "特定矿物克制亡灵", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-spellslot",
    name: "法术位",
    aliases: [],
    workId: "dnd",
    domain: "magic",
    summary: "施法者按日恢复、分级量化的施法额度。",
    description: "施法者按日恢复、分级量化的施法额度。",
    firstPrinciples: [
      { principle: "法术以配额量化", verdict: "violated", note: "仅为规则抽象" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-plane",
    name: "位面体系",
    aliases: [],
    workId: "dnd",
    domain: "realm",
    summary: "多层位面（物质/异界/星界等）构成宇宙。",
    description: "多层位面（物质/异界/星界等）构成宇宙。",
    firstPrinciples: [
      { principle: "宇宙分层且可穿梭", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-deity",
    name: "神祇干预",
    aliases: [],
    workId: "dnd",
    domain: "lore",
    summary: "神明可直接赐法或降临影响凡间。",
    description: "神明可直接赐法或降临影响凡间。",
    firstPrinciples: [
      { principle: "神祇直接改写战局", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-arcane",
    name: "奥术与神术",
    aliases: [],
    workId: "dnd",
    domain: "magic",
    summary: "奥术靠研习、神术靠信仰的两类施法。",
    description: "奥术靠研习、神术靠信仰的两类施法。",
    firstPrinciples: [
      { principle: "超自然力分学术与信仰两源", verdict: "violated", note: "仅为规则" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-dwarfmith",
    name: "矮人锻造",
    aliases: [],
    workId: "dnd",
    domain: "artifact",
    summary: "矮人以秘法锻造的符文武器与甲胄。",
    description: "矮人以秘法锻造的符文武器与甲胄。",
    firstPrinciples: [
      { principle: "符文赋予兵器增益", verdict: "breakthrough", note: "现代冶金可近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-elf",
    name: "精灵长生",
    aliases: [],
    workId: "dnd",
    domain: "beast",
    summary: "精灵族群缓慢衰老、寿命远超人类。",
    description: "精灵族群缓慢衰老、寿命远超人类。",
    firstPrinciples: [
      { principle: "种族级长寿", verdict: "breakthrough", note: "生物衰老可延缓" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-orc",
    name: "兽人嗜血",
    aliases: [],
    workId: "dnd",
    domain: "beast",
    summary: "兽人好战、以萨满沟通先祖之灵。",
    description: "兽人好战、以萨满沟通先祖之灵。",
    firstPrinciples: [
      { principle: "族群好战且通灵", verdict: "achieved", note: "仅为文化设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-demon",
    name: "恶魔与魔鬼",
    aliases: [],
    workId: "dnd",
    domain: "lore",
    summary: "九狱魔鬼与无底深渊恶魔争夺灵魂。",
    description: "九狱魔鬼与无底深渊恶魔争夺灵魂。",
    firstPrinciples: [
      { principle: "异界存在交易灵魂", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-portal",
    name: "传送门",
    aliases: [],
    workId: "dnd",
    domain: "realm",
    summary: "连接远距地点的固定空间裂隙。",
    description: "连接远距地点的固定空间裂隙。",
    firstPrinciples: [
      { principle: "稳定空间跳跃", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dnd-dragon2",
    name: "巨龙与宝藏",
    aliases: [],
    workId: "dnd",
    domain: "beast",
    summary: "喷火巨龙守护财宝、与冒险者对峙。",
    description: "喷火巨龙守护财宝、与冒险者对峙。",
    firstPrinciples: [
      { principle: "楼宇级喷火巨龙", verdict: "violated", note: "尺度与喷火不可行" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-arcane",
    name: "奥术魔法",
    aliases: [],
    workId: "warcraft",
    domain: "magic",
    summary: "以无限奥术能量驱动法术，过度则扭曲。",
    description: "以无限奥术能量驱动法术，过度则扭曲。",
    firstPrinciples: [
      { principle: "近乎无限的能量源", verdict: "violated", note: "能量守恒" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-scourge",
    name: "亡灵天灾",
    aliases: [],
    workId: "warcraft",
    domain: "lore",
    summary: "巫妖王以瘟疫将死者化为服从的亡灵。",
    description: "巫妖王以瘟疫将死者化为服从的亡灵。",
    firstPrinciples: [
      { principle: "瘟疫批量转化亡灵", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-berserk",
    name: "兽人嗜血",
    aliases: [],
    workId: "warcraft",
    domain: "beast",
    summary: "兽人靠嗜血术进入狂暴战斗状态。",
    description: "兽人靠嗜血术进入狂暴战斗状态。",
    firstPrinciples: [
      { principle: "药剂/咒法诱发狂暴", verdict: "achieved", note: "现实有兴奋剂近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "wc-druid",
    name: "德鲁伊变形",
    aliases: [],
    workId: "warcraft",
    domain: "beast",
    summary: "德鲁伊沟通自然、变身为兽与枭兽。",
    description: "德鲁伊沟通自然、变身为兽与枭兽。",
    firstPrinciples: [
      { principle: "人类变身为动物", verdict: "violated", note: "形态不可切换" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-light",
    name: "圣光",
    aliases: [],
    workId: "warcraft",
    domain: "lore",
    summary: "以信念汲取圣光治愈与惩戒不洁。",
    description: "以信念汲取圣光治愈与惩戒不洁。",
    firstPrinciples: [
      { principle: "信念转化为治愈力", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-titan",
    name: "泰坦造物",
    aliases: [],
    workId: "warcraft",
    domain: "artifact",
    summary: "上古泰坦以秩序塑形星魂与守护者。",
    description: "上古泰坦以秩序塑形星魂与守护者。",
    firstPrinciples: [
      { principle: "造物神塑造行星", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-elemental",
    name: "元素之灵",
    aliases: [],
    workId: "warcraft",
    domain: "realm",
    summary: "火水风土元素可被召唤与奴役。",
    description: "火水风土元素可被召唤与奴役。",
    firstPrinciples: [
      { principle: "具意志的元素可被役使", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-dh",
    name: "恶魔猎手",
    aliases: [],
    workId: "warcraft",
    domain: "lore",
    summary: "牺牲双眼换取感知恶魔、以邪能作战。",
    description: "牺牲双眼换取感知恶魔、以邪能作战。",
    firstPrinciples: [
      { principle: "以感官代价获猎魔力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-portal2",
    name: "黑暗之门",
    aliases: [],
    workId: "warcraft",
    domain: "realm",
    summary: "连接艾泽拉斯与德拉诺的巨型传送门。",
    description: "连接艾泽拉斯与德拉诺的巨型传送门。",
    firstPrinciples: [
      { principle: "跨世界固定传送", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wc-holy",
    name: "霜狼与狼骑",
    aliases: [],
    workId: "warcraft",
    domain: "beast",
    summary: "兽人部族驯养巨狼作为坐骑与战友。",
    description: "兽人部族驯养巨狼作为坐骑与战友。",
    firstPrinciples: [
      { principle: "巨狼作为坐骑", verdict: "breakthrough", note: "体型受限" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "tes-dragonborn",
    name: "龙裔之声",
    aliases: [],
    workId: "elder-scrolls",
    domain: "magic",
    summary: "以龙语汲取龙魂、习得喉音魔法。",
    description: "以龙语汲取龙魂、习得喉音魔法。",
    firstPrinciples: [
      { principle: "言语即力的龙语", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "tes-daedra",
    name: "迪德拉魔神",
    aliases: [],
    workId: "elder-scrolls",
    domain: "lore",
    summary: "来自湮灭位面的魔神，以契约赐力索魂。",
    description: "来自湮灭位面的魔神，以契约赐力索魂。",
    firstPrinciples: [
      { principle: "异界魔神交易灵魂", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "tes-akatosh",
    name: "阿卡托什与龙破",
    aliases: [],
    workId: "elder-scrolls",
    domain: "realm",
    summary: "时间之龙，龙破会撕裂线性时间。",
    description: "时间之龙，龙破会撕裂线性时间。",
    firstPrinciples: [
      { principle: "时间可被折叠断裂", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "tes-soulgem",
    name: "灵魂石",
    aliases: [],
    workId: "elder-scrolls",
    domain: "lore",
    summary: "捕获灵魂充能兵器与附魔的容器。",
    description: "捕获灵魂充能兵器与附魔的容器。",
    firstPrinciples: [
      { principle: "灵魂被封入石驱动造物", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "tes-enchant",
    name: "附魔工艺",
    aliases: [],
    workId: "elder-scrolls",
    domain: "artifact",
    summary: "将法术固化入武器与护甲的技艺。",
    description: "将法术固化入武器与护甲的技艺。",
    firstPrinciples: [
      { principle: "法术持久注入器物", verdict: "breakthrough", note: "智能装备弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "tes-alchemy",
    name: "炼金与毒药",
    aliases: [],
    workId: "elder-scrolls",
    domain: "alchemy",
    summary: "以素材组合配制增益药剂与毒。",
    description: "以素材组合配制增益药剂与毒。",
    firstPrinciples: [
      { principle: "配方即时生效", verdict: "achieved", note: "制药现实成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tes-guild",
    name: "盗贼与暗兄弟会",
    aliases: [],
    workId: "elder-scrolls",
    domain: "realm",
    summary: "两大对立秘密结社操控地下秩序。",
    description: "两大对立秘密结社操控地下秩序。",
    firstPrinciples: [
      { principle: "秘密结社影响政局", verdict: "achieved", note: "现实有组织犯罪" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tes-dwemer",
    name: "矮人机械",
    aliases: [],
    workId: "elder-scrolls",
    domain: "artifact",
    summary: "失踪的矮人以蒸汽与灵魂驱动自动机。",
    description: "失踪的矮人以蒸汽与灵魂驱动自动机。",
    firstPrinciples: [
      { principle: "自动机械文明", verdict: "achieved", note: "机器人现实近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tes-sheogorath",
    name: "疯神与魔邑",
    aliases: [],
    workId: "elder-scrolls",
    domain: "realm",
    summary: "湮灭领域魔邑，规则随心意扭曲。",
    description: "湮灭领域魔邑，规则随心意扭曲。",
    firstPrinciples: [
      { principle: "局部现实被意志改写", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "tes-vampire",
    name: "吸血鬼与狼人",
    aliases: [],
    workId: "elder-scrolls",
    domain: "beast",
    summary: "经诅咒转化的不死猎食者族群。",
    description: "经诅咒转化的不死猎食者族群。",
    firstPrinciples: [
      { principle: "诅咒转化不死", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ds-bonfire",
    name: "篝火与余火",
    aliases: [],
    workId: "dark-souls",
    domain: "lore",
    summary: "篝火是存档与升级的锚点，余火维系人性。",
    description: "篝火是存档与升级的锚点，余火维系人性。",
    firstPrinciples: [
      { principle: "局部锚点恢复状态", verdict: "violated", note: "仅为游戏机制叙事化" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ds-humanity",
    name: "人性与人形",
    aliases: [],
    workId: "dark-souls",
    domain: "lore",
    summary: "人性流失则变为游魂，关乎存在状态。",
    description: "人性流失则变为游魂，关乎存在状态。",
    firstPrinciples: [
      { principle: "灵魂量决定存在形态", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ds-curse",
    name: "不死诅咒",
    aliases: [],
    workId: "dark-souls",
    domain: "beast",
    summary: "被烙印者死而复生，背负不死的诅咒。",
    description: "被烙印者死而复生，背负不死的诅咒。",
    firstPrinciples: [
      { principle: "死亡可被重置", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ds-gwyn",
    name: "薪王与初火",
    aliases: [],
    workId: "dark-souls",
    domain: "lore",
    summary: "薪王传火延续时代，火熄则时代终结。",
    description: "薪王传火延续时代，火熄则时代终结。",
    firstPrinciples: [
      { principle: "以生命续燃世界之火", verdict: "violated", note: "仅为隐喻设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ds-abyss",
    name: "深渊腐蚀",
    aliases: [],
    workId: "dark-souls",
    domain: "lore",
    summary: "曼努斯引发的黑暗，吞噬心智与形体。",
    description: "曼努斯引发的黑暗，吞噬心智与形体。",
    firstPrinciples: [
      { principle: "黑暗侵蚀存在", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ds-sunlight",
    name: "阳光魔法",
    aliases: [],
    workId: "dark-souls",
    domain: "magic",
    summary: "以阳光凝聚箭矢与治愈，源自葛温德林。",
    description: "以阳光凝聚箭矢与治愈，源自葛温德林。",
    firstPrinciples: [
      { principle: "光被塑为武器", verdict: "achieved", note: "激光武器现实近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ds-covenant",
    name: "誓约系统",
    aliases: [],
    workId: "dark-souls",
    domain: "realm",
    summary: "加入誓约换取协作、敌意与奖励。",
    description: "加入誓约换取协作、敌意与奖励。",
    firstPrinciples: [
      { principle: "跨玩家契约协作", verdict: "achieved", note: "联机机制叙事化" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ds-transpose",
    name: "魂的转生锻造",
    aliases: [],
    workId: "dark-souls",
    domain: "artifact",
    summary: "以 boss 魂在铁匠处重铸为武器。",
    description: "以 boss 魂在铁匠处重铸为武器。",
    firstPrinciples: [
      { principle: "灵魂重铸造物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ds-estus",
    name: "原素之瓶",
    aliases: [],
    workId: "dark-souls",
    domain: "alchemy",
    summary: "饮用恢复生命的便携药水瓶。",
    description: "饮用恢复生命的便携药水瓶。",
    firstPrinciples: [
      { principle: "便携即时治疗", verdict: "achieved", note: "急救包现实成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ds-dragon3",
    name: "远古龙",
    aliases: [],
    workId: "dark-souls",
    domain: "beast",
    summary: "不需王魂、与自然同寿的石鳞古龙。",
    description: "不需王魂、与自然同寿的石鳞古龙。",
    firstPrinciples: [
      { principle: "龙象征永恒不朽", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-psyker",
    name: "灵能者",
    aliases: [],
    workId: "warhammer",
    domain: "magic",
    summary: "以灵魂操纵亚空间能量，失控则召恶魔。",
    description: "以灵魂操纵亚空间能量，失控则召恶魔。",
    firstPrinciples: [
      { principle: "意识直接驭使能量", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-warp",
    name: "亚空间",
    aliases: [],
    workId: "warhammer",
    domain: "realm",
    summary: "由情感构成的汪洋，航行与灵能的根基。",
    description: "由情感构成的汪洋，航行与灵能的根基。",
    firstPrinciples: [
      { principle: "非物理维度承载意识", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-chaos",
    name: "混沌四神",
    aliases: [],
    workId: "warhammer",
    domain: "lore",
    summary: "由亿万灵魂情绪凝聚的恐惧、诡计、衰败、放纵之神。",
    description: "由亿万灵魂情绪凝聚的恐惧、诡计、衰败、放纵之神。",
    firstPrinciples: [
      { principle: "神祇由情绪诞生", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-omnissiah",
    name: "机械神教",
    aliases: [],
    workId: "warhammer",
    domain: "artifact",
    summary: "崇拜机魂、视科技为宗教的火星教会。",
    description: "崇拜机魂、视科技为宗教的火星教会。",
    firstPrinciples: [
      { principle: "以信仰统合工程", verdict: "achieved", note: "作为文化设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "wh-astartes",
    name: "星际战士",
    aliases: [],
    workId: "warhammer",
    domain: "beast",
    summary: "基因改造、远超常人的超级士兵。",
    description: "基因改造、远超常人的超级士兵。",
    firstPrinciples: [
      { principle: "基因大幅强化人体", verdict: "breakthrough", note: "生物工程可部分实现" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-emperor",
    name: "帝皇与黄金王座",
    aliases: [],
    workId: "warhammer",
    domain: "lore",
    summary: "以灵能维持星语灯塔、镇压亚空间的活神。",
    description: "以灵能维持星语灯塔、镇压亚空间的活神。",
    firstPrinciples: [
      { principle: "一人维持星系级灵能信标", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-daemon",
    name: "恶魔实体",
    aliases: [],
    workId: "warhammer",
    domain: "lore",
    summary: "需肉身或裂隙方能现世的亚空间造物。",
    description: "需肉身或裂隙方能现世的亚空间造物。",
    firstPrinciples: [
      { principle: "情感凝聚的实体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-orks",
    name: "绿皮与瓦格大现",
    aliases: [],
    workId: "warhammer",
    domain: "beast",
    summary: "信仰令武器更利、聚集则更强的兽人。",
    description: "信仰令武器更利、聚集则更强的兽人。",
    firstPrinciples: [
      { principle: "群体信念增强实物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-eldar2",
    name: "灵族方舟",
    aliases: [],
    workId: "warhammer",
    domain: "realm",
    summary: "文明崩灭后漂流星海的巨型方舟世界。",
    description: "文明崩灭后漂流星海的巨型方舟世界。",
    firstPrinciples: [
      { principle: "巨型可居造物漂流", verdict: "breakthrough", note: "巨型结构可设想" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "wh-necron",
    name: "死灵金属躯壳",
    aliases: [],
    workId: "warhammer",
    domain: "artifact",
    summary: "灵魂封入金属躯体换取永生，失却情感。",
    description: "灵魂封入金属躯体换取永生，失却情感。",
    firstPrinciples: [
      { principle: "灵魂迁移至机械体", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-potion",
    name: "猎魔人药剂",
    aliases: [],
    workId: "witcher",
    domain: "alchemy",
    summary: "变异体质服毒强化感官与战力。",
    description: "变异体质服毒强化感官与战力。",
    firstPrinciples: [
      { principle: "剧毒萃取增益战力", verdict: "achieved", note: "兴奋剂现实近似但有风险" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-sign",
    name: "法印",
    aliases: [],
    workId: "witcher",
    domain: "magic",
    summary: "以手势与意志释放的简易法术。",
    description: "以手势与意志释放的简易法术。",
    firstPrinciples: [
      { principle: "手势即效的术式", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-mutation",
    name: "青草试炼突变",
    aliases: [],
    workId: "witcher",
    domain: "beast",
    summary: "以剧毒与仪式改造少年成为猎魔人。",
    description: "以剧毒与仪式改造少年成为猎魔人。",
    firstPrinciples: [
      { principle: "受控突变改造人体", verdict: "breakthrough", note: "基因编辑可部分实现" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-silver",
    name: "银剑与钢剑",
    aliases: [],
    workId: "witcher",
    domain: "artifact",
    summary: "钢剑斩兽、银剑屠异界生物的分工。",
    description: "钢剑斩兽、银剑屠异界生物的分工。",
    firstPrinciples: [
      { principle: "材质依敌种分工", verdict: "achieved", note: "冶金现实成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-monster",
    name: "怪物图鉴",
    aliases: [],
    workId: "witcher",
    domain: "beast",
    summary: "吸血妖、狮鹫、地灵等需专法猎杀的异兽。",
    description: "吸血妖、狮鹫、地灵等需专法猎杀的异兽。",
    firstPrinciples: [
      { principle: "多样奇异生物", verdict: "breakthrough", note: "多为传说杂交" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-politics",
    name: "北方王国政争",
    aliases: [],
    workId: "witcher",
    domain: "realm",
    summary: "人类诸国、精灵与帝国间的权谋战争。",
    description: "人类诸国、精灵与帝国间的权谋战争。",
    firstPrinciples: [
      { principle: "多势力地缘博弈", verdict: "achieved", note: "现实政治成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-sorceress",
    name: "女术士议会",
    aliases: [],
    workId: "witcher",
    domain: "magic",
    summary: "以魔法干预政局的女巫精英集团。",
    description: "以魔法干预政局的女巫精英集团。",
    firstPrinciples: [
      { principle: "术士结社影响王权", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-rose",
    name: "蔷薇骑士团",
    aliases: [],
    workId: "witcher",
    domain: "realm",
    summary: "效忠尼弗迦德的精锐军事修会。",
    description: "效忠尼弗迦德的精锐军事修会。",
    firstPrinciples: [
      { principle: "宗教军事组织", verdict: "achieved", note: "史实有骑士团" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-curse2",
    name: "血咒与诅咒",
    aliases: [],
    workId: "witcher",
    domain: "lore",
    summary: "命运与诅咒在世代间缠结。",
    description: "命运与诅咒在世代间缠结。",
    firstPrinciples: [
      { principle: "诅咒跨代生效", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "witcher-leshen",
    name: "林精与野神",
    aliases: [],
    workId: "witcher",
    domain: "lore",
    summary: "森林深处统辖野兽的古老精魂。",
    description: "森林深处统辖野兽的古老精魂。",
    firstPrinciples: [
      { principle: "自然意志的化身", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-wardrobe",
    name: "魔衣橱",
    aliases: [],
    workId: "narnia",
    domain: "realm",
    summary: "普通衣橱背后连通纳尼亚的入口。",
    description: "普通衣橱背后连通纳尼亚的入口。",
    firstPrinciples: [
      { principle: "日常器物通往异界", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-aslan",
    name: "阿斯兰",
    aliases: [],
    workId: "narnia",
    domain: "lore",
    summary: "创世与牺牲的狮王，纳尼亚的基督隐喻。",
    description: "创世与牺牲的狮王，纳尼亚的基督隐喻。",
    firstPrinciples: [
      { principle: "以牺牲换复活", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-witch",
    name: "白女巫冰封",
    aliases: [],
    workId: "narnia",
    domain: "realm",
    summary: "以魔法令纳尼亚永驻寒冬。",
    description: "以魔法令纳尼亚永驻寒冬。",
    firstPrinciples: [
      { principle: "局部气候被意志冻结", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-table",
    name: "石桌",
    aliases: [],
    workId: "narnia",
    domain: "artifact",
    summary: "阿斯兰献祭与复活的祭坛。",
    description: "阿斯兰献祭与复活的祭坛。",
    firstPrinciples: [
      { principle: "祭坛承载献祭契约", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-beaver",
    name: "会说话的兽",
    aliases: [],
    workId: "narnia",
    domain: "beast",
    summary: "拟人兽类与人类共处的国度。",
    description: "拟人兽类与人类共处的国度。",
    firstPrinciples: [
      { principle: "动物具人智与言语", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-star",
    name: "星辰与行星之子",
    aliases: [],
    workId: "narnia",
    domain: "realm",
    summary: "恒星与行星以人形降生走动。",
    description: "恒星与行星以人形降生走动。",
    firstPrinciples: [
      { principle: "天体人格化", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-dwarf",
    name: "纳尼亚矮人",
    aliases: [],
    workId: "narnia",
    domain: "artifact",
    summary: "擅工事的穴居矮人部族。",
    description: "擅工事的穴居矮人部族。",
    firstPrinciples: [
      { principle: "地下工事民族", verdict: "achieved", note: "现实有筑城" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-cair",
    name: "凯尔帕拉维尔",
    aliases: [],
    workId: "narnia",
    domain: "realm",
    summary: "海岸边的王宫，四王座所在。",
    description: "海岸边的王宫，四王座所在。",
    firstPrinciples: [
      { principle: "象征王权的宫殿", verdict: "achieved", note: "仅为建筑" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-talkinghorse",
    name: "人马与农牧神",
    aliases: [],
    workId: "narnia",
    domain: "beast",
    summary: "半人马、羊男等混种生灵。",
    description: "半人马、羊男等混种生灵。",
    firstPrinciples: [
      { principle: "混种神话生物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "narnia-creation",
    name: "纳尼亚创世",
    aliases: [],
    workId: "narnia",
    domain: "realm",
    summary: "阿斯兰歌声从无中唱出大地与生物。",
    description: "阿斯兰歌声从无中唱出大地与生物。",
    firstPrinciples: [
      { principle: "言语创生世界", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dw-disc",
    name: "碟形世界",
    aliases: [],
    workId: "discworld",
    domain: "realm",
    summary: "驮在四象巨龟与巨鲸背上的平面圆盘世界。",
    description: "驮在四象巨龟与巨鲸背上的平面圆盘世界。",
    firstPrinciples: [
      { principle: "世界呈圆盘且被巨龟托举", verdict: "violated", note: "几何与引力不成立" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dw-death",
    name: "死神",
    aliases: [],
    workId: "discworld",
    domain: "lore",
    summary: "不苟言笑、爱猫的骷髅，准时接引亡魂。",
    description: "不苟言笑、爱猫的骷髅，准时接引亡魂。",
    firstPrinciples: [
      { principle: "人格化的死亡职责", verdict: "achieved", note: "作为拟人设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dw-witch",
    name: "女巫与魔舞",
    aliases: [],
    workId: "discworld",
    domain: "magic",
    summary: "以小事与信念行头的乡村女巫传统。",
    description: "以小事与信念行头的乡村女巫传统。",
    firstPrinciples: [
      { principle: "信念与头冠行法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dw-unseen",
    name: "看不见的魔法大学",
    aliases: [],
    workId: "discworld",
    domain: "magic",
    summary: "八戒法师的塔楼，魔法受规则约束。",
    description: "八戒法师的塔楼，魔法受规则约束。",
    firstPrinciples: [
      { principle: "魔法作为可学体系", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dw-watch",
    name: "城市卫队",
    aliases: [],
    workId: "discworld",
    domain: "realm",
    summary: "夜巡各类族的多元城市警卫队。",
    description: "夜巡各类族的多元城市警卫队。",
    firstPrinciples: [
      { principle: "多元族共治安", verdict: "achieved", note: "作为社会设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dw-monk",
    name: "时间僧侣",
    aliases: [],
    workId: "discworld",
    domain: "lore",
    summary: "以修道院稳定时间流速的修士。",
    description: "以修道院稳定时间流速的修士。",
    firstPrinciples: [
      { principle: "机构稳定时间", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dw-luggage",
    name: "会走的行李箱",
    aliases: [],
    workId: "discworld",
    domain: "artifact",
    summary: "长满小脚、追主护主的齿箱。",
    description: "长满小脚、追主护主的齿箱。",
    firstPrinciples: [
      { principle: "自主移动的箱子", verdict: "breakthrough", note: "轮式机器人近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "dw-dragon4",
    name: "盗书龙",
    aliases: [],
    workId: "discworld",
    domain: "beast",
    summary: "以黄金与劫掠为乐、可爆的巨龙。",
    description: "以黄金与劫掠为乐、可爆的巨龙。",
    firstPrinciples: [
      { principle: "巨龙守护财宝", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dw-law",
    name: "叙事法则",
    aliases: [],
    workId: "discworld",
    domain: "lore",
    summary: "故事类型以元规则强行塑形现实。",
    description: "故事类型以元规则强行塑形现实。",
    firstPrinciples: [
      { principle: "故事类型改写现实", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dw-clacks",
    name: "信鸦塔网络",
    aliases: [],
    workId: "discworld",
    domain: "artifact",
    summary: "以塔间光码传递讯息的通讯网。",
    description: "以塔间光码传递讯息的通讯网。",
    firstPrinciples: [
      { principle: "塔网远程通信", verdict: "achieved", note: "类似电报" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-pathway",
    name: "序列途径",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "lore",
    summary: "从序列9至序列1逐级服食魔药晋升。",
    description: "从序列9至序列1逐级服食魔药晋升。",
    firstPrinciples: [
      { principle: "服食配方阶梯成神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-fool",
    name: "源堡与愚者",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "lore",
    summary: "主角依托源堡执掌愚者权柄。",
    description: "主角依托源堡执掌愚者权柄。",
    firstPrinciples: [
      { principle: "以器物承载神职", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-divination",
    name: "占卜与预知",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "lore",
    summary: "以灵摆、梦境与星象窥见隐秘。",
    description: "以灵摆、梦境与星象窥见隐秘。",
    firstPrinciples: [
      { principle: "仪式辅助推演未知", verdict: "breakthrough", note: "现实仅有弱预测" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-sealed",
    name: "封印物",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "artifact",
    summary: "蕴含危险权能、需管制编号的造物。",
    description: "蕴含危险权能、需管制编号的造物。",
    firstPrinciples: [
      { principle: "器物封印失控力量", verdict: "breakthrough", note: "危险物管制现实有" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-church",
    name: "正神教会",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "realm",
    summary: "七大教会以教义与序列制衡异端。",
    description: "七大教会以教义与序列制衡异端。",
    firstPrinciples: [
      { principle: "宗教机构掌超自然秩序", verdict: "achieved", note: "作为社会设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-loss",
    name: "失控与怪物化",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "beast",
    summary: "晋升失败者肉体扭曲为怪物。",
    description: "晋升失败者肉体扭曲为怪物。",
    firstPrinciples: [
      { principle: "肉体扭曲异化", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-demon",
    name: "恶魔与外神",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "lore",
    summary: "星空外神以堕落低语侵蚀凡人理智。",
    description: "星空外神以堕落低语侵蚀凡人理智。",
    firstPrinciples: [
      { principle: "外神污染理智", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-zooling",
    name: "通灵与灵体",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "lore",
    summary: "以仪式召唤、驱使灵体与怨魂。",
    description: "以仪式召唤、驱使灵体与怨魂。",
    firstPrinciples: [
      { principle: "驱使灵体", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-artificer",
    name: "机械与炼金",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "alchemy",
    summary: "蒸汽与炼金并行的低魔工业。",
    description: "蒸汽与炼金并行的低魔工业。",
    firstPrinciples: [
      { principle: "炼金与机械工艺", verdict: "achieved", note: "现实近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lotm-mirror",
    name: "镜中人与替身",
    aliases: [],
    workId: "lord-of-the-mysteries",
    domain: "beast",
    summary: "投影/替身承载行动与代价的秘术。",
    description: "投影/替身承载行动与代价的秘术。",
    firstPrinciples: [
      { principle: "分离意识投影", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "es-truename",
    name: "真名巫术",
    aliases: [],
    workId: "earthsea",
    domain: "magic",
    summary: "知晓万物真名即可掌控其本质。",
    description: "知晓万物真名即可掌控其本质。",
    firstPrinciples: [
      { principle: "真名即控制权", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "es-dragon5",
    name: "地海之龙",
    aliases: [],
    workId: "earthsea",
    domain: "beast",
    summary: "以古老语与人为邻、掌部分真名的龙。",
    description: "以古老语与人为邻、掌部分真名的龙。",
    firstPrinciples: [
      { principle: "龙与人为邻通语", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "es-balance",
    name: "平衡与代价",
    aliases: [],
    workId: "earthsea",
    domain: "lore",
    summary: "施行魔法须以等价偿还世界。",
    description: "施行魔法须以等价偿还世界。",
    firstPrinciples: [
      { principle: "施法需等价偿还", verdict: "achieved", note: "作为伦理设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "es-dead",
    name: "死界与亡魂",
    aliases: [],
    workId: "earthsea",
    domain: "lore",
    summary: "生者误入死界、亡魂难安的边界。",
    description: "生者误入死界、亡魂难安的边界。",
    firstPrinciples: [
      { principle: "生死界可往来", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "es-weaver",
    name: "织工之女",
    aliases: [],
    workId: "earthsea",
    domain: "realm",
    summary: "以织造象征改写命运的匠人。",
    description: "以织造象征改写命运的匠人。",
    firstPrinciples: [
      { principle: "编织象征命运", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "es-rune",
    name: "符文与咒歌",
    aliases: [],
    workId: "earthsea",
    domain: "magic",
    summary: "古语咒歌驱动风与浪的巫术。",
    description: "古语咒歌驱动风与浪的巫术。",
    firstPrinciples: [
      { principle: "吟唱操控自然", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "es-isles",
    name: "内海诸岛",
    aliases: [],
    workId: "earthsea",
    domain: "realm",
    summary: "散落海洋、以巫师维持秩序的人类群岛。",
    description: "散落海洋、以巫师维持秩序的人类群岛。",
    firstPrinciples: [
      { principle: "海洋群岛文明", verdict: "achieved", note: "作为地理设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "es-shadow",
    name: "影与自我",
    aliases: [],
    workId: "earthsea",
    domain: "lore",
    summary: "人失其影则失自我、沦为暗影。",
    description: "人失其影则失自我、沦为暗影。",
    firstPrinciples: [
      { principle: "影承载自我", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "es-school",
    name: "柔克巫师学院",
    aliases: [],
    workId: "earthsea",
    domain: "lore",
    summary: "训练少年巫师、约束真名知识的学院。",
    description: "训练少年巫师、约束真名知识的学院。",
    firstPrinciples: [
      { principle: "学院规训超自然力", verdict: "achieved", note: "作为制度设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "es-wind",
    name: "风与船术",
    aliases: [],
    workId: "earthsea",
    domain: "realm",
    summary: "以风与潮汐远航的帆船文明。",
    description: "以风与潮汐远航的帆船文明。",
    firstPrinciples: [
      { principle: "风帆远航", verdict: "achieved", note: "现实航海成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-crystal",
    name: "水晶",
    aliases: [],
    workId: "final-fantasy",
    domain: "lore",
    summary: "维系世界能量与命运的母晶。",
    description: "维系世界能量与命运的母晶。",
    firstPrinciples: [
      { principle: "以晶体承载世界之力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-summon",
    name: "召唤兽",
    aliases: [],
    workId: "final-fantasy",
    domain: "beast",
    summary: "以契约召唤巨型幻兽助战。",
    description: "以契约召唤巨型幻兽助战。",
    firstPrinciples: [
      { principle: "契约召唤巨兽", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-chocobo",
    name: "陆行鸟",
    aliases: [],
    workId: "final-fantasy",
    domain: "beast",
    summary: "可骑乘、似鸵鸟的温驯大鸟。",
    description: "可骑乘、似鸵鸟的温驯大鸟。",
    firstPrinciples: [
      { principle: "大型鸟供骑乘", verdict: "breakthrough", note: "鸵鸟可驯但载重有限" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-airship",
    name: "飞空艇",
    aliases: [],
    workId: "final-fantasy",
    domain: "realm",
    summary: "以反重力飞行的大型飞船。",
    description: "以反重力飞行的大型飞船。",
    firstPrinciples: [
      { principle: "反重力巨舰巡航", verdict: "violated", note: "无反重力" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-materia",
    name: "魔石",
    aliases: [],
    workId: "final-fantasy",
    domain: "magic",
    summary: "镶嵌即习得技能的结晶。",
    description: "镶嵌即习得技能的结晶。",
    firstPrinciples: [
      { principle: "晶体即技能载体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-job",
    name: "职业系统",
    aliases: [],
    workId: "final-fantasy",
    domain: "realm",
    summary: "以职业切换战斗职能的设定。",
    description: "以职业切换战斗职能的设定。",
    firstPrinciples: [
      { principle: "角色职能可切换", verdict: "achieved", note: "作为系统设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-blade",
    name: "武士与魔剑",
    aliases: [],
    workId: "final-fantasy",
    domain: "artifact",
    summary: "融合魔力的刀剑与剑技。",
    description: "融合魔力的刀剑与剑技。",
    firstPrinciples: [
      { principle: "魔剑结合武技", verdict: "achieved", note: "智能武器弱近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-ether",
    name: "以太与魔导",
    aliases: [],
    workId: "final-fantasy",
    domain: "magic",
    summary: "以太作为可操控的魔法能源。",
    description: "以太作为可操控的魔法能源。",
    firstPrinciples: [
      { principle: "普遍可采的魔法能", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-villain",
    name: "邪神与灾厄",
    aliases: [],
    workId: "final-fantasy",
    domain: "lore",
    summary: "上古邪神周期性降临的灾难母题。",
    description: "上古邪神周期性降临的灾难母题。",
    firstPrinciples: [
      { principle: "古老邪神覆世", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-cid",
    name: "飞空艇工坊",
    aliases: [],
    workId: "final-fantasy",
    domain: "artifact",
    summary: "以工程与发明支撑空中航行的匠人传统。",
    description: "以工程与发明支撑空中航行的匠人传统。",
    firstPrinciples: [
      { principle: "工程支撑飞行", verdict: "achieved", note: "航空工程现实成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "da-circle",
    name: "法环与法师塔",
    aliases: [],
    workId: "dragon-age",
    domain: "lore",
    summary: "以法环抑制、监管法师的组织。",
    description: "以法环抑制、监管法师的组织。",
    firstPrinciples: [
      { principle: "制度约束超自然力", verdict: "achieved", note: "作为制度设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "da-magic2",
    name: "法力源泉",
    aliases: [],
    workId: "dragon-age",
    domain: "magic",
    summary: "魔法源自虚空，过度则招恶魔附身。",
    description: "魔法源自虚空，过度则招恶魔附身。",
    firstPrinciples: [
      { principle: "能量源自异界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "da-greywarden",
    name: "灰袍卫士",
    aliases: [],
    workId: "dragon-age",
    domain: "realm",
    summary: "饮龙血以抗腐化、猎杀暗裔的兄弟会。",
    description: "饮龙血以抗腐化、猎杀暗裔的兄弟会。",
    firstPrinciples: [
      { principle: "饮血获抗性与宿命", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "da-dwarf2",
    name: "矮人深城",
    aliases: [],
    workId: "dragon-age",
    domain: "realm",
    summary: "被 darkspawn 逼退地表的地下王国。",
    description: "被 darkspawn 逼退地表的地下王国。",
    firstPrinciples: [
      { principle: "地下城邦文明", verdict: "achieved", note: "作为地理设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "da-elf2",
    name: "精灵流散",
    aliases: [],
    workId: "dragon-age",
    domain: "beast",
    summary: "失国后被人类城市边缘化的长寿命族。",
    description: "失国后被人类城市边缘化的长寿命族。",
    firstPrinciples: [
      { principle: "长寿族群流散", verdict: "achieved", note: "作为社会设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "da-darkspawn",
    name: "暗裔与枯潮",
    aliases: [],
    workId: "dragon-age",
    domain: "beast",
    summary: "被腐化的造物周期性涌出掠食文明。",
    description: "被腐化的造物周期性涌出掠食文明。",
    firstPrinciples: [
      { principle: "腐化造物周期侵袭", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "da-templar",
    name: "圣殿武士",
    aliases: [],
    workId: "dragon-age",
    domain: "realm",
    summary: "以 lyrium 与武技监管、镇压法师。",
    description: "以 lyrium 与武技监管、镇压法师。",
    firstPrinciples: [
      { principle: "以武力监管超自然", verdict: "achieved", note: "作为制度设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "da-lyrium",
    name: "Lyrium 矿",
    aliases: [],
    workId: "dragon-age",
    domain: "alchemy",
    summary: "驱动魔法与机械的蓝晶矿脉。",
    description: "驱动魔法与机械的蓝晶矿脉。",
    firstPrinciples: [
      { principle: "矿物供能超自然", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "da-dragon6",
    name: "远古巨龙",
    aliases: [],
    workId: "dragon-age",
    domain: "beast",
    summary: "被腐化后引导枯潮的龙形存在。",
    description: "被腐化后引导枯潮的龙形存在。",
    firstPrinciples: [
      { principle: "龙引导灾祸", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "da-chantry",
    name: "教会与圣咏",
    aliases: [],
    workId: "dragon-age",
    domain: "lore",
    summary: "统一信仰、编纂神学的国教体系。",
    description: "统一信仰、编纂神学的国教体系。",
    firstPrinciples: [
      { principle: "宗教统一信仰", verdict: "achieved", note: "作为社会设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-olympian",
    name: "奥林匹斯主神",
    aliases: [],
    workId: "greek-myth",
    domain: "magic",
    summary: "人格化的天海冥等神祇居于奥林匹斯。",
    description: "人格化的天海冥等神祇居于奥林匹斯。",
    firstPrinciples: [
      { principle: "神直接干预人间", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gm-delphi",
    name: "德尔斐神谕",
    aliases: [],
    workId: "greek-myth",
    domain: "lore",
    summary: "阿波罗神谕经女祭司之口预告命运。",
    description: "阿波罗神谕经女祭司之口预告命运。",
    firstPrinciples: [
      { principle: "征兆与祭仪预言", verdict: "breakthrough", note: "现实仅有弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "gm-hero",
    name: "半神英雄",
    aliases: [],
    workId: "greek-myth",
    domain: "beast",
    summary: "神与人的子嗣以伟绩成就英雄。",
    description: "神与人的子嗣以伟绩成就英雄。",
    firstPrinciples: [
      { principle: "神人混血的超凡者", verdict: "breakthrough", note: "基因工程弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "gm-ferry",
    name: "冥河渡资",
    aliases: [],
    workId: "greek-myth",
    domain: "lore",
    summary: "亡魂以银币付卡戎渡冥河。",
    description: "亡魂以银币付卡戎渡冥河。",
    firstPrinciples: [
      { principle: "亡灵需通货渡河", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gm-metamorph",
    name: "神之变形",
    aliases: [],
    workId: "greek-myth",
    domain: "beast",
    summary: "神以变形惩罚凡人或游戏人间。",
    description: "神以变形惩罚凡人或游戏人间。",
    firstPrinciples: [
      { principle: "神自由变形", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gm-fleece",
    name: "金羊毛",
    aliases: [],
    workId: "greek-myth",
    domain: "artifact",
    summary: "可愈伤、象征王权的金色羊毛。",
    description: "可愈伤、象征王权的金色羊毛。",
    firstPrinciples: [
      { principle: "神物承载王权", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gm-typhon",
    name: "提丰与妖兽",
    aliases: [],
    workId: "greek-myth",
    domain: "beast",
    summary: "美杜莎、奇美拉等怪物的神话原型。",
    description: "美杜莎、奇美拉等怪物的神话原型。",
    firstPrinciples: [
      { principle: "复合怪兽原型", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gm-moirai",
    name: "命运三女神",
    aliases: [],
    workId: "greek-myth",
    domain: "lore",
    summary: "编织、量度、剪断生命之线的命运神。",
    description: "编织、量度、剪断生命之线的命运神。",
    firstPrinciples: [
      { principle: "命运被具象编织", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gm-labors",
    name: "十二项苦役",
    aliases: [],
    workId: "greek-myth",
    domain: "realm",
    summary: "赫拉克勒斯式的试炼英雄母题。",
    description: "赫拉克勒斯式的试炼英雄母题。",
    firstPrinciples: [
      { principle: "以试炼证英雄", verdict: "achieved", note: "作为叙事母题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-pantheon",
    name: "神族谱系",
    aliases: [],
    workId: "greek-myth",
    domain: "lore",
    summary: "以血缘与职权划分的神话体系。",
    description: "以血缘与职权划分的神话体系。",
    firstPrinciples: [
      { principle: "制度化神族关系", verdict: "achieved", note: "作为神话结构" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "nm-yggdrasil",
    name: "世界树尤克特拉希尔",
    aliases: [],
    workId: "norse-myth",
    domain: "realm",
    summary: "贯通九界、支撑宇宙的巨树。",
    description: "贯通九界、支撑宇宙的巨树。",
    firstPrinciples: [
      { principle: "单树连通多维世界", verdict: "violated", note: "拓扑不成立" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-aesir",
    name: "阿萨神族",
    aliases: [],
    workId: "norse-myth",
    domain: "magic",
    summary: "掌战争与秩序的阿萨与华纳神族。",
    description: "掌战争与秩序的阿萨与华纳神族。",
    firstPrinciples: [
      { principle: "神族掌世间秩序", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-valkyrie",
    name: "瓦尔基里",
    aliases: [],
    workId: "norse-myth",
    domain: "lore",
    summary: "择选阵亡英灵赴瓦尔哈拉的少女。",
    description: "择选阵亡英灵赴瓦尔哈拉的少女。",
    firstPrinciples: [
      { principle: "亡灵被遴选入英灵殿", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-ragnarok",
    name: "诸神黄昏",
    aliases: [],
    workId: "norse-myth",
    domain: "realm",
    summary: "神族与巨人同归于尽的预定终局。",
    description: "神族与巨人同归于尽的预定终局。",
    firstPrinciples: [
      { principle: "终局被预先注定", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-mjolnir",
    name: "雷神之锤",
    aliases: [],
    workId: "norse-myth",
    domain: "artifact",
    summary: "仅配者能举、掷出可召回的雷锤。",
    description: "仅配者能举、掷出可召回的雷锤。",
    firstPrinciples: [
      { principle: "神器认主且回旋", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-jotunn",
    name: "冰霜巨人",
    aliases: [],
    workId: "norse-myth",
    domain: "beast",
    summary: "作为神族宿敌的冰霜与山巨人。",
    description: "作为神族宿敌的冰霜与山巨人。",
    firstPrinciples: [
      { principle: "巨型类人宿敌", verdict: "breakthrough", note: "体型受限" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-raven",
    name: "奥丁的乌鸦与狼",
    aliases: [],
    workId: "norse-myth",
    domain: "beast",
    summary: "双鸦双狼随神窥视九界。",
    description: "双鸦双狼随神窥视九界。",
    firstPrinciples: [
      { principle: "动物作远程耳目", verdict: "breakthrough", note: "现实有侦察动物" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-hel",
    name: "死界赫尔",
    aliases: [],
    workId: "norse-myth",
    domain: "lore",
    summary: "亡魂按功过分赴不同死界。",
    description: "亡魂按功过分赴不同死界。",
    firstPrinciples: [
      { principle: "死后去向分判", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-rune",
    name: "符文魔法",
    aliases: [],
    workId: "norse-myth",
    domain: "magic",
    summary: "刻符即得力的魔法文字体系。",
    description: "刻符即得力的魔法文字体系。",
    firstPrinciples: [
      { principle: "文字承载神力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nm-longship",
    name: "维京长船",
    aliases: [],
    workId: "norse-myth",
    domain: "realm",
    summary: "以浅吃水长船远航探险的北欧文明。",
    description: "以浅吃水长船远航探险的北欧文明。",
    firstPrinciples: [
      { principle: "浅舟远航探险", verdict: "achieved", note: "现实航海成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "em-solarbarque",
    name: "太阳船",
    aliases: [],
    workId: "egypt-myth",
    domain: "realm",
    summary: "拉乘夜船穿冥府、清晨复升的循环。",
    description: "拉乘夜船穿冥府、清晨复升的循环。",
    firstPrinciples: [
      { principle: "太阳每日重生循环", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "em-bookdead",
    name: "亡灵书",
    aliases: [],
    workId: "egypt-myth",
    domain: "lore",
    summary: "指引亡魂过关的咒文与图绘集。",
    description: "指引亡魂过关的咒文与图绘集。",
    firstPrinciples: [
      { principle: "文本导引死后旅程", verdict: "achieved", note: "作为丧葬文献" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "em-heart",
    name: "心脏称量",
    aliases: [],
    workId: "egypt-myth",
    domain: "lore",
    summary: "亡魂以心对羽称量定去留。",
    description: "亡魂以心对羽称量定去留。",
    firstPrinciples: [
      { principle: "心羽称量判善恶", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "em-mummy",
    name: "木乃伊术",
    aliases: [],
    workId: "egypt-myth",
    domain: "alchemy",
    summary: "防腐保存遗体以求来生复生。",
    description: "防腐保存遗体以求来生复生。",
    firstPrinciples: [
      { principle: "遗体长久保存", verdict: "achieved", note: "现实有木乃伊术" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "em-pyramid",
    name: "金字塔",
    aliases: [],
    workId: "egypt-myth",
    domain: "artifact",
    summary: "法老陵寝与通天的几何巨构。",
    description: "法老陵寝与通天的几何巨构。",
    firstPrinciples: [
      { principle: "巨型精确的石构", verdict: "achieved", note: "现实有金字塔" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "em-osiris",
    name: "奥西里斯死而复生",
    aliases: [],
    workId: "egypt-myth",
    domain: "lore",
    summary: "被碎尸后由伊西斯复生为冥王。",
    description: "被碎尸后由伊西斯复生为冥王。",
    firstPrinciples: [
      { principle: "尸体拼合复生", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "em-anubis",
    name: "阿努比斯",
    aliases: [],
    workId: "egypt-myth",
    domain: "lore",
    summary: "豺首的亡灵导引与防腐之神。",
    description: "豺首的亡灵导引与防腐之神。",
    firstPrinciples: [
      { principle: "神祇掌丧葬仪式", verdict: "achieved", note: "作为宗教角色" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "em-wedjat",
    name: "荷鲁斯之眼",
    aliases: [],
    workId: "egypt-myth",
    domain: "artifact",
    summary: "破碎重圆的护佑与治愈之眼。",
    description: "破碎重圆的护佑与治愈之眼。",
    firstPrinciples: [
      { principle: "象征治愈的圣物", verdict: "achieved", note: "作为符号" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "em-sacredbeast",
    name: "圣兽神格化",
    aliases: [],
    workId: "egypt-myth",
    domain: "beast",
    summary: "猫、豺、鹰等动物被奉为神。",
    description: "猫、豺、鹰等动物被奉为神。",
    firstPrinciples: [
      { principle: "动物被神格化", verdict: "achieved", note: "作为图腾信仰" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "em-nun",
    name: "原水创世",
    aliases: [],
    workId: "egypt-myth",
    domain: "realm",
    summary: "自原水混沌中分出天地的创世观。",
    description: "自原水混沌中分出天地的创世观。",
    firstPrinciples: [
      { principle: "水混沌生天地", verdict: "violated", note: "仅为创世神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-tirnanog",
    name: "提尔纳诺",
    aliases: [],
    workId: "celtic-myth",
    domain: "realm",
    summary: "不死不老的彼界，时间流速与人界异。",
    description: "不死不老的彼界，时间流速与人界异。",
    firstPrinciples: [
      { principle: "异界时间流速异", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-sidhe",
    name: "精灵席德",
    aliases: [],
    workId: "celtic-myth",
    domain: "magic",
    summary: "居于土丘、可附身显形的精怪。",
    description: "居于土丘、可附身显形的精怪。",
    firstPrinciples: [
      { principle: "精怪附身显形", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-druid",
    name: "德鲁伊",
    aliases: [],
    workId: "celtic-myth",
    domain: "lore",
    summary: "掌自然、预言与祭仪的祭司阶层。",
    description: "掌自然、预言与祭仪的祭司阶层。",
    firstPrinciples: [
      { principle: "祭司通自然与预知", verdict: "achieved", note: "作为制度设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cm-shapeshift",
    name: "变形术",
    aliases: [],
    workId: "celtic-myth",
    domain: "beast",
    summary: "神人以变形互换形体的传说。",
    description: "神人以变形互换形体的传说。",
    firstPrinciples: [
      { principle: "人兽形变互换", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-cauldron",
    name: "圣锅",
    aliases: [],
    workId: "celtic-myth",
    domain: "artifact",
    summary: "可复活亡者与丰饶的魔法锅。",
    description: "可复活亡者与丰饶的魔法锅。",
    firstPrinciples: [
      { principle: "器物复活亡者", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-well",
    name: "圣井与献祭",
    aliases: [],
    workId: "celtic-myth",
    domain: "lore",
    summary: "以井泉与祭品沟通神祇。",
    description: "以井泉与祭品沟通神祇。",
    firstPrinciples: [
      { principle: "献祭换神谕", verdict: "violated", note: "仅为仪式" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-warqueen",
    name: "战旗女神",
    aliases: [],
    workId: "celtic-myth",
    domain: "lore",
    summary: "以乌鸦为形的战神与女王。",
    description: "以乌鸦为形的战神与女王。",
    firstPrinciples: [
      { principle: "神祇化形为鸟", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-canoe",
    name: "皮舟远航",
    aliases: [],
    workId: "celtic-myth",
    domain: "realm",
    summary: "以皮舟与帆船远航的部族航海。",
    description: "以皮舟与帆船远航的部族航海。",
    firstPrinciples: [
      { principle: "皮艇跨海", verdict: "achieved", note: "现实有皮划艇" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cm-werewolf",
    name: "狼人母题",
    aliases: [],
    workId: "celtic-myth",
    domain: "beast",
    summary: "人狼互变的诅咒与变形母题。",
    description: "人狼互变的诅咒与变形母题。",
    firstPrinciples: [
      { principle: "人狼互变", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-tuatha",
    name: "图哈达诸神",
    aliases: [],
    workId: "celtic-myth",
    domain: "magic",
    summary: "自海外来、掌四艺的达努神族。",
    description: "自海外来、掌四艺的达努神族。",
    firstPrinciples: [
      { principle: "神族携异技降临", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-enuma",
    name: "创世史诗",
    aliases: [],
    workId: "sumerian-myth",
    domain: "realm",
    summary: "埃努玛·埃利什中神战分天地。",
    description: "埃努玛·埃利什中神战分天地。",
    firstPrinciples: [
      { principle: "神战分出天地", verdict: "violated", note: "仅为创世神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-gilgamesh",
    name: "吉尔伽美什求永生",
    aliases: [],
    workId: "sumerian-myth",
    domain: "lore",
    summary: "英雄远行寻不死之草终落空。",
    description: "英雄远行寻不死之草终落空。",
    firstPrinciples: [
      { principle: "凡人求永生而不得", verdict: "violated", note: "衰老不可逆" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-flood",
    name: "大洪水",
    aliases: [],
    workId: "sumerian-myth",
    domain: "realm",
    summary: "神意降洪水涤荡人类的母题。",
    description: "神意降洪水涤荡人类的母题。",
    firstPrinciples: [
      { principle: "神意改写文明", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-marduk",
    name: "马尔杜克弑怪",
    aliases: [],
    workId: "sumerian-myth",
    domain: "beast",
    summary: "主神分尸混沌怪提亚玛特创秩序。",
    description: "主神分尸混沌怪提亚玛特创秩序。",
    firstPrinciples: [
      { principle: "弑怪立秩序", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-inanna",
    name: "冥界 descent",
    aliases: [],
    workId: "sumerian-myth",
    domain: "lore",
    summary: "伊南娜下冥界、三日复生的循环。",
    description: "伊南娜下冥界、三日复生的循环。",
    firstPrinciples: [
      { principle: "下冥界复生", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-cuneiform",
    name: "楔形文字",
    aliases: [],
    workId: "sumerian-myth",
    domain: "artifact",
    summary: "以泥板记录神话与律法的文字。",
    description: "以泥板记录神话与律法的文字。",
    firstPrinciples: [
      { principle: "文字系统记录文明", verdict: "achieved", note: "现实有楔形文字" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sm-ziggurat",
    name: "通天塔庙",
    aliases: [],
    workId: "sumerian-myth",
    domain: "artifact",
    summary: "阶梯塔庙作为人神中介。",
    description: "阶梯塔庙作为人神中介。",
    firstPrinciples: [
      { principle: "巨构沟通人神", verdict: "achieved", note: "现实有金字塔庙" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sm-utnapishtim",
    name: "方舟幸存者",
    aliases: [],
    workId: "sumerian-myth",
    domain: "realm",
    summary: "受神示造舟避洪水的先祖。",
    description: "受神示造舟避洪水的先祖。",
    firstPrinciples: [
      { principle: "造舟避灾", verdict: "achieved", note: "方舟叙事母题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sm-star",
    name: "星神与历法",
    aliases: [],
    workId: "sumerian-myth",
    domain: "lore",
    summary: "以星辰神格化并制定历法。",
    description: "以星辰神格化并制定历法。",
    firstPrinciples: [
      { principle: "星象神格与历法", verdict: "achieved", note: "古代天文学真实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sm-lamassu",
    name: "守护神兽",
    aliases: [],
    workId: "sumerian-myth",
    domain: "beast",
    summary: "人首翼牛等镇守宫殿的神兽。",
    description: "人首翼牛等镇守宫殿的神兽。",
    firstPrinciples: [
      { principle: "神兽镇守门户", verdict: "achieved", note: "作为艺术象征" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hm-trimurti",
    name: "三相神",
    aliases: [],
    workId: "hindu-myth",
    domain: "magic",
    summary: "梵天、毗湿奴、湿婆分掌创护灭。",
    description: "梵天、毗湿奴、湿婆分掌创护灭。",
    firstPrinciples: [
      { principle: "神统御宇宙循环", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-yuga",
    name: "劫波循环",
    aliases: [],
    workId: "hindu-myth",
    domain: "realm",
    summary: "宇宙在四纪中周期毁灭与重生。",
    description: "宇宙在四纪中周期毁灭与重生。",
    firstPrinciples: [
      { principle: "宇宙周期生灭", verdict: "violated", note: "仅为宇宙观" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-chakra",
    name: "脉轮与瑜伽",
    aliases: [],
    workId: "hindu-myth",
    domain: "lore",
    summary: "瑜伽士以修持开通体内能量中枢。",
    description: "瑜伽士以修持开通体内能量中枢。",
    firstPrinciples: [
      { principle: "修持改身心状态", verdict: "achieved", note: "冥想与生理可验证" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hm-garuda",
    name: "迦楼罗与那伽",
    aliases: [],
    workId: "hindu-myth",
    domain: "beast",
    summary: "巨鸟与蛇族对立的神话生物。",
    description: "巨鸟与蛇族对立的神话生物。",
    firstPrinciples: [
      { principle: "巨型神话鸟蛇", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-amrita",
    name: "甘露不老",
    aliases: [],
    workId: "hindu-myth",
    domain: "alchemy",
    summary: "搅乳海所得的永生甘露。",
    description: "搅乳海所得的永生甘露。",
    firstPrinciples: [
      { principle: "饮品赐永生", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-ramayana",
    name: "罗摩衍那",
    aliases: [],
    workId: "hindu-myth",
    domain: "realm",
    summary: "神猴哈努曼助罗摩救妻的史诗。",
    description: "神猴哈努曼助罗摩救妻的史诗。",
    firstPrinciples: [
      { principle: "神猴助战的史诗", verdict: "achieved", note: "作为文学" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hm-shiva",
    name: "湿婆的毁灭与重生之舞",
    aliases: [],
    workId: "hindu-myth",
    domain: "magic",
    summary: "湿婆之舞象征宇宙的毁灭与更新。",
    description: "湿婆之舞象征宇宙的毁灭与更新。",
    firstPrinciples: [
      { principle: "舞动驱动宇宙循环", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-krishna",
    name: "黑天的神迹",
    aliases: [],
    workId: "hindu-myth",
    domain: "lore",
    summary: "降世神祇以神迹引导信徒。",
    description: "降世神祇以神迹引导信徒。",
    firstPrinciples: [
      { principle: "神迹引导凡人", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-karma",
    name: "业力与轮回",
    aliases: [],
    workId: "hindu-myth",
    domain: "lore",
    summary: "行为决定转世去向的法则。",
    description: "行为决定转世去向的法则。",
    firstPrinciples: [
      { principle: "因果跨世累积", verdict: "violated", note: "仅为宗教观" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-vimana",
    name: "战车飞行器",
    aliases: [],
    workId: "hindu-myth",
    domain: "realm",
    summary: "史诗中的天界飞行器 vimana。",
    description: "史诗中的天界飞行器 vimana。",
    firstPrinciples: [
      { principle: "古代飞行器描述", verdict: "breakthrough", note: "无实证" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-pangu",
    name: "盘古开天",
    aliases: [],
    workId: "chinese-myth",
    domain: "realm",
    summary: "巨人化育山川的创世神话。",
    description: "巨人化育山川的创世神话。",
    firstPrinciples: [
      { principle: "神躯化为自然", verdict: "violated", note: "仅为创世神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-nuwa",
    name: "女娲造人补天",
    aliases: [],
    workId: "chinese-myth",
    domain: "beast",
    summary: "抟土造人、炼石补天的女神。",
    description: "抟土造人、炼石补天的女神。",
    firstPrinciples: [
      { principle: "神造人补天", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-elixir",
    name: "仙丹不老",
    aliases: [],
    workId: "chinese-myth",
    domain: "alchemy",
    summary: "以汞铅炼丹求长生不老。",
    description: "以汞铅炼丹求长生不老。",
    firstPrinciples: [
      { principle: "丹药赐永生", verdict: "violated", note: "化学无效且有剧毒" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-eighttrigram",
    name: "八卦与易经",
    aliases: [],
    workId: "chinese-myth",
    domain: "lore",
    summary: "以卦象推演变化的占卜体系。",
    description: "以卦象推演变化的占卜体系。",
    firstPrinciples: [
      { principle: "符号系统推演变化", verdict: "breakthrough", note: "现实仅有弱预测" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-dragon7",
    name: "龙与祥瑞",
    aliases: [],
    workId: "chinese-myth",
    domain: "beast",
    summary: "司云雨、象征皇权的神龙。",
    description: "司云雨、象征皇权的神龙。",
    firstPrinciples: [
      { principle: "神龙司风雨", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-shanhaijing",
    name: "山海异兽",
    aliases: [],
    workId: "chinese-myth",
    domain: "beast",
    summary: "山海经中九尾狐、饕餮等异兽。",
    description: "山海经中九尾狐、饕餮等异兽。",
    firstPrinciples: [
      { principle: "志怪异兽集合", verdict: "achieved", note: "作为文献" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cm-xian",
    name: "仙人与洞天",
    aliases: [],
    workId: "chinese-myth",
    domain: "lore",
    summary: "修道飞升、居洞天福地的仙人。",
    description: "修道飞升、居洞天福地的仙人。",
    firstPrinciples: [
      { principle: "人修仙飞升", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-yudi",
    name: "玉帝与天庭",
    aliases: [],
    workId: "chinese-myth",
    domain: "magic",
    summary: "统御众神的拟人天庭官僚。",
    description: "统御众神的拟人天庭官僚。",
    firstPrinciples: [
      { principle: "天庭神界秩序", verdict: "achieved", note: "作为神话结构" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cm-nezha",
    name: "哪吒莲花化身",
    aliases: [],
    workId: "chinese-myth",
    domain: "beast",
    summary: "以莲花重塑肉身的莲花化身。",
    description: "以莲花重塑肉身的莲花化身。",
    firstPrinciples: [
      { principle: "植物重塑躯体", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cm-houyi",
    name: "后羿射日",
    aliases: [],
    workId: "chinese-myth",
    domain: "realm",
    summary: "射落九日、拯民的英雄母题。",
    description: "射落九日、拯民的英雄母题。",
    firstPrinciples: [
      { principle: "弓射落日拯民", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "jm-amaterasu",
    name: "天照与高天原",
    aliases: [],
    workId: "japanese-myth",
    domain: "magic",
    summary: "太阳女神统御天界的神话。",
    description: "太阳女神统御天界的神话。",
    firstPrinciples: [
      { principle: "太阳神掌天界", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "jm-yomi",
    name: "黄泉比良坂",
    aliases: [],
    workId: "japanese-myth",
    domain: "lore",
    summary: "连通生死、忌回望的冥界入口。",
    description: "连通生死、忌回望的冥界入口。",
    firstPrinciples: [
      { principle: "冥界入口忌回望", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "jm-kami",
    name: "八百万神明",
    aliases: [],
    workId: "japanese-myth",
    domain: "lore",
    summary: "万物皆可附灵的泛灵信仰。",
    description: "万物皆可附灵的泛灵信仰。",
    firstPrinciples: [
      { principle: "万物有灵泛灵", verdict: "achieved", note: "作为信仰" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "jm-kusanagi",
    name: "草薙剑",
    aliases: [],
    workId: "japanese-myth",
    domain: "artifact",
    summary: "三神器之一、象征王权的草薙剑。",
    description: "三神器之一、象征王权的草薙剑。",
    firstPrinciples: [
      { principle: "圣器承载王权", verdict: "achieved", note: "作为象征" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "jm-izanagi",
    name: "伊奘诺与伊奘冉",
    aliases: [],
    workId: "japanese-myth",
    domain: "realm",
    summary: "二神化生诸岛与诸神的创世。",
    description: "二神化生诸岛与诸神的创世。",
    firstPrinciples: [
      { principle: "神婚生岛与神", verdict: "violated", note: "仅为创世神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "jm-tengu",
    name: "天狗与妖怪",
    aliases: [],
    workId: "japanese-myth",
    domain: "beast",
    summary: "山野中长鼻、能飞的妖怪。",
    description: "山野中长鼻、能飞的妖怪。",
    firstPrinciples: [
      { principle: "妖怪栖于山野", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "jm-shinto",
    name: "神社与祭礼",
    aliases: [],
    workId: "japanese-myth",
    domain: "lore",
    summary: "以神社与祭礼维系神人关系。",
    description: "以神社与祭礼维系神人关系。",
    firstPrinciples: [
      { principle: "祭祀维系神缘", verdict: "achieved", note: "作为宗教制度" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "jm-tsukuyomi",
    name: "月读与冲突",
    aliases: [],
    workId: "japanese-myth",
    domain: "lore",
    summary: "月神与食神冲突衍生昼夜。",
    description: "月神与食神冲突衍生昼夜。",
    firstPrinciples: [
      { principle: "神争生昼夜", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "jm-kappa",
    name: "河童与水妖",
    aliases: [],
    workId: "japanese-myth",
    domain: "beast",
    summary: "栖水、以头顶水盘为命门的小妖。",
    description: "栖水、以头顶水盘为命门的小妖。",
    firstPrinciples: [
      { principle: "水域精怪", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "jm-susanoo",
    name: "素戋鸣斩蛇",
    aliases: [],
    workId: "japanese-myth",
    domain: "beast",
    summary: "斩八岐大蛇救少女的勇者母题。",
    description: "斩八岐大蛇救少女的勇者母题。",
    firstPrinciples: [
      { principle: "屠巨蛇救少女", verdict: "achieved", note: "作为神话母题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-perun",
    name: "佩伦雷神",
    aliases: [],
    workId: "slavic-myth",
    domain: "magic",
    summary: "执掌雷电、橡树为圣的雷雨神。",
    description: "执掌雷电、橡树为圣的雷雨神。",
    firstPrinciples: [
      { principle: "雷神掌雷电", verdict: "achieved", note: "作为神话角色" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-domovoi",
    name: "家神与灶灵",
    aliases: [],
    workId: "slavic-myth",
    domain: "lore",
    summary: "守卫家宅、喜怒无常的家神。",
    description: "守卫家宅、喜怒无常的家神。",
    firstPrinciples: [
      { principle: "家宅有守护灵", verdict: "achieved", note: "作为民间信仰" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-firebird",
    name: "火鸟",
    aliases: [],
    workId: "slavic-myth",
    domain: "beast",
    summary: "光芒夺目的神鸟，冒险的追寻对象。",
    description: "光芒夺目的神鸟，冒险的追寻对象。",
    firstPrinciples: [
      { principle: "神鸟引动冒险", verdict: "achieved", note: "作为童话母题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-koschei",
    name: "科谢伊不朽",
    aliases: [],
    workId: "slavic-myth",
    domain: "lore",
    summary: "灵魂藏于卵外物中的不死妖巫。",
    description: "灵魂藏于卵外物中的不死妖巫。",
    firstPrinciples: [
      { principle: "灵魂外置而不死", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-leshy",
    name: "林妖",
    aliases: [],
    workId: "slavic-myth",
    domain: "beast",
    summary: "可使迷路、变形、统辖林兽的森林精怪。",
    description: "可使迷路、变形、统辖林兽的森林精怪。",
    firstPrinciples: [
      { principle: "森林精怪歧路", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-vodyanoy",
    name: "水鬼",
    aliases: [],
    workId: "slavic-myth",
    domain: "beast",
    summary: "溺亡者所化、拖人入水的池妖。",
    description: "溺亡者所化、拖人入水的池妖。",
    firstPrinciples: [
      { principle: "溺魂化水妖", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-rusalka",
    name: "露萨尔卡",
    aliases: [],
    workId: "slavic-myth",
    domain: "beast",
    summary: "溺亡女子所化的水中女妖。",
    description: "溺亡女子所化的水中女妖。",
    firstPrinciples: [
      { principle: "亡女化水妖", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-zmey",
    name: "三头龙",
    aliases: [],
    workId: "slavic-myth",
    domain: "beast",
    summary: "掳掠公主、喷火的多头龙。",
    description: "掳掠公主、喷火的多头龙。",
    firstPrinciples: [
      { principle: "多头恶龙母题", verdict: "achieved", note: "作为童话" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-baba",
    name: "芭芭雅嘎",
    aliases: [],
    workId: "slavic-myth",
    domain: "lore",
    summary: "居鸡腿小屋、亦助亦噬的巫婆。",
    description: "居鸡腿小屋、亦助亦噬的巫婆。",
    firstPrinciples: [
      { principle: "巫婆掌生杀", verdict: "achieved", note: "作为童话" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-zorya",
    name: "晨昏双星",
    aliases: [],
    workId: "slavic-myth",
    domain: "realm",
    summary: "看守拴日之犬、司晨昏的姊妹星。",
    description: "看守拴日之犬、司晨昏的姊妹星。",
    firstPrinciples: [
      { principle: "星辰司晨昏", verdict: "achieved", note: "作为神话" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "am-quetzalcoatl",
    name: "羽蛇神",
    aliases: [],
    workId: "aztec-myth",
    domain: "magic",
    summary: "掌风与晨星、曾创人的羽蛇神。",
    description: "掌风与晨星、曾创人的羽蛇神。",
    firstPrinciples: [
      { principle: "神创人掌自然", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-fithsun",
    name: "第五太阳",
    aliases: [],
    workId: "aztec-myth",
    domain: "realm",
    summary: "当前世界为需以血祭维系的第五纪。",
    description: "当前世界为需以血祭维系的第五纪。",
    firstPrinciples: [
      { principle: "太阳需血祭维持", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-sacrifice",
    name: "血祭",
    aliases: [],
    workId: "aztec-myth",
    domain: "lore",
    summary: "以活人心脏献祭诸神的仪式。",
    description: "以活人心脏献祭诸神的仪式。",
    firstPrinciples: [
      { principle: "活祭维系宇宙", verdict: "violated", note: "仅为仪式" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-calendars",
    name: "历法与石盘",
    aliases: [],
    workId: "aztec-myth",
    domain: "artifact",
    summary: "以太阳石盘与历法丈量时间。",
    description: "以太阳石盘与历法丈量时间。",
    firstPrinciples: [
      { principle: "精密历法系统", verdict: "achieved", note: "玛雅历法真实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "am-cenote",
    name: "圣井",
    aliases: [],
    workId: "aztec-myth",
    domain: "realm",
    summary: "向雨神献祭人牲的洞穴水井。",
    description: "向雨神献祭人牲的洞穴水井。",
    firstPrinciples: [
      { principle: "井穴献祭求雨", verdict: "achieved", note: "作为考古事实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "am-jaguar",
    name: "美洲豹骑士",
    aliases: [],
    workId: "aztec-myth",
    domain: "beast",
    summary: "以美洲豹为徽的精英战士团。",
    description: "以美洲豹为徽的精英战士团。",
    firstPrinciples: [
      { principle: "豹纹战士集团", verdict: "achieved", note: "史实有美洲豹骑士" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "am-mictlan",
    name: "九层冥界",
    aliases: [],
    workId: "aztec-myth",
    domain: "lore",
    summary: "亡魂需经多层冥界方达安息。",
    description: "亡魂需经多层冥界方达安息。",
    firstPrinciples: [
      { principle: "多层冥界旅程", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-tezcat",
    name: "黑曜石镜神",
    aliases: [],
    workId: "aztec-myth",
    domain: "magic",
    summary: "以镜窥视真相与未来的神。",
    description: "以镜窥视真相与未来的神。",
    firstPrinciples: [
      { principle: "神镜窥真未来", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-maize",
    name: "玉米与人",
    aliases: [],
    workId: "aztec-myth",
    domain: "beast",
    summary: "玉米神创人、人以玉米为躯的母题。",
    description: "玉米神创人、人以玉米为躯的母题。",
    firstPrinciples: [
      { principle: "神以作物造人", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-maya",
    name: "玛雅星际观",
    aliases: [],
    workId: "aztec-myth",
    domain: "realm",
    summary: "以星象历法规划农耕与城邦。",
    description: "以星象历法规划农耕与城邦。",
    firstPrinciples: [
      { principle: "星历指导农耕", verdict: "achieved", note: "玛雅天文学真实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ar-excalibur",
    name: "王者之剑",
    aliases: [],
    workId: "arthurian",
    domain: "artifact",
    summary: "自湖中所得、认主不二的圣剑。",
    description: "自湖中所得、认主不二的圣剑。",
    firstPrinciples: [
      { principle: "圣剑认主且回归湖", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ar-merlin",
    name: "梅林预言",
    aliases: [],
    workId: "arthurian",
    domain: "lore",
    summary: "以魔法与预言辅佐王权的法师。",
    description: "以魔法与预言辅佐王权的法师。",
    firstPrinciples: [
      { principle: "法师预知辅国", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ar-grail",
    name: "圣杯",
    aliases: [],
    workId: "arthurian",
    domain: "lore",
    summary: "基督遗物，唯纯净者得见其力。",
    description: "基督遗物，唯纯净者得见其力。",
    firstPrinciples: [
      { principle: "圣物赐治愈永生", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ar-round",
    name: "圆桌骑士",
    aliases: [],
    workId: "arthurian",
    domain: "realm",
    summary: "平等列座的骑士团与探险制度。",
    description: "平等列座的骑士团与探险制度。",
    firstPrinciples: [
      { principle: "平等骑士制度", verdict: "achieved", note: "作为制度叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ar-camelot",
    name: "卡美洛",
    aliases: [],
    workId: "arthurian",
    domain: "realm",
    summary: "亚瑟王统治理想的王城。",
    description: "亚瑟王统治理想的王城。",
    firstPrinciples: [
      { principle: "理想王城象征", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ar-morgan",
    name: "摩根勒菲",
    aliases: [],
    workId: "arthurian",
    domain: "magic",
    summary: "亦敌亦妹、通魔法的女巫。",
    description: "亦敌亦妹、通魔法的女巫。",
    firstPrinciples: [
      { principle: "女巫施展魔法", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ar-lady",
    name: "湖中仙女",
    aliases: [],
    workId: "arthurian",
    domain: "magic",
    summary: "赐剑、收养并重夺圣剑的精灵女。",
    description: "赐剑、收养并重夺圣剑的精灵女。",
    firstPrinciples: [
      { principle: "湖灵授予圣器", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ar-quest",
    name: "圣杯远征",
    aliases: [],
    workId: "arthurian",
    domain: "realm",
    summary: "众骑士寻杯、各得其所的冒险。",
    description: "众骑士寻杯、各得其所的冒险。",
    firstPrinciples: [
      { principle: "集体追寻圣物", verdict: "achieved", note: "作为叙事母题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ar-siege",
    name: "剑栏之别",
    aliases: [],
    workId: "arthurian",
    domain: "realm",
    summary: "亚瑟与莫德雷德同归于尽的决战。",
    description: "亚瑟与莫德雷德同归于尽的决战。",
    firstPrinciples: [
      { principle: "王权终战", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ar-tristan",
    name: "崔斯坦与伊索德",
    aliases: [],
    workId: "arthurian",
    domain: "lore",
    summary: "误饮爱药的悲剧恋情母题。",
    description: "误饮爱药的悲剧恋情母题。",
    firstPrinciples: [
      { principle: "魔药致爱悲剧", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gr-ring",
    name: "魔法戒指",
    aliases: [],
    workId: "grimm",
    domain: "artifact",
    summary: "以一句愿望或咒语改命的指环。",
    description: "以一句愿望或咒语改命的指环。",
    firstPrinciples: [
      { principle: "器物凭咒改命", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gr-curse",
    name: "纺锤沉睡咒",
    aliases: [],
    workId: "grimm",
    domain: "lore",
    summary: "诅咒使公主一触纺锤即长眠。",
    description: "诅咒使公主一触纺锤即长眠。",
    firstPrinciples: [
      { principle: "诅咒致长眠", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gr-witch",
    name: "巫婆与糖果屋",
    aliases: [],
    workId: "grimm",
    domain: "magic",
    summary: "以屋诱童、可推入炉的邪恶巫婆。",
    description: "以屋诱童、可推入炉的邪恶巫婆。",
    firstPrinciples: [
      { principle: "巫婆施法害人", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gr-frog",
    name: "青蛙王子",
    aliases: [],
    workId: "grimm",
    domain: "beast",
    summary: "被咒的王子以吻解咒的母题。",
    description: "被咒的王子以吻解咒的母题。",
    firstPrinciples: [
      { principle: "吻解兽形诅咒", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gr-forest",
    name: "黑森林",
    aliases: [],
    workId: "grimm",
    domain: "realm",
    summary: "作为试炼与危险场域的密林。",
    description: "作为试炼与危险场域的密林。",
    firstPrinciples: [
      { principle: "森林为试炼场", verdict: "achieved", note: "作为叙事空间" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gr-talkingbeast",
    name: "会说话的动物",
    aliases: [],
    workId: "grimm",
    domain: "beast",
    summary: "狼、兔、鸟等具人智的童话兽。",
    description: "狼、兔、鸟等具人智的童话兽。",
    firstPrinciples: [
      { principle: "动物具人智言语", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gr-shoe",
    name: "灰姑娘的水晶鞋",
    aliases: [],
    workId: "grimm",
    domain: "artifact",
    summary: "以鞋为身份标识、借魔法赴舞。",
    description: "以鞋为身份标识、借魔法赴舞。",
    firstPrinciples: [
      { principle: "器物标识身份", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gr-grimm-coll",
    name: "格林兄弟辑录",
    aliases: [],
    workId: "grimm",
    domain: "artifact",
    summary: "以民间口传辑为文献的采集。",
    description: "以民间口传辑为文献的采集。",
    firstPrinciples: [
      { principle: "口传辑录为文献", verdict: "achieved", note: "史实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gr-rapunzel",
    name: "长发救赎",
    aliases: [],
    workId: "grimm",
    domain: "lore",
    summary: "以长发为绳、借攀爬解困的母题。",
    description: "以长发为绳、借攀爬解困的母题。",
    firstPrinciples: [
      { principle: "长发作绳攀援", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gr-hansel",
    name: "面包屑引路",
    aliases: [],
    workId: "grimm",
    domain: "realm",
    summary: "以面包屑标记归途、反被鸟食。",
    description: "以面包屑标记归途、反被鸟食。",
    firstPrinciples: [
      { principle: "标记引路反失效", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "an-lamp",
    name: "神灯精灵",
    aliases: [],
    workId: "arabian-nights",
    domain: "magic",
    summary: "擦灯即召精灵满足愿望。",
    description: "擦灯即召精灵满足愿望。",
    firstPrinciples: [
      { principle: "器物召灵实现愿望", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "an-carpet",
    name: "飞毯",
    aliases: [],
    workId: "arabian-nights",
    domain: "realm",
    summary: "可载人瞬息远行、无视距离的地毯。",
    description: "可载人瞬息远行、无视距离的地毯。",
    firstPrinciples: [
      { principle: "器物无视距离飞行", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "an-jinn",
    name: "镇尼精灵",
    aliases: [],
    workId: "arabian-nights",
    domain: "lore",
    summary: "以烟焰为体的自由精灵族。",
    description: "以烟焰为体的自由精灵族。",
    firstPrinciples: [
      { principle: "烟焰之灵族", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "an-ring2",
    name: "指环精灵",
    aliases: [],
    workId: "arabian-nights",
    domain: "magic",
    summary: "第二枚召唤仆从精灵的指环。",
    description: "第二枚召唤仆从精灵的指环。",
    firstPrinciples: [
      { principle: "指环召灵", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "an-sindbad",
    name: "辛巴达七航",
    aliases: [],
    workId: "arabian-nights",
    domain: "realm",
    summary: "航海家七渡远洋、遇异境的冒险。",
    description: "航海家七渡远洋、遇异境的冒险。",
    firstPrinciples: [
      { principle: "远洋冒险遇异境", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "an-sheherazade",
    name: "山鲁佐德叙事",
    aliases: [],
    workId: "arabian-nights",
    domain: "lore",
    summary: "以一夜未完的故事延命千夜。",
    description: "以一夜未完的故事延命千夜。",
    firstPrinciples: [
      { principle: "叙事本身延命", verdict: "achieved", note: "作为叙事母题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "an-city",
    name: "巴格达与哈里发",
    aliases: [],
    workId: "arabian-nights",
    domain: "realm",
    summary: "以城邦与哈里发为底色的背景。",
    description: "以城邦与哈里发为底色的背景。",
    firstPrinciples: [
      { principle: "中世纪伊斯兰城邦", verdict: "achieved", note: "历史背景" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "an-horse",
    name: "飞马与飞猴",
    aliases: [],
    workId: "arabian-nights",
    domain: "beast",
    summary: "会飞的马、猴等奇兽。",
    description: "会飞的马、猴等奇兽。",
    firstPrinciples: [
      { principle: "飞行奇兽", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "an-trick",
    name: "机巧与诈术",
    aliases: [],
    workId: "arabian-nights",
    domain: "artifact",
    summary: "以机关与计谋脱困的市井智慧。",
    description: "以机关与计谋脱困的市井智慧。",
    firstPrinciples: [
      { principle: "小机关脱困", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "an-genie",
    name: "封印瓶",
    aliases: [],
    workId: "arabian-nights",
    domain: "magic",
    summary: "囚禁精灵、开启则难再收的瓶。",
    description: "囚禁精灵、开启则难再收的瓶。",
    firstPrinciples: [
      { principle: "封瓶囚灵", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lh-cthulhu",
    name: "克苏鲁",
    aliases: [],
    workId: "lovecraft",
    domain: "beast",
    summary: "沉睡于海底、以梦侵扰凡人的旧日支配者。",
    description: "沉睡于海底、以梦侵扰凡人的旧日支配者。",
    firstPrinciples: [
      { principle: "巨型外神改现实认知", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lh-necronomicon",
    name: "死灵之书",
    aliases: [],
    workId: "lovecraft",
    domain: "lore",
    summary: "记载禁忌知识、召灾的魔典。",
    description: "记载禁忌知识、召灾的魔典。",
    firstPrinciples: [
      { principle: "魔典载禁忌知识", verdict: "achieved", note: "作为虚构文献" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lh-shoggoth",
    name: "修格斯",
    aliases: [],
    workId: "lovecraft",
    domain: "beast",
    summary: "违背拓扑、可变形增殖的黏液体。",
    description: "违背拓扑、可变形增殖的黏液体。",
    firstPrinciples: [
      { principle: "变形增殖的胶体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lh-eldersign",
    name: "旧印",
    aliases: [],
    workId: "lovecraft",
    domain: "artifact",
    summary: "以符号驱避外神影响的印记。",
    description: "以符号驱避外神影响的印记。",
    firstPrinciples: [
      { principle: "符号驱避外神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lh-azathoth",
    name: "阿撒托斯",
    aliases: [],
    workId: "lovecraft",
    domain: "magic",
    summary: "盲目痴愚、处于宇宙核心的原初混沌。",
    description: "盲目痴愚、处于宇宙核心的原初混沌。",
    firstPrinciples: [
      { principle: "原初混沌创世", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lh-deepone",
    name: "深潜者",
    aliases: [],
    workId: "lovecraft",
    domain: "beast",
    summary: "与人类混血、栖海的不死鱼人族。",
    description: "与人类混血、栖海的不死鱼人族。",
    firstPrinciples: [
      { principle: "人鱼混血不死族", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lh-mi-go",
    name: "米·戈",
    aliases: [],
    workId: "lovecraft",
    domain: "beast",
    summary: "以大脑离体传输、栖宇宙的真菌生物。",
    description: "以大脑离体传输、栖宇宙的真菌生物。",
    firstPrinciples: [
      { principle: "脑离体传输", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lh-yog",
    name: "犹格·索托斯",
    aliases: [],
    workId: "lovecraft",
    domain: "realm",
    summary: "门之钥、连通时空外神。",
    description: "门之钥、连通时空外神。",
    firstPrinciples: [
      { principle: "外神连通时空", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lh-cult",
    name: "邪教崇拜",
    aliases: [],
    workId: "lovecraft",
    domain: "lore",
    summary: "崇拜外神、诱人疯狂的秘密教团。",
    description: "崇拜外神、诱人疯狂的秘密教团。",
    firstPrinciples: [
      { principle: "教团唤外神", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lh-insane",
    name: "理智侵蚀",
    aliases: [],
    workId: "lovecraft",
    domain: "lore",
    summary: "窥见真相即失智的设定机制。",
    description: "窥见真相即失智的设定机制。",
    firstPrinciples: [
      { principle: "知识致失智", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pm-maui",
    name: "毛伊钓岛",
    aliases: [],
    workId: "polynesian-myth",
    domain: "realm",
    summary: "以钩竿自海中钓起岛屿的半神。",
    description: "以钩竿自海中钓起岛屿的半神。",
    firstPrinciples: [
      { principle: "钩竿钓起陆地", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pm-fire",
    name: "盗火",
    aliases: [],
    workId: "polynesian-myth",
    domain: "magic",
    summary: "毛伊自神处盗火予人类的母题。",
    description: "毛伊自神处盗火予人类的母题。",
    firstPrinciples: [
      { principle: "神盗火予人", verdict: "achieved", note: "普罗米修斯式母题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm-wayfinding",
    name: "星象航海",
    aliases: [],
    workId: "polynesian-myth",
    domain: "realm",
    summary: "凭星辰与洋流跨洋的无图航行。",
    description: "凭星辰与洋流跨洋的无图航行。",
    firstPrinciples: [
      { principle: "星辰导航跨洋", verdict: "achieved", note: "波利尼西亚航海真实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm-taniwha",
    name: "塔尼wha",
    aliases: [],
    workId: "polynesian-myth",
    domain: "beast",
    summary: "栖水、守护或害人水域的巨兽。",
    description: "栖水、守护或害人水域的巨兽。",
    firstPrinciples: [
      { principle: "水域守护巨兽", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm-pele",
    name: "火山女神",
    aliases: [],
    workId: "polynesian-myth",
    domain: "magic",
    summary: "掌火焰与火山的女神。",
    description: "掌火焰与火山的女神。",
    firstPrinciples: [
      { principle: "女神掌火山", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pm-rangi",
    name: "天父地母",
    aliases: [],
    workId: "polynesian-myth",
    domain: "realm",
    summary: "天地相拥、被子女撑开的创世。",
    description: "天地相拥、被子女撑开的创世。",
    firstPrinciples: [
      { principle: "天地分隔创世", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pm-maori",
    name: "毛利创世",
    aliases: [],
    workId: "polynesian-myth",
    domain: "realm",
    summary: "以吟唱追溯祖先与自然的谱系。",
    description: "以吟唱追溯祖先与自然的谱系。",
    firstPrinciples: [
      { principle: "吟唱溯谱系", verdict: "achieved", note: "作为口传" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm-hei",
    name: "护身结绳",
    aliases: [],
    workId: "polynesian-myth",
    domain: "artifact",
    summary: "以绳结护身、载祖先庇佑的饰物。",
    description: "以绳结护身、载祖先庇佑的饰物。",
    firstPrinciples: [
      { principle: "绳结载庇佑", verdict: "achieved", note: "作为工艺" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm-spirit",
    name: "祖灵与mana",
    aliases: [],
    workId: "polynesian-myth",
    domain: "lore",
    summary: "以 mana 为可流动的灵力。",
    description: "以 mana 为可流动的灵力。",
    firstPrinciples: [
      { principle: "灵力可流动积累", verdict: "violated", note: "仅为信仰" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pm-voyage",
    name: "独木舟远征",
    aliases: [],
    workId: "polynesian-myth",
    domain: "realm",
    summary: "以双体独木舟远航拓殖的文明。",
    description: "以双体独木舟远航拓殖的文明。",
    firstPrinciples: [
      { principle: "双体舟远航拓殖", verdict: "achieved", note: "历史事实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-rustam",
    name: "鲁斯坦姆",
    aliases: [],
    workId: "persian-myth",
    domain: "beast",
    summary: "斩妖、骑神驹的传奇英雄。",
    description: "斩妖、骑神驹的传奇英雄。",
    firstPrinciples: [
      { principle: "英雄斩妖母题", verdict: "achieved", note: "作为史诗" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-simurgh",
    name: "西暮尔格",
    aliases: [],
    workId: "persian-myth",
    domain: "beast",
    summary: "通晓万物、巨翼的治愈神鸟。",
    description: "通晓万物、巨翼的治愈神鸟。",
    firstPrinciples: [
      { principle: "神鸟通万物", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-khvarnah",
    name: "灵光",
    aliases: [],
    workId: "persian-myth",
    domain: "lore",
    summary: "可见光环般护佑王权的神圣荣光。",
    description: "可见光环般护佑王权的神圣荣光。",
    firstPrinciples: [
      { principle: "荣光护佑王权", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-div",
    name: "魔鬼与巨怪",
    aliases: [],
    workId: "persian-myth",
    domain: "beast",
    summary: "作为英雄宿敌的黑暗巨怪。",
    description: "作为英雄宿敌的黑暗巨怪。",
    firstPrinciples: [
      { principle: "黑暗巨怪宿敌", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-bookking",
    name: "王书史诗",
    aliases: [],
    workId: "persian-myth",
    domain: "artifact",
    summary: "菲尔多西以善恶神对立串起的史诗。",
    description: "菲尔多西以善恶神对立串起的史诗。",
    firstPrinciples: [
      { principle: "史诗串史", verdict: "achieved", note: "历史文献" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-zal",
    name: "白发的扎尔",
    aliases: [],
    workId: "persian-myth",
    domain: "lore",
    summary: "被弃、由神鸟养大的英雄之父。",
    description: "被弃、由神鸟养大的英雄之父。",
    firstPrinciples: [
      { principle: "神鸟养育人", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-seven",
    name: "七大试炼",
    aliases: [],
    workId: "persian-myth",
    domain: "realm",
    summary: "王子为娶公主历七关试炼。",
    description: "王子为娶公主历七关试炼。",
    firstPrinciples: [
      { principle: "系列试炼求偶", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-jamshid",
    name: "贾姆希德王",
    aliases: [],
    workId: "persian-myth",
    domain: "realm",
    summary: "以圣杯治国、终因傲慢坠败的王。",
    description: "以圣杯治国、终因傲慢坠败的王。",
    firstPrinciples: [
      { principle: "圣杯治国母题", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-tari",
    name: "战象与骑兵",
    aliases: [],
    workId: "persian-myth",
    domain: "realm",
    summary: "以战象骑兵作战的古代军制。",
    description: "以战象骑兵作战的古代军制。",
    firstPrinciples: [
      { principle: "战象骑兵军制", verdict: "achieved", note: "史实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pm2-afrasiab",
    name: "敌王入侵",
    aliases: [],
    workId: "persian-myth",
    domain: "realm",
    summary: "图兰王侵扰波斯、英雄御敌的冲突。",
    description: "图兰王侵扰波斯、英雄御敌的冲突。",
    firstPrinciples: [
      { principle: "邻邦入侵史诗战", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mb-stormbringer",
    name: "混沌之剑",
    aliases: [],
    workId: "melnibone",
    domain: "artifact",
    summary: "以意志吞噬灵魂、操控命运的魔剑。",
    description: "以意志吞噬灵魂、操控命运的魔剑。",
    firstPrinciples: [
      { principle: "魔剑吸魂控命", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-race",
    name: "苍白血统",
    aliases: [],
    workId: "melnibone",
    domain: "beast",
    summary: "金瞳、天生驭法的衰败帝国种族。",
    description: "金瞳、天生驭法的衰败帝国种族。",
    firstPrinciples: [
      { principle: "种族天生驭法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-chaos",
    name: "混沌魔法",
    aliases: [],
    workId: "melnibone",
    domain: "magic",
    summary: "以混沌能量改写因果的法术。",
    description: "以混沌能量改写因果的法术。",
    firstPrinciples: [
      { principle: "混沌改因果", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-dimension",
    name: "维度穿行",
    aliases: [],
    workId: "melnibone",
    domain: "realm",
    summary: "在相邻维度间穿梭的实践。",
    description: "在相邻维度间穿梭的实践。",
    firstPrinciples: [
      { principle: "跨维度穿梭", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-soul",
    name: "饮魂禁锢",
    aliases: [],
    workId: "melnibone",
    domain: "lore",
    summary: "以法器抽取并禁锢灵魂。",
    description: "以法器抽取并禁锢灵魂。",
    firstPrinciples: [
      { principle: "抽取禁锢灵魂", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-summon",
    name: "召唤异界造物",
    aliases: [],
    workId: "melnibone",
    domain: "beast",
    summary: "召来异界生物为奴仆。",
    description: "召来异界生物为奴仆。",
    firstPrinciples: [
      { principle: "跨界召役生物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-sinking",
    name: "沉没之城",
    aliases: [],
    workId: "melnibone",
    domain: "realm",
    summary: "随帝国衰败沉入海的首都。",
    description: "随帝国衰败沉入海的首都。",
    firstPrinciples: [
      { principle: "城市沉海", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-curse",
    name: "血脉诅咒",
    aliases: [],
    workId: "melnibone",
    domain: "lore",
    summary: "王朝血脉被诅咒世代缠结。",
    description: "王朝血脉被诅咒世代缠结。",
    firstPrinciples: [
      { principle: "诅咒跨代生效", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-dragon8",
    name: "役使巨龙",
    aliases: [],
    workId: "melnibone",
    domain: "beast",
    summary: "被术士役使的远古龙族。",
    description: "被术士役使的远古龙族。",
    firstPrinciples: [
      { principle: "龙被役使", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-vision",
    name: "宿命幻象",
    aliases: [],
    workId: "melnibone",
    domain: "lore",
    summary: "以梦与幻象预见的个人宿命。",
    description: "以梦与幻象预见的个人宿命。",
    firstPrinciples: [
      { principle: "幻象预示宿命", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cn-atlantean",
    name: "亚特兰蒂斯钢",
    aliases: [],
    workId: "conan",
    domain: "artifact",
    summary: "失落文明所铸、轻坚异常的剑。",
    description: "失落文明所铸、轻坚异常的剑。",
    firstPrinciples: [
      { principle: "失落冶金轻坚", verdict: "breakthrough", note: "材料可近似不可复现" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "cn-serpent",
    name: "蛇发女妖",
    aliases: [],
    workId: "conan",
    domain: "beast",
    summary: "目光所及即石化活人的妖物。",
    description: "目光所及即石化活人的妖物。",
    firstPrinciples: [
      { principle: "目光石化活人", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cn-necro",
    name: "巫王死灵术",
    aliases: [],
    workId: "conan",
    domain: "lore",
    summary: "借死灵与古神之力操纵国运。",
    description: "借死灵与古神之力操纵国运。",
    firstPrinciples: [
      { principle: "死灵改国运", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cn-barbarian",
    name: "蛮族武力",
    aliases: [],
    workId: "conan",
    domain: "beast",
    summary: "以蛮力与求生意志立身的战士。",
    description: "以蛮力与求生意志立身的战士。",
    firstPrinciples: [
      { principle: "蛮力求生", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cn-tomb",
    name: "探墓掠宝",
    aliases: [],
    workId: "conan",
    domain: "realm",
    summary: "探古墓、掠神物的冒险母题。",
    description: "探古墓、掠神物的冒险母题。",
    firstPrinciples: [
      { principle: "探墓掠宝", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cn-sorcery",
    name: "巫术呼风",
    aliases: [],
    workId: "conan",
    domain: "magic",
    summary: "以咒语召风唤雨的巫术。",
    description: "以咒语召风唤雨的巫术。",
    firstPrinciples: [
      { principle: "咒语控天气", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cn-snakegod",
    name: "巨蛇神",
    aliases: [],
    workId: "conan",
    domain: "beast",
    summary: "被崇拜、栖庙的巨蛇神。",
    description: "被崇拜、栖庙的巨蛇神。",
    firstPrinciples: [
      { principle: "巨型蛇神", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cn-ruins",
    name: "文明轮回",
    aliases: [],
    workId: "conan",
    domain: "realm",
    summary: "王国兴衰轮转、废墟遍及的设定。",
    description: "王国兴衰轮转、废墟遍及的设定。",
    firstPrinciples: [
      { principle: "文明周期兴衰", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cn-witch",
    name: "变幻女巫",
    aliases: [],
    workId: "conan",
    domain: "magic",
    summary: "以变形与蛊惑施法的女巫。",
    description: "以变形与蛊惑施法的女巫。",
    firstPrinciples: [
      { principle: "变形蛊惑", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cn-cimmeria",
    name: "辛梅里安冰原",
    aliases: [],
    workId: "conan",
    domain: "realm",
    summary: "柯南出身的严酷北方故土。",
    description: "柯南出身的严酷北方故土。",
    firstPrinciples: [
      { principle: "北方蛮荒故土", verdict: "achieved", note: "作为地理设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-nehwon",
    name: "纽沃恩双城",
    aliases: [],
    workId: "fafhrd",
    domain: "realm",
    summary: "暗巷与魔法并存的两大码头都市。",
    description: "暗巷与魔法并存的两大码头都市。",
    firstPrinciples: [
      { principle: "都市奇幻舞台", verdict: "achieved", note: "作为地理设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-duo",
    name: "刀客与法师",
    aliases: [],
    workId: "fafhrd",
    domain: "realm",
    summary: "剑客与法师搭档混迹街头的设定。",
    description: "剑客与法师搭档混迹街头的设定。",
    firstPrinciples: [
      { principle: "冒险搭档母题", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-contract",
    name: "契约魔法",
    aliases: [],
    workId: "fafhrd",
    domain: "magic",
    summary: "以银币与符号交易取得的法术。",
    description: "以银币与符号交易取得的法术。",
    firstPrinciples: [
      { principle: "法术以交易取得", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-ratmage",
    name: "鼠法师",
    aliases: [],
    workId: "fafhrd",
    domain: "magic",
    summary: "化身为鼠、藏身暗处的法师。",
    description: "化身为鼠、藏身暗处的法师。",
    firstPrinciples: [
      { principle: "人变鼠法师", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-undead",
    name: "巷陌亡灵",
    aliases: [],
    workId: "fafhrd",
    domain: "lore",
    summary: "穿行街巷的鬼影与亡灵。",
    description: "穿行街巷的鬼影与亡灵。",
    firstPrinciples: [
      { principle: "亡灵穿行", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-seamonster",
    name: "海域巨怪",
    aliases: [],
    workId: "fafhrd",
    domain: "beast",
    summary: "航线上的海怪与巨兽。",
    description: "航线上的海怪与巨兽。",
    firstPrinciples: [
      { principle: "海怪母题", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-witch",
    name: "情欲女巫",
    aliases: [],
    workId: "fafhrd",
    domain: "magic",
    summary: "以魅惑与咒法操控人心的女巫。",
    description: "以魅惑与咒法操控人心的女巫。",
    firstPrinciples: [
      { principle: "魅惑操控", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ff-gods",
    name: "冷漠众神",
    aliases: [],
    workId: "fafhrd",
    domain: "lore",
    summary: "互竞、漠视凡人的城市神祇。",
    description: "互竞、漠视凡人的城市神祇。",
    firstPrinciples: [
      { principle: "神祇冷漠互竞", verdict: "achieved", note: "作为神话结构" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-sword",
    name: "浪人剑酒",
    aliases: [],
    workId: "fafhrd",
    domain: "artifact",
    summary: "浪人以剑与酒为伴的生涯。",
    description: "浪人以剑与酒为伴的生涯。",
    firstPrinciples: [
      { principle: "剑酒生涯母题", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ff-shadowrealm",
    name: "影界",
    aliases: [],
    workId: "fafhrd",
    domain: "realm",
    summary: "与现世交叠、可潜行的影子维度。",
    description: "与现世交叠、可潜行的影子维度。",
    firstPrinciples: [
      { principle: "影界潜行", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-true",
    name: "安柏真界",
    aliases: [],
    workId: "amber",
    domain: "realm",
    summary: "唯一真实的世界，其余皆其投射的影子。",
    description: "唯一真实的世界，其余皆其投射的影子。",
    firstPrinciples: [
      { principle: "唯一真实余皆影", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-shadow",
    name: "影子行走",
    aliases: [],
    workId: "amber",
    domain: "realm",
    summary: "以心念把想象投影为可游的世界。",
    description: "以心念把想象投影为可游的世界。",
    firstPrinciples: [
      { principle: "意念投影现实", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-pattern",
    name: "创世纹章",
    aliases: [],
    workId: "amber",
    domain: "artifact",
    summary: "承载创世本原、走通即得力的纹章。",
    description: "承载创世本原、走通即得力的纹章。",
    firstPrinciples: [
      { principle: "走通纹章得力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-trump",
    name: "特兰普牌",
    aliases: [],
    workId: "amber",
    domain: "artifact",
    summary: "可瞬通彼此、跨界的牌。",
    description: "可瞬通彼此、跨界的牌。",
    firstPrinciples: [
      { principle: "牌跨距连通", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-chaos",
    name: "混沌之厅",
    aliases: [],
    workId: "amber",
    domain: "realm",
    summary: "与安柏对立、法则扭曲的混沌维度。",
    description: "与安柏对立、法则扭曲的混沌维度。",
    firstPrinciples: [
      { principle: "对立混沌维度", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-blood",
    name: "王族血脉",
    aliases: [],
    workId: "amber",
    domain: "lore",
    summary: "王族以血脉连通安柏与影子。",
    description: "王族以血脉连通安柏与影子。",
    firstPrinciples: [
      { principle: "血脉连通本原", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-mirror",
    name: "镜面穿渡",
    aliases: [],
    workId: "amber",
    domain: "realm",
    summary: "以镜面穿渡界域的边界。",
    description: "以镜面穿渡界域的边界。",
    firstPrinciples: [
      { principle: "镜面跨界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-dragon9",
    name: "役使巨龙",
    aliases: [],
    workId: "amber",
    domain: "beast",
    summary: "可被王族役使的龙。",
    description: "可被王族役使的龙。",
    firstPrinciples: [
      { principle: "龙被役使", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "am-unicorn",
    name: "独角神兽",
    aliases: [],
    workId: "amber",
    domain: "beast",
    summary: "象征纯洁、可遇不可求的独角兽。",
    description: "象征纯洁、可遇不可求的独角兽。",
    firstPrinciples: [
      { principle: "独角兽象征", verdict: "achieved", note: "作为神话" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "am-death",
    name: "穿界死神",
    aliases: [],
    workId: "amber",
    domain: "lore",
    summary: "穿行诸界、按命收人的死神。",
    description: "穿行诸界、按命收人的死神。",
    firstPrinciples: [
      { principle: "死神穿界", verdict: "achieved", note: "作为拟人设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pr-cauldron",
    name: "黑神锅",
    aliases: [],
    workId: "prydain",
    domain: "artifact",
    summary: "吞食并囚禁亡魂、不可毁的锅。",
    description: "吞食并囚禁亡魂、不可毁的锅。",
    firstPrinciples: [
      { principle: "锅囚禁吞噬魂", verdict: "violated", note: "仅为传说" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-oraclepig",
    name: "预言猪",
    aliases: [],
    workId: "prydain",
    domain: "lore",
    summary: "以猪读出隐秘未来的先知兽。",
    description: "以猪读出隐秘未来的先知兽。",
    firstPrinciples: [
      { principle: "兽读隐秘未来", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-lord",
    name: "黑暗君主",
    aliases: [],
    workId: "prydain",
    domain: "lore",
    summary: "以伟力与陷阱守卫疆域的魔君。",
    description: "以伟力与陷阱守卫疆域的魔君。",
    firstPrinciples: [
      { principle: "魔君掌暗域", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-dyrnwyn",
    name: "火之剑",
    aliases: [],
    workId: "prydain",
    domain: "artifact",
    summary: "拔出即燃、克制邪恶的剑。",
    description: "拔出即燃、克制邪恶的剑。",
    firstPrinciples: [
      { principle: "拔剑自燃", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-weaver",
    name: "命运织女",
    aliases: [],
    workId: "prydain",
    domain: "realm",
    summary: "以纺线裁定命运的魔女。",
    description: "以纺线裁定命运的魔女。",
    firstPrinciples: [
      { principle: "编织裁定命运", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-fae",
    name: "仙族与矮人",
    aliases: [],
    workId: "prydain",
    domain: "beast",
    summary: "协助主角的仙族与矮人族群。",
    description: "协助主角的仙族与矮人族群。",
    firstPrinciples: [
      { principle: "仙矮助主角", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pr-swine",
    name: "通灵猪群",
    aliases: [],
    workId: "prydain",
    domain: "beast",
    summary: "通灵、载运的魔法猪群。",
    description: "通灵、载运的魔法猪群。",
    firstPrinciples: [
      { principle: "猪群通灵载运", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-witches",
    name: "三巫试炼",
    aliases: [],
    workId: "prydain",
    domain: "magic",
    summary: "以咒与变形阻挠英雄成长的女巫。",
    description: "以咒与变形阻挠英雄成长的女巫。",
    firstPrinciples: [
      { principle: "女巫施试炼", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-kingdoms",
    name: "诸国分治",
    aliases: [],
    workId: "prydain",
    domain: "realm",
    summary: "普莱戴恩分治的人类诸国。",
    description: "普莱戴恩分治的人类诸国。",
    firstPrinciples: [
      { principle: "诸国分治", verdict: "achieved", note: "作为地理设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pr-dragon10",
    name: "守财巨龙",
    aliases: [],
    workId: "prydain",
    domain: "beast",
    summary: "守宝藏、可被智取的巨龙。",
    description: "守宝藏、可被智取的巨龙。",
    firstPrinciples: [
      { principle: "巨龙守财", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-talent",
    name: "专属魔法",
    aliases: [],
    workId: "xanth",
    domain: "magic",
    summary: "每人天生持一种魔法的土地。",
    description: "每人天生持一种魔法的土地。",
    firstPrinciples: [
      { principle: "人人生而施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-pun",
    name: "双关魔法",
    aliases: [],
    workId: "xanth",
    domain: "magic",
    summary: "以 pun 触发、荒诞生效的咒法。",
    description: "以 pun 触发、荒诞生效的咒法。",
    firstPrinciples: [
      { principle: "语言玩笑生效", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-gapdragon",
    name: "裂隙龙",
    aliases: [],
    workId: "xanth",
    domain: "beast",
    summary: "栖于地理裂隙、吞食冒险者的龙。",
    description: "栖于地理裂隙、吞食冒险者的龙。",
    firstPrinciples: [
      { principle: "龙栖裂隙", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-zilch",
    name: "魔力流失",
    aliases: [],
    workId: "xanth",
    domain: "lore",
    summary: "魔力会随使用被抽离的设定。",
    description: "魔力会随使用被抽离的设定。",
    firstPrinciples: [
      { principle: "魔力可被抽离", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-centaur",
    name: "半人马",
    aliases: [],
    workId: "xanth",
    domain: "beast",
    summary: "跨居于人兽之间的混种生灵。",
    description: "跨居于人兽之间的混种生灵。",
    firstPrinciples: [
      { principle: "人兽混种", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-curse2",
    name: "诅咒与解咒",
    aliases: [],
    workId: "xanth",
    domain: "lore",
    summary: "以诅咒相困、再以巧妙解咒的母题。",
    description: "以诅咒相困、再以巧妙解咒的母题。",
    firstPrinciples: [
      { principle: "诅咒可巧解", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-talking",
    name: "会说话的植物",
    aliases: [],
    workId: "xanth",
    domain: "beast",
    summary: "树、花等具人智、可交谈的植物。",
    description: "树、花等具人智、可交谈的植物。",
    firstPrinciples: [
      { principle: "植物具人智", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-magicdemon",
    name: "魔法恶魔",
    aliases: [],
    workId: "xanth",
    domain: "beast",
    summary: "可被收服、代为施法的魔仆。",
    description: "可被收服、代为施法的魔仆。",
    firstPrinciples: [
      { principle: "魔仆代施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-nightmare",
    name: "梦魇坐骑",
    aliases: [],
    workId: "xanth",
    domain: "beast",
    summary: "以恐惧为食、可被骑乘的梦兽。",
    description: "以恐惧为食、可被骑乘的梦兽。",
    firstPrinciples: [
      { principle: "梦兽可骑乘", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xa-muse",
    name: "谬思灵感",
    aliases: [],
    workId: "xanth",
    domain: "lore",
    summary: "以灵感直接催生艺术与法术。",
    description: "以灵感直接催生艺术与法术。",
    firstPrinciples: [
      { principle: "灵感催生创造", verdict: "achieved", note: "作为隐喻" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dl-lance",
    name: "龙枪",
    aliases: [],
    workId: "dragonlance",
    domain: "artifact",
    summary: "诸族协力铸成、克龙的希望之枪。",
    description: "诸族协力铸成、克龙的希望之枪。",
    firstPrinciples: [
      { principle: "众族合铸圣器", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dl-tower",
    name: "法师塔",
    aliases: [],
    workId: "dragonlance",
    domain: "magic",
    summary: "高悬秘法的魔法师塔楼。",
    description: "高悬秘法的魔法师塔楼。",
    firstPrinciples: [
      { principle: "秘法塔楼", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dl-goodgod",
    name: "神祇离去与回归",
    aliases: [],
    workId: "dragonlance",
    domain: "lore",
    summary: "诸神离弃又重返、掌凡人命运。",
    description: "诸神离弃又重返、掌凡人命运。",
    firstPrinciples: [
      { principle: "神赐法又遗弃", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dl-true-name",
    name: "真名咒法",
    aliases: [],
    workId: "dragonlance",
    domain: "magic",
    summary: "呼真名束缚元素与龙。",
    description: "呼真名束缚元素与龙。",
    firstPrinciples: [
      { principle: "真名束缚元素", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dl-dragon-orb",
    name: "龙珠",
    aliases: [],
    workId: "dragonlance",
    domain: "artifact",
    summary: "封印并操控巨龙的水晶球。",
    description: "封印并操控巨龙的水晶球。",
    firstPrinciples: [
      { principle: "晶球控龙", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dl-kender",
    name: "肯德矮人",
    aliases: [],
    workId: "dragonlance",
    domain: "beast",
    summary: "好奇无畏、爱小偷小摸的族类。",
    description: "好奇无畏、爱小偷小摸的族类。",
    firstPrinciples: [
      { principle: "奇特小族", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dl-dragon12",
    name: "五彩巨龙",
    aliases: [],
    workId: "dragonlance",
    domain: "beast",
    summary: "善龙与恶龙对立的龙族体系。",
    description: "善龙与恶龙对立的龙族体系。",
    firstPrinciples: [
      { principle: "龙族阵营对立", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dl-knight",
    name: "索兰尼亚骑士",
    aliases: [],
    workId: "dragonlance",
    domain: "realm",
    summary: "持荣誉准则、以龙枪抗恶的骑士团。",
    description: "持荣誉准则、以龙枪抗恶的骑士团。",
    firstPrinciples: [
      { principle: "骑士团抗恶", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dl-cleric",
    name: undefined,
    aliases: [],
    workId: "dragonlance",
    domain: "lore",
    summary: "以神术治愈与辅助的牧师。",
    description: "以神术治愈与辅助的牧师。",
    firstPrinciples: [
      { principle: "神术辅助", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dl-dwarf3",
    name: "山地矮人",
    aliases: [],
    workId: "dragonlance",
    domain: "artifact",
    summary: "采矿锻兵、守要塞的矮人。",
    description: "采矿锻兵、守要塞的矮人。",
    firstPrinciples: [
      { principle: "矮人采矿锻兵", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sh-elfstones",
    name: "精灵石",
    aliases: [],
    workId: "shannara",
    domain: "artifact",
    summary: "封印邪神、凭血脉启用的三石。",
    description: "封印邪神、凭血脉启用的三石。",
    firstPrinciples: [
      { principle: "石封邪神需血启", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sh-sword",
    name: "真理之剑",
    aliases: [],
    workId: "shannara",
    domain: "artifact",
    summary: "可抹除一切存在的禁忌之剑。",
    description: "可抹除一切存在的禁忌之剑。",
    firstPrinciples: [
      { principle: "剑抹除存在", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sh-druid",
    name: "德鲁伊守望",
    aliases: [],
    workId: "shannara",
    domain: "lore",
    summary: "以血脉传承、唤醒沉睡之力的德鲁伊。",
    description: "以血脉传承、唤醒沉睡之力的德鲁伊。",
    firstPrinciples: [
      { principle: "血脉唤醒力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sh-fourland",
    name: "四方之地",
    aliases: [],
    workId: "shannara",
    domain: "realm",
    summary: "大灾变后残存的人类诸国。",
    description: "大灾变后残存的人类诸国。",
    firstPrinciples: [
      { principle: "灾变后残存文明", verdict: "achieved", note: "作为地理设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sh-wishsong",
    name: "魔音咒",
    aliases: [],
    workId: "shannara",
    domain: "magic",
    summary: "以声音塑形、攻防皆备的咒法。",
    description: "以声音塑形、攻防皆备的咒法。",
    firstPrinciples: [
      { principle: "声波塑能", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sh-demon3",
    name: "呼叫者",
    aliases: [],
    workId: "shannara",
    domain: "beast",
    summary: "以无形之力猎杀的异界造物。",
    description: "以无形之力猎杀的异界造物。",
    firstPrinciples: [
      { principle: "无形猎杀造物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sh-mutation",
    name: "变异兽",
    aliases: [],
    workId: "shannara",
    domain: "beast",
    summary: "灾变催生的畸变巨兽。",
    description: "灾变催生的畸变巨兽。",
    firstPrinciples: [
      { principle: "畸变巨兽", verdict: "breakthrough", note: "环境诱变可部分" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "sh-wraith",
    name: "亡灵将军",
    aliases: [],
    workId: "shannara",
    domain: "lore",
    summary: "以怨念不散、率亡军的亡灵。",
    description: "以怨念不散、率亡军的亡灵。",
    firstPrinciples: [
      { principle: "怨念驱亡军", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sh-knight2",
    name: "圣言骑士",
    aliases: [],
    workId: "shannara",
    domain: "realm",
    summary: "以誓言与剑守护秩序的骑士。",
    description: "以誓言与剑守护秩序的骑士。",
    firstPrinciples: [
      { principle: "誓剑守序", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sh-tree2",
    name: "世界之树",
    aliases: [],
    workId: "shannara",
    domain: "realm",
    summary: "连通诸界的古老灵树。",
    description: "连通诸界的古老灵树。",
    firstPrinciples: [
      { principle: "灵树连通界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-wildmagic",
    name: "野魔法",
    aliases: [],
    workId: "covenant",
    domain: "magic",
    summary: "可重写信实、却侵蚀使用者的力量。",
    description: "可重写信实、却侵蚀使用者的力量。",
    firstPrinciples: [
      { principle: "野魔法改信蚀神智", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-staff",
    name: "律法之杖",
    aliases: [],
    workId: "covenant",
    domain: "artifact",
    summary: "以杖维系大地的法则与誓言。",
    description: "以杖维系大地的法则与誓言。",
    firstPrinciples: [
      { principle: "杖维法则", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-giant",
    name: "巨人族",
    aliases: [],
    workId: "covenant",
    domain: "beast",
    summary: "古老、力大、渐稀的巨人种族。",
    description: "古老、力大、渐稀的巨人种族。",
    firstPrinciples: [
      { principle: "古老巨种族", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cv-lurker",
    name: "潜伏者",
    aliases: [],
    workId: "covenant",
    domain: "beast",
    summary: "栖于深渊、以诱捕为生的造物。",
    description: "栖于深渊、以诱捕为生的造物。",
    firstPrinciples: [
      { principle: "深渊诱捕造物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-despiser",
    name: "厌弃者",
    aliases: [],
    workId: "covenant",
    domain: "lore",
    summary: "以腐蚀与谎言扭曲大地的敌。",
    description: "以腐蚀与谎言扭曲大地的敌。",
    firstPrinciples: [
      { principle: "敌扭曲大地", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-bloodguard",
    name: "血卫",
    aliases: [],
    workId: "covenant",
    domain: "realm",
    summary: "以血誓护卫、失忆续任的卫队。",
    description: "以血誓护卫、失忆续任的卫队。",
    firstPrinciples: [
      { principle: "血誓卫队", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-earthpower",
    name: undefined,
    aliases: [],
    workId: "covenant",
    domain: "lore",
    summary: "大地本身的法则与意志。",
    description: "大地本身的法则与意志。",
    firstPrinciples: [
      { principle: "大地有法则意志", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-ring2",
    name: "白金之环",
    aliases: [],
    workId: "covenant",
    domain: "artifact",
    summary: "封印或释放野魔法的环。",
    description: "封印或释放野魔法的环。",
    firstPrinciples: [
      { principle: "环封野魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-unbeliever",
    name: "不信者之力",
    aliases: [],
    workId: "covenant",
    domain: "lore",
    summary: "以不信之心握力、每用付代价。",
    description: "以不信之心握力、每用付代价。",
    firstPrinciples: [
      { principle: "不信握力却付代", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cv-ceremony",
    name: "召魔仪式",
    aliases: [],
    workId: "covenant",
    domain: "magic",
    summary: "以仪式召来并约束敌方造物。",
    description: "以仪式召来并约束敌方造物。",
    firstPrinciples: [
      { principle: "仪式召约束敌", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ly-pelleas",
    name: "魔法即表演",
    aliases: [],
    workId: "lyonesse",
    domain: "magic",
    summary: "以严格仪式与诗行塑能的魔法。",
    description: "以严格仪式与诗行塑能的魔法。",
    firstPrinciples: [
      { principle: "仪式诗行施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ly-sundering",
    name: "大陆沉没",
    aliases: [],
    workId: "lyonesse",
    domain: "realm",
    summary: "亚特兰蒂斯式大陆终沉海底。",
    description: "亚特兰蒂斯式大陆终沉海底。",
    firstPrinciples: [
      { principle: "大陆沉海", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ly-tavolin",
    name: "衰败宫廷",
    aliases: [],
    workId: "lyonesse",
    domain: "realm",
    summary: "魔法凋零、贵族争权的宫廷。",
    description: "魔法凋零、贵族争权的宫廷。",
    firstPrinciples: [
      { principle: "魔法凋零宫廷", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ly-prince",
    name: "流亡王子",
    aliases: [],
    workId: "lyonesse",
    domain: "realm",
    summary: "寻回失传技艺的流亡王子。",
    description: "寻回失传技艺的流亡王子。",
    firstPrinciples: [
      { principle: "王子寻技", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ly-sword2",
    name: "仪式之剑",
    aliases: [],
    workId: "lyonesse",
    domain: "artifact",
    summary: "以仪式与血缘认主的剑。",
    description: "以仪式与血缘认主的剑。",
    firstPrinciples: [
      { principle: "剑认主需仪式", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ly-witch4",
    name: "女巫导师",
    aliases: [],
    workId: "lyonesse",
    domain: "magic",
    summary: "以严苛教学引徒入魔法的女巫。",
    description: "以严苛教学引徒入魔法的女巫。",
    firstPrinciples: [
      { principle: "女巫授魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ly-sea",
    name: "危险航海",
    aliases: [],
    workId: "lyonesse",
    domain: "realm",
    summary: "以舟穿行暗礁与魔障的远航。",
    description: "以舟穿行暗礁与魔障的远航。",
    firstPrinciples: [
      { principle: "暗礁魔障远航", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ly-dwarf4",
    name: "隐遁矮人",
    aliases: [],
    workId: "lyonesse",
    domain: "artifact",
    summary: "精于巧械、避世的矮人。",
    description: "精于巧械、避世的矮人。",
    firstPrinciples: [
      { principle: "巧械矮人", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ly-knight3",
    name: "圆桌遗风",
    aliases: [],
    workId: "lyonesse",
    domain: "realm",
    summary: "以骑士比武与荣誉为尚的遗风。",
    description: "以骑士比武与荣誉为尚的遗风。",
    firstPrinciples: [
      { principle: "骑士比武文化", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ly-riddle",
    name: "谜题与试炼",
    aliases: [],
    workId: "lyonesse",
    domain: "lore",
    summary: "以谜题、试炼抉择命运的母题。",
    description: "以谜题、试炼抉择命运的母题。",
    firstPrinciples: [
      { principle: "谜题抉命运", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lu-redbull",
    name: "红牛驱兽",
    aliases: [],
    workId: "last-unicorn",
    domain: "beast",
    summary: "以红牛把独角兽逐离森林。",
    description: "以红牛把独角兽逐离森林。",
    firstPrinciples: [
      { principle: "红牛驱独角兽", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lu-immortal",
    name: "不朽之兽",
    aliases: [],
    workId: "last-unicorn",
    domain: "beast",
    summary: "独角兽因仅存而不识死亡。",
    description: "独角兽因仅存而不识死亡。",
    firstPrinciples: [
      { principle: "兽因独存不知死", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lu-witch5",
    name: "女巫魔法",
    aliases: [],
    workId: "last-unicorn",
    domain: "magic",
    summary: "以叙事本身维持的魔法。",
    description: "以叙事本身维持的魔法。",
    firstPrinciples: [
      { principle: "叙事维持魔法", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lu-king",
    name: "追猎之王",
    aliases: [],
    workId: "last-unicorn",
    domain: "realm",
    summary: "囚禁独角兽、求永生的王。",
    description: "囚禁独角兽、求永生的王。",
    firstPrinciples: [
      { principle: "王囚兽求永生", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lu-bull",
    name: "红牛真身",
    aliases: [],
    workId: "last-unicorn",
    domain: "beast",
    summary: "红牛实为被咒的同类。",
    description: "红牛实为被咒的同类。",
    firstPrinciples: [
      { principle: "牛为被咒同类", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lu-princess",
    name: "化形公主",
    aliases: [],
    workId: "last-unicorn",
    domain: "beast",
    summary: "独角兽化人为伴、终悟永恒。",
    description: "独角兽化人为伴、终悟永恒。",
    firstPrinciples: [
      { principle: "兽化人悟永恒", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lu-cat",
    name: "会说话的猫",
    aliases: [],
    workId: "last-unicorn",
    domain: "beast",
    summary: "讥讽又忠诚、通人性的猫。",
    description: "讥讽又忠诚、通人性的猫。",
    firstPrinciples: [
      { principle: "猫具人智", verdict: "achieved", note: "作为童话" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lu-schmendrick",
    name: "笨拙魔法师",
    aliases: [],
    workId: "last-unicorn",
    domain: "magic",
    summary: "法术常出错、却关键救场的法师。",
    description: "法术常出错、却关键救场的法师。",
    firstPrinciples: [
      { principle: "法师法常误", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lu-tree3",
    name: "森林精灵",
    aliases: [],
    workId: "last-unicorn",
    domain: "lore",
    summary: "栖于森林、渐被遗忘的精灵。",
    description: "栖于森林、渐被遗忘的精灵。",
    firstPrinciples: [
      { principle: "森林精灵遗忘", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lu-flower",
    name: "永恒之花",
    aliases: [],
    workId: "last-unicorn",
    domain: "lore",
    summary: "以花标记时间与重逢的母题。",
    description: "以花标记时间与重逢的母题。",
    firstPrinciples: [
      { principle: "花标记重逢", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ne-auruyn",
    name: "童女皇",
    aliases: [],
    workId: "neverending",
    domain: "lore",
    summary: "以名与愿掌幻想国的女皇。",
    description: "以名与愿掌幻想国的女皇。",
    firstPrinciples: [
      { principle: "名与愿掌界", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ne-wish",
    name: "许愿吞名",
    aliases: [],
    workId: "neverending",
    domain: "lore",
    summary: "每许一愿便失一段记忆与名。",
    description: "每许一愿便失一段记忆与名。",
    firstPrinciples: [
      { principle: "许愿失记忆名", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ne-nothing",
    name: "虚空虚无",
    aliases: [],
    workId: "neverending",
    domain: "lore",
    summary: "吞噬一切意义与名字的空白。",
    description: "吞噬一切意义与名字的空白。",
    firstPrinciples: [
      { principle: "空白噬意义", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ne-reading",
    name: "阅读穿界",
    aliases: [],
    workId: "neverending",
    domain: "realm",
    summary: "男孩读入书、坠入幻想国。",
    description: "男孩读入书、坠入幻想国。",
    firstPrinciples: [
      { principle: "阅读穿入书中界", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ne-luckdragon",
    name: "luckdragon",
    aliases: [],
    workId: "neverending",
    domain: "beast",
    summary: "极幸运、助主角脱困的龙。",
    description: "极幸运、助主角脱困的龙。",
    firstPrinciples: [
      { principle: "龙带极幸运", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ne-nighthob",
    name: "夜林小精",
    aliases: [],
    workId: "neverending",
    domain: "beast",
    summary: "栖夜林、引路亦迷路的精灵。",
    description: "栖夜林、引路亦迷路的精灵。",
    firstPrinciples: [
      { principle: "夜林精灵", verdict: "achieved", note: "作为童话" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ne-mori",
    name: "象牙塔",
    aliases: [],
    workId: "neverending",
    domain: "artifact",
    summary: "藏卷与导师、守护知识的塔。",
    description: "藏卷与导师、守护知识的塔。",
    firstPrinciples: [
      { principle: "知识塔", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ne-threewishes",
    name: "三愿限制",
    aliases: [],
    workId: "neverending",
    domain: "lore",
    summary: "以三愿为界的许愿规则。",
    description: "以三愿为界的许愿规则。",
    firstPrinciples: [
      { principle: "三愿为界", verdict: "achieved", note: "作为童话母题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ne-fluff",
    name: "毛绒兽",
    aliases: [],
    workId: "neverending",
    domain: "beast",
    summary: "象征纯真、可被赠予的造物。",
    description: "象征纯真、可被赠予的造物。",
    firstPrinciples: [
      { principle: "赠予纯真造物", verdict: "achieved", note: "作为隐喻" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ne-bastian",
    name: "替身男孩",
    aliases: [],
    workId: "neverending",
    domain: "lore",
    summary: "以自身记忆补完故事的读者。",
    description: "以自身记忆补完故事的读者。",
    firstPrinciples: [
      { principle: "读者补完故事", verdict: "achieved", note: "作为元叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "oz-silver",
    name: "银鞋跨洲",
    aliases: [],
    workId: "oz",
    domain: "realm",
    summary: "一步跨洲、无视距离的银鞋。",
    description: "一步跨洲、无视距离的银鞋。",
    firstPrinciples: [
      { principle: "一步跨洲", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "oz-yellowbrick",
    name: "黄砖路",
    aliases: [],
    workId: "oz",
    domain: "realm",
    summary: "通往大巫师的标识之路。",
    description: "通往大巫师的标识之路。",
    firstPrinciples: [
      { principle: "路标指目标", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "oz-witch6",
    name: "东西女巫",
    aliases: [],
    workId: "oz",
    domain: "magic",
    summary: "分别以善与恶掌东西的国巫。",
    description: "分别以善与恶掌东西的国巫。",
    firstPrinciples: [
      { principle: "女巫分善恶", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "oz-balloon",
    name: "逃生气球",
    aliases: [],
    workId: "oz",
    domain: "realm",
    summary: "以气球脱离奥兹国的尝试。",
    description: "以气球脱离奥兹国的尝试。",
    firstPrinciples: [
      { principle: "气球升空", verdict: "achieved", note: "现实航空成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "oz-scarecrow",
    name: "稻草人求脑",
    aliases: [],
    workId: "oz",
    domain: "beast",
    summary: "以物补所缺、隐喻心性的母题。",
    description: "以物补所缺、隐喻心性的母题。",
    firstPrinciples: [
      { principle: "物补所缺", verdict: "achieved", note: "作为隐喻" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "oz-tin",
    name: "锡樵夫求心",
    aliases: [],
    workId: "oz",
    domain: "artifact",
    summary: "以锡身代血肉、求心的造物。",
    description: "以锡身代血肉、求心的造物。",
    firstPrinciples: [
      { principle: "锡身代血肉", verdict: "breakthrough", note: "机械体可近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "oz-lion",
    name: "懦狮求勇",
    aliases: [],
    workId: "oz",
    domain: "beast",
    summary: "以历险证勇气而非获勇的母题。",
    description: "以历险证勇气而非获勇的母题。",
    firstPrinciples: [
      { principle: "历险证勇", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "oz-goodwitch",
    name: "北国善巫",
    aliases: [],
    workId: "oz",
    domain: "magic",
    summary: "护佑主角、赐三吻的善巫。",
    description: "护佑主角、赐三吻的善巫。",
    firstPrinciples: [
      { principle: "善巫护佑", verdict: "violated", note: "仅为童话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "oz-emerald",
    name: "翡翠城",
    aliases: [],
    workId: "oz",
    domain: "realm",
    summary: "以绿滤镜营造的幻美王城。",
    description: "以绿滤镜营造的幻美王城。",
    firstPrinciples: [
      { principle: "滤镜造幻美", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "oz-wizard",
    name: "大巫师幻象",
    aliases: [],
    workId: "oz",
    domain: "lore",
    summary: "以机关伪装伟力的普通人。",
    description: "以机关伪装伟力的普通人。",
    firstPrinciples: [
      { principle: "机关伪装伟力", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "de-spell",
    name: "表演式施法",
    aliases: [],
    workId: "dying-earth",
    domain: "magic",
    summary: "以繁复手势与诗行发动魔法。",
    description: "以繁复手势与诗行发动魔法。",
    firstPrinciples: [
      { principle: "手势诗行施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "de-ghoul",
    name: "食尸鬼",
    aliases: [],
    workId: "dying-earth",
    domain: "beast",
    summary: "栖墓、食尸的卑劣造物。",
    description: "栖墓、食尸的卑劣造物。",
    firstPrinciples: [
      { principle: "食尸造物", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "de-pelgrane",
    name: "瓶封意识",
    aliases: [],
    workId: "dying-earth",
    domain: "lore",
    summary: "以瓶封入、寄居他身意识。",
    description: "以瓶封入、寄居他身意识。",
    firstPrinciples: [
      { principle: "意识封瓶寄身", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "de-sun",
    name: "将熄之阳",
    aliases: [],
    workId: "dying-earth",
    domain: "realm",
    summary: "太阳将熄、法术凋零的末世。",
    description: "太阳将熄、法术凋零的末世。",
    firstPrinciples: [
      { principle: "太阳将熄末世", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "de-magician",
    name: "侠盗法师",
    aliases: [],
    workId: "dying-earth",
    domain: "magic",
    summary: "争夺残卷、亦正亦邪的术士。",
    description: "争夺残卷、亦正亦邪的术士。",
    firstPrinciples: [
      { principle: "术士争残卷", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "de-travel",
    name: "异乡远行",
    aliases: [],
    workId: "dying-earth",
    domain: "realm",
    summary: "徒步穿越诡异、衰朽的大陆。",
    description: "徒步穿越诡异、衰朽的大陆。",
    firstPrinciples: [
      { principle: "衰朽大陆远行", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "de-enchant",
    name: "解咒交易",
    aliases: [],
    workId: "dying-earth",
    domain: "lore",
    summary: "以解咒为业的行当。",
    description: "以解咒为业的行当。",
    firstPrinciples: [
      { principle: "解咒行当", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "de-demon4",
    name: "异界访客",
    aliases: [],
    workId: "dying-earth",
    domain: "beast",
    summary: "自夹缝界误入的异界造物。",
    description: "自夹缝界误入的异界造物。",
    firstPrinciples: [
      { principle: "夹缝界造物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "de-prince",
    name: "流亡王子",
    aliases: [],
    workId: "dying-earth",
    domain: "realm",
    summary: "失国、以智脱困的王子。",
    description: "失国、以智脱困的王子。",
    firstPrinciples: [
      { principle: "失国智脱", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "de-deodand",
    name: "索偿之物",
    aliases: [],
    workId: "dying-earth",
    domain: "artifact",
    summary: "致人死、需赔偿主人的器物。",
    description: "致人死、需赔偿主人的器物。",
    firstPrinciples: [
      { principle: "器物索偿命", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "vi-twilight",
    name: "颓废魔法",
    aliases: [],
    workId: "viriconium",
    domain: "magic",
    summary: "魔法与颓废交织、渐失真的城。",
    description: "魔法与颓废交织、渐失真的城。",
    firstPrinciples: [
      { principle: "魔法渐失真", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "vi-afterlives",
    name: "余生异界",
    aliases: [],
    workId: "viriconium",
    domain: "realm",
    summary: "时间折叠、历史彼此覆盖的界。",
    description: "时间折叠、历史彼此覆盖的界。",
    firstPrinciples: [
      { principle: "时间折叠覆史", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "vi-aureate",
    name: "流金衰城",
    aliases: [],
    workId: "viriconium",
    domain: "realm",
    summary: "华美而衰朽、记忆不实的都市。",
    description: "华美而衰朽、记忆不实的都市。",
    firstPrinciples: [
      { principle: "华美衰城", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "vi-artist",
    name: "困顿艺术家",
    aliases: [],
    workId: "viriconium",
    domain: "realm",
    summary: "在巨城间挣扎求存的创作者。",
    description: "在巨城间挣扎求存的创作者。",
    firstPrinciples: [
      { principle: "艺术家挣扎", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "vi-sword3",
    name: "无名剑士",
    aliases: [],
    workId: "viriconium",
    domain: "artifact",
    summary: "以剑与运命周旋的浪客。",
    description: "以剑与运命周旋的浪客。",
    firstPrinciples: [
      { principle: "浪客以剑周旋", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "vi-mad",
    name: "疯狂王",
    aliases: [],
    workId: "viriconium",
    domain: "lore",
    summary: "以妄想重塑现实的君王。",
    description: "以妄想重塑现实的君王。",
    firstPrinciples: [
      { principle: "妄想重塑现实", verdict: "violated", note: "仅为隐喻" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "vi-familiar",
    name: "随侍精怪",
    aliases: [],
    workId: "viriconium",
    domain: "beast",
    summary: "附身或随行的低等精怪。",
    description: "附身或随行的低等精怪。",
    firstPrinciples: [
      { principle: "随侍精怪", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "vi-witch6",
    name: "垂暮女巫",
    aliases: [],
    workId: "viriconium",
    domain: "magic",
    summary: "以残存技法行术的末世女巫。",
    description: "以残存技法行术的末世女巫。",
    firstPrinciples: [
      { principle: "末世女巫", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "vi-monster",
    name: "街巷怪物",
    aliases: [],
    workId: "viriconium",
    domain: "beast",
    summary: "混迹废墟、变形的造物。",
    description: "混迹废墟、变形的造物。",
    firstPrinciples: [
      { principle: "废墟变形造物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "vi-title",
    name: "伪造贵族",
    aliases: [],
    workId: "viriconium",
    domain: "lore",
    summary: "以谎言攀附门第的骗子。",
    description: "以谎言攀附门第的骗子。",
    firstPrinciples: [
      { principle: "谎言攀门第", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-terminus",
    name: "终端之剑",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "artifact",
    summary: "以接触抹除物质与痛觉的剑。",
    description: "以接触抹除物质与痛觉的剑。",
    firstPrinciples: [
      { principle: "剑抹物质痛觉", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-newsun",
    name: "新太阳",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "lore",
    summary: "以神迹与科技难分的升阳。",
    description: "以神迹与科技难分的升阳。",
    firstPrinciples: [
      { principle: "神迹即科技", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-torturer",
    name: "行刑者",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "lore",
    summary: "掌刑、以剑渡人的行刑者阶。",
    description: "掌刑、以剑渡人的行刑者阶。",
    firstPrinciples: [
      { principle: "行刑者阶", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-claw",
    name: "阿尔吉砧爪",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "artifact",
    summary: "可破门、具异能的远古遗物。",
    description: "可破门、具异能的远古遗物。",
    firstPrinciples: [
      { principle: "异能遗物破门", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-giant2",
    name: "畸变巨人",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "beast",
    summary: "因辐射畸变、力大的巨人。",
    description: "因辐射畸变、力大的巨人。",
    firstPrinciples: [
      { principle: "辐射畸变巨人", verdict: "breakthrough", note: "畸变可部分" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-healer",
    name: "治愈近乎复活",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "lore",
    summary: "以术近乎复活、超出生理。",
    description: "以术近乎复活、超出生理。",
    firstPrinciples: [
      { principle: "近乎复活", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-asci",
    name: "古迹文明",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "realm",
    summary: "埋于地下的旧人类文明。",
    description: "埋于地下的旧人类文明。",
    firstPrinciples: [
      { principle: "旧文明埋地", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-beast",
    name: "异兽坐骑",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "beast",
    summary: "可被驯的异界兽与鸟。",
    description: "可被驯的异界兽与鸟。",
    firstPrinciples: [
      { principle: "异界兽可驯", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-philos",
    name: "哲学对话",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "lore",
    summary: "以对话揭示宿命与真相。",
    description: "以对话揭示宿命与真相。",
    firstPrinciples: [
      { principle: "对话揭真相", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-citadel",
    name: "末世要塞",
    aliases: [],
    workId: "book-of-new-sun",
    domain: "realm",
    summary: "以巨构守残存秩序的城。",
    description: "以巨构守残存秩序的城。",
    firstPrinciples: [
      { principle: "巨构守残序", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-gate",
    name: "封闭石堡",
    aliases: [],
    workId: "gormenghast",
    domain: "realm",
    summary: "城堡自成一宇宙、规则即现实。",
    description: "城堡自成一宇宙、规则即现实。",
    firstPrinciples: [
      { principle: "城堡自为宇宙", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-ritual",
    name: "繁文缛节",
    aliases: [],
    workId: "gormenghast",
    domain: "lore",
    summary: "礼仪即律法、定生死的规程。",
    description: "礼仪即律法、定生死的规程。",
    firstPrinciples: [
      { principle: "礼仪定生死", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-titus",
    name: "泰忒斯出走",
    aliases: [],
    workId: "gormenghast",
    domain: "realm",
    summary: "少年挣脱礼法、寻自由的母题。",
    description: "少年挣脱礼法、寻自由的母题。",
    firstPrinciples: [
      { principle: "挣脱礼法", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-castle",
    name: "巨构城堡",
    aliases: [],
    workId: "gormenghast",
    domain: "artifact",
    summary: "以无尽厅室与塔楼构成的石堡。",
    description: "以无尽厅室与塔楼构成的石堡。",
    firstPrinciples: [
      { principle: "无尽石构", verdict: "achieved", note: "建筑可设想" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-cook",
    name: "厨房政变",
    aliases: [],
    workId: "gormenghast",
    domain: "realm",
    summary: "以厨房为舞台的阴谋与叛乱。",
    description: "以厨房为舞台的阴谋与叛乱。",
    firstPrinciples: [
      { principle: "厨房阴谋", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-bird",
    name: "信使鸦",
    aliases: [],
    workId: "gormenghast",
    domain: "beast",
    summary: "以鸦群传讯、窥探的造物。",
    description: "以鸦群传讯、窥探的造物。",
    firstPrinciples: [
      { principle: "鸦群传讯", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-twins",
    name: "镜像双子",
    aliases: [],
    workId: "gormenghast",
    domain: "beast",
    summary: "以镜像互照、身份错乱的母题。",
    description: "以镜像互照、身份错乱的母题。",
    firstPrinciples: [
      { principle: "镜像错身份", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-mud",
    name: "沼泽野性",
    aliases: [],
    workId: "gormenghast",
    domain: "realm",
    summary: "城外沼地代表的原始自然。",
    description: "城外沼地代表的原始自然。",
    firstPrinciples: [
      { principle: "沼地原始自然", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-lady",
    name: "严厉女管家",
    aliases: [],
    workId: "gormenghast",
    domain: "lore",
    summary: "以铁腕维系礼法的女性。",
    description: "以铁腕维系礼法的女性。",
    firstPrinciples: [
      { principle: "铁腕维礼法", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gm-climax",
    name: "火焚终章",
    aliases: [],
    workId: "gormenghast",
    domain: "realm",
    summary: "以大火清算旧秩序的结局。",
    description: "以大火清算旧秩序的结局。",
    firstPrinciples: [
      { principle: "大火清算旧序", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-orb",
    name: "命定之石",
    aliases: [],
    workId: "belgariad",
    domain: "artifact",
    summary: "可塑创世之力、被窃的宝珠。",
    description: "可塑创世之力、被窃的宝珠。",
    firstPrinciples: [
      { principle: "石载创世力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-prophecy",
    name: "预言宿命",
    aliases: [],
    workId: "belgariad",
    domain: "lore",
    summary: "以意志塑造未来、近乎命定。",
    description: "以意志塑造未来、近乎命定。",
    firstPrinciples: [
      { principle: "预言塑未来", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-will",
    name: "意志之力",
    aliases: [],
    workId: "belgariad",
    domain: "magic",
    summary: "以纯粹意志驱动法术。",
    description: "以纯粹意志驱动法术。",
    firstPrinciples: [
      { principle: "意志驱法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-sorceress",
    name: "女巫议会",
    aliases: [],
    workId: "belgariad",
    domain: "magic",
    summary: "以巫术干预诸国的女巫。",
    description: "以巫术干预诸国的女巫。",
    firstPrinciples: [
      { principle: "女巫干政", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-knight4",
    name: "骑士团",
    aliases: [],
    workId: "belgariad",
    domain: "realm",
    summary: "以誓言与剑护卫的骑士。",
    description: "以誓言与剑护卫的骑士。",
    firstPrinciples: [
      { principle: "骑士护国", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-turtle",
    name: "龟岛秘教",
    aliases: [],
    workId: "belgariad",
    domain: "lore",
    summary: "以龟形岛藏秘教的势力。",
    description: "以龟形岛藏秘教的势力。",
    firstPrinciples: [
      { principle: "龟岛藏秘教", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-dryad",
    name: "树精",
    aliases: [],
    workId: "belgariad",
    domain: "beast",
    summary: "栖林、可语的树之精灵。",
    description: "栖林、可语的树之精灵。",
    firstPrinciples: [
      { principle: "树精语", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-nations",
    name: "西大陆诸国",
    aliases: [],
    workId: "belgariad",
    domain: "realm",
    summary: "围绕宝珠结党的多国。",
    description: "围绕宝珠结党的多国。",
    firstPrinciples: [
      { principle: "多国结党", verdict: "achieved", note: "作为地理设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-aldur",
    name: "造物神",
    aliases: [],
    workId: "belgariad",
    domain: "magic",
    summary: "以言语塑世、授徒的神。",
    description: "以言语塑世、授徒的神。",
    firstPrinciples: [
      { principle: "神言语塑世", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-iron",
    name: "铁匠之艺",
    aliases: [],
    workId: "belgariad",
    domain: "artifact",
    summary: "以神授锻造圣器的铁匠。",
    description: "以神授锻造圣器的铁匠。",
    firstPrinciples: [
      { principle: "神授锻器", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dg-portal2",
    name: "死亡之门",
    aliases: [],
    workId: "deathgate",
    domain: "realm",
    summary: "以符文锁住世界往来的门。",
    description: "以符文锁住世界往来的门。",
    firstPrinciples: [
      { principle: "符文锁门", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dg-sartan",
    name: "萨坦创世者",
    aliases: [],
    workId: "deathgate",
    domain: "magic",
    summary: "裂为两派、各掌一界的造物族。",
    description: "裂为两派、各掌一界的造物族。",
    firstPrinciples: [
      { principle: "造物族掌界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dg-patryn",
    name: "帕特林",
    aliases: [],
    workId: "deathgate",
    domain: "magic",
    summary: "以刺青符文施法的流亡族。",
    description: "以刺青符文施法的流亡族。",
    firstPrinciples: [
      { principle: "符文刺青施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dg-labyrinth",
    name: "迷宫监牢",
    aliases: [],
    workId: "deathgate",
    domain: "realm",
    summary: "以迷宫囚禁敌人的造物。",
    description: "以迷宫囚禁敌人的造物。",
    firstPrinciples: [
      { principle: "迷宫囚敌", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dg-element",
    name: "元素派系",
    aliases: [],
    workId: "deathgate",
    domain: "magic",
    summary: "两脉魔法各执元素与死灵。",
    description: "两脉魔法各执元素与死灵。",
    firstPrinciples: [
      { principle: "魔法分元素死灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dg-dragon13",
    name: "守卫龙",
    aliases: [],
    workId: "deathgate",
    domain: "beast",
    summary: "守门、可被役使的龙。",
    description: "守门、可被役使的龙。",
    firstPrinciples: [
      { principle: "龙守门", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dg-mensch",
    name: "人类阵营",
    aliases: [],
    workId: "deathgate",
    domain: "realm",
    summary: "与人类同盟、对抗造物族的势力。",
    description: "与人类同盟、对抗造物族的势力。",
    firstPrinciples: [
      { principle: "阵营对抗", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dg-tower2",
    name: "法师塔",
    aliases: [],
    workId: "deathgate",
    domain: "magic",
    summary: "以塔锚定、研法的法师。",
    description: "以塔锚定、研法的法师。",
    firstPrinciples: [
      { principle: "塔锚法研", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dg-device",
    name: "符文机械",
    aliases: [],
    workId: "deathgate",
    domain: "artifact",
    summary: "以符文驱动的自动机。",
    description: "以符文驱动的自动机。",
    firstPrinciples: [
      { principle: "符文驱动机", verdict: "breakthrough", note: "机器人近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "dg-bridge",
    name: "界桥",
    aliases: [],
    workId: "deathgate",
    domain: "realm",
    summary: "连通两界的桥与航路。",
    description: "连通两界的桥与航路。",
    firstPrinciples: [
      { principle: "桥连两界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rw-sword",
    name: "马丁之剑",
    aliases: [],
    workId: "redwall",
    domain: "artifact",
    summary: "以英雄遗物传承的剑。",
    description: "以英雄遗物传承的剑。",
    firstPrinciples: [
      { principle: "英雄遗物剑", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-abbey",
    name: "红墙修道院",
    aliases: [],
    workId: "redwall",
    domain: "realm",
    summary: "动物修士守御的院堡。",
    description: "动物修士守御的院堡。",
    firstPrinciples: [
      { principle: "兽修士守院", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-bell",
    name: "警报钟",
    aliases: [],
    workId: "redwall",
    domain: "artifact",
    summary: "以钟声预警、聚众的器物。",
    description: "以钟声预警、聚众的器物。",
    firstPrinciples: [
      { principle: "钟声预警", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-rat",
    name: "白鼬劫掠",
    aliases: [],
    workId: "redwall",
    domain: "beast",
    summary: "以军阵劫掠院堡的鼠类。",
    description: "以军阵劫掠院堡的鼠类。",
    firstPrinciples: [
      { principle: "鼠类劫掠军", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-mouse",
    name: "小鼠勇者",
    aliases: [],
    workId: "redwall",
    domain: "beast",
    summary: "以智勇护院的鼠战士。",
    description: "以智勇护院的鼠战士。",
    firstPrinciples: [
      { principle: "鼠战士护院", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-recipe",
    name: "修士食谱",
    aliases: [],
    workId: "redwall",
    domain: "alchemy",
    summary: "以草药与炊事疗愈、聚友。",
    description: "以草药与炊事疗愈、聚友。",
    firstPrinciples: [
      { principle: "草药炊事疗愈", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-badger",
    name: "獾武士",
    aliases: [],
    workId: "redwall",
    domain: "beast",
    summary: "以力与义守院的獾族。",
    description: "以力与义守院的獾族。",
    firstPrinciples: [
      { principle: "獾武士守院", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-squirrel",
    name: "松鼠斥候",
    aliases: [],
    workId: "redwall",
    domain: "beast",
    summary: "以灵巧与树居传讯的松鼠。",
    description: "以灵巧与树居传讯的松鼠。",
    firstPrinciples: [
      { principle: "松鼠传讯", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-seasons",
    name: "四季远征",
    aliases: [],
    workId: "redwall",
    domain: "realm",
    summary: "以季节为节奏的远行冒险。",
    description: "以季节为节奏的远行冒险。",
    firstPrinciples: [
      { principle: "季节远行", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rw-riddle",
    name: "谜题藏宝",
    aliases: [],
    workId: "redwall",
    domain: "lore",
    summary: "以谜题与诗指引秘藏。",
    description: "以谜题与诗指引秘藏。",
    firstPrinciples: [
      { principle: "谜题指秘藏", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-oath",
    name: "誓约之光",
    aliases: [],
    workId: "stormlight",
    domain: "lore",
    summary: "以誓言绑定、驾驭实体化光辉之力。",
    description: "以誓言绑定、驾驭实体化光辉之力。",
    firstPrinciples: [
      { principle: "誓言实体化光辉", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-blade",
    name: "碎鞘刀",
    aliases: [],
    workId: "stormlight",
    domain: "artifact",
    summary: "可裂灵、轻如羽的弑神之刃。",
    description: "可裂灵、轻如羽的弑神之刃。",
    firstPrinciples: [
      { principle: "刃裂灵且轻如羽", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-plate",
    name: "碎甲",
    aliases: [],
    workId: "stormlight",
    domain: "artifact",
    summary: "以光辉驱动、自修复的甲。",
    description: "以光辉驱动、自修复的甲。",
    firstPrinciples: [
      { principle: "光辉驱甲自修复", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-storm",
    name: "周期飓风",
    aliases: [],
    workId: "stormlight",
    domain: "realm",
    summary: "飓风周期洗刷、可蓄能的设定。",
    description: "飓风周期洗刷、可蓄能的设定。",
    firstPrinciples: [
      { principle: "周期风暴蓄能", verdict: "achieved", note: "风暴发电近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-spren",
    name: "灵体 spren",
    aliases: [],
    workId: "stormlight",
    domain: "beast",
    summary: "具象化自然概念的灵体。",
    description: "具象化自然概念的灵体。",
    firstPrinciples: [
      { principle: "概念化灵体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-knight",
    name: "誓约骑士",
    aliases: [],
    workId: "stormlight",
    domain: "realm",
    summary: "以誓约阶序进阶的骑士团。",
    description: "以誓约阶序进阶的骑士团。",
    firstPrinciples: [
      { principle: "誓约阶序进阶", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-herald",
    name: "高阶天尊",
    aliases: [],
    workId: "stormlight",
    domain: "lore",
    summary: "被囚、轮回的先古使者。",
    description: "被囚、轮回的先古使者。",
    firstPrinciples: [
      { principle: "先古使者轮回", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-void",
    name: "灭世异族",
    aliases: [],
    workId: "stormlight",
    domain: "beast",
    summary: "外来的掠食性异族。",
    description: "外来的掠食性异族。",
    firstPrinciples: [
      { principle: "异族掠食", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-fabrial",
    name: "灵驱机械",
    aliases: [],
    workId: "stormlight",
    domain: "alchemy",
    summary: "以灵体驱动机械的器件。",
    description: "以灵体驱动机械的器件。",
    firstPrinciples: [
      { principle: "灵体驱动机", verdict: "breakthrough", note: "机电器近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-glyph",
    name: "图形符记",
    aliases: [],
    workId: "stormlight",
    domain: "lore",
    summary: "以符号记录与传输信息的系统。",
    description: "以符号记录与传输信息的系统。",
    firstPrinciples: [
      { principle: "符号传输系统", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "wt-onepower",
    name: "真源双力",
    aliases: [],
    workId: "wheel-of-time",
    domain: "magic",
    summary: "男女各掌一口、受污染的源力。",
    description: "男女各掌一口、受污染的源力。",
    firstPrinciples: [
      { principle: "双性源力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wt-reborn",
    name: "转生真龙",
    aliases: [],
    workId: "wheel-of-time",
    domain: "lore",
    summary: "在命定轮中觉醒的救世者。",
    description: "在命定轮中觉醒的救世者。",
    firstPrinciples: [
      { principle: "命定觉醒救世", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wt-seal",
    name: "暗帝封印",
    aliases: [],
    workId: "wheel-of-time",
    domain: "lore",
    summary: "封印破坏神于地心的封印。",
    description: "封印破坏神于地心的封印。",
    firstPrinciples: [
      { principle: "神被封地心", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wt-weave",
    name: "织轮命定",
    aliases: [],
    workId: "wheel-of-time",
    domain: "realm",
    summary: "以织轮重演历史的命定。",
    description: "以织轮重演历史的命定。",
    firstPrinciples: [
      { principle: "织轮重演史", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wt-warder",
    name: "护法共感",
    aliases: [],
    workId: "wheel-of-time",
    domain: "realm",
    summary: "以誓护佑、共感斗士的护卫。",
    description: "以誓护佑、共感斗士的护卫。",
    firstPrinciples: [
      { principle: "誓护共感", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "wt-tworiver",
    name: "两河故乡",
    aliases: [],
    workId: "wheel-of-time",
    domain: "realm",
    summary: "主角出身的闭塞乡村。",
    description: "主角出身的闭塞乡村。",
    firstPrinciples: [
      { principle: "闭塞乡村起", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "wt-deadbridge",
    name: "亡魂渡桥",
    aliases: [],
    workId: "wheel-of-time",
    domain: "realm",
    summary: "亡魂跨界的桥。",
    description: "亡魂跨界的桥。",
    firstPrinciples: [
      { principle: "亡魂跨桥", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wt-snake",
    name: "蛇人诡媒",
    aliases: [],
    workId: "wheel-of-time",
    domain: "beast",
    summary: "变节、附体的诡异造物。",
    description: "变节、附体的诡异造物。",
    firstPrinciples: [
      { principle: "附体变节", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "wt-tower",
    name: "塔瓦恩",
    aliases: [],
    workId: "wheel-of-time",
    domain: "artifact",
    summary: "以塔训、统御女术士的塔。",
    description: "以塔训、统御女术士的塔。",
    firstPrinciples: [
      { principle: "塔统御术士", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "wt-aiel",
    name: "艾伊尔战士",
    aliases: [],
    workId: "wheel-of-time",
    domain: "realm",
    summary: "以荣誉与荒漠立身的部族。",
    description: "以荣誉与荒漠立身的部族。",
    firstPrinciples: [
      { principle: "荒漠荣誉部族", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ml-warren",
    name: "亡灵术式",
    aliases: [],
    workId: "malazan",
    domain: "lore",
    summary: "以契约与祭仪唤起古老亡灵。",
    description: "以契约与祭仪唤起古老亡灵。",
    firstPrinciples: [
      { principle: "契约唤亡灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ml-magic",
    name: "异界通道施法",
    aliases: [],
    workId: "malazan",
    domain: "magic",
    summary: "以异界 warren 通道施放的法术。",
    description: "以异界 warren 通道施放的法术。",
    firstPrinciples: [
      { principle: "异界通道施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ml-godkill",
    name: "凡弑神易权",
    aliases: [],
    workId: "malazan",
    domain: "lore",
    summary: "凡人可弑神、权能易主。",
    description: "凡人可弑神、权能易主。",
    firstPrinciples: [
      { principle: "凡弑神易权", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ml-army",
    name: "帝国战争机器",
    aliases: [],
    workId: "malazan",
    domain: "realm",
    summary: "将军与士兵构成的帝国军。",
    description: "将军与士兵构成的帝国军。",
    firstPrinciples: [
      { principle: "帝国战争机器", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ml-azath",
    name: "古屋消化",
    aliases: [],
    workId: "malazan",
    domain: "artifact",
    summary: "囚禁并消化造物的古屋。",
    description: "囚禁并消化造物的古屋。",
    firstPrinciples: [
      { principle: "古屋囚消化物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ml-tiste",
    name: "龙人长族",
    aliases: [],
    workId: "malazan",
    domain: "beast",
    summary: "可长生、分族的龙人。",
    description: "可长生、分族的龙人。",
    firstPrinciples: [
      { principle: "龙人长生", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ml-shift",
    name: "咒法变形",
    aliases: [],
    workId: "malazan",
    domain: "beast",
    summary: "以咒变形、化兽作战。",
    description: "以咒变形、化兽作战。",
    firstPrinciples: [
      { principle: "咒变形化兽", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ml-bound",
    name: "链誓锁魂",
    aliases: [],
    workId: "malazan",
    domain: "lore",
    summary: "以链与誓互锁灵魂的术。",
    description: "以链与誓互锁灵魂的术。",
    firstPrinciples: [
      { principle: "链誓锁魂", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ml-sea",
    name: "海族争陆",
    aliases: [],
    workId: "malazan",
    domain: "beast",
    summary: "栖海、与陆族相争的族。",
    description: "栖海、与陆族相争的族。",
    firstPrinciples: [
      { principle: "海族争陆", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ml-broken",
    name: "残破神",
    aliases: [],
    workId: "malazan",
    domain: "lore",
    summary: "被裂、渴求重圆的神。",
    description: "被裂、渴求重圆的神。",
    firstPrinciples: [
      { principle: "神裂求圆", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fl-north",
    name: "低魔北境",
    aliases: [],
    workId: "first-law",
    domain: "realm",
    summary: "蛮荒、低魔、冷酷的北方。",
    description: "蛮荒、低魔、冷酷的北方。",
    firstPrinciples: [
      { principle: "低魔冷酷北境", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fl-cost",
    name: "魔法需代价",
    aliases: [],
    workId: "first-law",
    domain: "magic",
    summary: "魔法稀少而以血与代价换。",
    description: "魔法稀少而以血与代价换。",
    firstPrinciples: [
      { principle: "魔法需血代价", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fl-fear",
    name: "食惧延寿",
    aliases: [],
    workId: "first-law",
    domain: "lore",
    summary: "以他人恐惧为食、延寿的法师。",
    description: "以他人恐惧为食、延寿的法师。",
    firstPrinciples: [
      { principle: "食惧延寿", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fl-feel",
    name: "传说圣物",
    aliases: [],
    workId: "first-law",
    domain: "artifact",
    summary: "以剑等圣物承载传说。",
    description: "以剑等圣物承载传说。",
    firstPrinciples: [
      { principle: "圣物载传说", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fl-venom",
    name: "炼金毒药",
    aliases: [],
    workId: "first-law",
    domain: "alchemy",
    summary: "以毒与药改生死的配方。",
    description: "以毒与药改生死的配方。",
    firstPrinciples: [
      { principle: "毒药改生死", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fl-knight",
    name: "铁甲骑士",
    aliases: [],
    workId: "first-law",
    domain: "realm",
    summary: "以铁甲与纪律作战的骑士。",
    description: "以铁甲与纪律作战的骑士。",
    firstPrinciples: [
      { principle: "铁甲骑士", verdict: "achieved", note: "史实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fl-construct",
    name: "机械造物",
    aliases: [],
    workId: "first-law",
    domain: "artifact",
    summary: "以机械或半机械的造物。",
    description: "以机械或半机械的造物。",
    firstPrinciples: [
      { principle: "机械造物", verdict: "achieved", note: "机器人近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fl-politics",
    name: "权谋博弈",
    aliases: [],
    workId: "first-law",
    domain: "realm",
    summary: "以背叛与结盟博弈的权谋。",
    description: "以背叛与结盟博弈的权谋。",
    firstPrinciples: [
      { principle: "权谋博弈", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fl-wild",
    name: "野性魔法",
    aliases: [],
    workId: "first-law",
    domain: "magic",
    summary: "不可控、危险的野性魔法。",
    description: "不可控、危险的野性魔法。",
    firstPrinciples: [
      { principle: "野性魔法失控", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fl-beast",
    name: "战场魔物",
    aliases: [],
    workId: "first-law",
    domain: "beast",
    summary: "战场上的魔物与巨人。",
    description: "战场上的魔物与巨人。",
    firstPrinciples: [
      { principle: "战场魔物", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "kk-naming",
    name: "命名法",
    aliases: [],
    workId: "kingkiller",
    domain: "magic",
    summary: "以真名与 sympathetic 控物。",
    description: "以真名与 sympathetic 控物。",
    firstPrinciples: [
      { principle: "真名控物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "kk-sympathy",
    name: "共感操控",
    aliases: [],
    workId: "kingkiller",
    domain: "magic",
    summary: "以连结远程操控物质。",
    description: "以连结远程操控物质。",
    firstPrinciples: [
      { principle: "连结远程控物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "kk-shaed",
    name: "影纱斗篷",
    aliases: [],
    workId: "kingkiller",
    domain: "artifact",
    summary: "以影织成、隐身的斗篷。",
    description: "以影织成、隐身的斗篷。",
    firstPrinciples: [
      { principle: "影织隐身", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "kk-ampoule",
    name: "储能壶",
    aliases: [],
    workId: "kingkiller",
    domain: "alchemy",
    summary: "储能与封能的壶。",
    description: "储能与封能的壶。",
    firstPrinciples: [
      { principle: "壶储能封能", verdict: "breakthrough", note: "电池近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "kk-lock",
    name: "古锁封知",
    aliases: [],
    workId: "kingkiller",
    domain: "lore",
    summary: "以古代锁封危险知识。",
    description: "以古代锁封危险知识。",
    firstPrinciples: [
      { principle: "古锁封知", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "kk-university",
    name: "术士学院",
    aliases: [],
    workId: "kingkiller",
    domain: "lore",
    summary: "以分科授艺、争资的学院。",
    description: "以分科授艺、争资的学院。",
    firstPrinciples: [
      { principle: "分科授艺学院", verdict: "achieved", note: "作为制度" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "kk-fae",
    name: "边地仙灵",
    aliases: [],
    workId: "kingkiller",
    domain: "beast",
    summary: "栖于边地的狡黠仙灵。",
    description: "栖于边地的狡黠仙灵。",
    firstPrinciples: [
      { principle: "边地仙灵", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "kk-chandrian",
    name: "名讳召灾",
    aliases: [],
    workId: "kingkiller",
    domain: "lore",
    summary: "以禁忌名讳召灾的七人。",
    description: "以禁忌名讳召灾的七人。",
    firstPrinciples: [
      { principle: "名讳召灾", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "kk-music",
    name: "乐名引自然",
    aliases: [],
    workId: "kingkiller",
    domain: "magic",
    summary: "以乐与名引动自然。",
    description: "以乐与名引动自然。",
    firstPrinciples: [
      { principle: "乐名引自然", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "kk-sword",
    name: "巧技名剑",
    aliases: [],
    workId: "kingkiller",
    domain: "artifact",
    summary: "以巧技与名剑作战。",
    description: "以巧技与名剑作战。",
    firstPrinciples: [
      { principle: "巧技名剑", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-camorr",
    name: "群岛算计",
    aliases: [],
    workId: "lies-of-locke",
    domain: "realm",
    summary: "以城邦藏匿、算计贵族。",
    description: "以城邦藏匿、算计贵族。",
    firstPrinciples: [
      { principle: "城邦算计贵族", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-face",
    name: "伪装假面",
    aliases: [],
    workId: "lies-of-locke",
    domain: "artifact",
    summary: "以面具与伪装替代魔法。",
    description: "以面具与伪装替代魔法。",
    firstPrinciples: [
      { principle: "面具伪装", verdict: "achieved", note: "现实有 disguise" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-venom",
    name: "毒药改命",
    aliases: [],
    workId: "lies-of-locke",
    domain: "alchemy",
    summary: "以毒与药改写生死。",
    description: "以毒与药改写生死。",
    firstPrinciples: [
      { principle: "毒药改生死", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-bondsmagi",
    name: "密会撑腰",
    aliases: [],
    workId: "lies-of-locke",
    domain: "lore",
    summary: "以契约与威胁撑腰的密会。",
    description: "以契约与威胁撑腰的密会。",
    firstPrinciples: [
      { principle: "契约威胁密会", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-water",
    name: "水道机关城",
    aliases: [],
    workId: "lies-of-locke",
    domain: "realm",
    summary: "以水道与机关构城。",
    description: "以水道与机关构城。",
    firstPrinciples: [
      { principle: "水道机关构城", verdict: "achieved", note: "工程可设想" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-piracy",
    name: "海掠帮派",
    aliases: [],
    workId: "lies-of-locke",
    domain: "realm",
    summary: "以海掠与帮派谋生。",
    description: "以海掠与帮派谋生。",
    firstPrinciples: [
      { principle: "海掠帮派", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-green",
    name: "绿墨密语",
    aliases: [],
    workId: "lies-of-locke",
    domain: "lore",
    summary: "以密语与墨传讯的暗号。",
    description: "以密语与墨传讯的暗号。",
    firstPrinciples: [
      { principle: "密语传讯", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-trap",
    name: "机关炸药",
    aliases: [],
    workId: "lies-of-locke",
    domain: "artifact",
    summary: "以机关与炸药御敌。",
    description: "以机关与炸药御敌。",
    firstPrinciples: [
      { principle: "机关炸药御敌", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-gods",
    name: "旧神残留",
    aliases: [],
    workId: "lies-of-locke",
    domain: "lore",
    summary: "被弃、以旧习残留的神。",
    description: "被弃、以旧习残留的神。",
    firstPrinciples: [
      { principle: "旧神残留", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ll-brother",
    name: "兄弟盗帮",
    aliases: [],
    workId: "lies-of-locke",
    domain: "realm",
    summary: "以兄弟结伙、互保的盗帮。",
    description: "以兄弟结伙、互保的盗帮。",
    firstPrinciples: [
      { principle: "兄弟盗帮", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pw-pseudo",
    name: "伪神契约",
    aliases: [],
    workId: "poppy-war",
    domain: "lore",
    summary: "凡人借契约获神性的存在。",
    description: "凡人借契约获神性的存在。",
    firstPrinciples: [
      { principle: "契约赋神性", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pw-dragon",
    name: "龙形军械",
    aliases: [],
    workId: "poppy-war",
    domain: "beast",
    summary: "以龙形战阵的军械。",
    description: "以龙形战阵的军械。",
    firstPrinciples: [
      { principle: "龙形军械", verdict: "breakthrough", note: "机械龙近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "pw-ghostarmy",
    name: "亡灵军阵",
    aliases: [],
    workId: "poppy-war",
    domain: "lore",
    summary: "以亡灵强征的战阵。",
    description: "以亡灵强征的战阵。",
    firstPrinciples: [
      { principle: "亡灵强征战", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pw-shaman",
    name: "祖灵血术",
    aliases: [],
    workId: "poppy-war",
    domain: "magic",
    summary: "以祖灵与血施法的巫。",
    description: "以祖灵与血施法的巫。",
    firstPrinciples: [
      { principle: "祖灵血施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pw-army",
    name: "宗教军校军",
    aliases: [],
    workId: "poppy-war",
    domain: "realm",
    summary: "以宗教与军校驱动的大军。",
    description: "以宗教与军校驱动的大军。",
    firstPrinciples: [
      { principle: "宗教军校驱动", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pw-airship",
    name: "飞艇空战",
    aliases: [],
    workId: "poppy-war",
    domain: "realm",
    summary: "以飞艇空战的现代战争。",
    description: "以飞艇空战的现代战争。",
    firstPrinciples: [
      { principle: "飞艇空战", verdict: "achieved", note: "航空真实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pw-gun",
    name: "火器列阵",
    aliases: [],
    workId: "poppy-war",
    domain: "artifact",
    summary: "以火器列阵的近代军。",
    description: "以火器列阵的近代军。",
    firstPrinciples: [
      { principle: "火器列阵", verdict: "achieved", note: "史实" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pw-fog",
    name: "化学毒雾",
    aliases: [],
    workId: "poppy-war",
    domain: "alchemy",
    summary: "以化学雾改战场的武器。",
    description: "以化学雾改战场的武器。",
    firstPrinciples: [
      { principle: "化学雾战场", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pw-fate",
    name: "宿命牵局",
    aliases: [],
    workId: "poppy-war",
    domain: "lore",
    summary: "以预言与宿命牵引战局。",
    description: "以预言与宿命牵引战局。",
    firstPrinciples: [
      { principle: "宿命牵战局", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pw-rift",
    name: "异界裂隙",
    aliases: [],
    workId: "poppy-war",
    domain: "realm",
    summary: "连通异界、借力的裂隙。",
    description: "连通异界、借力的裂隙。",
    firstPrinciples: [
      { principle: "裂隙借力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "be-book",
    name: "禁书读心",
    aliases: [],
    workId: "broken-empire",
    domain: "lore",
    summary: "以书读心、改写意志。",
    description: "以书读心、改写意志。",
    firstPrinciples: [
      { principle: "书读心改志", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "be-trap",
    name: "血肉机械甲",
    aliases: [],
    workId: "broken-empire",
    domain: "artifact",
    summary: "以血肉机械缝合的战甲。",
    description: "以血肉机械缝合的战甲。",
    firstPrinciples: [
      { principle: "血肉机械甲", verdict: "breakthrough", note: "义体近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "be-proph",
    name: "伪预言操控",
    aliases: [],
    workId: "broken-empire",
    domain: "lore",
    summary: "以伪造预言操控民众。",
    description: "以伪造预言操控民众。",
    firstPrinciples: [
      { principle: "伪预言操控", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "be-necro",
    name: "死灵诅咒",
    aliases: [],
    workId: "broken-empire",
    domain: "lore",
    summary: "以死灵与诅咒作战。",
    description: "以死灵与诅咒作战。",
    firstPrinciples: [
      { principle: "死灵诅咒战", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "be-prince",
    name: "冷酷攀王座",
    aliases: [],
    workId: "broken-empire",
    domain: "realm",
    summary: "以冷酷心智攀爬王座的王子。",
    description: "以冷酷心智攀爬王座的王子。",
    firstPrinciples: [
      { principle: "冷酷攀王座", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "be-ice",
    name: "冰封废土",
    aliases: [],
    workId: "broken-empire",
    domain: "realm",
    summary: "核冬般的冰封废土。",
    description: "核冬般的冰封废土。",
    firstPrinciples: [
      { principle: "冰封废土", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "be-godblood",
    name: "神血赋力",
    aliases: [],
    workId: "broken-empire",
    domain: "lore",
    summary: "以神血赋予不死与力。",
    description: "以神血赋予不死与力。",
    firstPrinciples: [
      { principle: "神血赋不死", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "be-nightmare",
    name: "梦魇实体",
    aliases: [],
    workId: "broken-empire",
    domain: "beast",
    summary: "以梦与恐惧实体化的造物。",
    description: "以梦与恐惧实体化的造物。",
    firstPrinciples: [
      { principle: "梦恐惧实体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "be-brother",
    name: "结伙兄弟会",
    aliases: [],
    workId: "broken-empire",
    domain: "realm",
    summary: "以誓与利结伙的兄弟会。",
    description: "以誓与利结伙的兄弟会。",
    firstPrinciples: [
      { principle: "兄弟会结伙", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "be-machine",
    name: "机械仆从",
    aliases: [],
    workId: "broken-empire",
    domain: "artifact",
    summary: "以机械与机关侍奉。",
    description: "以机械与机关侍奉。",
    firstPrinciples: [
      { principle: "机械侍奉", verdict: "achieved", note: "机器人近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mb-allomancy",
    name: "金属异能",
    aliases: [],
    workId: "mistborn",
    domain: "magic",
    summary: "以吞金属点燃体内异能。",
    description: "以吞金属点燃体内异能。",
    firstPrinciples: [
      { principle: "吞金属生异能", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-feru",
    name: "铁储卸特质",
    aliases: [],
    workId: "mistborn",
    domain: "magic",
    summary: "以铁储卸、交易特质。",
    description: "以铁储卸、交易特质。",
    firstPrinciples: [
      { principle: "铁储卸特质", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-mist",
    name: "迷雾暴政",
    aliases: [],
    workId: "mistborn",
    domain: "realm",
    summary: "灰烬与迷雾笼罩的暴政。",
    description: "灰烬与迷雾笼罩的暴政。",
    firstPrinciples: [
      { principle: "迷雾罩世", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mb-godking",
    name: "神王不老",
    aliases: [],
    workId: "mistborn",
    domain: "lore",
    summary: "以神力不老、统治的神王。",
    description: "以神力不老、统治的神王。",
    firstPrinciples: [
      { principle: "神力不老", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-steel",
    name: "金属推拉",
    aliases: [],
    workId: "mistborn",
    domain: "magic",
    summary: "以推拉金属控物的宗派。",
    description: "以推拉金属控物的宗派。",
    firstPrinciples: [
      { principle: "金属推拉控物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-regen",
    name: "金属快愈",
    aliases: [],
    workId: "mistborn",
    domain: "beast",
    summary: "以金属快愈的体质。",
    description: "以金属快愈的体质。",
    firstPrinciples: [
      { principle: "金属快愈", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-mistborn",
    name: "雾子稀有",
    aliases: [],
    workId: "mistborn",
    domain: "beast",
    summary: "能燃多金、稀有的雾子。",
    description: "能燃多金、稀有的雾子。",
    firstPrinciples: [
      { principle: "多金燃能", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-assassin",
    name: "隐踪毒刺",
    aliases: [],
    workId: "mistborn",
    domain: "realm",
    summary: "以隐踪与毒刺杀的组织。",
    description: "以隐踪与毒刺杀的组织。",
    firstPrinciples: [
      { principle: "隐踪毒刺", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mb-koloss",
    name: "血狂巨人",
    aliases: [],
    workId: "mistborn",
    domain: "beast",
    summary: "以血狂化、被役的巨人。",
    description: "以血狂化、被役的巨人。",
    firstPrinciples: [
      { principle: "血狂化巨人", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mb-skaa",
    name: "奴役大众",
    aliases: [],
    workId: "mistborn",
    domain: "realm",
    summary: "被奴、信救世的大众。",
    description: "被奴、信救世的大众。",
    firstPrinciples: [
      { principle: "奴役信救世", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hm-daemon",
    name: "守护灵兽",
    aliases: [],
    workId: "his-dark-materials",
    domain: "beast",
    summary: "以动物形态外显的灵魂。",
    description: "以动物形态外显的灵魂。",
    firstPrinciples: [
      { principle: "灵魂外显兽形", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-dust",
    name: "幽灵尘埃",
    aliases: [],
    workId: "his-dark-materials",
    domain: "lore",
    summary: "承载意识、幽灵般的粒子。",
    description: "承载意识、幽灵般的粒子。",
    firstPrinciples: [
      { principle: "粒子载意识", verdict: "breakthrough", note: "粒子物理弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-alethio",
    name: "真理仪",
    aliases: [],
    workId: "his-dark-materials",
    domain: "artifact",
    summary: "以指针读真相的仪器。",
    description: "以指针读真相的仪器。",
    firstPrinciples: [
      { principle: "仪器读真", verdict: "breakthrough", note: "传感器近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-knife",
    name: "细微之刀",
    aliases: [],
    workId: "his-dark-materials",
    domain: "artifact",
    summary: "切开世界、通往他界的刀。",
    description: "切开世界、通往他界的刀。",
    firstPrinciples: [
      { principle: "刀切界通行", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-multiverse",
    name: "平行世界",
    aliases: [],
    workId: "his-dark-materials",
    domain: "realm",
    summary: "平行世界并存的设定。",
    description: "平行世界并存的设定。",
    firstPrinciples: [
      { principle: "平行世界", verdict: "breakthrough", note: "多重宇宙假说" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-church",
    name: "尘埃教会",
    aliases: [],
    workId: "his-dark-materials",
    domain: "lore",
    summary: "以教义压制尘埃的教会。",
    description: "以教义压制尘埃的教会。",
    firstPrinciples: [
      { principle: "教会压尘埃", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hm-bear",
    name: "披甲熊族",
    aliases: [],
    workId: "his-dark-materials",
    domain: "beast",
    summary: "具人智、披甲的熊族。",
    description: "具人智、披甲的熊族。",
    firstPrinciples: [
      { principle: "智熊披甲", verdict: "breakthrough", note: "训练熊近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-witch",
    name: "分魂女巫",
    aliases: [],
    workId: "his-dark-materials",
    domain: "lore",
    summary: "以分离灵魂远观的女巫。",
    description: "以分离灵魂远观的女巫。",
    firstPrinciples: [
      { principle: "分魂远观", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-aurora",
    name: "北极光界",
    aliases: [],
    workId: "his-dark-materials",
    domain: "realm",
    summary: "以光界连通死者。",
    description: "以光界连通死者。",
    firstPrinciples: [
      { principle: "光界通死者", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hm-fate",
    name: "选择与预言",
    aliases: [],
    workId: "his-dark-materials",
    domain: "lore",
    summary: "以预言与选择交织的命。",
    description: "以预言与选择交织的命。",
    firstPrinciples: [
      { principle: "预言选择交织", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ok-charter",
    name: "宪章符文",
    aliases: [],
    workId: "old-kingdom",
    domain: "magic",
    summary: "以书写约束亡灵与魔法。",
    description: "以书写约束亡灵与魔法。",
    firstPrinciples: [
      { principle: "书写约束魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ok-deadgate",
    name: "亡灵之匕",
    aliases: [],
    workId: "old-kingdom",
    domain: "lore",
    summary: "以匕首召亡灵回人间。",
    description: "以匕首召亡灵回人间。",
    firstPrinciples: [
      { principle: "匕首召亡灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ok-wall",
    name: "生死魔墙",
    aliases: [],
    workId: "old-kingdom",
    domain: "realm",
    summary: "分隔安南与亡灵北的墙。",
    description: "分隔安南与亡灵北的墙。",
    firstPrinciples: [
      { principle: "墙分隔生死界", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ok-bell",
    name: "驱灵钟",
    aliases: [],
    workId: "old-kingdom",
    domain: "artifact",
    summary: "以钟驱退亡灵的器物。",
    description: "以钟驱退亡灵的器物。",
    firstPrinciples: [
      { principle: "钟驱亡灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ok-freedom",
    name: "解咒之术",
    aliases: [],
    workId: "old-kingdom",
    domain: "lore",
    summary: "以术解放、抗诅咒。",
    description: "以术解放、抗诅咒。",
    firstPrinciples: [
      { principle: "术抗诅咒", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ok-contract",
    name: "血契束缚",
    aliases: [],
    workId: "old-kingdom",
    domain: "lore",
    summary: "以血立契、束缚力量。",
    description: "以血立契、束缚力量。",
    firstPrinciples: [
      { principle: "血立契束缚", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ok-builder",
    name: "筑墙王朝",
    aliases: [],
    workId: "old-kingdom",
    domain: "realm",
    summary: "以术与工程筑墙的王朝。",
    description: "以术与工程筑墙的王朝。",
    firstPrinciples: [
      { principle: "术筑墙", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ok-necro",
    name: "死灵术师",
    aliases: [],
    workId: "old-kingdom",
    domain: "lore",
    summary: "以尸与咒操纵的死灵师。",
    description: "以尸与咒操纵的死灵师。",
    firstPrinciples: [
      { principle: "尸咒操纵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ok-cat",
    name: "通灵猫",
    aliases: [],
    workId: "old-kingdom",
    domain: "beast",
    summary: "具人智、通亡灵的猫。",
    description: "具人智、通亡灵的猫。",
    firstPrinciples: [
      { principle: "智猫通亡灵", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ok-charm",
    name: "护身符纸",
    aliases: [],
    workId: "old-kingdom",
    domain: "magic",
    summary: "以符咒纸护身、缚敌。",
    description: "以符咒纸护身、缚敌。",
    firstPrinciples: [
      { principle: "符纸护缚", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs-skill",
    name: "精技共感",
    aliases: [],
    workId: "farseer",
    domain: "lore",
    summary: "以意念共享感官、跨距操控。",
    description: "以意念共享感官、跨距操控。",
    firstPrinciples: [
      { principle: "意念共享感官", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs-wit",
    name: "兽共感",
    aliases: [],
    workId: "farseer",
    domain: "beast",
    summary: "以共感连人兽意识。",
    description: "以共感连人兽意识。",
    firstPrinciples: [
      { principle: "共感连人兽", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs-bastard",
    name: "私生守储",
    aliases: [],
    workId: "farseer",
    domain: "realm",
    summary: "以私生子身份守王储。",
    description: "以私生子身份守王储。",
    firstPrinciples: [
      { principle: "私生守储", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs-bond",
    name: "驯兽之契",
    aliases: [],
    workId: "farseer",
    domain: "beast",
    summary: "以契联结、控兽伙伴。",
    description: "以契联结、控兽伙伴。",
    firstPrinciples: [
      { principle: "契结控兽", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs-poison",
    name: "毒药暗杀",
    aliases: [],
    workId: "farseer",
    domain: "alchemy",
    summary: "以毒与药暗杀、疗伤。",
    description: "以毒与药暗杀、疗伤。",
    firstPrinciples: [
      { principle: "毒药暗杀", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs-dream",
    name: "预知之梦",
    aliases: [],
    workId: "farseer",
    domain: "lore",
    summary: "以梦预知、警示。",
    description: "以梦预知、警示。",
    firstPrinciples: [
      { principle: "梦预知", verdict: "breakthrough", note: "弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "fs-oldblood",
    name: "血承古术",
    aliases: [],
    workId: "farseer",
    domain: "lore",
    summary: "以血承、渐失的传承术。",
    description: "以血承、渐失的传承术。",
    firstPrinciples: [
      { principle: "血承传承", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs-sword",
    name: "剑艺刺杀",
    aliases: [],
    workId: "farseer",
    domain: "artifact",
    summary: "以剑与技刺杀的艺。",
    description: "以剑与技刺杀的艺。",
    firstPrinciples: [
      { principle: "剑技刺杀", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs-six",
    name: "六公国",
    aliases: [],
    workId: "farseer",
    domain: "realm",
    summary: "分治、内斗的六公国。",
    description: "分治、内斗的六公国。",
    firstPrinciples: [
      { principle: "六公国分治", verdict: "achieved", note: "作为地理" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs-redship",
    name: "红船夺忆",
    aliases: [],
    workId: "farseer",
    domain: "realm",
    summary: "以夺忆、抹人的红船掠袭。",
    description: "以夺忆、抹人的红船掠袭。",
    firstPrinciples: [
      { principle: "红船夺忆", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "js-engmagic",
    name: "英伦魔法",
    aliases: [],
    workId: "jonathan-strange",
    domain: "magic",
    summary: "以书名与契约借自 fairy。",
    description: "以书名与契约借自 fairy。",
    firstPrinciples: [
      { principle: "契约借魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "js-raven",
    name: "缄默鸦",
    aliases: [],
    workId: "jonathan-strange",
    domain: "lore",
    summary: "被带走、困仙界时间者。",
    description: "被带走、困仙界时间者。",
    firstPrinciples: [
      { principle: "人困仙界时间", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "js-fairy",
    name: "仙王",
    aliases: [],
    workId: "jonathan-strange",
    domain: "beast",
    summary: "以诡诈、掌英伦魔法的君。",
    description: "以诡诈、掌英伦魔法的君。",
    firstPrinciples: [
      { principle: "仙王掌魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "js-exped",
    name: "北征魔法",
    aliases: [],
    workId: "jonathan-strange",
    domain: "realm",
    summary: "以军随魔法北征。",
    description: "以军随魔法北征。",
    firstPrinciples: [
      { principle: "军随魔法征", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "js-grimoire",
    name: "魔法典籍",
    aliases: [],
    workId: "jonathan-strange",
    domain: "artifact",
    summary: "以书载、封魔法的典籍。",
    description: "以书载、封魔法的典籍。",
    firstPrinciples: [
      { principle: "书封魔法", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "js-stone",
    name: "古石圈",
    aliases: [],
    workId: "jonathan-strange",
    domain: "realm",
    summary: "以古石圈锚定魔法的地景。",
    description: "以古石圈锚定魔法的地景。",
    firstPrinciples: [
      { principle: "石圈锚魔法", verdict: "achieved", note: "现实有巨石阵" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "js-gentleman",
    name: "绅士法师",
    aliases: [],
    workId: "jonathan-strange",
    domain: "realm",
    summary: "以绅士身份研法的法师。",
    description: "以绅士身份研法的法师。",
    firstPrinciples: [
      { principle: "绅士法师", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "js-mirror",
    name: "镜影穿渡",
    aliases: [],
    workId: "jonathan-strange",
    domain: "realm",
    summary: "以镜与影穿渡的边界。",
    description: "以镜与影穿渡的边界。",
    firstPrinciples: [
      { principle: "镜影穿渡", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "js-nameless",
    name: "失名诅咒",
    aliases: [],
    workId: "jonathan-strange",
    domain: "lore",
    summary: "失名、渐忘自我的诅咒。",
    description: "失名、渐忘自我的诅咒。",
    firstPrinciples: [
      { principle: "失名忘我", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "js-astro",
    name: "星象辅法",
    aliases: [],
    workId: "jonathan-strange",
    domain: "lore",
    summary: "以星象辅魔法与航海。",
    description: "以星象辅魔法与航海。",
    firstPrinciples: [
      { principle: "星象辅魔法", verdict: "achieved", note: "古代天文" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "nc-tent",
    name: "幻境帐篷",
    aliases: [],
    workId: "night-circus",
    domain: "artifact",
    summary: "以幻境搭建可居的魔法空间。",
    description: "以幻境搭建可居的魔法空间。",
    firstPrinciples: [
      { principle: "幻境构空间", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nc-clock",
    name: "竞赛钟",
    aliases: [],
    workId: "night-circus",
    domain: "artifact",
    summary: "以钟计时、维系竞赛的器物。",
    description: "以钟计时、维系竞赛的器物。",
    firstPrinciples: [
      { principle: "钟计时竞赛", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "nc-bond",
    name: "人生契约",
    aliases: [],
    workId: "night-circus",
    domain: "lore",
    summary: "以契把人生绑入竞赛。",
    description: "以契把人生绑入竞赛。",
    firstPrinciples: [
      { principle: "契绑人生", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nc-illusion",
    name: "幻术博弈",
    aliases: [],
    workId: "night-circus",
    domain: "magic",
    summary: "以幻境博弈、互展的魔术。",
    description: "以幻境博弈、互展的魔术。",
    firstPrinciples: [
      { principle: "幻境博弈", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nc-twin",
    name: "双生镜像",
    aliases: [],
    workId: "night-circus",
    domain: "lore",
    summary: "以双生镜像、互为代价的母题。",
    description: "以双生镜像、互为代价的母题。",
    firstPrinciples: [
      { principle: "双生镜像", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "nc-travel",
    name: "夜行巡演",
    aliases: [],
    workId: "night-circus",
    domain: "realm",
    summary: "以篷车夜行、隐现的巡演。",
    description: "以篷车夜行、隐现的巡演。",
    firstPrinciples: [
      { principle: "篷车夜巡", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "nc-icefire",
    name: "冰火扮台",
    aliases: [],
    workId: "night-circus",
    domain: "magic",
    summary: "以对立元素扮台的术。",
    description: "以对立元素扮台的术。",
    firstPrinciples: [
      { principle: "对立元素扮台", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nc-memory",
    name: "封存记忆",
    aliases: [],
    workId: "night-circus",
    domain: "lore",
    summary: "以物封存、赠人的记忆。",
    description: "以物封存、赠人的记忆。",
    firstPrinciples: [
      { principle: "物封记忆", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "nc-chess",
    name: "棋喻胜负",
    aliases: [],
    workId: "night-circus",
    domain: "realm",
    summary: "以棋喻、定胜负的母题。",
    description: "以棋喻、定胜负的母题。",
    firstPrinciples: [
      { principle: "棋喻胜负", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "nc-garden",
    name: "园育隐护",
    aliases: [],
    workId: "night-circus",
    domain: "realm",
    summary: "以园培育、隐护的守护者。",
    description: "以园培育、隐护的守护者。",
    firstPrinciples: [
      { principle: "园育隐护", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tm-dragon",
    name: "智龙载重",
    aliases: [],
    workId: "temeraire",
    domain: "beast",
    summary: "具语言、可载人对抗的龙。",
    description: "具语言、可载人对抗的龙。",
    firstPrinciples: [
      { principle: "龙具语言载重", verdict: "breakthrough", note: "体型受限" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "tm-corps",
    name: "龙舰协同",
    aliases: [],
    workId: "temeraire",
    domain: "realm",
    summary: "以龙舰协同的海空战力。",
    description: "以龙舰协同的海空战力。",
    firstPrinciples: [
      { principle: "龙舰协同战", verdict: "breakthrough", note: "空海协同" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "tm-speak",
    name: "龙语结契",
    aliases: [],
    workId: "temeraire",
    domain: "beast",
    summary: "以语与龙沟通、结契。",
    description: "以语与龙沟通、结契。",
    firstPrinciples: [
      { principle: "语通龙结契", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tm-egg",
    name: "卵孵认主",
    aliases: [],
    workId: "temeraire",
    domain: "beast",
    summary: "以卵孵、认主的龙。",
    description: "以卵孵、认主的龙。",
    firstPrinciples: [
      { principle: "卵孵认主", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tm-napoleon",
    name: "龙改战争",
    aliases: [],
    workId: "temeraire",
    domain: "realm",
    summary: "以龙改写的拿破仑战争。",
    description: "以龙改写的拿破仑战争。",
    firstPrinciples: [
      { principle: "龙改写战争", verdict: "breakthrough", note: "历史架空" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "tm-sick",
    name: "龙群疫病",
    aliases: [],
    workId: "temeraire",
    domain: "beast",
    summary: "以疫病威胁龙群的灾。",
    description: "以疫病威胁龙群的灾。",
    firstPrinciples: [
      { principle: "龙群疫病", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tm-navy",
    name: "风帆龙对峙",
    aliases: [],
    workId: "temeraire",
    domain: "realm",
    summary: "以风帆与龙对峙的海军。",
    description: "以风帆与龙对峙的海军。",
    firstPrinciples: [
      { principle: "风帆龙对峙", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tm-ore",
    name: "育龙矿",
    aliases: [],
    workId: "temeraire",
    domain: "artifact",
    summary: "以矿养、育龙的资源。",
    description: "以矿养、育龙的资源。",
    firstPrinciples: [
      { principle: "矿育龙", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tm-train",
    name: "驯律管龙",
    aliases: [],
    workId: "temeraire",
    domain: "beast",
    summary: "以驯与律管龙的规程。",
    description: "以驯与律管龙的规程。",
    firstPrinciples: [
      { principle: "驯律管龙", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "tm-pact",
    name: "人龙同盟",
    aliases: [],
    workId: "temeraire",
    domain: "lore",
    summary: "以约结人龙同盟。",
    description: "以约结人龙同盟。",
    firstPrinciples: [
      { principle: "约结人龙盟", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ic-rider",
    name: "龙骑共感",
    aliases: [],
    workId: "inheritance",
    domain: "beast",
    summary: "以龙结心链、共感的骑手。",
    description: "以龙结心链、共感的骑手。",
    firstPrinciples: [
      { principle: "人龙心链共感", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ic-lang",
    name: "古语塑能",
    aliases: [],
    workId: "inheritance",
    domain: "magic",
    summary: "以古语咒法、意志塑能。",
    description: "以古语咒法、意志塑能。",
    firstPrinciples: [
      { principle: "古语塑能", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ic-egg",
    name: "龙蛋定命",
    aliases: [],
    workId: "inheritance",
    domain: "beast",
    summary: "以蛋孵、定命运的龙。",
    description: "以蛋孵、定命运的龙。",
    firstPrinciples: [
      { principle: "蛋孵定命运", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ic-eldunari",
    name: "龙魂晶",
    aliases: [],
    workId: "inheritance",
    domain: "lore",
    summary: "以晶藏龙魂、续存的器。",
    description: "以晶藏龙魂、续存的器。",
    firstPrinciples: [
      { principle: "晶藏龙魂", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ic-school",
    name: "术士阶",
    aliases: [],
    workId: "inheritance",
    domain: "lore",
    summary: "以师授、严训的术士阶。",
    description: "以师授、严训的术士阶。",
    firstPrinciples: [
      { principle: "师授术士", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ic-dwarf",
    name: "采锻矮人",
    aliases: [],
    workId: "inheritance",
    domain: "artifact",
    summary: "采矿锻兵、掌隧道的矮人。",
    description: "采矿锻兵、掌隧道的矮人。",
    firstPrinciples: [
      { principle: "矮人采锻", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ic-elf",
    name: "长寿精灵",
    aliases: [],
    workId: "inheritance",
    domain: "beast",
    summary: "长寿、善射的精灵族。",
    description: "长寿、善射的精灵族。",
    firstPrinciples: [
      { principle: "长寿善射精灵", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ic-empire",
    name: "压迫帝国",
    aliases: [],
    workId: "inheritance",
    domain: "realm",
    summary: "以压迫统辖的帝国。",
    description: "以压迫统辖的帝国。",
    firstPrinciples: [
      { principle: "压迫统辖", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ic-sword",
    name: "名剑作战",
    aliases: [],
    workId: "inheritance",
    domain: "artifact",
    summary: "以名剑与技作战。",
    description: "以名剑与技作战。",
    firstPrinciples: [
      { principle: "名剑作战", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ic-dragonking",
    name: "龙王掌族",
    aliases: [],
    workId: "inheritance",
    domain: "lore",
    summary: "以龙王掌族、定秩序的君。",
    description: "以龙王掌族、定秩序的君。",
    firstPrinciples: [
      { principle: "龙王掌族", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pj-camp",
    name: "混血营",
    aliases: [],
    workId: "percy-jackson",
    domain: "realm",
    summary: "以营训、护混血子的营地。",
    description: "以营训、护混血子的营地。",
    firstPrinciples: [
      { principle: "营护混血子", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pj-demigod",
    name: "神血控元",
    aliases: [],
    workId: "percy-jackson",
    domain: "beast",
    summary: "神血赋予控元素之力。",
    description: "神血赋予控元素之力。",
    firstPrinciples: [
      { principle: "神血控元素", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pj-ferry",
    name: "冥界渡资",
    aliases: [],
    workId: "percy-jackson",
    domain: "lore",
    summary: "以渡资判亡魂去处的冥界。",
    description: "以渡资判亡魂去处的冥界。",
    firstPrinciples: [
      { principle: "渡资判亡魂", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pj-trident",
    name: "三叉戟控海",
    aliases: [],
    workId: "percy-jackson",
    domain: "artifact",
    summary: "以器控海、召暴的神兵。",
    description: "以器控海、召暴的神兵。",
    firstPrinciples: [
      { principle: "器控海召暴", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pj-olympian",
    name: "神现当代",
    aliases: [],
    workId: "percy-jackson",
    domain: "magic",
    summary: "神以人形现于当代。",
    description: "神以人形现于当代。",
    firstPrinciples: [
      { principle: "神现当代", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pj-oracle",
    name: "限期预言",
    aliases: [],
    workId: "percy-jackson",
    domain: "lore",
    summary: "以神谕预告、限期的预言。",
    description: "以神谕预告、限期的预言。",
    firstPrinciples: [
      { principle: "神谕预告", verdict: "breakthrough", note: "弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "pj-beast",
    name: "半兽怪物",
    aliases: [],
    workId: "percy-jackson",
    domain: "beast",
    summary: "混血与兽化的怪物。",
    description: "混血与兽化的怪物。",
    firstPrinciples: [
      { principle: "兽化怪物", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pj-shoe",
    name: "助飞神鞋",
    aliases: [],
    workId: "percy-jackson",
    domain: "artifact",
    summary: "以鞋助飞、疾行的器物。",
    description: "以鞋助飞、疾行的器物。",
    firstPrinciples: [
      { principle: "鞋助飞疾", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pj-hound",
    name: "冥界犬",
    aliases: [],
    workId: "percy-jackson",
    domain: "beast",
    summary: "以犬守冥界的地狱犬。",
    description: "以犬守冥界的地狱犬。",
    firstPrinciples: [
      { principle: "犬守冥界", verdict: "achieved", note: "作为神话" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pj-sword",
    name: "认主神剑",
    aliases: [],
    workId: "percy-jackson",
    domain: "artifact",
    summary: "以神器认主、克敌的剑。",
    description: "以神器认主、克敌的剑。",
    firstPrinciples: [
      { principle: "神器认主", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bt-djinn",
    name: "役使精灵",
    aliases: [],
    workId: "bartimaeus",
    domain: "lore",
    summary: "以真名役使、受环约束的精灵。",
    description: "以真名役使、受环约束的精灵。",
    firstPrinciples: [
      { principle: "真名役使精灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bt-pentacle",
    name: "五环约束",
    aliases: [],
    workId: "bartimaeus",
    domain: "artifact",
    summary: "以环与符约束精灵的器物。",
    description: "以环与符约束精灵的器物。",
    firstPrinciples: [
      { principle: "环符束精灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bt-seals",
    name: "七层封印",
    aliases: [],
    workId: "bartimaeus",
    domain: "lore",
    summary: "以七层封印锁危险权能。",
    description: "以七层封印锁危险权能。",
    firstPrinciples: [
      { principle: "七层封印锁能", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bt-amulet",
    name: "护符挡咒",
    aliases: [],
    workId: "bartimaeus",
    domain: "artifact",
    summary: "以护符挡咒、护主的器物。",
    description: "以护符挡咒、护主的器物。",
    firstPrinciples: [
      { principle: "护符挡咒", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bt-magician",
    name: "役灵官阶",
    aliases: [],
    workId: "bartimaeus",
    domain: "realm",
    summary: "以役灵统治的巫师阶层。",
    description: "以役灵统治的巫师阶层。",
    firstPrinciples: [
      { principle: "役灵统治", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bt-london",
    name: "魔法伦敦",
    aliases: [],
    workId: "bartimaeus",
    domain: "realm",
    summary: "以魔法帝国为底色的伦敦。",
    description: "以魔法帝国为底色的伦敦。",
    firstPrinciples: [
      { principle: "魔法伦敦", verdict: "achieved", note: "作为地理" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bt-familiar",
    name: "兽形助法",
    aliases: [],
    workId: "bartimaeus",
    domain: "beast",
    summary: "以兽形现、助法的精灵。",
    description: "以兽形现、助法的精灵。",
    firstPrinciples: [
      { principle: "兽形助法精灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bt-shift",
    name: "精灵变形",
    aliases: [],
    workId: "bartimaeus",
    domain: "beast",
    summary: "精灵以变形潜行的术。",
    description: "精灵以变形潜行的术。",
    firstPrinciples: [
      { principle: "精灵变形", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bt-possess",
    name: "夺舍占身",
    aliases: [],
    workId: "bartimaeus",
    domain: "lore",
    summary: "以夺舍占他人身的术。",
    description: "以夺舍占他人身的术。",
    firstPrinciples: [
      { principle: "夺舍占身", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bt-summon3",
    name: "召唤英灵",
    aliases: [],
    workId: "bartimaeus",
    domain: "lore",
    summary: "以召唤唤古代英灵。",
    description: "以召唤唤古代英灵。",
    firstPrinciples: [
      { principle: "召古代英灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dr-staff",
    name: "战杖施法",
    aliases: [],
    workId: "dresden",
    domain: "artifact",
    summary: "以杖与咒在都市施法。",
    description: "以杖与咒在都市施法。",
    firstPrinciples: [
      { principle: "杖咒施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dr-soulfire",
    name: "灵魂火",
    aliases: [],
    workId: "dresden",
    domain: "lore",
    summary: "以纯洁意志燃的灵魂火。",
    description: "以纯洁意志燃的灵魂火。",
    firstPrinciples: [
      { principle: "意志燃魂火", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dr-ward",
    name: "符阵守护",
    aliases: [],
    workId: "dresden",
    domain: "lore",
    summary: "以符阵护身的守护。",
    description: "以符阵护身的守护。",
    firstPrinciples: [
      { principle: "符阵护身", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dr-fae",
    name: "契约仙灵",
    aliases: [],
    workId: "dresden",
    domain: "beast",
    summary: "以契约借力的仙界族。",
    description: "以契约借力的仙界族。",
    firstPrinciples: [
      { principle: "契约借仙力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dr-werewolf",
    name: "狼人诅咒",
    aliases: [],
    workId: "dresden",
    domain: "beast",
    summary: "以诅咒转化的狼人。",
    description: "以诅咒转化的狼人。",
    firstPrinciples: [
      { principle: "诅咒转狼人", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dr-necro",
    name: "死灵操纵",
    aliases: [],
    workId: "dresden",
    domain: "lore",
    summary: "以尸与咒操纵亡灵。",
    description: "以尸与咒操纵亡灵。",
    firstPrinciples: [
      { principle: "尸咒操纵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dr-car",
    name: "附魔车",
    aliases: [],
    workId: "dresden",
    domain: "artifact",
    summary: "以附魔强化的车辆。",
    description: "以附魔强化的车辆。",
    firstPrinciples: [
      { principle: "附魔车", verdict: "breakthrough", note: "改装近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "dr-urban",
    name: "都市怪谈",
    aliases: [],
    workId: "dresden",
    domain: "realm",
    summary: "以都市传说为母题的怪。",
    description: "以都市传说为母题的怪。",
    firstPrinciples: [
      { principle: "都市怪谈", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dr-council",
    name: "圣白议会",
    aliases: [],
    workId: "dresden",
    domain: "realm",
    summary: "以议会监管术士的组织。",
    description: "以议会监管术士的组织。",
    firstPrinciples: [
      { principle: "议会监管术士", verdict: "achieved", note: "作为制度" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dr-hell",
    name: "地狱契约",
    aliases: [],
    workId: "dresden",
    domain: "lore",
    summary: "以契约与恶魔博弈的界。",
    description: "以契约与恶魔博弈的界。",
    firstPrinciples: [
      { principle: "地狱契约恶魔", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-dragonborn2",
    name: "龙裔公主",
    aliases: [],
    workId: "priory",
    domain: "beast",
    summary: "具龙血、跨代记忆的公主。",
    description: "具龙血、跨代记忆的公主。",
    firstPrinciples: [
      { principle: "龙血跨代记忆", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-tree",
    name: "连通心智圣树",
    aliases: [],
    workId: "priory",
    domain: "lore",
    summary: "连通心智、改写认知的树。",
    description: "连通心智、改写认知的树。",
    firstPrinciples: [
      { principle: "树连心智", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-witch",
    name: "血誓女巫",
    aliases: [],
    workId: "priory",
    domain: "magic",
    summary: "以血与誓施法的女巫。",
    description: "以血与誓施法的女巫。",
    firstPrinciples: [
      { principle: "血誓施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-dragon",
    name: "跨代龙",
    aliases: [],
    workId: "priory",
    domain: "beast",
    summary: "以形态与记忆跨代的龙。",
    description: "以形态与记忆跨代的龙。",
    firstPrinciples: [
      { principle: "龙跨代记忆", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-plague",
    name: "虫媒瘟疫",
    aliases: [],
    workId: "priory",
    domain: "beast",
    summary: "以虫媒、改写族群的疫。",
    description: "以虫媒、改写族群的疫。",
    firstPrinciples: [
      { principle: "虫媒改写族", verdict: "breakthrough", note: "生物战近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "pr-continents",
    name: "火冰两陆",
    aliases: [],
    workId: "priory",
    domain: "realm",
    summary: "火与冰对峙的两大陆。",
    description: "火与冰对峙的两大陆。",
    firstPrinciples: [
      { principle: "两大陆对峙", verdict: "achieved", note: "作为地理" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pr-abbey",
    name: "传道修道院",
    aliases: [],
    workId: "priory",
    domain: "realm",
    summary: "以院守、传道的组织。",
    description: "以院守、传道的组织。",
    firstPrinciples: [
      { principle: "院传道", verdict: "achieved", note: "作为制度" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pr-dragonspeak",
    name: "龙语沟通",
    aliases: [],
    workId: "priory",
    domain: "beast",
    summary: "以语与龙沟通。",
    description: "以语与龙沟通。",
    firstPrinciples: [
      { principle: "语通龙", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pr-sail",
    name: "贸易航海",
    aliases: [],
    workId: "priory",
    domain: "realm",
    summary: "以舟穿行、贸易的航海。",
    description: "以舟穿行、贸易的航海。",
    firstPrinciples: [
      { principle: "舟航海贸易", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pr-fate",
    name: "预言与选择",
    aliases: [],
    workId: "priory",
    domain: "lore",
    summary: "以预言与选择交织。",
    description: "以预言与选择交织。",
    firstPrinciples: [
      { principle: "预言选择", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-orogeny",
    name: "地壳操控",
    aliases: [],
    workId: "fifth-season",
    domain: "realm",
    summary: "以意志平息或引发地震。",
    description: "以意志平息或引发地震。",
    firstPrinciples: [
      { principle: "意志改地质", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-stoneeater",
    name: "石食兽",
    aliases: [],
    workId: "fifth-season",
    domain: "beast",
    summary: "以石为食、通矿的造物。",
    description: "以石为食、通矿的造物。",
    firstPrinciples: [
      { principle: "石食通矿", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-still",
    name: "静息者",
    aliases: [],
    workId: "fifth-season",
    domain: "lore",
    summary: "以术平息、守护的阶层。",
    description: "以术平息、守护的阶层。",
    firstPrinciples: [
      { principle: "术平息守护", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-obelisk",
    name: "方尖缓灾",
    aliases: [],
    workId: "fifth-season",
    domain: "artifact",
    summary: "以古物锚定、缓灾的碑。",
    description: "以古物锚定、缓灾的碑。",
    firstPrinciples: [
      { principle: "古物锚缓灾", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-orbital",
    name: "轨道遗迹",
    aliases: [],
    workId: "fifth-season",
    domain: "artifact",
    summary: "以失落高科技遗存的轨构。",
    description: "以失落高科技遗存的轨构。",
    firstPrinciples: [
      { principle: "轨构高科技遗存", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-season",
    name: "灾变频仍",
    aliases: [],
    workId: "fifth-season",
    domain: "realm",
    summary: "以灾变频仍的 Stillness。",
    description: "以灾变频仍的 Stillness。",
    firstPrinciples: [
      { principle: "灾变频仍", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-collar",
    name: "控奴环",
    aliases: [],
    workId: "fifth-season",
    domain: "artifact",
    summary: "以环控、奴静息者的器。",
    description: "以环控、奴静息者的器。",
    firstPrinciples: [
      { principle: "环控奴", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-ley",
    name: "地脉传能",
    aliases: [],
    workId: "fifth-season",
    domain: "realm",
    summary: "以地脉传导、控能的网。",
    description: "以地脉传导、控能的网。",
    firstPrinciples: [
      { principle: "地脉传控能", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-child",
    name: "严苛训育",
    aliases: [],
    workId: "fifth-season",
    domain: "realm",
    summary: "以严苛训、控静息者的育。",
    description: "以严苛训、控静息者的育。",
    firstPrinciples: [
      { principle: "严苛训控", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fs2-oldciv",
    name: "失落古文明",
    aliases: [],
    workId: "fifth-season",
    domain: "realm",
    summary: "以失落、高概念的古文明。",
    description: "以失落、高概念的古文明。",
    firstPrinciples: [
      { principle: "失落高概念文明", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gj-golem",
    name: "希伯来符文泥偶",
    aliases: [],
    workId: "golem-jinni",
    domain: "artifact",
    summary: "以符文赋生、忠仆的泥偶。",
    description: "以符文赋生、忠仆的泥偶。",
    firstPrinciples: [
      { principle: "符文赋生泥偶", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gj-jinni",
    name: "瓶中精灵",
    aliases: [],
    workId: "golem-jinni",
    domain: "lore",
    summary: "以瓶囚、可附身的火灵。",
    description: "以瓶囚、可附身的火灵。",
    firstPrinciples: [
      { principle: "瓶囚附身", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gj-clay",
    name: "赋生黏土",
    aliases: [],
    workId: "golem-jinni",
    domain: "alchemy",
    summary: "以黏土塑、赋生的材料。",
    description: "以黏土塑、赋生的材料。",
    firstPrinciples: [
      { principle: "黏土赋生", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gj-aleph",
    name: "字母真名",
    aliases: [],
    workId: "golem-jinni",
    domain: "lore",
    summary: "以字母与真名构成的语言。",
    description: "以字母与真名构成的语言。",
    firstPrinciples: [
      { principle: "字母真名构成", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gj-kabbalah",
    name: "犹太秘学",
    aliases: [],
    workId: "golem-jinni",
    domain: "lore",
    summary: "以神秘学统合设定。",
    description: "以神秘学统合设定。",
    firstPrinciples: [
      { principle: "神秘学统合", verdict: "achieved", note: "作为传统" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gj-immigrant",
    name: "移民底色",
    aliases: [],
    workId: "golem-jinni",
    domain: "realm",
    summary: "以19世纪移民为底色。",
    description: "以19世纪移民为底色。",
    firstPrinciples: [
      { principle: "移民底色", verdict: "achieved", note: "历史背景" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gj-ethics",
    name: "造物伦理",
    aliases: [],
    workId: "golem-jinni",
    domain: "lore",
    summary: "以造物是否有魂的伦理。",
    description: "以造物是否有魂的伦理。",
    firstPrinciples: [
      { principle: "造物有无魂伦理", verdict: "achieved", note: "作为主题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gj-shift",
    name: "变形潜行",
    aliases: [],
    workId: "golem-jinni",
    domain: "beast",
    summary: "以变形潜行、作战。",
    description: "以变形潜行、作战。",
    firstPrinciples: [
      { principle: "变形潜行", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gj-ward",
    name: "符护驱邪",
    aliases: [],
    workId: "golem-jinni",
    domain: "lore",
    summary: "以符护家、驱邪的术。",
    description: "以符护家、驱邪的术。",
    firstPrinciples: [
      { principle: "符护驱邪", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gj-contract",
    name: "契役灵",
    aliases: [],
    workId: "golem-jinni",
    domain: "lore",
    summary: "以契役灵、定责的约。",
    description: "以契役灵、定责的约。",
    firstPrinciples: [
      { principle: "契役灵定责", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dv-djinn",
    name: "血控元素",
    aliases: [],
    workId: "daevabad",
    domain: "beast",
    summary: "以血液操控元素、长生不老。",
    description: "以血液操控元素、长生不老。",
    firstPrinciples: [
      { principle: "血控元素长生", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dv-clans",
    name: "六族争权",
    aliases: [],
    workId: "daevabad",
    domain: "realm",
    summary: "以六族争权的城邦。",
    description: "以六族争权的城邦。",
    firstPrinciples: [
      { principle: "六族争权", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dv-bronze",
    name: "青铜城",
    aliases: [],
    workId: "daevabad",
    domain: "artifact",
    summary: "以青铜筑、隐秘的城。",
    description: "以青铜筑、隐秘的城。",
    firstPrinciples: [
      { principle: "青铜筑城", verdict: "achieved", note: "工程可设想" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dv-curse",
    name: "跨代诅咒",
    aliases: [],
    workId: "daevabad",
    domain: "lore",
    summary: "以诅咒跨代、改族群。",
    description: "以诅咒跨代、改族群。",
    firstPrinciples: [
      { principle: "诅咒跨代改群", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dv-ifrit",
    name: "火体阿夫里特",
    aliases: [],
    workId: "daevabad",
    domain: "beast",
    summary: "以火为体的阿夫里特族。",
    description: "以火为体的阿夫里特族。",
    firstPrinciples: [
      { principle: "火体族", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dv-marid",
    name: "水域玛里德",
    aliases: [],
    workId: "daevabad",
    domain: "beast",
    summary: "以水域为尊的玛里德族。",
    description: "以水域为尊的玛里德族。",
    firstPrinciples: [
      { principle: "水域尊族", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dv-oracle",
    name: "神谕梦兆",
    aliases: [],
    workId: "daevabad",
    domain: "lore",
    summary: "以神谕与梦预告。",
    description: "以神谕与梦预告。",
    firstPrinciples: [
      { principle: "神谕梦预告", verdict: "breakthrough", note: "弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "dv-forbidden",
    name: "禁术改命",
    aliases: [],
    workId: "daevabad",
    domain: "magic",
    summary: "以禁术改命运。",
    description: "以禁术改命运。",
    firstPrinciples: [
      { principle: "禁术改命", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dv-carpet",
    name: "飞毯瞬行",
    aliases: [],
    workId: "daevabad",
    domain: "realm",
    summary: "以毯瞬行、无视距。",
    description: "以毯瞬行、无视距。",
    firstPrinciples: [
      { principle: "毯瞬行", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dv-poison",
    name: "毒药暗杀",
    aliases: [],
    workId: "daevabad",
    domain: "alchemy",
    summary: "以毒与药暗杀。",
    description: "以毒与药暗杀。",
    firstPrinciples: [
      { principle: "毒药暗杀", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "up-corruption",
    name: "腐林同化",
    aliases: [],
    workId: "uprooted",
    domain: "beast",
    summary: "以意志同化生物、改形。",
    description: "以意志同化生物、改形。",
    firstPrinciples: [
      { principle: "林同化改形", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "up-towermagic",
    name: "塔楼魔法",
    aliases: [],
    workId: "uprooted",
    domain: "magic",
    summary: "以言语汲取自然。",
    description: "以言语汲取自然。",
    firstPrinciples: [
      { principle: "言语汲自然", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "up-herb",
    name: "抗林草药",
    aliases: [],
    workId: "uprooted",
    domain: "alchemy",
    summary: "以草药疗愈、抗林。",
    description: "以草药疗愈、抗林。",
    firstPrinciples: [
      { principle: "草药疗愈抗林", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "up-tower",
    name: "御林塔",
    aliases: [],
    workId: "uprooted",
    domain: "artifact",
    summary: "以塔囚、御林的结构。",
    description: "以塔囚、御林的结构。",
    firstPrinciples: [
      { principle: "塔囚御林", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "up-wood",
    name: "林灵沟通",
    aliases: [],
    workId: "uprooted",
    domain: "lore",
    summary: "以林灵沟通、协商。",
    description: "以林灵沟通、协商。",
    firstPrinciples: [
      { principle: "林灵沟通", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "up-valley",
    name: "谷地王国",
    aliases: [],
    workId: "uprooted",
    domain: "realm",
    summary: "以谷地、抗林的王国。",
    description: "以谷地、抗林的王国。",
    firstPrinciples: [
      { principle: "谷地抗林", verdict: "achieved", note: "作为地理" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "up-fire",
    name: "火净林",
    aliases: [],
    workId: "uprooted",
    domain: "magic",
    summary: "以火净林、护村的术。",
    description: "以火净林、护村的术。",
    firstPrinciples: [
      { principle: "火净林", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "up-crown",
    name: "承权王冠",
    aliases: [],
    workId: "uprooted",
    domain: "artifact",
    summary: "以冠载、承权的器。",
    description: "以冠载、承权的器。",
    firstPrinciples: [
      { principle: "冠载承权", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "up-shift",
    name: "变形潜林",
    aliases: [],
    workId: "uprooted",
    domain: "beast",
    summary: "以变形、潜入林地。",
    description: "以变形、潜入林地。",
    firstPrinciples: [
      { principle: "变形潜入", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "up-contract",
    name: "护村之契",
    aliases: [],
    workId: "uprooted",
    domain: "lore",
    summary: "以契护村、限林。",
    description: "以契护村、限林。",
    firstPrinciples: [
      { principle: "契护村限林", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss-spindle",
    name: "纺金术",
    aliases: [],
    workId: "spinning-silver",
    domain: "alchemy",
    summary: "以纺锤把银变金。",
    description: "以纺锤把银变金。",
    firstPrinciples: [
      { principle: "纺银变金", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss-icedragon",
    name: "冰龙王",
    aliases: [],
    workId: "spinning-silver",
    domain: "beast",
    summary: "以寒霜操控气候的龙王。",
    description: "以寒霜操控气候的龙王。",
    firstPrinciples: [
      { principle: "寒霜控气候", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss-mouse",
    name: "机智少女",
    aliases: [],
    workId: "spinning-silver",
    domain: "beast",
    summary: "以机智、脱困的少女。",
    description: "以机智、脱困的少女。",
    firstPrinciples: [
      { principle: "机智脱困", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss-winter",
    name: "冬之化身",
    aliases: [],
    workId: "spinning-silver",
    domain: "lore",
    summary: "以寒冷冻结生命的化身。",
    description: "以寒冷冻结生命的化身。",
    firstPrinciples: [
      { principle: "寒冷冻生命", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss-eastfolk",
    name: "东欧底色",
    aliases: [],
    workId: "spinning-silver",
    domain: "realm",
    summary: "以东欧民间为底色。",
    description: "以东欧民间为底色。",
    firstPrinciples: [
      { principle: "东欧民间底色", verdict: "achieved", note: "作为背景" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss-leshy",
    name: "林妖守护",
    aliases: [],
    workId: "spinning-silver",
    domain: "beast",
    summary: "以林妖守、护的精。",
    description: "以林妖守、护的精。",
    firstPrinciples: [
      { principle: "林妖守护", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss-wheel",
    name: "纺车变金",
    aliases: [],
    workId: "spinning-silver",
    domain: "artifact",
    summary: "以纺车织、变金的工具。",
    description: "以纺车织、变金的工具。",
    firstPrinciples: [
      { principle: "纺车织变金", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss-dragonspeak",
    name: "龙语谈判",
    aliases: [],
    workId: "spinning-silver",
    domain: "beast",
    summary: "以语与龙谈判。",
    description: "以语与龙谈判。",
    firstPrinciples: [
      { principle: "语与龙谈判", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss-curse",
    name: "诅咒解咒",
    aliases: [],
    workId: "spinning-silver",
    domain: "lore",
    summary: "以诅咒与解咒母题。",
    description: "以诅咒与解咒母题。",
    firstPrinciples: [
      { principle: "诅咒可解", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss-twin",
    name: "双线互换",
    aliases: [],
    workId: "spinning-silver",
    domain: "lore",
    summary: "以双线、互换身份的母题。",
    description: "以双线、互换身份的母题。",
    firstPrinciples: [
      { principle: "双线互换身份", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-leshy",
    name: "林妖自然意志",
    aliases: [],
    workId: "bear-nightingale",
    domain: "beast",
    summary: "以林妖具象自然意志。",
    description: "以林妖具象自然意志。",
    firstPrinciples: [
      { principle: "林妖具自然意", verdict: "achieved", note: "作为传说" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-morozko",
    name: "冬神冻结",
    aliases: [],
    workId: "bear-nightingale",
    domain: "lore",
    summary: "以寒冷冻结生命的冬神。",
    description: "以寒冷冻结生命的冬神。",
    firstPrinciples: [
      { principle: "寒冷冻生命", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-domovoi",
    name: "家神护怒",
    aliases: [],
    workId: "bear-nightingale",
    domain: "lore",
    summary: "以家神护、怒的灵。",
    description: "以家神护、怒的灵。",
    firstPrinciples: [
      { principle: "家神护怒", verdict: "achieved", note: "作为信仰" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-bird",
    name: "鸟灵传讯",
    aliases: [],
    workId: "bear-nightingale",
    domain: "beast",
    summary: "以鸟灵传讯、引路。",
    description: "以鸟灵传讯、引路。",
    firstPrinciples: [
      { principle: "鸟灵传讯", verdict: "achieved", note: "现实有" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-shift",
    name: "变形潜行",
    aliases: [],
    workId: "bear-nightingale",
    domain: "beast",
    summary: "以变形、潜行的术。",
    description: "以变形、潜行的术。",
    firstPrinciples: [
      { principle: "变形潜行", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-winter",
    name: "俄式寒冬",
    aliases: [],
    workId: "bear-nightingale",
    domain: "realm",
    summary: "以俄式寒冬为底色。",
    description: "以俄式寒冬为底色。",
    firstPrinciples: [
      { principle: "俄式寒冬底色", verdict: "achieved", note: "作为背景" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-witch",
    name: "护抗女巫",
    aliases: [],
    workId: "bear-nightingale",
    domain: "magic",
    summary: "以巫术护、抗的母。",
    description: "以巫术护、抗的母。",
    firstPrinciples: [
      { principle: "巫术护抗", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-wood",
    name: "林精避险",
    aliases: [],
    workId: "bear-nightingale",
    domain: "lore",
    summary: "以林精沟通、避祸。",
    description: "以林精沟通、避祸。",
    firstPrinciples: [
      { principle: "林精沟通", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-snowbear",
    name: "雪熊伴护",
    aliases: [],
    workId: "bear-nightingale",
    domain: "beast",
    summary: "以熊伴、护的兽。",
    description: "以熊伴、护的兽。",
    firstPrinciples: [
      { principle: "熊伴护", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-courage",
    name: "勇气对峙",
    aliases: [],
    workId: "bear-nightingale",
    domain: "lore",
    summary: "以勇气与名对峙母题。",
    description: "以勇气与名对峙母题。",
    firstPrinciples: [
      { principle: "勇气对母题", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cb-possess",
    name: "神祇附身",
    aliases: [],
    workId: "children-blood-bone",
    domain: "lore",
    summary: "以神祇附身赋元素力。",
    description: "以神祇附身赋元素力。",
    firstPrinciples: [
      { principle: "神附赋力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cb-recall",
    name: "召回亡者",
    aliases: [],
    workId: "children-blood-bone",
    domain: "lore",
    summary: "以术召回、改战的死者。",
    description: "以术召回、改战的死者。",
    firstPrinciples: [
      { principle: "召亡改战", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cb-maji",
    name: "神血控元",
    aliases: [],
    workId: "children-blood-bone",
    domain: "beast",
    summary: "以神血、控元素的族。",
    description: "以神血、控元素的族。",
    firstPrinciples: [
      { principle: "神血控元素", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cb-rebellion",
    name: "抗殖民起义",
    aliases: [],
    workId: "children-blood-bone",
    domain: "realm",
    summary: "以起义抗殖民帝国。",
    description: "以起义抗殖民帝国。",
    firstPrinciples: [
      { principle: "起义抗殖民", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cb-empire",
    name: "殖民底色",
    aliases: [],
    workId: "children-blood-bone",
    domain: "realm",
    summary: "以白人殖民为底色。",
    description: "以白人殖民为底色。",
    firstPrinciples: [
      { principle: "殖民底色", verdict: "achieved", note: "历史背景" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cb-tree",
    name: "连通圣林",
    aliases: [],
    workId: "children-blood-bone",
    domain: "lore",
    summary: "以圣林连通、护族。",
    description: "以圣林连通、护族。",
    firstPrinciples: [
      { principle: "圣林连通", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cb-rune",
    name: "符文施封",
    aliases: [],
    workId: "children-blood-bone",
    domain: "magic",
    summary: "以符文施、封的术。",
    description: "以符文施、封的术。",
    firstPrinciples: [
      { principle: "符文施封", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cb-beast",
    name: "兽灵护战",
    aliases: [],
    workId: "children-blood-bone",
    domain: "beast",
    summary: "以兽灵护、战的灵。",
    description: "以兽灵护、战的灵。",
    firstPrinciples: [
      { principle: "兽灵护战", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cb-relic",
    name: "认主神器",
    aliases: [],
    workId: "children-blood-bone",
    domain: "artifact",
    summary: "以神器认、克敌的物。",
    description: "以神器认、克敌的物。",
    firstPrinciples: [
      { principle: "神器认主", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cb-oracle",
    name: "预言引命",
    aliases: [],
    workId: "children-blood-bone",
    domain: "lore",
    summary: "以预言引、限的命。",
    description: "以预言引、限的命。",
    firstPrinciples: [
      { principle: "预言引命", verdict: "breakthrough", note: "弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "aw-leaf",
    name: "叶之民",
    aliases: [],
    workId: "akata-witch",
    domain: "lore",
    summary: "以精神与影为货币的社会。",
    description: "以精神与影为货币的社会。",
    firstPrinciples: [
      { principle: "精神影为货币", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "aw-juju",
    name: "祖灵符法",
    aliases: [],
    workId: "akata-witch",
    domain: "magic",
    summary: "以祖灵与符施法的体系。",
    description: "以祖灵与符施法的体系。",
    firstPrinciples: [
      { principle: "祖灵符施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "aw-shift",
    name: "变形预知",
    aliases: [],
    workId: "akata-witch",
    domain: "beast",
    summary: "以变形、预知跨现实。",
    description: "以变形、预知跨现实。",
    firstPrinciples: [
      { principle: "变形预知", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "aw-spirit",
    name: "附身灵",
    aliases: [],
    workId: "akata-witch",
    domain: "beast",
    summary: "以灵附、护的造物。",
    description: "以灵附、护的造物。",
    firstPrinciples: [
      { principle: "灵附护", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "aw-nigeria",
    name: "西非底色",
    aliases: [],
    workId: "akata-witch",
    domain: "realm",
    summary: "以西非为底色的魔法。",
    description: "以西非为底色的魔法。",
    firstPrinciples: [
      { principle: "西非底色", verdict: "achieved", note: "作为背景" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "aw-tattoo",
    name: "刺青载符",
    aliases: [],
    workId: "akata-witch",
    domain: "artifact",
    summary: "以刺青载、施的符。",
    description: "以刺青载、施的符。",
    firstPrinciples: [
      { principle: "刺青载符", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "aw-curse",
    name: "诅咒解咒",
    aliases: [],
    workId: "akata-witch",
    domain: "lore",
    summary: "以诅咒与解咒母题。",
    description: "以诅咒与解咒母题。",
    firstPrinciples: [
      { principle: "诅咒可解", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "aw-crossworld",
    name: "桥连通界",
    aliases: [],
    workId: "akata-witch",
    domain: "realm",
    summary: "以桥连通、穿界的术。",
    description: "以桥连通、穿界的术。",
    firstPrinciples: [
      { principle: "桥连通界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "aw-lang",
    name: "语言构控",
    aliases: [],
    workId: "akata-witch",
    domain: "magic",
    summary: "以语言构、控的术。",
    description: "以语言构、控的术。",
    firstPrinciples: [
      { principle: "语言构控", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "aw-school",
    name: "学院授艺",
    aliases: [],
    workId: "akata-witch",
    domain: "lore",
    summary: "以学院训、授的制。",
    description: "以学院训、授的制。",
    firstPrinciples: [
      { principle: "学院训授", verdict: "achieved", note: "作为制度" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-math",
    name: "史前数学",
    aliases: [],
    workId: "binti",
    domain: "lore",
    summary: "以古老数学与族忆共生。",
    description: "以古老数学与族忆共生。",
    firstPrinciples: [
      { principle: "数学族忆共生", verdict: "achieved", note: "作为主题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-okwu",
    name: "鱼人通信",
    aliases: [],
    workId: "binti",
    domain: "beast",
    summary: "以刺青、通信的鱼人族。",
    description: "以刺青、通信的鱼人族。",
    firstPrinciples: [
      { principle: "鱼人刺青通信", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-harmonizer",
    name: "和谐器",
    aliases: [],
    workId: "binti",
    domain: "artifact",
    summary: "以器平、解冲突的物。",
    description: "以器平、解冲突的物。",
    firstPrinciples: [
      { principle: "器平解冲突", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-edan",
    name: "星际跃迁",
    aliases: [],
    workId: "binti",
    domain: "realm",
    summary: "以星际跃迁、跨距的旅。",
    description: "以星际跃迁、跨距的旅。",
    firstPrinciples: [
      { principle: "星际跃迁", verdict: "breakthrough", note: "理论可行" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "bi-memory",
    name: "族忆承史",
    aliases: [],
    workId: "binti",
    domain: "lore",
    summary: "以族忆、承史的机制。",
    description: "以族忆、承史的机制。",
    firstPrinciples: [
      { principle: "族忆承史", verdict: "achieved", note: "作为主题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-himba",
    name: "辛巴族底色",
    aliases: [],
    workId: "binti",
    domain: "realm",
    summary: "以辛巴族为底色。",
    description: "以辛巴族为底色。",
    firstPrinciples: [
      { principle: "辛巴族底色", verdict: "achieved", note: "作为背景" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-neural",
    name: "神经接口",
    aliases: [],
    workId: "binti",
    domain: "artifact",
    summary: "以植入、联机的神经。",
    description: "以植入、联机的神经。",
    firstPrinciples: [
      { principle: "植入联机", verdict: "achieved", note: "现实有脑机" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-peace",
    name: "和平使",
    aliases: [],
    workId: "binti",
    domain: "realm",
    summary: "以和平使、解的使。",
    description: "以和平使、解的使。",
    firstPrinciples: [
      { principle: "和平使解", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-ancient",
    name: "古器存智",
    aliases: [],
    workId: "binti",
    domain: "artifact",
    summary: "以古器、存智的物。",
    description: "以古器、存智的物。",
    firstPrinciples: [
      { principle: "古器存智", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bi-symbiosis",
    name: "共生化敌",
    aliases: [],
    workId: "binti",
    domain: "lore",
    summary: "以共生、化敌的术。",
    description: "以共生、化敌的术。",
    firstPrinciples: [
      { principle: "共生化敌", verdict: "achieved", note: "作为主题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cw-will",
    name: "城市意志",
    aliases: [],
    workId: "city-we-became",
    domain: "lore",
    summary: "以城市为、有意识的体。",
    description: "以城市为、有意识的体。",
    firstPrinciples: [
      { principle: "城市有意识", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cw-avatar",
    name: "区化身",
    aliases: [],
    workId: "city-we-became",
    domain: "beast",
    summary: "以 borough 化、身的灵。",
    description: "以 borough 化、身的灵。",
    firstPrinciples: [
      { principle: "区化身心", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cw-enemy",
    name: "吞噬之敌",
    aliases: [],
    workId: "city-we-became",
    domain: "lore",
    summary: "以吞噬、城市的敌。",
    description: "以吞噬、城市的敌。",
    firstPrinciples: [
      { principle: "敌吞噬城", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cw-ny",
    name: "纽约底色",
    aliases: [],
    workId: "city-we-became",
    domain: "realm",
    summary: "以纽约为底色的城。",
    description: "以纽约为底色的城。",
    firstPrinciples: [
      { principle: "纽约底色", verdict: "achieved", note: "作为地理" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cw-gate",
    name: "门连通界",
    aliases: [],
    workId: "city-we-became",
    domain: "realm",
    summary: "以门通、连的界。",
    description: "以门通、连的界。",
    firstPrinciples: [
      { principle: "门通连界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cw-memory",
    name: "记忆重塑",
    aliases: [],
    workId: "city-we-became",
    domain: "lore",
    summary: "以记忆、重塑空间。",
    description: "以记忆、重塑空间。",
    firstPrinciples: [
      { principle: "记忆重塑空间", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cw-borough",
    name: "五区分立",
    aliases: [],
    workId: "city-we-became",
    domain: "realm",
    summary: "以五区、分立的城。",
    description: "以五区、分立的城。",
    firstPrinciples: [
      { principle: "五区分立", verdict: "achieved", note: "作为地理" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cw-rebuild",
    name: "重建护城",
    aliases: [],
    workId: "city-we-became",
    domain: "realm",
    summary: "以重建、护城的役。",
    description: "以重建、护城的役。",
    firstPrinciples: [
      { principle: "重建护城", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "cw-lang",
    name: "语言构城",
    aliases: [],
    workId: "city-we-became",
    domain: "magic",
    summary: "以语言、构城的术。",
    description: "以语言、构城的术。",
    firstPrinciples: [
      { principle: "语言构城", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "cw-crisis",
    name: "危机醒城",
    aliases: [],
    workId: "city-we-became",
    domain: "lore",
    summary: "以危机、醒城的衅。",
    description: "以危机、醒城的衅。",
    firstPrinciples: [
      { principle: "危机醒城", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gd-cavalier",
    name: "尸骨构造",
    aliases: [],
    workId: "gideon",
    domain: "artifact",
    summary: "以尸体与骨、构战力。",
    description: "以尸体与骨、构战力。",
    firstPrinciples: [
      { principle: "尸骨构战力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gd-sword",
    name: "魂封剑",
    aliases: [],
    workId: "gideon",
    domain: "lore",
    summary: "以灵魂封、入剑的术。",
    description: "以灵魂封、入剑的术。",
    firstPrinciples: [
      { principle: "魂封入剑", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gd-necro",
    name: "死灵祭司",
    aliases: [],
    workId: "gideon",
    domain: "lore",
    summary: "以死灵、御敌的祭司。",
    description: "以死灵、御敌的祭司。",
    firstPrinciples: [
      { principle: "死灵御敌", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gd-knight",
    name: "骑士护卫",
    aliases: [],
    workId: "gideon",
    domain: "realm",
    summary: "以骑士、护主的制。",
    description: "以骑士、护主的制。",
    firstPrinciples: [
      { principle: "骑士护主", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gd-trial",
    name: "继承试炼",
    aliases: [],
    workId: "gideon",
    domain: "realm",
    summary: "以试炼、夺继的局。",
    description: "以试炼、夺继的局。",
    firstPrinciples: [
      { principle: "试炼夺继", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gd-hiveless",
    name: "无魂活尸",
    aliases: [],
    workId: "gideon",
    domain: "beast",
    summary: "以无魂、存的体。",
    description: "以无魂、存的体。",
    firstPrinciples: [
      { principle: "无魂存体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gd-flesh",
    name: "血肉重躯",
    aliases: [],
    workId: "gideon",
    domain: "beast",
    summary: "以血肉、重的躯。",
    description: "以血肉、重的躯。",
    firstPrinciples: [
      { principle: "血肉重躯", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gd-palace",
    name: "古宫藏秘",
    aliases: [],
    workId: "gideon",
    domain: "realm",
    summary: "以古宫、藏秘的宅。",
    description: "以古宫、藏秘的宅。",
    firstPrinciples: [
      { principle: "古宫藏秘", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "gd-curse",
    name: "诅咒缠契",
    aliases: [],
    workId: "gideon",
    domain: "lore",
    summary: "以诅咒、缠的契。",
    description: "以诅咒、缠的契。",
    firstPrinciples: [
      { principle: "诅咒缠契", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "gd-rapier",
    name: "魔法剑器",
    aliases: [],
    workId: "gideon",
    domain: "artifact",
    summary: "以剑、施的术器。",
    description: "以剑、施的术器。",
    firstPrinciples: [
      { principle: "剑施术", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sc-school",
    name: "孤校活存",
    aliases: [],
    workId: "scholomance",
    domain: "realm",
    summary: "以孤校、活存的制。",
    description: "以孤校、活存的制。",
    firstPrinciples: [
      { principle: "孤校活存", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sc-mana",
    name: "魔能直施",
    aliases: [],
    workId: "scholomance",
    domain: "magic",
    summary: "以 mana 直、施的法。",
    description: "以 mana 直、施的法。",
    firstPrinciples: [
      { principle: "mana直施", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sc-enmity",
    name: "恶意造物",
    aliases: [],
    workId: "scholomance",
    domain: "beast",
    summary: "以恶意、猎生的物。",
    description: "以恶意、猎生的物。",
    firstPrinciples: [
      { principle: "恶意猎生", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sc-party",
    name: "组队合击",
    aliases: [],
    workId: "scholomance",
    domain: "realm",
    summary: "以组队、合的制。",
    description: "以组队、合的制。",
    firstPrinciples: [
      { principle: "组队合", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sc-survive",
    name: "毕业生试",
    aliases: [],
    workId: "scholomance",
    domain: "realm",
    summary: "以毕业、生的试。",
    description: "以毕业、生的试。",
    firstPrinciples: [
      { principle: "毕业生试", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sc-blackschool",
    name: "暗底学府",
    aliases: [],
    workId: "scholomance",
    domain: "realm",
    summary: "以暗、底的学。",
    description: "以暗、底的学。",
    firstPrinciples: [
      { principle: "暗底学", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sc-shift",
    name: "变形潜行",
    aliases: [],
    workId: "scholomance",
    domain: "beast",
    summary: "以变形、潜的术。",
    description: "以变形、潜的术。",
    firstPrinciples: [
      { principle: "变形潜", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sc-ward",
    name: "结界护身",
    aliases: [],
    workId: "scholomance",
    domain: "lore",
    summary: "以结界、护的术。",
    description: "以结界、护的术。",
    firstPrinciples: [
      { principle: "结界护", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sc-cursed",
    name: "咒缠物",
    aliases: [],
    workId: "scholomance",
    domain: "lore",
    summary: "以咒、缠的物。",
    description: "以咒、缠的物。",
    firstPrinciples: [
      { principle: "咒缠物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sc-familiar",
    name: "魔宠伴灵",
    aliases: [],
    workId: "scholomance",
    domain: "beast",
    summary: "以魔宠、伴的灵。",
    description: "以魔宠、伴的灵。",
    firstPrinciples: [
      { principle: "魔宠伴灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-word",
    name: "语言控实",
    aliases: [],
    workId: "books-of-babel",
    domain: "magic",
    summary: "以真名与语、控现实。",
    description: "以真名与语、控现实。",
    firstPrinciples: [
      { principle: "语言控现实", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-tower",
    name: "无尽高塔",
    aliases: [],
    workId: "books-of-babel",
    domain: "realm",
    summary: "以无尽、高塔的构。",
    description: "以无尽、高塔的构。",
    firstPrinciples: [
      { principle: "无尽塔", verdict: "breakthrough", note: "巨构设想" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-layer",
    name: "层闭小宇",
    aliases: [],
    workId: "books-of-babel",
    domain: "realm",
    summary: "以层、闭的小宇。",
    description: "以层、闭的小宇。",
    firstPrinciples: [
      { principle: "层闭小宇", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-climber",
    name: "攀登探塔",
    aliases: [],
    workId: "books-of-babel",
    domain: "realm",
    summary: "以攀登、探塔的者。",
    description: "以攀登、探塔的者。",
    firstPrinciples: [
      { principle: "攀登探塔", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-gatekeeper",
    name: "守门限入",
    aliases: [],
    workId: "books-of-babel",
    domain: "lore",
    summary: "以守门、限入的职。",
    description: "以守门、限入的职。",
    firstPrinciples: [
      { principle: "守门限入", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-library",
    name: "秘藏书馆",
    aliases: [],
    workId: "books-of-babel",
    domain: "lore",
    summary: "以书、载秘的馆。",
    description: "以书、载秘的馆。",
    firstPrinciples: [
      { principle: "书载秘", verdict: "achieved", note: "作为设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-servitor",
    name: "机械侍者",
    aliases: [],
    workId: "books-of-babel",
    domain: "artifact",
    summary: "以机械、侍的器。",
    description: "以机械、侍的器。",
    firstPrinciples: [
      { principle: "机械侍", verdict: "achieved", note: "机器人近似" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-puzzle",
    name: "谜题求解",
    aliases: [],
    workId: "books-of-babel",
    domain: "lore",
    summary: "以谜、解的题。",
    description: "以谜、解的题。",
    firstPrinciples: [
      { principle: "谜解", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-fall",
    name: "坠落失险",
    aliases: [],
    workId: "books-of-babel",
    domain: "realm",
    summary: "以坠、失的险。",
    description: "以坠、失的险。",
    firstPrinciples: [
      { principle: "坠落失险", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-throne",
    name: "掌塔之君",
    aliases: [],
    workId: "books-of-babel",
    domain: "lore",
    summary: "以王、掌塔的君。",
    description: "以王、掌塔的君。",
    firstPrinciples: [
      { principle: "王掌塔", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-narrative",
    name: "叙事维生",
    aliases: [],
    workId: "starless-sea",
    domain: "lore",
    summary: "以故事、维生的界。",
    description: "以故事、维生的界。",
    firstPrinciples: [
      { principle: "故事维生", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-ocean",
    name: "地下海厅",
    aliases: [],
    workId: "starless-sea",
    domain: "realm",
    summary: "以地下、海的厅。",
    description: "以地下、海的厅。",
    firstPrinciples: [
      { principle: "地下海厅", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-gate",
    name: "门通叙事界",
    aliases: [],
    workId: "starless-sea",
    domain: "realm",
    summary: "以门、通叙事界的。",
    description: "以门、通叙事界的。",
    firstPrinciples: [
      { principle: "门通叙事界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-honey",
    name: "引路蜜",
    aliases: [],
    workId: "starless-sea",
    domain: "artifact",
    summary: "以蜜、引路的物。",
    description: "以蜜、引路的物。",
    firstPrinciples: [
      { principle: "蜜引路", verdict: "achieved", note: "作为隐喻" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-key",
    name: "开启之钥",
    aliases: [],
    workId: "starless-sea",
    domain: "artifact",
    summary: "以钥、开的器。",
    description: "以钥、开的器。",
    firstPrinciples: [
      { principle: "钥开器", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-city",
    name: "城市意志",
    aliases: [],
    workId: "starless-sea",
    domain: "lore",
    summary: "以城、为体的识。",
    description: "以城、为体的识。",
    firstPrinciples: [
      { principle: "城为体识", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-sail",
    name: "穿叙事航",
    aliases: [],
    workId: "starless-sea",
    domain: "realm",
    summary: "以舟、穿叙事的旅。",
    description: "以舟、穿叙事的旅。",
    firstPrinciples: [
      { principle: "舟穿叙事", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-cat",
    name: "伴航之猫",
    aliases: [],
    workId: "starless-sea",
    domain: "beast",
    summary: "以猫、伴的灵。",
    description: "以猫、伴的灵。",
    firstPrinciples: [
      { principle: "猫伴灵", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-guardian",
    name: "守门兽",
    aliases: [],
    workId: "starless-sea",
    domain: "beast",
    summary: "以守、门的兽。",
    description: "以守、门的兽。",
    firstPrinciples: [
      { principle: "守门兽", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-triforce",
    name: "三角力量",
    aliases: [],
    workId: "zelda",
    domain: "artifact",
    summary: "力量、智慧、勇气三枚黄金三角，集齐者可得神力统御世界。",
    description: "力量、智慧、勇气三枚黄金三角，集齐者可得神力统御世界。",
    firstPrinciples: [
      { principle: "以神圣造物统御世界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-mastersword",
    name: "大师之剑",
    aliases: [],
    workId: "zelda",
    domain: "artifact",
    summary: "沉睡于台座、能驱退邪恶的退魔之刃，仅被选中者可拔。",
    description: "沉睡于台座、能驱退邪恶的退魔之刃，仅被选中者可拔。",
    firstPrinciples: [
      { principle: "圣剑自带驱魔之力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-sheikah",
    name: "希卡古代科技",
    aliases: [],
    workId: "zelda",
    domain: "artifact",
    summary: "守护者、神庙与希卡之石等远古自动机械与能源体系。",
    description: "守护者、神庙与希卡之石等远古自动机械与能源体系。",
    firstPrinciples: [
      { principle: "自主战斗机械与远程能源", verdict: "breakthrough", note: "机械可近似，智能自主受限" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-hyrule",
    name: "海拉鲁王国",
    aliases: [],
    workId: "zelda",
    domain: "realm",
    summary: "系列反复上演的人类王国与荒野并存的地图世界。",
    description: "系列反复上演的人类王国与荒野并存的地图世界。",
    firstPrinciples: [
      { principle: "虚构王国作为世界构建", verdict: "achieved", note: "仅为虚构世界设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-hylia",
    name: "女神与创世",
    aliases: [],
    workId: "zelda",
    domain: "lore",
    summary: "女神封印灾厄、其魂转世为塞尔达的创世神话。",
    description: "女神封印灾厄、其魂转世为塞尔达的创世神话。",
    firstPrinciples: [
      { principle: "神祇转世干预世事", verdict: "violated", note: "仅为神话叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-rune",
    name: "符文与咒法",
    aliases: [],
    workId: "zelda",
    domain: "magic",
    summary: "以符文吟唱驱动火冰光等元素魔法的体系。",
    description: "以符文吟唱驱动火冰光等元素魔法的体系。",
    firstPrinciples: [
      { principle: "言语符文直接改现实", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-time",
    name: "时空回溯",
    aliases: [],
    workId: "zelda",
    domain: "realm",
    summary: "时之笛与神庙使时间跳跃或回到过去的机制。",
    description: "时之笛与神庙使时间跳跃或回到过去的机制。",
    firstPrinciples: [
      { principle: "局部时间可逆跳", verdict: "breakthrough", note: "现实时间不可逆" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-majoramask",
    name: "魔吉拉的假面",
    aliases: [],
    workId: "zelda",
    domain: "artifact",
    summary: "戴上即被面具意志侵蚀、获得神力却走向毁灭的面具。",
    description: "戴上即被面具意志侵蚀、获得神力却走向毁灭的面具。",
    firstPrinciples: [
      { principle: "器物夺舍意志", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-zora",
    name: "卓拉与哥隆等异族",
    aliases: [],
    workId: "zelda",
    domain: "beast",
    summary: "水生卓拉、岩生哥隆、鸟人隆隆等类人族群共存。",
    description: "水生卓拉、岩生哥隆、鸟人隆隆等类人族群共存。",
    firstPrinciples: [
      { principle: "多样类人智慧种族", verdict: "breakthrough", note: "生物可演化出多样形态" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "zelda-calamity",
    name: "灾厄盖侬",
    aliases: [],
    workId: "zelda",
    domain: "lore",
    summary: "以怨念凝聚、操控远古兵器封印之物的存在。",
    description: "以怨念凝聚、操控远古兵器封印之物的存在。",
    firstPrinciples: [
      { principle: "怨念化为实体意志", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-creature",
    name: "宝可梦",
    aliases: [],
    workId: "pokemon",
    domain: "beast",
    summary: "可被收服、共生并随训练成长的奇幻生物。",
    description: "可被收服、共生并随训练成长的奇幻生物。",
    firstPrinciples: [
      { principle: "具超常能力的生物", verdict: "violated", note: "无对应物种" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-ball",
    name: "精灵球",
    aliases: [],
    workId: "pokemon",
    domain: "artifact",
    summary: "将宝可梦收纳、缩小并存储于球中的装置。",
    description: "将宝可梦收纳、缩小并存储于球中的装置。",
    firstPrinciples: [
      { principle: "活体被缩小收纳", verdict: "violated", note: "生物不可如此封装" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-evolution",
    name: "进化",
    aliases: [],
    workId: "pokemon",
    domain: "beast",
    summary: "达等级或触道具即形态跃迁的进化机制。",
    description: "达等级或触道具即形态跃迁的进化机制。",
    firstPrinciples: [
      { principle: "个体瞬间定向变形", verdict: "violated", note: "演化非定向瞬时" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-league",
    name: "道馆与联盟",
    aliases: [],
    workId: "pokemon",
    domain: "realm",
    summary: "训练家以对战证明实力、逐级挑战的等级体系。",
    description: "训练家以对战证明实力、逐级挑战的等级体系。",
    firstPrinciples: [
      { principle: "竞赛式实力认证体系", verdict: "achieved", note: "现实赛事体系成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-mewtwo",
    name: "超梦",
    aliases: [],
    workId: "pokemon",
    domain: "beast",
    summary: "以梦幻基因人工克隆、强化出的超能力宝可梦。",
    description: "以梦幻基因人工克隆、强化出的超能力宝可梦。",
    firstPrinciples: [
      { principle: "基因工程造特殊生物", verdict: "breakthrough", note: "克隆可行但非此形态" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-type",
    name: "属性相克",
    aliases: [],
    workId: "pokemon",
    domain: "lore",
    summary: "火水草等属性循环克制的对战规则。",
    description: "火水草等属性循环克制的对战规则。",
    firstPrinciples: [
      { principle: "属性间有克制关系", verdict: "achieved", note: "作为对战规则成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-legendary",
    name: "传说宝可梦",
    aliases: [],
    workId: "pokemon",
    domain: "beast",
    summary: "创世神兽如洛奇亚、烈空坐、阿尔宙斯等。",
    description: "创世神兽如洛奇亚、烈空坐、阿尔宙斯等。",
    firstPrinciples: [
      { principle: "具创世级神力的兽", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-telepathy",
    name: "念力与超能力",
    aliases: [],
    workId: "pokemon",
    domain: "magic",
    summary: "以念力移动物体、读取与预知的能力。",
    description: "以念力移动物体、读取与预知的能力。",
    firstPrinciples: [
      { principle: "意识直接作用物质", verdict: "violated", note: "无物理机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-pc",
    name: "PC 存储系统",
    aliases: [],
    workId: "pokemon",
    domain: "artifact",
    summary: "全球联网、远程存取宝可梦的存储网络。",
    description: "全球联网、远程存取宝可梦的存储网络。",
    firstPrinciples: [
      { principle: "远程存取活体存储", verdict: "breakthrough", note: "云存储可近似，存生物不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "pokemon-region",
    name: "地区地图",
    aliases: [],
    workId: "pokemon",
    domain: "realm",
    summary: "关都、丰缘等可探索、含城镇与野外的开放地区。",
    description: "关都、丰缘等可探索、含城镇与野外的开放地区。",
    firstPrinciples: [
      { principle: "虚构可探索地区", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dq-hero",
    name: "勇者",
    aliases: [],
    workId: "dragon-quest",
    domain: "lore",
    summary: "被神选中、持神之剑讨伐魔王的凡人宿命。",
    description: "被神选中、持神之剑讨伐魔王的凡人宿命。",
    firstPrinciples: [
      { principle: "神选者讨伐宿敌", verdict: "violated", note: "仅为叙事母题" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dq-slime",
    name: "史莱姆",
    aliases: [],
    workId: "dragon-quest",
    domain: "beast",
    summary: "系列吉祥物，可塑形、低威胁的凝胶魔物。",
    description: "系列吉祥物，可塑形、低威胁的凝胶魔物。",
    firstPrinciples: [
      { principle: "凝胶状可塑生物", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dq-metal",
    name: "金属史莱姆",
    aliases: [],
    workId: "dragon-quest",
    domain: "beast",
    summary: "高价值、极难捕获的稀有金属种。",
    description: "高价值、极难捕获的稀有金属种。",
    firstPrinciples: [
      { principle: "金属质稀有魔物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dq-spell",
    name: "咒文",
    aliases: [],
    workId: "dragon-quest",
    domain: "magic",
    summary: "美拉、基拉等以单词发动的攻击与回复魔法。",
    description: "美拉、基拉等以单词发动的攻击与回复魔法。",
    firstPrinciples: [
      { principle: "单词即发魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dq-medal",
    name: "怪物勋章",
    aliases: [],
    workId: "dragon-quest",
    domain: "artifact",
    summary: "收集并召唤怪物助战的勋章系统。",
    description: "收集并召唤怪物助战的勋章系统。",
    firstPrinciples: [
      { principle: "器物召唤战斗单位", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dq-zenith",
    name: "天空人装备",
    aliases: [],
    workId: "dragon-quest",
    domain: "artifact",
    summary: "天空人传说中遗留的铠甲与剑套装。",
    description: "天空人传说中遗留的铠甲与剑套装。",
    firstPrinciples: [
      { principle: "传说级套装造物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "dq-alchemy",
    name: "炼金合成",
    aliases: [],
    workId: "dragon-quest",
    domain: "alchemy",
    summary: "将素材合成为新道具与装备的配方体系。",
    description: "将素材合成为新道具与装备的配方体系。",
    firstPrinciples: [
      { principle: "配方重组材料", verdict: "breakthrough", note: "现实合成有近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "dq-worldmap",
    name: "世界地图",
    aliases: [],
    workId: "dragon-quest",
    domain: "realm",
    summary: "overworld 与城塞、洞窟递归构成的地图结构。",
    description: "overworld 与城塞、洞窟递归构成的地图结构。",
    firstPrinciples: [
      { principle: "虚构递归地图", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "dq-yggdrasil",
    name: "世界树",
    aliases: [],
    workId: "dragon-quest",
    domain: "realm",
    summary: "连接世界、孕育生命的巨大神话之树。",
    description: "连接世界、孕育生命的巨大神话之树。",
    firstPrinciples: [
      { principle: "巨型生命树", verdict: "breakthrough", note: "巨树在物理上可设想" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "dq-goddragon",
    name: "神龙与魔王",
    aliases: [],
    workId: "dragon-quest",
    domain: "lore",
    summary: "创世神龙与宿敌魔王对立的神魔框架。",
    description: "创世神龙与宿敌魔王对立的神魔框架。",
    firstPrinciples: [
      { principle: "神魔二元对立", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mh-elder",
    name: "古龙",
    aliases: [],
    workId: "monster-hunter",
    domain: "beast",
    summary: "操控天候与生态、居食物链顶端的怪物。",
    description: "操控天候与生态、居食物链顶端的怪物。",
    firstPrinciples: [
      { principle: "具气象级能力的兽", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mh-hunt",
    name: "狩猎",
    aliases: [],
    workId: "monster-hunter",
    domain: "realm",
    summary: "单人或多人数协作讨伐巨兽并取材的活动。",
    description: "单人或多人数协作讨伐巨兽并取材的活动。",
    firstPrinciples: [
      { principle: "协作讨伐巨兽", verdict: "achieved", note: "作为游戏活动结构" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mh-forge",
    name: "武器锻造",
    aliases: [],
    workId: "monster-hunter",
    domain: "artifact",
    summary: "以怪物素材打造逐级强化武器的体系。",
    description: "以怪物素材打造逐级强化武器的体系。",
    firstPrinciples: [
      { principle: "素材逐级强化造物", verdict: "achieved", note: "现实锻造升级成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mh-ecology",
    name: "生态",
    aliases: [],
    workId: "monster-hunter",
    domain: "beast",
    summary: "怪物食性、领地、迁徙等拟真生态设计。",
    description: "怪物食性、领地、迁徙等拟真生态设计。",
    firstPrinciples: [
      { principle: "拟真生物生态", verdict: "achieved", note: "生态学研究现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mh-armor",
    name: "防具套装",
    aliases: [],
    workId: "monster-hunter",
    domain: "artifact",
    summary: "依怪物部位制作、带技能加成的防具。",
    description: "依怪物部位制作、带技能加成的防具。",
    firstPrinciples: [
      { principle: "部位制甲胄增益", verdict: "achieved", note: "甲胄工艺现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mh-dragonelement",
    name: "龙属性",
    aliases: [],
    workId: "monster-hunter",
    domain: "magic",
    summary: "具腐蚀现实法则的古龙能量属性。",
    description: "具腐蚀现实法则的古龙能量属性。",
    firstPrinciples: [
      { principle: "能量改写物理法则", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mh-palico",
    name: "艾露猫",
    aliases: [],
    workId: "monster-hunter",
    domain: "beast",
    summary: "协同作战、会使用工具的人形猫族。",
    description: "协同作战、会使用工具的人形猫族。",
    firstPrinciples: [
      { principle: "拟人化工具猫族", verdict: "violated", note: "无对应物种" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mh-village",
    name: "据点村落",
    aliases: [],
    workId: "monster-hunter",
    domain: "realm",
    summary: "以猎人公会联结、提供补给的聚落。",
    description: "以猎人公会联结、提供补给的聚落。",
    firstPrinciples: [
      { principle: "公会联结的聚落", verdict: "achieved", note: "作为社会组织" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mh-potion",
    name: "回复药与秘药",
    aliases: [],
    workId: "monster-hunter",
    domain: "alchemy",
    summary: "以草药炼制、瞬时疗伤的药剂体系。",
    description: "以草药炼制、瞬时疗伤的药剂体系。",
    firstPrinciples: [
      { principle: "草药瞬时疗伤", verdict: "breakthrough", note: "草药医学可近似，瞬效不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "mh-wyvern",
    name: "飞龙种",
    aliases: [],
    workId: "monster-hunter",
    domain: "beast",
    summary: "似龙无前肢、喷吐元素的飞行巨兽。",
    description: "似龙无前肢、喷吐元素的飞行巨兽。",
    firstPrinciples: [
      { principle: "喷吐元素飞行兽", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hk-hallownest",
    name: "圣巢王国",
    aliases: [],
    workId: "hollow-knight",
    domain: "realm",
    summary: "由昆虫族群建立、毁于辐光感染的地下文明。",
    description: "由昆虫族群建立、毁于辐光感染的地下文明。",
    firstPrinciples: [
      { principle: "昆虫建文明", verdict: "violated", note: "昆虫无文明能力" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hk-radiance",
    name: "辐光感染",
    aliases: [],
    workId: "hollow-knight",
    domain: "magic",
    summary: "以光为载体的心智瘟疫，寄生并同化意识。",
    description: "以光为载体的心智瘟疫，寄生并同化意识。",
    firstPrinciples: [
      { principle: "光载体心智瘟疫", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hk-shade",
    name: "暗影与灵魂",
    aliases: [],
    workId: "hollow-knight",
    domain: "lore",
    summary: "死亡化为可回收暗影、灵魂可重聚的设定。",
    description: "死亡化为可回收暗影、灵魂可重聚的设定。",
    firstPrinciples: [
      { principle: "灵魂离体可回收", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hk-knight",
    name: "空洞骑士",
    aliases: [],
    workId: "hollow-knight",
    domain: "beast",
    summary: "被注灵、以面具承痛的苍白容器。",
    description: "被注灵、以面具承痛的苍白容器。",
    firstPrinciples: [
      { principle: "人工造容器承灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hk-nail",
    name: "骨钉与护符",
    aliases: [],
    workId: "hollow-knight",
    domain: "artifact",
    summary: "以骨钉为兵、护符提供增益的装备体系。",
    description: "以骨钉为兵、护符提供增益的装备体系。",
    firstPrinciples: [
      { principle: "护符增益装备体系", verdict: "achieved", note: "作为装备系统" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hk-dream",
    name: "梦境神龛",
    aliases: [],
    workId: "hollow-knight",
    domain: "realm",
    summary: "入梦与挑战梦境 Boss 的维度空间。",
    description: "入梦与挑战梦境 Boss 的维度空间。",
    firstPrinciples: [
      { principle: "可入的梦境维度", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hk-mask",
    name: "生命面具",
    aliases: [],
    workId: "hollow-knight",
    domain: "artifact",
    summary: "以面具碎片计量与承载生命的设定。",
    description: "以面具碎片计量与承载生命的设定。",
    firstPrinciples: [
      { principle: "生命以面具计量", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hk-cartography",
    name: "制图传统",
    aliases: [],
    workId: "hollow-knight",
    domain: "realm",
    summary: "以探索驱动、由制图师绘制的地图习惯。",
    description: "以探索驱动、由制图师绘制的地图习惯。",
    firstPrinciples: [
      { principle: "探索绘制地图", verdict: "achieved", note: "制图学现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hk-colosseum",
    name: "竞技场试炼",
    aliases: [],
    workId: "hollow-knight",
    domain: "realm",
    summary: "以连续战斗证明实力的试炼场。",
    description: "以连续战斗证明实力的试炼场。",
    firstPrinciples: [
      { principle: "连续战斗试炼", verdict: "achieved", note: "作为竞技结构" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hk-godhome",
    name: "神居与丝之神",
    aliases: [],
    workId: "hollow-knight",
    domain: "magic",
    summary: "以丝线编织命运与复生的古神设定。",
    description: "以丝线编织命运与复生的古神设定。",
    firstPrinciples: [
      { principle: "丝线编织命运", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-blood",
    name: "血疗",
    aliases: [],
    workId: "bloodborne",
    domain: "alchemy",
    summary: "以古神之血治疗延寿，反致兽化的疗法。",
    description: "以古神之血治疗延寿，反致兽化的疗法。",
    firstPrinciples: [
      { principle: "输血获超自然力", verdict: "violated", note: "输血无此效" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-greatone",
    name: "古神",
    aliases: [],
    workId: "bloodborne",
    domain: "lore",
    summary: "高维存在，以梦境与血脉影响人类。",
    description: "高维存在，以梦境与血脉影响人类。",
    firstPrinciples: [
      { principle: "高维存在介入", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-beast",
    name: "兽化",
    aliases: [],
    workId: "bloodborne",
    domain: "beast",
    summary: "受血毒驱使、丧失理智的半兽化现象。",
    description: "受血毒驱使、丧失理智的半兽化现象。",
    firstPrinciples: [
      { principle: "人类兽化变身", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-insight",
    name: "洞察",
    aliases: [],
    workId: "bloodborne",
    domain: "magic",
    summary: "认知异界真相后获得的维度感知力。",
    description: "认知异界真相后获得的维度感知力。",
    firstPrinciples: [
      { principle: "认知改变感知维度", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-hunter",
    name: "猎人",
    aliases: [],
    workId: "bloodborne",
    domain: "realm",
    summary: "持械夜猎野兽、以灯火为据的守护者。",
    description: "持械夜猎野兽、以灯火为据的守护者。",
    firstPrinciples: [
      { principle: "夜猎兽的守护者", verdict: "achieved", note: "作为职能设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-yharnam",
    name: "雅南",
    aliases: [],
    workId: "bloodborne",
    domain: "realm",
    summary: "哥特病城，血疫蔓延的开放都市。",
    description: "哥特病城，血疫蔓延的开放都市。",
    firstPrinciples: [
      { principle: "虚构哥特病城", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-tool",
    name: "兵装与枪刃",
    aliases: [],
    workId: "bloodborne",
    domain: "artifact",
    summary: "变形兵装与内藏火枪的近战武器。",
    description: "变形兵装与内藏火枪的近战武器。",
    firstPrinciples: [
      { principle: "近战结合火器", verdict: "achieved", note: "现实火器近战结合存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bb-chalice",
    name: "圣杯地牢",
    aliases: [],
    workId: "bloodborne",
    domain: "realm",
    summary: "以仪式生成的无限地下迷宫。",
    description: "以仪式生成的无限地下迷宫。",
    firstPrinciples: [
      { principle: "仪式生成现实迷宫", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-ebrietas",
    name: "伊碧塔斯",
    aliases: [],
    workId: "bloodborne",
    domain: "beast",
    summary: "无眼古神，以触手与光攻击的存在。",
    description: "无眼古神，以触手与光攻击的存在。",
    firstPrinciples: [
      { principle: "触手光攻击古神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bb-moon",
    name: "月神与梦",
    aliases: [],
    workId: "bloodborne",
    domain: "magic",
    summary: "以梦界连接现世与古神的维度。",
    description: "以梦界连接现世与古神的维度。",
    firstPrinciples: [
      { principle: "梦界连接维度", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-prosthetic",
    name: "义手",
    aliases: [],
    workId: "sekiro",
    domain: "artifact",
    summary: "可换装火筒、钩绳、矛等多种兵装的木制义肢。",
    description: "可换装火筒、钩绳、矛等多种兵装的木制义肢。",
    firstPrinciples: [
      { principle: "模块化多工具义肢", verdict: "breakthrough", note: "义肢现实存在，模块化未至" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-deflect",
    name: "拼刀弹刀",
    aliases: [],
    workId: "sekiro",
    domain: "realm",
    summary: "以精准格挡化解攻击的剑技体系。",
    description: "以精准格挡化解攻击的剑技体系。",
    firstPrinciples: [
      { principle: "精准格挡剑技", verdict: "achieved", note: "剑术现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-resurrect",
    name: "龙胤不死",
    aliases: [],
    workId: "sekiro",
    domain: "lore",
    summary: "以龙胤血复活、不死不灭的诅咒。",
    description: "以龙胤血复活、不死不灭的诅咒。",
    firstPrinciples: [
      { principle: "血统赋予复活", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-ninja",
    name: "忍者",
    aliases: [],
    workId: "sekiro",
    domain: "realm",
    summary: "潜行、毒与机关并用的战国忍者。",
    description: "潜行、毒与机关并用的战国忍者。",
    firstPrinciples: [
      { principle: "潜行暗杀忍者", verdict: "achieved", note: "忍者史实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-grappling",
    name: "钩绳机动",
    aliases: [],
    workId: "sekiro",
    domain: "artifact",
    summary: "以钩绳在地形间摆荡位移的装备。",
    description: "以钩绳在地形间摆荡位移的装备。",
    firstPrinciples: [
      { principle: "钩绳摆荡位移", verdict: "achieved", note: "钩索现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-divine",
    name: "神之领域",
    aliases: [],
    workId: "sekiro",
    domain: "magic",
    summary: "樱龙掌控生死、降下神雨的领域。",
    description: "樱龙掌控生死、降下神雨的领域。",
    firstPrinciples: [
      { principle: "神兽控生死降雨", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-monkey",
    name: "变若之子",
    aliases: [],
    workId: "sekiro",
    domain: "beast",
    summary: "操控幻术与多臂的猿猴怪物。",
    description: "操控幻术与多臂的猿猴怪物。",
    firstPrinciples: [
      { principle: "幻术多臂猿", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-spirit",
    name: "怨灵与神社",
    aliases: [],
    workId: "sekiro",
    domain: "lore",
    summary: "供奉神灵、驱散怨灵的民间信仰。",
    description: "供奉神灵、驱散怨灵的民间信仰。",
    firstPrinciples: [
      { principle: "供奉驱怨灵", verdict: "violated", note: "仅为信仰" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-ashina",
    name: "苇名国",
    aliases: [],
    workId: "sekiro",
    domain: "realm",
    summary: "战国小国与其叛乱衰亡的史剧舞台。",
    description: "战国小国与其叛乱衰亡的史剧舞台。",
    firstPrinciples: [
      { principle: "虚构战国小国", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sekiro-immortal",
    name: "不死斩",
    aliases: [],
    workId: "sekiro",
    domain: "artifact",
    summary: "专门斩断不死的禁忌之刀。",
    description: "专门斩断不死的禁忌之刀。",
    firstPrinciples: [
      { principle: "刀斩断不死", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fable-aura",
    name: "英雄光环",
    aliases: [],
    workId: "fable",
    domain: "lore",
    summary: "善恶行为改变外貌与世界的设定。",
    description: "善恶行为改变外貌与世界的设定。",
    firstPrinciples: [
      { principle: "道德改变化身", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fable-will",
    name: "意志魔法",
    aliases: [],
    workId: "fable",
    domain: "magic",
    summary: "以意念发动推、爆、时间减速的魔法。",
    description: "以意念发动推、爆、时间减速的魔法。",
    firstPrinciples: [
      { principle: "意念改现实", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fable-guild",
    name: "英雄公会",
    aliases: [],
    workId: "fable",
    domain: "realm",
    summary: "训练并派出英雄的行会体系。",
    description: "训练并派出英雄的行会体系。",
    firstPrinciples: [
      { principle: "英雄行会体系", verdict: "achieved", note: "行会现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fable-albion",
    name: "阿尔比恩",
    aliases: [],
    workId: "fable",
    domain: "realm",
    summary: "英式奇幻大陆的开放王国。",
    description: "英式奇幻大陆的开放王国。",
    firstPrinciples: [
      { principle: "虚构奇幻大陆", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fable-gold",
    name: "金币与财富",
    aliases: [],
    workId: "fable",
    domain: "realm",
    summary: "以财富衡量声望的世俗体系。",
    description: "以财富衡量声望的世俗体系。",
    firstPrinciples: [
      { principle: "财富衡声望", verdict: "achieved", note: "现实经济成立" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fable-demon",
    name: "魔剑封印",
    aliases: [],
    workId: "fable",
    domain: "artifact",
    summary: "体内封印魔剑、可控暴走的设定。",
    description: "体内封印魔剑、可控暴走的设定。",
    firstPrinciples: [
      { principle: "体内封魔剑", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fable-creatures",
    name: "巨兽与平衡",
    aliases: [],
    workId: "fable",
    domain: "beast",
    summary: "巨狼、巨虫等寓言式怪物。",
    description: "巨狼、巨虫等寓言式怪物。",
    firstPrinciples: [
      { principle: "巨型寓言兽", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fable-age",
    name: "年龄演进",
    aliases: [],
    workId: "fable",
    domain: "realm",
    summary: "童年到老年的实时成长系统。",
    description: "童年到老年的实时成长系统。",
    firstPrinciples: [
      { principle: "实时年龄成长", verdict: "achieved", note: "衰老现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fable-school",
    name: "魔法学院",
    aliases: [],
    workId: "fable",
    domain: "magic",
    summary: "系统讲授法术的学校。",
    description: "系统讲授法术的学校。",
    firstPrinciples: [
      { principle: "系统讲授魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fable-renown",
    name: "声望系统",
    aliases: [],
    workId: "fable",
    domain: "realm",
    summary: "行为累积名誉影响 NPC 态度。",
    description: "行为累积名誉影响 NPC 态度。",
    firstPrinciples: [
      { principle: "行为积名誉", verdict: "achieved", note: "声誉机制现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "eq-norrath",
    name: "诺拉斯",
    aliases: [],
    workId: "everquest",
    domain: "realm",
    summary: "多大陆、多种族的 MMORPG 世界。",
    description: "多大陆、多种族的 MMORPG 世界。",
    firstPrinciples: [
      { principle: "虚构多大陆世界", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "eq-plane",
    name: "位面",
    aliases: [],
    workId: "everquest",
    domain: "realm",
    summary: "以元素与神域构成的异界层。",
    description: "以元素与神域构成的异界层。",
    firstPrinciples: [
      { principle: "分层异界可穿梭", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "eq-class",
    name: "职业系统",
    aliases: [],
    workId: "everquest",
    domain: "realm",
    summary: "战士、法师、牧师等分工明确的职业。",
    description: "战士、法师、牧师等分工明确的职业。",
    firstPrinciples: [
      { principle: "分工职业体系", verdict: "achieved", note: "作为规则抽象" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "eq-mana",
    name: "法力",
    aliases: [],
    workId: "everquest",
    domain: "magic",
    summary: "施法消耗的魔力资源。",
    description: "施法消耗的魔力资源。",
    firstPrinciples: [
      { principle: "施法耗魔力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "eq-deity",
    name: "神祇",
    aliases: [],
    workId: "everquest",
    domain: "lore",
    summary: "可信仰并赐福玩家的多神。",
    description: "可信仰并赐福玩家的多神。",
    firstPrinciples: [
      { principle: "神赐福信徒", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "eq-raid",
    name: "团队副本",
    aliases: [],
    workId: "everquest",
    domain: "realm",
    summary: "数十人协作挑战世界 Boss 的活动。",
    description: "数十人协作挑战世界 Boss 的活动。",
    firstPrinciples: [
      { principle: "大型协作挑战", verdict: "achieved", note: "MMO 团本现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "eq-undead",
    name: "亡灵",
    aliases: [],
    workId: "everquest",
    domain: "beast",
    summary: "尸王、幽灵等不死敌人。",
    description: "尸王、幽灵等不死敌人。",
    firstPrinciples: [
      { principle: "不死生物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "eq-portal",
    name: "传送石",
    aliases: [],
    workId: "everquest",
    domain: "realm",
    summary: "连接城镇的固定传送点。",
    description: "连接城镇的固定传送点。",
    firstPrinciples: [
      { principle: "定点空间传送", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "eq-tradeskill",
    name: "制作技能",
    aliases: [],
    workId: "everquest",
    domain: "artifact",
    summary: "以采集材料手工制造装备。",
    description: "以采集材料手工制造装备。",
    firstPrinciples: [
      { principle: "材料手工制造", verdict: "achieved", note: "手工制造现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "eq-dragon",
    name: "巨龙",
    aliases: [],
    workId: "everquest",
    domain: "beast",
    summary: "世界 Boss 级的远古巨龙。",
    description: "世界 Boss 级的远古巨龙。",
    firstPrinciples: [
      { principle: "楼宇级巨龙", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rs-gielinor",
    name: "吉里安诺",
    aliases: [],
    workId: "runescape",
    domain: "realm",
    summary: "由神创的多大陆奇幻世界。",
    description: "由神创的多大陆奇幻世界。",
    firstPrinciples: [
      { principle: "神创世界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rs-rune",
    name: "符文魔法",
    aliases: [],
    workId: "runescape",
    domain: "magic",
    summary: "以符文组合咏唱的元素法术。",
    description: "以符文组合咏唱的元素法术。",
    firstPrinciples: [
      { principle: "符文组合施法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rs-skill",
    name: "技能系统",
    aliases: [],
    workId: "runescape",
    domain: "realm",
    summary: "伐木、采矿、钓鱼等数百种生活技能。",
    description: "伐木、采矿、钓鱼等数百种生活技能。",
    firstPrinciples: [
      { principle: "生活技能进阶", verdict: "achieved", note: "技能进阶现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rs-quest",
    name: "任务体系",
    aliases: [],
    workId: "runescape",
    domain: "realm",
    summary: "叙事驱动的开放任务线。",
    description: "叙事驱动的开放任务线。",
    firstPrinciples: [
      { principle: "叙事任务线", verdict: "achieved", note: "作为系统" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rs-god",
    name: "诸神战争",
    aliases: [],
    workId: "runescape",
    domain: "lore",
    summary: "以信仰分裂的诸神冲突。",
    description: "以信仰分裂的诸神冲突。",
    firstPrinciples: [
      { principle: "诸神以信仰战", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rs-dragon",
    name: "龙与龙火盾",
    aliases: [],
    workId: "runescape",
    domain: "beast",
    summary: "喷火龙与抗龙火护具。",
    description: "喷火龙与抗龙火护具。",
    firstPrinciples: [
      { principle: "喷火巨龙", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rs-bank",
    name: "银行系统",
    aliases: [],
    workId: "runescape",
    domain: "artifact",
    summary: "全网通用的物品远程存储。",
    description: "全网通用的物品远程存储。",
    firstPrinciples: [
      { principle: "远程物品存储", verdict: "breakthrough", note: "云库存可近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "rs-slayer",
    name: "猎妖任务",
    aliases: [],
    workId: "runescape",
    domain: "realm",
    summary: "以许可猎杀指定怪物的行会。",
    description: "以许可猎杀指定怪物的行会。",
    firstPrinciples: [
      { principle: "许可猎杀行会", verdict: "achieved", note: "作为组织" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rs-teleport",
    name: "传送法术",
    aliases: [],
    workId: "runescape",
    domain: "realm",
    summary: "以符文瞬移到城镇。",
    description: "以符文瞬移到城镇。",
    firstPrinciples: [
      { principle: "符文瞬移", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rs-questcape",
    name: "任务披风",
    aliases: [],
    workId: "runescape",
    domain: "artifact",
    summary: "完成任务获象征性披风奖励。",
    description: "完成任务获象征性披风奖励。",
    firstPrinciples: [
      { principle: "成就象征披风", verdict: "achieved", note: "奖励象征现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ps-sigil",
    name: "印记城",
    aliases: [],
    workId: "planescape",
    domain: "realm",
    summary: "位于无限层面中心、连接诸位面的城市。",
    description: "位于无限层面中心、连接诸位面的城市。",
    firstPrinciples: [
      { principle: "中心连通诸位面城", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ps-plane",
    name: "位面多元",
    aliases: [],
    workId: "planescape",
    domain: "realm",
    summary: "上层、下层、外层等层叠宇宙。",
    description: "上层、下层、外层等层叠宇宙。",
    firstPrinciples: [
      { principle: "层叠可穿梭宇宙", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ps-nameless",
    name: "无名氏之不死",
    aliases: [],
    workId: "planescape",
    domain: "lore",
    summary: "主角不断转生、记忆残留的诅咒。",
    description: "主角不断转生、记忆残留的诅咒。",
    firstPrinciples: [
      { principle: "不断转生留记忆", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ps-factions",
    name: "派系",
    aliases: [],
    workId: "planescape",
    domain: "realm",
    summary: "以哲学信条划分的都市派系。",
    description: "以哲学信条划分的都市派系。",
    firstPrinciples: [
      { principle: "哲学信条派系", verdict: "achieved", note: "思想派系现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "ps-portal",
    name: "传送门",
    aliases: [],
    workId: "planescape",
    domain: "realm",
    summary: "以特定钥匙开启的位面门。",
    description: "以特定钥匙开启的位面门。",
    firstPrinciples: [
      { principle: "钥匙开启位面门", verdict: "violated", note: "无机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ps-modron",
    name: "魔冢",
    aliases: [],
    workId: "planescape",
    domain: "beast",
    summary: "以几何理性运作的位面机械种族。",
    description: "以几何理性运作的位面机械种族。",
    firstPrinciples: [
      { principle: "几何理性机械族", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ps-night",
    name: "夜之低语",
    aliases: [],
    workId: "planescape",
    domain: "lore",
    summary: "跨位面传播的预言之声。",
    description: "跨位面传播的预言之声。",
    firstPrinciples: [
      { principle: "跨位面预言声", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ps-lady",
    name: "痛苦之女",
    aliases: [],
    workId: "planescape",
    domain: "lore",
    summary: "以痛苦衡量存在的女神。",
    description: "以痛苦衡量存在的女神。",
    firstPrinciples: [
      { principle: "痛苦即存在女神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ps-union",
    name: "万械之合",
    aliases: [],
    workId: "planescape",
    domain: "lore",
    summary: "统一多元宇宙的终极哲学追求。",
    description: "统一多元宇宙的终极哲学追求。",
    firstPrinciples: [
      { principle: "统一多元宇宙", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ps-torment",
    name: "折磨循环",
    aliases: [],
    workId: "planescape",
    domain: "lore",
    summary: "以受苦换取救赎与真相的主题。",
    description: "以受苦换取救赎与真相的主题。",
    firstPrinciples: [
      { principle: "受苦换救赎主题", verdict: "achieved", note: "作为叙事主题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-swordcoast",
    name: "剑湾",
    aliases: [],
    workId: "baldurs-gate",
    domain: "realm",
    summary: "被遗忘国度的北方海岸地带。",
    description: "被遗忘国度的北方海岸地带。",
    firstPrinciples: [
      { principle: "虚构海岸地带", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-bhaal",
    name: "巴尔之血",
    aliases: [],
    workId: "baldurs-gate",
    domain: "lore",
    summary: "弑神之子 inherits 杀戮命运的血统。",
    description: "弑神之子 inherits 杀戮命运的血统。",
    firstPrinciples: [
      { principle: "血统承载命运", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-spell",
    name: "法术环",
    aliases: [],
    workId: "baldurs-gate",
    domain: "magic",
    summary: "以环位量化的施法体系（源自 D&D）。",
    description: "以环位量化的施法体系（源自 D&D）。",
    firstPrinciples: [
      { principle: "环位量化施法", verdict: "violated", note: "仅为规则" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-companion",
    name: "同伴系统",
    aliases: [],
    workId: "baldurs-gate",
    domain: "realm",
    summary: "招募、好感与多线剧情的队伍机制。",
    description: "招募、好感与多线剧情的队伍机制。",
    firstPrinciples: [
      { principle: "同伴多线剧情", verdict: "achieved", note: "作为系统" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-mindflayer",
    name: "夺心魔",
    aliases: [],
    workId: "baldurs-gate",
    domain: "beast",
    summary: "以触手吸脑、操控心智的怪物。",
    description: "以触手吸脑、操控心智的怪物。",
    firstPrinciples: [
      { principle: "吸脑控心怪物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-god",
    name: "神祇干预",
    aliases: [],
    workId: "baldurs-gate",
    domain: "lore",
    summary: "神可直接赐法或降临影响凡间。",
    description: "神可直接赐法或降临影响凡间。",
    firstPrinciples: [
      { principle: "神直接干预", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-infernal",
    name: "炼狱契约",
    aliases: [],
    workId: "baldurs-gate",
    domain: "lore",
    summary: "与魔鬼交易灵魂换取力量。",
    description: "与魔鬼交易灵魂换取力量。",
    firstPrinciples: [
      { principle: "交易灵魂换力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-potion",
    name: "药剂炼制",
    aliases: [],
    workId: "baldurs-gate",
    domain: "alchemy",
    summary: "以材料调配增益与治疗药剂。",
    description: "以材料调配增益与治疗药剂。",
    firstPrinciples: [
      { principle: "调配增益药剂", verdict: "breakthrough", note: "草药医学可近似，瞬效不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "bg-city",
    name: "博德之门城",
    aliases: [],
    workId: "baldurs-gate",
    domain: "realm",
    summary: "野心贵族与铁王座阴谋的自由都市。",
    description: "野心贵族与铁王座阴谋的自由都市。",
    firstPrinciples: [
      { principle: "虚构自由都市", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bg-golem",
    name: "魔像",
    aliases: [],
    workId: "baldurs-gate",
    domain: "artifact",
    summary: "以符文与素材驱动的构装仆从。",
    description: "以符文与素材驱动的构装仆从。",
    firstPrinciples: [
      { principle: "符文驱动构装体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-amaterasu",
    name: "天照",
    aliases: [],
    workId: "okami",
    domain: "beast",
    summary: "化身为白狼的太阳女神。",
    description: "化身为白狼的太阳女神。",
    firstPrinciples: [
      { principle: "神化白狼", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-brush",
    name: "笔神系统",
    aliases: [],
    workId: "okami",
    domain: "magic",
    summary: "以毛笔蘸墨绘制太阳、风、斩等改现实。",
    description: "以毛笔蘸墨绘制太阳、风、斩等改现实。",
    firstPrinciples: [
      { principle: "绘画改现实", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-nippon",
    name: "日本国",
    aliases: [],
    workId: "okami",
    domain: "realm",
    summary: "和风神话重生的净土世界。",
    description: "和风神话重生的净土世界。",
    firstPrinciples: [
      { principle: "和风神话世界", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "okami-yami",
    name: "常闇之皇",
    aliases: [],
    workId: "okami",
    domain: "beast",
    summary: "吞噬光明的八岐大蛇化身。",
    description: "吞噬光明的八岐大蛇化身。",
    firstPrinciples: [
      { principle: "八岐大蛇化身", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-yokami",
    name: "一木一草之神",
    aliases: [],
    workId: "okami",
    domain: "lore",
    summary: "草木器物皆有神栖的泛灵信仰。",
    description: "草木器物皆有神栖的泛灵信仰。",
    firstPrinciples: [
      { principle: "万物有灵", verdict: "violated", note: "仅为信仰" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-kushi",
    name: "奇稻田姬",
    aliases: [],
    workId: "okami",
    domain: "lore",
    summary: "被献祭、与神联姻的巫女。",
    description: "被献祭、与神联姻的巫女。",
    firstPrinciples: [
      { principle: "献祭联姻巫女", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-sakuya",
    name: "咲耶姬",
    aliases: [],
    workId: "okami",
    domain: "lore",
    summary: "统领高天原的木花之女神。",
    description: "统领高天原的木花之女神。",
    firstPrinciples: [
      { principle: "木花女神", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-instruments",
    name: "乐器召唤",
    aliases: [],
    workId: "okami",
    domain: "magic",
    summary: "以琴笛呼唤神灵与天气。",
    description: "以琴笛呼唤神灵与天气。",
    firstPrinciples: [
      { principle: "乐器唤神天气", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-fortune",
    name: "福与灾",
    aliases: [],
    workId: "okami",
    domain: "lore",
    summary: "以信仰增减的祸福循环。",
    description: "以信仰增减的祸福循环。",
    firstPrinciples: [
      { principle: "信仰定祸福", verdict: "violated", note: "仅为信仰" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "okami-celestial",
    name: "神笔",
    aliases: [],
    workId: "okami",
    domain: "artifact",
    summary: "天照所持、汇聚十三笔神之力的神笔。",
    description: "天照所持、汇聚十三笔神之力的神笔。",
    firstPrinciples: [
      { principle: "神笔聚神力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-bionis",
    name: "两神遗骸",
    aliases: [],
    workId: "xenoblade",
    domain: "realm",
    summary: "两尊巨神遗体化作世界的上下大陆。",
    description: "两尊巨神遗体化作世界的上下大陆。",
    firstPrinciples: [
      { principle: "神遗骸成世界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-monado",
    name: "蒙纳多",
    aliases: [],
    workId: "xenoblade",
    domain: "artifact",
    summary: "斩断机神兵、预示未来的神剑。",
    description: "斩断机神兵、预示未来的神剑。",
    firstPrinciples: [
      { principle: "神剑斩机械预知", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-homs",
    name: "荷姆斯",
    aliases: [],
    workId: "xenoblade",
    domain: "beast",
    summary: "居于神遗骸上的人类族。",
    description: "居于神遗骸上的人类族。",
    firstPrinciples: [
      { principle: "神骸上人类族", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-mechon",
    name: "机神兵",
    aliases: [],
    workId: "xenoblade",
    domain: "artifact",
    summary: "以面部核心驱动的机械军团。",
    description: "以面部核心驱动的机械军团。",
    firstPrinciples: [
      { principle: "核心驱动机械军", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-ether",
    name: "以太",
    aliases: [],
    workId: "xenoblade",
    domain: "magic",
    summary: "驱动魔法与机械的能量源。",
    description: "驱动魔法与机械的能量源。",
    firstPrinciples: [
      { principle: "万能能量源", verdict: "violated", note: "能量守恒" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-telethia",
    name: "telethia",
    aliases: [],
    workId: "xenoblade",
    domain: "beast",
    summary: "以声波与光攻击的高维生命。",
    description: "以声波与光攻击的高维生命。",
    firstPrinciples: [
      { principle: "高维声光生命", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-colony",
    name: "殖民团",
    aliases: [],
    workId: "xenoblade",
    domain: "realm",
    summary: "以聚居与贸易维生的群落。",
    description: "以聚居与贸易维生的群落。",
    firstPrinciples: [
      { principle: "聚居贸易群落", verdict: "achieved", note: "聚落现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "xb-time",
    name: "时间跳跃",
    aliases: [],
    workId: "xenoblade",
    domain: "realm",
    summary: "跨越远古与现世的时间线叙事。",
    description: "跨越远古与现世的时间线叙事。",
    firstPrinciples: [
      { principle: "跨时间线叙事", verdict: "breakthrough", note: "时间旅行物理受限" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-nopon",
    name: "诺彭族",
    aliases: [],
    workId: "xenoblade",
    domain: "beast",
    summary: "矮小贪财、会经商的毛球族。",
    description: "矮小贪财、会经商的毛球族。",
    firstPrinciples: [
      { principle: "经商毛球族", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "xb-zanza",
    name: "赞扎",
    aliases: [],
    workId: "xenoblade",
    domain: "lore",
    summary: "创世与灭世的神性存在。",
    description: "创世与灭世的神性存在。",
    firstPrinciples: [
      { principle: "创世灭世神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-bath",
    name: "汤屋",
    aliases: [],
    workId: "spirited-away",
    domain: "realm",
    summary: "供神明沐浴的澡堂异界。",
    description: "供神明沐浴的澡堂异界。",
    firstPrinciples: [
      { principle: "神明澡堂异界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-yubaba",
    name: "汤婆婆",
    aliases: [],
    workId: "spirited-away",
    domain: "magic",
    summary: "以契约夺名、役使人类的魔女。",
    description: "以契约夺名、役使人类的魔女。",
    firstPrinciples: [
      { principle: "契约夺名役使", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-name",
    name: "名字契约",
    aliases: [],
    workId: "spirited-away",
    domain: "lore",
    summary: "失去名字即失自我的魔法束缚。",
    description: "失去名字即失自我的魔法束缚。",
    firstPrinciples: [
      { principle: "失名失自我", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-river",
    name: "白龙河神",
    aliases: [],
    workId: "spirited-away",
    domain: "beast",
    summary: "化人形、掌水路的河流神灵。",
    description: "化人形、掌水路的河流神灵。",
    firstPrinciples: [
      { principle: "河流神灵化形", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-noface",
    name: "无脸男",
    aliases: [],
    workId: "spirited-away",
    domain: "lore",
    summary: "吞食欲望、膨胀的孤独灵体。",
    description: "吞食欲望、膨胀的孤独灵体。",
    firstPrinciples: [
      { principle: "吞噬欲望灵体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-kami",
    name: "八百万神",
    aliases: [],
    workId: "spirited-away",
    domain: "lore",
    summary: "以物与自然为体的日本神道众神。",
    description: "以物与自然为体的日本神道众神。",
    firstPrinciples: [
      { principle: "万物为神", verdict: "violated", note: "仅为信仰" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-transform",
    name: "变形诅咒",
    aliases: [],
    workId: "spirited-away",
    domain: "beast",
    summary: "千寻父母被变为猪的诅咒。",
    description: "千寻父母被变为猪的诅咒。",
    firstPrinciples: [
      { principle: "人类变猪", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-train",
    name: "海上列车",
    aliases: [],
    workId: "spirited-away",
    domain: "realm",
    summary: "驶向沼底、无返程的幽冥列车。",
    description: "驶向沼底、无返程的幽冥列车。",
    firstPrinciples: [
      { principle: "幽冥列车", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-lantern",
    name: "纸灯笼与符",
    aliases: [],
    workId: "spirited-away",
    domain: "artifact",
    summary: "以灯与符界定人神界线。",
    description: "以灯与符界定人神界线。",
    firstPrinciples: [
      { principle: "灯符界定人神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sa-purify",
    name: "河神净化",
    aliases: [],
    workId: "spirited-away",
    domain: "alchemy",
    summary: "以劳作清除河神体内污物的仪式。",
    description: "以劳作清除河神体内污物的仪式。",
    firstPrinciples: [
      { principle: "劳作净污仪式", verdict: "breakthrough", note: "清理真实，神格化不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "mk-forest",
    name: "森林神灵",
    aliases: [],
    workId: "mononoke",
    domain: "realm",
    summary: "以鹿神与木灵为体的活森林。",
    description: "以鹿神与木灵为体的活森林。",
    firstPrinciples: [
      { principle: "活森林有神灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mk-shishigami",
    name: "麒麟兽",
    aliases: [],
    workId: "mononoke",
    domain: "beast",
    summary: "掌管生死、首级引灾的神兽。",
    description: "掌管生死、首级引灾的神兽。",
    firstPrinciples: [
      { principle: "掌生死神兽", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mk-tatarigami",
    name: "祟神",
    aliases: [],
    workId: "mononoke",
    domain: "lore",
    summary: "怨恨化形的疫与咒。",
    description: "怨恨化形的疫与咒。",
    firstPrinciples: [
      { principle: "怨恨化疫咒", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mk-iron",
    name: "铁匠与火枪",
    aliases: [],
    workId: "mononoke",
    domain: "artifact",
    summary: "以炼铁与火器对抗神明的聚落概念。",
    description: "以炼铁与火器对抗神明的聚落概念。",
    firstPrinciples: [
      { principle: "炼铁火器概念", verdict: "achieved", note: "冶金火器现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mk-kodama",
    name: "木灵",
    aliases: [],
    workId: "mononoke",
    domain: "beast",
    summary: "栖息林木、示吉凶的小精灵。",
    description: "栖息林木、示吉凶的小精灵。",
    firstPrinciples: [
      { principle: "林木小精灵", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mk-eboshi",
    name: "幻姬",
    aliases: [],
    workId: "mononoke",
    domain: "realm",
    summary: "以工业与雇佣兵开拓的女首领。",
    description: "以工业与雇佣兵开拓的女首领。",
    firstPrinciples: [
      { principle: "工业开拓首领", verdict: "achieved", note: "作为人物设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mk-wolf",
    name: "狼神养母",
    aliases: [],
    workId: "mononoke",
    domain: "beast",
    summary: "被狼神抚养的人类少女。",
    description: "被狼神抚养的人类少女。",
    firstPrinciples: [
      { principle: "狼神抚养人", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mk-nature",
    name: "自然反扑",
    aliases: [],
    workId: "mononoke",
    domain: "realm",
    summary: "自然以瘟疫与兽群报复人类的主题。",
    description: "自然以瘟疫与兽群报复人类的主题。",
    firstPrinciples: [
      { principle: "生态报复主题", verdict: "achieved", note: "生态崩溃现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mk-curse",
    name: "咒毒",
    aliases: [],
    workId: "mononoke",
    domain: "magic",
    summary: "伤口受神怒蔓延致死的诅咒。",
    description: "伤口受神怒蔓延致死的诅咒。",
    firstPrinciples: [
      { principle: "神怒咒毒蔓延", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mk-emishi",
    name: "虾夷遗民",
    aliases: [],
    workId: "mononoke",
    domain: "realm",
    summary: "被边缘化、守旧信仰的族群。",
    description: "被边缘化、守旧信仰的族群。",
    firstPrinciples: [
      { principle: "边缘化信仰族", verdict: "achieved", note: "虾夷史实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "na-valley",
    name: "风之谷",
    aliases: [],
    workId: "nausicaa",
    domain: "realm",
    summary: "洁净风护佑、免于腐海的避难地。",
    description: "洁净风护佑、免于腐海的避难地。",
    firstPrinciples: [
      { principle: "洁净风避难地", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "na-sea",
    name: "腐海",
    aliases: [],
    workId: "nausicaa",
    domain: "realm",
    summary: "净化毒气、由孢子森林构成的生态。",
    description: "净化毒气、由孢子森林构成的生态。",
    firstPrinciples: [
      { principle: "毒孢子森林", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "na-ohmu",
    name: "王虫",
    aliases: [],
    workId: "nausicaa",
    domain: "beast",
    summary: "巨型群居、 telepathic 的甲虫。",
    description: "巨型群居、 telepathic 的甲虫。",
    firstPrinciples: [
      { principle: " telepathic 巨甲虫", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "na-godwarrior",
    name: "巨神兵",
    aliases: [],
    workId: "nausicaa",
    domain: "artifact",
    summary: "远古文明遗留的生物兵器。",
    description: "远古文明遗留的生物兵器。",
    firstPrinciples: [
      { principle: "生物兵器", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "na-wind",
    name: "风与飞行",
    aliases: [],
    workId: "nausicaa",
    domain: "artifact",
    summary: "以滑翔翼借风飞行的概念。",
    description: "以滑翔翼借风飞行的概念。",
    firstPrinciples: [
      { principle: "滑翔翼借风", verdict: "achieved", note: "滑翔现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "na-spore",
    name: "孢子毒",
    aliases: [],
    workId: "nausicaa",
    domain: "realm",
    summary: "腐海释放腐蚀生物的孢子。",
    description: "腐海释放腐蚀生物的孢子。",
    firstPrinciples: [
      { principle: "腐蚀孢子", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "na-master",
    name: "御风者",
    aliases: [],
    workId: "nausicaa",
    domain: "lore",
    summary: "以理解与驯化自然为道的族长女。",
    description: "以理解与驯化自然为道的族长女。",
    firstPrinciples: [
      { principle: "驭自然之道", verdict: "achieved", note: "作为哲学" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "na-torumekia",
    name: "土鬼",
    aliases: [],
    workId: "nausicaa",
    domain: "realm",
    summary: "以科技与军队扩张的帝国。",
    description: "以科技与军队扩张的帝国。",
    firstPrinciples: [
      { principle: "虚构扩张帝国", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "na-clean",
    name: "净化机理",
    aliases: [],
    workId: "nausicaa",
    domain: "alchemy",
    summary: "腐海实则在净化土壤与水。",
    description: "腐海实则在净化土壤与水。",
    firstPrinciples: [
      { principle: "生物净化土壤", verdict: "breakthrough", note: "生物修复现实有近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "na-prophecy",
    name: "蓝衣救世",
    aliases: [],
    workId: "nausicaa",
    domain: "lore",
    summary: "踏清池而来的救世预言。",
    description: "踏清池而来的救世预言。",
    firstPrinciples: [
      { principle: "预言救世主", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lp-laputa",
    name: "拉普达",
    aliases: [],
    workId: "laputa",
    domain: "realm",
    summary: "以反重力石漂浮的空中遗迹文明。",
    description: "以反重力石漂浮的空中遗迹文明。",
    firstPrinciples: [
      { principle: "反重力浮空城", verdict: "violated", note: "无反重力机制" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lp-volucite",
    name: "飞行石",
    aliases: [],
    workId: "laputa",
    domain: "artifact",
    summary: "提供反重力与能源的晶体。",
    description: "提供反重力与能源的晶体。",
    firstPrinciples: [
      { principle: "反重力晶体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lp-robot",
    name: "守护机器人",
    aliases: [],
    workId: "laputa",
    domain: "artifact",
    summary: "以光能与磁悬浮作战的古代机械。",
    description: "以光能与磁悬浮作战的古代机械。",
    firstPrinciples: [
      { principle: "光磁悬浮机械", verdict: "breakthrough", note: "机器人现实，悬浮能源不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "lp-garden",
    name: "空中庭园",
    aliases: [],
    workId: "laputa",
    domain: "realm",
    summary: "悬浮岛屿上的生态花园。",
    description: "悬浮岛屿上的生态花园。",
    firstPrinciples: [
      { principle: "浮岛生态园", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lp-ai",
    name: "中央智能",
    aliases: [],
    workId: "laputa",
    domain: "artifact",
    summary: "控制全城运转的核心系统。",
    description: "控制全城运转的核心系统。",
    firstPrinciples: [
      { principle: "全城自控核心", verdict: "breakthrough", note: "控制系统现实，全城智能不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "lp-pirate",
    name: "朵拉一族",
    aliases: [],
    workId: "laputa",
    domain: "realm",
    summary: "以飞行艇劫掠的空贼家族。",
    description: "以飞行艇劫掠的空贼家族。",
    firstPrinciples: [
      { principle: "空贼家族", verdict: "achieved", note: "作为人物群体" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lp-military",
    name: "军队争夺",
    aliases: [],
    workId: "laputa",
    domain: "realm",
    summary: "以飞艇与要塞争夺遗迹的列强。",
    description: "以飞艇与要塞争夺遗迹的列强。",
    firstPrinciples: [
      { principle: "飞艇列强争夺", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "lp-castle",
    name: "石中剑与咒",
    aliases: [],
    workId: "laputa",
    domain: "magic",
    summary: "以真名封印城市的咒文。",
    description: "以真名封印城市的咒文。",
    firstPrinciples: [
      { principle: "真名封印城", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "lp-tree",
    name: "世界树",
    aliases: [],
    workId: "laputa",
    domain: "realm",
    summary: "支撑生态与传说的巨树。",
    description: "支撑生态与传说的巨树。",
    firstPrinciples: [
      { principle: "巨型支撑树", verdict: "breakthrough", note: "巨树物理可设想" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "lp-collapse",
    name: "文明崩落",
    aliases: [],
    workId: "laputa",
    domain: "lore",
    summary: "滥用科技致文明自毁的寓言。",
    description: "滥用科技致文明自毁的寓言。",
    firstPrinciples: [
      { principle: "科技自毁寓言", verdict: "achieved", note: "作为警示主题" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fm-alchemy",
    name: "炼金术",
    aliases: [],
    workId: "fullmetal",
    domain: "alchemy",
    summary: "等价交换下以阵图重构物质的术。",
    description: "等价交换下以阵图重构物质的术。",
    firstPrinciples: [
      { principle: "阵图重组物质", verdict: "violated", note: "物质守恒不可凭空重组" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fm-human",
    name: "人体炼成",
    aliases: [],
    workId: "fullmetal",
    domain: "alchemy",
    summary: "以阵图重编人体引发的禁忌。",
    description: "以阵图重编人体引发的禁忌。",
    firstPrinciples: [
      { principle: "阵图重编人体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fm-philosopher",
    name: "贤者之石",
    aliases: [],
    workId: "fullmetal",
    domain: "artifact",
    summary: "突破等价交换、催化炼成的红石。",
    description: "突破等价交换、催化炼成的红石。",
    firstPrinciples: [
      { principle: "破等价交换石", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fm-homunculus",
    name: "人造人",
    aliases: [],
    workId: "fullmetal",
    domain: "beast",
    summary: "以石为核、具七宗罪的人格体。",
    description: "以石为核、具七宗罪的人格体。",
    firstPrinciples: [
      { principle: "石核人格体", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fm-state",
    name: "国家炼金术师",
    aliases: [],
    workId: "fullmetal",
    domain: "realm",
    summary: "被国家授予衔级的军方术师。",
    description: "被国家授予衔级的军方术师。",
    firstPrinciples: [
      { principle: "国家授衔术师", verdict: "achieved", note: "作为制度" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fm-arms",
    name: "机械义肢",
    aliases: [],
    workId: "fullmetal",
    domain: "artifact",
    summary: "以钢制义肢替代残肢的概念。",
    description: "以钢制义肢替代残肢的概念。",
    firstPrinciples: [
      { principle: "钢制义肢", verdict: "achieved", note: "义肢现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fm-chimera",
    name: "合成兽",
    aliases: [],
    workId: "fullmetal",
    domain: "beast",
    summary: "缝合多种生物的人造混种。",
    description: "缝合多种生物的人造混种。",
    firstPrinciples: [
      { principle: "缝合混种生物", verdict: "violated", note: "伦理与生物不可" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fm-truth",
    name: "真理之门",
    aliases: [],
    workId: "fullmetal",
    domain: "lore",
    summary: "炼成失败所见的全知之门。",
    description: "炼成失败所见的全知之门。",
    firstPrinciples: [
      { principle: "全知之门", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fm-suit",
    name: "铠甲附灵",
    aliases: [],
    workId: "fullmetal",
    domain: "lore",
    summary: "灵魂附于铠甲存续的兄弟。",
    description: "灵魂附于铠甲存续的兄弟。",
    firstPrinciples: [
      { principle: "灵魂附铠甲", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fm-conspiracy",
    name: "军国阴谋",
    aliases: [],
    workId: "fullmetal",
    domain: "realm",
    summary: "以国家机器掩盖人造人计划。",
    description: "以国家机器掩盖人造人计划。",
    firstPrinciples: [
      { principle: "国家掩盖计划", verdict: "achieved", note: "作为叙事阴谋" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sao-nervgear",
    name: "NerveGear",
    aliases: [],
    workId: "sword-art-online",
    domain: "artifact",
    summary: "以神经连接实现完全潜行的头盔。",
    description: "以神经连接实现完全潜行的头盔。",
    firstPrinciples: [
      { principle: "神经全潜行", verdict: "breakthrough", note: "脑机接口弱近似，全潜行不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "sao-deathgame",
    name: "圈内死斗",
    aliases: [],
    workId: "sword-art-online",
    domain: "realm",
    summary: "不破 boss 不能登出的死亡游戏。",
    description: "不破 boss 不能登出的死亡游戏。",
    firstPrinciples: [
      { principle: "致死 VR 游戏", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sao-aincrad",
    name: "艾恩葛朗特",
    aliases: [],
    workId: "sword-art-online",
    domain: "realm",
    summary: "百层浮空城堡的封闭世界。",
    description: "百层浮空城堡的封闭世界。",
    firstPrinciples: [
      { principle: "浮空城堡世界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sao-skills",
    name: "剑技系统",
    aliases: [],
    workId: "sword-art-online",
    domain: "realm",
    summary: "以系统判定的必中剑技。",
    description: "以系统判定的必中剑技。",
    firstPrinciples: [
      { principle: "系统判定剑技", verdict: "achieved", note: "作为游戏系统" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sao-ai",
    name: "人工智能",
    aliases: [],
    workId: "sword-art-online",
    domain: "lore",
    summary: "具自我意识、能恋爱的 AI（尤伊、爱丽丝）。",
    description: "具自我意识、能恋爱的 AI（尤伊、爱丽丝）。",
    firstPrinciples: [
      { principle: "自我意识 AI", verdict: "breakthrough", note: "AI 现实但非此级" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "sao-feedback",
    name: "全感反馈",
    aliases: [],
    workId: "sword-art-online",
    domain: "artifact",
    summary: "虚拟痛觉与体感同步的反馈。",
    description: "虚拟痛觉与体感同步的反馈。",
    firstPrinciples: [
      { principle: "虚拟体感同步", verdict: "breakthrough", note: "触觉反馈弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "sao-gunverse",
    name: "异界群",
    aliases: [],
    workId: "sword-art-online",
    domain: "realm",
    summary: "以 ALFHEIM、GGO 等多样 VR 世界。",
    description: "以 ALFHEIM、GGO 等多样 VR 世界。",
    firstPrinciples: [
      { principle: "多样 VR 世界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sao-cardinal",
    name: "卡迪纳尔系统",
    aliases: [],
    workId: "sword-art-online",
    domain: "artifact",
    summary: "自主管理世界的底层系统。",
    description: "自主管理世界的底层系统。",
    firstPrinciples: [
      { principle: "自主世界管理", verdict: "breakthrough", note: "管理系统现实，全自主不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "sao-incarnation",
    name: "心意系统",
    aliases: [],
    workId: "sword-art-online",
    domain: "magic",
    summary: "以强烈意志改写虚拟法则。",
    description: "以强烈意志改写虚拟法则。",
    firstPrinciples: [
      { principle: "意志改虚拟法则", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sao-underworld",
    name: "Underworld",
    aliases: [],
    workId: "sword-art-online",
    domain: "realm",
    summary: "以光立方模拟灵魂的底层世界。",
    description: "以光立方模拟灵魂的底层世界。",
    firstPrinciples: [
      { principle: "光立方模拟魂", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-return",
    name: "死亡回归",
    aliases: [],
    workId: "rezero",
    domain: "lore",
    summary: "死于非命后在检查点重来的能力。",
    description: "死于非命后在检查点重来的能力。",
    firstPrinciples: [
      { principle: "死亡后重来", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-subaru",
    name: "菜月昴",
    aliases: [],
    workId: "rezero",
    domain: "lore",
    summary: "被召唤、持死亡回归的异世界人。",
    description: "被召唤、持死亡回归的异世界人。",
    firstPrinciples: [
      { principle: "召唤持回归者", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-witch",
    name: "魔女因子",
    aliases: [],
    workId: "rezero",
    domain: "magic",
    summary: "以诅咒与权能寄宿的恶意。",
    description: "以诅咒与权能寄宿的恶意。",
    firstPrinciples: [
      { principle: "诅咒权能寄宿", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-gate",
    name: "召唤之门",
    aliases: [],
    workId: "rezero",
    domain: "realm",
    summary: "以契约把人拉入异界的门。",
    description: "以契约把人拉入异界的门。",
    firstPrinciples: [
      { principle: "门拉人入界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-spirit",
    name: "精灵契约",
    aliases: [],
    workId: "rezero",
    domain: "magic",
    summary: "与四大精灵缔结的契约者。",
    description: "与四大精灵缔结的契约者。",
    firstPrinciples: [
      { principle: "与精灵契约", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-loop",
    name: "轮回记忆",
    aliases: [],
    workId: "rezero",
    domain: "lore",
    summary: "仅持者保留轮回记忆。",
    description: "仅持者保留轮回记忆。",
    firstPrinciples: [
      { principle: "独留轮回记忆", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-crusch",
    name: "王国政争",
    aliases: [],
    workId: "rezero",
    domain: "realm",
    summary: "以王选分裂的王国势力。",
    description: "以王选分裂的王国势力。",
    firstPrinciples: [
      { principle: "王选分裂势力", verdict: "achieved", note: "作为政治叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rz-beast",
    name: "魔兽",
    aliases: [],
    workId: "rezero",
    domain: "beast",
    summary: "具属性与领地的异界怪物。",
    description: "具属性与领地的异界怪物。",
    firstPrinciples: [
      { principle: "异界属性兽", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-barrier",
    name: "结界",
    aliases: [],
    workId: "rezero",
    domain: "magic",
    summary: "隔绝区域的魔法壁。",
    description: "隔绝区域的魔法壁。",
    firstPrinciples: [
      { principle: "魔法隔绝壁", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rz-credit",
    name: "名誉与债务",
    aliases: [],
    workId: "rezero",
    domain: "realm",
    summary: "以信任为资本的社交体系。",
    description: "以信任为资本的社交体系。",
    firstPrinciples: [
      { principle: "信任为资本", verdict: "achieved", note: "声誉经济现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-predator",
    name: "捕食者",
    aliases: [],
    workId: "slime",
    domain: "magic",
    summary: "以吸收获得对方能力、外貌的技能。",
    description: "以吸收获得对方能力、外貌的技能。",
    firstPrinciples: [
      { principle: "吸收获能力外貌", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-rimuru",
    name: "利姆露",
    aliases: [],
    workId: "slime",
    domain: "beast",
    summary: "转生为史莱姆、建国的人格。",
    description: "转生为史莱姆、建国的人格。",
    firstPrinciples: [
      { principle: "史莱姆人格", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-nation",
    name: "魔国联邦",
    aliases: [],
    workId: "slime",
    domain: "realm",
    summary: "以怪物为主体的自治国家。",
    description: "以怪物为主体的自治国家。",
    firstPrinciples: [
      { principle: "怪物自治国", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-greatsage",
    name: "大贤者",
    aliases: [],
    workId: "slime",
    domain: "artifact",
    summary: "内置分析决策的辅助智能。",
    description: "内置分析决策的辅助智能。",
    firstPrinciples: [
      { principle: "内置辅助智能", verdict: "breakthrough", note: "AI 助手现实近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-unique",
    name: "独特技能",
    aliases: [],
    workId: "slime",
    domain: "magic",
    summary: "以命名觉醒的个体专属技能。",
    description: "以命名觉醒的个体专属技能。",
    firstPrinciples: [
      { principle: "命名觉醒技能", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-tempest",
    name: "鸠拉大森林",
    aliases: [],
    workId: "slime",
    domain: "realm",
    summary: "联邦所在的森林领地。",
    description: "联邦所在的森林领地。",
    firstPrinciples: [
      { principle: "虚构森林领地", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-naming",
    name: "命名赋予",
    aliases: [],
    workId: "slime",
    domain: "magic",
    summary: "以命名令魔物进化进阶。",
    description: "以命名令魔物进化进阶。",
    firstPrinciples: [
      { principle: "命名促进化", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-dragon",
    name: "维鲁德拉",
    aliases: [],
    workId: "slime",
    domain: "beast",
    summary: "被封印的暴风龙。",
    description: "被封印的暴风龙。",
    firstPrinciples: [
      { principle: "封印暴风龙", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sl-trade",
    name: "贸易与外交",
    aliases: [],
    workId: "slime",
    domain: "realm",
    summary: "以国家间贸易维系的和平。",
    description: "以国家间贸易维系的和平。",
    firstPrinciples: [
      { principle: "国家贸易外交", verdict: "achieved", note: "外交现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "sl-majin",
    name: "魔王仪式",
    aliases: [],
    workId: "slime",
    domain: "lore",
    summary: "以吞噬觉醒为魔王的存在。",
    description: "以吞噬觉醒为魔王的存在。",
    firstPrinciples: [
      { principle: "吞噬觉醒魔王", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mi-abyss",
    name: "深渊",
    aliases: [],
    workId: "made-in-abyss",
    domain: "realm",
    summary: "分层、具升之诅咒的巨大竖洞。",
    description: "分层、具升之诅咒的巨大竖洞。",
    firstPrinciples: [
      { principle: "分层诅咒竖洞", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mi-curse",
    name: "上升诅咒",
    aliases: [],
    workId: "made-in-abyss",
    domain: "magic",
    summary: "自深层上行引发的生理诅咒。",
    description: "自深层上行引发的生理诅咒。",
    firstPrinciples: [
      { principle: "上行生理诅咒", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mi-relics",
    name: "遗物",
    aliases: [],
    workId: "made-in-abyss",
    domain: "artifact",
    summary: "具非常规功能的古代造物。",
    description: "具非常规功能的古代造物。",
    firstPrinciples: [
      { principle: "非常规功能造物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mi-whitewhistle",
    name: "白笛",
    aliases: [],
    workId: "made-in-abyss",
    domain: "realm",
    summary: "抵达深层的探窟家称号。",
    description: "抵达深层的探窟家称号。",
    firstPrinciples: [
      { principle: "深层探窟称号", verdict: "achieved", note: "作为等级称号" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mi-balloon",
    name: "浮游艇",
    aliases: [],
    workId: "made-in-abyss",
    domain: "artifact",
    summary: "以热球上浮探索的载具。",
    description: "以热球上浮探索的载具。",
    firstPrinciples: [
      { principle: "热球上浮载具", verdict: "achieved", note: "热气球现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "mi-creatures",
    name: "深渊生物",
    aliases: [],
    workId: "made-in-abyss",
    domain: "beast",
    summary: "适应各层毒与压的怪物。",
    description: "适应各层毒与压的怪物。",
    firstPrinciples: [
      { principle: "分层适应怪", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mi-cartridge",
    name: "生体能源装置",
    aliases: [],
    workId: "made-in-abyss",
    domain: "artifact",
    summary: "以生体能源驱动的装置。",
    description: "以生体能源驱动的装置。",
    firstPrinciples: [
      { principle: "生体能源装置", verdict: "breakthrough", note: "生物电池弱近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "mi-voice",
    name: "深渊之音",
    aliases: [],
    workId: "made-in-abyss",
    domain: "lore",
    summary: "深层诱人下行的幻听。",
    description: "深层诱人下行的幻听。",
    firstPrinciples: [
      { principle: "深层诱幻听", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mi-amber",
    name: "琥珀之泪",
    aliases: [],
    workId: "made-in-abyss",
    domain: "artifact",
    summary: "封存记忆与情感的结晶。",
    description: "封存记忆与情感的结晶。",
    firstPrinciples: [
      { principle: "封存记忆结晶", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "mi-orth",
    name: "奥斯镇",
    aliases: [],
    workId: "made-in-abyss",
    domain: "realm",
    summary: "立于深渊口的探窟者聚落。",
    description: "立于深渊口的探窟者聚落。",
    firstPrinciples: [
      { principle: "深渊口聚落", verdict: "achieved", note: "作为虚构城镇" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "magus-chise",
    name: "柴瑟",
    aliases: [],
    workId: "ancient-magus",
    domain: "lore",
    summary: "以自身为祭品联结龙与魔术的女孩。",
    description: "以自身为祭品联结龙与魔术的女孩。",
    firstPrinciples: [
      { principle: "人祭品联结魔术", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-magus",
    name: "魔术师",
    aliases: [],
    workId: "ancient-magus",
    domain: "magic",
    summary: "以龙之骨、星之髓等媒介施术者。",
    description: "以龙之骨、星之髓等媒介施术者。",
    firstPrinciples: [
      { principle: "媒介施术", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-dragon",
    name: "龙之骨",
    aliases: [],
    workId: "ancient-magus",
    domain: "artifact",
    summary: "作为魔力媒介的龙遗骸。",
    description: "作为魔力媒介的龙遗骸。",
    firstPrinciples: [
      { principle: "龙骨为媒介", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-fae",
    name: "妖精界",
    aliases: [],
    workId: "ancient-magus",
    domain: "realm",
    summary: "与人类界并存的精灵领域。",
    description: "与人类界并存的精灵领域。",
    firstPrinciples: [
      { principle: "并存精灵界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-contract",
    name: "师徒契约",
    aliases: [],
    workId: "ancient-magus",
    domain: "lore",
    summary: "以学徒契约绑定人妖的关系。",
    description: "以学徒契约绑定人妖的关系。",
    firstPrinciples: [
      { principle: "契约绑定关系", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-college",
    name: "伦敦魔术学院",
    aliases: [],
    workId: "ancient-magus",
    domain: "magic",
    summary: "系统讲授魔术的机构。",
    description: "系统讲授魔术的机构。",
    firstPrinciples: [
      { principle: "系统讲授魔术", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-silver",
    name: "银之枝",
    aliases: [],
    workId: "ancient-magus",
    domain: "magic",
    summary: "以天体运行推演的占术传统。",
    description: "以天体运行推演的占术传统。",
    firstPrinciples: [
      { principle: "天体占术", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-neighbors",
    name: "邻居们",
    aliases: [],
    workId: "ancient-magus",
    domain: "beast",
    summary: "栖于器物与草木的精怪。",
    description: "栖于器物与草木的精怪。",
    firstPrinciples: [
      { principle: "器物草木精怪", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-yggdrasil",
    name: "世界树",
    aliases: [],
    workId: "ancient-magus",
    domain: "realm",
    summary: "贯通诸界的神话巨树。",
    description: "贯通诸界的神话巨树。",
    firstPrinciples: [
      { principle: "贯通诸界巨树", verdict: "breakthrough", note: "巨树物理可设想" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "magus-sacrifice",
    name: "活祭传统",
    aliases: [],
    workId: "ancient-magus",
    domain: "lore",
    summary: "以献祭维系魔术平衡的旧习。",
    description: "以献祭维系魔术平衡的旧习。",
    firstPrinciples: [
      { principle: "献祭维系平衡", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bz-black",
    name: "黑色剑士",
    aliases: [],
    workId: "berserk",
    domain: "realm",
    summary: "持巨剑、烙印在身的复仇者。",
    description: "持巨剑、烙印在身的复仇者。",
    firstPrinciples: [
      { principle: "烙印复仇剑士", verdict: "achieved", note: "作为人物设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bz-behelit",
    name: "贝黑莱特",
    aliases: [],
    workId: "berserk",
    domain: "artifact",
    summary: "以血触发、召唤神之手的卵石。",
    description: "以血触发、召唤神之手的卵石。",
    firstPrinciples: [
      { principle: "血启召唤石", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bz-hand",
    name: "神之手",
    aliases: [],
    workId: "berserk",
    domain: "lore",
    summary: "以因果操控世界的五尊恶魔。",
    description: "以因果操控世界的五尊恶魔。",
    firstPrinciples: [
      { principle: "因果操控恶魔", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bz-brands",
    name: "烙印",
    aliases: [],
    workId: "berserk",
    domain: "lore",
    summary: "被选中、招引使徒的肉身印记。",
    description: "被选中、招引使徒的肉身印记。",
    firstPrinciples: [
      { principle: "肉身招引印记", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bz-apostle",
    name: "使徒",
    aliases: [],
    workId: "berserk",
    domain: "beast",
    summary: "以牺牲换形态与力量的魔物。",
    description: "以牺牲换形态与力量的魔物。",
    firstPrinciples: [
      { principle: "牺牲换形态力", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bz-eclipse",
    name: "蚀",
    aliases: [],
    workId: "berserk",
    domain: "realm",
    summary: "献祭同伴开启异界的血祭时刻。",
    description: "献祭同伴开启异界的血祭时刻。",
    firstPrinciples: [
      { principle: "血祭开异界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bz-sword",
    name: "斩龙剑",
    aliases: [],
    workId: "berserk",
    domain: "artifact",
    summary: "以龙牙锻造、克魔的巨剑。",
    description: "以龙牙锻造、克魔的巨剑。",
    firstPrinciples: [
      { principle: "龙牙克魔巨剑", verdict: "breakthrough", note: "巨剑现实，克魔不可" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "bz-band",
    name: "佣兵团",
    aliases: [],
    workId: "berserk",
    domain: "realm",
    summary: "以雇佣兵维生的战争集团。",
    description: "以雇佣兵维生的战争集团。",
    firstPrinciples: [
      { principle: "雇佣兵集团", verdict: "achieved", note: "佣兵史实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bz-armor",
    name: "狂战士铠",
    aliases: [],
    workId: "berserk",
    domain: "artifact",
    summary: "以痛觉换力量的诅咒铠甲。",
    description: "以痛觉换力量的诅咒铠甲。",
    firstPrinciples: [
      { principle: "痛换力诅咒铠", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bz-causality",
    name: "因果律",
    aliases: [],
    workId: "berserk",
    domain: "lore",
    summary: "神之手操纵命运走向的法则。",
    description: "神之手操纵命运走向的法则。",
    firstPrinciples: [
      { principle: "操纵命运因果", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rl-lodoss",
    name: "罗德斯岛",
    aliases: [],
    workId: "record-lodoss",
    domain: "realm",
    summary: "诸族混战的剑与魔法岛。",
    description: "诸族混战的剑与魔法岛。",
    firstPrinciples: [
      { principle: "虚构剑魔岛", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rl-dragon",
    name: "龙",
    aliases: [],
    workId: "record-lodoss",
    domain: "beast",
    summary: "守护宝物、智者的长寿龙族。",
    description: "守护宝物、智者的长寿龙族。",
    firstPrinciples: [
      { principle: "长寿智龙", verdict: "violated", note: "无对应生物" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rl-sword",
    name: "魂之水晶剑",
    aliases: [],
    workId: "record-lodoss",
    domain: "artifact",
    summary: "封印暗黑神的圣剑。",
    description: "封印暗黑神的圣剑。",
    firstPrinciples: [
      { principle: "封印邪神圣剑", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rl-dark",
    name: "暗黑神",
    aliases: [],
    workId: "record-lodoss",
    domain: "lore",
    summary: "被封印、欲重临的灭世邪神。",
    description: "被封印、欲重临的灭世邪神。",
    firstPrinciples: [
      { principle: "封印灭世神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rl-mage",
    name: "魔法师协会",
    aliases: [],
    workId: "record-lodoss",
    domain: "magic",
    summary: "系统研习魔法的组织。",
    description: "系统研习魔法的组织。",
    firstPrinciples: [
      { principle: "系统研习魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rl-witch",
    name: "卡修之女",
    aliases: [],
    workId: "record-lodoss",
    domain: "magic",
    summary: "持高位魔法的女巫线。",
    description: "持高位魔法的女巫线。",
    firstPrinciples: [
      { principle: "高位魔法女巫", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rl-dwarf",
    name: "矮人锻造",
    aliases: [],
    workId: "record-lodoss",
    domain: "artifact",
    summary: "以秘银打造武器的矮人。",
    description: "以秘银打造武器的矮人。",
    firstPrinciples: [
      { principle: "秘银锻造", verdict: "achieved", note: "冶金现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rl-elf",
    name: "精灵森林",
    aliases: [],
    workId: "record-lodoss",
    domain: "beast",
    summary: "守林长寿的精灵族。",
    description: "守林长寿的精灵族。",
    firstPrinciples: [
      { principle: "长寿精灵族", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "rl-king",
    name: "王权争夺",
    aliases: [],
    workId: "record-lodoss",
    domain: "realm",
    summary: "以王国与公国并立的政局。",
    description: "以王国与公国并立的政局。",
    firstPrinciples: [
      { principle: "王国公国并立", verdict: "achieved", note: "作为政治叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "rl-golem",
    name: "魔像守卫",
    aliases: [],
    workId: "record-lodoss",
    domain: "artifact",
    summary: "以符文驱动的石制守卫。",
    description: "以符文驱动的石制守卫。",
    firstPrinciples: [
      { principle: "符文石守卫", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hb-hellboy",
    name: "地狱男爵",
    aliases: [],
    workId: "hellboy",
    domain: "beast",
    summary: "由恶魔血、以石手为武器的反法西斯战士。",
    description: "由恶魔血、以石手为武器的反法西斯战士。",
    firstPrinciples: [
      { principle: "恶魔血战士", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hb-right",
    name: "石手",
    aliases: [],
    workId: "hellboy",
    domain: "artifact",
    summary: "能操控现实、唤亡的右手。",
    description: "能操控现实、唤亡的右手。",
    firstPrinciples: [
      { principle: "右手控现实", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hb-bprd",
    name: "超自然调查局",
    aliases: [],
    workId: "hellboy",
    domain: "realm",
    summary: "以机构对抗异类的组织。",
    description: "以机构对抗异类的组织。",
    firstPrinciples: [
      { principle: "机构抗异类", verdict: "achieved", note: "作为虚构机构" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hb-ogdru",
    name: "奥格杜",
    aliases: [],
    workId: "hellboy",
    domain: "lore",
    summary: "创世前混沌、七神之卵的源头。",
    description: "创世前混沌、七神之卵的源头。",
    firstPrinciples: [
      { principle: "混沌创世源头", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hb-witch",
    name: "女巫诅咒",
    aliases: [],
    workId: "hellboy",
    domain: "magic",
    summary: "以血与咒唤醒古神的女巫。",
    description: "以血与咒唤醒古神的女巫。",
    firstPrinciples: [
      { principle: "血咒唤古神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hb-lovecraft",
    name: "克苏鲁式异类",
    aliases: [],
    workId: "hellboy",
    domain: "beast",
    summary: "克苏鲁式古神与混种。",
    description: "克苏鲁式古神与混种。",
    firstPrinciples: [
      { principle: "克苏鲁式异类", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hb-exorcism",
    name: "驱魔仪式",
    aliases: [],
    workId: "hellboy",
    domain: "magic",
    summary: "以圣物与经咒驱逐附身。",
    description: "以圣物与经咒驱逐附身。",
    firstPrinciples: [
      { principle: "圣物驱附身", verdict: "violated", note: "仅为信仰" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hb-cavity",
    name: "末日装置",
    aliases: [],
    workId: "hellboy",
    domain: "artifact",
    summary: "以机械与巫术混成的装置。",
    description: "以机械与巫术混成的装置。",
    firstPrinciples: [
      { principle: "机械巫术装置", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "hb-nazi",
    name: "纳粹 occult",
    aliases: [],
    workId: "hellboy",
    domain: "realm",
    summary: "以 occult 召魔的二战秘史线。",
    description: "以 occult 召魔的二战秘史线。",
    firstPrinciples: [
      { principle: "纳粹召魔术", verdict: "achieved", note: "作为历史fiction" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "hb-template",
    name: "巨型雕像",
    aliases: [],
    workId: "hellboy",
    domain: "artifact",
    summary: "以唤醒沉睡巨神的仪式。",
    description: "以唤醒沉睡巨神的仪式。",
    firstPrinciples: [
      { principle: "雕像唤巨神", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-dream",
    name: "梦之无尽",
    aliases: [],
    workId: "sandman",
    domain: "lore",
    summary: "统领梦境维度的无尽之一。",
    description: "统领梦境维度的无尽之一。",
    firstPrinciples: [
      { principle: "梦境维度主宰", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-endless",
    name: "无尽七兄妹",
    aliases: [],
    workId: "sandman",
    domain: "lore",
    summary: "命、死、梦等拟人的本原存在。",
    description: "命、死、梦等拟人的本原存在。",
    firstPrinciples: [
      { principle: "拟人本原存在", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-dreaming",
    name: "梦境界",
    aliases: [],
    workId: "sandman",
    domain: "realm",
    summary: "以意念塑形的潜意识世界。",
    description: "以意念塑形的潜意识世界。",
    firstPrinciples: [
      { principle: "意念塑形梦境", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-sand",
    name: "睡沙",
    aliases: [],
    workId: "sandman",
    domain: "artifact",
    summary: "撒沙令人入睡的法器。",
    description: "撒沙令人入睡的法器。",
    firstPrinciples: [
      { principle: "撒沙入睡", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-key",
    name: "钥匙孩",
    aliases: [],
    workId: "sandman",
    domain: "lore",
    summary: "以童话隐喻穿界的女孩。",
    description: "以童话隐喻穿界的女孩。",
    firstPrinciples: [
      { principle: "童话隐喻穿界", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-fates",
    name: "命运三女神",
    aliases: [],
    workId: "sandman",
    domain: "lore",
    summary: "纺织、丈量、剪断命运的姐妹。",
    description: "纺织、丈量、剪断命运的姐妹。",
    firstPrinciples: [
      { principle: "纺织命运女神", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-hell",
    name: "地狱政权",
    aliases: [],
    workId: "sandman",
    domain: "realm",
    summary: "以特权与叛乱更替的地狱。",
    description: "以特权与叛乱更替的地狱。",
    firstPrinciples: [
      { principle: "地狱政权更替", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-lucifer",
    name: "路西法",
    aliases: [],
    workId: "sandman",
    domain: "lore",
    summary: "退位、以意志自立的堕天者。",
    description: "退位、以意志自立的堕天者。",
    firstPrinciples: [
      { principle: "退位堕天者", verdict: "violated", note: "仅为神话" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-corinthian",
    name: "Corinthian",
    aliases: [],
    workId: "sandman",
    domain: "beast",
    summary: "以眼代齿、食梦的造物。",
    description: "以眼代齿、食梦的造物。",
    firstPrinciples: [
      { principle: "眼齿食梦造物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "sm-lucid",
    name: "清醒梦",
    aliases: [],
    workId: "sandman",
    domain: "magic",
    summary: "梦中知梦并改写的意识。",
    description: "梦中知梦并改写的意识。",
    firstPrinciples: [
      { principle: "梦中知梦改写", verdict: "breakthrough", note: "清醒梦现实存在" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-fabletown",
    name: "童话镇",
    aliases: [],
    workId: "fables",
    domain: "realm",
    summary: "流亡童话角色藏身的纽约楼。",
    description: "流亡童话角色藏身的纽约楼。",
    firstPrinciples: [
      { principle: "藏身纽约楼", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-fable",
    name: "流亡者",
    aliases: [],
    workId: "fables",
    domain: "lore",
    summary: "被 adversary 逐出故土的角色。",
    description: "被 adversary 逐出故土的角色。",
    firstPrinciples: [
      { principle: "被逐流亡者", verdict: "violated", note: "仅为叙事" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-adversary",
    name: "大敌",
    aliases: [],
    workId: "fables",
    domain: "lore",
    summary: "以征服吞并童话国的暴君。",
    description: "以征服吞并童话国的暴君。",
    firstPrinciples: [
      { principle: "征服童话国暴君", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-glamour",
    name: "Glamour",
    aliases: [],
    workId: "fables",
    domain: "magic",
    summary: "以魔法掩盖异相的 disguises。",
    description: "以魔法掩盖异相的 disguises。",
    firstPrinciples: [
      { principle: "魔法掩异相", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-snow",
    name: "白雪与狼",
    aliases: [],
    workId: "fables",
    domain: "realm",
    summary: "以政治联姻与权谋的角色。",
    description: "以政治联姻与权谋的角色。",
    firstPrinciples: [
      { principle: "权谋政治角色", verdict: "achieved", note: "作为人物叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "fb-bigby",
    name: "大坏狼",
    aliases: [],
    workId: "fables",
    domain: "beast",
    summary: "化人形、任警长的狼。",
    description: "化人形、任警长的狼。",
    firstPrinciples: [
      { principle: "人形狼警长", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-magic",
    name: "魔法物品",
    aliases: [],
    workId: "fables",
    domain: "artifact",
    summary: "玻璃棺、魔镜等会说话的器物。",
    description: "玻璃棺、魔镜等会说话的器物。",
    firstPrinciples: [
      { principle: "会说话器物", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-homelands",
    name: "故土",
    aliases: [],
    workId: "fables",
    domain: "realm",
    summary: "被占领的多个童话原乡。",
    description: "被占领的多个童话原乡。",
    firstPrinciples: [
      { principle: "被占童话原乡", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-wooden",
    name: "木 soldier",
    aliases: [],
    workId: "fables",
    domain: "artifact",
    summary: "以魔法觉醒的木偶军团。",
    description: "以魔法觉醒的木偶军团。",
    firstPrinciples: [
      { principle: "觉醒木偶军", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "fb-farm",
    name: "动物农场",
    aliases: [],
    workId: "fables",
    domain: "realm",
    summary: "隔离非人角色的偏远营地。",
    description: "隔离非人角色的偏远营地。",
    firstPrinciples: [
      { principle: "隔离营地", verdict: "achieved", note: "作为虚构设定" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-bone",
    name: "波恩三表亲",
    aliases: [],
    workId: "bone",
    domain: "beast",
    summary: "流落山谷的卡通骨骸表亲。",
    description: "流落山谷的卡通骨骸表亲。",
    firstPrinciples: [
      { principle: "骨骸表亲", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-valley",
    name: "山谷",
    aliases: [],
    workId: "bone",
    domain: "realm",
    summary: "通往、藏龙的僻静庇护地。",
    description: "通往、藏龙的僻静庇护地。",
    firstPrinciples: [
      { principle: "虚构庇护山谷", verdict: "achieved", note: "仅为世界构建" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-dragon",
    name: "巨龙",
    aliases: [],
    workId: "bone",
    domain: "beast",
    summary: "以梦与歌护谷、沉睡的巨龙。",
    description: "以梦与歌护谷、沉睡的巨龙。",
    firstPrinciples: [
      { principle: "梦歌护谷龙", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-locust",
    name: "Locust 王",
    aliases: [],
    workId: "bone",
    domain: "lore",
    summary: "以瘟疫与虫群灭世的恶神。",
    description: "以瘟疫与虫群灭世的恶神。",
    firstPrinciples: [
      { principle: "瘟疫虫群灭世", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-veni",
    name: "秘药草",
    aliases: [],
    workId: "bone",
    domain: "alchemy",
    summary: "以草与符愈伤的民医传统。",
    description: "以草与符愈伤的民医传统。",
    firstPrinciples: [
      { principle: "草符愈伤", verdict: "breakthrough", note: "草药医学现实近似" }
    ],
    implementation: { current: "现实中尚无，但物理上可设想。", path: ["预研路径：向该方向推进。","理论可行性：需突破，但非不可能。"], blockers: ["尺度 / 能量 / 材料限制"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-redcow",
    name: "大红牛",
    aliases: [],
    workId: "bone",
    domain: "beast",
    summary: "索魂、象征灾厄的幽灵牛。",
    description: "索魂、象征灾厄的幽灵牛。",
    firstPrinciples: [
      { principle: "幽灵索魂牛", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-rat",
    name: "鼠族部落",
    aliases: [],
    workId: "bone",
    domain: "beast",
    summary: "以工具与语言沟通的鼠群。",
    description: "以工具与语言沟通的鼠群。",
    firstPrinciples: [
      { principle: "工具语言鼠群", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-crown",
    name: "王冠",
    aliases: [],
    workId: "bone",
    domain: "artifact",
    summary: "以继承权引争的古老信物。",
    description: "以继承权引争的古老信物。",
    firstPrinciples: [
      { principle: "继承信物王冠", verdict: "achieved", note: "王冠象征现实存在" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  },
  {
    id: "bn-rune",
    name: "符文石",
    aliases: [],
    workId: "bone",
    domain: "magic",
    summary: "以石发动的守护魔法。",
    description: "以石发动的守护魔法。",
    firstPrinciples: [
      { principle: "石发动守护魔法", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "bn-thorn",
    name: "荆棘女巫",
    aliases: [],
    workId: "bone",
    domain: "magic",
    summary: "以咒与幻术操控的巫。",
    description: "以咒与幻术操控的巫。",
    firstPrinciples: [
      { principle: "咒幻术女巫", verdict: "violated", note: "仅为设定" }
    ],
    implementation: { current: "现实无对应，仅在该世界观设定内成立。", path: ["现实参考：以工程近似模拟其形态 / 功能，而非复现原理。","理论可行性：受基本法则限制，不可行。"], blockers: ["违反守恒 / 因果 / 生物尺度等基本法则"] },
    dependencies: [], tags: []
  },
  {
    id: "ss2-ending",
    name: "结而重局",
    aliases: [],
    workId: "starless-sea",
    domain: "lore",
    summary: "以结、重的局。",
    description: "以结、重的局。",
    firstPrinciples: [
      { principle: "结重局", verdict: "achieved", note: "作为叙事" }
    ],
    implementation: { current: "现实已有对应概念或原理成立。", path: ["现实参考：该领域的成熟工程。","理论可行性：成立。"], blockers: [] },
    dependencies: [], tags: []
  }
];
