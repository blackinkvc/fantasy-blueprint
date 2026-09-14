// ============================================================
// 研发SOP总览页视图
// 方法论核心（八条原则，判定之道/工程之道）+ 六阶段研发流程 + 蓝图统计
// 六阶段与方法论的编织关系见 data/methods.js 的 STAGE_METHODS
// ============================================================
const SopView = {
  stages: [
    {
      id: "SOP-1", name: "定义与拆解", color: "#2b2b2b", methods: ["decomposition"],
      goal: "先把那一句设定，拆成能独立动手做的子系统。",
      activities: ["确定技术功能与性能指标", "识别关键技术单元", "评估现实对应技术", "产出技术分解说明书"],
      output: "《技术分解说明书》"
    },
    {
      id: "SOP-2", name: "原理分析", color: "#222222", methods: ["empirical", "first-principles", "gap-typology"],
      goal: "逐条核对自然法则，给技术定一个现实到幻想之间的坐标。",
      activities: ["逐条核对自然法则", "标注违反/需突破/可实现", "对照五级分类定级(L1-L5)", "产出可行性分级报告"],
      output: "《可行性分级报告》"
    },
    {
      id: "SOP-3", name: "理论研究与建模", color: "#1a1a1a", methods: ["energy-audit"],
      goal: "用方程和仿真验证这条路在理论上走得通。",
      activities: ["建立数学/自然模型", "数值仿真与参数扫描", "评估理论边界与前提", "产出理论模型与仿真"],
      output: "《理论模型与仿真》"
    },
    {
      id: "SOP-4", name: "关键技术攻关", color: "#111111", methods: ["dependency"],
      goal: "找到真正难造的部分，一项一项解决。",
      activities: ["识别关键瓶颈清单", "分项设立攻关课题", "突破材料/能源/工艺", "产出瓶颈攻关清单"],
      output: "《瓶颈攻关清单》"
    },
    {
      id: "SOP-5", name: "工程实现与原型", color: "#000000", methods: ["super-engineer"],
      goal: "把理论变成图纸，再变成一台能跑的原型。",
      activities: ["系统与结构设计", "工程化与集成", "原型机制造与台架测试", "产出原型机"],
      output: "《原型机》"
    },
    {
      id: "SOP-6", name: "验证、迭代与部署", color: "#000000", methods: ["honest-boundary"],
      goal: "反复测试，直到它能稳定地投入使用。",
      activities: ["安全性/可靠性验证", "性能迭代优化", "小规模部署验证", "产出验收报告与产品"],
      output: "《验收报告与产品》"
    }
  ],

  // 方法论标签 chip（阶段卡 / 详情页共用结构）
  methodChip(m) {
    return `<a class="m-chip" href="#/sop?m=${m.key}">${m.code} ${m.label}</a>`;
  },

  render() {
    // 方法论核心：按组渲染（判定之道 → 工程之道）
    const groupHtml = Object.values(METHOD_GROUPS).map(g => {
      const cards = METHODS.filter(m => m.group === g.key).map(m => `
        <div class="m-card" id="m-${m.key}">
          <div class="m-card-top">
            <h3>${m.label}</h3>
            <span class="m-code">${m.code}</span>
          </div>
          <p class="m-principle">${m.principle}</p>
          <p class="m-detail">${m.detail}</p>
        </div>`).join("");
      return `
        <div class="mgroup">
          <div class="mgroup-head">
            <span class="mgroup-title">${g.label}</span>
            <span class="mgroup-en">${g.en}</span>
            <p class="mgroup-desc">${g.desc}</p>
          </div>
          <div class="method-grid">${cards}</div>
        </div>`;
    }).join("");

    // 六阶段流程卡（附本阶段贯彻的方法论）
    const stageCards = this.stages.map((s, i) => {
      const chips = (s.methods || [])
        .map(k => getMethod(k)).filter(Boolean)
        .map(m => this.methodChip(m)).join("");
      return `
      <div class="sop-stage" style="--sopc:${s.color}">
        <div class="sop-index">${i + 1}</div>
        <div class="sop-body">
          <h3>${s.name} <span class="sop-id">${s.id}</span></h3>
          <p class="sop-goal">${s.goal}</p>
          <ul class="sop-act">${s.activities.map(a => `<li>${a}</li>`).join("")}</ul>
          <div class="sop-output">产出：<strong>${s.output}</strong></div>
          ${chips ? `<div class="sop-methods"><span class="sm-label">本阶段贯彻</span>${chips}</div>` : ""}
        </div>
      </div>`;
    }).join("");

    // 蓝图统计：分级
    const levelsSorted = Object.values(LEVELS).sort((a, b) => a.order - b.order);
    const levelStat = levelsSorted.map(lv => {
      const count = TECHS.filter(t => t.level === lv.key).length;
      const pct = TECHS.length ? (count / TECHS.length * 100).toFixed(1) : 0;
      return `
        <div class="stat-row">
          <span class="stat-label" style="color:${lv.color}">${lv.badge}</span>
          <div class="stat-bar"><div class="stat-fill" style="width:${pct}%;background:${lv.color}"></div></div>
          <span class="stat-val">${count} / ${pct}%</span>
        </div>`;
    }).join("");

    const domainStat = Object.values(DOMAINS).map(d => {
      const count = TECHS.filter(t => t.domain === d.key).length;
      return `<div class="dom-stat" style="--dcolor:${d.color}">${d.icon} ${d.label} <strong>${count}</strong></div>`;
    }).join("");

    return `
      <section class="page-title">
        <h1>方法论 · 研发 SOP</h1>
        <p>八条核心原则，六个执行阶段——从一句虚构的设定，走到一台能开机的机器。</p>
      </section>

      <section class="block">
        <h2>方法论核心</h2>
        ${groupHtml}
      </section>

      <section class="block">
        <h2>六阶段研发流程</h2>
        <div class="sop-flow">${stageCards}</div>
      </section>

      <section class="block">
        <h2>蓝图进度统计</h2>
        <div class="stat-grid">
          <div class="stat-panel">
            <h3>按实现分级</h3>
            ${levelStat}
          </div>
          <div class="stat-panel">
            <h3>按造物领域</h3>
            <div class="dom-stats">${domainStat}</div>
          </div>
        </div>
      </section>
    `;
  },

  // 挂载钩子：支持 #/sop?m=<methodKey> 定位并高亮对应方法论卡
  mount() {
    const qs = (location.hash.split("?")[1]) || "";
    const mKey = new URLSearchParams(qs).get("m");
    if (!mKey) return;
    const el = document.getElementById("m-" + mKey);
    if (!el) return;
    el.classList.add("hl");
    // 延迟到路由的 scrollTo(0,0) 之后执行，避免被覆盖
    setTimeout(() => el.scrollIntoView({ block: "center" }), 0);
  }
};
