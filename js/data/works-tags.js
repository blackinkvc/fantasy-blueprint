// ============================================================
// 世界观分类标签体系
// TAG_TAXONOMY 定义分类维度与可选标签；WORKS_TAGS 为各世界观的标签数组。
// 标签 key 必须落在 TAG_TAXONOMY 内（脚本加载时已做交叉校验）。
// 分类页（classify.js）实时从本文件 + WORKS + WORKS_META 计算分布与筛选。
// ============================================================
const TAG_TAXONOMY = {
  background: {
    label: "背景设定",
    tags: {
      "bg-earth": "地球背景",
      "bg-other": "异世界/架空",
      "bg-multi": "多世界/宇宙"
    }
  },
  era: {
    label: "时代",
    tags: {
      "era-ancient": "古代",
      "era-medieval": "中世纪",
      "era-early": "近代(大航海~近代)",
      "era-modern": "现代/当代",
      "era-future": "未来",
      "era-mythic": "神话时代"
    }
  },
  myth: {
    label: "神话借用度",
    tags: {
      "myth-proto": "神话原型(本身即神话)",
      "myth-heavy": "重度借用",
      "myth-mid": "中度借用",
      "myth-low": "轻度/原创"
    }
  },
  source: {
    label: "来源/媒介",
    tags: {
      "src-myth": "神话/民间",
      "src-lit": "文学",
      "src-game": "游戏",
      "src-anime": "动漫",
      "src-comic": "漫画"
    }
  },
  region: {
    label: "文化渊源",
    tags: {
      "rg-europe": "欧洲",
      "rg-eastasia": "东亚",
      "rg-mideast": "中东",
      "rg-sasia": "南亚",
      "rg-africa": "非洲",
      "rg-americas": "美洲",
      "rg-oceania": "大洋洲",
      "rg-cross": "跨文化/全球"
    }
  },
  subgenre: {
    label: "子类型",
    tags: {
      "sg-epic": "史诗奇幻",
      "sg-sws": "剑与魔法",
      "sg-urban": "都市奇幻",
      "sg-dark": "黑暗奇幻",
      "sg-fairytale": "童话/寓言",
      "sg-scifan": "科幻奇幻",
      "sg-isekai": "异界转生",
      "sg-low": "低魔",
      "sg-high": "高魔"
    }
  },
  tone: {
    label: "基调",
    tags: {
      "tn-grim": "肃杀黑暗",
      "tn-cozy": "轻松温馨",
      "tn-whimsy": "诙谐戏谑",
      "tn-epic": "恢弘悲壮"
    }
  }
};

