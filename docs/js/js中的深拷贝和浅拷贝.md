---
title: js中的深拷贝和浅拷贝
---

## 浅拷贝

一般指的是把对象的第一层拷贝到一个新对象上去

```javascript
var a = { count: 1, deep: { count: 2 } }
var b = Object.assign({}, a)
// 或者
var b = { ...a }
```

## 深拷贝

一般需要借助递归实现，如果对象的值还是个对象，要进一步的深入拷贝，完全替换掉每一个复杂类型的引用。

```javascript
var deepCopy = (obj) => {
    var ret = {}
    for (var key in obj) {
        var value = obj[key]
        ret[key] = typeof value === 'object' ? deepCopy(value) : value
    }
    return ret
}
```

## 浅拷贝和深拷贝的区别

```javascript
// 浅拷贝
var a = { count: 1, deep: { count: 2 } }
var b = {...a}

a.deep.count = 5
b.deep.count // 5
复制代码var a = { count: 1, deep: { count: 2 } }
var b = deepCopy(a)
a.deep.count = 5
b.deep.count // 2
```
