---
title: css画三角形一次说清楚
---

我们在写页面时，会用到很多三角形图形，比如下面这种

![三角形](/assets/img/triangle1.png)

![三角形](/assets/img/triangle2.png)

如果使用图片的话，会占用额外的网络资源，影响页面加载速度。除此之外如果后期更改配色还需要重新制作一张图片，不利于维护。所以我们优先选择使用 css 实现。下面我们就利用 css border 实现绘制三角形。

我们将一个 div 的 width，height 都设为 0，只给它设定`border:50px solid #000;` 这是我们在页面上看到的是一个宽和高都为 100px 的正方形；如下图：

![正方形](/assets/img/box.pic)

如果我们画出这个正方形的对角线。我们就得到了四个三角形。这时我们改变一下我们的代码：只设定 `border-top:50px solid #000`另外三个边的边框夜色为透明；

```css
.triangle {
    width: 0;
    height: 0;
    border-top: 50px solid #000;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid transparent;
}
```

![三角形](/assets/img/triangle3.pic)

![三角形](/assets/img/triangle4.png)

这个时候我们在页面上看到的是一个角向下的箭头，就像我们第一张图的第 1 部分。如果我们给 border-right 设定颜色，其它三遍设定透明，就会得到一个角向左的三角形。由此我们可以得出这样一个结论：如果我们给一个盒子设定宽高为 0，padding 为 0，则这个盒子的边框会缩聚成一个矩形，四个边框分别对应被整个矩形分割成的四个三角形。

有了上面的例子再结合’transform: rotate(90deg);’我们可以得出任意方向的三角形。

那么如何画出不规则的三角形呢？或者说这个三角形的形状由什么决定的呢？

我们通过对角线交点向四个边坐高，这里我们可以发现每一条高线对应的每一条边框的宽度。每个三角形底边被垂足分成了两段，这两段有分别于相邻两个三角形的高相等，也就是和相邻两个边框的宽度相等。举个例子：如果我们给 border-top 设定颜色，其它三条边设透明，那我们得到而一个角向下的三角形。那这个三角形的底边长等于 border-left 的宽度+border-right 的宽度。底边的高等于 border-top 的宽度。所以我们可以通过改变边框宽度调整三角形的形状。

![三角形](/assets/img/1599227164169.png)

![三角形](/assets/img/1599227172035.png)

有了上面的结论其实我们就不光可以画三角了，比如我们给三个边都设置颜色只给一个边设置透明色，会怎么样呢？

你看的这么认真，送你一枚小锦旗。

![三角形](/assets/img/1599227137901.png)

```css
.triangle {
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-left: 50px solid red;
    border-right: 50px solid red;
    border-bottom: 50px solid transparent;
}
```

上面我们都没有设定 width，height，如果我们给单独给 width 设定值呢？我们得到了一个梯形。

![三角形](/assets/img/1599227193571.pic)

```css
.triangle {
    width: 30px;
    height: 0;
    border-top: 50px solid #000;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid transparent;
}
```

看到这里，发散一下，相信聪明的你一定可以想出来更多的玩法
