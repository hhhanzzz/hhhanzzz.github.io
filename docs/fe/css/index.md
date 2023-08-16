---
title: CSS 学习总结
date: '2023-08-16'
sidebar: 'auto'
categories:
  - 前端
---

# CSS 学习总结

## CSS 选择器

- 标签选择器
- 类选择器
- id 选择器
- 通配符选择器

## CSS 字体属性

```css
font-family: 'Microsoft Yahei'
font-size: 16px
font-weight: 400 / normal /* 正常 */
font-weight: 700 / bold /* 粗体 */
font-style: normal / italic /* 正常 / 粗体 */
font: font-style font-weight font-size/line-height font-family /* 简写 */
```

## CSS 文本属性

- `color`
- `text-align`
- `text-decoration`
- `text-indent`
- `line-height`

## CSS 使用

::: tip CSS 使用

- 内部样式
- 行内样式
- 外部样式
  :::

## CSS 复合选择器

- 后代选择器
- 子选择器
- 并集选择器
- 链接伪类选择器
- focus 伪类选择器

## 元素显示模式

### 块级元素

```html
<h1></h1>
<p></p>
<div></div>
<table></table>
<tr></tr>
<thead></thead>
<tbody></tbody>
<ul></ul>
<li></li>
<ol></ol>
<dl></dl>
<dt></dt>
<dd></dd>
<form action=""></form>
```

### 行内元素

```html
<span></span>
<a href=""></a>
<label for=""></label>
```

### 行内块元素

```html
<img src="" alt="" />
<th></th>
<td></td>
<input type="text" />
<select name="" id=""></select>
<textarea name="" id="" cols="30" rows="10"></textarea>
```

::: tip 小技巧

- 元素显示模式的转换： display

- 单行文字垂直居中：height = line-height
  :::

## CSS 背景属性

```css
background-color
background-image
background-repeat
background-position
background-attachment
background: background-color background-image background-repeat background-attachment background-position
```

## CSS 三大特性

- 层叠性
- 继承性
- 优先级

**行高的继承、权重的叠加**
::: tip CSS 选择器权重排序
`!important` > 行内样式 > id > 类、伪类 > 标签 > 继承 / \*
:::

## CSS 盒模型

- 内容`content`
- 边框`border`

```css
border: border-width border-style border-color border-collapse
border : 1px solid pink; /* 简写 */
```

- 内边距`padding`

```css
padding: padding-top/bottom/left/right;
```

`padding` 会撑大盒子，但是如果盒子本身已经和父盒子一样大了，则不会再撑大盒子

- 外边距`margin`

```css
margin: margin-top/bottom/left/right;
```

- 块级盒子水平居中，左右 `margin`值 为 `auto`
- 行内元素以及行内块元素水平居中 `text-align: center;`
- `margin` 在外边距合并上的缺陷：嵌套块元素塌陷、相邻块元素垂直外边距的合并

::: tip

- 圆角边框：`border-radius`
- 盒子阴影：`box-shadow: h-shadow v-shadow blur spread color inset`
- 文字阴影：`text-shadow: h-shadow v-shadow blur color`
  :::

## 浮动

```css
float: none/left/right;
```

- 浮动元素一行显示
- 浮动元素具有行内块元素特性
- 浮动元素经常搭配标准流的父元素
- 清除浮动带来的消极影响的几种方式：额外标签法、给父元素添加 overflow、after 伪元素、双伪元素

## 常见的图片格式

`jpg`(`jpeg`), `png`, `gif`, `psd`(ps 专用格式)

ps 切图：图层切图、切片切图、ps 插件切图

## CSS 属性书写顺序

::: tip CSS 属性书写顺序

- 布局定位属性: display / position / float / clear / visibility / overflow 等
- 自身属性
- 文本属性
- 其他属性(c3) 圆角边框、盒子阴影、文字阴影
  :::

## 定位

- 定位 = 定位模式 + 边偏移
- 定位模式： 静态定位、相对定位、绝对定位、固定定位
- 边偏移：top buttom left right
- 相对定位不脱标，绝对定位脱标
- 子绝父相
- 固定定位固定到版心右侧（左右方向）小技巧：需要固定的盒子移动可视区域的 50%，再移动版心盒子的 50%
- 粘性定位
- z-index
- 添加绝对定位或者固定定位的元素也和浮动类似，具有行内块元素的特点
- 浮动元素不会压住标准流的文字，但是定位会

## 网页布局

- 标准流
- 浮动
- 定位

```css
/* 元素完全隐藏，可以视为没有这个元素 */
display : none/block

/* 元素仅仅不可见，依然占有原来的位置 */
visibility : hidden/visible

/* 溢出隐藏 */
overflow ： hidden/visible/scroll(不管是否超出都显示滚动条)/auto(超出自动显示滚动条)
```

## CSS 高级技巧

