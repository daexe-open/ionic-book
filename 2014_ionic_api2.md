title: ionic中文javascript API(2)
date: 2014-10-13 13:13:13
tags:
- ionic
- 教程
categories: ionic|reapp
---
### 简介
ionic除了提供css框架以外，参看ionic中文详解CSS组件,还是提供了javascript UI库。许多组件都是需要通过javascript来产生比较炫的效果。ionic遵循了mvc的设计模式，这一点可以通过通过创建tab栏的官方例子项目来体会view之间的控制与切换。下面就是关于ionic的中文javascript API介绍。其实官方已经写的比较详细了，只是国内访问网速不好的地方，那个js菜单栏一直展不开，加载慢，所以自己做一个中文的，方便以后查找。
教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionicstart.png"/>

转载请注明出处：http://www.haomou.net/2014/10/13/2014_ionic_api2/

### Events
本节详细介绍ionic支持的所有事件。

#### on-hold

同一位置触摸时间超过500ms，类似于angular和jquery中的long touch。
用法：

```
<button on-hold="onHold()" class="button">Test</button>
```
#### on-tap

快速触摸某个位置，触摸时间不超过250ms。
用法：

```
<button on-tap="onTap()" class="button">Test</button>
```
#### on-touch

用户开始触摸屏幕就立即触发该事件。
用法:

```
<button on-touch="onTouch()" class="button">Test</button>
```
#### on-release

用户离开屏幕，结束触摸时触发
用法：

```
<button on-release="onRelease()" class="button">Test</button>
```
#### on-drag

在页面触摸一个点移动时触发。向左或向右拖拽时阻止页面滚动是一个很好饿用户体验。
用法：

```
<button on-drag="onDrag()" class="button">Test</button>
```
#### on-drag-up

向上拖拽时候触发。
用法：

```
<button on-drag-up="onDragUp()" class="button">Test</button>
```
#### on-drag-right

向右拖拽时候触发。
用法：

```
<button on-drag-right="onDragRight()" class="button">Test</button>
```
#### on-drag-down

向下拖拽时候触发。
用法：

```
<button on-drag-down="onDragDown()" class="button">Test</button>
```
#### on-drag-left

向左拖拽时候触发。
用法：

```
<button on-drag-left="onDragLeft()" class="button">Test</button>
```
##### on-swipe

很快的速度向任何方向滑动时触发
用法：

```
<button on-swipe="onSwipe()" class="button">Test</button>
```
#### on-swipe-up

快速向上滑动时触发
用法：

```
<button on-swipe-up="onSwipeUp()" class="button">Test</button>
```
#### on-swipe-left

快速向左滑动时触发
用法：
```
<button on-swipe-left="onSwipeLeft()" class="button">Test</button>
```
#### on-swipe-right

快速向右滑动时触发
用法：

```
<button on-swipe-right="onSwipeRight()" class="button">Test</button>
```
#### on-swipe-down

快速向上滑动时触发
用法：

```
<button on-swipe-down="onSwipeDown()" class="button">Test</button>
```
### FormInputs
#### ion-checkbox

这个checkbox指令和网页版的没什么区别，只是显示的样式不一样。其行为和AngularJs checkbox是一样的。
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic31.png"/>
用法：
```
<ion-checkbox ng-model="isChecked">Checkbox Label</ion-checkbox>
```
#### ion-radio

这个radio指令和网页版的没什么区别，只是显示的样式不一样。其行为和AngularJs Radio是一样的。
用法：

```
<ion-radio ng-model="choice" ng-value="'A'">Choose A</ion-radio>
<ion-radio ng-model="choice" ng-value="'B'">Choose B</ion-radio>
<ion-radio ng-model="choice" ng-value="'C'">Choose C</ion-radio>
```
#### ion-toggle

