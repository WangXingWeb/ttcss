---
title: js反转字符串
---

## 方法一：转化为数组利用的数组的 reverse 方法

```javascript
var str = '123456'
var newStr = str.split('').reverse().join('')
console.log(newStr)
```

## 方法二：倒序循环遍历

```javascript
var str = '123456'
var newStr = ''
for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
}
console.log(newStr)
```
