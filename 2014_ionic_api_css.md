title: ionic中文详解CSS组件(1)
date: 2014-08-09 09:40:49
tags:
- ionic
- css
categories:
- ionic|reapp
---
### ionic组件

本来不想写这个的，因为毕竟官网已经列的很详细了[css component](http://ionicframework.com/docs/components/ ),国内的网络由于种种原因，有时候右边并不会显示一个手机框用于展示效果。我这里将一些相关组件的介绍合在一起，给出综合例子和显示效果，方便自己查阅。另外官网的JS API介绍文档有问题，国内访问不能跳转，请参考我的另一篇[ionic中文javascript API](http://www.haomou.net/2014/08/11/2014_ionic_api/).

教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img alt="皓眸大前端开发学习" src="/images/ionic.png" class="floatnone" alt="皓眸大前端开发学习"/>
转载请注明出处：http://www.haomou.net/2014/08/09/2014_ionic_api_css/
### Header
Header是固定在屏幕顶部的组件。可以包含如标题和左右的功能按钮。Sub Header同样是固定在顶部，只是是在Header的下面，就算没有写Header这个，Sub Header这个样式也会距离顶部有一个Header的距离。
如：
```{bash}
<ion-view>
    <ion-content class="no-header">
        <div class="bar bar-header  bar-royal">
            <a href="#/app/capture" class="button button-icon icon ion-gear-a"></a>
            <h1 class="title">Header</h1>
            <a href="#/app/playlists" class="button button-icon icon ion-heart"></a>
        </div>
        <div class="bar bar-subheader">
            <h2 class="title">Sub Header</h2>
            <a href="#/app/playlists" class="button button-icon icon ion-ios7-undo-outline"></a>
            <a href="#/app/capture" class="button button-icon icon ion-ios7-redo-outline"></a>
        </div>
    </ion-content>
</ion-view>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css1.jpg"/>
仔细的读者可能发现，我在header和subheader里面各自放了两个按钮，我并没有定位，ionic会自动将两个分开在两边。经测试，ionic会自动把header或subheader里面的最后一个图标靠右，其他的靠左依次摆开。
### Footer
footer是显示在屏幕底部的边栏，你可以用这个做导航栏或者添加一些菜单操作，示例如下：
```{bash}
 <div class="bar bar-footer bar-balanced">
        <button class="button button-clear">Left</button>
        <div class="title"> <button ng-click="captureVideo();" class="button button-clear button-icon icon ion-ios7-videocam-outline"></button></div>
        <button class="button button-clear">Right</button>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css2.jpg"/>
值得注意的是，在bar-footer和bar-header里面一样，class=title的元素都会被自动居中。如果没有的话，会自动向左排列。可以使用如下pull-right方式让其靠右排列：（header里面也一样）
```{bash}
<div class="bar bar-footer">
  <button class="button button-clear pull-right">Right</button>
</div>
```

### button
1. button的默认情况是按照display: inline-block来显示，宽度是随其内部文字长度增长的。
有许多不同的显示样式。
```{bash}
<button class="button">
  Default
</button>

<button class="button button-light">
  button-light
</button>

<button class="button button-stable">
  button-stable
</button>

<button class="button button-positive">
  button-positive
</button>

<button class="button button-calm">
  button-calm
</button>

<button class="button button-balanced">
  button-balanced
</button>

<button class="button button-energized">
  button-energized
</button>

<button class="button button-assertive">
  button-assertive
</button>

<button class="button button-royal">
  button-royal
</button>

<button class="button button-dark">
  button-dark
</button>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css3.jpg"/>
2. 如果想让button占满父元素宽度，父元素没有padding的话，就是屏幕宽度，需要加上 button-block 样式
```{bash}
<button class="button button-full button-positive">
  Full Width Block Button
</button>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css4.jpg"/>
3. 当然还有可以控制button大小的默认样式，button-small，button-large 
```{bash}
<button class="button button-small button-assertive">
  Small Button
</button>
<button class="button button-large button-positive">
  Large Button
</button>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css5.jpg"/>
4. 还有只显示框线的button，样式button-outline
```{bash}
<button class="button button-outline button-positive">
  Outlined Button
</button>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css6.jpg"/>
5. 还有不显示框的button，样式button-clear
```{bash}
<button class="button button-clear button-positive">
  Clear Button
</button>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css7.jpg"/>
6. 带icon的button，可以控制icon的位置，直接看代码
```{bash}
<button class="button">
  <i class="icon ion-loading-c"></i> Loading...
</button>

<button class="button icon-left ion-home">Home</button>

<button class="button icon-left ion-star button-positive">Favorites</button>

<a class="button icon-right ion-chevron-right button-calm">Learn More</a>

<a class="button icon-left ion-chevron-left button-clear button-dark">Back</a>

<button class="button icon ion-gear-a"></button>

<a class="button button-icon icon ion-settings"></a>

<a class="button button-outline icon-right ion-navicon button-balanced">Reorder</a>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css8.jpg"/>
7. 放在header的button，注意button-icon样式和button-clear样式
```{bash}
<div class="bar bar-header">
  <button class="button icon ion-navicon"></button>
  <h1 class="title">Header Buttons</h1>
  <button class="button">Edit</button>
</div>
<div class="bar bar-header">
  <button class="button button-icon icon ion-navicon"></button>
  <div class="h1 title">Header Buttons</div>
  <button class="button button-clear button-positive">Edit</button>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css9.jpg"/>
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css10.jpg"/>
8. 一组button，注意button-bar样式，可以与其他的icon组合
```{bash}
<div class="button-bar">
  <a class="button">First</a>
  <a class="button">Second</a>
  <a class="button">Third</a>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css11.jpg"/>
### List
1. list列表是一个比较常用的组件，list views支持很多的交互操作，比如编辑，划屏幕编辑，拖拽排序，下拉刷新等等。可以参看javascript API中的list介绍，这里给个综合的例子：
```{bash}
<ion-list ng-controller="MyCtrl"
          show-delete="shouldShowDelete"
          show-reorder="shouldShowReorder"
          can-swipe="listCanSwipe">
  <ion-item ng-repeat="item in items"
            class="item-thumbnail-left">

    <img ng-src="{{item.img}}">
    <h2>{{item.title}}</h2>
    <p>{{item.description}}</p>
    <ion-option-button class="button-positive"
                       ng-click="share(item)">
      Share
    </ion-option-button>
    <ion-option-button class="button-info"
                       ng-click="edit(item)">
      Edit
    </ion-option-button>
    <ion-delete-button class="ion-minus-circled"
                       ng-click="items.splice($index, 1)">
    </ion-delete-button>
    <ion-reorder-button class="ion-navicon"
                        on-reorder="reorderItem(item, $fromIndex, $toIndex)">
    </ion-reorder-button>

  </ion-item>
</ion-list>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css12.jpg"/>
上图中那个有一行是向左划屏出现的效果。
2. list分栏，主意item-divider样式
```{bash}
<div class="list">

  <div class="item item-divider">
    Candy Bars
  </div>

  <a class="item" href="#">
    Butterfinger
  </a>

  ...

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css13.jpg"/>
3. 带有icon的list，可以通过i标签添加icon到item中，通过item-icon-left或item-icon-right指定icon在左边还是右边。下面的例子中使用a或button标签做每个item，主要是为了让这每个item可以tappable，还有一个特点是当没有添加任何icon时，会自动在右边添加一个小的向右的箭头图标。直接看例子：
```{bash}
<div class="list">

  <a class="item item-icon-left" href="#">
    <i class="icon ion-email"></i>
    Check mail
  </a>

  <a class="item item-icon-left item-icon-right" href="#">
    <i class="icon ion-chatbubble-working"></i>
    Call Ma
    <i class="icon ion-ios7-telephone-outline"></i>
  </a>

  <a class="item item-icon-left" href="#">
    <i class="icon ion-mic-a"></i>
    Record album
    <span class="item-note">
      Grammy
    </span>
  </a>

  <a class="item item-icon-left" href="#">
    <i class="icon ion-person-stalker"></i>
    Friends
    <span class="badge badge-assertive">0</span>
  </a>

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css14.jpg"/>
4. 带有button的list，注意item-button-right or item-button-left样式
```{bash}
<div class="list">

  <div class="item item-button-right">
    Call Ma
    <button class="button button-positive">
      <i class="icon ion-ios7-telephone"></i>
    </button>
  </div>

  ...

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css15.jpg"/>
5. 带有头像的item，主意item-avatar样式
```{bash}
<div class="list">

    <a class="item item-avatar" href="#">
      <img src="venkman.jpg">
      <h2>Venkman</h2>
      <p>Back off, man. I'm a scientist.</p>
    </a>

    ...

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css16.jpg"/>
6. 带有缩略图的list，注意item-thumbnail-left 和 item-thumbnail-right样式，可以指定缩略图不同的显示位置。
```{bash}
<div class="list">

    <a class="item item-thumbnail-left" href="#">
      <img src="cover.jpg">
      <h2>Pretty Hate Machine</h2>
      <p>Nine Inch Nails</p>
    </a>

    ...

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css17.jpg"/>
7. 表格样式的list，这个主要是有了margin的样式，显示两边的框线。注意样式list list-inset。可以参考后面的inset-forms效果。
```{bash}
<div class="list list-inset">

    <div class="item">
      Raiders of the Lost Ark
    </div>

    ...

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css18.jpg"/>
### 卡片card
1. card卡片一起整洁内容涵盖丰富的表现形式，在应用中使用的越来越多。card默认样式带有box-shadow，由于性能的原因，和他类似的元素像list list-inset 并没有shadow。如果你有很多的card，每个card都有很多子元素，建议使用inset list。下面是一个简单的带有footer和header的card。
```{bash}
<div class="card">
  <div class="item item-divider">
    I'm a Header in a Card!
  </div>
  <div class="item item-text-wrap">
    This is a basic Card with some text.
  </div>
  <div class="item item-divider">
    I'm a Footer in a Card!
  </div>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css19.jpg"/>
2. 列表形式的card，主意list card 样式
```{bash}
<div class="list card">

  <a href="#" class="item item-icon-left">
    <i class="icon ion-home"></i>
    Enter home address
  </a>

  <a href="#" class="item item-icon-left">
    <i class="icon ion-ios7-telephone"></i>
    Enter phone number
  </a>

  <a href="#" class="item item-icon-left">
    <i class="icon ion-wifi"></i>
    Enter wireless password
  </a>

  <a href="#" class="item item-icon-left">
    <i class="icon ion-card"></i>
    Enter card information
  </a>

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css20.jpg"/>
3. 带有图像的组合显示的card
```{bash}
<div class="list card">

  <div class="item item-avatar">
    <img src="avatar.jpg">
    <h2>Pretty Hate Machine</h2>
    <p>Nine Inch Nails</p>
  </div>

  <div class="item item-image">
    <img src="cover.jpg">
  </div>

  <a class="item item-icon-left assertive" href="#">
    <i class="icon ion-music-note"></i>
    Start listening
  </a>

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css21.jpg"/>
4. card显示风格的示例。该实例综合多种元素，主意item-avatar，item-body，item-divider等样式
```{bash}
<div class="list card">

  <div class="item item-avatar">
    <img src="mcfly.jpg">
    <h2>Marty McFly</h2>
    <p>November 05, 1955</p>
  </div>

  <div class="item item-body">
    <img class="full-image" src="delorean.jpg">
    <p>
      This is a "Facebook" styled Card. The header is created from a Thumbnail List item,
      the content is from a card-body consisting of an image and paragraph text. The footer
      consists of tabs, icons aligned left, within the card-footer.
    </p>
    <p>
      <a href="#" class="subdued">1 Like</a>
      <a href="#" class="subdued">5 Comments</a>
    </p>
  </div>

  <div class="item tabs tabs-secondary tabs-icon-left">
    <a class="tab-item" href="#">
      <i class="icon ion-thumbsup"></i>
      Like
    </a>
    <a class="tab-item" href="#">
      <i class="icon ion-chatbox"></i>
      Comment
    </a>
    <a class="tab-item" href="#">
      <i class="icon ion-share"></i>
      Share
    </a>
  </div>

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css22.jpg"/>
### 表单输入
关于html5支持的输入类型，参考我的另外一篇[HTML5输入类型]()
1. 基本的表单，主意textarea标签，其他的主意placeholder属性
```{bash}
<div class="list">
  <label class="item item-input">
    <input type="text" placeholder="First Name">
  </label>
  <label class="item item-input">
    <input type="text" placeholder="Last Name">
  </label>
  <label class="item item-input">
    <textarea placeholder="Comments"></textarea>
  </label>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css23.jpg"/>
2. 带有标签的输入框,注意input-label样式
```{bash}
<div class="list">
  <label class="item item-input">
    <span class="input-label">Username</span>
    <input type="text">
  </label>
  <label class="item item-input">
    <span class="input-label">Password</span>
    <input type="password">
  </label>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css24.jpg"/>
3. 堆栈式的表单，注意item-stacked-label样式
```{bash}
<div class="list">
  <label class="item item-input item-stacked-label">
    <span class="input-label">First Name</span>
    <input type="text" placeholder="John">
  </label>
  <label class="item item-input item-stacked-label">
    <span class="input-label">Last Name</span>
    <input type="text" placeholder="Suhr">
  </label>
  <label class="item item-input item-stacked-label">
    <span class="input-label">Email</span>
    <input type="text" placeholder="john@suhr.com">
  </label>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css25.jpg"/>

4. 动态显示标签的堆栈式表单，注意item-floating-label样式，而且这个是和input-label样式的元素对应的，两者搭配使用。
```{bash}
<div class="list">
  <label class="item item-input item-floating-label">
    <span class="input-label">First Name</span>
    <input type="text" placeholder="First Name">
  </label>
  <label class="item item-input item-floating-label">
    <span class="input-label">Last Name</span>
    <input type="text" placeholder="Last Name">
  </label>
  <label class="item item-input item-floating-label">
    <span class="input-label">Email</span>
    <input type="text" placeholder="Email">
  </label>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css26.jpg"/>
5. 默认的form是满屏宽度的，还有一种 inset form 是带有padding的，类似inset list的样式。
```{bash}
<div class="list list-inset">
  <label class="item item-input">
    <input type="text" placeholder="First Name">
  </label>
  <label class="item item-input">
    <input type="text" placeholder="Last Name">
  </label>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css27.jpg"/>
6. 内嵌输入样式，和form一样，这种输入框并不是100%宽的。注意item-input-inset样式。
```{bash}
<div class="list">

  <div class="item item-input-inset">
    <label class="item-input-wrapper">
      <input type="text" placeholder="Email">
    </label>
    <button class="button button-small">
      Submit
    </button>
  </div>

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css27.jpg"/>
7. 带有icon的输入框，可以很轻松的给item-input元素添加icon，也可以添加placeholder内容
```{bash}
<div class="list list-inset">
  <label class="item item-input">
    <i class="icon ion-search placeholder-icon"></i>
    <input type="text" placeholder="Search">
  </label>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css29.jpg"/>
8. header上的输入框
```{bash}
<div class="bar bar-header item-input-inset">
  <label class="item-input-wrapper">
    <i class="icon ion-ios7-search placeholder-icon"></i>
    <input type="search" placeholder="Search">
  </label>
  <button class="button button-clear">
    Cancel
  </button>
</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css30.jpg"/>

### Toggle选择
toggle是一种比较容易操作的多选框，类似于checkbox，只不过表现上更容易操作，这里是用label标签包裹toggle组件，为了是更容易操作。
```{bash}
<ul class="list">

  <li class="item item-toggle">
     HTML5
     <label class="toggle toggle-assertive">
       <input type="checkbox">
       <div class="track">
         <div class="handle"></div>
       </div>
     </label>
  </li>

  ...

</ul>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css31.jpg"/>

### checkbox多选框
多选框是一种常见的html组件，这里同样使用label包裹多选框，为了方便实现tap操作，label标签中可以使用checkbox-assertive来指定选中激活时的颜色。
```{bash}
<ul class="list">

  <li class="item item-checkbox">
     <label class="checkbox">
       <input type="checkbox">
     </label>
     Flux Capacitor
  </li>

  ...

</ul>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css32.jpg"/>
### radio单选框
通过item-radio来表示单选框，每个都有相同的name属性，radio-icon样式的标签用来指定显示勾选的icon。这里同样使用label包裹整个组件，为了方便操作
```{bash}
<div class="list">

  <label class="item item-radio">
    <input type="radio" name="group">
    <div class="item-content">
      Go
    </div>
    <i class="radio-icon ion-checkmark"></i>
  </label>

  ...

</div>
```
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_css33.jpg"/>

### ionic中文详解CSS组件2
[参看ionic中文详解CSS组件（2）](http://www.haomou.net/2014/10/09/2014_ionic_api_css1/)
http://www.haomou.net/2014/10/09/2014_ionic_api_css1/

### 谢谢！
转载请注明出处：http://www.haomou.net/2014/08/09/2014_ionic_api_css/

有问题请留言。T_T  皓眸大前端开发学习  T_T
