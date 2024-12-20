import comp from "D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/guide/getting-started.html\",\"title\":\"快速开始\",\"lang\":\"zh\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"基本语法\",\"slug\":\"基本语法\",\"link\":\"#基本语法\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/getting-started.md\"}")
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
