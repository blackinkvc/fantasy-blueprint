# 奇幻造物实现蓝图 · Blueprint of Fantasy Creation

> 以第一性原理与超级工程师的工作方法，清点奇幻作品中的魔法、异兽与超自然造物：哪些已成现实，哪些仍在炼金术里沉睡，哪些只属于纸上的世界。

🌐 **在线访问（GitHub Pages）：** https://blackinkvc.github.io/fantasy-blueprint/

## 项目简介

一个纯静态的单页应用（SPA），使用 hash 路由，无需后端。内容包括：

- **首页** —— 项目总览与方法论
- **造物检索** —— 按分类浏览奇幻造物
- **造物树** —— 技术/造物树状结构
- **开发进度** —— 审计与里程碑
- **研发 SOP** —— 研究与实现流程
- **世界观档案** —— 作品与世界观资料
- **关联网络** —— 造物之间的关联关系

## 目录结构

```
index.html              入口页面
css/styles.css          样式
js/data/                数据层（domains / works / techs / methods / relations / davinci / tree-template）
js/views/               视图层（各页面渲染逻辑）
js/router.js            哈希路由
js/app.js               应用入口
assets/images/          图像资源（含 davinci 系列 SVG）
```

## 本地预览

直接用浏览器打开 `index.html` 即可；或启动一个静态服务器：

```bash
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 部署

通过 GitHub Pages 从 `main` 分支根目录发布，站点地址见上方链接。
