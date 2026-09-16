// ============================================================
// 系列分册页（#/book/:id）
// 展示单个分册：原名 / 中文译名 / 年份 / 故事 / 梗概，
// 并回链所属系列的卷宗页。
// ============================================================
const BookView = {
  // 在所有系列中查找某分册，返回 { book, workId, index }
  find(id) {
    if (typeof SERIES_BOOKS === "undefined") return null;
    for (const workId of Object.keys(SERIES_BOOKS)) {
      const list = SERIES_BOOKS[workId] || [];
      const i = list.findIndex(b => b.id === id);
      if (i > -1) return { book: list[i], workId, index: i, siblings: list };
    }
    return null;
  },

  render(id) {
    const hit = this.find(id);
    if (!hit) return `<div class="not-found"><h1>未找到</h1><p>分册「${id}」不存在。</p><a class="btn" href="#/works">返回世界观总库</a></div>`;

    const { book, workId, index, siblings } = hit;
    const work = WORKS.find(w => w.id === workId);
    const seriesName = work ? work.title : workId;
    const label = book.cn || book.en;

    // 同系列其他分册
    const others = siblings.filter(b => b.id !== book.id).map(b =>
      `<a class="book-chip" href="#/book/${b.id}">
        <span class="bk-name">${esc(b.cn || b.en)}</span>
        <span class="bk-year">${b.year}</span>
      </a>`).join("");

    // 本品相关造物（该世界观的概念）
    const techs = TECHS.filter(t => t.workId === workId).slice(0, 10).map(t =>
      `<a class="chip-link" href="#/tech/${t.id}" data-tech-card="${t.id}">${esc(t.name)}</a>`).join("");

    return `
      <article class="detail book-detail">
        <nav class="breadcrumb">
          <a href="#/">首页</a> / <a href="#/works">世界观总库</a> /
          <a href="#/work/${workId}">《${esc(seriesName)}》</a> / 第 ${index + 1} 部
        </nav>

        <header class="detail-head">
          <div class="dh-top">
            <div>
              <h1>${esc(label)}</h1>
              <p class="aliases">${book.cn ? esc(book.en) : "原名"}　·　${book.year} 年　·　系列第 ${index + 1} 部</p>
            </div>
          </div>
          <div class="dh-meta">
            <span class="meta-item">所属系列：<a href="#/work/${workId}">《${esc(seriesName)}》</a></span>
            ${work ? `<span class="meta-item">作者：${esc(work.creator)}</span>` : ""}
          </div>
        </header>

        <section class="block">
          <h2>故事</h2>
          <p class="body-text">${esc(book.story)}</p>
        </section>

        <section class="block">
          <h2>梗概</h2>
          <p class="body-text">${esc(book.synopsis)}</p>
        </section>

        ${techs ? `
        <section class="block">
          <h2>本系列造物</h2>
          <div class="chips-wrap">${techs}</div>
        </section>` : ""}

        <section class="block">
          <h2>同系列其他分册</h2>
          <div class="book-row">${others}</div>
        </section>
      </article>`;
  }
};