const WORKS_TAGS = {
  "mythology": ["bg-earth","era-mythic","myth-proto","src-myth","rg-cross"],
  "lord-of-rings": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-epic","sg-high","tn-epic"],
  "harry-potter": ["bg-earth","era-modern","myth-mid","src-lit","rg-europe","sg-epic","sg-high"],
  "got": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-epic","sg-low","tn-grim"],
  "dnd": ["bg-other","era-medieval","myth-mid","src-game","rg-cross","sg-epic","sg-high"],
  "warcraft": ["bg-other","era-medieval","myth-mid","src-game","rg-cross","sg-epic","sg-high"],
  "elder-scrolls": ["bg-other","era-medieval","myth-mid","src-game","rg-cross","sg-epic","sg-high"],
  "dark-souls": ["bg-other","era-medieval","myth-mid","src-game","rg-cross","sg-dark","sg-high","tn-grim"],
  "warhammer": ["bg-multi","era-medieval","era-future","myth-mid","src-game","rg-cross","sg-epic","tn-grim"],
  "witcher": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-epic","tn-grim"],
  "narnia": ["bg-multi","era-medieval","myth-mid","src-lit","rg-europe","sg-fairytale","sg-epic"],
  "discworld": ["bg-other","era-medieval","myth-low","src-lit","rg-europe","sg-epic","tn-whimsy"],
  "lord-of-the-mysteries": ["bg-earth","era-early","myth-heavy","src-lit","rg-cross","sg-scifan","sg-urban","tn-grim"],
  "earthsea": ["bg-other","era-medieval","myth-low","src-lit","rg-cross","sg-epic","sg-low"],
  "final-fantasy": ["bg-other","era-future","myth-mid","src-game","rg-cross","sg-scifan","sg-epic"],
  "dragon-age": ["bg-other","era-medieval","myth-mid","src-game","rg-cross","sg-epic","sg-low"],
  "greek-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-europe","sg-epic"],
  "norse-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-europe","sg-epic"],
  "egypt-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-africa","sg-epic"],
  "celtic-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-europe","sg-epic"],
  "sumerian-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-mideast","sg-epic"],
  "hindu-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-sasia","sg-epic"],
  "chinese-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-eastasia","sg-epic"],
  "japanese-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-eastasia","sg-epic"],
  "slavic-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-europe","sg-epic"],
  "aztec-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-americas","sg-epic"],
  "arthurian": ["bg-earth","era-medieval","myth-mid","src-lit","rg-europe","sg-epic"],
  "grimm": ["bg-earth","era-medieval","myth-proto","src-myth","rg-europe","sg-fairytale"],
  "arabian-nights": ["bg-earth","era-medieval","myth-proto","src-myth","rg-mideast","sg-fairytale"],
  "lovecraft": ["bg-earth","era-modern","myth-low","src-lit","rg-americas","sg-dark","tn-grim"],
  "polynesian-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-oceania","sg-epic"],
  "persian-myth": ["bg-earth","era-ancient","myth-proto","src-myth","rg-mideast","sg-epic"],
  "melnibone": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-sws","sg-dark","tn-grim"],
  "conan": ["bg-other","era-ancient","myth-mid","src-lit","rg-cross","sg-sws","tn-grim"],
  "fafhrd": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-sws","tn-whimsy"],
  "amber": ["bg-multi","era-modern","myth-mid","src-lit","rg-cross","sg-epic"],
  "prydain": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-epic","sg-fairytale"],
  "xanth": ["bg-other","era-medieval","myth-low","src-lit","rg-americas","sg-epic","tn-whimsy"],
  "dragonlance": ["bg-other","era-medieval","myth-mid","src-lit","rg-cross","sg-epic","sg-high"],
  "shannara": ["bg-earth","era-future","myth-mid","src-lit","rg-americas","sg-epic"],
  "covenant": ["bg-other","era-medieval","myth-mid","src-lit","rg-americas","sg-epic","sg-dark","tn-grim"],
  "lyonesse": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-epic","tn-epic"],
  "last-unicorn": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-fairytale","tn-whimsy"],
  "neverending": ["bg-multi","era-modern","myth-mid","src-lit","rg-europe","sg-fairytale","tn-whimsy"],
  "oz": ["bg-other","era-modern","myth-low","src-lit","rg-americas","sg-fairytale","tn-cozy"],
  "dying-earth": ["bg-other","era-future","myth-low","src-lit","rg-americas","sg-epic","sg-scifan"],
  "viriconium": ["bg-other","era-future","myth-low","src-lit","rg-europe","sg-dark","tn-grim"],
  "book-of-new-sun": ["bg-other","era-future","myth-mid","src-lit","rg-americas","sg-epic","tn-grim"],
  "gormenghast": ["bg-other","era-medieval","myth-low","src-lit","rg-europe","sg-dark","tn-grim"],
  "belgariad": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-epic","tn-cozy"],
  "deathgate": ["bg-multi","era-medieval","myth-mid","src-lit","rg-americas","sg-epic"],
  "redwall": ["bg-other","era-medieval","myth-low","src-lit","rg-europe","sg-fairytale","tn-cozy"],
  "stormlight": ["bg-other","era-medieval","myth-low","src-lit","rg-americas","sg-epic","sg-high","tn-epic"],
  "wheel-of-time": ["bg-other","era-medieval","myth-mid","src-lit","rg-americas","sg-epic","sg-high"],
  "malazan": ["bg-other","era-medieval","myth-low","src-lit","rg-cross","sg-epic","sg-low","tn-grim"],
  "first-law": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-epic","sg-low","tn-grim"],
  "kingkiller": ["bg-other","era-medieval","myth-mid","src-lit","rg-americas","sg-epic","sg-high"],
  "lies-of-locke": ["bg-other","era-early","myth-low","src-lit","rg-europe","sg-epic","tn-whimsy"],
  "poppy-war": ["bg-earth","era-modern","myth-mid","src-lit","rg-eastasia","sg-epic","tn-grim"],
  "broken-empire": ["bg-other","era-medieval","myth-low","src-lit","rg-europe","sg-dark","tn-grim"],
  "mistborn": ["bg-other","era-medieval","myth-low","src-lit","rg-americas","sg-epic","sg-high","tn-epic"],
  "his-dark-materials": ["bg-multi","era-modern","myth-heavy","src-lit","rg-europe","sg-scifan","sg-epic"],
  "old-kingdom": ["bg-other","era-medieval","myth-low","src-lit","rg-cross","sg-epic","sg-low"],
  "farseer": ["bg-other","era-medieval","myth-mid","src-lit","rg-europe","sg-epic","sg-low","tn-grim"],
  "jonathan-strange": ["bg-earth","era-early","myth-heavy","src-lit","rg-europe","sg-epic"],
  "night-circus": ["bg-earth","era-early","myth-low","src-lit","rg-americas","sg-fairytale","tn-whimsy"],
  "temeraire": ["bg-earth","era-early","myth-mid","src-lit","rg-europe","sg-epic"],
  "inheritance": ["bg-other","era-medieval","myth-mid","src-lit","rg-americas","sg-epic","sg-high"],
  "percy-jackson": ["bg-earth","era-modern","myth-heavy","src-lit","rg-americas","sg-fairytale","sg-urban"],
  "bartimaeus": ["bg-earth","era-modern","myth-heavy","src-lit","rg-europe","sg-urban","sg-epic"],
  "dresden": ["bg-earth","era-modern","myth-heavy","src-lit","rg-americas","sg-urban","tn-grim"],
  "priory": ["bg-other","era-medieval","myth-mid","src-lit","rg-cross","sg-epic","tn-epic"],
  "fifth-season": ["bg-earth","era-future","myth-low","src-lit","rg-americas","sg-scifan","sg-epic","tn-grim"],
  "golem-jinni": ["bg-earth","era-modern","myth-heavy","src-lit","rg-americas","sg-fairytale","tn-cozy"],
  "daevabad": ["bg-other","era-medieval","myth-heavy","src-lit","rg-mideast","sg-epic"],
  "uprooted": ["bg-other","era-medieval","myth-heavy","src-lit","rg-europe","sg-epic"],
  "spinning-silver": ["bg-other","era-medieval","myth-heavy","src-lit","rg-europe","sg-fairytale"],
  "bear-nightingale": ["bg-earth","era-medieval","myth-heavy","src-lit","rg-europe","sg-fairytale","tn-cozy"],
  "children-blood-bone": ["bg-other","era-medieval","myth-heavy","src-lit","rg-africa","sg-epic"],
  "akata-witch": ["bg-earth","era-modern","myth-heavy","src-lit","rg-africa","sg-urban"],
  "binti": ["bg-multi","era-future","myth-heavy","src-lit","rg-africa","sg-scifan"],
  "city-we-became": ["bg-earth","era-modern","myth-heavy","src-lit","rg-americas","sg-urban","sg-scifan"],
  "gideon": ["bg-other","era-future","myth-low","src-lit","rg-cross","sg-dark","sg-scifan"],
  "scholomance": ["bg-other","era-modern","myth-low","src-lit","rg-americas","sg-urban","tn-whimsy"],
  "books-of-babel": ["bg-other","era-medieval","myth-heavy","src-lit","rg-cross","sg-scifan","sg-epic"],
  "starless-sea": ["bg-multi","era-modern","myth-low","src-lit","rg-americas","sg-fairytale","tn-whimsy"],
  "zelda": ["bg-other","era-medieval","myth-mid","src-game","rg-cross","sg-epic","sg-high"],
  "pokemon": ["bg-other","era-modern","myth-low","src-game","rg-cross","sg-fairytale","tn-cozy"],
  "dragon-quest": ["bg-other","era-medieval","myth-mid","src-game","rg-eastasia","sg-epic"],
  "monster-hunter": ["bg-other","era-medieval","myth-low","src-game","rg-cross","sg-epic"],
  "hollow-knight": ["bg-other","era-medieval","myth-low","src-game","rg-cross","sg-dark","tn-grim"],
  "bloodborne": ["bg-other","era-medieval","myth-heavy","src-game","rg-cross","sg-dark","tn-grim"],
  "sekiro": ["bg-earth","era-medieval","myth-mid","src-game","rg-eastasia","sg-sws","tn-grim"],
  "fable": ["bg-other","era-medieval","myth-low","src-game","rg-europe","sg-fairytale","tn-whimsy"],
  "everquest": ["bg-other","era-medieval","myth-mid","src-game","rg-cross","sg-epic","sg-high"],
  "runescape": ["bg-other","era-medieval","myth-low","src-game","rg-cross","sg-epic"],
  "planescape": ["bg-multi","era-medieval","myth-heavy","src-game","rg-cross","sg-epic"],
  "baldurs-gate": ["bg-other","era-medieval","myth-mid","src-game","rg-cross","sg-epic","sg-high"],
  "okami": ["bg-earth","era-ancient","myth-heavy","src-game","rg-eastasia","sg-fairytale"],
  "xenoblade": ["bg-other","era-future","myth-low","src-game","rg-cross","sg-epic","sg-scifan"],
  "spirited-away": ["bg-multi","era-modern","myth-heavy","src-anime","rg-eastasia","sg-fairytale","tn-cozy"],
  "mononoke": ["bg-earth","era-medieval","myth-heavy","src-anime","rg-eastasia","sg-epic","tn-grim"],
  "nausicaa": ["bg-earth","era-future","myth-mid","src-anime","rg-eastasia","sg-scifan","tn-epic"],
  "laputa": ["bg-multi","era-early","myth-low","src-anime","rg-eastasia","sg-fairytale","tn-cozy"],
  "fullmetal": ["bg-earth","era-early","myth-mid","src-anime","rg-eastasia","sg-scifan","tn-grim"],
  "sword-art-online": ["bg-multi","era-modern","myth-low","src-anime","rg-eastasia","sg-scifan","sg-isekai"],
  "rezero": ["bg-multi","era-medieval","myth-low","src-anime","rg-eastasia","sg-isekai","tn-grim"],
  "slime": ["bg-other","era-medieval","myth-low","src-anime","rg-eastasia","sg-isekai","tn-cozy"],
  "made-in-abyss": ["bg-other","era-future","myth-low","src-anime","rg-cross","sg-dark","tn-grim"],
  "ancient-magus": ["bg-earth","era-modern","myth-heavy","src-anime","rg-eastasia","sg-fairytale","tn-cozy"],
  "berserk": ["bg-other","era-medieval","myth-mid","src-comic","rg-eastasia","sg-dark","tn-grim"],
  "record-lodoss": ["bg-other","era-medieval","myth-mid","src-anime","rg-eastasia","sg-epic","sg-high"],
  "hellboy": ["bg-earth","era-modern","myth-heavy","src-comic","rg-americas","sg-dark","tn-grim"],
  "sandman": ["bg-multi","era-modern","myth-heavy","src-comic","rg-europe","sg-epic"],
  "fables": ["bg-earth","era-modern","myth-heavy","src-comic","rg-americas","sg-urban","tn-whimsy"],
  "bone": ["bg-other","era-medieval","myth-low","src-comic","rg-americas","sg-fairytale","tn-cozy"]
};
