---
title: React笔记
---

## 依赖

需要安装 react 和 react-dom 两个包

-   react 专门用于创建组件和虚拟 DOM 的，同时组件的生命周期都在这个包
-   react-dom 专门进行 DOM 操作的,将虚拟 dom 渲染出来，最主要的应用场景就是`ReactDOM.render()`

```
npm i react react-dom -S
```

下面是基础 react 例子

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

//创建虚拟dom
const myh1 = React.createElement('h1', { id: 'myh1' }, 'this is h1')

//用react-dom把虚拟dom渲染的页面上
ReactDOM.render(myh1, document.getElementById('app'))
```

在 index.html 中放容器

```html
<div id="app"></div>
```

下面我们用一个 div 包裹上面的 h1

```javascript
//创建虚拟dom
const myh1 = React.createElement('h1', { id: 'myh1' }, 'this is h1')
//在创建一个虚拟dom，将myh1当成创建这个虚拟dom的第四个参数
const mydiv = React.createElement('div', null, 'div元素', myh1)

//渲染时，只需要徐然mydiv就可以了
ReactDOM.render(mydiv, document.getElementById('app'))
```

我们一般一个网页上都有几十个甚至几百个节点元素，如果一个一个这样嵌套就太麻烦了。那 React 是怎么解决这个问题呢？

## jsx

jsx 并不是真正的 html 代码，jxs 代码要经过 babel 转化 React.createElement 这样的代码再去渲染。

需要安装

```cmd
npm i babel-core babel-loader babel-plugin-transform-runtime -D
npm i babel-preset-env babel-preset-stage-0 -D
npm i babel-preset-react -D
```

webpack.config.js 配置

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//创建插件实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
//向外暴露一个打包配置对象
module.exports = {
    mode: 'development',
    plugins: [htmlPlugin],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
```

在根目录下创建`.babelrc`文件

```javascript
{
  "presets": ["env", "stage-0", "react"],
  "plugins": ["transform-runtime"]
}
```

## jsx 语法

-   jsx 用的是 xml 语法，比 html 严格
-   js 代码要放到{}中
-   注释{ /_ 这是注释 _/ }
-   用`className`来代替`class`,`htmlFor`替换`label`的`for`属性
-   jsx 语法中，标签必须闭合。

# react 创建组件

## 用函数的方式创建组件

-   函数名必须大写
-   必须`return`虚拟 dom 或者 null

```javascript
function Hello() {
    return <div>hello</div>
}
ReactDOM.render(
    <div>
        <Hello></Hello>
    </div>,
    document.getElementById('app')
)
```

### 给组件传递参数

```javascript
function Hello(props) {
    return <div>{props.user.name}</div>
}
const user = {
    name: 'manjuan'
}
ReactDOM.render(
    <div>
        <Hello user={user}></Hello>
    </div>,
    document.getElementById('app')
)
```

> 需要注意的是：组件参数是只读的，不能修改。

### 利用 es6 展开运算符传参

```javascript
function Hello(props) {
    return (
        <div>
            《{props.name}》,{props.price}元，{props.publicDate}出版
        </div>
    )
}
const book = {
    name: 'js指南',
    price: 80,
    publicDate: '2016.4.23'
}
ReactDOM.render(
    <div>
        <Hello {...book}></Hello>
    </div>,
    document.getElementById('app')
)
```

### 使用 jsx 文件创建组件

创建 Hello.jsx 文件

```javascript
import React from 'react'
export default function Hello(props) {
    return (
        <div>
            《{props.name}》,{props.price}元，{props.publicDate}出版
        </div>
    )
}
```

在使用的时候导入

```javascript
import Hello from './components/Hello.jsx'
const book = {
    name: 'js指南',
    price: 80,
    publicDate: '2016.4.23'
}
ReactDOM.render(
    <div>
        <Hello {...book}></Hello>
    </div>,
    document.getElementById('app')
)
```

这里导入的时候如果想省略后缀名`.jsx`，需要在`webpack`中配置`resolve`->`extensions`

