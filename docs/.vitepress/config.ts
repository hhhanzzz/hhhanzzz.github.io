import { defineConfig } from 'vitepress'

import { head,nav,sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',

  lang: 'zh-CN',
  title: 'hhhan',
  description: '个人学习笔记，记录使用',
  head,

  lastUpdated: true,

  /* markdown 配置 */
  markdown: {
    // lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    logo: '/images/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/hhhanzzz' }],
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present hhhan'
    }
  },
})
