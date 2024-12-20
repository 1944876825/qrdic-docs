import comp from "D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":null,\"actions\":[{\"text\":\"快速开始\",\"link\":\"/guide/getting-started.html\",\"type\":\"primary\"},{\"text\":\"授权\",\"link\":\"https://aqr.doumsg.com/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简单开发\",\"details\":\"语法简单，快速开发\"},{\"title\":\"轻松上手\",\"details\":\"轻松上手\"},{\"title\":\"xxx\",\"details\":\"xxxx\"}],\"footer\":\"MIT Licensed | Copyright © 2018-2024 QRPRO\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
