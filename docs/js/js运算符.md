---
title: js运算符
---

## ||运算符

只要“||”前面为 false,不管“||”后面是 true 还是 false，都返回“||”后面的值。
只要“||”前面为 true,不管“||”后面是 true 还是 false，都返回“||”前面的值。

```javascript
let a = null || 'abc'
console.log(a) //abc

let b = 'abc' || 'edf'
console.log(b) //abc
```

我们可以通过这个运算符给参数设置默认值

```javascript
function add(num1, num2) {
    num2 = num2 || 1
    return num1 + num2
}
console.log(add(3)) //4
console.log(add(3, 4)) //7
```

上面的 add 方法我们如果只传一个数值，就会自加一，如果传两个数值就会将两个数值求和。

## &&运算符

只要“&&”前面是 false，无论“&&”后面是 true 还是 false，结果都将返“&&”前面的值;
只要“&&”前面是 true，无论“&&”后面是 true 还是 false，结果都将返“&&”后面的值;

```javascript
let a = null && 'abc'
console.log(a) //null

let b = 'abc' && 'edf'
console.log(b) //edf
```
