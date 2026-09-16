// ============================================================
// 奇幻世界观档案数据
// 每个奇幻作品/体系的世界观设定、与现实法则偏离的设定、及所涉造物
// 字段对齐模板：id / series / treeLit / year / title / creator /
//        media / era / setting / physicalDivergences / representativeTechs
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
    setting: "在科学尚未成形的漫长岁月里，人类用神话解释雷霆、疾病、死亡与星辰。龙、炼金、招魂、占卜并非某一本书的发明，而是跨文明反复出现的“原型”——它们是人类对力量最古老的想象，也是本卷的起点。",
    physicalDivergences: [
      "神话中的龙、不死、点石成金：皆为前科学时代对自然现象的拟人化解释，现实无对应实体或工艺。",
      "历史炼金术与占星：其符号体系真实存在（文献可考），但“贱金属变黄金”“星命决定命运”的诉求违反化学与力学。"
    ],
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
    setting: "中洲是一片被古老力量塑形的大陆，魔戒是其中最具重量的造物：至尊魔戒以“一句咒文统御众戒”，精灵锻造的秘银轻于银而坚于钢。托尔金以语言学与神话学为骨，构建出一套内部自洽、近乎“低魔”的严肃次级世界。",
    physicalDivergences: [
      "至尊魔戒的意志绑定：一枚戒指能承载并施加跨越大陆的支配意志，依赖“咒文即法则”的设定逻辑。",
      "秘银与精灵锻造：以现实冶金手段可近似其性能，但“轻如蚕丝、坚胜钢铁”且自带魔法属性超出材料科学。"
    ],
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
    setting: "在麻瓜世界的阴影里并行运转着一个魔法社会：魔杖是施法的媒介，魔药以草药与生物材料炼制，飞路网让人在壁炉间瞬移，魂器把灵魂裂开藏于器物以求永生。设定贴近“当代奇幻”，魔法的代价与规则被反复强调。",
    physicalDivergences: [
      "魂器：将灵魂分裂并锚定于外物以实现永生，涉及意识与人格的可分割性，远超神经科学。",
      "魔杖施法：以手势与咒文直接改写现实（漂浮、点火、变形），依赖“言语即因果”的魔法公理。"
    ],
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
    era: "虚构的“当前纪”",
    setting: "维斯特洛近似中世纪欧洲，但被低魔笼罩：瓦雷利亚钢是失传的陨铁锻造术，野火是比希腊火更狂暴的炼金产物，鱼梁木能让人“绿视”窥见远方。龙是已灭绝又复生的生物兵器——整体魔幻稀薄，落点是政治与人性。",
    physicalDivergences: [
      "龙：体型如楼宇、喷吐可燃液体的活体飞行巨兽，其代谢与飞行力学在现实生物尺度上不可维持。",
      "瓦雷利亚钢：以陨铁与咒术折叠锻造、永不锈蚀且轻易斩断寻常钢，属失传工艺 + 设定加成。"
    ],
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
    setting: "D&D 不是单一故事，而是一套“魔法即资源”的规则宇宙：法师靠法术位每天施法，许愿术可向宇宙直接索要结果，异界门连通位面，魔像是注入灵魂的构装体。它把奇幻造物标准化、可计量，是现代奇幻的语法本。",
    physicalDivergences: [
      "许愿术：以一句愿望直接重排现实因果——不消耗能量，只消耗“规则允许”。",
      "法术位：把施法量化成每日可恢复的能量槽，是游戏化公理，不对应任何生理或物理过程。"
    ],
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
    setting: "泰姆瑞尔大陆的魔法根植于“声音”：诺德人的龙吼以真实之语撼动世界，灵魂石囚禁灵魂以供附魔，矮人（ Dwemer ）留下精密的蒸汽机械与消失的文明。设定厚重、语言驱动、强调“名”与“声”的力量。",
    physicalDivergences: [
      "龙吼（Thu'um）：以真实名称直接命令现实（推开山、定住时间），是“真名即权能”的极端化。",
      "灵魂石：把离散的灵魂压缩进晶体再灌入器物，依赖灵魂是可存储的实体这一设定。"
    ],
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
    setting: "世界在“不死诅咒”中循环：被烙印的不死者不断死亡又复生，灵魂是力量与记忆的载体，营火是短暂的存档与休整。设定晦暗、留白、以物品描述叙事——造物几乎都带着“概念性”的重量。",
    physicalDivergences: [
      "灵魂转移：记忆、能力与自我可随灵魂在躯体间迁移，意识连续性不绑死于大脑。",
      "营火/篝火：作为跨越死亡、重置世界的“检查点”，是元设定层面的概念性造物。"
    ],
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
    setting: "旧世界是一个被混沌四神窥伺的中世纪奇幻大陆：次元石是来自异维度混沌魔域的辐射矿物，鼠人是崇拜脏神的变种族群，魔典封印着危险的知识。设定粗粝、军事、强调“不洁的力量必有代价”。",
    physicalDivergences: [
      "次元石（闹鬼石）：来自混沌魔域、能扭曲血肉与因果的辐射性矿物，现实中无对应物。",
      "混沌魔法：直接汲取异维度神祇之力，施法即与不可名状的存在缔约。"
    ],
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
    era: "虚构的“现在”大陆",
    setting: "巫师（猎魔人）是经“青草试炼”突变、专门猎杀怪物的人类。突变药剂改造身体，魔药恢复、煎药强化，法印是简化的手势魔法。设定“低魔、硬核”，怪物多取材斯拉夫民间传说，魔法是工具而非万能。",
    physicalDivergences: [
      "青草试炼：以剧毒与 ritual 重排少年生理、赋予超感与自愈，超出当前基因/毒理工程。",
      "突变药剂体系：可重复服用、稳定改变代谢与能力的“炼金改造”，现实仅处萌芽。"
    ],
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
    setting: "孩子们通过魔衣橱的隔板踏入纳尼亚——一个由狮王阿斯兰以歌声创造的国度。石桌承载献祭与复活，时间在两个世界间不连续。设定寓言化、富有神性，造物多以“神圣言语与牺牲”为机制。",
    physicalDivergences: [
      "魔衣橱异界门：一件家具背面连通整片异世界，空间拓扑上不成立。",
      "石桌献祭与复活：以象征性献祭重置生命，是神学机制而非生理过程。"
    ],
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
    setting: "世界是一块驮在四象巨龟背上、绕双星运行的碟形平面。魔法以“八色”存在，图书管理员被变作红毛猩猩且拒绝变回。设定是高度智性的戏仿：它用荒诞的“内部逻辑”戳穿奇幻套路，却自洽得令人信服。",
    physicalDivergences: [
      "碟形世界几何：平面大陆 + 巨龟 + 象群，在引力与力学上完全不成立。",
      "八色魔法：魔法被量化为八种颜色（第八种为“ octairon ”），是戏仿式的设定公理。"
    ],
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
    setting: "在一个克苏鲁味的蒸汽朋克世界里，“非凡者”沿二十二条“序列”自下而上晋升，每升一级就获得能力也逼近疯狂；封印物是被收容的危险造物，外神在星空外觊觎。设定把“升级”做成严谨的神秘学体系，序列越往上，越接近不可名状。",
    physicalDivergences: [
      "序列途径：服食魔药逐级改写生命形态、获得超凡权能，是“物质即权能”的设定公理。",
      "外神/旧日：来自宇宙之外的不可名状存在，其存在本身即改写物理与认知。"
    ],
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
    setting: "地海的魔法建基于“真名”：知晓一物之真名便可支配它，巫师以古语呼风唤雨。勒古恩借道家与生态思想，强调平衡与代价——魔法不是征服，而是理解与维系。设定克制、诗意、语言学驱动。",
    physicalDivergences: [
      "真名支配：以“真正的名字”直接命令万物，是“知即能”的极端语言学公理。",
      "呼风唤雨：以吟诵古语调动气象，不经由任何能量传递机制。"
    ],
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
    setting: "FF 各作共享母题而非同一世界：魔石（ materia ）把魔法封入可镶嵌的结晶，召唤兽是契约来的巨兽，水晶是世界能量的心脏，飞空艇在云海之上航行。设定高魔、华丽、以“水晶+魔石”为能量内核。",
    physicalDivergences: [
      "魔石：把一段魔法封入小晶体、镶嵌即获得该能力，是“能力即物件”的设定。",
      "召唤兽：以契约唤来独立存在的巨型生物协同作战，依赖“异界契约”机制。"
    ],
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
    setting: "赛达斯的世界被“幽冥界（ Fade ）”——一个梦境与精灵之神的维度——半包裹。莱瑞姆是魔法师赖以施法的蓝色矿物，血魔法以生命为燃料，巨龙是远古的造物。设定“低魔但危险”，魔力与疯狂紧邻。",
    physicalDivergences: [
      "血魔法：以献祭生命直接换取魔法效能，是“生命即燃料”的设定公理。",
      "幽冥界：一个与现实交叠的梦境维度，睡眠与死亡皆可通往，拓扑上不成立。"
    ],
    representativeTechs: ["lyrium", "blood-magic", "thedas-dragon", "fade"]
  }
