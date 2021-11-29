---
title: sass继承
---

选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。通过@extend 语法实现。

```scss
style {
    font-size: 30px;
    font-style: italic;
}

h2 {
    color: #787878;
    @extend .style;
}
.container {
    @extend h2;
}
```

编译后的 css 代码如下

```css
.style,
h2,
.container {
    font-size: 30px;
    font-style: italic;
}

h2,
.container {
    color: #787878;
}
```

使用继承可以很好的简化我们的 css 代码。
