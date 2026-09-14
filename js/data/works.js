// ============================================================
// 奇幻世界观档案数据
// 每个奇幻作品/体系的世界观设定、与现实法则偏离的设定、及所涉造物
// 字段对齐模板：id / series / treeLit / year / title / creator /
//        media / era / setting / physicalDivergences / techLevels / representativeTechs
// treeLit 使用科技树节点 id（F魔法 B生灵 A炼金 R界域 W造物 L秘术 1-5层）
// ============================================================
const WORKS = [
  {
    id: "mythology",
    series: { name: "现实·神话与民间传说", members: ["北欧神话", "希腊罗马神话", "中国志怪", "阿拉伯一千零一夜", "中世纪炼金术与占星", "各地龙与亡灵传说"] },
    treeLit: ["A1", "A3", "B5", "L2", "L5", "R1"],
    year: -3000,
    title: "现实·神话与民间传说",
    creator: "人类集体想象（口传 → 文献）",
    media: "神话 / 民间传说 / 史前以来的口述",
    era: "远古至今",
    setting: "在科学尚未成形的漫长岁月里，人类用神话解释雷霆、疾病、死亡与星辰。龙、炼金、招魂、占卜并非某一本书的发明，而是跨文明反复出现的"原型"——它们是人类对力量最古老的想象，也是本卷用于标定 L1 现实基线与其余幻想的对照系。",
    physicalDivergences: [
      "神话中的龙、不死、点石成金：皆为前科学时代对自然现象的拟人化解释，现实无对应实体或工艺。",
      "历史炼金术与占星：其符号体系真实存在（文献可考），但"贱金属变黄金""星命决定命运"的诉求违反化学与力学。"
    ],
    techLevels: ["L1", "L2", "L3", "L5"],
    representativeTechs: ["real-metallurgy", "dragon-myth", "necromancy-folklore", "alchemy-history"]
  },
  {
    id: "lord-of-rings",
    series: { name: "指环王 / 中洲", members: ["《霍比特人》", "《魔戒》", "《精灵宝钻》", "彼得·杰克逊电影六部曲"] },
    treeLit: ["W2", "W5", "A2", "L4", "B4", "F5"],
    year: 1954,
    title: "指环王",
    creator: "J.R.R. 托尔金",
    media: "小说 / 电影",
    era: "第三纪元（虚构史）",
    setting: "中洲是一片被古老力量塑形的大陆，魔戒是其中最具重量的造物：至尊魔戒以"一句咒文统御众戒"，精灵锻造的秘银轻于银而坚于钢。托尔金以语言学与神话学为骨，构建出一套内部自洽、近乎"低魔"的严肃次级世界。",
    physicalDivergences: [
      "至尊魔戒的意志绑定：一枚戒指能承载并施加跨越大陆的支配意志，依赖"咒文即法则"的设定逻辑。",
      "秘银与精灵锻造：以现实冶金手段可近似其性能，但"轻如蚕丝、坚胜钢铁"且自带魔法属性超出材料科学。"
    ],
    techLevels: ["L2", "L4", "L5"],
    representativeTechs: ["the-one-ring", "mithril", "palantir", "ent"]
  },
  {
    id: "harry-potter",
    series: { name: "哈利·波特 / 魔法世界", members: ["《哈利·波特》七部", "《神奇动物》", "舞台剧《 cursed child》"] },
    treeLit: ["F5", "W3", "A2", "L5", "R3", "B4"],
    year: 1997,
    title: "哈利·波特",
    creator: "J.K. 罗琳",
    media: "小说 / 电影",
    era: "1990 年代（伪当代）",
    setting: "在麻瓜世界的阴影里并行运转着一个魔法社会：魔杖是施法的媒介，魔药以草药与生物材料炼制，飞路网让人在壁炉间瞬移，魂器把灵魂裂开藏于器物以求永生。设定贴近"当代奇幻"，魔法的代价与规则被反复强调。",
    physicalDivergences: [
      "魂器：将灵魂分裂并锚定于外物以实现永生，涉及意识与人格的可分割性，远超神经科学。",
      "魔杖施法：以手势与咒文直接改写现实（漂浮、点火、变形），依赖"言语即因果"的魔法公理。"
    ],
    techLevels: ["L2", "L3", "L5"],
    representativeTechs: ["wand-magic", "invisibility-cloak", "horcrux", "floo-network"]
  },
  {
    id: "got",
    series: { name: "冰与火之歌 / 维斯特洛", members: ["《权力的游戏》五部曲", "《血与火》", "HBO 剧集八季"] },
    treeLit: ["W2", "B5", "L4", "A2", "R1"],
    year: 1996,
    title: "冰与火之歌",
    creator: "乔治·R.R. 马丁",
    media: "小说 / 剧集",
    era: "虚构的"当前纪"",
    setting: "维斯特洛近似中世纪欧洲，但被低魔笼罩：瓦雷利亚钢是失传的陨铁锻造术，野火是比希腊火更狂暴的炼金产物，鱼梁木能让人"绿视"窥见远方。龙是已灭绝又复生的生物兵器——整体魔幻稀薄，落点是政治与人性。",
    physicalDivergences: [
      "龙：体型如楼宇、喷吐可燃液体的活体飞行巨兽，其代谢与飞行力学在现实生物尺度上不可维持。",
      "瓦雷利亚钢：以陨铁与咒术折叠锻造、永不锈蚀且轻易斩断寻常钢，属失传工艺 + 设定加成。"
    ],
    techLevels: ["L2", "L4", "L5"],
    representativeTechs: ["valyrian-steel", "dragons-got", "weirwood", "wildfire"]
  },
  {
    id: "dnd",
    series: { name: "龙与地下城", members: ["初版(1974)", "AD&D", "3.5版", "5e", "无数模组与衍生作"] },
    treeLit: ["F5", "R3", "B4", "L4", "W5"],
    year: 1974,
    title: "龙与地下城",
    creator: "Gary Gygax / Dave Arneson",
    media: "桌游 RPG / 规则体系",
    era: "规则内的多元宇宙",
    setting: "D&D 不是单一故事，而是一套"魔法即资源"的规则宇宙：法师靠法术位每天施法，许愿术可向宇宙直接索要结果，异界门连通位面，魔像是注入灵魂的构装体。它把奇幻造物标准化、可计量，是现代奇幻的语法本。",
    physicalDivergences: [
      "许愿术：以一句愿望直接重排现实因果，是 L5 的极致——不消耗能量，只消耗"规则允许"。",
      "法术位：把施法量化成每日可恢复的能量槽，是游戏化公理，不对应任何生理或物理过程。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["spellcasting", "wish", "golem", "portal-dnd"]
  },
  {
    id: "warcraft",
    series: { name: "魔兽世界 / 艾泽拉斯", members: ["《魔兽争霸》三部曲", "《魔兽世界》", "小说与漫画"] },
    treeLit: ["F5", "L5", "R3", "W3", "B5"],
    year: 2004,
    title: "魔兽世界",
    creator: "暴雪娱乐",
    media: "游戏 / 小说",
    era: "虚构的艾泽拉斯编年",
    setting: "艾泽拉斯是众神（泰坦）按蓝图塑造的星球，邪能是来自扭曲虚空的绿色混沌魔法，亡灵天灾以瘟疫把活人变成不死的奴兵。传送门在阵营间穿梭，巨龙是世界的守护者——设定大气、高魔、强冲突。",
    physicalDivergences: [
      "亡灵天灾：以瘟疫与诅咒批量转化生命体为不死、且保留战力，违反热力学与生物分解规律。",
      "邪能：源自异维度虚空的纯粹腐蚀性能量，不经由任何可识别的物质-能量转换链。"
    ],
    techLevels: ["L3", "L5"],
    representativeTechs: ["fel-magic", "undead-scourge", "portals-wow", "dragons-wow"]
  },
  {
    id: "elder-scrolls",
    series: { name: "上古卷轴", members: ["《竞技场》", "《晨风》", "《湮灭》", "《天际》", "大量衍生小说"] },
    treeLit: ["F5", "L4", "W3", "W5", "B4"],
    year: 1994,
    title: "上古卷轴",
    creator: "Bethesda",
    media: "游戏 / 小说",
    era: "第四纪元（泰姆瑞尔大陆）",
    setting: "泰姆瑞尔大陆的魔法根植于"声音"：诺德人的龙吼以真实之语撼动世界，灵魂石囚禁灵魂以供附魔，矮人（ Dwemer ）留下精密的蒸汽机械与消失的文明。设定厚重、语言驱动、强调"名"与"声"的力量。",
    physicalDivergences: [
      "龙吼（Thu'um）：以真实名称直接命令现实（推开山、定住时间），是"真名即权能"的极端化。",
      "灵魂石：把离散的灵魂压缩进晶体再灌入器物，依赖灵魂是可存储的实体这一设定。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["dragon-shout", "soul-gem", "dwemer", "daedric"]
  },
  {
    id: "dark-souls",
    series: { name: "黑暗之魂", members: ["《黑暗之魂》一二三", "《血源诅咒》", "《艾尔登法环》"] },
    treeLit: ["L5", "W1", "L4", "F5"],
    year: 2011,
    title: "黑暗之魂",
    creator: "FromSoftware（宫崎英高）",
    media: "游戏",
    era: "火之将熄的末世",
    setting: "世界在"不死诅咒"中循环：被烙印的不死者不断死亡又复生，灵魂是力量与记忆的载体，营火是短暂的存档与休整。设定晦暗、留白、以物品描述叙事——造物几乎都带着"概念性"的重量。",
    physicalDivergences: [
      "灵魂转移：记忆、能力与自我可随灵魂在躯体间迁移，意识连续性不绑死于大脑。",
      "营火/篝火：作为跨越死亡、重置世界的"检查点"，是元设定层面的概念性造物。"
    ],
    techLevels: ["L1", "L4", "L5"],
    representativeTechs: ["soul-transference", "bonfire", "lord-soul", "greatsword"]
  },
  {
    id: "warhammer",
    series: { name: "战锤·奇幻", members: ["初版(1983)", "《战锤》桌战", "《中古战锤》", "大量小说与军团书"] },
    treeLit: ["F5", "A4", "B4", "W2", "L5"],
    year: 1983,
    title: "战锤·奇幻",
    creator: "Games Workshop",
    media: "桌游 / 小说",
    era: " fictional 旧世界（The Old World）",
    setting: "旧世界是一个被混沌四神窥伺的中世纪奇幻大陆：次元石是来自异维度混沌魔域的辐射矿物，鼠人是崇拜脏神的变种族群，魔典封印着危险的知识。设定粗粝、军事、强调"不洁的力量必有代价"。",
    physicalDivergences: [
      "次元石（闹鬼石）：来自混沌魔域、能扭曲血肉与因果的辐射性矿物，现实中无对应物。",
      "混沌魔法：直接汲取异维度神祇之力，施法即与不可名状的存在缔约。"
    ],
    techLevels: ["L2", "L4", "L5"],
    representativeTechs: ["chaos-magic", "warpstone", "skaven", "steam-tank"]
  },
  {
    id: "witcher",
    series: { name: "巫师", members: ["《白狼》短篇集", "《猎魔人》五部长篇", "CD Projekt 游戏三部曲"] },
    treeLit: ["F3", "A2", "B2", "L5"],
    year: 1993,
    title: "巫师",
    creator: "安杰伊·萨普科夫斯基",
    media: "小说 / 游戏",
    era: "虚构的"现在"大陆",
    setting: "巫师（猎魔人）是经"青草试炼"突变、专门猎杀怪物的人类。突变药剂改造身体，魔药恢复、煎药强化，法印是简化的手势魔法。设定"低魔、硬核"，怪物多取材斯拉夫民间传说，魔法是工具而非万能。",
    physicalDivergences: [
      "青草试炼：以剧毒与 ritual 重排少年生理、赋予超感与自愈，超出当前基因/毒理工程。",
      "突变药剂体系：可重复服用、稳定改变代谢与能力的"炼金改造"，现实仅处萌芽。"
    ],
    techLevels: ["L2", "L3", "L5"],
    representativeTechs: ["signs", "mutagens", "monster-lore", "decoctions"]
  },
  {
    id: "narnia",
    series: { name: "纳尼亚传奇", members: ["《狮子、女巫和魔衣柜》等七部", "电影与剧集改编"] },
    treeLit: ["R3", "L4", "W5"],
    year: 1950,
    title: "纳尼亚传奇",
    creator: "C.S. 刘易斯",
    media: "小说 / 电影",
    era: "二战前后的英格兰 ↔ 纳尼亚",
    setting: "孩子们通过魔衣橱的隔板踏入纳尼亚——一个由狮王阿斯兰以歌声创造的国度。石桌承载献祭与复活，时间在两个世界间不连续。设定寓言化、富有神性，造物多以"神圣言语与牺牲"为机制。",
    physicalDivergences: [
      "魔衣橱异界门：一件家具背面连通整片异世界，空间拓扑上不成立。",
      "石桌献祭与复活：以象征性献祭重置生命，是神学机制而非生理过程。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["wardrobe", "aslan-resurrection", "stone-table"]
  },
  {
    id: "discworld",
    series: { name: "碟形世界", members: ["《魔法的颜色》等 41 部长篇", "多部改编动画与舞台剧"] },
    treeLit: ["R5", "F5", "B4", "L3"],
    year: 1983,
    title: "碟形世界",
    creator: "特里·普拉切特",
    media: "小说",
    era: "巨龟背上的碟形大陆",
    setting: "世界是一块驮在四象巨龟背上、绕双星运行的碟形平面。魔法以"八色"存在，图书管理员被变作红毛猩猩且拒绝变回。设定是高度智性的戏仿：它用荒诞的"内部逻辑"戳穿奇幻套路，却自洽得令人信服。",
    physicalDivergences: [
      "碟形世界几何：平面大陆 + 巨龟 + 象群，在引力与力学上完全不成立。",
      "八色魔法：魔法被量化为八种颜色（第八种为" octairon "），是戏仿式的设定公理。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["discworld-geometry", "magic-disc", "librarian"]
  },
  {
    id: "lord-of-the-mysteries",
    series: { name: "诡秘之主", members: ["连载小说", "漫画", "动画（制作中）"] },
    treeLit: ["F5", "W5", "L3", "B5"],
    year: 2018,
    title: "诡秘之主",
    creator: "爱潜水的乌贼",
    media: "小说 / 网络文学",
    era: "蒸汽与神秘并存的伪维多利亚",
    setting: "在一个克苏鲁味的蒸汽朋克世界里，"非凡者"沿二十二条"序列"自下而上晋升，每升一级就获得能力也逼近疯狂；封印物是被收容的危险造物，外神在星空外觊觎。设定把"升级"做成严谨的神秘学体系，L5 与 L4 频繁交界。",
    physicalDivergences: [
      "序列途径：服食魔药逐级改写生命形态、获得超凡权能，是"物质即权能"的设定公理。",
      "外神/旧日：来自宇宙之外的不可名状存在，其存在本身即改写物理与认知。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["beyonder", "sealed-artifact", "divination-lom", "outer-deity"]
  },
  {
    id: "earthsea",
    series: { name: "地海", members: ["《地海巫师》等六部", "《辗转ieving》等短篇"] },
    treeLit: ["F5", "F3", "L3"],
    year: 1968,
    title: "地海",
    creator: "厄休拉·勒古恩",
    media: "小说",
    era: "虚构的群岛世界",
    setting: "地海的魔法建基于"真名"：知晓一物之真名便可支配它，巫师以古语呼风唤雨。勒古恩借道家与生态思想，强调平衡与代价——魔法不是征服，而是理解与维系。设定克制、诗意、语言学驱动。",
    physicalDivergences: [
      "真名支配：以"真正的名字"直接命令万物，是"知即能"的极端语言学公理。",
      "呼风唤雨：以吟诵古语调动气象，不经由任何能量传递机制。"
    ],
    techLevels: ["L3", "L5"],
    representativeTechs: ["true-name", "summon-wind", "rune-earthsea"]
  },
  {
    id: "final-fantasy",
    series: { name: "最终幻想", members: ["FF 系列 1-16", "《战略版》", "《纷争》等衍生"] },
    treeLit: ["F3", "B5", "W5", "R2"],
    year: 1987,
    title: "最终幻想",
    creator: "Square / Square Enix",
    media: "游戏",
    era: "各作独立的世界",
    setting: "FF 各作共享母题而非同一世界：魔石（ materia ）把魔法封入可镶嵌的结晶，召唤兽是契约来的巨兽，水晶是世界能量的心脏，飞空艇在云海之上航行。设定高魔、华丽、以"水晶+魔石"为能量内核。",
    physicalDivergences: [
      "魔石：把一段魔法封入小晶体、镶嵌即获得该能力，是"能力即物件"的设定。",
      "召唤兽：以契约唤来独立存在的巨型生物协同作战，依赖"异界契约"机制。"
    ],
    techLevels: ["L2", "L3", "L5"],
    representativeTechs: ["materia", "summon-ff", "crystal-ff", "airship"]
  },
  {
    id: "dragon-age",
    series: { name: "龙腾世纪", members: ["《起源》", "《审判》", "《影障守护者》", "小说与桌游"] },
    treeLit: ["A3", "F5", "B5", "R4"],
    year: 2009,
    title: "龙腾世纪",
    creator: "BioWare",
    media: "游戏 / 小说",
    era: "虚构的赛达斯大陆",
    setting: "赛达斯的世界被"幽冥界（ Fade ）"——一个梦境与精灵之神的维度——半包裹。莱瑞姆是魔法师赖以施法的蓝色矿物，血魔法以生命为燃料，巨龙是远古的造物。设定"低魔但危险"，魔力与疯狂紧邻。",
    physicalDivergences: [
      "血魔法：以献祭生命直接换取魔法效能，是"生命即燃料"的设定公理。",
      "幽冥界：一个与现实交叠的梦境维度，睡眠与死亡皆可通往，拓扑上不成立。"
    ],
    techLevels: ["L3", "L4", "L5"],
    representativeTechs: ["lyrium", "blood-magic", "thedas-dragon", "fade"]
  }
];