,
  {
    id: "greek-myth",
    series: { name: "希腊神话", members: ["荷马史诗", "赫西俄德《神谱》", "希腊悲剧"] },
    treeLit: ["F5", "W5", "L4", "B5"],
    year: -800,
    title: "希腊神话",
    creator: "荷马等（口传→文献）",
    media: "神话 / 史诗",
    era: "古典至希腊化",
    setting: "爱琴海世界的诸神住在奥林匹斯山顶：宙斯掌雷霆、波塞冬掌海洋、哈迪斯掌冥界。他们有人形的身体与人的脾气，会嫉妒、偏私、报复，也会为献祭而偏袒一方。凡人英雄多是神的后代，一生的功业与结局都写在神谕和命运三女神的线上。",
    physicalDivergences: ["神祇肉体不死、可随意变形，并以人格意志直接支配雷霆、海洋等自然力。", "神谕与命运可预告并锁定凡人的结局，凡人无法违逆。", "神与凡人生育的后代兼具神力与必死，形成独立的英雄世代。"],
    mythSources: ["希腊罗马神话（本身即原型）"],
    representativeTechs: ["gm-olympian", "gm-delphi", "gm-typhon", "gm-fleece"]
  },
  {
    id: "norse-myth",
    series: { name: "北欧神话", members: ["《埃达》（诗体埃达 / 散文埃达）", "冰岛萨迦", "瓦尔基里与英雄传说"] },
    treeLit: ["R5", "L5", "B5", "W2"],
    year: -900,
    title: "北欧神话",
    creator: "佚名（吟游口传）",
    media: "神话 / 史诗",
    era: "维京前期",
    setting: "九界由世界树尤克特拉希尔联结，阿萨神族与霜巨人、火巨人往复征战。诸神靠伊登的青春苹果延寿，却并非全能，也非不死——他们早已知晓自己将在诸神黄昏中战死，仍照常赴约。卢恩字母、雷锤与女武神，都是这套「明知结局仍要一战」的宿命观的注脚。",
    physicalDivergences: ["世界树贯通九界、违反常规空间拓扑，九界之间有彩虹桥与诸般路径相连。", "命运由诺恩三女神织定，诸神与凡人均不可更改，唯能选择赴约的姿态。", "符文一经刻写即生效，文字本身具备改变现实的力量。"],
    mythSources: ["日耳曼-北欧神话（本身即原型）"],
    representativeTechs: ["nm-yggdrasil", "nm-mjolnir", "nm-valkyrie", "nm-ragnarok"]
  },
  {
    id: "egypt-myth",
    series: { name: "埃及神话", members: ["《亡灵书》", "金字塔铭文", "太阳神颂"] },
    treeLit: ["L4", "A1", "W1", "B4"],
    year: -2500,
    title: "埃及神话",
    creator: "古埃及祭司",
    media: "神话 / 丧葬文献",
    era: "法老时代",
    setting: "太阳神拉每日乘船穿越冥府杜亚特，亡者凭心脏称重求得在芦苇之野复生。",
    physicalDivergences: ["亡灵以心脏与羽毛称量、灵魂可继续存在。", "木乃伊术把遗体保存以求永生，超出现实医学。"],
    representativeTechs: ["book-of-dead", "ankh", "pyramid", "mummification"]
  },
  {
    id: "celtic-myth",
    series: { name: "凯尔特神话", members: ["爱尔兰神话", "《马比诺吉昂》", "亚瑟王前身"] },
    treeLit: ["R3", "L3", "F3", "B3"],
    year: -500,
    title: "凯尔特神话",
    creator: "佚名（吟游口传）",
    media: "神话 / 传说",
    era: "中世纪前期",
    setting: "精灵与 Tuatha Dé 居于异界提尔纳诺，魔法与变形游走于人间与彼界之间。",
    physicalDivergences: ["异界时间流速与人界不同。", "变形术把人与兽的形体自由互换。"],
    representativeTechs: ["tir-na-nog", "sidhe", "shape-shift", "cauldron"]
  },
  {
    id: "sumerian-myth",
    series: { name: "苏美尔-巴比伦神话", members: ["《埃努玛·埃利什》", "《吉尔伽美什》", "楔形泥板"] },
    treeLit: ["F5", "L5", "R1", "A1"],
    year: -3000,
    title: "苏美尔-巴比伦神话",
    creator: "美索不达米亚祭司",
    media: "神话史诗",
    era: "上古两河",
    setting: "创世史诗以神战分出天地，吉尔伽美什追寻不死的草，洪水由神意降下涤荡人类。",
    physicalDivergences: ["神以言语创世、凡人求永生而不得。", "洪水由神意降下、改写文明进程。"],
    representativeTechs: ["enuma-elish", "epic-of-gilgamesh", "immortal-plant", "marduk"]
  },
  {
    id: "hindu-myth",
    series: { name: "印度神话", members: ["《摩诃婆罗多》", "《罗摩衍那》", "《往世书》"] },
    treeLit: ["L5", "F5", "R5", "B3"],
    year: -1500,
    title: "印度神话",
    creator: "吠陀与往世书传统",
    media: "神话史诗",
    era: "上古至今",
    setting: "三相神梵天、毗湿奴、湿婆循环创灭，罗刹与天神争夺 Dharma，瑜伽士修得神通。",
    physicalDivergences: ["宇宙在劫波中周期毁灭与重生。", "神通以修行直接改写肉身界限。"],
    representativeTechs: ["trimurti", "chakra", "garuda", "amrita"]
  },
  {
    id: "chinese-myth",
    series: { name: "中国神话", members: ["盘古开天", "女娲造人", "《山海经》", "道教仙话"] },
    treeLit: ["A5", "F3", "L4", "R4"],
    year: -2000,
    title: "中国神话",
    creator: "上古至道教",
    media: "神话 / 仙话",
    era: "上古至中古",
    setting: "盘古化育山川、女娲抟土造人，后世以炼丹与仙术求长生不死。",
    physicalDivergences: ["仙人御风、点石成金、肉身飞升。", "炼丹以汞铅求不老、违反化学。"],
    representativeTechs: ["pan-gu", "nuwa", "elixir-of-immortality", "eight-trigrams"]
  },
  {
    id: "japanese-myth",
    series: { name: "日本神话", members: ["《古事记》", "《日本书纪》", "八百万神明"] },
    treeLit: ["L4", "R3", "B3", "F3"],
    year: -700,
    title: "日本神话",
    creator: "记纪编纂",
    media: "神话",
    era: "上古",
    setting: "伊奘诺与伊奘冉生出诸岛与八百万 kami，天照统御高天原。",
    physicalDivergences: ["神明寄宿万物、可附身与显灵。", "黄泉比良坂连通生死之界。"],
    representativeTechs: ["amaterasu", "yomi", "shinto-kami", "kusanagi"]
  },
  {
    id: "slavic-myth",
    series: { name: "斯拉夫神话", members: ["俄罗斯童话", "乌克兰民间", "异教神谱"] },
    treeLit: ["L3", "B3", "R1", "F2"],
    year: -800,
    title: "斯拉夫神话",
    creator: "佚名（口传）",
    media: "神话 / 民间",
    era: "中世纪",
    setting: "雷雨神佩伦执掌雷电，家神与林妖栖于灶火与密林，亡魂化作鸟雀。",
    physicalDivergences: ["自然万物皆有灵并可附身。", "亡灵可化为鸟兽、穿行阴阳。"],
    representativeTechs: ["perun", "domovoi", "firebird", "koschei"]
  },
  {
    id: "aztec-myth",
    series: { name: "阿兹特克-玛雅神话", members: ["阿兹特克神谱", "玛雅圣书", "羽蛇神传说"] },
    treeLit: ["F5", "L4", "A2", "B5"],
    year: -1200,
    title: "阿兹特克-玛雅神话",
    creator: "中美洲祭司",
    media: "神话",
    era: "前哥伦布",
    setting: "羽蛇神奎兹尔科阿特尔掌管风与晨星，众神以血祭维系第五太阳的运行。",
    physicalDivergences: ["太阳需以活人心脏供奉才不致熄灭。", "人神以血缔约、改写世界运转。"],
    representativeTechs: ["quetzalcoatl", "fifth-sun", "blood-sacrifice", "calendar-stone"]
  },
  {
    id: "arthurian",
    series: { name: "亚瑟王传说", members: ["《亚瑟之死》", "寻找圣杯", "骑士罗曼司"] },
    treeLit: ["F3", "L3", "W3", "L4"],
    year: 1138,
    title: "亚瑟王传说",
    creator: "蒙茅斯的杰弗里等",
    media: "传说文学",
    era: "中世纪罗曼司",
    setting: "不列颠的亚瑟王聚圆桌骑士，法师梅林以预言辅国，圣杯是至高的追寻。",
    physicalDivergences: ["梅林以预言与变形介入王权。", "圣杯的治愈与永生只对纯净者显效。"],
    representativeTechs: ["excalibur", "holy-grail", "merlin", "round-table"]
  },
  {
    id: "grimm",
    series: { name: "格林童话", members: ["《儿童与家庭童话集》", "德国民间", "巫婆与精灵"] },
    treeLit: ["F3", "W5", "L5", "B3"],
    year: 1812,
    title: "格林童话",
    creator: "格林兄弟",
    media: "民间童话集",
    era: "19 世纪",
    setting: "森林里巫婆与精灵掌权，魔戒与纺锤以一句咒语改写命运，王子与贫儿互换身份。",
    physicalDivergences: ["物品自带诅咒或祝福、不依物理。", "变形把人变作兽或石。"],
    representativeTechs: ["magic-ring", "sleeping-curse", "gingerbread-house", "frog-prince"]
  },
  {
    id: "arabian-nights",
    series: { name: "一千零一夜", members: ["山鲁佐德", "辛巴达", "阿拉丁"] },
    treeLit: ["F5", "R3", "W5", "L2"],
    year: 900,
    title: "一千零一夜",
    creator: "阿拉伯故事集",
    media: "民间故事集",
    era: "中古阿拉伯",
    setting: "精灵被封入油灯与指环，航海家辛巴达七渡远洋，咒语开启宝库。",
    physicalDivergences: ["神灯精灵以一句愿望满足凡人。", "飞天地毯与瞬间移动无视距离。"],
    representativeTechs: ["magic-lamp", "flying-carpet", "jinn", "ring"]
  },
  {
    id: "lovecraft",
    series: { name: "克苏鲁神话", members: ["《克苏鲁的呼唤》", "旧日支配者", "修格斯"] },
    treeLit: ["L5", "F5", "B4", "R5"],
    year: 1928,
    title: "克苏鲁神话",
    creator: "H.P. 洛夫克拉夫特等",
    media: "小说 / 神话体系",
    era: "近现代",
    setting: "旧日支配者沉睡于星海之外，人类以禁忌知识窥见宇宙的无意义与自身的渺小。",
    physicalDivergences: ["外神存在本身改写物理与认知。", "修格斯是违背拓扑的变形黏液体。"],
    representativeTechs: ["cthulhu", "necronomicon", "shoggoth", "elder-sign"]
  },
  {
    id: "polynesian-myth",
    series: { name: "波利尼西亚神话", members: ["毛利创世", "夏威夷神谱", "星象航行"] },
    treeLit: ["R1", "F2", "B2", "L1"],
    year: -1000,
    title: "波利尼西亚神话",
    creator: "大洋洲口传",
    media: "神话",
    era: "远古",
    setting: "半神毛伊以钩竿拽起岛屿、偷来火种，先民凭星象跨洋航行。",
    physicalDivergences: ["以钩竿从海中钓起陆地、违背地质。", "星象导航跨越无图之洋。"],
    representativeTechs: ["maui", "fire-theft", "wayfinding", "taniwha"]
  },
  {
    id: "persian-myth",
    series: { name: "波斯神话", members: ["《王书》", "祆教神谱", "鲁斯坦姆"] },
    treeLit: ["F5", "W1", "B5", "L4"],
    year: -1000,
    title: "波斯神话",
    creator: "菲尔多西等",
    media: "神话史诗",
    era: "中古波斯",
    setting: "英雄鲁斯坦姆斩妖除魔，《王书》以善恶二神的对立串起波斯诸王的史诗。",
    physicalDivergences: ["灵光护佑王权、如可见光环。", "魔物与圣兽跨越人神之界。"],
    representativeTechs: ["rustam", "simurgh", "khvarnah", "div-monster"]
  },
  {
    id: "melnibone",
    series: { name: "伊利昂的衰歌", members: ["《永恒战士》", "科兰王子", "混沌之剑"] },
    treeLit: ["F5", "L5", "W5", "B5"],
    year: 1961,
    title: "伊利昂的衰歌",
    creator: "迈克尔·莫考克",
    media: "小说",
    era: "虚构纪元",
    setting: "苍白金瞳的伊利昂族以混沌魔法统治世界千年，最后皇帝埃里克沉溺于宿命与虚无。",
    physicalDivergences: ["混沌之剑以意志吞噬命运。", "种族天生驾驭维度魔法、改写因果。"],
    representativeTechs: ["stormbringer", "elric", "soul-drinker", "melnibone"]
  },
  {
    id: "conan",
    series: { name: "蛮荒时代·柯南", members: ["《蛮王柯南》", "野蛮人史诗", "蛇发女妖"] },
    treeLit: ["W1", "F3", "B5", "L4"],
    year: 1932,
    title: "蛮荒时代",
    creator: "罗伯特·霍华德",
    media: "小说",
    era: "虚构蛮荒",
    setting: "刀光与巫术并存的蛮荒时代，柯南以巨剑劈开蛇发女妖与巫王，文明在废墟间轮转。",
    physicalDivergences: ["蛇发女妖以目光石化活人。", "巫王借死灵与古神之力操纵国运。"],
    representativeTechs: ["atlantean-sword", "serpent-curse", "sorcery", "hyboria"]
  },
  {
    id: "fafhrd",
    series: { name: "法夫德与灰鼠", members: ["《剑客与巫士》", "新潮剑与魔法", "纽沃恩"] },
    treeLit: ["F3", "W1", "L3", "B4"],
    year: 1939,
    title: "法夫德与灰鼠",
    creator: "弗里茨·莱伯",
    media: "小说",
    era: "虚构都市",
    setting: "两大码头城市的浪人与法师在刀剑与咒法之间讨生活，魔法随心却代价隐现。",
    physicalDivergences: ["咒法以符号与银币交易、不依能量守恒。", "亡灵与幻影穿行巷陌。"],
    representativeTechs: ["nehwon", "rat-mage", "illusion", "contract-magic"]
  },
  {
    id: "amber",
    series: { name: "安柏编年史", members: ["《安柏九王子》", "《混沌之厅》", "影子行走"] },
    treeLit: ["R5", "F5", "L5", "W5"],
    year: 1970,
    title: "安柏编年史",
    creator: "罗杰·泽拉兹尼",
    media: "小说",
    era: "多元宇宙",
    setting: "安柏是唯一真实的世界，其余不过是它的影子；王族以心理阴影行走踏遍诸界。",
    physicalDivergences: ["影子行走把想象直接投影为现实世界。", "安柏的纹章承载创世的本原。"],
    representativeTechs: ["pattern-of-amber", "shadow-walk", "trump", "courts-of-chaos"]
  },
  {
    id: "prydain",
    series: { name: "普莱戴恩编年史", members: ["《黑神锅》", "《至高之王》", "预言剑"] },
    treeLit: ["L4", "W5", "F3", "B4"],
    year: 1964,
    title: "普莱戴恩编年史",
    creator: "劳埃德·亚历山大",
    media: "小说",
    era: "虚构诸国",
    setting: "少年塔安在普莱戴恩的诸国间成长，黑神锅吞食亡魂，预言剑指向命运。",
    physicalDivergences: ["黑神锅吞噬并囚禁灵魂。", "先知以猪群读出隐秘的未来。"],
    representativeTechs: ["black-cauldron", "oracle-pig", "sword-of-dyrnwyn", "book-of-three"]
  },
  {
    id: "xanth",
    series: { name: "赞斯", members: ["《魔法何在》", "《源泉》", "双关魔法"] },
    treeLit: ["F5", "R5", "B3", "L3"],
    year: 1977,
    title: "赞斯",
    creator: "皮尔斯·安东尼",
    media: "小说",
    era: "荒诞奇境",
    setting: "赞斯是每人均有专属魔法的土地，荒诞与双关横行，魔境的边界随想象移动。",
    physicalDivergences: ["每人天生持有一种魔法、违反概率。", "地形本身可被咒语重新折叠。"],
    representativeTechs: ["magic-talent", "gap-dragon", "zilch", "pun-magic"]
  },
  {
    id: "dragonlance",
    series: { name: "龙枪", members: ["《龙枪编年史》", "《龙枪传奇》", "克莱恩大陆"] },
    treeLit: ["F3", "B5", "W3", "L4"],
    year: 1984,
    title: "龙枪",
    creator: "魏斯与辛克",
    media: "小说 / 桌游",
    era: "克莱恩纪元",
    setting: "克莱恩大陆上众神离去又归来，龙枪是诸族协力铸成的希望，法师塔高悬秘法。",
    physicalDivergences: ["真名咒法束缚元素与龙。", "神祇的赐法与遗弃直接改写凡人命运。"],
    representativeTechs: ["dragonlance", "mana", "dragon-orb", "towers-of-high-sorcery"]
  },
  {
    id: "shannara",
    series: { name: "沙娜拉", members: ["《宝剑》", "《精灵石》", "四方之地"] },
    treeLit: ["F3", "L5", "B4", "W1"],
    year: 1977,
    title: "沙娜拉",
    creator: "特里·布鲁克斯",
    media: "小说",
    era: "大灾变之后",
    setting: "大灾变后的四方之地，精灵石封印邪神，德鲁伊以古老法术守望残存文明。",
    physicalDivergences: ["德鲁伊以血脉传承唤醒沉睡之力。", "禁忌之剑能抹去一切存在。"],
    representativeTechs: ["elfstones", "sword-of-shannara", "druid-magic", "wish-song"]
  },
  {
    id: "covenant",
    series: { name: "托马斯·科文特编年史", members: ["《千邪之门》", "《白金之子》", "野魔法"] },
    treeLit: ["F5", "L5", "B5", "W5"],
    year: 1977,
    title: "托马斯·科文特编年史",
    creator: "斯蒂芬·唐纳森",
    media: "小说",
    era: "大地纪元",
    setting: "麻风病人科文特被召入大地，以不信之心握起 Wild Magic，每次使用都付出自我。",
    physicalDivergences: ["野魔法可重写信实、却侵蚀使用者神智。", "大地的法则以誓言维系。"],
    representativeTechs: ["wild-magic", "staff-of-law", "giants", "lurker"]
  },
  {
    id: "lyonesse",
    series: { name: "里昂妮丝", members: ["《里昂妮丝三部曲》", "破碎的伊文", "魔法即表演"] },
    treeLit: ["F3", "R1", "W2", "L5"],
    year: 1983,
    title: "里昂妮丝",
    creator: "杰克·万斯",
    media: "小说",
    era: "沉没大陆",
    setting: "亚特兰蒂斯式的伊文大陆沉于海底之前，骑士在衰落的魔法宫廷间追寻失落的技艺。",
    physicalDivergences: ["以魔法即表演的严格仪式塑能。", "大陆终被海水吞没、改写地理。"],
    representativeTechs: ["pelleas", "magic-of-lyonesse", "sundering", "tavolin"]
  },
  {
    id: "last-unicorn",
    series: { name: "最后的独角兽", members: ["同名长篇", "改编动画", "红牛"] },
    treeLit: ["B5", "F3", "L4", "W5"],
    year: 1968,
    title: "最后的独角兽",
    creator: "彼得·毕格",
    media: "小说",
    era: "童话",
    setting: "世间最后的独角兽循红牛之踪去找回同族，在童话与残酷之间认清永恒。",
    physicalDivergences: ["红牛把独角兽驱离森林、改写物种存续。", "魔法以叙事本身维持。"],
    representativeTechs: ["red-bull", "unicorn", "immortality", "witch-magic"]
  },
  {
    id: "neverending",
    series: { name: "说不完的故事", members: ["同名长篇", "象牙塔", "童心女皇"] },
    treeLit: ["F5", "L5", "R5", "W5"],
    year: 1979,
    title: "说不完的故事",
    creator: "米切尔·恩德",
    media: "小说",
    era: "幻想国",
    setting: "男孩巴斯蒂安坠入幻想国，以童心女皇之名许愿，每次愿望都吞噬他的记忆与名字。",
    physicalDivergences: ["许愿需献出真实记忆、改写自身存在。", "幻想国以叙事为生、可生可灭。"],
    representativeTechs: ["auruyn", "childlike-empress", "wish", "nothing"]
  },
  {
    id: "oz",
    series: { name: "绿野仙踪", members: ["《奥兹国的魔法师》", "多萝西", "大巫师"] },
    treeLit: ["R3", "W5", "F3", "L3"],
    year: 1900,
    title: "绿野仙踪",
    creator: "莱曼·鲍姆",
    media: "小说",
    era: "奥兹国",
    setting: "龙卷风把多萝西吹入奥兹国，银鞋与黄砖路通向大巫师，魔法在这里廉价而滑稽。",
    physicalDivergences: ["银鞋一步跨洲、无视距离。", "稻草人借外物获心与脑。"],
    representativeTechs: ["silver-shoes", "yellow-brick-road", "balloon", "witch"]
  },
  {
    id: "dying-earth",
    series: { name: "垂暮大地", members: ["《濒死地球》", "《眼中之瞳》", "魔法即表演"] },
    treeLit: ["F5", "W2", "L4", "B4"],
    year: 1950,
    title: "垂暮大地",
    creator: "杰克·万斯",
    media: "小说",
    era: "太阳将熄",
    setting: "太阳将熄的遥远未来，魔法退化为稀有的仪式，术士争夺残卷。",
    physicalDivergences: ["魔法以繁复手势诗行发动、不依能量。", "意识可封入瓶中寄居他身。"],
    representativeTechs: ["dying-earth", "spell-performance", "ghoul", "pelgrane"]
  },
  {
    id: "viriconium",
    series: { name: "维里科尼姆", members: ["《城市与群山》", "《女人与独角兽》", "颓废魔法"] },
    treeLit: ["F5", "R5", "L5", "B3"],
    year: 1971,
    title: "维里科尼姆",
    creator: "M.约翰·哈里森",
    media: "小说",
    era: "远未来都市",
    setting: "衰朽而华美的远未来都市维里科尼姆，魔法与颓废交织，记忆比砖石更不实。",
    physicalDivergences: ["时间在此地折叠、历史彼此覆盖。", "造物随意志隐现、无守恒。"],
    representativeTechs: ["viriconium", "twilight", "aureate", "afterlives"]
  },
  {
    id: "book-of-new-sun",
    series: { name: "新太阳之书", members: ["《新太阳四部曲》", "终端之剑", "行刑者"] },
    treeLit: ["W1", "L5", "F4", "B4"],
    year: 1980,
    title: "新太阳之书",
    creator: "吉恩·沃尔夫",
    media: "小说",
    era: "末世地球",
    setting: "行刑者塞韦里安携能抹除痛苦的终端之剑流浪，末世地球的神迹与科技难分。",
    physicalDivergences: ["终端之剑以接触抹去物质与痛觉。", "治愈近乎复活、超出生理。"],
    representativeTechs: ["terminus-est", "new-sun", "torturer", "claw"]
  },
  {
    id: "gormenghast",
    series: { name: "歌门鬼城", members: ["《泰忒斯诞生》", "《高门世家》", "繁文缛节"] },
    treeLit: ["W2", "L1", "R1", "B2"],
    year: 1946,
    title: "歌门鬼城",
    creator: "马尔文·皮克",
    media: "小说",
    era: "封闭石堡",
    setting: "巨大石堡歌门鬼城里，礼仪即律法，少年泰忒斯在繁文缛节中寻自由。",
    physicalDivergences: ["城堡自成封闭宇宙、规则即现实。", "仪式可令生死定于礼法。"],
    representativeTechs: ["gormenghast", "ritual", "titus", "castle"]
  },
  {
    id: "belgariad",
    series: { name: "贝里加德", members: ["《预言者》", "《玛洛里昂》", "命定之石"] },
    treeLit: ["F3", "L5", "W5", "R3"],
    year: 1982,
    title: "贝里加德",
    creator: "大卫·埃丁斯",
    media: "小说",
    era: "西大陆",
    setting: "西大陆诸国围绕一颗命定之石结党，巫师与预言推动少年肩负救世的宿命。",
    physicalDivergences: ["预言以意志塑造未来、近乎命定。", "宝珠承载可塑的创世之力。"],
    representativeTechs: ["orb-belgarath", "prophecy", "will", "sorcery"]
  },
  {
    id: "deathgate",
    series: { name: "死亡之门", members: ["《死亡之门七部》", "萨坦", "帕特林"] },
    treeLit: ["R3", "F3", "B4", "W5"],
    year: 1990,
    title: "死亡之门",
    creator: "魏斯与辛克",
    media: "小说",
    era: "诸界",
    setting: "创世者裂为两派，人类与矮人各掌一界，死亡之门封锁着诸界的来去。",
    physicalDivergences: ["门以符文锁住世界往来。", "两脉魔法各执元素与死灵。"],
    representativeTechs: ["deathgate", "sartan", "patryn", "labyrinth"]
  },
  {
    id: "redwall",
    series: { name: "红墙", members: ["《红墙》", "《马丁武士》", "动物修士"] },
    treeLit: ["W1", "B1", "L1", "R1"],
    year: 1986,
    title: "红墙",
    creator: "布莱恩·雅克斯",
    media: "小说",
    era: "修道院",
    setting: "动物修士守着红墙修道院，以剑与歌谣抵御白鼬与耗子的劫掠。",
    physicalDivergences: ["动物以人类心智与匠艺筑城。", "宝剑与号角承载族群记忆。"],
    representativeTechs: ["redwall", "sword-of-martin", "abbey", "bell"]
  },
  {
    id: "stormlight",
    series: { name: "飓光典籍 / 宇宙志", members: ["《王者之路》", "《黯道》", "光辉之界"] },
    treeLit: ["F5", "W3", "L4", "B4"],
    year: 2010,
    title: "飓光典籍",
    creator: "布兰登·桑德森",
    media: "小说",
    era: "罗善达",
    setting: "光辉之界每隔数日遭飓风洗刷，铠匠以誓言与宝石驱动盔甲与剑，秩序与背叛反复拉锯。",
    physicalDivergences: ["以誓言绑定、驾驭实体化的光辉之力。", "死灵以认知复活、改写生命定义。"],
    representativeTechs: ["shardblade", "stormlight", "honorblade", "spren"]
  },
  {
    id: "wheel-of-time",
    series: { name: "时光之轮", members: ["《世界之眼》", "《记忆的曙光》", "两河"] },
    treeLit: ["F3", "L5", "W5", "B5"],
    year: 1990,
    title: "时光之轮",
    creator: "罗伯特·乔丹",
    media: "小说",
    era: "第三纪",
    setting: "转生真龙在命运织成的巨轮中觉醒，男女各掌一口真源，暗帝封印将破。",
    physicalDivergences: ["男性真源被暗帝污染、施法即趋疯狂。", "时轮以命定重演历史。"],
    representativeTechs: ["one-power", "dragon-reborn", "aiel", "seal"]
  },
  {
    id: "malazan",
    series: { name: "玛拉赞陨落英灵录", members: ["《月之花园》", "《 deadhouse 之门》", "帝国战争"] },
    treeLit: ["F5", "L4", "B4", "W5"],
    year: 1999,
    title: "玛拉赞陨落英灵录",
    creator: "史蒂文·埃里克森",
    media: "小说",
    era: "七城与 Genabackis",
    setting: "古老的亡灵术帝国在将军与神祇的棋局间崩解，凡人以意志撬动被遗忘的神力。",
    physicalDivergences: ["亡灵以契约与祭仪被唤起、跨越生死。", "神祇可被凡人弑杀、权能易主。"],
    representativeTechs: ["malazan-mage", "tiste-andii", "warren", "azath"]
  },
  {
    id: "first-law",
    series: { name: "第一律法", members: ["《冷铁之环》", "《英雄大战》", "北方"] },
    treeLit: ["W1", "F3", "L4", "B4"],
    year: 2006,
    title: "第一律法",
    creator: "乔·阿伯克龙比",
    media: "小说",
    era: "联盟与北方",
    setting: "一个 cynical 的中世纪世界，魔法稀少而代价高昂，剑与权谋才是主角。",
    physicalDivergences: ["魔法以血与代价换取、不免费。", "贤者之石类造物近乎传说。"],
    representativeTechs: ["first-law", "seed-fear", "magus", "the-feel"]
  },
  {
    id: "kingkiller",
    series: { name: "弑君者编年史", members: ["《风之名》", "《智者之惧》", "科沃斯的传说"] },
    treeLit: ["F3", "L3", "W3", "B2"],
    year: 2007,
    title: "弑君者编年史",
    creator: "帕特里克·罗斯福斯",
    media: "小说",
    era: "虚构四邦",
    setting: "传奇的科沃斯讲述自己从街头琴师到弑君者的过往，命名法与 sympathetic 魔法并重。",
    physicalDivergences: ["以真名与 sympathetic 连结远程操控物质。", "古代锁艺封印危险的知识。"],
    representativeTechs: ["naming", "sympathy", "shaed", "ampoule"]
  },
  {
    id: "lies-of-locke",
    series: { name: "洛克·拉莫拉的谎言", members: ["《绅士盗贼》", "《红色天空下》", "卡莫尔"] },
    treeLit: ["W2", "L1", "R1", "F3"],
    year: 2006,
    title: "洛克·拉莫拉的谎言",
    creator: "斯科特·林奇",
    media: "小说",
    era: "群岛共和国",
    setting: "一群高明的骗子在魔法稀薄的城邦里算计贵族，机巧与伪装胜过咒语。",
    physicalDivergences: ["以机关与伪装替代魔法、属工程。", "毒物与药剂改写生死。"],
    representativeTechs: ["gentleman-bastard", "camorr", "alchemy-venom", "false-face"]
  },
  {
    id: "poppy-war",
    series: { name: "罂粟战争", members: ["《罂粟战争》", "《龙之裔》", "伪神"] },
    treeLit: ["F5", "B5", "L4", "W5"],
    year: 2018,
    title: "罂粟战争",
    creator: "R.F. 郭",
    media: "小说",
    era: "虚构近代",
    setting: "一名军校生被卷入神祇与帝国的战争，以禁忌的伪神之力翻转战局。",
    physicalDivergences: ["伪神以契约赋予者凡人神性。", "亡灵被强征为战争机器。"],
    representativeTechs: ["spearwing", "quen", "pseudo-god", "shaman"]
  },
  {
    id: "broken-empire",
    series: { name: "破碎帝国", members: ["《无冕之王》", "《破碎之剑》", "焦黑之海"] },
    treeLit: ["F5", "L4", "W5", "B4"],
    year: 2010,
    title: "破碎帝国",
    creator: "马克·劳伦斯",
    media: "小说",
    era: "冰封废土",
    setting: "少年焦黑王子以冷酷心智在碎裂的帝国里向王座攀爬，禁书给予他窥视命运的权能。",
    physicalDivergences: ["禁书使人读心、改写意志。", "血肉与机械缝合的造物行走。"],
    representativeTechs: ["broken-empire", "mind-read", "forbidden-book", "trap"]
  },
  {
    id: "mistborn",
    series: { name: "迷雾之子", members: ["《最后帝国》", "《升华之桥》", "司卡"] },
    treeLit: ["A3", "F3", "L4", "W3"],
    year: 2006,
    title: "迷雾之子",
    creator: "布兰登·桑德森",
    media: "小说",
    era: "最后帝国",
    setting: "在灰烬与迷雾笼罩的暴政下，以金属吞噬获得异能的司卡们谋划推翻神王。",
    physicalDivergences: ["以吞服金属点燃体内异能、违反代谢。", "神王以神明之力统治、不老不死。"],
    representativeTechs: ["allomancy", "feruchemy", "mistborn", "atium"]
  },
  {
    id: "his-dark-materials",
    series: { name: "黑暗物质三部曲", members: ["《黄金罗盘》", "《奥秘匕首》", "幽灵尘埃"] },
    treeLit: ["L4", "R3", "B4", "F3"],
    year: 1995,
    title: "黑暗物质三部曲",
    creator: "菲利普·普尔曼",
    media: "小说",
    era: "多世界",
    setting: "少女莱拉穿越平行世界，人的灵魂以动物形态的 daemon 外显， Dust 是意识的物质。",
    physicalDivergences: ["灵魂以具象 daemon 伴生、可分离。", "幽灵尘埃是承载意识的粒子。"],
    representativeTechs: ["daemon", "alethiometer", "subtle-knife", "dust"]
  },
  {
    id: "old-kingdom",
    series: { name: "古王国", members: ["《萨布里埃尔》", "《黎芮儿》", "亡者之门"] },
    treeLit: ["L4", "F3", "B4", "W3"],
    year: 1995,
    title: "古王国",
    creator: "加思·尼克斯",
    media: "小说",
    era: "古王国",
    setting: "一道魔法之墙隔开安定的南方与亡灵横行的北方，宪章符文约束生死。",
    physicalDivergences: ["宪章符文以书写约束亡灵与魔法。", "死者可借匕首被召回人间。"],
    representativeTechs: ["charter-magic", "bell", "freedom", "necromancer"]
  },
  {
    id: "farseer",
    series: { name: "刺客正传", members: ["《刺客学徒》", "《皇家刺客》", "精技"] },
    treeLit: ["B4", "L4", "W1", "F3"],
    year: 1995,
    title: "刺客正传",
    creator: "罗宾·霍布",
    media: "小说",
    era: "六公国",
    setting: "王室私生子蜚滋习得精技与共感，在忠诚与背叛间守护王储，老者之技连系兽与人。",
    physicalDivergences: ["精技以意念共享感官、跨距操控。", "共感把人与兽意识相连。"],
    representativeTechs: ["wit", "skill", "farseer", "wolf"]
  },
  {
    id: "jonathan-strange",
    series: { name: "乔纳森·斯特兰奇与诺瑞尔先生", members: ["同名长篇", "英格兰魔法复兴", " Raven 先生"] },
    treeLit: ["F3", "L3", "B4", "W3"],
    year: 2004,
    title: "乔纳森·斯特兰奇与诺瑞尔先生",
    creator: "苏珊娜·克拉克",
    media: "小说",
    era: "摄政时期英格兰",
    setting: "在拿破仑战争背景下，两位绅士法师重新唤醒沉睡的英格兰魔法，却召来缄默的 Raven 先生。",
    physicalDivergences: ["魔法以书名与契约借自 fairy 君。", "被带走者困于仙界时间。"],
    representativeTechs: ["english-magic", "raven", "fairy", "footman"]
  },
  {
    id: "night-circus",
    series: { name: "夜晚的马戏团", members: ["同名长篇", "竞争魔法师", "昼夜之篷"] },
    treeLit: ["F3", "W3", "L3", "B3"],
    year: 2010,
    title: "夜晚的马戏团",
    creator: "艾琳·莫根斯特",
    media: "小说",
    era: "维多利亚",
    setting: "两座黑白帐篷的魔法马戏在夜色里对峙，年轻魔术师以幻境博弈命运。",
    physicalDivergences: ["以幻境搭建可居的魔法空间。", "契约把人生绑入竞赛。"],
    representativeTechs: ["circus", "illusion-tent", "bond", "clock"]
  },
  {
    id: "temeraire",
    series: { name: "帝翼", members: ["《飞跃之龙》", " Napoleonic 龙战", "长翅膀的龙"] },
    treeLit: ["B5", "R2", "W1", "F2"],
    year: 2006,
    title: "帝翼",
    creator: "娜奥米·诺维克",
    media: "小说",
    era: "拿破仑战争",
    setting: "拿破仑战争中，会说话的巨龙成为海空战力，舰长与龙结为战友。",
    physicalDivergences: ["龙具智慧与语言、可载人对抗。", "龙群改写海空战略。"],
    representativeTechs: ["temeraire", "dragon", "aerial-corps", "breed"]
  },
  {
    id: "inheritance",
    series: { name: "继承者周期", members: ["《伊拉龙》", "《长老》", "阿拉加西亚"] },
    treeLit: ["B5", "F3", "W3", "L4"],
    year: 2002,
    title: "继承者周期",
    creator: "克里斯托弗·鲍里尼",
    media: "小说 / 电影",
    era: "阿拉加西亚",
    setting: "少年伊拉龙拾得一颗龙蛋，与幼龙共缔心灵纽带，踏上反抗帝国的征途。",
    physicalDivergences: ["龙与骑手共享记忆与感官。", "古语咒法以意志塑能。"],
    representativeTechs: ["saphira", "ancient-language", "rider", "eldunari"]
  },
  {
    id: "percy-jackson",
    series: { name: "波西·杰克逊", members: ["《神火之盗》", "混血营", "希腊众神"] },
    treeLit: ["F5", "B5", "L4", "R3"],
    year: 2005,
    title: "波西·杰克逊",
    creator: "雷克·莱尔顿",
    media: "小说",
    era: "当代美国",
    setting: "希腊神祇在现代美国仍有混血子嗣，少年英雄在营地与冥界之间讨回神物。",
    physicalDivergences: ["神血赋予操控元素与航海之力。", "冥界以渡资判定亡魂去处。"],
    representativeTechs: ["demigod", "olympus", "underworld", "trident"]
  },
  {
    id: "bartimaeus",
    series: { name: "巴蒂梅乌斯三部曲", members: ["《阿姆雷特之环》", "精灵契约", "伦敦"] },
    treeLit: ["F5", "L4", "W3", "B4"],
    year: 2003,
    title: "巴蒂梅乌斯三部曲",
    creator: "乔纳森·斯特劳德",
    media: "小说",
    era: "魔法帝国",
    setting: "在巫师以役使精灵统治的英格兰，少年娜蒂亚以禁忌之名撬动体制。",
    physicalDivergences: ["精灵以真名被役使、受环约束。", "七层封印锁住危险权能。"],
    representativeTechs: ["djinn", "true-name", "pentacle", "amulet"]
  },
  {
    id: "dresden",
    series: { name: "德累斯顿档案（The Dresden Files）", members: ["长篇 17 部（2000–2020，首部 Storm Front）", "短篇集 Side Jobs / Brief Cases", "同宇宙漫画与游戏"] },
    treeLit: ["F3", "L4", "B4", "W3"],
    year: 2000,
    title: "德累斯顿档案",
    creator: "吉姆·布彻（Jim Butcher）",
    media: "小说",
    era: "当代芝加哥",
    setting: "当代芝加哥的巫师哈利·德累斯顿，是电话黄页上唯一登广告的魔法师，以私家侦探的身份接办超自然委托。他与圣白议会、吸血鬼诸庭、仙灵双庭、堕天使与十字骑士周旋，在一桩桩看似普通的案件里，逐步卷入决定现实存续的战争。",
    physicalDivergences: ["魔法是可在当代都市中实用的一门技艺，需凭器物与咒语施行，凡人可以习得。", "灵魂可被契约、储存与交易，天堂与地狱围绕它长期博弈。", "仙灵、吸血鬼、狼人与堕天使各自成体系，与人类社会暗中并存。"],
    mythSources: ["基督教天使学", "凯尔特与日耳曼仙灵传说", "吸血鬼与狼人民间传说"],
    representativeTechs: ["dr-staff", "dr2-seven-laws", "dr2-swords", "dr2-faerie-courts"]
  },
  {
    id: "priory",
    series: { name: "橙树女修道院", members: ["同名史诗", "东西大陆", "圣树"] },
    treeLit: ["F5", "B5", "L4", "R4"],
    year: 2019,
    title: "橙树女修道院",
    creator: "萨曼莎·香农",
    media: "小说",
    era: "虚构大陆",
    setting: "东境的火与西境的冰之间，一位女巫与一位龙裔公主合力对抗古老的灾厄。",
    physicalDivergences: ["龙以形态与记忆跨越代际。", "圣树连通心智、改写认知。"],
    representativeTechs: ["orange-tree", "dragon", "witch", "plague"]
  },
  {
    id: "fifth-season",
    series: { name: "破碎地球", members: ["《第五季》", "《方尖碑之门》", "静息者"] },
    treeLit: ["F5", "L5", "R1", "B3"],
    year: 2015,
    title: "破碎地球",
    creator: "N.K. 杰米辛",
    media: "小说",
    era: " Stillness",
    setting: "在地质剧变频仍的 Stillness，能操控地壳的 orogene 被奴役与恐惧。",
    physicalDivergences: ["以意志平息或引发地震、改写地质。", "轨道遗迹是失落的高科技。"],
    representativeTechs: ["orogeny", "stone-eater", "obelisk", "season"]
  },
  {
    id: "golem-jinni",
    series: { name: "魔像与精灵", members: ["同名长篇", "纽约", "黏土与火"] },
    treeLit: ["B4", "F5", "W3", "L4"],
    year: 2013,
    title: "魔像与精灵",
    creator: "海伦·韦克",
    media: "小说",
    era: "1899 纽约",
    setting: "一尊黏土魔像与一缕火中精灵在移民纽约相遇，各自寻找自由与归处。",
    physicalDivergences: ["魔像以希伯来符文赋生、忠仆无声。", "精灵被囚于瓶、可附身显形。"],
    representativeTechs: ["golem", "jinni", "clay", "aleph"]
  },
  {
    id: "daevabad",
    series: { name: "达夫阿巴德三部曲", members: ["《青铜之城》", "《王国与先知》", " djinn 王朝"] },
    treeLit: ["F5", "B5", "R3", "L4"],
    year: 2017,
    title: "达夫阿巴德三部曲",
    creator: "S.A. 查克拉博蒂",
    media: "小说",
    era: " djinn 之城",
    setting: "人类少女被带入 djinn 的青铜之城，在六族政治与古老诅咒间周旋。",
    physicalDivergences: [" djinn 以血液操控元素、长生不老。", "诅咒跨越世代、改写族群命运。"],
    representativeTechs: ["daevabad", "marid", "afrit", "cursed"]
  },
  {
    id: "uprooted",
    series: { name: "枯荣", members: ["同名长篇", "塔楼巫师", "腐林"] },
    treeLit: ["F3", "B3", "L4", "W3"],
    year: 2015,
    title: "枯荣",
    creator: "娜奥米·诺维克",
    media: "小说",
    era: "谷地王国",
    setting: "每十年巫师带走一名少女，年轻的阿格妮什以草药与古老魔法对抗吞噬村庄的腐林。",
    physicalDivergences: ["腐林以意志同化生物、改写形体。", "塔楼魔法以言语汲取自然。"],
    representativeTechs: ["dragon-tower", "corruption", "herb", "wood"]
  },
  {
    id: "spinning-silver",
    series: { name: "银线纺金", members: ["同名长篇", "东欧童话", "女巫与龙"] },
    treeLit: ["A3", "B5", "F3", "L4"],
    year: 2018,
    title: "银线纺金",
    creator: "娜奥米·诺维克",
    media: "小说",
    era: "东欧",
    setting: "一位犹太女商以纺金偿债，一位冰龙王后为领地求温，两条童话在寒冬交织。",
    physicalDivergences: ["以纺锤把银变金、违背化学。", "龙王以寒霜操控气候。"],
    representativeTechs: ["spindle", "gold", "ice-dragon", "mousetrap"]
  },
  {
    id: "bear-nightingale",
    series: { name: "雪熊与夜莺", members: ["《雪熊与夜莺》", "《冬日姑娘》", "俄罗斯童话"] },
    treeLit: ["B3", "L3", "F3", "W1"],
    year: 2017,
    title: "雪熊与夜莺",
    creator: "凯瑟琳·阿登",
    media: "小说",
    era: "俄式寒冬",
    setting: "少女瓦西莉莎在林妖与家神环绕的村落里，拒绝被修道院吞没，循古老的路走向荒野。",
    physicalDivergences: ["林妖与家神具象化自然意志。", "冬之化身以寒冷冻结生命。"],
    representativeTechs: ["vasilisa", "domovoi", "morozko", "bird"]
  },
  {
    id: "children-blood-bone",
    series: { name: "血与骨之子", members: ["同名三部曲", "奥利绍圣", " maji"] },
    treeLit: ["F5", "B5", "L4", "R4"],
    year: 2018,
    title: "血与骨之子",
    creator: "汤姆·阿德耶米",
    media: "小说",
    era: "奥利绍圣",
    setting: "被奴役的 maji 后裔齐娜以死而复得的神力，掀起反抗白人殖民帝国的起义。",
    physicalDivergences: ["神祇附身赋予元素之力。", "死者被召回、改写战争。"],
    representativeTechs: ["maji", "zeze", "reaper", "skylock"]
  },
  {
    id: "akata-witch",
    series: { name: "无猫之女", members: ["《无猫之女》", "《无豹之女》", "西非魔法"] },
    treeLit: ["F5", "L3", "B3", "W3"],
    year: 2011,
    title: "无猫之女",
    creator: "纳迪·奥科拉福",
    media: "小说",
    era: "尼日利亚",
    setting: "肤色不同的少女 Sunny 在尼日利亚发现自己是_leaf_，踏入以精神与影子为货币的魔法世界。",
    physicalDivergences: ["以精神与影子为货币的魔法体系。", "变形与预知跨越现实。"],
    representativeTechs: ["leaf", "juju", "spirit", "chitti"]
  },
  {
    id: "binti",
    series: { name: "宾蒂", members: ["《宾蒂》", "《宾蒂之家》", "Harmony"] },
    treeLit: ["L5", "R3", "B3", "F5"],
    year: 2015,
    title: "宾蒂",
    creator: "纳迪·奥科拉福",
    media: "小说",
    era: "星际",
    setting: "辛巴族少女宾蒂携古老数学离家求学，却遭遇与人类的灭绝之战，并以共生化解。",
    physicalDivergences: ["以史前数学与族群记忆共生。", "星际跃迁改写距离。"],
    representativeTechs: ["binti", "edan", "okwu", "harmony"]
  },
  {
    id: "city-we-became",
    series: { name: "我们成为的城市", members: ["《大城五部》之一", "纽约化身", "城市之灵"] },
    treeLit: ["R5", "L5", "F5", "B3"],
    year: 2020,
    title: "我们成为的城市",
    creator: "N.K. 杰米辛",
    media: "小说",
    era: "当代纽约",
    setting: "纽约觉醒为一个有意志的存在，与五位 borough 化身合力对抗吞噬城市的仇敌。",
    physicalDivergences: ["城市本身成为有意识的实体。", "以叙事与记忆重塑空间。"],
    representativeTechs: ["new-york", "avatar", "enemy", "gate"]
  },
  {
    id: "gideon",
    series: { name: "锁墓人 / 第九宫的吉迪恩", members: ["《第九宫的吉迪恩》", "Harrow the Ninth", "Nona the Ninth", "Alecto the Ninth"] },
    treeLit: ["L4", "B4", "W1", "F5"],
    year: 2019,
    title: "第九宫的吉迪恩",
    creator: "塔姆辛·缪尔（Tamsyn Muir）",
    media: "小说",
    era: "星际（太空歌剧）",
    setting: "亡灵祭司与她的骑士护卫在古老 House 的继承试炼里解密、互弑，血肉与棺椁即是武器。",
    physicalDivergences: ["以尸体与骨骼构筑构装战力。", "灵魂被封入剑、跨越宿主。"],
    representativeTechs: ["cavalier", "necromancer", "rapier", "coomb"]
  },
  {
    id: "scholomance",
    series: { name: "通灵学院（The Scholomance）", members: ["《致命教育》", "《最后的毕业生》", "《金色飞地》"] },
    treeLit: ["F3", "L4", "B4", "W3"],
    year: 2020,
    title: "通灵学院",
    creator: "娜奥米·诺维克（Naomi Novik）",
    media: "小说",
    era: "魔法寄宿学校（架空）",
    setting: "一座与世隔绝的黑暗魔法学校里，学生靠组队与诡计在毕业前活下来，恶意遍地。",
    physicalDivergences: ["以mana 直接施法、无咒文。", "恶意造物自主猎杀学生。"],
    representativeTechs: ["malia", "mana", "enmity", "wand"]
  },
  {
    id: "books-of-babel",
    series: { name: "巴别塔之书", members: ["《巴别塔》", "《死亡图书馆》", "语言学魔法"] },
    treeLit: ["L1", "F5", "W3", "R4"],
    year: 2013,
    title: "巴别塔之书",
    creator: "乔赛亚·班克罗夫特",
    media: "小说",
    era: "通天之塔",
    setting: "一座无尽高塔巴别以书与语言统治世界，词语即是力量，攀登者揭开塔的秘密。",
    physicalDivergences: ["以真名与语言直接操控现实。", "塔的层级是封闭的小宇宙。"],
    representativeTechs: ["babel", "word", "senlin", "hod"]
  },
  {
    id: "starless-sea",
    series: { name: "无星之海", members: ["同名长篇", "地下海洋", "叙事之厅"] },
    treeLit: ["R5", "F5", "L5", "W5"],
    year: 2019,
    title: "无星之海",
    creator: "艾琳·莫根斯特",
    media: "小说",
    era: "隐喻世界",
    setting: "一名青年坠入藏在地下的海洋与厅堂，那里由故事本身维系，门后是无尽的叙事。",
    physicalDivergences: ["以故事本身维系并改写世界。", "门通往由叙事构成的异界。"],
    representativeTechs: ["honey", "ocean", "key", "narzisse"]
  },
  {
    id: "zelda",
    series: { name: "塞尔达传说", members: ["《时之笛》", "《旷野之息》", "海拉鲁"] },
    treeLit: ["W1", "F3", "R4", "B5"],
    year: 1986,
    title: "塞尔达传说",
    creator: "任天堂",
    media: "游戏",
    era: "海拉鲁",
    setting: "少年林克在三角神力与大师之剑的宿命中，往复穿越时间守护塞尔达公主。",
    physicalDivergences: ["三角神力以意志改写因果。", "时间回溯与空间跳跃并存。"],
    representativeTechs: ["triforce", "master-sword", "goron", "fairies"]
  },
  {
    id: "pokemon",
    series: { name: "宝可梦", members: ["红/绿", "《宝可梦 GO》", "关都地区"] },
    treeLit: ["B2", "B5", "R1", "F2"],
    year: 1996,
    title: "宝可梦",
    creator: "Game Freak / 任天堂",
    media: "游戏 / 动画",
    era: "关都等诸地区",
    setting: "少年训练家捕捉并培育会放电喷火的奇兽，以图鉴丈量一个万物可伙伴化的世界。",
    physicalDivergences: ["奇兽以球收纳、违背生物尺度。", "进化以经验改写物种形态。"],
    representativeTechs: ["pokeball", "pikachu", "evolution", "legendary"]
  },
  {
    id: "dragon-quest",
    series: { name: "勇者斗恶龙", members: ["《洛特传说》", "《天空》", "阿雷夫加德"] },
    treeLit: ["W1", "F3", "B5", "L4"],
    year: 1986,
    title: "勇者斗恶龙",
    creator: "堀井雄二 / 鸟山明",
    media: "游戏",
    era: "阿雷夫加德",
    setting: "持勇者之证的少年在剑与咒之间讨伐复活的大魔王，回合制战斗是王道奇幻的范式。",
    physicalDivergences: ["勇者血脉自带破邪之力。", "咒文以言语召唤元素。"],
    representativeTechs: ["hero", "slime", "zeni", "orb"]
  },
  {
    id: "monster-hunter",
    series: { name: "怪物猎人", members: ["《世界》", "《崛起》", "新大陆"] },
    treeLit: ["B5", "W1", "A2", "R2"],
    year: 2004,
    title: "怪物猎人",
    creator: "卡普空",
    media: "游戏",
    era: "新大陆",
    setting: "猎人以狩猎巨型古龙与兽为业，借生态与匠艺把猎物锻成兵甲，魔幻稀薄。",
    physicalDivergences: ["古龙以体型与生态改写自然。", "生态武器由猎物材料拼合。"],
    representativeTechs: ["greatsword", "elder-dragon", "rathalos", "palico"]
  },
  {
    id: "hollow-knight",
    series: { name: "空洞骑士", members: ["圣巢", " radiance", "小骑士"] },
    treeLit: ["B4", "L4", "F5", "W2"],
    year: 2017,
    title: "空洞骑士",
    creator: "Team Cherry",
    media: "游戏",
    era: "圣巢废墟",
    setting: "被瘟疫感染、遗忘王名的昆虫国度，沉默的小骑士下潜以封印 radiance。",
    physicalDivergences: ["以感染把意志植入群体意识。", "空洞者不载灵魂、可封印神。"],
    representativeTechs: ["void", "shade", "radiance", "nail"]
  },
  {
    id: "bloodborne",
    series: { name: "血源诅咒", members: ["亚楠", "古神", "猎人"] },
    treeLit: ["B4", "L4", "F5", "B3"],
    year: 2015,
    title: "血源诅咒",
    creator: "FromSoftware",
    media: "游戏",
    era: "亚楠",
    setting: "在血疗诱发古神降生的哥特都市，猎人于梦境与真实间追猎，理智是唯一的锚。",
    physicalDivergences: ["血疗唤醒体内古神、改写形体。", "梦境与现实分层、可重置。"],
    representativeTechs: ["blood", "great-one", "insight", "moon"]
  },
  {
    id: "sekiro",
    series: { name: "只狼", members: ["苇名", "龙胤", "忍者"] },
    treeLit: ["B3", "L4", "W1", "F4"],
    year: 2019,
    title: "只狼",
    creator: "FromSoftware",
    media: "游戏",
    era: "苇名",
    setting: "独臂忍者只狼护卫拥有龙胤之力的皇子，以义手与刀在战国幻境里夺回不死。",
    physicalDivergences: ["龙胤之血赋予不死与治愈。", "以楔丸夺取他人生命。"],
    representativeTechs: ["dragon-heritage", "prosthetic", "immortality", "sin"]
  },
  {
    id: "fable",
    series: { name: "神鬼寓言", members: ["《阿尔比恩》", "英雄", "善恶"] },
    treeLit: ["W1", "F3", "L4", "B2"],
    year: 2004,
    title: "神鬼寓言",
    creator: "Lionhead",
    media: "游戏",
    era: "阿尔比恩",
    setting: "英雄的举止累积为善恶，面容随德行扭曲，一支剑即可改写村庄的命运。",
    physicalDivergences: ["善恶以可见印记改写肉身。", "魔法随声名增长。"],
    representativeTechs: ["albion", "will", "hero", "gold"]
  },
  {
    id: "everquest",
    series: { name: "无尽的任务", members: ["诺拉斯", " Vana'diel 前身", " MMORPG 鼻祖"] },
    treeLit: ["F3", "B5", "R3", "W3"],
    year: 1999,
    title: "无尽的任务",
    creator: "Verant / Sony",
    media: "游戏",
    era: "诺拉斯",
    setting: "玩家在诺拉斯的诸大陆间冒险，魔法、种族与位面旅行构成早期 MMO 的语法。",
    physicalDivergences: ["位面旅行跨越世界层级。", "法术以 mana 量化施放。"],
    representativeTechs: ["norrath", "plane", "mana", "ranger"]
  },
  {
    id: "runescape",
    series: { name: "江湖", members: ["《江湖》", " Gielinor", "技能树"] },
    treeLit: ["F3", "A1", "R1", "W2"],
    year: 2001,
    title: "江湖",
    creator: "Jagex",
    media: "游戏",
    era: "Gielinor",
    setting: "一块由神灵之战塑形的中古大陆，玩家以技能与任务从零攀升，魔法是可习的技艺。",
    physicalDivergences: ["以训练直接获得超常技艺。", "神战改写地理与种族。"],
    representativeTechs: ["gielinor", "runescape", "slayer", "gp"]
  },
  {
    id: "planescape",
    series: { name: "异度风景", members: ["《 sigil》", "万门之城", "位面"] },
    treeLit: ["R5", "F5", "L5", "W5"],
    year: 1999,
    title: "异度风景",
    creator: "黑岛 / TSR",
    media: "游戏",
    era: "多元位面",
    setting: "万门之城 sigil 坐落于一座环形的尖塔之端，每一扇门通往一个位面，说客以言辞撬动宇宙。",
    physicalDivergences: ["门以信念连接任意位面。", " Factol 以信念改写现实。"],
    representativeTechs: ["sigil", "portal", "factol", "lady-of-pain"]
  },
  {
    id: "baldurs-gate",
    series: { name: "博德之门", members: ["《博德之门》", "《剑湾》", "被遗忘的国度"] },
    treeLit: ["F3", "W1", "B5", "L4"],
    year: 1998,
    title: "博德之门",
    creator: "Bioware / 黑岛",
    media: "游戏",
    era: "剑湾",
    setting: "在被遗忘的国度里，凡人冒险者卷入神祇与恶魔的棋局，法术以学派严格分立。",
    physicalDivergences: ["神祇可直接降临、改写战局。", "魔法以学派与法术位量化。"],
    representativeTechs: ["sword-coast", "mage", "gorion", "bane"]
  },
  {
    id: "okami",
    series: { name: "大神", members: ["《大神》", "日本神话", "笔神"] },
    treeLit: ["F2", "B3", "L3", "R1"],
    year: 2006,
    title: "大神",
    creator: "Clover / 卡普空",
    media: "游戏",
    era: "日本神话",
    setting: "白野威以笔刷在世间重新描绘风火日月，复活被邪神吞没的日本神话。",
    physicalDivergences: ["以笔刷直接绘出元素与形体。", "神明化身为狼、重绘世界。"],
    representativeTechs: ["amaterasu-okami", "brush", "celesial", "bloom"]
  },
  {
    id: "xenoblade",
    series: { name: "异度神剑", members: ["《未来_redeemed》", "机神界", "巨神"] },
    treeLit: ["B4", "R4", "W2", "F5"],
    year: 2010,
    title: "异度神剑",
    creator: "Monolith Soft",
    media: "游戏",
    era: "两神之躯",
    setting: "两个沉睡巨神的遗体上演化出文明，机神与巨神的对立是世界的全部地理。",
    physicalDivergences: ["世界建在神祇遗体之上、改写引力。", "意识可上传入机械躯壳。"],
    representativeTechs: ["bionis", "mechonis", "monado", "homs"]
  },
  {
    id: "spirited-away",
    series: { name: "千与千寻", members: ["同名动画", "汤屋", "神明世界"] },
    treeLit: ["L4", "R3", "B3", "F3"],
    year: 2001,
    title: "千与千寻",
    creator: "宫崎骏 / 吉卜力",
    media: "动画电影",
    era: "汤屋异界",
    setting: "少女千寻误入神灵澡堂，父母被变成猪，她以劳作与名字守住自我，寻路回家。",
    physicalDivergences: ["汤屋是神灵往返的异界入口。", "遗忘真名便被困于此界。"],
    representativeTechs: ["bathhouse", "yubaba", "river-spirit", "no-face"]
  },
  {
    id: "mononoke",
    series: { name: "幽灵公主", members: ["同名动画", "森林之神", "铁镇"] },
    treeLit: ["B3", "L4", "W2", "A1"],
    year: 1997,
    title: "幽灵公主",
    creator: "宫崎骏 / 吉卜力",
    media: "动画电影",
    era: "室町幻想",
    setting: "人与森林的精灵在铁与咒之间交战，山兽神以生死治乱维系自然的平衡。",
    physicalDivergences: ["山兽神以头颅夺回、生死逆转。", "森林精灵以形体承载自然意志。"],
    representativeTechs: ["shishigami", "forest-spirit", "tatara", "curse"]
  },
  {
    id: "nausicaa",
    series: { name: "风之谷", members: ["同名动画", "腐海", "巨神兵"] },
    treeLit: ["B3", "A1", "R2", "F5"],
    year: 1984,
    title: "风之谷",
    creator: "宫崎骏",
    media: "动画 / 漫画",
    era: "腐海之后",
    setting: "在有毒森林覆盖的末世，少女娜乌西卡以共感读懂腐海，试图弥合人与自然。",
    physicalDivergences: ["腐海以孢子净化大地、改写生态。", "巨神兵是远古的兵器复活。"],
    representativeTechs: ["ohmu", "fukai", "omni", "god-warrior"]
  },
  {
    id: "laputa",
    series: { name: "天空之城", members: ["同名动画", " levitation 石", "飞行岛"] },
    treeLit: ["R4", "W2", "A1", "F4"],
    year: 1986,
    title: "天空之城",
    creator: "宫崎骏 / 吉卜力",
    media: "动画电影",
    era: "飞行岛",
    setting: "一座以反重力石悬浮的失落文明拉普达，藏着足以毁灭世界的科技。",
    physicalDivergences: ["反重力石以意志托起整座城市。", "远古兵器以一句咒文启动。"],
    representativeTechs: ["laputa", "levitation-stone", "robot", "globe"]
  },
  {
    id: "fullmetal",
    series: { name: "钢之炼金术师", members: ["《钢炼》", "《兄弟会》", "亚美斯里斯"] },
    treeLit: ["A3", "A2", "W2", "L4"],
    year: 2001,
    title: "钢之炼金术师",
    creator: "荒川弘",
    media: "漫画 / 动画",
    era: "炼金帝国",
    setting: "在等价交换的铁律下，兄弟以人体炼成失去躯体，踏上找回自我的旅途。",
    physicalDivergences: ["炼金以等价交换改写物质。", "人体炼成越过禁忌、吞噬自身。"],
    representativeTechs: ["equivalent-exchange", "transmutation", "philosopher-stone", "automail"]
  },
  {
    id: "sword-art-online",
    series: { name: "刀剑神域", members: ["《 Aincrad》", "完全潜行", "虚拟现实"] },
    treeLit: ["W2", "F3", "B4", "R3"],
    year: 2009,
    title: "刀剑神域",
    creator: "川原砾",
    media: "轻小说 / 动画",
    era: "VR 世界",
    setting: "玩家被困进死亡游戏，唯有打通百层浮空城堡才能脱身，意识与肉体被锁在一起。",
    physicalDivergences: ["意识被囚于 VR、死亡即真死。", "系统以代码即法则运行。"],
    representativeTechs: ["nervegear", "aincrad", "sword", "cardinal"]
  },
  {
    id: "rezero",
    series: { name: "Re:从零开始的异世界生活", members: ["《 Re:零》", "死亡回归", "菜月昴"] },
    treeLit: ["L5", "F5", "B4", "W5"],
    year: 2014,
    title: "Re:从零开始的异世界生活",
    creator: "长月达平",
    media: "轻小说 / 动画",
    era: "露格尼卡",
    setting: "少年昴获得死亡后回到存档点的权能，在魔女阴谋中反复试错以拯救所爱。",
    physicalDivergences: ["死亡回归以权能重置时间线。", "魔女因子改写命运与记忆。"],
    representativeTechs: ["return-by-death", "witch", "checkpoint", "spirit"]
  },
  {
    id: "slime",
    series: { name: "关于我转生变成史莱姆这档事", members: ["《转生史莱姆》", " tempest", "利姆鲁"] },
    treeLit: ["B3", "F5", "R3", "W3"],
    year: 2013,
    title: "关于我转生变成史莱姆这档事",
    creator: "伏濑",
    media: "轻小说 / 动画",
    era: " tempest",
    setting: "上班族转生为能捕食并模仿一切的史莱姆，以智慧与吸收建立起妖魔国家。",
    physicalDivergences: ["捕食者以吸收获得他者权能。", "以命名赋予魔物智能。"],
    representativeTechs: ["predator", "great-sage", "tempest", "命名"]
  },
  {
    id: "made-in-abyss",
    series: { name: "来自深渊", members: ["同名漫画", "阿比斯", "探窟"] },
    treeLit: ["R1", "L5", "B4", "F5"],
    year: 2012,
    title: "来自深渊",
    creator: "土笔章人",
    media: "漫画 / 动画",
    era: "阿比斯竖洞",
    setting: "一座深不见底的竖洞阿比斯藏着远古遗物，越往下诅咒越重，少女与机器人勇闯深渊。",
    physicalDivergences: ["深渊的上升诅咒改写肉身与心智。", "遗物以概念性规则运作。"],
    representativeTechs: ["abyss", "curse", "relic", "reg"]
  },
  {
    id: "ancient-magus",
    series: { name: "魔法使的新娘", members: ["漫画原作（2013 年连载）", "TV 动画（2017）", "OAD 三部曲"] },
    treeLit: ["F3", "L3", "B3", "W3"],
    year: 2013,
    title: "魔法使的新娘",
    creator: "ヤマザキコレ（Kore Yamazaki）",
    media: "漫画 / 动画",
    era: "现代英格兰乡村",
    setting: "孤独少女羽鸟智世被卖给精灵般的魔法使，在村落与学院间学习与人外的魔法。",
    physicalDivergences: ["魔法以契约与人外连结。", "龙以人形行走、掌控元素。"],
    representativeTechs: ["elias", "dragon", "silky", "college"]
  },
  {
    id: "berserk",
    series: { name: "剑风传奇", members: ["《剑风》", "蝕之刻", "格斯"] },
    treeLit: ["W1", "L5", "B4", "F5"],
    year: 1989,
    title: "剑风传奇",
    creator: "三浦建太郎",
    media: "漫画 / 动画",
    era: "米德兰",
    setting: "佣兵格斯在背叛与恶魔的蚀之刻后，以怨灵铠与巨剑向命运复仇。",
    physicalDivergences: ["以烙印召来魔神、改写命数。", "狂战士铠借怒火超越肉体。"],
    representativeTechs: ["berserker", "behelit", "brand", "dragonslayer"]
  },
  {
    id: "record-lodoss",
    series: { name: "罗德斯岛战记", members: ["《罗德斯岛》", "《灰色魔女》", " TRPG 改编"] },
    treeLit: ["F3", "W1", "B5", "L4"],
    year: 1988,
    title: "罗德斯岛战记",
    creator: "水野良",
    media: "小说 / 动画",
    era: "罗德斯岛",
    setting: "灰色的魔女与碎魂剑的宿命在剑与魔法的岛上轮回，英雄们争夺大陆的命运。",
    physicalDivergences: ["碎魂剑以意志奴役亡魂。", "魔法以咒文与精灵驱动。"],
    representativeTechs: ["lodoss", "soul-crusher", "witch", "dwarf"]
  },
  {
    id: "hellboy",
    series: { name: "地狱小子", members: ["《地狱小子》", " BPRD", "恶魔之手"] },
    treeLit: ["L4", "B4", "F5", "W1"],
    year: 1993,
    title: "地狱小子",
    creator: "迈克·米格诺拉",
    media: "漫画",
    era: "当代机密",
    setting: "被召唤到人间、以巨锤对抗邪神的红皮肤恶魔之子，在档案局与 occult 之间游走。",
    physicalDivergences: ["以右手改写现实、唤醒灾厄。", " occult 以契约召来异界。"],
    representativeTechs: ["right-hand", "bprd", "ogdru", "anung"]
  },
  {
    id: "sandman",
    series: { name: "睡魔", members: ["《沙人》", "梦境国度", " endless 七神"] },
    treeLit: ["L5", "F5", "R5", "W5"],
    year: 1989,
    title: "睡魔",
    creator: "尼尔·盖曼",
    media: "漫画",
    era: "梦境与清醒",
    setting: "梦境的具象 Morpheus 逃出百年囚禁，重收拾他的疆域与 endless 家族的纠葛。",
    physicalDivergences: ["七位 endless 是概念性存在、维系宇宙。", "以故事与梦重塑现实。"],
    representativeTechs: ["dream", "endless", "the-key", "corinthian"]
  },
  {
    id: "fables",
    series: { name: "寓言", members: ["《 Fable》", " Fabletown", "童话移民"] },
    treeLit: ["R3", "L3", "B3", "W3"],
    year: 2002,
    title: "寓言",
    creator: "比尔·威灵厄姆",
    media: "漫画",
    era: "当代纽约",
    setting: "童话人物逃到纽约的 Fabletown，以变形与魔法在凡人世界藏身、内斗。",
    physicalDivergences: ["以魔镜与变形隐藏身份。", "童话法则在都市延续。"],
    representativeTechs: ["fabletown", "mirror", "bigby", "gepett"]
  },
  {
    id: "bone",
    series: { name: "骨头", members: ["《骨头》", "山谷", "神秘族"] },
    treeLit: ["B1", "R1", "F3", "L3"],
    year: 1991,
    title: "骨头",
    creator: "杰夫·史密斯",
    media: "漫画",
    era: "山谷",
    setting: "三个表亲流落神秘山谷，被古老的预言与鼠族拖入正邪之战。",
    physicalDivergences: ["以意念之石操纵心智。", "预言编织山谷的命运。"],
    representativeTechs: ["bone", "valley", "locust", "crown"]
  }
];

