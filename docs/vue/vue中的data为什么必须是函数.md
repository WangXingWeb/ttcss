---
title: vue中的data为什么必须是函数.
---

## 不写成函数会怎么样

我们先看一下不写成函数会发生什么，
首先vue是不允许我们直接返回一个对象的，但我们可以欺骗一下vue，让他以为我们写了一个函数

```vue
<template>
  <div>
    <div>{{ num }}</div>
    <el-button @click="add">add</el-button>
  </div>
</template>
<script>
let data = {
  num: 1,
};
export default {
  data() {
    return data;
  },
  methods: {
    add() {
      this.num++;
    },
  },
};
</script>
```
现在我们在父组件引用我们这个组件，

```vue
<template>
  <div>
    <test-data />
    <test-data />
  </div>
</template>

<script>
import TestData from "./testData.vue";
export default {
  components: {
    testData: () => import("./testData.vue"),
  },
};
</script>
```
然后得到下面的渲染结果

<img class="custom" :src="$withBase('/assets/img/testData.png')" />

这时我们会发现一个问题，如果我们点击按钮给num+1，另外一个组件中的num也被改变了，这样就失去了组件化的意义了，那么是什么原因造成的呢？

## 原因分析

先看以下代码

```javascript
let data = { num: 1 };
let vm1 = {
    data: data,
};
let vm2 = {
    data: data,
};
vm1.data.num = 2;
console.log(vm2.data.num); //2
```
上面的代码，vm1和vm2的data应用的都是data的地址，所以这里改变data中的num,vm1和vm2都会发生改变

然后我们改为function写法

```javascript
let data = function() {
    return { num: 1 };
};
let vm1 = {
    data: data(),
};
let vm2 = {
    data: data(),
};
vm1.data.num = 2;
console.log(vm2.data.num); //1
```
这里vm1和vm2中的data应用的就是经过data方法创造出来的新对象，所以这里vm1.data和vm2.data没有关联，这时改变`vm1.data.num`就对`vm2.data.num`没有影响了。



