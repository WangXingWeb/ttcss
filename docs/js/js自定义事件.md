---
title: js自定义事件
---

## 创建事件

JS 中，最简单的创建事件方法，是使用 Event 构造器：

```javascript
var myEvent = new Event('event_name')
```

但是为了能够传递数据，就需要使用 CustomEvent 构造器：

```javascript
var myEvent = new CustomEvent('event_name', {
    detail: {
        // 将需要传递的数据写在detail中，以便在EventListener中获取
        // 数据将会在event.detail中得到
    }
})
```

## 事件的监听

JS 的 EventListener 是根据事件的名称来进行监听的，比如我们在上文中已经创建了一个名称为‘event_name’ 的事件，那么当某个元素需要监听它的时候，就需要创建相应的监听器：

```javascript
var myDiv = document.getElementById('myDiv')
myDiv.addEventListener('myEvent', function (e) {
    console.log(e)
    // 如果是CustomEvent，传入的数据在event.detail中
    console.log('得到数据为：', event.detail)
    // ...后续相关操作
})
```

## 事件的触发

使用 dispatchEvent 去触发（IE8 低版本兼容，使用 fireEvent）：

```javascript
if (myDiv.dispatchEvent) {
    myDiv.dispatchEvent(myEvent)
} else {
    myDiv.fireEvent(myEvent)
}
```
