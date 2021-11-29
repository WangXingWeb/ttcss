---
title: sass混合器
---

利用混合器，可以很容易地在样式表的不同地方共享样式。如果你发现自己在不停地重复一段样式，那就应该把这段样式构造成优良的混合器，尤其是这段样式本身就是一个逻辑单元。

<!-- more -->

## 基本使用方法

使用`@mixin`定义一个混合器
使用`@include`使用混合器，复用混合器中的代码

```css
@mixin border-default {
    border: 1px solid #f1f1f1;
    border-radius: 5px;
}
.meber-info {
    @include border-default();
    background-color: #fff;
}
```

边以后的代码如下

```css
.meber-info {
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    background-color: #fff;
}
```

这里乍一看有点像继承，但混合器和继承是有很大的不同的，继承中被继承的对象本身也是一个选择器，他可以被单独使用，但混合器不是一个选择器，它本身不能被使用。像上面的代码编译后不会生成`.border-default`这样的 css 选择器。混合器唯一的作用就是被其他的选择器使用。

## 混合器中的嵌套规则

```css
@mixin no-bullets {
    list-style: none;
    li {
        list-style-image: none;
        list-style-type: none;
        margin-left: 0px;
    }
}
ul.plain {
    color: #444;
    @include no-bullets;
}
```

编译后生成的代码

```css
ul.plain {
    color: #444;
    list-style: none;
}
ul.plain li {
    list-style-image: none;
    list-style-type: none;
    margin-left: 0px;
}
```

## 混合器传参

```css
@mixin link-colors($normal, $hover, $visited) {
    color: $normal;
    &:hover {
        color: $hover;
    }
    &:visited {
        color: $visited;
    }
}

a {
    @include link-colors(blue, red, green);
}
```

生成的代码是：

```css
a {
    color: blue;
}
a:hover {
    color: red;
}
a:visited {
    color: green;
}
```

这里感觉混合器又很像一个`function`,给混合器传入对应的参数混合器处理过后返回对应的 css 代码块。

当你@include 混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，sass 允许通过语法\$name: value 的形式指定每个参数的值。这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可：

```css
a {
    @include link-colors($normal: blue, $visited: green, $hover: red);
}
```

## 默认参数

为了在@include 混合器时不必传入所有的参数，我们可以给参数指定一个默认值。参数默认值使用\$name: default-value 的声明形式，默认值可以是任何有效的 css 属性值，甚至是其他参数的引用，如下代码：

```css
$green: green;
@mixin color-set($color1: $green, $color2: $green) {
    border: 1px solid $color1;
    color: $color2;
}
.member-info {
    @include color-set(red);
    background-color: #fff;
}
```

上面的代码`color1`设定了红色，生成的边框为红色，使用时没有传`color2`,所以生成的文本颜色使用的是默认的颜色绿色。
