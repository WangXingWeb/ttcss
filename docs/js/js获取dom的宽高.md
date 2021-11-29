---
title: js获取dom的宽高
---

```html
<style>
    #element {
        background-color: aquamarine;
        width: 100px;
    }
</style>
<div id="element" style="height: 100px;"></div>
```
## Element.style.width/height

只能获取内联样式

```javascript
var ele = document.getElementById('element');
console.log(ele.style.width); // 空字符串
console.log(ele.style.height); // '100px'
```

## window.getComputedStyle(ele).width/height

可获取实时的style
> 功能与第二点相同，只存在于旧版本IE中(IE9以下)，除了做旧版IE兼容，就不要用它了。

```javascript
var ele = document.getElementById('element');
console.log(window.getComputedStyle(ele).width); // '100px'
console.log(window.getComputedStyle(ele).height); // '100px'
```

## Element.currentStyle.width/height
> 功能与第二点相同，只存在于旧版本IE中(IE9以下)，除了做旧版IE兼容，就不要用它了。

## Element.getBoundingClientRect().width/height
除了能够获取宽高，还能获取元素位置等信息

```javascript
var ele = document.getElementById('element');
console.log(ele.getBoundingClientRect().width); // 100
console.log(ele.getBoundingClientRect().height); // 100
```

