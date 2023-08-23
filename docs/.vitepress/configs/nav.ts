import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '导航', link: '/nav', activeMatch: '^/nav' },
  {
    text: '前端',
    items: [
      { text: 'HTML&CSS', link: '/fe/html/' },
      // { text: 'JavaScript', link: '/other/friends' },
      // { text: 'NodeJs', link: '/other/friends' },
      // { text: 'Vue', link: '/other/friends' },
    ],
    activeMatch: '^/fe'
  },
  {
    text: '其他',
    items: [
      { text: '狗屁不通文章生成器', link: '/others/bullshit/' },
    ],
    activeMatch: '^/others'
  },
]