---
title: color
---

## 文本颜色

| class            | style              |
| :--------------- | :----------------- |
| text-transparent | color:transparent; |
| text-current     | color:currentColor |
| text-primary     | color: #1890ff     |
| text-success     | color: #52c41a     |
| text-warnning    | color: #faad14     |
| text-danger      | color: #f5222d     |
| text-border      | color: #d9d9d9     |
| text-white       | color: #ffffff     |
| text-black       | color: #000000     |

### 自定义颜色

ttcss 支持自定义颜色，你可以根据自己的项目需求更改样式配色

```scss
$colors: (
    transparent: transparent,
    current: currentColor,
    red: red,
    blue: blue
);
```

::: tip
别忘了 transparent 和 currentColor 这两个关键字
:::

### 自定义前缀

ttcss 所有的 class 前缀支持修改
ttcss 文本颜色默认前缀时`text`,如果你需要修改前缀只有重写`$text-color-prefix`变量名即

```scss
$text-color-prefix: c;
```

这样后续我们使用时需要使用的 class 就变成了`c-red,c-danger`

```html
<div class="c-red">我是红色字</div>
```

### 自定义开启

ttcss 支持自定义禁用某一类 class，如果某一类 class 你在开发中不会使用到，可以设置禁用这类 class，这样 sass 和 less 就不会不会编译生成相关的代码，可以帮助你压缩代码，更轻量化。

颜色相关的 class 是默认开启的，如果你想关闭整个 color 有关的 class，设置`$color-switch:false;` 这样文本颜色、背景色和深色模式的颜色都会被禁用 如果只想禁用文本颜色 class，设置`$text-color-switch:false;`即可。

```scss
$color-switch: false; //禁用整个color相关class
$text-color-switch: false; //单独禁用文本颜色
```

::: tip
上面已经将自定义类型、自定义前缀、自定义开启单独做了说明。ttcss 默认每个类型的 class 都支持上述的自定义规则，后续其他各类设置本文将直接使用表格列出所需修改的参数，不再单独说明。
:::

### 自定义参数

| 类型         |        参数        |                 默认值 |
| :----------- | :----------------: | ---------------------: |
| 颜色         |      $colors       |             见下图代码 |
| 颜色开关     |   $colors-switch   |                   true |
| 文本颜色前缀 | $text-color-prefix |                   text |
| 文本颜色开关 | $text-color-switch | 继承$color-switch:true |

```scss
$colors: (
    'transparent': transparent,
    'current': currentColor,
    'primary': #1890ff,
    'success': #52c41a,
    'warnning': #faad14,
    'danger': #f5222d,
    'border': #d9d9d9,
    'white': #ffffff,
    'black': #000000
) !default;
```

## 背景颜色

| class          | style                         |
| :------------- | :---------------------------- |
| bg-transparent | background-color:transparent; |
| bg-current     | background-color:currentColor |
| bg-primary     | background-color: #1890ff     |
| bg-success     | background-color: #52c41a     |
| bg-warnning    | background-color: #faad14     |
| bg-danger      | background-color: #f5222d     |
| bg-border      | background-color: #d9d9d9     |
| bg-white       | background-color: #ffffff     |
| bg-black       | background-color: #000000     |

### 自定义

| 类型       | 参数             |                 默认值 |
| :--------- | :--------------- | ---------------------: |
| 背景色前缀 | $bg-color-prefix |                     bg |
| 背景色开关 | $bg-color-switch | 继承$color-switch:true |

## 透明文本颜色

