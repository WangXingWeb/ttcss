---
title: js数组去重
---

## 利用 ES6 Set 去重

```javascript
function unique(arr) {
    return Array.from(new Set(arr));
}
```

可以简写成

```javascript
function unique(arr) {
    return [...new Set(arr)];
}
```

> Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。

这种方式只能在 es6 中使用，无法去重引用类型的数据。

## 利用 for 嵌套 for，然后 splice 去重

```javascript
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1);
                j--; //删除一个必须做j--操作，否则连续的两个重复元素会漏掉
            }
        }
    }
    return arr;
}
```

也可以在内部循环中从末尾循环

```javascript
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length - 1; j > i; j--) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            }
        }
    }
    return arr;
}
```

## 利用 indexOf 去重

```javascript
function unique(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i]);
        }
    }
    return array;
}
```

# 利用 includes

与 indexOf 相似，includes 是 es6 新增的方法，不同的是 includes 能够失败 NaN

```javascript
function unique(arr) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array;
}
```

## 利用 sort()排序后去重

```javascript
function unique(arr) {
    arr = arr.sort();
    var arrry = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
```

# 利用对象的属性不能相同的特点进行去重

```javascript
function unique(arr) {
    var obj = {};
    var array = [];
    arr.forEach(function (a) {
        if (!obj[a]) {
            obj[a] = a;
            array.push(a);
        }
    });
    return array;
}
```

## 利用 hasOwnProperty

```javascript
function unique(arr) {
    var obj = {};
    return arr.filter(function (item, index, arr) {
        console.log(obj);
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
    });
}
```

## 利用 Map 数据结构去重

```javascript
function arrayNonRepeatfy(arr) {
    let map = new Map();
    let array = new Array(); // 数组用于返回结果
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            // 如果有该key值
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false); // 如果没有该key值
            array.push(arr[i]);
        }
    }
    return array;
}
```

## 利用 reduce+includes

```javascript
function unique(arr) {
    return arr.reduce((prev, cur) => (prev.includes(cur) ? prev : [...prev, cur]), []);
}
```
