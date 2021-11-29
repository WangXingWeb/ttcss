---
title: sass构建样式工具库
---

## 配色

我们写页面样式时往往要求整个网站的配色统一，通常的做法是写一些颜色工具样式 class。

```css
.text-primary {
    color: $db9e3f;
}
```

在需要使用的地方使用

```html
<div class="text-primary"></div>
```

但这里又一个小问题，在我们配色比较多的情况下，写起来会很繁复，所以这里我们使用 css 变量就会简洁很多，利用 sass 的循环生成若干个样式 class

### 配置颜色

```css
$colors: (
    "primary": #db9e3f,
    "info": #4b67af,
    "blue": #4394e4,
    "blue-1": #1e3595,
    "danger": #781a16,
    "white": #fff,
    "white-1": #fcfcfc,
    "white-2": #eceef0,
    "black": #000,
    "dark": #222,
    "dark-1": #343440,
    "grey-1": #666,
    "light": #f9f9f9,
    "light-1": #d4d9de,
    "grey": #999
);
```

这样我们维护颜色配置会非常方便。如何网站的主题配色改变，我们只需要修改这里的色值就可以了。

### 循环生成样式

```css
@each $colorKey, $color in $colors {
    .text-#{$colorKey} {
        color: $color;
    }
    .bg-#{$colorKey} {
        background-color: $color;
    }
}
```

这样我们就很快生成的针对每个颜色的文本颜色和背景色 2 个 class
代码非常简洁。
生成的 css 样式如下：

### 生成的样式

```css
.text-primary{
    color:#db9e3f;
}
.bg-primary{
    background-color: #db9e3f;
}
...
```

## 边距

同样一个成熟规范的网站每个页面中类似的组件的边距往往也是统一的。如果你有研究过 bootstrap 的源码你应该很容易理解这一点。
定义边距样式 class 可能要比配色 class 稍微复杂一点。

### 定义边距参数

```css
$spacing-types: (
    m: margin,
    p: padding
); //边距类型外边距还是内边距
$spacing-direction: (
    t: top,
    r: right,
    b: bottom,
    l: left
); //边距的方向
$spacing-base-size: 1rem; //边距系数，实际的边距数值是它的倍数关系，我这里用rem，你用px和em也没关系
$spacing-sizes: (
    0: 0,
    1: 0.25,
    2: 0.5,
    3: 1,
    4: 1.6,
    5: 3
); //边距是系数的几倍
```

### 循环生成 class

```css
//边距margin,padding
@each $typeKey, $type in $spacing-types {
    //.m-0{margin:1rem;}
    @each $sizeKey, $size in $spacing-sizes {
        .#{$typeKey}-#{$sizeKey} {
            #{$type}: $size * $spacing-base-size;
        }
    }

    //.mx-1{margin:0}
    @each $sizeKey, $size in $spacing-sizes {
        .#{$typeKey}x-#{$sizeKey} {
            #{$type}-left: $size * $spacing-base-size;
            #{$type}-right: $size * $spacing-base-size;
        }
    }
    @each $sizeKey, $size in $spacing-sizes {
        .#{$typeKey}y-#{$sizeKey} {
            #{$type}-top: $size * $spacing-base-size;
            #{$type}-bottom: $size * $spacing-base-size;
        }
    }

    //.mt-1{margin-top:1rem}
    @each $directionKey, $direction in $spacing-direction {
        @each $sizeKey, $size in $spacing-sizes {
            .#{$typeKey}#{$directionKey}-#{$sizeKey} {
                #{$type}-#{$direction}: $size * $spacing-base-size;
            }
        }
    }
}
```

这里用到了三重循环可能不好理解，如果你觉得有点绕，建议补充 [ sass ](https://www.sass.hk/) 的知识。

### 编译后的样式

```
.m-1{
    margin:0.25rem;
}
.p-1{
    padding:0.25rem;
}
...
.mx-1{
    margin-left:0.25rem;
    margin-right:0.25rem;
}
..my-1{
    margin-top:0.25rem;
    margin-bottom:0.25rem;
}
...
.mt-1{
    margin-top:0.25rem;
}
.pt-1{
    padding-top:0.25rem;
}
```

初次之外我们还可以对文字对齐 ext-align 设置 left、right、center 进行循环输出特定 class。

## 文字对齐

```css
//文字对齐
@each $var in (left, right, center) {
    .text-#{$var} {
        text-align: $var !important;
    }
}
```

再比如文字大小 font-size

```css
//字体尺寸
$base-font-size: 1rem;
$font-sizes: (
    xxs: 0.6154,
    //8px
    xs: 0.7692,
    //10px
    sm: 0.9231,
    //12px
    md: 1,
    //13px
    lg: 1.0769,
    //14px
    xl: 1.2308,
    //16px
    xll: 1.8462 //24px,,
);

//字体尺寸
@each $sizeKey, $size in $font-sizes {
    .fs-#{$sizeKey} {
        font-size: $size * $base-font-size;
    }
}
```

可以生成的工具样式还有很多，比如边框宽度、边框颜色、弹性布局的对齐方式等等，这里就不一一举例了。
