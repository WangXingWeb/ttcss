---
title: npm设置淘宝镜像
---

平时用 npm 下载会比较慢
有时候会有被墙的问题
为解决这个问题需要 cnpm

-   安装 cnpm

```sh
npm i -g cnpm
npm install --global cnpm
```

接下来把所有用到 npm 的命令替换成 cnpm 即可

-   关于 cnpm
    npm 的服务器在国外，有时候会被墙，下载速度也很慢
    淘宝的开发团队把 npm 在国内做了一个镜像
    每十分钟更新一次，基本没有时效问题

-   不想安装 cnpm 又想使用 cnpm 的资源来下载

```sh
npm install jquery --registry=https://registry.npm.taobao.org
```

但是每次手动加参数很麻烦，下面我们设置永久的 npm 淘宝镜像

```sh
npm config set registry https://registry.npm.taobao.org
```

执行过上面的命令，以后 npm install 下载东西就是从淘宝服务器上下载了

```sh
# 查看 npm 配置信息，可以看到对应的registry信息
npm config list
```