ion-toggle是个模拟的开关，绑定一个boolean类型的数据模型。可以通过拖拽切换开关。其行为和AngularJs checkbox是一样的。
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic32.png"/>
用法：
```
<ion-toggle ng-model="airplaneMode" toggle-class="toggle-calm">Airplane Mode</ion-toggle>
```
### Gesture
$ionicGesture

ionic.EventController的手势中的关于手势的angular服务。
方法：
```
on(eventType, callback, $element)
给某个元素增加手势监听时间。参看：ionic.EventController
参数：eventType  类型：string  说明：监听的手势时间类型
参数：callcallback   类型：function（e） 说明：手势触发后回调的函数
参数：$element   类型：元素element   说明：监听时间的元素
返回类型：ionic.Gesture 类型的对象，后面可以用这个对象移除监听的事件。
-------------------------------------
off(gesture, eventType, callback)
移除元素监听的手势事件，参看：ionic.EventController
参数：gesture   类型：ionic.Gesture 说明：要移除的手势对象（绑定手势时返回的对象）
参数：eventType  类型：string  说明：移除的手势事件类型
参数：callback  类型：function(e)   说明：移除手势后的回调函数
```
### headers_footers
#### ion-header-bar
在某些内容上面增加一个固定的顶栏，如果应用了‘bar-subheader’样式，显示的也可以是一个subheader。参看ionic中文详解CSS组件(1)
注意：如果这个组件和ng-if一块使用，默写时候会导致组件无法正确对齐，这个bug会很快修复。
用法：
```
<ion-header-bar align-title="left" class="bar-positive">
  <div class="buttons">
    <button class="button" ng-click="doSomething()">Left Button</button>
  </div>
  <h1 class="title">Title!</h1>
  <div class="buttons">
    <button class="button">Right Button</button>
  </div>
</ion-header-bar>
<ion-content>
  Some content!
</ion-content>
```
API说明：
```
属性：align-title(可选)   类型：string   说明：title如何对齐，可选项’left', 'right', or 'center'. 默认是'center'.
属性：no-tap-scroll（可选）  类型:boolean  说明：默认情况下，点击header的时候会自动将header滚动到顶部，这个属性用于禁用这个行为。可选项：true或false。默认false
```
#### ion-footer-bar

在某个内容下面增加固定的底栏。应用 ‘bar-subfooter’样式后也可以是个subfooter (higher up)，参看ionic中文详解CSS组件(1)
注意：如果这个组件和ng-if一块使用，默写时候会导致组件无法正确对齐，这个bug会很快修复。
用法：

```
<ion-content>
  Some content!
</ion-content>
<ion-footer-bar align-title="left" class="bar-assertive">
  <div class="buttons">
    <button class="button">Left Button</button>
  </div>
  <h1 class="title">Title!</h1>
  <div class="buttons" ng-click="doSomething()">
    <button class="button">Right Button</button>
  </div>
</ion-footer-bar>
```
API说明：
属性：align-title(可选)   类型：string   说明：title如何对齐，可选项’left', 'right', or 'center'. 默认是'center'.
keyboard
在android和ios中，ionic会尽量阻止因为滚动显示出来的键盘而导致的输入框或者可获焦点的元素模糊不清，为了达到这个目的，所有可获焦点的元素都必须放在scroll view中，或者有scroll view的指令中，比如content。
同样会阻止获得焦点时的滚动溢出，这会导致布局的问题，比如headers获得焦点后会滚动到顶部，然后被溢出（overflow）。
这个keyboard 补丁和 Ionic Keyboard Plugin在一块运行时可以获得最好的效果，当然没有这个plugin keyboard也可以很好的工作。如果你在使用cordova，你可以使用这个plugin。
如果你想在显示键盘的时候隐藏某个元素，可以使用‘hide-on-keyboard-open’ 类
```
<div class="hide-on-keyboard-open">
  <div id="google-map"></div>
</div>
```
plugin的用法：参考https://github.com/driftyco/ionic-plugins-keyboard.

Android开发中的注意事项：

