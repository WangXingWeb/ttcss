---
title: css盒模型
---

最近公司在招新人，安排我去面试。发现很多前端对盒模型理解很不到位，有的顺序说错了，有的四个部分说丢一个，知道盒模型不至一种的更少，知道如何设置盒模型的更是难得了，这里写一篇博客介绍一下盒模型基本知识。

<!-- more -->

所谓盒子模型（Box Model）就是把 HTML 页面中的元素看作是一个矩形的盒子，也就是一个盛装内容的容器。每个矩形都由元素的内容(content)、内边距（padding）、边框（border）和外边距（margin）组成（顺序由内向外）。

所有的文档元素（标签）都会生成一个矩形框，我们成为元素框（element box），它描述了一个文档元素再网页布局汇总所占的位置大小。因此，每个盒子除了有自己大小和位置外，还影响着其他盒子的大小和位置。

盒子模型有两种 第一种是 W3c 标准的盒子模型（标准盒模型） 、第二种 IE 标准的盒子模型（怪异盒模型）

## 标准盒模型

标准盒模型中 width 指的是内容区域 content 的宽度；height 指的是内容区域 content 的高度。
标准盒模型下盒子的大小 = content + padding + border + margin

<img class="custom" :src="$withBase('/assets/img/标准盒模型.jpeg')" />

## 怪异(IE)盒模型

怪异盒模型中的 width 指的是内容、边框、内边距总的宽度（content + padding + border）；height 指的是内容、内边距、边框总的高度

怪异盒模型下盒子的大小=width（content + padding + border) + margin

![怪异盒模型](/assets/img/ie盒模型.jpeg)

如何切换盒模型

# box-sizing

css3 新增的属性
box-sizing 属性定义如何计算一个元素的总宽度和总高度。
box-sizing 的属性值有下面三个：

| 属性值      | 说明                                                                                                                    |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| content-box | 默认值，标准盒子模型。 width 与 height 只包括内容的宽和高， 不包括边框（border），内边距（padding），外边距（margin）。 |
| border-box  | width 和 height 属性包括内容，内边距和边框，但不包括外边距。                                                            |
| inherit     | 指定 box-sizing 属性的值，应该从父元素继承                                                                              |

# 如何获取盒模型对应的宽高

1. dom.style.width/height
   只能拿到内联属性，局限性比较大
2. dom.currentStyle.width/height
   只有 ie 支持
3. window.getComputedStyle(dom).width/height
   🚩[查看 API 详解](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
4. dom.getBoundingClientRect().width/height
   🚩[查看 API 详解](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
