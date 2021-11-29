---
title: webpack笔记
---

## webpack4.0 新特性

webpack4.0 以后 webpack 命令需要额外下载 webpack-cli

```cmd
npm install webpack,webpack-cli -g
```

-   webpack 默认的打包入口文件 entry 是`./src/index.js`,如果既没有 index.js 也没有指定入口会报错找不到入口
-   需要在`webpack.config.js`中配置

```javascript
module.exports = {
    mode: 'development'
}
```

-   `mode`为 4.0 新增的选项也是必须项，可选项为`development`和`production`
-   开发模式`development`下代码没有被压缩，生产环境`production`下代码会被压缩
    运行`webpack`命令后打包生成的文件是`dist`目录下的`main.js`
-   `webpack4.0` 提供了约定大于配置的概念；目的是尽量减少配置内容

## 配置实时打包

### 配置每次修改代码后自动打包

依赖`webpack-dev-server`

```
npm install webpack-dev-server -D
```

安装成功后，我们就可以直接使用 `webpack-dev-server`来打包了，这个打包已经是实时监听代码变化了，如果我们修改了代码，`webpack-dev-server`会自动重新为我们打包，并且自动刷新浏览器。

-   如果要退出实时打包编译按`Ctrl+c`
-   这时我们的项目托管到了`localhost:8080/`
-   输出的文件路径在根目录下，就是`/mian.js`,这里需要注意这个`main.js`不在 dist 中了，在内存中，没有放到物理磁盘上，方便读取。

### 配置编译成功后自动打开浏览器

```javascript
webpack-dev-server --open
```

`webpack-dev-server`可以添加很多参数，

-   `--port`指定端口号，如`webpack-dev-server --open --port 3000`
-   `--progress`显示进度
-   `--compress`压缩
-   `--hot`热替换
-   `--host`指定域名
-   `--color`console 色彩
-   `--open firefox` 指定打开火狐浏览器，不同的浏览器在对应的系统可能名称不一致，IE 浏览器`iexplore`

这些参数都添加在命令后面就会很长，每次敲这么长一段命令会很痛苦。这里我们去`package.json`中在`script`中加一行

```javascript
    "dev":"webpack-dev-server --host xingzai --port 3000"
```

这样我们只需要每次运行`npm run dev`就可以执行这一长串代码了。

### html-webpack-plugin

将 html 页面编译结果存放到内存中，省去频繁的读取磁盘上的文件。速度也更快。

```cmd
npm i html-webpack-plugin -D
```

```javascript
//创建插件实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})
//向外暴露一个打包配置对象
module.exports = {
    mode: 'development',
    plugins: [htmlPlugin]
}
```

这个组件会自动把打包编译好的 main.js 引入到生成的 html 中
