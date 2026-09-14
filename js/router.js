// ============================================================
// hash 路由
// 支持 #/path/:param?query 形式，纯静态 file:// 下可用，刷新/前进后退保留状态
// ============================================================
const Router = {
  routes: [],

  // 注册路由: { pattern: "/tech/:id", render: fn, mount: fn? }
  register(pattern, render, mount) {
    this.routes.push({ pattern, render, mount });
  },

  // 解析 hash 为 { path, params, query }
  parseHash() {
    const raw = (location.hash.replace(/^#\/?/, "")) || "";
    const [pathPart, queryStr] = raw.split("?");
    const path = "/" + pathPart.replace(/\/+$/, "");
    const query = {};
    if (queryStr) {
      new URLSearchParams(queryStr).forEach((v, k) => { query[k] = v; });
    }
    return { path, query, raw };
  },

  // 用 path 匹配某个 route，返回 { route, params }
  match(path) {
    for (const r of this.routes) {
      const p = r.pattern.split("/").filter(Boolean);
      const seg = path.split("/").filter(Boolean);
      if (p.length !== seg.length) continue;
      const params = {};
      let ok = true;
      for (let i = 0; i < p.length; i++) {
        if (p[i].startsWith(":")) params[p[i].slice(1)] = decodeURIComponent(seg[i]);
        else if (p[i] !== seg[i]) { ok = false; break; }
      }
      if (ok) return { route: r, params };
    }
    return null;
  },

  // 渲染当前路由
  render() {
    const { path, query } = this.parseHash();
    const m = this.match(path);
    const app = document.getElementById("app");
    if (!m) {
      app.innerHTML = `<div class="not-found"><h1>404</h1><p>页面不存在：${path}</p><a class="btn" href="#/">返回首页</a></div>`;
      return;
    }
    // 更新导航高亮
    document.querySelectorAll(".site-nav a").forEach(a => {
      const key = a.getAttribute("data-nav");
      const active = key === "/" ? path === "/" : (key && path.indexOf(key) === 0);
      a.classList.toggle("active", active);
    });
    app.innerHTML = m.route.render({ params: m.params, query });
    // 调用视图挂载钩子（如科技树初始化画布）
    if (m.route.mount) m.route.mount();
    // 回到顶部
    window.scrollTo(0, 0);
  },

  init() {
    window.addEventListener("hashchange", () => this.render());
    this.render();
  }
};
