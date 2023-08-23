---
title: HTML 学习总结
date: '2023-04-07'
sidebar: 'auto'
categories:
  - 前端
---

# HTML 学习总结

## HTML 基本标签

### 常用标签

```html
<h3>标题</h3>
<p></p>
<br />
<div></div>
<span></span>
加粗：<strong></strong>或者<b></b> <br />
倾斜：<em></em>/<i></i> <br />
删除线：<del></del>/<s></s> <br />
下划线：<ins></ins>/<u></u>
<a href="#">这是一个链接</a>
<img src="" alt="" />
```

### 表格标签

```html
<table border="1">
  <thead>
    <tr>
      <th>购物</th>
      <th>生活</th>
    </tr>
  </thead>
  <tbody>
    <td>京东</td>
  </tbody>
</table>
```

### 列表标签

```html
<ul>
  <li>1</li>
  <li>2</li>
</ul>

<ol>
  <li></li>
</ol>

<dl>
  <dt>线上购物</dt>
  <dt>薅羊毛</dt>
  <dd>京东</dd>
  <dd>淘宝</dd>
  <dd>拼多多</dd>
</dl>
```

### 表单标签

```html
<form action="">
  <input type="text">
  <input type="password">
  <input type="radio">
  <input type="checkbox">
  <input type="submit">
  <input type="reset">
  <input type="button">
  <input type="file">
  <input type="text" name="" value=""checked="checked" maxlength="20">

  <label for=""></label>

  <select name="" id="">
    <option value="">1</option>
    <option value="">2</option>
  </select>

  <textarea name="" id="" cols="30" rows="10"><textarea>
</form>
```

### 特殊标签和字符

::: tip 特殊标签和字符
空格符 `&nbsp;` 小于号 `&lt;` 大于号 `&gt;`
:::

## HTML5 新增部分

### 语义化标签
```html
<header></header>
<nav></nav>
<article></article>
<aside></aside>
<section></section>
<footer></footer>
<!-- 都是块级元素 -->
```

### 视频标签

```html
<video src=""></video>
```

::: tip video 常见属性

- width, height, src
- poster 加载等待的画面图片
- autoplay="autoplay" 视频自动播放，谷歌浏览器需要添加 muted="muted"(静音播放)来解决自动播放问题
- controls="controls" 向用户显示播放控件
- loop 循环播放视频
- preload auto/none 规定是否预加载视频
  :::

### 音频标签

```html
<audio src=""></audio>
```

:::tip audio 常见属性
`src, loop, autoplay, controls`
:::

### input 标签 type 属性值

```html
<input type="text" />
```

:::tip 新增其他属性

- email, url, date, time, month, week, number, tel, search, color
- required 表单内容不能为空
- placeholder 表单提示信息，存在默认值将不显示
- autofocus 自动聚焦
- autocomplete off/on 默认为开，当用户输入内容时，基于之前提交的值，显示出一写之前提交的选项。需要放在表单内，同时加上 name 属性
- multiple 多选文件提交

:::


