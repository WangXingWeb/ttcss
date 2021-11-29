---
title: watch监听器
---

vue 中的监听器 watch 最常用的两种写法，一种是 function，一种是对象形式。

## function 形式

此方法有两个形参，第一个是最新的值，第二个是变化前的值；

> 注意这里第一次传入参数，函数是不会触发的

```javascript
watch:{
    title(val,oldVal){
        console.log(val, oldVal);
    }
}
```

这里的方法也可以使用 methods 定义的函数

```javascript
watch: {
    name: "nameChange"
},
methods: {
    nameChange(val, oldVal) {
        console.log(val, oldVal);
    }
},
```

这样做的好处是可以多个监听，复用同一个方法

```javascript
watch: {
    name: "paramChange",
    title: "paramChange",
},
methods: {
    paramChange(val, oldVal) {
        console.log(val, oldVal);
    }
},
```

## 对象的形式

对象包含三个属性

-   handler 绑定一个方法，参数值发生改变后回调用此方法
    > 同样可以使用 methods 中定义的方法

```javascript
watch: {
    name: {
        handler(val, oldVal) {
            console.log(val, oldVal);
        }
    }，
    title: {
        handler:'paramChange'
    }
},
methods: {
    paramChange(val, oldVal) {
        console.log(val, oldVal);
    }
},
```

-   deep 其值 true 或者 false，是否深度监听(该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深,监听数组的变更不需要这么做)

```javascript
watch: {
    user: {
        handler(val, oldVal) {
            console.log(val, oldVal);
        },
        deep: true
    }
}
```

这里当我们改变 user.name 时，handler 也会被触发，反之 deep 为 false，handler 不会被触发

-   immediate 在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调

```javascript
watch: {
    name: {
        handler(val, oldVal) {
            console.log(val, oldVal);
        },
        immediate: true
    }
}
```

```html
<prop-component name="漫卷" />
```

这里我们并没用改变 name 的值，但 handler 会被直接调用一次，输出

```ssh
漫卷 undefined
```

因为 name 并没有被改变过，所以 oldVal 是 undefined
这个属性还是非常有用的，比如我们需要使用参数最初的值来做一些处理，就可以设置 immediate: true 来拿到最初的参数值。

## 数组形式

除此之外监听器也可以传入一个回调数组，property 发生它们会被逐一调用

```javascript
watch: {
    name: [
        (val, oldVal) => {
            console.log(val, oldVal, '1')
        },
        function fun(val, oldVal) {
            console.log(val, oldVal, '2')
        },
        {
            handler(val, oldVal) {
                console.log(val, oldVal, '3')
            },
            immediate: true
        }
    ]
}
```

## 监听对象的属性

我们也可以直接监听某个对象的某个属性

```javascript
watch: {
    "user.name": {
      handler(val, oldVal) {
        console.log(val, oldVal);
      }
    },
    "user.age": (val, oldVal) => {
      console.log(val, oldVal);
    }
  },
```
