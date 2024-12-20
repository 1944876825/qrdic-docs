import comp from "D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/guide/introduction.html\",\"title\":\"简介\",\"lang\":\"zh\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"※说明:\",\"slug\":\"※说明\",\"link\":\"#※说明\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/introduction.md\"}")
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
