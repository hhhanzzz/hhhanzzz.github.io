---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: hhhan
  text: 学习笔记，记录使用
  tagline: 咿呀咿呀哟
  image:
    src: /images/logo_.png
    alt: hhhan
  actions:
    - theme: brand
      text: 前端学习
      link: /fe/html/
    - theme: alt
      text: 在 github 上查看
      link: https://github.com/hhhanzzz
features:
  - icon: 📖
    title: 学习笔记
    details: HTML、CSS、JavaScript、Vue...
    link: /fe/html/
    linkText: 学习笔记
  - icon: 💡
    title: 生活记录
    details: 记录生活小事...
    link: /fe/html/
    linkText: 生活记录
  - icon: 🧰
    title: 杂七杂八
    details: 持续更新...
    link: /fe/html/
    linkText: 杂七杂八
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

/* .m-home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
} */
</style>