- 精灵图使用
- 字体图标的下载以及使用
- 三角的做法
- 鼠标样式

```css
cursor: default(小白 默认) / pointer(小手) / move(移动) / text(文本) /
  not-allowed(禁止);
```

- 取消表单轮廓和防止拖拽文本域

```css
outline: none;
resize: none;
```

- 行内块和行内元素与文字对齐

```css
vertical-align: top/middle/bottom;
```

图片底部由于和文字基线对齐会有空白缝隙，可改成其他对齐方式解决此问题

- 单行文字溢出部分省略号显示

```css
white-space: nowrap;
(默认normal自动换行)overflow: hidden;
text-overflow: ellipsis;
```

- 多行文字溢出部分省略号显示

```css
overflow: hidden;
text-overflow: ellipsis;
/* 弹性伸缩盒子模型显示  */
display: -webkit-box;
/* 限制在一个块元素显示的文本的行数 */
-webkit-line-clamp: 2;
/* 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```

- 布局技巧

  - margin 负值巧妙运用
  - 文字围绕浮动元素巧妙运用
  - 行内块的巧妙运用
  - css 三角巧妙运用

- css 初始化

## CSS 3

::: tip CSS 3

- 属性选择器，结构伪类选择器，伪元素选择器
- `box-sizing: content-box(默认)/border-box`

- `filter: blue(5px);` 图片模糊处理
- `calc: (100%-80px);` 声明 css 属性值时执行一些计算
- css 过渡
  - `transition:` 要过渡的属性 花费时间 运动曲线 何时开始
  - 运动曲线： 默认是`ease`
- favicon 图标，推荐网站 [favicon](https://www.bitbug.net)
  :::

### TDK 三大标签 seo 优化

- `title`
  - 网站名(产品名)-网站的介绍(尽量不要超过 30 个汉字)
  - 例：京东(jd.com)-综合网购首选-正品低价、品质保障、配送及时、1 轻松购物！
- `description`
  - `<meta name="description" content="京东JD.com-....">`
- `keywords`
  - `<meta name="keywords" content="关键词,最好限制为6-8个关键词,关键词之间用英文逗号隔开">`

### LOGO 的 seo 优化

- logo 里先放一个 h1 标签，目的是为了提权，告诉搜索引擎。这个地方很重要
- h1 里面再放一个链接，可以返回首页的，把 logo 的背景图片给链接即可
- 为了搜索引擎收录我们，我们链接里面要放文字（网站名称），但是文字不要显示出来。
  - 方法一：`text-indent`移到盒子外面（`text-indent: -9999px;`），然后`overflow: hidden;`,这是淘宝的做法。
  - 方法二：直接给`font-size: 0px;`，这样就看不到文字了，京东的做法。
- 最后给链接一个 title 属性，这样鼠标放到 logo 上就可以看到提示文字了。

## CSS 动画

### 2d 转换

- 移动：`transform: translate(x, y) translateX() translateY()` 不影响其他盒子，对行内标签没有效果
- 旋转：`transform: rotate(45deg)` 默认旋转中心点是元素的中心点 正为顺时针旋转
- 转换中心点：`transform-origin: x y;` xy 默认为 50%，50% xy 也可以是具体像素值或者方位名词
- 缩放：`transform: scale(2, 1)` 可以设置转换中心点缩放，默认为中心点，不影响其他盒子
- 综合写法：`transform: translate() rotate() scale();` 其顺序会改变坐标轴方向，当同时有位移和其他属性的时候，位移放前面

### 动画

1. 定义动画

```css
@keyframes 动画名 {
  0% {
  }
  100% {
  }
}
```

2. 使用(调用)动画

```css
/* 简写  */
animation: 动画名 2s liner 2s infinite alternate forwards;
animation-play-state: running/pause
animation-timing-function: linear/ease/steps(步长)
```

### 3d 转换

- x 轴右边是正值，左边是负值
- y 轴下面是正值，上面是负值
- z 往外面是正值，往里面是负值
- 移动： `transform: translate3d(x, y, z) translateZ(100px) translateZ` 一般用 px 单位
- 透视： `perspective: 100px;` 在网页产生 3d 效果，也就是近大远小的效果 写在父盒子上
- 3d 旋转： `transform: rotate3d(x,y,z,旋转度数) rotateX(45deg) rotateY() rotateZ()`
- 左手准则： 左手指向某个轴的正方向，大拇指弯曲的方向就是绕此轴旋转的正方向
- 3d 呈现： `transform-style: flat(默认，不开启 3d 立体空间)/preserve-3d(开启立体空间)`，代码写给父级，影响子盒子

## 浏览器私有前缀
- `-moz-`: 代表 `firefox` 浏览器私有属性
- `-ms-`: 代表 `ie` 浏览器私有属性
- `-webkit-`: 代表 `safari`、`chrome` 浏览器私有属性
- `-o-`: 代表 `opera` 浏览器私有属性
