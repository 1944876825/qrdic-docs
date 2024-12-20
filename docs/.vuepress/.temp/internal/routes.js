export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/guide/functions.html", { loader: () => import(/* webpackChunkName: "guide_functions.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/functions.html.js"), meta: {"title":"函数"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"快速开始"} }],
  ["/guide/introduction.html", { loader: () => import(/* webpackChunkName: "guide_introduction.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/introduction.html.js"), meta: {"title":"简介"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"QRDICPro 使用文档"} }],
  ["/guide/sentence.html", { loader: () => import(/* webpackChunkName: "guide_sentence.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/sentence.html.js"), meta: {"title":"语句"} }],
  ["/guide/update.html", { loader: () => import(/* webpackChunkName: "guide_update.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/update.html.js"), meta: {"title":"更新日志"} }],
  ["/guide/variables.html", { loader: () => import(/* webpackChunkName: "guide_variables.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/variables.html.js"), meta: {"title":"变量"} }],
  ["/guide/variable/built-in-variables.html", { loader: () => import(/* webpackChunkName: "guide_variable_built-in-variables.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/variable/built-in-variables.html.js"), meta: {"title":"内置变量"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
