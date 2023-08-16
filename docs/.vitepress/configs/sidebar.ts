import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fe/': [
    {
      text: 'HTML / CSS',
      collapsed: false,
      items: [
        { text: 'HTML', link: '/fe/html/' },
        { text: 'CSS', link: '/fe/css/' }
      ]
    },
    // {
    //   text: 'JavaScript 基础知识',
    //   collapsed: false,
    //   items: [
    //     { text: '数据类型', link: '/fe/javascript/types' },
    //     { text: '引用类型的拷贝', link: '/fe/javascript/clone' },
    //     { text: '类型转换', link: '/fe/javascript/conversions' },
    //     { text: '原型和原型链', link: '/fe/javascript/prototype' },
    //     { text: '继承', link: '/fe/javascript/inherit' }
    //   ]
    // },
    // {
    //   text: 'ES6 常用知识点',
    //   link: '/fe/es6/'
    // },
    // {
    //   text: 'TypeScript',
    //   link: '/fe/typescript/base'
    // },

    // {
    //   text: '浏览器与网络',
    //   collapsed: false,
    //   items: [
    //     { text: '浏览器相关知识点', link: '/fe/browser/' },
    //     { text: 'TCP', link: '/fe/network/tcp' },
    //     { text: 'HTTP', link: '/fe/network/http' }
    //   ]
    // },
    // {
    //   text: '概念知识点',
    //   collapsed: false,
    //   items: [
    //     { text: '模块化', link: '/fe/concept/module' },
    //     { text: '前端页面渲染方式', link: '/fe/concept/page-rendering' }
    //   ]
    // },
    // {
    //   text: '编程题',
    //   link: '/fe/coding/'
    // }
  ],
}
