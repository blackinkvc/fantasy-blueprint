// ============================================================
// 系列分册数据
// 键为作品 id（与 WORKS 对应），值为该系列的全部单册。
// 每册：id / cn（中文译名，仅在已查证时填写）/ en（原名，必有）/ year / story / synopsis
// 系列构成区块据此逐册列出，每册可点进 #/book/<id> 查看。
// 中文译名一律以正式出版译本为准，未查证者留空，界面回退显示原名。
// ============================================================

const SERIES_BOOKS = {
  dresden: [
    { id: "dresden-01", cn: "血魔法之罪", en: "Storm Front", year: 2000,
      story: "哈利受雇调查一桩双尸命案，线索指向一名以风暴为掩护、贩卖蝎尾毒品的黑巫师。",
      synopsis: "系列首作。哈利在警方与黑帮之间周旋，最终与幕后黑巫师正面交锋，也第一次引来白议会的注视。" },
    { id: "dresden-02", cn: "愚人之月", en: "Fool Moon", year: 2001,
      story: "每逢满月便有命案，尸体带野兽撕咬痕迹；四系狼人接连登场，联邦调查局的阿尔法狼群也在其中。",
      synopsis: "本书确立了狼人的四系设定：遗传的真狼人、以皮囊变身者、被诅咒者，以及靠器物强行变身者。" },
    { id: "dresden-03", cn: "凶险陵墓", en: "Grave Peril", year: 2001,
      story: "芝加哥幽灵集体暴动，哈利与十字骑士 Michael Carpenter 并肩，对抗以噩梦为食的夜之骑士团。",
      synopsis: "十字圣剑与十字骑士首次登场。哈利在此与吸血鬼赤庭结下死仇，恋人 Susan 被半转化为赤庭血裔。" },
    { id: "dresden-04", cn: "夏夜骑士", en: "Summer Knight", year: 2002,
      story: "芝加哥下起蟾蜍雨，仙灵夏庭雇佣哈利调查夏之骑士之死，冬庭女王 Mab 亦向他开出价码。",
      synopsis: "仙灵双庭与永不对的设定在此定型。哈利被夹在夏冬两庭之间，被迫以凡人之身介入仙灵的平衡政治。" },
    { id: "dresden-05", cn: "", en: "Death Masks", year: 2003,
      story: "黑币团登场，首领 Nicodemus 争夺都灵裹尸布；哈利与前女友 Susan 重逢，也接下十字骑士的一役。",
      synopsis: "三十枚犹大银币与堕落天使的设定首次展开，确立了系列最重要的宿敌之一。" },
    { id: "dresden-06", cn: "鲜血祭仪", en: "Blood Rites", year: 2004,
      story: "一名色情片导演接连遭殃，委托背后牵扯出白庭吸血鬼的 Raith 家族内部争斗。",
      synopsis: "白庭与「真爱灼身」的弱点在此确立；哈利发现白庭的 Thomas Raith 是自己同母异父的弟弟。" },
    { id: "dresden-07", cn: "死亡节拍", en: "Dead Beat", year: 2005,
      story: "多名死灵术士争夺一册《亡灵之书》，为阻止他们在万圣夜登神，哈利骑上一头复活的恐龙。",
      synopsis: "死灵术与七律中「不得涉足生死边界」的戒律正面对撞，卫兵与黑杖的角色也随之加重。" },
    { id: "dresden-08", cn: "", en: "Proven Guilty", year: 2006,
      story: "仙灵造物接连袭击凡人，哈利追查源头时救下好友的女儿 Molly Carpenter。",
      synopsis: "Molly 成为哈利的学徒，幻术与精神魔法的训练线由此展开。" },
    { id: "dresden-09", cn: "", en: "White Night", year: 2007,
      story: "白庭吸血鬼接连遇害，哈利被卷入白庭内部的权力更替，Lara Raith 借势崛起。",
      synopsis: "白庭十二家族的政治格局明朗化，哈利与白庭的关系也从敌对转为微妙的结盟。" },
    { id: "dresden-10", cn: "", en: "Small Favor", year: 2008,
      story: "冬庭女王 Mab 兑现「三次人情」中的第二次，命哈利去办一件事，黑币团同时绑架了 Marcone。",
      synopsis: "黑币团与冬庭的线交织，哈利的教母莉南西迪在此显出被外者感染的征兆。" },
    { id: "dresden-11", cn: "", en: "Turn Coat", year: 2009,
      story: "卫兵队长 Morgan 被诬陷谋杀元老，逃到哈利处求助；哈利为洗清其罪，登上密歇根湖中的恶魔礁。",
      synopsis: "恶魔礁作为超自然监狱的真相揭开，哈利被岛选中，成为它的狱长。" },
    { id: "dresden-12", cn: "", en: "Changes", year: 2010,
      story: "赤庭绑架了哈利从未谋面的女儿 Maggie，他为救人向各方求援，最终以血裔诅咒灭尽赤庭。",
      synopsis: "系列的分水岭。哈利在结尾与 Mab 立约接下冬之骑士披风，人生彻底转向。" },
    { id: "dresden-13", cn: "", en: "Ghost Story", year: 2011,
      story: "哈利死后以灵魂状态回到芝加哥，必须在时限内找出是谁杀了他，并护住身边的人。",
      synopsis: "全书以幽灵视角展开，交代了《Changes》之后各人的处境，也铺出冬之骑士的后续。" },
    { id: "dresden-14", cn: "", en: "Cold Days", year: 2012,
      story: "哈利正式就任冬之骑士，随即被卷入恶魔礁的越狱危机，以及外界之门外的入侵。",
      synopsis: "外者与外界之门的设定全面展开，冬庭的职责与仙灵双庭的平衡被推向台前。" },
    { id: "dresden-15", cn: "", en: "Skin Game", year: 2014,
      story: "Mab 命哈利协助宿敌 Nicodemus 闯入冥府宝库行窃，他必须一边配合一边设法反制。",
      synopsis: "哈利与黑币团的最终对决之一，十字骑士 Sanya 与 Butters 亦参与其中。" },
    { id: "dresden-16", cn: "", en: "Peace Talks", year: 2020,
      story: "各派超自然势力齐聚芝加哥和谈，哈利以冬之骑士身分护卫会场，弟弟 Thomas 却行刺了要人。",
      synopsis: "《Battle Ground》的上半部，把此前所有阵营的恩怨集中到同一座城市。" },
    { id: "dresden-17", cn: "", en: "Battle Ground", year: 2020,
      story: "泰坦 Ethniu 率巨人与外者大军进攻芝加哥，哈利与诸方势力在废墟中迎来决战。",
      synopsis: "系列至今规模最大的一战，芝加哥的城市面貌与哈利的处境都在此后彻底改变。" }
  ]
};