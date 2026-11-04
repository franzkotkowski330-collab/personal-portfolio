# 肖岚芝 · 个人作品集

产品经理个人作品集，使用纯 HTML、CSS 和 JavaScript，无需安装依赖或运行构建命令。GitHub Actions 将 `dist/` 直接发布到 GitHub Pages。

## 访问与本地预览

- 作品集：https://franzkotkowski330-collab.github.io/personal-portfolio/
- 仓库：https://github.com/franzkotkowski330-collab/personal-portfolio
- 本地预览：在此目录运行 `node server.cjs dist 8090`，打开 http://localhost:8090/；也可执行 `start-preview.ps1`。

## 内容与文件

网站展示 Vivic、Make Again、上海电气、首农集团、地牢骰斗与纸境骰旅六个作品。Make Again 详情提供从用户 Keynote 提取的五张实际界面图片；设计预览保留原有标记。游戏区域不展示老师或学员署名。

- `dist/index.html`：页面内容及六个作品的入口。
- `dist/styles.css`：桌面和手机样式。
- `dist/app.js`：作品筛选、项目详情、图片画廊、手机导航、复制邮箱。
- `dist/assets/`：项目图片、个人照片、用户提供的原始 PDF 简历。
- `dist/demos/shounong/`：首农管理平台静态演示副本，使用浏览器本地模拟数据，不需要原本的 8081 服务或后端。
- `dist/demos/shanghai-electric/index.html`：质量洞察报告 HTML 演示副本；ECharts 5.5.1 图表库及许可证随站点发布。
- `.github/workflows/pages.yml`：推送 `main` 后自动部署 GitHub Pages。

所有站内资源使用相对路径，适用于 GitHub Pages 的仓库子路径。首农和上海电气演示随作品集发布；Vivic 和两款小游戏保留原有外部产品、试玩链接。

## 更新线上网站

修改 `dist/` 中的页面或素材后，在本目录执行：

```powershell
git add dist README.md .github/workflows/pages.yml .gitignore server.cjs start-preview.ps1
git commit -m "Update portfolio"
git push origin main
```

推送后等待仓库 Actions 中的 `Deploy portfolio to GitHub Pages` 成功，再刷新作品集网址。

更新简历时，用新的 PDF 覆盖 `dist/assets/xiaolanzhi-resume.pdf`，保留文件名即可。

公开仓库仅包含网站及部署所需文件。研究材料、简历源文件、Keynote/PDF 源材料、测试截图、整理脚本、日志和 `node_modules` 均不提交。