const WORKS_META = {
  "mythology": {
    story: "人类远古以神话解释雷霆、疾病、死亡与星辰；龙、炼金、招魂、占卜是跨文明反复出现的原型。",
    synopsis: "非单一故事，而是人类集体想象的母题库；作为全卷 L1 现实基线与其它幻想的对照系。",
    background: "在前科学时代，神话是解释自然与社会秩序的主要方式，各大文明独立涌现相似原型。",
    author: "无名氏集体创作，经口传后由各国文人文献化，如荷马、编纂《山海经》者、一千零一夜的讲述者。"
  },
  "lord-of-rings": {
    story: "霍比特人弗罗多携至尊魔戒深入魔多，以求将其毁于末日火山，终结索伦的阴影。",
    synopsis: "魔戒圣战：九位同伴踏上销毁魔戒之路，中洲各国联手对抗黑暗魔君索伦的扩张。",
    background: "托尔金于一战战壕中萌生构想，以自创语言与神话学为骨，回应工业文明对乡土的侵蚀。",
    author: "J.R.R. 托尔金（1892–1973），牛津大学教授、语言学家，《霍比特人》《魔戒》《精灵宝钻》作者。"
  },
  "harry-potter": {
    story: "孤儿哈利发现自己是巫师，入读霍格沃茨，与黑魔王伏地魔的宿命对抗贯穿七年。",
    synopsis: "哈利与挚友赫敏、罗恩破除密室与谜题，最终直面并击败分裂魂器的伏地魔。",
    background: "罗琳在晚点列车上萌生构思，将英式寄宿学校传统与神话、炼金母题熔于一炉。",
    author: "J.K. 罗琳（1965–），英国作家，曾陷单亲救济困境，写出全球最畅销儿童文学系列。"
  },
  "got": {
    story: "维斯特洛大陆上七大王国因铁王座陷入权谋混战，低魔的龙与异鬼在北方悄然回归。",
    synopsis: "史塔克、坦格利安等家族围绕继承权厮杀，琼恩·雪诺与龙妈合力对抗长夜的异鬼大军。",
    background: "马丁以玫瑰战争与英法百年战争为蓝本，刻意反写经典奇幻的善恶二分与主角光环。",
    author: "乔治·R.R. 马丁（1948–），美国作家、编剧，早年写科幻短篇，后转向史诗奇幻。"
  },
  "dnd": {
    story: "玩家以掷骰与规则书共同演绎地下城冒险，妖精、龙、法术构成可无限扩展的开放框架。",
    synopsis: "无单一主线，是一套供桌游跑团的世界观工具：被遗忘的国度、灰鹰、龙枪等设定任人探险。",
    background: "源于战棋爱好者对奇幻战斗的推演需求，1974 年首版把托尔金式元素规则化、游戏化。",
    author: "加里·吉盖克斯与戴夫·阿内森创制，龙与地下城是桌上角色扮演游戏（TRPG）的开山之作。"
  },
  "warcraft": {
    story: "艾泽拉斯星球上人类、兽人、暗夜精灵等种族，围绕魔法、部落与联盟的存亡反复交战。",
    synopsis: "从兽人入侵到燃烧军团入侵，阿尔萨斯堕落为巫妖王，玩家在阵营战争中改写世界命运。",
    background: "暴雪以《魔兽争霸》即时战略起家，后将宏大编年史延展为大型多人在线角色扮演游戏。",
    author: "暴雪娱乐（Blizzard Entertainment）出品，核心编年史由克里斯·梅森等首席创意官统筹。"
  },
  "elder-scrolls": {
    story: "泰姆瑞尔大陆充满湮灭位面、龙裔预言与政治阴谋，玩家以龙吼之力改写帝国兴衰。",
    synopsis: "从《竞技场》到《天际》，主线围绕湮灭危机、龙裔觉醒与梭默入侵，支线则编织诸省史诗。",
    background: "贝塞斯达以高度自由的开放世界与深奥的伪历史文献著称，强调玩家自主叙事。",
    author: "贝塞斯达游戏工作室（Bethesda Game Studios）开发，世界观文本由多位撰写者协作构建。"
  },
  "dark-souls": {
    story: "不死人于衰朽的世界追寻初心之火，在薪王熄灭、时代将尽的绝望中循环征伐。",
    synopsis: "玩家扮演被选的不死人，击败薪王、传续火焰或迎来黑暗时代，叙事多由环境碎片拼出。",
    background: "宫崎英高受《恶魔之魂》启发，刻意以克制叙事、高难度与留白营造衰败肃穆感。",
    author: "FromSoftware 开发，宫崎英高担任总监，塑造了魂类游戏的基调与美学。"
  },
  "warhammer": {
    story: "战锤旧世界与战锤 40K 双线：前者是中古奇幻战场，后者是黑暗遥远的科幻哥特未来。",
    synopsis: "旧世界人类帝国对抗混沌、绿皮与吸血鬼；40K 中人类帝国在星际间与异形、混沌殊死搏杀。",
    background: "游戏工坊从战棋起家，靠庞大兵种设定与grimdark美学建立横跨桌游、小说的IP宇宙。",
    author: "游戏工坊（Games Workshop）出品，设定由工作室集体编撰并持续扩展。"
  },
  "witcher": {
    story: "大陆上猎魔人杰洛特以变异之躯斩除怪物，却深陷种族屠杀与政治倾轧的灰色漩涡。",
    synopsis: "杰洛特寻回养女希里，周旋于尼弗迦德战争与精灵反抗之间，结局指向宿命般的结局。",
    background: "萨普科夫斯基先写短篇后扩成长篇，借斯拉夫民间妖魔与政治寓言重构欧洲风味奇幻。",
    author: "安杰伊·萨普科夫斯基（1948–），波兰作家，原为贸易代表，凭猎魔人系列成为国宝级作者。"
  },
  "narnia": {
    story: "二战孩童躲入魔衣橱，跌入狮王阿斯兰守护的纳尼亚，亲历创世、背叛与终末之战。",
    synopsis: "佩文西四兄妹在多部故事中进出纳尼亚，对抗白女巫与篡位者，最终迎来末日审判。",
    background: "刘易斯以基督教寓言为骨，挪用希腊罗马、北欧与英国童话母题写给侄子们看。",
    author: "C.S. 刘易斯（1898–1963），英国学者、作家，与托尔金同属文学社「迹象」。"
  },
  "discworld": {
    story: "一颗巨龟背上的圆盘世界上，法师、女巫与死神以荒诞逻辑运转着一个笑中带刺的宇宙。",
    synopsis: "卫兵队长维提纳里、女巫格兰妮·韦瑟瓦等角色在数十部独立又勾连的小说里解构一切成见。",
    background: "普拉切特以讽刺笔法戏仿奇幻套路与社会议题，从《魔法的颜色》起笔长达四十余部。",
    author: "特里·普拉切特（1948–2015），英国作家，被誉为国民幽默奇幻大师，晚年与阿尔茨海默症抗争仍写作。"
  },
  "lord-of-the-mysteries": {
    story: "穿越者克莱恩于蒸汽与神秘并存的维多利亚式世界，借占卜与序列晋升逐步窥见旧日真相。",
    synopsis: "克莱恩化名道恩、格尔曼，于贝克兰德阴谋与邪神复苏中攀升序列，寻找归乡与自身真相。",
    background: "爱潜水的乌贼融合克苏鲁、维多利亚悬疑与升级流，构建严谨的「序列」超凡体系。",
    author: "爱潜水的乌贼，中国网络文学作家，以严密设定与悬疑节奏著称，《诡秘之主》为其代表作。"
  },
  "earthsea": {
    story: "巫师之岛地球海由诸岛与真名魔法构成，少年雀鹰因傲慢释放暗影，终生追逐赎还。",
    synopsis: "格得在《风之彼岸》成长、求学、追猎自身暗影，后续探讨性别、平衡与死亡的哲思。",
    background: "勒古恩以道家阴阳与海岛民族志为灵感，反对征服式奇幻，强调平衡与名实。",
    author: "厄休拉·K·勒古恩（1929–2018），美国作家，科幻奇幻双栖，深具人类学与社会学视野。"
  },
  "final-fantasy": {
    story: "每一代都是独立世界的科幻奇幻史诗，水晶、星球灵魂与反命运少年是反复回响的母题。",
    synopsis: "从《FF6》的魔导装甲叛乱到《FF7》的星命抗争、FF10 的螺旋悖论，主角总在改写世界结局。",
    background: "史克威尔以电影化叙事与世界观厚度突破当时JRPG框架，每代重起炉灶却共享精神。",
    author: "史克威尔艾尼克斯（Square Enix）出品，核心创意长期由坂口博信、野岛一成等主导。"
  },
  "dragon-age": {
    story: "塞达斯大陆的魔法受 templar 监管，灰袍守望者于圣战与外道之神觉醒中捍卫凡人。",
    synopsis: "玩家作为觉醒的守望者集结各方，对抗暴君、暗僧与远古神灵，抉择塑造国家命运。",
    background: "BioWare 以《博德之门》式叙事功底，构建带宗教迫害色彩的「魔法即危险」设定。",
    author: "BioWare 开发，世界观由首席编剧大卫·盖德等团队搭建。"
  },
  "greek-myth": {
    story: "奥林匹斯众神、英雄与怪物在爱琴海世界演绎权力、爱情与宿命，神人混杂难分。",
    synopsis: "从宙斯夺权到赫拉克勒斯十二功、特洛伊战争，神话串联英雄世代的荣耀与悲歌。",
    background: "希腊神话由荷马史诗与赫西俄德《神谱》定型，后经罗马文人改写，成为西方母题源流。",
    author: "荷马、赫西俄德等整理，罗马的奥维德《变形记》进一步系统化，属集体文学传统。"
  },
  "norse-myth": {
    story: "阿萨神族与华纳神族、巨人、侏儒共处的九界，终将毁于诸神黄昏的轮回之战。",
    synopsis: "奥丁寻智、索尔战巨怪、洛基背叛，预言中的诸神黄昏让世界焚尽而后重生。",
    background: "北欧神话由冰岛《埃达》与萨迦保存，中世纪基督教化前夕被笔录传世。",
    author: "无名吟游诗人传统，由史洛里·斯图拉松等冰岛学者于13世纪编纂成《埃达》。"
  },
  "egypt-myth": {
    story: "尼罗河文明以太阳神拉、冥王奥西里斯与猫女神巴斯特等神系解释生死与王朝。",
    synopsis: "奥西里斯被害分尸、其子荷鲁斯复仇夺位，构成王权神授与死后审判的核心神话。",
    background: "埃及神话随王朝更迭层层叠加，神庙祭司将地方神祇整合进全国万神殿。",
    author: "古埃及祭司与王室集体创作，大量载于金字塔铭文、亡灵书与神庙壁画。"
  },
  "celtic-myth": {
    story: "爱尔兰与威尔士的精灵、英雄与异界（Tír na nÓg）交织，魔法与预言贯穿凯尔特传统。",
    synopsis: "库丘林、芬恩骑士团与亚瑟传奇的凯尔特根系，讲述英雄、变形与异界诱拐。",
    background: "凯尔特神话经中世纪修道士笔录，混合异教残余与基督教框架得以留存。",
    author: "爱尔兰、威尔士游吟诗人传统，由中世纪抄写员整理为《夺牛长征记》等文本。"
  },
  "sumerian-myth": {
    story: "两河文明的恩基、伊南娜等神祇掌管文明技艺，洪水与创世神话早于圣经传统。",
    synopsis: "《吉尔伽美什》求永生、伊南娜下冥府，苏美尔神话奠定了近东神权叙事原型。",
    background: "楔形文字泥板使苏美尔神话成为人类最古老的成文故事，后被巴比伦《埃努玛·埃利什》继承。",
    author: "苏美尔、阿卡德祭司书吏集体创作，泥板文献多出自神庙档案馆。"
  },
  "hindu-myth": {
    story: "印度教万神以梵天、毗湿奴、湿婆三相演化宇宙，罗摩与克里希纳降世除邪。",
    synopsis: "《罗摩衍那》《摩诃婆罗多》讲述王子流放、俱卢大战与黑天训示，史诗即宇宙法则。",
    background: "印度神话在口传千年中层累而成，与哲学、瑜伽和种姓秩序深度交织。",
    author: "蚁垤、毗耶娑等传说中的圣者编纂，属婆罗门口传与梵文写本传统。"
  },
  "chinese-myth": {
    story: "中国上古神话以盘古开天、女娲造人、大禹治水与山海经异兽勾画华夏宇宙观。",
    synopsis: "从创世到后裔射日、精卫填海，神话承载天人关系与治水英雄的集体记忆。",
    background: "神话散见于《山海经》《楚辞》《淮南子》等，经历代文人辑录而非单一圣典。",
    author: "先秦至汉晋文人与方士集体采录，刘向、郭璞等曾作校注辑佚。"
  },
  "japanese-myth": {
    story: "日本神话以伊奘诺、伊奘冉生岛、天照大神统御高天原，勾连神道与皇统起源。",
    synopsis: "素戋呜尊斩八岐大蛇、天孙降临，神话将自然神祇与天皇谱系合为一脉。",
    background: "神话由《古事记》《日本书纪》于8世纪定型，带有显扬皇权的编纂意图。",
    author: "太安万侣等奉敕编纂《古事记》，舍人亲王主持《日本书纪》，依朝廷旨意成书。"
  },
  "slavic-myth": {
    story: "斯拉夫民间以佩龙、弗莱斯娜等神祇与林妖、家神守护自然与家园，后融于基督教。",
    synopsis: "巴贝尔·雅加的魔屋、火鸟与不死之水构成东欧童话与异教信仰的共同底色。",
    background: "斯拉夫异教神话缺乏统一圣典，主要靠民间故事与民俗学在基督教化后幸存。",
    author: "东欧村民集体口传，19世纪由阿法纳谢耶夫等民俗学者系统采录成集。"
  },
  "aztec-myth": {
    story: "阿兹特克宇宙以五大太阳纪轮回、羽蛇神奎兹尔科亚特尔与战神维齐洛波奇特利为中心。",
    synopsis: "创世众神自我牺牲换日，人需以血祭维系第五太阳运转，神话即帝国宗教根基。",
    background: "阿兹特克神话承自托尔特克与玛雅，由祭司阶层服务特诺奇蒂特兰的政教体制。",
    author: "纳瓦祭司与宫廷编年史家集体创作，西班牙征服后由门多萨等手抄本部分存世。"
  },
  "arthurian": {
    story: "亚瑟王拔剑称王、圆桌骑士寻圣杯，卡美洛的兴衰是西方骑士理想的终极寓言。",
    synopsis: "亚瑟统一不列颠、兰斯洛特与桂妮薇儿私情、莫德雷德叛乱导至卡美洛覆灭。",
    background: "传说由威尔士口头素材演化，马洛礼的《亚瑟之死》将其定型为完整散文传奇。",
    author: "源头含杰弗里·蒙茅斯等，托马斯·马洛礼（15世纪）集其大成编为《亚瑟之死》。"
  },
  "grimm": {
    story: "格林兄弟搜集的德国民间童话，森林、巫婆、被诅咒的公主与幸运儿构成暗黑底色。",
    synopsis: "灰姑娘、白雪公主、汉塞尔与格蕾特等故事在初版中血腥直白，后经润色走向童真。",
    background: "格林兄弟本为语言学家，为保存日耳曼古俗而采录，首版远比后世版本残酷。",
    author: "雅各布与威廉·格林兄弟（19世纪），德国语言学家、童话搜集者。"
  },
  "arabian-nights": {
    story: "山鲁佐德以一夜一故事暂缓死刑，框架叙事串起巴格达、航海与精灵的东方奇谭。",
    synopsis: "辛巴达航海、阿拉丁神灯、阿里巴巴与四十大盗在千夜讲述中层叠展开。",
    background: "故事源自波斯、印度与阿拉伯口头传统，于阿拔斯王朝黄金时代汇成文集。",
    author: "无名讲述者集体创作，10世纪前后成形，18世纪由加朗法语译本风行欧洲。"
  },
  "lovecraft": {
    story: "新英格兰衰败小镇之外，远古外神与不可名状之恐怖潜伏，人类理智在其面前渺小。",
    synopsis: "《克苏鲁的呼唤》等故事中，调查者触及禁忌知识便崩坏，宇宙冷漠而无意义。",
    background: "洛夫克拉夫特以书信往来构建共享的「神话」宇宙，反理性、反人类中心。",
    author: "H.P. 洛夫克拉夫特（1890–1937），美国恐怖作家，生前潦倒，死后影响深远。"
  },
  "polynesian-myth": {
    story: "玻利尼西亚诸岛以创世神塔涅、毛伊捕鱼升日等神话解释海洋、岛屿与星辰。",
    synopsis: "毛伊用鱼钩钓起陆地、偷火予人类，波利尼西亚神话将航海英雄与创世合一。",
    background: "神话随远洋迁徙的独木舟口传，夏威夷、毛利、萨摩亚各有地方化版本。",
    author: "太平洋岛民集体口传，19世纪后由传教士与民俗学者（如格雷）笔录成册。"
  },
  "persian-myth": {
    story: "波斯神话以琐罗亚斯德教善恶二元、英雄鲁斯塔姆与《列王纪》的帝王史诗为骨干。",
    synopsis: "鲁斯塔姆七试、扎尔与苏赫拉布悲剧，菲尔多西将波斯万古英雄谱写成民族记忆。",
    background: "伊斯兰化后，波斯文人以史诗保存前伊斯兰的伊朗认同与祆教色彩。",
    author: "菲尔多西（10世纪）编纂《列王纪》，祆教经典《阿维斯陀》为更早源头。"
  },
  "melnibone": {
    story: "衰朽的古老族裔梅利玻内以混沌魔法统治，苍白皇帝埃里克厌倦血腥帝国而反叛宿命。",
    synopsis: "埃里克携黑剑与盟友对抗血亲与混沌诸神，在英雄与虚无之间游走于《红袍王子》。",
    background: "莫考克以埃里克反写传统英雄，开创「反英雄」与多宇宙混沌神话的new wave奇幻。",
    author: "迈克尔·莫考克（1939–），英国作家，多产且深刻影响现代奇幻与科幻。"
  },
  "conan": {
    story: "蛮王柯南于远古 hyboria 大陆以蛮力与狡智闯荡，从盗贼一路砍成国王。",
    synopsis: "霍华德以一篇篇冒险拼出柯南的崛起，蛮族文明在蛇神与巫师间轮转兴衰。",
    background: "霍华德创立剑与魔法（sword and sorcery）亚类型，强调肉体与宿命的粗粝浪漫。",
    author: "罗伯特·E·霍华德（1906–1936），美国 pulp 杂志作家，以自杀早逝，年仅30。"
  },
  "fafhrd": {
    story: "冰风荒原的野人大斧与南方来的灰鼠侠盗组成搭档，在新权城接下荒诞又凶险的委托。",
    synopsis: "法夫德与灰鼠在《剑客的巫术》等故事中周旋于女巫、鼠人神祇与城市阴谋。",
    background: "莱伯以轻松讽刺的笔调写剑与魔法，新权城有对中世纪城市的戏拟。",
    author: "弗里茨·莱伯（1910–1992），美国作家，与朋友共创「 Fritz Leiber」式友谊写入角色。"
  },
  "amber": {
    story: "唯一真实的琥珀城之外，是无数影子世界的投影；王室子女为继承王位相互算计。",
    synopsis: "失忆的科温逐步恢复记忆，游走影子、争夺琥珀统治权，揭开家族与父王的秘密。",
    background: "泽拉兹尼以《 hermit 》式诗意与希腊神话互文，把多重宇宙写得更私人与宿命。",
    author: "罗杰·泽拉兹尼（1937–1995），美国作家，新浪潮代表，兼擅科幻与奇幻。"
  },
  "prydain": {
    story: "少年塔安于威尔士风味的远古不列颠，从猪倌助手成长为对抗黑Lord的英雄。",
    synopsis: "塔安寻失猪、集器物，对抗安娜wn的黑暗军队，最终领会「真正的领袖」之意。",
    background: "亚历山大以《马比诺吉昂》威尔士神话为骨架，写给青少年的成长史诗。",
    author: "劳埃德·亚历山大（1924–2007），美国作家，曾赴二战，后专写青少年奇幻。"
  },
  "xanth": {
    story: "赞斯是个每人都有独特魔法的荒诞喜剧王国，双关语与无厘头冒险贯穿始终。",
    synopsis: "各主角为解除诅咒、寻找真爱周游赞斯，剧情常以文字游戏与闹剧推进。",
    background: "安东尼以 pun 与戏仿著称，把奇幻设定当成玩笑的游乐场。",
    author: "皮尔斯·安东尼（1934–），美国作家，高产，赞斯系列是其最长青作品。"
  },
  "dragonlance": {
    story: "克莱恩世界上，信仰之力的魔法随神祇离去而黯淡，众英雄在龙枪战争中重燃希望。",
    synopsis: "雷斯林、卡拉蒙等同伴对抗黑暗之后，龙枪传奇串起信仰、背叛与救赎。",
    background: "TRPG 战役被改写成小说，韦斯与希克曼把跑团记录化为畅销奇幻。",
    author: "玛格丽特·韦斯与崔西·希克曼合作创作，龙枪是其标志性系列。"
  },
  "shannara": {
    story: "核战后的四地大陆上，谢恩家族的后裔以魔法之剑对抗邪恶，守护残存的文明。",
    synopsis: "从《 sword of Shannara 》到《基因组》，布克斯家族在多世代中抵御恶魔与邪术师。",
    background: "布鲁克斯以托尔金框架写美式青少年冒险，开启现代商业奇幻长篇潮。",
    author: "特里·布鲁克斯（1939–），美国作家，其首部奇幻长篇即登上畅销榜。"
  },
  "covenant": {
    story: "患麻风病的现代人托马斯· covenant 被召入大地，被迫在虚无者威胁下抉择救世。",
    synopsis: "covenant 两度三度踏入大地，于自我怀疑与救赎间对抗反叛者，终章重写现实。",
    background: "唐纳森以存在主义与心理暗面写奇幻，covenant 的「不信」是核心张力。",
    author: "斯蒂芬·R·唐纳森（1942–），美国作家，以《托马斯· covenant 编年史》成名。"
  },
  "lyonesse": {
    story: "亚特兰蒂斯式的衰亡群岛上，凡人王子与精灵女王的爱跨越即将沉没的文明。",
    synopsis: "《 lyonesse 》三部曲写群岛覆灭前夜的骑士、巫术与悲剧爱情，基调哀婉。",
    background: "万斯以精致文风与远古不列颠传说，写一座注定沉没的仙境挽歌。",
    author: "杰克·万斯（1916–2013），美国作家，风格冷峻考究，科幻奇幻皆精。"
  },
  "last-unicorn": {
    story: "世上最后一只独角兽离家寻回同族，在魔法消退的人间变成少女，见证爱与失去。",
    synopsis: "独角兽与江湖骗子、王子同行，闯红牛领主的城堡，最终以代价换回族群。",
    background: "比格以童话诗意的笔触写成长与遗忘，被誉为一封写给童话的情书。",
    author: "彼得·S·比格（1939–），美国作家，本书是其最著名的奇幻中篇。"
  },
  "neverending": {
    story: "病弱的男孩巴斯蒂安拾得一本奇书，闯入幻想国，以愿望填补童心女皇的失名之疾。",
    synopsis: "巴斯蒂安在书中世界许愿历险，逐渐迷失自我，最终须以「真实愿望」归来。",
    background: "恩德以元叙事写阅读与想象力，暗讽成人世界对童真的剥夺。",
    author: "米切尔·恩德（1929–1995），德国作家，《说不完的故事》《毛毛》作者。"
  },
  "oz": {
    story: "堪萨斯女孩朵拉西被龙卷风刮入奥兹国，沿黄砖路寻归家之法，结识三个夥伴。",
    synopsis: "朵拉西与稻草人、铁皮人、狮子求大巫师赐愿，终发现家才是所寻之力。",
    background: "鲍姆意在写「纯粹美国童话」，摆脱欧式恐怖，开创本土奇观王国。",
    author: "L. 弗兰克·鲍姆（1856–1919），美国作家，奥兹系列衍生十余部续作。"
  },
  "dying-earth": {
    story: "太阳将熄的遥远未来，残存魔法与衰朽文明并存，术士在末日余晖里算计。",
    synopsis: "《 dying earth 》短篇集与《 cloves 》写术士切斯拾遗、解谜，荒诞又诗意。",
    background: "万斯以「地球末期」设定影响DND，确立了抽离诙谐的术士腔调。",
    author: "杰克·万斯（1916–2013），本书奠定其「万斯式」文风与末日奇幻母题。"
  },
  "viriconium": {
    story: "衰败未来的维里科尼姆城，艺术、衰朽与怪诞生物交织成一座梦境般的废墟都市。",
    synopsis: "各篇章松散相连，写艺术家、盗贼与异形在病态华丽的城市里游荡。",
    background: "哈里森刻意反托尔金，以新 Wave 的文学性与疏离感重写都市奇幻。",
    author: "M. 约翰·哈里森（1945–），英国作家，风格阴郁诗化，影响深远。"
  },
  "book-of-new-sun": {
    story: "遥远未来地球的次级太阳纪，见习刽子手塞维里安携能治愈亦能遗忘的古老之刃远行。",
    synopsis: "塞维里安在《新太阳之书》四部曲中失去又寻回记忆，似凡人似神祇地走向救赎。",
    background: "沃尔夫以密度极高的隐喻与不可靠叙述写「科幻外衣的奇幻」，需反复重读。",
    author: "吉恩·沃尔夫（1931–2019），美国作家，被视为奇幻文学最具智性的作者之一。"
  },
  "gormenghast": {
    story: "庞大腐朽的哥姆恩加斯特城堡里，伯爵之子泰特斯在仪式牢笼与叛逆者之间挣扎。",
    synopsis: "泰特斯反抗世袭仪轨与女管家斯蒂尔普斯，最终逃离城堡寻找自我。",
    background: "皮克以版画般的哥特巨构写「反童话」，重氛围与结构胜过情节。",
    author: "梅文·皮克（1911–1968），英国作家兼画家，本书是其奇诡风格的巅峰。"
  },
  "belgariad": {
    story: "预言中的少年加里昂发现自己是天命之子，护送一枚神物对抗黑暗神祇托拉克。",
    synopsis: "加里昂随 guardians 周游西境诸国，集齐预言器物，揭开身世与宿命对决。",
    background: "埃丁斯以轻松明快的传统史诗写青少年向冒险，结构工整似童话。",
    author: "大卫·埃丁斯（1931–2009），美国作家，与妻蕾·埃丁斯合作续写多系列。"
  },
  "deathgate": {
    story: "创世双神将种族封入七座世界之门的监狱，两派代理人 Sartan 与 Patryn 在门后博弈。",
    synopsis: "海斯与希克曼的《死亡之门》写双族后裔解开门锁，重逢并清算远古背叛。",
    background: "二人以 DND 式设定写长篇史诗，融合科幻与奇幻的「门」母题。",
    author: "玛格丽特·韦斯与崔西·希克曼，死亡之门 cycle 为其代表作之一。"
  },
  "redwall": {
    story: "和平的修道院红墙屡遭鼠贼围攻，小鼠武士凭勇气与歌谣守护家园。",
    synopsis: "马蒂斯等小鼠英雄集结，对抗臭名昭著的老鼠军阀，寻回失物与荣耀。",
    background: "雅克以英式田园动物传奇为趣，食谱与歌声是其温馨标记。",
    author: "布莱恩·雅克（1939–2011），英国作家、播音员，红墙系列广受儿童喜爱。"
  },
  "stormlight": {
    story: "风暴频仍的罗刹大陆上，骑士团覆灭千年后再现，奴隶与学者背负古老誓言觉醒。",
    synopsis: "卡拉丁、莎兰等以「誓约」重燃渊光骑士之力，对抗虚空与即将降临的灾劫。",
    background: "桑德森以严谨「魔法学」与多视角史诗，构建宇宙级规模的 cosmere 之一角。",
    author: "布兰登·桑德森（1975–），美国作家，以严密设定与高产著称，亦续完《时光之轮》。"
  },
  "wheel-of-time": {
    story: "转生真龙预言笼罩诸国，牧羊少年兰德被指认为重临者，须对抗暗影封印。",
    synopsis: "三少年与爱雯等踏入命运，兰德在众多轮回中学会掌控阳极力，迎战暗帝。",
    background: "乔丹以宏大的轮回转世与多文化设定写「终极史诗」，病逝后由桑德森续完。",
    author: "罗伯特·乔丹（笔名，1937–2007），美国作家；末三卷由布兰登·桑德森续写。"
  },
  "malazan": {
    story: "malazan 帝国在军阀与升天者间扩张，凡人与神祇、亡灵在漫长战争里纠缠。",
    synopsis: "埃里克森以多线群像写佣兵、亡灵法师与古龙，解构英雄叙事，规模惊人。",
    background: "埃里克森原为人类学家，以 TRPG 战役为底，写出冷峻悲悯的军队史诗。",
    author: "史蒂文·埃里克森（1959–），加拿大作家，malazan 书之陨落为其标杆巨著。"
  },
  "first-law": {
    story: "环世界的三部曲里，贪婪的 Bay 联盟、北方蛮族与魔法师在权谋中撕毁脆弱和平。",
    synopsis: "瘸子洛根、审问官格洛塔等反英雄在《第一次律法》里揭露「英雄」的虚妄。",
    background: "阿伯克龙比以黑色幽默与道德灰阶反写史诗奇幻的崇高腔调。",
    author: "乔·阿伯克龙比（1974–），英国作家，以犀利反英雄叙事走红。"
  },
  "kingkiller": {
    story: "传奇人物 Kvothe 在酒馆自述生平，从神童流浪儿到成名又陨落的魔法音乐家。",
    synopsis: "《风之名》《智者恐惧》以回忆录式双线，写 Kvothe 求学、复仇与名声的起落。",
    background: "罗夫斯以诗化文风与「名字魔法」写一部迟迟未完的学者式传奇。",
    author: "帕特里克·罗夫斯（1973–），美国作家，本系列仅出两部，第三部久未面世。"
  },
  "lies-of-locke": {
    story: "绅士盗贼洛克·拉莫拉以精密骗局在 camorr 共和国骗取贵族，却卷入更高棋局。",
    synopsis: "洛克与伙计扮装行骗，遭神秘刺客追杀，在《 locke lamora 》里以智取胜。",
    background: "林奇以海军式硬派骗局写奇幻 heist，文风狡黠诙谐。",
    author: "斯科特·林奇（1978–），美国作家，绅士盗贼系列为其代表作。"
  },
  "poppy-war": {
    story: "贫寒军校女生芮恩在 fictional 的尼卡崛起，却亲历一场影射中日战争的残酷浩劫。",
    synopsis: "芮恩获神力、入名校，却在联邦与赫谢尔的战争中沦为武器，灾祸层层升级。",
    background: "郭晶借中国近现代史与二战创伤写奇幻战争史诗，控诉暴力与殖民。",
    author: "R.F. 郭晶（1996–），华裔美国作家，本书为其出道即获奖的处女作。"
  },
  "broken-empire": {
    story: "废墟大陆上，弑亲的少年约恩称王，以冷酷算计与低魔异能在破碎帝国里攀爬。",
    synopsis: "《荆棘王子》写约恩为复仇夺权，于黑暗幽默中剖析权力与虚无。",
    background: "劳伦斯以第一人称反英雄写「暗黑童话」，节奏快、调性冷。",
    author: "马克·劳伦斯（1966–），英国作家，破碎帝国三部曲为其成名作。"
  },
  "mistborn": {
    story: "灰烬终日的铁境帝国下，能吞金属获力的「 Mistborn 」密谋推翻神王暴政。",
    synopsis: "薇霓与劫匪集团以金属魔法刺杀君临者，逐步揭开神王与「升华」的真相。",
    background: "桑德森以「 hardness magic」体系写阶级革命，金属燃烧是清晰规则。",
    author: "布兰登·桑德森（1975–），迷雾之子为其早中期代表作，属 cosmere 宇宙。"
  },
  "his-dark-materials": {
    story: "平行世界里，人的灵魂以动物 daemon 显形，少女莱拉护送「真理仪」对抗收割儿童的组织。",
    synopsis: "莱拉穿越世界、北极与亡灵之境，在《黑暗物质》三部曲中质疑权威与命运。",
    background: "普尔曼以反教会、致敬《失乐园》的立场写青少年哲学奇幻。",
    author: "菲利普·普尔曼（1946–），英国作家，本书获多项大奖并引争议。"
  },
  "old-kingdom": {
    story: "旧王国以宪章魔法与亡灵法克制尸者，少女萨布里埃尔承袭亡灵之书守护边界。",
    synopsis: "萨布里埃尔穿越死亡之门、对抗克洛尔，在《 old kingdom 》里平衡生与死。",
    background: "尼克斯以澳洲背景写带哥特味的亡灵魔法，宪章与自由魔法对立。",
    author: "加思·尼克思（1963–），澳大利亚作家，旧王国系列为其代表作。"
  },
  "farseer": {
    story: "私生子 Fitz 为 buck 王室以「精技」与野兽血脉效忠，却屡被王国背弃。",
    synopsis: "《刺客正传》写 Fitz 从侍童到刺客的成长、忠诚与背叛，基调沉郁。",
    background: "霍布以第一人称内省写「低魔」宫廷奇幻，情感细腻而残酷。",
    author: "罗宾·霍布（1952–），美国作家， Fitz 与 fool 系列广受推崇。"
  },
  "jonathan-strange": {
    story: "拿破仑战争时期英格兰，两位绅士魔法师复兴沉睡的英国魔法，却彼此相争。",
    synopsis: "斯特兰奇与诺雷尔召仙灵、对抗无冕王，在《 jonathan strange 》里以脚注织史。",
    background: "克拉克以伪维多利亚学术体写魔法史，戏拟19世纪百科全书的考据腔。",
    author: "苏珊娜·克拉克（1959–），英国作家，本书潜心十余年写成，一鸣惊人。"
  },
  "night-circus": {
    story: "两座魔法马戏团以梦境帐篷对弈，两位学徒在禁忌之恋中撑起无声竞赛。",
    synopsis: "西拉与马可于《夜行马戏团》的黑白帐篷间较量才情，命运随演出交织。",
    background: "莫根斯特恩以氛围与意象取胜，叙事如旋转木马般非线性。",
    author: "艾琳·莫根斯特恩（1977–），美国作家，本书为其畅销出道作。"
  },
  "temeraire": {
    story: "拿破仑战争被改写：龙是可交流的作战物种，军官劳伦斯与龙 temeraire 并肩抗法。",
    synopsis: "《致命甲胄》系列写人龙羁绊与空战，借史实框架探讨奴隶与平权。",
    background: "诺维克以「龙+纳尔逊式海战」混搭，向奥斯特笔下战争史致敬。",
    author: "娜奥米·诺维克（1973–），美国作家，亦写《抽芽》《致命教育》。"
  },
  "inheritance": {
    story: "农家少年伊拉贡偶得龙蛋，孵化后成为最后的龙骑士，对抗暴君加尔巴托瑞克。",
    synopsis: "伊拉贡与蓝龙萨菲拉行走阿拉加西亚，集结反抗军，揭开身世与古老语言。",
    background: "帕欧拉尼十五岁动笔，以经典龙骑士母题写青少年成长史诗。",
    author: "克里斯托弗·鲍里尼（1983–），美国作家，少年成名的奇幻神童。"
  },
  "percy-jackson": {
    story: "现代少年珀西发现自己是海神之子，入读混血营，卷入奥林匹斯诸神的当代争端。",
    synopsis: "珀西寻闪电、闯冥界，在《波西·杰克逊》里以希腊神祇的私生子身份救世。",
    background: "赖奥登以希腊神话现代化写轻松校园冒险，向儿子听讲神话的初衷而生。",
    author: "里克·赖奥登（1964–），美国作家，本书开启多条神话混血系列。"
  },
  "bartimaeus": {
    story: "架空伦敦由魔法师阶层统治，精灵附身戒指供驱使，少年刺客与精灵联手反制。",
    synopsis: "纳撒尼尔与精灵巴蒂迈乌斯在《 bartimaeus 》里周旋于阴谋与反抗政府。",
    background: "斯特劳德以精灵第一人称毒舌旁白，讽刺权力与官僚魔法体制。",
    author: "乔纳森·斯特劳德（1959–），英国作家，巴蒂迈乌斯序列为其代表作。"
  },
  "dresden": {
    story: "芝加哥唯一登广告的巫师哈利·德累斯顿，接办超自然委托，卷入巫师、吸血鬼与天使的战争。",
    synopsis: "哈利从捉鬼小案逐步卷入白议会、冬庭与外者的危机，在《变》（Changes）之后成为冬之骑士。",
    background: "巴特勒以硬汉侦探小说混搭 urban fantasy，首创「巫师当私人侦探」的冷峻腔。",
    author: "吉姆·布彻（Jim Butcher，1971– ），美国作家，德累斯顿档案是其长销都市奇幻系列。"
  },
  "priory": {
    story: "分裂的东西大陆上，女术士与女战士跨越偏见结盟，对抗即将苏醒的火之龙与瘟疫。",
    synopsis: "《橙树圣所》以双女主写跨越恐惧的同盟，对抗古老恶龙与宗教仇恨。",
    background: "香农以多视角、强女性群像写反传统史诗，致敬又解构托尔金框架。",
    author: "萨曼莎·香农（1991–），英国作家，本作为其斩获盛誉的处女长篇。"
  },
  "fifth-season": {
    story: "裂隙频发的破碎地球，御术师以操控地质之力维持文明，却遭社会奴役与恐惧。",
    synopsis: "《第五季》写母亲寻女、末世灾变与御术师反抗，揭出世界循环的残酷真相。",
    background: "杰米辛以种族与压迫隐喻写硬科幻式奇幻，结构精巧多声部。",
    author: "N.K. 杰米辛（1972–），美国作家，本书史无前例连夺雨果奖三连冠。"
  },
  "golem-jinni": {
    story: "1899 年纽约，泥偶女与火精男挣脱束缚相遇，在移民都市里追寻自由与归属。",
    synopsis: "《魔像与精灵》写两尊造物跨越族裔与本性相恋，对抗各自古老宿命。",
    background: "韦克以犹太与阿拉伯民间造物母题，写移民、同化与孤独的寓言。",
    author: "海伦·韦克（1976–），美国作家，本书为其获奖出道长篇。"
  },
  "daevabad": {
    story: "伊斯兰精灵（djinn）王朝 daevabad 隐于人间，半血少女娜哈拉入城卷入千年族仇。",
    synopsis: "《 daevabad 》三部曲写娜哈拉在闪族精灵政治、奴隶与神战中寻找自己与家园。",
    background: "查克拉博蒂以中东神话与伊斯兰文化为骨，写权力、阶级与殖民伤痕。",
    author: "S.A. 查克拉博蒂，美国作家，本系列为其代表作，融历史与奇幻。"
  },
  "uprooted": {
    story: "山谷村落每十年献一少女给塔楼巫师，阿努娅意外被选，习魔法对抗腐化森林。",
    synopsis: "《抽芽》写阿努娅与巫师携手净化「木腐」，在斯拉夫森林神话里成长觉醒。",
    background: "诺维克取材波兰民间「Baba Yaga」式母题，写女性友谊与土地之灵。",
    author: "娜奥米·诺维克（1973–），美国作家，本书获轨迹奖，亦写《致命教育》。"
  },
  "spinning-silver": {
    story: "《 rumplestiltskin 》的暗黑重述：犹太放贷女与妖精女王以「银」交易扭转命途。",
    synopsis: "三女性视角交织，写债务、冬之妖精与母女，在《 spinning silver 》里互救。",
    background: "诺维克以童话新编写反犹历史创伤与女性自主，结构多线。",
    author: "娜奥米·诺维克（1973–），同作者另篇，与《抽芽》共享斯拉夫底色。"
  },
  "bear-nightingale": {
    story: "俄国寒冬村落里，少女瓦西里可看见家神，在基督化进程中守护林妖与家族。",
    synopsis: "《熊与夜莺》写瓦西里对抗伪修士，平衡异教精灵与新兴信仰的冲突。",
    background: "阿登以俄罗斯民间故事与严冬意象，写信仰更替中的童年勇气。",
    author: "凯瑟琳·阿登（1970–），美国作家，冬夜三部曲为其代表作。"
  },
  "children-blood-bone": {
    story: "奥里沙王国里，红眼裔遭屠戮，少女赞雅以死灵之力掀起反抗暴政的起义。",
    synopsis: "《血与骨的孩子》写赞雅寻回魔法、联合同胞，对抗抹除其族的君主。",
    background: "阿德耶米以约鲁巴神话与黑奴记忆为骨，写种族压迫与青年抗争。",
    author: "托米·阿德耶米（1993–），尼日利亚裔美国作家，本书为其获奖处女作。"
  },
  "akata-witch": {
    story: "非裔美国少女桑妮在尼日利亚发现自己是「潜质者」，进入以精神为货币的法术界。",
    synopsis: "《 akata witch 》写桑妮与伙伴追捕食魂怪，在伊博文化魔法里寻根成长。",
    background: "奥考拉福以尼日利亚伊博文化写「非洲奇幻」，破欧美中心设定。",
    author: "恩内迪·奥考拉福（1974–），美国作家，本书开启「 naked sun » 系列。"
  },
  "binti": {
    story: "辛达部落的 math 天才宾蒂离乡入星际学院，以调和之学斡旋人类与神秘族战争。",
    synopsis: "《 binti 》写宾蒂在飞船遇袭后，以族人刺青与数学天赋化解跨物种死结。",
    background: "奥考拉福以非洲未来主义写离散、身份与和平，篇幅精炼。",
    author: "恩内迪·奥考拉福（1974–），同作者，本书获雨果与星云中篇奖。"
  },
  "city-we-became": {
    story: "纽约化为具象人格的五大 borough 捍卫者，联手抵御吞噬城市的陌生敌意。",
    synopsis: "《我们成为的城市》写城市之灵对抗「敌人」，以都市神话写种族与归属。",
    background: "杰米辛以「城市即人物」的构想，致敬纽约的多元与创伤。",
    author: "N.K. 杰米辛（1972–），同作者，大都会之魂系列第一部。"
  },
  "gideon": {
    story: "在由死灵术主宰的九座冢星上，女剑客吉迪恩与女巫继承人哈罗在锁墓修会中互斗互助，一同破解尸窟学院里的谜题。",
    synopsis: "《第九宫的吉迪恩》写吉迪恩与哈罗在尸窟般的学院里既竞争又依存，逐步揭开家族血脉与死灵术的真相。",
    background: "缪尔糅合拉丁术语、同志情谊与黑色幽默，把死灵术写成一套带礼仪与家系的政治制度，风格被称为「太空哥特」。",
    author: "塔姆辛·缪尔，新西兰作家，「锁墓人」系列（The Locked Tomb）为其代表作。"
  },
  "scholomance": {
    story: "与世隔绝的死亡魔法学院里，学生须熬过毕业前被怪物吞噬的命运，优等生策划破局。",
    synopsis: "《致命教育》写孤僻天才艾尔与「恶毒」同窗，在毕业危机里扭转学院逻辑。",
    background: "诺维克反写霍格沃茨，以「学校即杀机」写阶层、合作与成长。",
    author: "娜奥米·诺维克（1973–），同作者，scholomance 三部曲为其新作。"
  },
  "books-of-babel": {
    story: "雄伟的巴别塔分层的极权城市里，新郎塞内林寻失踪妻子，逐层攀爬揭穿体制。",
    synopsis: "《巴别书》写塞内林由导游升至塔顶，在荒诞官僚与奇观中追问自由。",
    background: "班克罗夫特以蒸汽朋克式巨塔写官僚主义寓言，文风诙谐哀婉。",
    author: "约西亚·班克罗夫特，美国作家，巴别之书系列为其代表作。"
  },
  "starless-sea": {
    story: " beneath 世界之下藏着由故事构成的古老海域，读者坠入后以书与门寻找归途。",
    synopsis: "《无星之海》写青年扎卡里穿行地下图书馆与赌场，拼合失落的叙事之海。",
    background: "莫根斯特恩以「故事即空间」写元叙事，迷宫般非线性。",
    author: "艾琳·莫根斯特恩（1977–），同作者，本书为其第二部长篇。"
  },
  "zelda": {
    story: "海拉鲁王国在灾厄盖侬的轮回中反复倾覆，勇者林克与公主塞尔达守护三角之力。",
    synopsis: "从《时之笛》到《旷野之息》，林克苏醒、解封四神兽，阻止盖侬吞噬王国。",
    background: "任天堂以「探索即玩法」重构开放世界，三角与时空是核心母题。",
    author: "任天堂（宫本茂等）出品，塞尔达是动作冒险游戏的里程碑系列。"
  },
  "pokemon": {
    story: "宝可梦世界中，人与可收服的奇妙生物结伴旅行，以对战与图鉴追求「全都收服」。",
    synopsis: "小智等训练家周游诸地区，收服、培育宝可梦，挑战道馆与联盟冠军。",
    background: "田尻智以昆虫收集童年为灵感，养成+对战模式风靡全球。",
    author: "任天堂/Game Freak（田尻智等）出品，宝可梦是全球最大 IP 之一。"
  },
  "dragon-quest": {
    story: "洛特后裔的勇者持传说之剑，于剑与魔法的中世纪异界击败复活的大魔王。",
    synopsis: "系列以「勇者斗恶龙」母题循环，玩家组队、练级、救公主、封印魔王。",
    background: "堀井雄二以欧美 RPG 为蓝本本土化，鸟山明人设确立日式 JRPG 范式。",
    author: "Square Enix（原 Enix）/ 堀井雄二等出品，里程碑式日式角色扮演。"
  },
  "monster-hunter": {
    story: "猎人公会于远古生态的边境，以巨械讨伐飞龙与古龙，采集与锻造循环不息。",
    synopsis: "玩家接讨伐任务，追踪、 traps、断尾剥取，对抗 Ecology 顶端的怪物。",
    background: "卡普空以「共斗」为核心，强调生态拟真与武器手感而非剧情。",
    author: "卡普空（Capcom）出品，魔物猎人是共斗动作游戏标杆。"
  },
  "hollow-knight": {
    story: "被瘟疫侵蚀的圣巢（Hallownest）地下国，小骑士苏醒探寻虫族文明的崩解之谜。",
    synopsis: "玩家操控沉默骑士穿越废墟，战 Dreamers、揭 White Lady，对抗 infection 扩散。",
    background: "Team Cherry 以手绘哥特与留白叙事，写凄美衰亡的虫之王国。",
    author: "Team Cherry（三人独立工作室）出品，空洞骑士以美术与难度著称。"
  },
  "bloodborne": {
    story: "哥特古城亚楠在血疗与古神降临中腐化，猎人于噩梦循环猎杀 beasts 与上位者。",
    synopsis: "玩家作为猎人追寻治愈，逐步揭穿血族、上位外神与梦的真相。",
    background: "FromSoftware 以洛夫克拉夫特式恐怖重写魂类，强调血与疯狂。",
    author: "FromSoftware（宫崎英高）开发，血源诅咒为其恐怖向代表作。"
  },
  "sekiro": {
    story: "战国日本，断臂忍者苇名一心护卫皇子，以义手与忍杀在乱世求生。",
    synopsis: "玩家操控狼，于《只狼》中闯关、复活、对抗苇名弦一郎与剑圣。",
    background: "FromSoftware 以日本战国与能剧美学写「对剑」的精准格挡。",
    author: "FromSoftware（宫崎英高）开发，只狼获年度游戏奖。"
  },
  "fable": {
    story: "阿尔比恩田园世界里，玩家的善恶抉择实时改变外貌与声望，童话即选择。",
    synopsis: "主角从村庄英雄到可能的dark lord，以道德二元写轻喜剧式冒险。",
    background: "Lionhead 以「行为改变外貌」的 moral 系统，写童话风开放冒险。",
    author: "Lionhead Studios（彼得·莫利纽克斯）出品，神鬼寓言系列。"
  },
  "everquest": {
    story: "诺瑞斯大陆的多个种族与阵营，于持久在线世界里探险、团本与争雄。",
    synopsis: "玩家创建角色，在《无尽的任务》里升级、攻克地下城与传奇龙。",
    background: "Verant 以图形化 MMORPG 开创持久世界范式，影响后世网游。",
    author: "索尼在线娱乐 / Verant 出品，无尽的任务为早期 MMORPG 经典。"
  },
  "runescape": {
    story: "格瑞恩诺大陆以搞怪中古风承载海量技能与任务，玩家自由定义冒险。",
    synopsis: "玩家在《江湖》里打工、打怪、解谜，剧情轻快且可随时切换目标。",
    background: "Jagex 以浏览器低门槛 MMORPG 起家，靠社区与彩蛋长青。",
    author: "Jagex 出品，江湖（Runescape）是其长寿免费网游。"
  },
  "planescape": {
    story: "多层位面的 sigil 城由无序之主掌理，凡人、神祇与派系在门户间辩论存在。",
    synopsis: "《异度风景》以哲学与荒诞写位面旅行，派系争论「死后何往」是核心。",
    background: "TSR 以「多元宇宙+哲学」重写 DND 设定，文案充满存在主义诘问。",
    author: "TSR（后威世智）出品，异度风景由设计者群体构建。"
  },
  "baldurs-gate": {
    story: "被遗忘的国度里，凡人于巴尔之子预言中挣扎，博德之门城暗藏阴谋与神战。",
    synopsis: "玩家从被追杀的流浪者成长为英雄，在《博德之门3》里以抉择改写众生命运。",
    background: "BioWare 与拉瑞安以 DND 5e 规则重塑 CRPG，强调队伍与叙事分支。",
    author: "BioWare（初代）/ 拉瑞安工作室（三代）出品，基于龙与地下城。"
  },
  "okami": {
    story: "日本神话的白野威（天照大神化身狼）以笔刷复原被黑暗吞噬的天下。",
    synopsis: "玩家操控神明之狼以「笔业」重绘日月山水，击败八岐大蛇等邪神。",
    background: "Clover 以水墨浮世绘美学与神道母题，写对 Wii 操控的诗意致敬。",
    author: "Clover Studio / 卡普空出品，大神以其画风独树一帜。"
  },
  "xenoblade": {
    story: "两尊巨神遗骸化成的世界，人类在机械生命威胁下追问「彼岸」与存在意义。",
    synopsis: "《异度之刃》写修尔克等少年持神剑反抗命运，揭开世界层叠的真相。",
    background: "高桥哲哉以「哲学式 JRPG」写存在、自由与轮回，规模宏大。",
    author: "Monolith Soft（高桥哲哉）出品，异度神剑为其叙事旗舰。"
  },
  "spirited-away": {
    story: "少女千寻误入神灵澡堂，为救变猪的父母在汤屋打工，于异界习得勇气。",
    synopsis: "千寻在《千与千寻》里以劳动与真诚赢得白龙与汤婆婆的认可，终归人间。",
    background: "宫崎骏以日本澡堂民俗与消费社会隐喻，写孩童的成长礼。",
    author: "宫崎骏（1941–），吉卜力工作室核心，本片获奥斯卡最佳动画长片。"
  },
  "mononoke": {
    story: "远古日本，王女小桑被山犬养大，与艾伯西的炼铁军对峙，守护森林神灵。",
    synopsis: "《幽灵公主》写人与自然、文明与荒野的不可调和之战，结局哀而不绝。",
    background: "宫崎骏以虾夷与 ecological 冲突写成人向史诗，格局雄浑。",
    author: "宫崎骏（1941–），吉卜力出品，幽灵公主是其生态母题的巅峰。"
  },
  "nausicaa": {
    story: "腐海毒林覆盖的末世，风之谷公主娜乌西卡以理解与牺牲调停人与虫族。",
    synopsis: "《风之谷》写娜乌西卡穿行毒海、化解王族战争，揭示腐海实为净化之力。",
    background: "宫崎骏以核恐惧与生态寓言写反战长篇漫画及其动画化。",
    author: "宫崎骏（1941–），风之谷为其原作漫画与改编动画。"
  },
  "laputa": {
    story: "矿工少年巴鲁与带飞行石少女希达，追寻传说中浮空的拉普达天空之城。",
    synopsis: "《天空之城》写二人躲避军队与海盗，最终让拉普达回归天空沉睡。",
    background: "宫崎骏以工业革命与飞行梦写对技术的忧思与童真冒险。",
    author: "宫崎骏（1941–），吉卜力出品，天空之城是其早期代表作。"
  },
  "fullmetal": {
    story: "军部炼金术师兄弟为复原身体踏入「人体炼成」禁区，揭出国家与贤者之石的阴谋。",
    synopsis: "《钢之炼金术师》写爱德与阿尔在军部任务中追查真理，对抗人造人与父亲。",
    background: "荒川弘以等价交换为核，写战争创伤与反战，叙事严密完整。",
    author: "荒川弘（1973–），日本漫画家，钢炼为其最著名长篇漫画。"
  },
  "sword-art-online": {
    story: "玩家被困死亡网游，唯有通关或现实中死亡方可脱出，桐人于层层虚拟战场求生。",
    synopsis: "《刀剑神域》写桐人与亚丝娜在第一、二层的 boss 战中结盟，对抗游戏掌控者。",
    background: "川原砾以「死亡游戏」网游轻小说起家，开创 isekai 式 VR 热潮。",
    author: "川原砾（1974–），日本轻小说作家，刀剑神域为其代表作。"
  },
  "rezero": {
    story: "少年昴被拽入异世界，获得「死亡回归」之力，在反复惨死中改写众人的结局。",
    synopsis: "《 Re: 从零开始》写昴以一次次轮回保护爱蜜莉雅，于心理折磨中成长。",
    background: "長月达平以「if 线+残酷轮回」写心理向 isekai，反爽文套路。",
    author: "長月達平，日本轻小说作家，从零开始的异世界生活为其代表作。"
  },
  "slime": {
    story: "上班族转生为史莱姆，以捕食与智慧建立妖怪国度，调和种族共存。",
    synopsis: "《关于我转生变成史莱姆》写利姆鲁招揽各族、建魔国联邦，对抗人类偏见。",
    background: "伏濑以「轻松转生+建国」写异世界经营流，受众广泛。",
    author: "伏濑，日本轻小说作家，转生史莱姆为其代表作。"
  },
  "made-in-abyss": {
    story: "巨大竖洞深渊之底藏着失落文明，孤女莉可带机器人少年潜行探险。",
    synopsis: "《来自深渊》写莉可与雷格逐层下潜，直面诅咒、怪异与成人世界的残酷。",
    background: "つくしあきひと以可爱画风反衬黑暗探险，写「探窟即献祭」。",
    author: "つくしあきひと，日本漫画家，来自深渊以其反差著称。"
  },
  "ancient-magus": {
    story: "无依少女羽鸟智世被非人魔法师艾利亚斯收为学徒兼新娘，于异界学艺成长。",
    synopsis: "《魔法使的新娘》写智世在艾利亚斯身边习得魔法与自我，化解诅咒与羁绊。",
    background: "ヤマザキコレ以英伦田园与凯尔特神话写「师徒+奇术」的治愈向奇幻。",
    author: "ヤマザキコレ，日本漫画家，魔法使的新娘为其代表作。"
  },
  "berserk": {
    story: "剑士格斯于乱世挥剑求生，挚友背叛后踏上猎杀「使徒」的复仇之路。",
    synopsis: "《剑风传奇》写格斯背负烙印，在蚀之战后对抗神之手与命运之网。",
    background: "三浦建太郎以黑暗奇幻与铜版画风写宿命、友谊与暴力的史诗。",
    author: "三浦建太郎（1966–2021），日本漫画家，剑风传奇为其毕生巨作。"
  },
  "record-lodoss": {
    story: "罗德斯岛上是剑与魔法的典型战场，矮人、法师与骑士联手抵御黑骑士复活。",
    synopsis: "《罗德斯岛战记》写帕恩等冒险者对抗暗黑皇帝，守护岛国免于统一暴政。",
    background: "水野良以 TRPG 战役记录为蓝本，确立日式「标准奇幻」范式。",
    author: "水野良（1963–），日本作家，罗德斯岛战记为早期日式奇幻标杆。"
  },
  "hellboy": {
    story: "被纳粹仪式召来的恶魔之子地狱男，被盟军收养成人，以石手对抗邪神。",
    synopsis: "《地狱男》写地狱男在 Bureau 探案，对抗唤醒末日的古老邪恶与身世宿命。",
    background: "米格诺拉以 pulpy 恐怖与宗教神秘写反英雄，画风硬朗。",
    author: "迈克·米格诺拉（1960–），美国漫画家，地狱男为其代表作。"
  },
  "sandman": {
    story: "梦境之王 Morpheus 被囚世纪的他重掌领地，以《睡魔》短篇串联神话、文学与死亡。",
    synopsis: "梦在众卷里寻回法器、会晤亲属与凡人，写故事本身作为宇宙之力的地位。",
    background: "盖曼以 DC 的成人向 Vertigo 线，写文学化、跨文化的神话总集。",
    author: "尼尔·盖曼（1960–），英国作家，睡魔是其漫画文学化的里程碑。"
  },
  "fables": {
    story: "童话角色因故逃入纽约「飞地」，以黑帮式政治经营流亡社区与旧敌。",
    synopsis: "《寓言》写大坏狼探长、白雪与萝丝等在人间续写童话后的权谋与战争。",
    background: "威灵厄姆以「童话人物现代流亡」写黑色成人寓言，解构童年。",
    author: "比尔·威灵厄姆，美国漫画编剧，寓言为其代表作。"
  },
  "bone": {
    story: "三个表亲滑稽流落神秘山谷，被古老预言与鼠族拖入正邪大战。",
    synopsis: "《骨头》写芬、福与巴蒂在山谷寻归途，对抗 rat 大军与预言的黑暗。",
    background: "史密斯以卡尔·巴克斯式卡通画风写全年龄冒险史诗，反差温情。",
    author: "杰夫·史密斯（1960–），美国漫画家，骨头为其独立漫画巨作。"
  }
};

