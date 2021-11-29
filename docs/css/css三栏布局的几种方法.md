---
title: css三栏布局的几种方法
---

css 中如何实现三栏布局，左右宽度固定中间自适应。如下图

<img class="custom" :src="$withBase('/assets/img/threeCol.jpg')" />

下面介绍 5 种方法。

## 浮动

```html
<div class="layout">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center"></div>
</div>
```

> 这里的顺序很关键浮动的 left 和 right 在 center 上面。

```css
.layout div {
    height: 100px;
}
.left {
    float: left;
    width: 300px;
    background-color: red;
}
.center {
    background-color: blue;
}
.right {
    float: right;
    width: 300px;
    background-color: green;
}
```

## 绝对定位

```html
<div class="layout">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>
```

```css
.layout {
    position: relative;
}
.layout div {
    position: absolute;
    height: 100px;
}
.left {
    left: 0;
    width: 300px;
    background-color: red;
}
.center {
    left: 300px;
    right: 300px;
    background-color: blue;
}
.right {
    right: 0;
    width: 300px;
    background-color: green;
}
```

> 这里最关键的一步就是给 center 设置`left:300px;right:300px;`,这样就让 center 部分占满了距左侧 300px，距右侧 300px 的空间，从而达到了中间部分自适应的目的。

## 弹性布局

学过 css3 的同学应该很清楚使用 flex 布局可以很轻松的实现自适应布局。

```html
<div class="layout">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>
```

```css
.layout {
    display: flex;
}
.layout div {
    height: 100px;
}
.left {
    width: 300px;
    background-color: red;
}
.center {
    flex: 1;
    background-color: blue;
}
.right {
    width: 300px;
    background-color: green;
}
```

## 表格布局

```html
<div class="layout">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>
```

```css
.layout {
    display: table;
    width: 100%;
    height: 100px;
}
.layout div {
    display: table-cell;
}
.left {
    width: 300px;
    background-color: red;
}
.center {
    background-color: blue;
}
.right {
    width: 300px;
    background-color: green;
}
```

## 网格布局

```html
<div class="layout">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>
```

```css
.layout {
    display: grid;
    width: 100%;
    grid-template-rows: 100px;
    grid-template-columns: 300px auto 300px;
}
.left {
    background-color: red;
}
.center {
    background-color: blue;
}
.right {
    background-color: green;
}
```
