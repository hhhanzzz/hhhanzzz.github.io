---
title: HTML / CSS 面试题总结
date: '2023-08-22'
sidebar: 'auto'
categories:
  - 前端
---

# HTML / CSS 面试题总结

## HTML 面试题

### 行内元素有哪些？块级元素有哪些？空(void)元素有哪些？

```html
<!--  行内元素  -->
<span></span>
<a href=""></a>
<label for=""></label>
...
```

```html
<!--  块级元素  -->
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
<form action=""></form>\
...
```

```html
<!--  空(void)元素: HTML 中不能存在子节点（例如内嵌的元素或者文本节点）的元素  -->
<br>
<hr>
<img>
<input>
<link>
<meta>
...
```

### 页面导入样式时，使用link和@import有什么区别？

link引入是使用`<link>`标签, `@import`引入是在css文件里或者style标签里引入


### title与h1的区别、b与strong的区别、i与em的区别？

- `title`是整个页面的标题，`h1`则是页面内容的一个标题
- `b`与`strong`都可以加粗，但是`strong`有强调的作用，`b`仅仅是加粗
- `i`与`em`也都是可以使字体倾斜，但是`em`比`i`多了强调的作用

### img标签的title和alt有什么区别？

- `title`属性为鼠标放在图片上一段时间所展示出来的值
- `alt`属性为图片为加载到所展示出来的值

### png、jpg、gif等图片格式解释一下，分别什么时候用？

- png: 无损压缩，尺寸体积要比jpg / jpeg的大，适合做小图标
- jpg: 采用压缩算法，有一点失真，比png体积要小，适合做中大图片
- gif: 一般是做动图的
- webp: 同时支持有损或者无损压缩，相同质量的图片，webp具有更小的体积。兼容性不是特别好

## CSS 面试题

### 简述下 CSS 盒模型

- CSS 的盒子模型有哪些：标准盒子模型、IE 盒子模型
- CSS 的盒子模型区别：
  - 标准盒子模型：margin, border, padding, content
  - IE 盒子模型：margin,content( border + padding + content )
- 通过 CSS 如何转换盒子模型： 
```css
box-sizing: content-box; /* 标准盒子模型 */
box-sizing: border-box; /* IE 盒子模型 */
```
### 简述下 css specificity（权重）

`!important` > 行内样式 > id > class, 伪类，属性 > 标签，伪元素 > 继承 / *

### '+' 与 '~' 选择器有什么不同

- `+` 选择器匹配紧邻的兄弟元素
- `~` 选择器匹配随后的所有兄弟元素
