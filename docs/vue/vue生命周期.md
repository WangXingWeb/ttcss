---
title: vue生命周期
---

<img class="custom" :src="$withBase('/assets/img/vue.png')" />

## beforeCreate

-   第一个生命周期钩子函数
-   这时 data 中的数据、methods 中的方法、$el 都获取不到
-   用的很少

## created

-   data 中的数据和 methods 中方法能够获取到了，$el 还没有，因为挂载还没有进行。
-   我们经常在这个里面进行 ajax 请求。

## beforeMount

当模版编译完成会执行此函数
此时模版结构还没有真正渲染到页面上，看不到真实的数据
this.$el 还是最基本也模版页面

## mounted

挂载完成，是组件创建阶段最后一个生命周期钩子函数
这里用户就可以看到真正的页面数据结构了
如果用到第三方 ui 插件可以在这里初始化插件

## beforeUpdate

-   数据已经更新，视图还未更新。
-   数据是新的，页面 ui 还是旧的。

## updated

页面已经完成更新，此时 data 和视图都是最新的。

## beforeDestroy

此时还未执行 destroy，组件即将被销毁。组件还是可以正常使用的。

## destroyed

组件已经销毁，data，methods 都不可用了
