---
title: 封装支持v-model的组件
---

## v-model原理

v-model是一个语法糖

```vue
<input v-model="something">
//相当于下面
<input v-bind:value="something" v-on:input="something=$event.target.value">
```
所以v-model相当于给子组件传递了value属性，并绑定了一个事件供子组件使用$emit触发，在这里将子组件中改变后的值赋值给父组件的value，从而改变父组件的值，由此实现双向绑定的效果.

## 实现计步器组件
现在我们利用上面得出的结论实现一个支持v-model的计步器

<<< @/docs/.vuepress/public/assets/vueDemo/StepNumber.vue

父组件中使用
```vue
<StepMumber v-model="step" />
 <!-- 相当于下面这样 -->
<StepMumber :value="step" @input="(val) => (step = val)" />
```

## 使用新特性model重构

::: tip
vue2.2.0以后新增了model属性
:::

::: tip
一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件，但是像单选框、复选框等类型的输入控件可能会将 value attribute 用于不同的目的。model 选项可以用来避免这样的冲突：
:::


这个属性允许我们指定那个属性用来双向绑定，而不再是必须将参数定义为value，同样触发的事件也可以自定义，不在局限于input,check,change,

```javascript
model: {
    prop: "step",    //指定双向绑定的参数名
    event: "update", //触发返回值的事件名
},
```
下面是用model属性重构的计步器组件

<<< @/docs/.vuepress/public/assets/vueDemo/StepNumberNew.vue

使用新特性model后，感觉更灵活，代码可读性更高，同时还不与系统自带的控件的默认事件冲突。个人推荐2.2.0版本之后就使用model这种写法就可以了。