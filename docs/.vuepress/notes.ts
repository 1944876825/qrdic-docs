import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const demoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const qrdocNote = defineNoteConfig({
  dir: 'qrdoc/guide',
  link: '/guide/',
  sidebar: [
    {
      text: '快速开始',
      collapsed: false,
      icon: 'carbon:idea',
      items: [
        'introduction',
        'getting-started',
        'update',
      ],
    },
    'sentence', 'variables', 'functions'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [demoNote, qrdocNote],
})
