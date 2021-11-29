---
title: a++和++a的区别
---

```javascript
let a = 1
let b = a++
console.log(b) //1
```

上面的代码可以看出`a++`是先返回后`+1`,也就是先将 a 的值赋值给 b，然后`a=a+1`

```javascript
let a = 1
let b = ++a
console.log(b) //2
```

`++a`的过程是相反的，先执行`a=a+1`,然后将 a 的值赋值给 b，所以得到的 b 的值为 2

同样`a--`和`–a`也是同样的情况

```javascript
let a = 1
let b = a--
console.log(b) //1
```

```javascript
let a = 1
let b = --a
console.log(b) //0
```
