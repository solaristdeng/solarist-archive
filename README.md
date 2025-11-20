# Solarist Archive

一个极简主义的 Markdown 博客系统，采用 Brutalist 设计风格。

## 特性

- 📝 **Markdown 支持** - 直接在 `src/posts/` 目录下放置 `.md` 文件即可
- 🎨 **多样式支持** - 通过 `type` 字段为不同类型文章应用不同 CSS
- 📅 **自动化日期管理** - 自动读取文件创建和修改时间，无需手动输入
- 🔍 **全站搜索** - Ctrl+K 快速搜索文章（标题、标签、内容）
- ⌨️ **完整键盘导航** - 支持全局快捷键，按 `?` 查看帮助
- 🏷️ **标签系统** - 按标签分类，支持点击跳转筛选
- 📂 **Archive 页面** - 网格布局展示所有文章，支持标签筛选
- 👤 **About & CV** - 独立的关于页面和简历页面

## 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+K` / `⌘K` | 打开搜索 |
| `?` | 显示快捷键帮助 |
| `H` | 返回首页 |
| `A` | 前往 Archive |
| `B` | 前往 About |
| `↑` / `↓` | 浏览文章列表 |
| `Enter` | 打开选中的文章 |
| `Esc` | 关闭弹窗 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 使用指南

详细使用说明请查看：[使用说明.md](./使用说明.md)

### 添加文章

1. 在 `src/posts/` 目录下创建 `.md` 文件
2. 添加 YAML frontmatter（可选）：

```markdown
---
title: 文章标题
tags: 标签1, 标签2
type: default
---

# 文章内容开始...
```

### 可用的样式类型

- `default` - 默认 Brutalist 风格
- `technical` - 技术文档（终端风格）
- `literary` - 文学作品（衬线字体）
- `legal` - 法律文档（正式排版）
- `poetry` - 诗歌（楷体，小行距）

### 自动化日期

系统会自动：
- 读取文件创建时间作为**发布时间**
- 读取文件修改时间作为**最后修改时间**
- 按发布时间排序（精确到分钟）
- 在首页和文章页显示日期信息

无需在 markdown 中手动输入日期！

## 技术栈

- React 19
- Vite 7
- React Router
- React Markdown
- Tailwind CSS

## 项目结构

```
solarist-archive/
├── src/
│   ├── posts/           # Markdown 文章目录
│   │   ├── cv.md       # CV（标记为 special: true）
│   │   └── *.md        # 其他文章
│   ├── pages/           # React 页面组件
│   │   ├── HomePage.jsx      # 首页（最近文章 + 导航）
│   │   ├── ArchivePage.jsx   # Archive（标签筛选）
│   │   ├── AboutPage.jsx     # About 页面
│   │   ├── CVPage.jsx        # CV 页面
│   │   └── PostPage.jsx      # 文章详情页
│   ├── components/      # 可复用组件
│   ├── data/            # 数据处理（posts.js）
│   ├── post-*.css       # 各种文章样式
│   └── article.css      # 基础文章样式
├── vite-plugin-file-timestamps.js  # 自动读取文件时间戳的插件
└── 使用说明.md          # 详细使用文档
```

## 页面路由

- `/` - 首页（最近 10 篇文章）
- `/archive` - Archive 页面（所有文章，标签筛选）
- `/archive?tag=标签名` - 按标签筛选
- `/about` - About 页面
- `/cv` - CV 页面
- `/post/:id` - 文章详情页

## 特殊功能

### 标签系统
- 文章内标签可点击跳转到筛选页面
- Archive 页面支持按标签筛选
- URL 支持标签参数，可分享带筛选的链接

### 特殊页面
- 在 frontmatter 中添加 `special: true` 可创建隐藏页面
- 隐藏页面不出现在首页和 Archive
- 适合 CV、草稿等不需要列表显示的内容

## License

MIT
