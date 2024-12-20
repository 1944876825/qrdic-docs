import comp from "D:/myitem/chat_bot/qr/qrprodic/vuepress-starter/docs/.vuepress/.temp/pages/guide/sentence.html.vue"
const data = JSON.parse("{\"path\":\"/guide/sentence.html\",\"title\":\"语句\",\"lang\":\"zh\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"判断语句\",\"slug\":\"判断语句\",\"link\":\"#判断语句\",\"children\":[]},{\"level\":2,\"title\":\"跳行标签 :标签名\",\"slug\":\"跳行标签-标签名\",\"link\":\"#跳行标签-标签名\",\"children\":[]},{\"level\":2,\"title\":\"消息标签\",\"slug\":\"消息标签\",\"link\":\"#消息标签\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/sentence.md\"}")
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
