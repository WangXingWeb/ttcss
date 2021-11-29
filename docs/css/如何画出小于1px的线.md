---
title: 如何画出小于1px的线
---

有一天产品经理告诉我 App 底部 tab 栏上边框太宽了，赶紧改窄一点。我想这个简单啊，改一下 boder 的宽度就 OK 了，结果我一看代码，border-top 的宽度已经是 1px 了，这时如果将 border 的宽度设置为小于 1px 的值，浏览器还是当作 1px 来渲染。不会有任何效果。这时要不要告诉产品需求不合理，无法实现（想想还是算了吧，怕被打）。

这时只能想办法变通一下，于是我想到了 css3 中的 transform 属性，该属性允许我们对元素进行旋转、缩放、移动或倾斜。这里我就想通过缩放来实现绘制小于 1px 的线条。思路是将一个元素的边框设置为 1px，再通过缩放达到将线条变窄的目的。

看下面的代码，我们给下面的三栏布局加分割线，左边的分割线设置边框为 1px,右边线条使用缩放实现变窄的效果。

-   html 代码

```html
<section class="layout">
    <div class="left"></div>
    <div class="middle"></div>
    <div class="right"></div>
</section>
```

-   css 代码

```css
.layout {
    display: flex;
    height: 100%;
}
.left,
.right,
.middle {
    flex: 1;
}
.middle {
    border-left: 1px solid #000;
}
.right:before {
    content: '';
    height: 100%;
    display: inline-block;
    background-color: #000;
    width: 1px;
    transform: scaleX(0.5);
}
```

-   效果如下

    <img class="custom" :src="$withBase('/assets/img/px.png')" />

这里是绘制纵向的线条，所以我们使用 X 轴方向的缩放 scaleX( )，如果你要绘制横向的超窄线条可以使用 Y 轴方向的缩放 scaleY( )。如果你想绘制一条倾斜的超窄线条，要怎么实现呢？实现方式：先缩放绘制出 X 或 Y 轴方向上的超窄线条，再通过 transform:rotate(angle)旋转一定的角度来达到倾斜的效果。
