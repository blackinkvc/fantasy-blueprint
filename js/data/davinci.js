// ============================================================
// 奇幻古卷铭图映射
// 全站图片资源统一放在 assets/images/davinci/，按分支 + 主题分配
// 世界观页按主导分支或主题覆盖；科技页按领域或主题覆盖
// 铭图以"羊皮纸墨线"风格的手绘 SVG 呈现，零外部依赖
// ============================================================
const DAVINCI_IMAGES = {
  // 6 大分支默认图 + 奇点
  branch: {
    F: "magic.svg",        // 魔法
    B: "beast.svg",        // 生灵
    A: "alchemy.svg",      // 炼金
    R: "realm.svg",        // 界域
    W: "artifact.svg",     // 造物
    L: "lore.svg",         // 秘术
    X: "singularity.svg"   // 奇点
  },

  // 世界观主题覆盖（标志性作品优先配图）
  work: {
    "lord-of-rings": "artifact.svg",
    "harry-potter": "magic.svg",
    "got": "beast.svg",
    "dnd": "magic.svg",
    "warcraft": "beast.svg",
    "elder-scrolls": "lore.svg",
    "dark-souls": "lore.svg",
    "warhammer": "alchemy.svg",
    "witcher": "alchemy.svg",
    "narnia": "realm.svg",
    "discworld": "realm.svg",
    "lord-of-the-mysteries": "lore.svg",
    "earthsea": "magic.svg",
    "final-fantasy": "artifact.svg",
    "dragon-age": "alchemy.svg",
    "mythology": "singularity.svg"
  },

  // 科技条目主题覆盖（可选；缺省回退到领域分支图）
  tech: {}
};

const DaVinciImg = {
  // 由作品 treeLit 推导主导分支（首字母计数取最大）
  branchForWork(workId) {
    const w = WORKS.find(x => x.id === workId);
    if (!w || !w.treeLit || !w.treeLit.length) return "X";
    const cnt = {};
    w.treeLit.forEach(k => {
      const b = k.charAt(0);
      if ("FBARWL".includes(b)) cnt[b] = (cnt[b] || 0) + 1;
    });
    let best = "X", bestN = -1;
    "FBARWL".split("").forEach(b => { if ((cnt[b] || 0) > bestN) { bestN = cnt[b] || 0; best = b; } });
    return bestN > 0 ? best : "X";
  },

  // 由科技领域映射分支
  branchForTech(tech) {
    return ({ magic: "F", beast: "B", alchemy: "A", realm: "R", artifact: "W", lore: "L" })[tech.domain] || "X";
  },

  // 世界观页图片路径
  forWork(workId) {
    const file = DAVINCI_IMAGES.work[workId]
      || DAVINCI_IMAGES.branch[this.branchForWork(workId)]
      || "singularity.svg";
    return "assets/images/davinci/" + file;
  },

  // 科技页图片路径
  forTech(tech) {
    const file = DAVINCI_IMAGES.tech[tech.id]
      || DAVINCI_IMAGES.branch[this.branchForTech(tech)]
      || "singularity.svg";
    return "assets/images/davinci/" + file;
  }
};