如果你的app是全屏运行，即：你的config.xml中的配置是
```
<preference name="Fullscreen" value="true" />
```
这时候需要手动设置：ionic.Platform.isFullScreen = true

你可以设置当显示键盘的时候 web view的行为，可以通过设置app activity中的AndroidManifest.xml中的android:windowSoftInputMode的值为adjustPan, adjustResize 或者 adjustNothing。ionic推荐使用adjustPan，但是由于某些特殊的原因，可能需要设置ionic.Platform.isFullScreen = true.
```
<activity android:windowSoftInputMode="adjustResize">
```
IOS注意事项：

如果你app中的内容包括header被溢出，显示到view之外，可以通过尝试设置cordova.plugins.Keyboard.disableScroll(true)。
这个设置并不是阻止ionic中的scroll view的滚动，而是阻止原生的点击输入弹出键盘时的滚动溢出。
### keyboard-attach

keyboard-attach是一个属性指令，它会使某个元素浮动显示在弹出的键盘之上，目前只支持ion-footer-bar指令。
注意事项：

这个指令需要ionic Keyboard Plugin.
在android非全屏模式，也就是config.xml中的配置是 或者不配置preference。就不需要这个指令了。
在iOS上，如果在footer上有个input，你需要设置：cordova.plugins.Keyboard.disableScroll(true).
用法：
```
<ion-footer-bar align-title="left" keyboard-attach class="bar-assertive">
   <h1 class="title">Title!</h1>
 </ion-footer-bar>
```
### Lists
ion-list ,委托控制类$ionicListDelegate。
list是最广泛使用的一个控件，从最简单的只包含文本的list，到很复杂包含按钮，图片的list，几乎所有移动app应用都会用到。

list和list中的item都可以是任何html元素，对于container元素需要使用list样式类，每条item需要应用item样式类。

然而使用ionList 和ionItem 指令 可以很容易的支持各种交互类型，比如通过点击来编辑，拖拽来重新排序和删除item项。

相关的组件：ionItem, ionOptionButton ionReorderButton, ionDeleteButton, list CSS documentation.
用法：
基本用法：
```
<ion-list>
  <ion-item ng-repeat="item in items">
    Hello, !
  </ion-item>
</ion-list>
```
高级用法，包括缩略图，删除按钮，重排序，划屏。

```
<ion-list ng-controller="MyCtrl"
          show-delete="shouldShowDelete"
          show-reorder="shouldShowReorder"
          can-swipe="listCanSwipe">
  <ion-item ng-repeat="item in items"
            class="item-thumbnail-left">
    <img ng-src="">
    <h2></h2>
    <p></p>
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
API说明：

```
属性：delegate-handle（可选），类型：string,说明：针对这个list的handle方法，可以使用$ionicListDelegate 操作。
属性：type(可选)，类型：string, 说明：list的类型，list-set或 card
属性：show-delete(可选)，类型：boolean，是否在items中显示删除按钮
属性: show-reorder(可选)，类型：boolean，是否在items中显示重排序按钮
属性：can-swipe(可选)，类型：boolean，是否在items中通过swipe显示options按钮，默认是true
```
#### collection-repeat
由于目前ionic升级版本，增加了许多之前没有的API，这里先补充这个API啊。collection-repeat是ionic提供的比ng-repeat效率和性能更优的循环列表指令。这个指令只会把可见的内容渲染到DOM中。比如在手机上加载一个很长的列表，只有滚动到的位置的上下相关内容会被渲染。使用实例：
```
<ion-content>
  <ion-item collection-repeat="item in items">
    {{item}}
  </ion-item>
</ion-content>
----------------------------------------------
<ion-content>
  <img collection-repeat="photo in photos"
    item-width="33%"
    item-height="200px"
    ng-src="{{photo.url}}">
</ion-content>
----------------------------------------------
<ion-content>
  <h2>Available Kittens:</h2>
  <ion-scroll direction="x" class="available-scroller">
    <div class="photo" collection-repeat="photo in main.photos"
       item-height="250" item-width="photo.width + 30">
       <img ng-src="{{photo.src}}">
    </div>
  </ion-scroll>
