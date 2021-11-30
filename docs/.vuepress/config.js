const Head = require("./config/head");
const Plugins = require("./config/plugins");
const Nav = require("./config/nav");

module.exports = {
    base: "/",
    title: "TTcss",
    describe: "帮助开发者快速开发css代码的工具库",
    head: Head,
    themeConfig: {
        lastUpdated: "更新时间",
        logo: "/assets/img/ttcss.jpeg",
        navbar: true,
        nav: Nav,
    },
    plugins: Plugins,
};
