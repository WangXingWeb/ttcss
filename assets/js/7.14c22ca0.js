(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{290:function(t,e,a){"use strict";a.r(e);var r=a(287),n=a(285),o=a(286),s=a(288);a(95);const i=/#.*$/,h=/\.(md|html)$/,l=/\/$/,c=/^[a-z]+:/i;function u(t){return decodeURI(t).replace(i,"").replace(h,"")}function p(t){return c.test(t)}function d(t){if(p(t))return t;const e=t.match(i),a=e?e[0]:"",r=u(t);return l.test(r)?t:r+".html"+a}function b(t,e,a){if(p(e))return{type:"external",path:e};a&&(e=function(t,e,a){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const n=e.split("/");a&&n[n.length-1]||n.pop();const o=t.replace(/^\//,"").split("/");for(let t=0;t<o.length;t++){const e=o[t];".."===e?n.pop():"."!==e&&n.push(e)}""!==n[0]&&n.unshift("");return n.join("/")}(e,a));const r=u(e);for(let e=0;e<t.length;e++)if(u(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:d(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function g(t,e,a,r){const{pages:n,themeConfig:o}=a,s=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||s.sidebar||o.sidebar))return f(t);const i=s.sidebar||o.sidebar;if(i){const{base:a,config:r}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(a=t,/(\.html|\/)$/.test(a)?a:a+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var a;return{}}(e,i);return"auto"===r?f(t):r?r.map(t=>function t(e,a,r,n=1){if("string"==typeof e)return b(a,e,r);if(Array.isArray(e))return Object.assign(b(a,e[0],r),{title:e[1]});{const o=e.children||[];return 0===o.length&&e.path?Object.assign(b(a,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:o.map(e=>t(e,a,r,n+1)),collapsable:!1!==e.collapsable}}}(t,n,a)):[]}return[]}function f(t){const e=function(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}var m={name:"Layout",components:{Home:r.a,Page:o.a,Sidebar:s.a,Navbar:n.a},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return g(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},S=a(12),v=Object(S.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom"),t._v(" "),e("Vssue",{staticClass:"theme-default-content",attrs:{options:{locale:"zh"}}})]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=v.exports}}]);