```javascript
resolve: {
    extensions: ['.js', '.jsx', '.json']
}
```

`webpack`帮我们自动补全后缀名，先找`Hello.js`,找不到，继续找`Hello.jsx`,找到后导入`Hello.jsx`

说完`extensions`再看一下`alias`别名，在`webpack`中配置这个别名可以让我们导入文件时省去写很长的路径。比如：

```javascript
resolve: {
    alias: {
      "@": path.join(__dirname, "./src")
    }
}
```

上面的配置表示我们用`@`代表当前根目录中的`src`目录。
在导入文件时就可以

```javascript
import Hello from '@/components/Hello'
```

## 使用 Class 关键字创建组件

最基础的组件结构

```javascript
import React from 'react'
class Hello extends React.Component {
    render() {
        return <div>hello</div>
    }
}
export default Hello
```

### Class 组件传参

```javascript
import Book from '@/components/book'
const book = {
    name: 'js指南',
    price: 80,
    publicDate: '2016.4.23'
}
ReactDOM.render(
    <div>
        <Book {...book}></Book>
    </div>,
    document.getElementById('app')
)
```

```javascript
import React from 'react'
class Book extends React.Component {
    render() {
        return (
            <div>
                《{this.props.name}》价格{this.props.price},发表于
                {this.props.publicDate}
            </div>
        )
    }
}
export default Book
```

使用`this.props.key`的方式取参数

## 两种创建组件方式的区别

使用 Class 创建的组件有自己的私有数据和生命周期(有状态组件)；function 创建的组件只有 props，没有似有数据和生命周期函数(无状态组件)。
无状态组件由于没有私有属性和生命周期，所以他的效率高于有状态组件。

```javascript
import React from 'react'
class Book extends React.Component {
    constructor() {
        super()
        this.state = {
            //这里很项vue中的data
            intr: '这本书很不错'
        }
    }
    render() {
        this.state.intr = '非常不错的node' //state是可读可写的
        return (
            <div>
                《{this.props.name}》价格{this.props.price},发表于
                {this.props.publicDate}
                <p>{this.state.intr}</p>
            </div>
        )
    }
}
export default Book
```

state 属性是可读可写的。

`props`和`state/data`的区别

-   `props`中的数据都是从外界传递过来的
-   `state/data`中的数据都是组件私有的，比如通过 ajax 获取的。
-   `props`中的数据是只读的。
-   `state/data`中的数据是可读可写的。

## 父组件给自组件传参

下面是一个书单组件，其中么一本书是一个自组件
Book 组件 Book.jsx

```javascript
import React from 'react'
//Book组件不需要state所以我们使用无状态组件
export default function Book(props) {
    return (
        <div>
            《{props.name}》--- 作者:{props.author}
        </div>
    )
}
```

Booklist 组件 Booklist.jsx

```javascript
import React from 'react'
import Book from './Book'
//定义父组件
export default class Booklist extends React.Component {
    constructor() {
        super()
        this.state = {
            bookList: [
                {
                    name: '平凡的世界',
                    author: '路遥'
                },
                {
                    name: '三体',
                    author: '刘慈欣'
                },
                {
                    name: '四世同堂',
                    author: '老舍'
                },
                {
                    name: '呼兰河传',
                    author: '萧红'
                },
                {
                    name: '阿Q正传',
                    author: '鲁迅'
                },
                {
                    name: '白鹿原',
                    author: '陈忠实'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>我的书单</h1>
                {this.state.bookList.map((item) => (
                    <Book {...item} key={item.name}></Book>
                ))}
            </div>
        )
    }
}
```

使用

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

import Booklist from '@/components/Booklist'

