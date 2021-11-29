---
title: css权重
---

css 全称`Cascading Style Sheets`，翻译过来就是`层叠样式表`

样式一层一层叠在一起共同决定了内容的表现形式。如果我们给一个元素设置了互相冲突的 css 属性，那这个元素的会按照那个属性来展现呢？这里就涉及到了 css 权重的概念。

```css
div {
    color: red;
}
.content {
    color: green;
}
```

```html
<div class="content">css权重</div>
```

这里 class 的权重比标签高，所以这里文本的颜色会表现为绿色。
