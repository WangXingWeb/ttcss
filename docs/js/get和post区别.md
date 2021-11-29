---
title: get和post区别
---

-   get 在浏览器的回退时是无害的，而 post 会再次提交请求
-   get 产生的 url 地址可以被收藏，而 post 不可以
-   get 请求会被浏览器主动缓存，而 post 不会，除非手动设置
-   get 请求只能进行 URL 编码，而 post 支持多种编码方式
-   get 请求参数会被完整保留在浏览器历史记录里，post 不会
-   get 在 url 传递参数的长度是有限的，post 没有限制
-   get 比 post 更不安全，因为参数直接暴露在 url 上，所以不能用来传递敏感信息。
-   get 参数通过 url 传递，post 放在 request body 中
