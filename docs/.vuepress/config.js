const Head = require("./config/head");
const Plugins = require("./config/plugins");
const Nav = require("./config/nav");
const Sidebar = require("./config/sidebar");

module.exports = {
    base: "/",
    title: "",
    describe: "漫卷诗书喜欲狂",
    head: Head,
    themeConfig: {
        lastUpdated: "更新时间",
        logo: "/assets/img/ttcss.jpeg",
        navbar: true,
        nav: Nav,
        //sidebar: Sidebar
    },
    plugins: Plugins,
};
