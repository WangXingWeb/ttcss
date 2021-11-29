---
title: vue遍历对象属性
---

## vue遍历数组
```html
<div class="d-flex" v-for="(item, index) in arr" :key="index">
    {{item}}
</div>
```

## vue遍历对象属性
```html
<div class="d-flex" v-for="(value, key, index) obj" :key="index">
    {{ key }} : {{ value }}
</div>
```