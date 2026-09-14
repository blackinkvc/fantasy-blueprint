// ============================================================
// 首页视图
// ============================================================
const HomeView = {
  render() {
    const levelsSorted = Object.values(LEVELS).sort((a, b) => a.order - b.order);
    const levelCards = levelsSorted.map(lv => {
      const count = TECHS.filter(t => t.level === lv.key).length;
      return `
        <a class="level-card" href="#/category?level=${lv.key}" style="--lvcolor:${lv.color}">
          <div class="level-card-head">
            <span class="level-key">${lv.key}</span>
            <span class="level-count">${count} 项</span>
          </div>
          <h3>${lv.label}</h3>
          <p>${lv.desc}</p>
        </a>`;
    }).join("");

    // 首页展示有深度条目的核心卷宗；其余收入总库
    const deepWorks = WORKS.filter(w => TECHS.some(t => t.workId === w.id));
    const workCards = deepWorks.map(w => {
      const count = TECHS.filter(t => t.workId === w.id).length;
      return `
        <a class="work-card" href="#/work/${w.id}">
          <h3>《${w.title}》</h3>
          <p class="meta">${w.creator} · ${w.media}</p>
          <p class="desc">${w.setting.slice(0, 60)}…</p>
          <span class="work-count">${count} 项造物</span>
        </a>`;
    }).join("") + `
      <a class="work-card works-all" href="#/works">
        <h3>世界观总库</h3>
        <p class="meta">${WORKS.length} 卷编年登记</p>
        <p class="desc">神话、小说、电影、剧集、游戏——从远古的龙与炼金传说，到每一个被写下的奇幻世界。</p>
        <span class="work-count">检索全部 →</span>
      </a>`;

    const domainChips = Object.values(DOMAINS).map(d => {
      const count = TECHS.filter(t => t.domain === d.key).length;
      return `
        <a class="domain-chip" href="#/category?domain=${d.key}" style="--dcolor:${d.color}">
          <span class="d-icon">${d.icon}</span> ${d.label}
          <span class="d-count">${count}</span>
        </a>`;
    }).join("");

    return `
      <section class="hero">
        <p class="hero-kicker">卷 首</p>
        <h1>想象先于星辉降临</h1>
        <p class="hero-sub-en">Imagination Arrives Before Starlight</p>
        <p class="hero-verse">
          术士以符文唤醒亡者，匠人以方程接住雷霆。<br>
          此卷清点人类幻想过的造物——<br>
          有的已在炉膛中成形，有的仍在炼金术里沉睡，<br>
          有的，永远只属于写下它的那个世界。
        </p>
        <div class="hero-rule"></div>
        <p class="hero-stats-line">条目 ${TECHS.length} · 世界观 ${WORKS.length} · 领域 ${Object.keys(DOMAINS).length} · 分级 ${Object.keys(LEVELS).length}</p>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>实现难度分级</h2>
          <a class="more" href="#/category">查看全部 →</a>
        </div>
        <div class="level-grid">${levelCards}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>造物领域</h2>
        </div>
        <div class="domain-row">${domainChips}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>世界观档案</h2>
          <a class="more" href="#/works">总库 ${WORKS.length} 卷 →</a>
        </div>
        <div class="work-grid">${workCards}</div>
      </section>
    `;
  }
};
