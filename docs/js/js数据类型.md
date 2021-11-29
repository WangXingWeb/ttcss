---
title: js数据类型
---

最新的 ECMAScript 标准定义了 7 中数据类型

## 原始类型

-   Boolean
-   Null
-   Undefined
-   Number
-   String
-   Symbol
    ES6 新增

## 引用类型

-   Object
-   Array
-   Function

::: tip
需要注意的是 Array 和 Function 都是一种特殊的 Object 对象。
:::

## typeof 操作符

可以使用 typeof 操作符来查看 JavaScript 变量的数据类型。

```javascript
typeof 'John' // 返回 string
typeof 3.14 // 返回 number
typeof NaN // 返回 number
typeof false // 返回 boolean
typeof [1, 2, 3, 4] // 返回 object
typeof { name: 'John', age: 34 } // 返回 object
typeof new Date() // 返回 object
typeof function () {} // 返回 function
typeof myCar // 返回 undefined (如果 myCar 没有声明)
typeof null // 返回 object
```

请注意：

-   NaN 的数据类型是 number
-   数组(Array)的数据类型是 object
-   日期(Date)的数据类型为 object
-   null 的数据类型是 object
-   未定义变量的数据类型为 undefined
-   如果对象是 JavaScript Array 或 JavaScript Date ，我们就无法通过 typeof 来判断他们的类型，因为都是 返回 object。

## 类型转化

js 并没有严格的数据类型，也就是说我们声明一个变量时并不需要去指定它是什么类型的数据。

### 显示类型转化

1. Number 函数

-   原始类型转换为数字

| 原始值    | 转化后的值                                                               |
| --------- | ------------------------------------------------------------------------ |
| 数值      | 转换后还是原来的值                                                       |
| 字符串    | 如果可以被解析为数值，则转换为相应的市值，否则得到 NaN。空字符串转换为 0 |
| 布尔值    | true 转成 1，false 转为 0                                                |
| undefined | 转化为 NaN                                                               |
| null      | 转化为 0                                                                 |

-   引用类型转换为数字类型
    先调用对象自身的 valueOf 方法，如果该方法返回原始类型的值（数值、字符串和布尔值），则直接对该值使用 Number 方法，不再进行后续步骤。
    如果 valueOf 方法返回复合类型的值，再调用对象自身的 toString 方法，如果 toString 方法返回原始类型的值，则对该值使用 Number 方法，不再进行后续步骤。
    如果 toString 方法韩惠的是复合类型的值，则报错。

2. String 函数

-   原始类型转化为 String

| 原始值    | 转化后的值                        |
| --------- | --------------------------------- |
| 数值      | 转为相应的字符串                  |
| 字符串    | 转化后还是原来的字符串            |
| 布尔值    | true 转成"true",false 转为"false" |
| undefined | 转化为"undefined"                 |
| null      | 转化为"null"                      |

-   引用类型转换
    先调用 toString 方法，如果 toString 方法返回的是原始类型的值，则对该值使用 String 方法，不再进行一下步骤。
    如果 toString 方法返回的是复合类型的值，再调用 valueOf 方法，如果 valueOf 方法返回的是原始类型的值，则对该值使用 String 方法，不再进行一下步骤。
    如果 valueOf 方法返回的是复合类型的值，则报错。

3 Boolean 函数

-   原始类型转换
    undefined、null、-0、+0、NaN、''(空字符串)转化为 false，其它的一律为 true

### 隐式类型转换

-   四则运算
-   判断语句
-   Native 调用
