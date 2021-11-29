---
title: hash模式与history模式的区别
---

随着前端应用的业务功能越来越复杂、用户对于使用体验的要求越来越高，单页应用（SPA）成为前端应用的主流形式。大型单页应用最显著特点之一就是采用前端路由系统，通过改变 URL，在不重新请求页面的情况下，更新页面视图。

“更新视图但不重新请求页面”是前端路由原理的核心之一，目前在浏览器环境中这一功能的实现主要有两种方式：

-   利用 URL 中的 hash（“#”）

-   利用 History interface 在 HTML5 中新增的方法

## hash 模式

hash（“#”）符号的本来作用是加在 URL 中指示网页中的位置：

```javascript
www.iwangxing.cn/index.html#aboutme
```

#符号本身以及它后面的字符称之为 hash，可通过 window.location.hash 属性读取。它具有如下特点：

-   hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中。它是用来指导浏览器动作的，对服务器端完全无用，因此，改变 hash 不会重新加载页面
-   可以为 hash 的改变添加监听事件：

```javascript
window.addEventListener('hashchange', funcRef, false)
```

-   每一次改变 hash（window.location.hash），都会在浏览器的访问历史中增加一个记录

利用 hash 的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了。

## history 模式

我们先介绍一下 H5 新推出的两个 api：pushState 与 replaceState

作用就是可以将 url 替换并且不刷新页面，好比挂羊头卖狗肉，http 并没有去请求服务器该路径下的资源，一旦刷新就会暴露这个实际不存在的“羊头”，显示 404。

那么如何去解决 history 模式下刷新报 404 的弊端呢，这就需要服务器端做点手脚，将不存在的路径请求重定向到入口文件（index.html），前后端联手，齐心协力做好“挂羊头卖狗肉”的完美特效。
