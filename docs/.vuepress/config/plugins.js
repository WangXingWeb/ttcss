const moment = require("moment");
const secret = require("./secret");
moment.locale("zh-cn");
module.exports = {
    "@vuepress/medium-zoom": {
        selector: "img.custom",
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16,
        },
    },
    "@vuepress/last-updated": {
        transformer: (timestamp, lang) => {
            return moment(timestamp).format("llll");
            //return moment(timestamp).fromNow();
        },
    },
    "@vuepress/pwa": {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新",
        },
    },
    "@vuepress/plugin-back-to-top": true,
    "vuepress-plugin-auto-sidebar": {},
};
