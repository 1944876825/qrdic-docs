import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh',

  title: 'QRPRO',
  description: 'QRPRO文档',

  theme: defaultTheme({
    logo: '',
    navbar: ['/', '/guide/getting-started.html'],
    sidebarDepth:1,
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          collapsible: true,
          children: ['introduction', 'getting-started', 'update'],
        },
        {
          text: '进阶',
          collapsible: true,
          children: [
            'variables',
            'sentence',
            'functions',
          ],
        },
      ]
    }
  }),

  bundler: viteBundler(),
})
