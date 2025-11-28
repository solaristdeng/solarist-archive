
<p class="kicker">Design / Brutal Editorial</p>

# Black-White Brutalism, But With Magazine Rhythm

<p class="byline">solarist · 2025-11-21 · 12 min read</p>

第一段（lead）。我一直觉得 brutalism 最难的不是“够不够硬”，而是“硬得有没有编辑感”。网页上的 brutalism 很容易滑向“组件堆叠”：线条乱飞、阴影到处、每个区块都在抢戏。真正的杂志版面反而更克制——它把**秩序当底座**，再在关键位置做破格。  

第二段。黑白不是“没有颜色”，而是一种**立场**：用对比、节奏、留白去替代装饰，用排版逻辑去替代 UI 逻辑。你越是想“显得 brutal”，越要敢于让大部分页面安静。

---

## 1. 版面不是装饰，是结构

杂志的阅读方式不是“滑动浏览”，而是“扫描后坠入”。  
所以你需要一个稳定的节奏：段落间距、标题层级、图文落位，都像一台印刷机一样有规律。

- **Baseline grid**：所有区块都落在同一个节拍上。  
- **Measure**：正文行宽保持在 60–75ch 的阅读舒适区。  
- **Hierarchy**：用字号、字重、留白解决层级，不要靠花活。

你会发现：当页面骨架足够稳，哪怕只用黑白，也会“像一本东西”。

---

## 2. 你要的 brutal，不是“线条越多越 brutal”

线条在杂志里是稀缺资源。  
它的作用是“**切分结构、制造停顿**”，而不是“装饰 UI”。

下面是一个**外部引用 blockquote**（保守、在正文流内）：

> “Typography is a tool for organizing information, not a style to be pasted on.”  
> <cite>— editorial note, paraphrased</cite>

它应该像插入的证据一样可靠，而不是像网页 callout 那样闪光。

---

## 3. Pull quote（方法 A：Markdown 属性语法）

这是一个 pull quote：从正文里抽出来的金句，用来做阅读锚点。  
如果你的渲染器支持 attribute 语法，下面这段会自动变成 `.pull-quote`：

> Brutalism 的关键不是“粗野”，而是“在秩序之上施加一次有方向的破格”。  
{.pull-quote}

第三段继续正文。pull quote 在杂志里经常浮到侧边，读者在扫描时先被它抓住，然后回到正文。它不是引用别人的话，而是**编辑对你文本的再组织**。  

第四段。你可以把 pull quote 当作“版面里的钉子”：不多，但足够重。

---

## 4. Pull quote（方法 B：HTML 方式）

如果 attribute 语法不生效，你可以用原生 HTML 测试：

<blockquote class="pull-quote">
  <p>当你把网页当成印刷品来排，你的 brutalism 才会从“网络感”变成“刊物感”。</p>
</blockquote>

继续正文。这种写法基本所有 markdown-it / remark / rehype 都能渲染，因为它就是合法 HTML。  
你只要确认你的 CSS 选择器里有 `blockquote.pull-quote` 就可以了。

---

## 5. 列表、术语与代码：保持“印刷附录感”

有些信息天生适合列表：

1. 结构优先（grid, measure, hierarchy）  
2. 破格集中（hero / pull quote / feature）  
3. 装饰稀缺（线条、阴影、标签都要节省）

术语用行内 `code` 标一下就好，不要让它像网页按钮。  
比如：`baseline grid`、`pull quote`、`measure`。

代码块也该像“附录”而不是“互动卡片”：

```bash
# Example: generate a clean PDF preview from markdown
pandoc article.md \
  -o article.pdf \
  --pdf-engine=xelatex \
  -V mainfont="Noto Serif SC"
````

---

## 6. 一个小表格（像杂志里的数据框）

| Element    | Print logic       | Web brutal pitfall      |
| ---------- | ----------------- | ----------------------- |
| H2         | section break     | sticker-like black pill |
| Blockquote | external evidence | flashy callout card     |
| Pull quote | reading anchor    | overused highlight      |
| Code       | appendix          | hover toy               |
| Rules      | scarce separators | everywhere decoration   |

---

## 7. 图像占位（测试你的 figure 样式）

![A brutal black-white poster](./assets/poster-placeholder.jpg)

*Fig. 1 — 这张图只是占位，测试你的边框与 caption。*

---

## 8. 最重要的一点

杂志感来自**被编辑过的节奏**。
真正有效的 brutalism 往往是：
90% 安静、10% 破格。

你只要持续这样做，读者会自动学会你的规则。

---

[^1]: 这是一个脚注示例，用来测试 footnotes 的分隔与字号。

```
::contentReference[oaicite:0]{index=0}