</ion-content>
```

### loading
$ionicLoading , 当用户不能交互时的弹出层，用于表示应用正在运行。
用法：

```
angular.module('LoadingApp', ['ionic'])
.controller('LoadingCtrl', function($scope, $ionicLoading) {
  $scope.show = function() {
    $ionicLoading.show({
      template: 'Loading...'
    });
  };
  $scope.hide = function(){
    $ionicLoading.hide();
  };
});
```
API方法：
show(options), 显示loading加载层。如果loading已经显示了，则会应用options的值，并保持显示。
```
options，类型：object，可用的值如下：
--{string=}，template 显示的html内容
--{string=}，加载的html的url
--{boolean=}，noBackDrop，是否显示后台页面，默认是显示
--{number=},delay,延时多长时间再显示这个loading,默认无延迟
--{number=}，duration，显示多长时间后隐藏loading层，默认一直显示，直到调用hide方法
```
hide方法：hide(),隐藏显示的loading层

### Modal
$ionicModal,参看下面的ionicModal controller.
modal就是一个暂时浮现在view视图最上方的内容面板，经常用作选择或者编辑某个项目，把内容放在元素中即可。
注意：model会从它自身的scope中广播’modal.shown’, ‘modal.hidden’, 和’modal.removed’事件，把这个作为传递事件参数的一部分。移除model时会调用modal.removed 和 modal.hidden 这两个事件。
下面的例子假设你的modal在index首页或某个模板中，如果不是的话，你可以去掉script标签，通过文件名调用。

```
<script id="my-modal.html" type="text/ng-template">
  <ion-modal-view>
    <ion-header-bar>
      <h1 class="title">My Modal title</h1>
    </ion-header-bar>
    <ion-content>
      Hello!
    </ion-content>
  </ion-modal-view>
</script>

angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
});
```
API方法参数：

```
fromTemplate(templateString, options)，返回 ionicModal的控制器实例
----templateString, 类型string，modal中显示的内容。
----options，类型object，传递给 ionicModal#initialize  初始化方法的参数
-------------------------------------------
fromTemplateUrl(templateUrl, options)，返回 ionicModal的控制器实例中用到的promise对象
----templateString, 类型string，modal中显示的内容url。
----options，类型object，传递给 ionicModal#initialize  初始化方法的参数
```
### ionicModal

由$ionicModal 服务调用，当你不需要modal的时候，要及时调用remove()方法以避免发生内存泄漏。
注意：model会从它自身的scope中广播’modal.shown’, ‘modal.hidden’, 和’modal.removed’事件，把这个作为传递事件参数的一部分。移除model时会调用modal.removed 和 modal.hidden 这两个事件。

方法：
```
initialize(options), 创建一个新的modal控制器实例
----options，类型object，可选值：
-------------{object=} 父scope，默认在$rootScope下创建独立的scope
-------------{string=} 显示或隐藏的动画效果. 默认是'slide-in-up'
-------------{boolean=} 是否让modal的第一个输入获得焦点，默认是false.
-------------{boolean=} 点击背景的是否自动关闭modal，默认是 true
-------------{boolean=} 是否可以使用手机的硬件返回按钮关闭modal，默认: true.
show()，显示modal，返回modal显示后的promise对象
hide(), 隐藏modal，返回modal隐藏后的promise对象
remove()，从dom中移除modal实例，并clean，返回modal移除后的promise对象
isShown(), 返回boolean，表示当前modal是否显示
```

### 第三部分
参看：[ionic中文javascript API(3)](http://www.haomou.net/2014/10/20/2014_ionic_api3/)


### 谢谢！
转载请注明出处：http://www.haomou.net/2015/02/10/2015_ionic_plugin/

有问题请留言。T_T  皓眸大前端开发学习  T_T