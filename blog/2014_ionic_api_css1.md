title: ionic中文详解CSS组件(2)
date: 2014-10-09 07:40:49
tags:
- ionic
- css
categories:
- ionic|reapp
---
### ionic组件

接着上一篇[ionic中文详解CSS组件(1)](http://www.haomou.net/2014/08/09/2014_ionic_api_css/ )，我这里将一些相关组件的介绍合在一起，给出综合例子和显示效果，方便自己查阅。另外官网的JS API介绍文档有问题，国内访问不能跳转，请参考我的另一篇[ionic中文javascript API](http://www.haomou.net/2014/08/11/2014_ionic_api1/).

教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img alt="皓眸大前端开发学习" src="/images/ionic.png" class="floatnone" alt="皓眸大前端开发学习"/>
转载请注明出处：http://www.haomou.net/2014/10/09/2014_ionic_api_css1/

### ionic中文详解CSS组件1
[参看ionic中文详解CSS组件(1)](http://www.haomou.net/2014/08/09/2014_ionic_api_css/ )
http://www.haomou.net/2014/08/09/2014_ionic_api_css/

### range范围选择
range组件用于在某个范围内选择值。
```{bash}
<div class="range">
  <i class="icon ion-volume-low"></i>
  <input type="range" name="volume">
  <i class="icon ion-volume-high"></i>
</div>

<div class="list">
  <div class="item range range-positive">
    <i class="icon ion-ios7-sunny-outline"></i>
    <input type="range" name="volume" min="0" max="100" value="33">
    <i class="icon ion-ios7-sunny"></i>
  </div>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css34.jpg"/>

### select下拉选框
下拉框用于在多个候选项中选择一个值，不同的浏览器表现形式不一样。注意item-select样式。
```{bash}
<div class="list">

  <label class="item item-input item-select">
    <div class="input-label">
      Lightsaber
    </div>
    <select>
      <option>Blue</option>
      <option selected>Green</option>
      <option>Red</option>
    </select>
  </label>

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css35.jpg"/>
### tabs组件
1. tabs是水平排列的button或link，用于切换视图。是一种很常用的导航方法。
```{bash}
<div class="tabs">
  <a class="tab-item">
    Home
  </a>
  <a class="tab-item">
    Favorites
  </a>
  <a class="tab-item">
    Settings
  </a>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css36.jpg"/>
2. 仅有图标的tabs
```{bash}
<div class="tabs tabs-icon-only">
  <a class="tab-item">
    <i class="icon ion-home"></i>
  </a>
  <a class="tab-item">
    <i class="icon ion-star"></i>
  </a>
  <a class="tab-item">
    <i class="icon ion-gear-a"></i>
  </a>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css37.jpg"/>
3. icon在上，下有文字的tabs，注意tabs-icon-top样式
```{bash}
<div class="tabs tabs-icon-top">
  <a class="tab-item">
    <i class="icon ion-home"></i>
    Home
  </a>
  <a class="tab-item">
    <i class="icon ion-star"></i>
    Favorites
  </a>
  <a class="tab-item">
    <i class="icon ion-gear-a"></i>
    Settings
  </a>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css38.jpg"/>
4. icon在左的tabs，注意tabs-icon-left标签
```{bash}
<div class="tabs tabs-icon-left">
  <a class="tab-item">
    <i class="icon ion-home"></i>
    Home
  </a>
  <a class="tab-item">
    <i class="icon ion-star"></i>
    Favorites
  </a>
  <a class="tab-item">
    <i class="icon ion-gear-a"></i>
    Settings
  </a>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css39.jpg"/>
### grid系统
ionic的网格系统采用的是 [CSS Flexible Box Layout Module标准](http://www.w3.org/TR/css3-flexbox/ )，所有支持ionic的设备都支持flexbox。可以用row样式指定行，用col样式指定列。
1. 平均分的grid
```{bash}
<div class="row">
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css40.jpg"/>
2. 指定列宽的grid
```{bash}
<div class="row">
  <div class="col col-50">.col.col-50</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
</div>

<div class="row">
  <div class="col col-75">.col.col-75</div>
  <div class="col">.col</div>
</div>

<div class="row">
  <div class="col">.col</div>
  <div class="col col-75">.col.col-75</div>
</div>

<div class="row">
  <div class="col">.col</div>
  <div class="col">.col</div>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css41.jpg"/>
```{bash}
Explicit Column Percentage Classnames
.col-10	   10%
.col-20	   20%
.col-25	   25%
.col-33	   33.3333%
.col-50	   50%
.col-67	   66.6666%
.col-75	   75%
.col-80	   80%
.col-90	   90%
```
3. 有偏移量的grid
```{bash}
<div class="row">
  <div class="col col-33 col-offset-33">.col</div>
  <div class="col">.col</div>
</div>

<div class="row">
  <div class="col col-33">.col</div>
  <div class="col col-33 col-offset-33">.col</div>
</div>

<div class="row">
  <div class="col col-33 col-offset-67">.col</div>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css42.jpg"/>
```{bash}
Offset Column Percentage Classnames
.col-offset-10		10%
.col-offset-20		20%
.col-offset-25		25%
.col-offset-33		33.3333%
.col-offset-50		50%
.col-offset-67		66.6666%
.col-offset-75		75%
.col-offset-80		80%
.col-offset-90		90%
```
4. 纵向对其的grid
```{bash}
<div class="row">
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">1<br>2<br>3<br>4</div>
</div>

<div class="row">
  <div class="col col-top">.col</div>
  <div class="col col-center">.col</div>
  <div class="col col-bottom">.col</div>
  <div class="col">1<br>2<br>3<br>4</div>
</div>

<div class="row row-top">
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">1<br>2<br>3<br>4</div>
</div>

<div class="row row-center">
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">1<br>2<br>3<br>4</div>
</div>

<div class="row row-bottom">
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">1<br>2<br>3<br>4</div>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css43.jpg"/>
5. 响应式grid
```{bash}
<div class="row responsive-sm">
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
  <div class="col">.col</div>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css44.jpg"/>
```{bash}
Responsive Class	 Break when roughly
.responsive-sm		Smaller than landscape phone
.responsive-md		Smaller than portrait tablet
.responsive-lg		Smaller than landscape tablet
```
### color定制
ionic提供的各种配色如下：
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css45.jpg"/>
你也可以修改ionic.css，由于使用的sass，可以修改_variables.scss文件来扩展或修改配色。

### padding
ionic中许多组建都有默认的padding。你也可以修改，通过如下的样式
1. padding， Adds padding around every side.
2. padding-vertical， Adds padding to the top and bottom.
3. padding-horizontal， Adds padding to the left and right.
4. padding-top， Adds padding to the top.
5. padding-right， Adds padding to the right.
6. padding-bottom， Adds padding to the bottom.
7. padding-left， Adds padding to the left.

### 动画样式
fade-in
nav-title-slide-ios7
no-animation
reverse
slide-in-left
slide-in-right
slide-in-up
slide-left-right-ios7
slide-left-right
slide-out-left
slide-out-right
slide-right-left-ios7
slide-right-left

### 谢谢！
转载请注明出处：http://www.haomou.net/2014/10/09/2014_ionic_api_css1/

有问题请留言。T_T  皓眸大前端开发学习  T_T
