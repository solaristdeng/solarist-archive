# 文章类型样式系统

## 功能说明

现在可以为不同类型的文章加载不同的 CSS 样式。只需在 markdown 文件的 YAML frontmatter 中指定 `type` 字段即可。

## 使用方法

### 1. 在 Markdown 文件中指定类型

```markdown
---
title: 你的文章标题
tags: 标签1, 标签2
type: technical
---

# 文章内容...
```

### 2. 可用的类型

目前已经预设了以下几种类型样式：

- **default** - 默认样式（继承 article.css）
- **technical** - 技术文档样式：代码为主，黑绿配色，终端风格
- **literary** - 文学样式：衬线字体，优雅排版，适合散文诗歌
- **legal** - 法律文档样式：正式格式，Times New Roman 字体

### 3. 创建自定义样式

如需添加新的类型样式：

1. 在 `src/` 目录下创建新的 CSS 文件，命名格式为 `post-{类型名}.css`
   
   例如：`src/post-news.css`

2. 编写你的样式规则：

```css
/* News article style */
.markdown-body {
  font-family: Arial, sans-serif;
  color: #333;
}

.markdown-body h1 {
  font-size: 2rem;
  border-bottom: 3px solid #c00;
}

/* ... 更多样式 ... */
```

3. 在 markdown 文件中使用：

```markdown
---
title: 新闻标题
type: news
---
```

## 示例

查看以下示例文件：

- `src/posts/test.md` - 使用 `type: technical`
- `src/posts/example-literary.md` - 使用 `type: literary`
- `src/posts/中华人民共和国仲裁法_中国人大网.md` - 可以添加 `type: legal`

## 技术实现

- CSS 文件会在访问文章时动态加载
- 切换文章时会自动清理之前的样式并加载新样式
- 如果指定的类型 CSS 不存在，会回退到默认样式
- 原有的 `article.css` 作为基础样式始终加载

## 注意事项

- 类型名称会转换为小写用于查找 CSS 文件
- CSS 文件必须放在 `src/` 目录下
- 类型样式会覆盖 `article.css` 中的相同规则
- 建议使用具体的类名选择器（如 `.markdown-body`）避免影响其他页面
