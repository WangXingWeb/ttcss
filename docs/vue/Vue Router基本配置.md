---
title: Vue Router基本配置
---

Vue Router 是 [Vue.js](http://cn.vuejs.org/) 官方的路由管理器。

下面是一个配置 vue router 的 demo

main.js 中

```javascript
import Vue from 'vue'
import App from './App.vue'

import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
```

通常我们会将 router 单独放到一个文件夹下，因为对于一个大型项目可能有很多个页面，全部放到一个 js 里会十分臃肿，可读性很差，不利于后期维护。所以建议分类或者分模块设置多个 router，然后统一引入到一个 router 中统一调用。

router/index.js 中

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

import homeRouter from '@/router/homeRouter.js'

Vue.use(VueRouter)

const routes = [
    homeRouter,
    {
        path: '/login', //登录
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: { isPublic: true }
    },
    {
        path: '/chat', //聊天页面
        name: 'Chat',
        component: () => import('@/views/chat/Chat.vue')
    },
    {
        path: '/chatInfo', //聊天信息页面
        name: 'ChatInfo',
        component: () => import('@/views/chat/ChatInfo.vue')
    },
    {
        path: '/createGroupChat', //创建群聊
        name: 'CreateGroupChat',
        component: () => import('@/views/chat/CreateGroupChat.vue')
    },
    {
        path: '/viewMember', //查看联系人
        name: 'ViewMember',
        component: () => import('@/views/chat/ViewMember.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
```

router/homeRouter.js

```javascript
export default {
    path: '/', //主页面
    name: 'Base',
    component: () => import('@/views/Base.vue'),
    redirect: '/home',
    children: [
        {
            path: '/home',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/contacts',
            component: () => import('@/views/Contacts.vue')
        },
        {
            path: '/workbench',
            component: () => import('@/views/Workbench.vue')
        },
        {
            path: '/mine',
            component: () => import('@/views/Mine.vue')
        }
    ]
}
```

app.vue

在 app.vue 中加入 router-view 就可以看到视图了。

```html
<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>
```
