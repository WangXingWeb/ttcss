---
title: ES6笔记
---

## let 和 var

-   var 可以重复声明，let 不可以重复声明，可以防止变量被污染
-   let 块级作用域，var 存在变量提升

## class

-   `class`只是一个语法糖，本质还是用构造函数和原型链实现的
-   每个`class`类中都有一个构造器，每当`new`这个类时，必须先执行这个构造器函数。
-   如果没有指定构造器函数会执行默认的构造器函数
-   实例属性：通过实例访问的属性
-   静态属性：通过`Class`类名直接访问的属性
    通过`static`关键字指定

```javascript
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log('hello,I am' + this.name)
    }
    static info = 'animal'
}
```

### extends

```javascript
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class Chinese extends Person {}
const a1 = new Chinese('张三', 22)
console.log(a1)
```

## super

子类通过`extends`继承了父类，那么子类的`constructor`中必须先调用`super()`(父类构造器的引用)

```javascript
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
class Chinese extends Person {
    constructor(name, age, nationality) {
        super(name, age)
        this.nationality = nationality
    }
}
const a1 = new Chinese('张三', 22, '蒙古族')
console.log(a1)
```
