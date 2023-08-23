---
title: 移动端布局学习总结
date: '2023-08-16'
sidebar: 'auto'
categories:
  - 前端
---

# 移动端布局总结

## 视口

- 布局视口
- 视觉视口
- 理想视口

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimux-scale=1.0"
/>
```

设置 meta 标签的目的：设置当前视口为理想视口，即设备有多宽，我们布局的视口就有多宽

- width: 设置的是视口宽度，设置为设备宽度即 device-width
- initial-scale：初始缩放比
- user-scalable：用户是否可以缩放
- maximum-scale：最大缩放比
- minimux-scale：最小缩放比

::: tip 物理像素、物理像素比、二倍图

- 1px 能显示的物理像素点的个数，称为物理像素比或屏幕像素比
- 假设物理像素比为 2，即 1px 能显示 2 个物理像素点，那么一个 50px*50px 的盒子则需要 100*100 个像素点才可以使图片不模糊故而就有了二倍图、三倍图等等
- `background-size`: 数字 / 百分比(相对父盒子来说的) / `cover` (等比例拉伸，完全覆盖盒子) / `contain` (等比例拉伸，有一边铺满盒子则不再拉伸)
  :::

## 常见移动端布局

- 单独制作移动端页面
- 响应式页面
- 主流是单独制作移动端页面

### 移动端技术解决方案

- css 初始化 [normalize.css](https://necolas.github.io/normalize.css/)
- c3 盒子模型

```css
box-sizing: border-box (c3盒子模型) / content-box (传统盒子模型);
```

### 移动端特殊样式

```css
 -webkit-box-sizing: border-box /* c3盒子模型，上文说过，这里不多赘述 */
-webkit-tap-highlight-color: transparent; /* 一般链接点击高亮我们需要去除，这里设置为透明 */
-webkit-appearance: none;  /* 在移动端浏览器默认的外观在ios加上这个属性才能给按钮和输入框自定义样式 */
-webkit-touch-callout: none; /* 禁用长按页面时的弹出菜单，一般给图片以及链接加这个样式 */
```

## 流式布局

又被称为**百分比布局**、**非固定像素布局**

- `max-width:` 最大宽度
- `max-height` 最大高度
- `min-width:` 最小宽度
- `min-height` 最小高度

## flex 布局

- 传统布局：兼容性好、布局繁琐、局限性，不能再移动端很好的布局
- flex 弹性布局：操作方便，布局简单，移动应用广泛、pc 端浏览器支持情况较差
- 故而 pc 端布局我们还是使用传统布局，移动端布局或者不考虑兼容性的 pc 端页面布局，我们还是使用 flex 弹性布局

### 给父元素加的

```css
flex-direction: row(默认值，从左到右)/row-reverse(从右到左)/column(从上到下)/column-reverse(从下到上)
justify-content: flex-start(默认值，从头部开始，从左到右)/flex-end(靠右对齐)/center/ space-around(平分剩余空间)/space-between(先两边贴边，再评分剩余空间)
flex-wrap: nowrap(默认值，不换行)/wrap(换行)
align-items： flex-start/flex-end/center(挤在一起居中)/stretch(延着侧轴拉伸，默认值，一般不给高度)
align-content：flex-start/flex-end/center/stretch(设置子项元素高度平分父元素高度)/space-around/ space-between
flex-flow: column wrap;
```

### 给子元素加的

```css
flex: 份数 
align-self：auto(默认值，继承父元素的align-items属性) / flex-start/flex-end/center/stretch
order：数值越小，排列越靠前，默认为0，和z-index不一样、;
```

::: tip 背景颜色线性渐变

```css
background: linear-gradient(起始方向，颜色 1，颜色 2，...);
background: -webkit-linear-gradient(left top, red, blue);
```

:::

## rem 布局

- rem ：相对于 html 的字体大小，em 是父元素字体大小
- 媒体查询

```css
@media screen and (min-width: 750px) {

}
```
媒体查询+rem 实现元素动态变化

可使用媒体查询根据不同需求引入不同资源文件,例：
```html
<link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)" >  
<link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)" >
```
### 预处理器

- css 的弊端：冗余度高、不利于维护以及复用、没有很好的计算能力
- less , scss等预处理器解决了这个问题

### less使用
- 变量命名：必须右@为前缀、不能包含特殊字符、不能以数字开头、大小写敏感 @color
- 嵌套
- 运算 
- `@import` '路径'(导入导出)

::: tip rem适配方案
- `less` + 媒体查询 + `rem`
- `flexible.js` + `rem`
:::

## [swiper](https://www.swiper.com.cn/) 使用
- 下载需要的css和js文件
- 官网找到类似案例，复制html结构，css样式，js语法
- 根据需求定制修改模块

## 响应式布局
- 超小屏幕(手机) < 768px 设置宽度为100%
- 小屏设备(平板) >=768px 并 < 992px 设置宽度为750px
- 中等屏幕(桌面显示器) >=992px < 1200px 设置宽度为970px
- 宽屏设备(大桌面显示器) >=1200px 设置宽度为1170px
- 布局容器
- Bootstrap  css文件内置初始化样式
  - container类 自动设置媒体查询
  - container-fluid类：
    - 流式布局容器，百分百宽度、占据全部视口的容器、适合于单独做移动端开发
  - 栅格系统： .col-xs-, .col-sm-, .col-md-, .col.lg-
    - 列嵌套、列偏移col-md-offset-、列排序col-md-push,col-md-pull
  - 响应式工具：hidden-xs(在超小屏下隐藏), visible-xs相反

## vw布局
- vw,vh
  - 1vw为当前视口宽度的百分之一，vh同理
- [Can I Use](https://caniuse.com) 查看兼容性问题