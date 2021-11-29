module.exports = {
    '/tool/': ['/tool/拷贝vscode插件到另一台电脑', '/tool/github添加密钥'],
    '/js/': ['/js/js数组去重', 'js要不要加分号'],
    '/vue/': ['/vue/watch监听器', '/vue/样式穿透', 'vue遍历对象属性'],
    '/css/': [
        {
            title: 'css',
            collapsable: false,
            sidebarDepth: 2,
            children: ['/css/css盒模型', '/css/css画三角形一次说清楚']
        },
        {
            title: 'sass',
            collapsable: false,
            sidebarDepth: 2,
            children: ['/css/sass/sass混合器', '/css/sass/sass构建样式工具库', '/css/sass/sass继承']
        }
    ]
}
