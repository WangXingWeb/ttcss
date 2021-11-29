---
title: table双边框问题
---

我们使用 table 标签时，往往会遇到双边框的问题。比如：

<img class="custom" :src="$withBase('/assets/img/twoBorder.jpg')" />

这种效果往往不是我们需要的，大多数情况下我们都是使用单边框表格，要如何才能将双边框变成单边框呢？
我们先来看一下为什么会出现双边框。
table 标签上有这样两个属性

::: tip
cellspacing
这个属性（使用百分比或像素）定义了两个单元格之间空间的大小（从水平和垂直方向上），包括了表格的顶部与第一行的单元格，表的左边与第一列单元格，表的右边与最后一列的单元格，表的底部与最后一行单元格之间的空间
:::

由此可见两个 td 之间的间距就是由这个属性控制的，现在如果我们给这个属性设置为 0，两个 td 之间没有间距了是不是也就没有边框了呢？

<img class="custom" :src="$withBase('/assets/img/twoBorder2.jpg')" />

貌似成功了，变成单边框了但是现在的边框变粗了，原因是我们并没有去掉双边框而是将两条边框紧紧挨在一起。这个效果目前还不够完美。

table 标签有一个 css 属性`border-collapse`

::: tip
用来决定表格的边框是分开的还是合并的。在分隔模式下，相邻的单元格都拥有独立的边框。在合并模式下，相邻单元格共享边框。
:::

设置这个属性可以让相邻单元格使用一条边框。

::: tip
collapse
相邻的单元格共用同一条边框（采用 collapsed-border 表格渲染模型）。
separate
默认值。每个单元格拥有独立的边框（采用 separated-border 表格渲染模型）。
:::

给`table`标签添加 css 样式

```css
table {
    border-collapse: collapse;
}
```

这样就完美的解决了 table 双边框的问题。

<img class="custom" :src="$withBase('/assets/img/twoBorder3.jpg')" />
