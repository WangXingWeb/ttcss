---
title: JS事件模型
---

## 事件模型

### DOM0 级模型

又称为原始事件模型，在该模型中，事件不会传播，即没有事件流的概念。事件绑定监听函数比较简单, 有两种方式:
HTML 代码中直接绑定:

```html
<input type="button" onclick="fun()" />
```

通过 JS 代码指定属性值:

```javascript
var btn = document.getElementById('.btn')
btn.onclick = fun
```

移除监听函数：

```javascript
btn.onclick = null
```

这种方式所有浏览器都兼容，但是逻辑与显示并没有分离。

### IE 事件模型

IE 事件模型共有两个过程:

-   事件处理阶段(target phase)。事件到达目标元素, 触发目标元素的监听函数。
-   事件冒泡阶段(bubbling phase)。事件从目标元素冒泡到 document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

事件绑定监听函数的方式如下:

```javascript
attachEvent(eventType, handler)
```

事件移除监听函数的方式如下:

```javascript
detachEvent(eventType, handler)
```

参数说明:

-   eventType 指定事件类型(注意加 on)
-   handler 是事件处理函数
    Example:

```javascript
var btn = document.getElementById('.btn');
btn.attachEvent(‘onclick’, showMessage);
btn.detachEvent(‘onclick’, showMessage);
```

### DOM2 级模型

属于 W3C 标准模型，现代浏览器(除 IE6-8 之外的浏览器)都支持该模型。在该事件模型中，一次事件共有三个过程:

-   事件捕获阶段(capturing phase)。事件从 document 一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行。
-   事件处理阶段(target phase)。事件到达目标元素, 触发目标元素的监听函数。
-   事件冒泡阶段(bubbling phase)。事件从目标元素冒泡到 document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行。

事件绑定监听函数的方式如下:

```javascript
addEventListener(eventType, handler, useCapture)
```

事件移除监听函数的方式如下:

```javascript
removeEventListener(eventType, handler, useCapture)
```

Example:

```javascript
var btn = document.getElementById('.btn');
btn.addEventListener(‘click’, showMessage, false);
btn.removeEventListener(‘click’, showMessage, false);
```

参数说明:

-   eventType 指定事件类型(不要加 on)
-   handler 是事件处理函数
-   useCapture 是一个 boolean 用于指定是否在捕获阶段进行处理，一般设置为 false 与 IE 浏览器保持一致。

## 事件流

事件流有三个阶段： 事件捕获阶段，目标阶段，事件冒泡阶段。

<img class="custom" :src="$withBase('/assets/img/event.png')" />

-   捕获阶段是指事件响应从最外层的 Window 开始，逐级向内层前进，直到具体事件目标元素。在捕获阶段，不会处理响应元素注册的冒泡事件。
-   目标阶段指触发事件的最底层的元素，如上图中的。
-   冒泡阶段与捕获阶段相反，事件的响应是从最底层开始一层一层往外传递到最外层的 Window。

## Event 对象常见应用

-   event.preventDefault()
    阻止默认事件
    🚩[详细 api](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault)

-   event.stopPropagation()
    阻止冒泡
    🚩[详细 api](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopPropagation)

-   event.stopImmediatePropagation()
    阻止监听同一事件的其他事件监听器被调用。
    🚩[详细 api](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/stopImmediatePropagation)
    如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了 event.stopImmediatePropagation() 方法，则当前元素剩下的监听函数将不会被执行。

-   event.currentTarget
    当事件沿着 DOM 触发时事件的当前目标。它总是指向事件绑定的元素。
-   event.target
    事件触发的元素。

使用事件代理(委托)往往会用到这两个属性。
比如有十个按钮，我们不想给每个按钮都绑定一次 click 事件，我们可以给十个按钮的父容器绑定 click 事件，自父容器的 click 事件中 currentTarget 就是父容器，target 就是被点击的按钮。

## 事件类型

-   UI (User Interface) 事件，当用户与页面上的元素交互时触发
    load、unload、error、select、resize、scroll

-   焦点事件，在页面获得或失去焦点时触发
    blur、focusout 失去焦点 focus、focusin 获得焦点

-   鼠标事件，用户通过鼠标在页面执行操作时触发
    click、dbclick、mousedown、mouseup
    mouseenter、mouserleave
    mousemove
    mouseout、mouseover

-   点击和双击事件触发的顺序如下
    mousedown mouseup click mousedown mouseup dbclick

-   滚轮事件，当使用鼠标滚轮操作时触发
    mousewheel

-   文本事件，在文档中输入文本时触发
    textInput 当用户在可编辑区域中输入字符时，就会触发这个事件

-   键盘事件，当用户通过键盘在页面上执行操作时触发

    keydown 按下键盘任意键时触发，不松开，则一直触发 keypress 按下键盘上的字符键时触发，不松开，则一直触发 Keyup 用户释放键盘上的建时触发

-   HTML5 事件
    contextmenu 事件：单价鼠标右键可以调出上下文菜单
    beforeunload 事件：在浏览器卸载页面之前触发
    DOMContentLoad 事件：在形成完整的 DOM 树之后就会触发。
    readystatechange 事件：提供与文档加载状态有关的信息
    pageshow 和 pagehide 事件：页面显示和隐藏时触发
    hashchange 事件 : hash 改变时触发