| class            | style                    |
| :--------------- | :----------------------- |
| text-primary-10  | color:rgba(#1890ff, 10%) |
| text-primary-20  | color:rgba(#1890ff, 20%) |
| text-primary-30  | color:rgba(#1890ff, 30%) |
| text-primary-40  | color:rgba(#1890ff, 40%) |
| text-primary-50  | color:rgba(#1890ff, 50%) |
| text-primary-60  | color:rgba(#1890ff, 60%) |
| text-primary-70  | color:rgba(#1890ff, 70%) |
| text-primary-80  | color:rgba(#1890ff, 80%) |
| text-primary-90  | color:rgba(#1890ff, 90%) |
| text-success-10  | color: rgba(#52c41a,10%) |
| text-success-20  | color: rgba(#52c41a,20%) |
| text-success-30  | color: rgba(#52c41a,30%) |
| text-success-40  | color: rgba(#52c41a,40%) |
| text-success-50  | color: rgba(#52c41a,50%) |
| text-success-60  | color: rgba(#52c41a,60%) |
| text-success-70  | color: rgba(#52c41a,70%) |
| text-success-80  | color: rgba(#52c41a,80%) |
| text-success-90  | color: rgba(#52c41a,90%) |
| text-warnning-10 | color: rgba(#faad14,10%) |
| text-warnning-20 | color: rgba(#faad14,20%) |
| text-warnning-30 | color: rgba(#faad14,30%) |
| text-warnning-40 | color: rgba(#faad14,40%) |
| text-warnning-50 | color: rgba(#faad14,50%) |
| text-warnning-60 | color: rgba(#faad14,60%) |
| text-warnning-70 | color: rgba(#faad14,70%) |
| text-warnning-80 | color: rgba(#faad14,80%) |
| text-warnning-90 | color: rgba(#faad14,90%) |
| text-danger-10   | color: rgba(#f5222d,10%) |
| text-danger-20   | color: rgba(#f5222d,20%) |
| text-danger-30   | color: rgba(#f5222d,30%) |
| text-danger-40   | color: rgba(#f5222d,40%) |
| text-danger-50   | color: rgba(#f5222d,50%) |
| text-danger-60   | color: rgba(#f5222d,60%) |
| text-danger-70   | color: rgba(#f5222d,70%) |
| text-danger-80   | color: rgba(#f5222d,80%) |
| text-danger-90   | color: rgba(#f5222d,90%) |
| text-border-10   | color: rgba(#d9d9d9,10%) |
| text-border-20   | color: rgba(#d9d9d9,20%) |
| text-border-30   | color: rgba(#d9d9d9,30%) |
| text-border-40   | color: rgba(#d9d9d9,40%) |
| text-border-50   | color: rgba(#d9d9d9,50%) |
| text-border-60   | color: rgba(#d9d9d9,60%) |
| text-border-70   | color: rgba(#d9d9d9,70%) |
| text-border-80   | color: rgba(#d9d9d9,80%) |
| text-border-90   | color: rgba(#d9d9d9,90%) |
| text-white-10    | color: rgba(#ffffff,10%) |
| text-white-20    | color: rgba(#ffffff,20%) |
| text-white-30    | color: rgba(#ffffff,30%) |
| text-white-40    | color: rgba(#ffffff,40%) |
| text-white-50    | color: rgba(#ffffff,50%) |
| text-white-60    | color: rgba(#ffffff,60%) |
| text-white-70    | color: rgba(#ffffff,70%) |
| text-white-80    | color: rgba(#ffffff,80%) |
| text-white-90    | color: rgba(#ffffff,90%) |
| text-black-10    | color: rgba(#000000,10%) |
| text-black-20    | color: rgba(#000000,20%) |
| text-black-30    | color: rgba(#000000,30%) |
| text-black-40    | color: rgba(#000000,40%) |
| text-black-50    | color: rgba(#000000,50%) |
| text-black-60    | color: rgba(#000000,60%) |
| text-black-70    | color: rgba(#000000,70%) |
| text-black-80    | color: rgba(#000000,80%) |
| text-black-90    | color: rgba(#000000,90%) |

### 自定义

| 类型               | 参数                       |                         默认值 |
| :----------------- | :------------------------- | -----------------------------: |
| 透明度禁用开关     | $opacify-color-switch      |         继承$color-switch:true |
| 透明度文本颜色开关 | $opacify-text-color-switch | 继承$opacify-color-switch:true |

::: tip
$opacify-color-switch 设置为 false 可以同时禁用透明度文本和背景色 class
:::

## 透明背景颜色

| class          | style                               |
| :------------- | :---------------------------------- |
| bg-primary-10  | background-color:rgba(#1890ff, 10%) |
| bg-primary-20  | background-color:rgba(#1890ff, 20%) |
| bg-primary-30  | background-color:rgba(#1890ff, 30%) |
| bg-primary-40  | background-color:rgba(#1890ff, 40%) |
| bg-primary-50  | background-color:rgba(#1890ff, 50%) |
| bg-primary-60  | background-color:rgba(#1890ff, 60%) |
| bg-primary-70  | background-color:rgba(#1890ff, 70%) |
| bg-primary-80  | background-color:rgba(#1890ff, 80%) |
| bg-primary-90  | background-color:rgba(#1890ff, 90%) |
| bg-success-10  | background-color: rgba(#52c41a,10%) |
| bg-success-20  | background-color: rgba(#52c41a,20%) |
| bg-success-30  | background-color: rgba(#52c41a,30%) |
| bg-success-40  | background-color: rgba(#52c41a,40%) |
| bg-success-50  | background-color: rgba(#52c41a,50%) |
| bg-success-60  | background-color: rgba(#52c41a,60%) |
| bg-success-70  | background-color: rgba(#52c41a,70%) |
| bg-success-80  | background-color: rgba(#52c41a,80%) |
| bg-success-90  | background-color: rgba(#52c41a,90%) |
| bg-warnning-10 | background-color: rgba(#faad14,10%) |
| bg-warnning-20 | background-color: rgba(#faad14,20%) |
| bg-warnning-30 | background-color: rgba(#faad14,30%) |
| bg-warnning-40 | background-color: rgba(#faad14,40%) |
| bg-warnning-50 | background-color: rgba(#faad14,50%) |
| bg-warnning-60 | background-color: rgba(#faad14,60%) |
| bg-warnning-70 | background-color: rgba(#faad14,70%) |
| bg-warnning-80 | background-color: rgba(#faad14,80%) |
| bg-warnning-90 | background-color: rgba(#faad14,90%) |
| bg-danger-10   | background-color: rgba(#f5222d,10%) |
| bg-danger-20   | background-color: rgba(#f5222d,20%) |
| bg-danger-30   | background-color: rgba(#f5222d,30%) |
| bg-danger-40   | background-color: rgba(#f5222d,40%) |
| bg-danger-50   | background-color: rgba(#f5222d,50%) |
| bg-danger-60   | background-color: rgba(#f5222d,60%) |
| bg-danger-70   | background-color: rgba(#f5222d,70%) |
| bg-danger-80   | background-color: rgba(#f5222d,80%) |
| bg-danger-90   | background-color: rgba(#f5222d,90%) |
| bg-border-10   | background-color: rgba(#d9d9d9,10%) |
| bg-border-20   | background-color: rgba(#d9d9d9,20%) |
| bg-border-30   | background-color: rgba(#d9d9d9,30%) |
| bg-border-40   | background-color: rgba(#d9d9d9,40%) |
| bg-border-50   | background-color: rgba(#d9d9d9,50%) |
| bg-border-60   | background-color: rgba(#d9d9d9,60%) |
| bg-border-70   | background-color: rgba(#d9d9d9,70%) |
| bg-border-80   | background-color: rgba(#d9d9d9,80%) |
| bg-border-90   | background-color: rgba(#d9d9d9,90%) |
| bg-white-10    | background-color: rgba(#ffffff,10%) |
| bg-white-20    | background-color: rgba(#ffffff,20%) |
| bg-white-30    | background-color: rgba(#ffffff,30%) |
| bg-white-40    | background-color: rgba(#ffffff,40%) |
| bg-white-50    | background-color: rgba(#ffffff,50%) |
| bg-white-60    | background-color: rgba(#ffffff,60%) |
| bg-white-70    | background-color: rgba(#ffffff,70%) |
| bg-white-80    | background-color: rgba(#ffffff,80%) |
| bg-white-90    | background-color: rgba(#ffffff,90%) |
| bg-black-10    | background-color: rgba(#000000,10%) |
| bg-black-20    | background-color: rgba(#000000,20%) |
| bg-black-30    | background-color: rgba(#000000,30%) |
| bg-black-40    | background-color: rgba(#000000,40%) |
| bg-black-50    | background-color: rgba(#000000,50%) |
| bg-black-60    | background-color: rgba(#000000,60%) |
| bg-black-70    | background-color: rgba(#000000,70%) |
| bg-black-80    | background-color: rgba(#000000,80%) |
| bg-black-90    | background-color: rgba(#000000,90%) |

### 自定义

| 类型               | 参数                     |                         默认值 |
| :----------------- | :----------------------- | -----------------------------: |
| 透明度背景颜色开关 | $opacify-bg-color-switch | 继承$opacify-color-switch:true |

## 深色模式

以上的文本颜色、背景颜色和透明度颜色，ttcss 都设置了对应的深色模式下的样式，只需要加`dark:`变体即可

下面表格只列举部分 class，其它的以此类推

| class                 | style                                                  |
| :-------------------- | :----------------------------------------------------- |
| dark:text-transparent | .dark .dark:text-transparent{color:transparent;}       |
| dark:text-primary     | .dark .dark:text-primary{color: #1890ff;}              |
| dark:text-success     | .dark .dark:text-success{color: #52c41a;}              |
| dark:bg-danger        | .dark .dark:bg-danger{background-color: #f5222d;}      |
| dark:bg-white         | .dark .dark:bg-white{background-color: #ffffff;}       |
| dark:bg-black         | .dark .dark:bg-black{background-color: #000000;}       |
| dark:text-primary-80  | .dark .dark:text-primary-80{color:rgba(#1890ff, 80%);} |
| dark:text-black-50    | .dark .dark:text-black-50 {color: rgba(#000000,50);}   |

### dark 变体被占用处理

在实际开发过程中，我们难免会遇到 class dark 被占用的情况，有可能是其他的样式组件里面使用了.dark 样式，又或者我们自己已经定义过.dark 的样式，这样会导致我们的深色模式错乱，所以 ttcss 支持自定义变体名，你只需要重写`$dark-alias`变量名即可。

```scss
$dark-alias: 'TTdark';
```

这样我们完成了深色模式变体的自定义，需要注意的是这时我们在使用 dark 的地方全都换换成自定义的变体，这里就是`TTdark`

```html
<body class="TTdark">
    <div class="TTdark:bg-danger">在深色模式下我是红色背景</div>
</body>
```

### 深色模式自定义

| 类型               | 参数                            |                         默认值 |
| :----------------- | :------------------------------ | -----------------------------: |
| 变体名             | $dark-alias                     |                           dark |
| 深色模式文本色开关 | $dark-text-color-switch         |         继承$text-color-switch |
| 深色模式背景色开关 | $dark-bg-color-switch           |           继承$bg-color-switch |
| 深色模式透明文本色 | $dark-opacify-text-color-switch | 继承$opacify-text-color-switch |
| 深色模式透明背景色 | $dark-opacify-bg-color-switch   |   继承$opacify-bg-color-switch |
