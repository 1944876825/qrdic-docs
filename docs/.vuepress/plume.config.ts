import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',

  appearance: true,

  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'QRDicDoc',
    description: 'QRDicDoc',
    // circle: true,
    // location: '',
    // organization: '',
  },
  navbar,
  notes,
  social: [
    { icon: 'github', link: '/' },
  ],
  footer: {
    // message: "",
    copyright: 'Copyright © 2024 QRDicDoc',
  }
})