ReactDOM.render(
    <div>
        <Booklist></Booklist>
    </div>,
    document.getElementById('app')
)
```

## react 样式

### 内联样

-   用双花括号包裹样式
-   各样式之间用逗号隔开
-   样式值加引号，纯数字的除外，例如`index：1`,`fontWeight:700`
-   样式名称使用类似驼峰命名的方式

也可以将样式单独封装成对象

```javascript
const styleH = { color: 'red', fontSize: '18px', textAlign: 'center' }
```

```html
<h1 style="{styleH}">我的书单</h1>
```

### 使用.css 样式表

需要在 webpack 中配置`style-loader`,`css-loader`
在 webpack.json 文件中 module -> rules 中加一项配置

```javascript
module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
```

在需要使用 css 样式的地方引入

```javascript
import '@/css/boolList.css'
```

### react 如何解决 css 冲突（css 作用域）

通过给 css-loader 添加参数启用 css 模块化

```javascript
module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader?modules"],
        exclude: /node_modules/
      }
    ]
  },
```

启用模块化后会有什么作用呢
css 源码

```css
.title {
    color: red;
    font-size: 18px;
    font-weight: 700;
}
h1 {
    font-style: initial;
}
```

启用模块话生成的代码

```css
._2PF9r66I0QdaV7jPc0WqGK {
    color: red;
    font-size: 18px;
    font-weight: 700;
}
h1 {
    font-style: initial;
}
```

> 上面的代码说明 css-loader 的模块化只能处理 class 选择器和 id 选择器的样式，对于标签样式不能处理。

那么如何使用模块化后生成的 css 样式呢？
在导入 css 样式时，如果启用了模块化会返回一个对象，我们可以从中找到模块化处理后对应的 class 后者 id 值。

```js
import BookListCss from '@/css/booklist.css'
```

没有模块化处理时，BookListCss 是一个控对象。
经过模块化处理导入时，BookLIstCss 是如下的一个对象。

```js
{
    title: '_2PF9r66I0QdaV7jPc0WqGK'
}
```

在使用时我们使用`BookListCss.title`就能拿到处理后的 class 类名。

```html
<h1 className="{BookListCss.title}">我的书单</h1>
```

BookListCss 只属于当前这个组件，所以只有当前这个组件才能拿到`BookListCss.title`的类名，这样就实现了，css 样式的模块化作用域。

### 使用`localIdentName`自定义生成的类名格式

生命生成的类名都很奇怪，我们看不出它代表的意义了，接下来我们给 css-loader 设定参数自定义生成的类名
可选的参数有

-   [path] 表示样式表相对项目跟路径所在的路径
-   [name] 表示样式表文件名称
-   [local] 表示样式的类名定义名称
-   [hash:length] 表示 32 位的 hash 值
    例如

```js
{
    test: /\.css$/,
    use: [
        { loader: "style-loader" },
        {
        loader: "css-loader",
        options: {
            modules: {
            localIdentName: "[path][name]-[local]-[hash:base64:6]"
            }
        }
        }
    ]
    }
```

要实现这一步依赖

```js
"dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "webpack": "^4.41.2"
  },
  "devDependencies": {
    "@babel/core": "^7.5.5",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.0.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^3.4.1",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^1.1.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
  }
```

# 需改 state 中的值

-   直接使用`this.state.num = 55 ` 不会触发视图更新
-   想要触发视图更新可以使用`this.setState({num:55})`
-   this.setState 只会修改你写明要修改的值。其他的值是不动的。

> 这和微信小程序有点像，在微信小程序中也要使用 this.setData()来更新数据。

-   值得注意的是 this.setState()是异步方法。在 this.setState({})后直接使用 this.state.num 拿到的值可能不是最新的。想要设置后使用最新的 state 中的数据。最好是在 this.setState({},callback)的 callback 中获取。
    ```javascript
    this.setState({ num: 55 }, function () {
        console.log(this.state.num)
    })
    ```

# 绑定文本框值

-   文本框必须提供 onChange 处理函数否则该文本框会被当作只读处理 readOnly

# 使用 ref 获取 DOM 元素引用

和 vue 差不多，vue 为页面上的元素提供了`ref`的属性，如果想要获取元素的引用，则需要使用`this.$refs.引用名称`

在 react 中，也有`ref`，如果要获取元素的引用`this.refs.引用名称`

在获取 input 的 value 值时，可以通过将传递传输 e 也可以通过 ref 来获取。

# react 生命周期
