---
title: 特殊的NaN
---

## NaN

NaN 全称是 Not-A-Number，不是一个数字。 在 JavaScript 中，整数和浮点数都统称为 Number 类型。
NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字。

当脚本尝试把一些非数字当做数字进行处理，却无法得到数字时，其返回值就是 NaN。比如拿一个整数乘以一个字符串，结果就是 NaN
NaN 和任何数据比较，永远返回 false
任何与 NaN 进行运算的结果均为 NaN
NaN 不与任何值相等，包括自身，它属于 Number 类型

一旦程序中出现：NaN,肯定进行了非法的运算操作，如：alert('200px'-100);

## isNaN

我们可以使用全局函数 isNaN()来判断一个数值是不是一个非数字（并不是用来判断是不是 NaN 这个值）
isNaN()函数能够检测其参数是否为一个“数字”，是数字返回 false，非数字返回为 true

```javascript
alert(isNaN(100)) // false
alert(isNaN('你好')) //true
alert(isNaN('200')) //true   此'200'为字符串类型
```

## 如何一个值是否为 NaN

-   方法一：将 isNaN()和 typeof 结合来判断

```javascript
function isValueNaN(value) {
    return typeof value === 'number' && isNaN(value)
}
```

-   方法二：值是否与本身不相等（NaN 是唯一有这样特征的值）

```javascript
function isValueNaN(value) {
    return value !== value
}
```
