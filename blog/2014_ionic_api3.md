title: ionic中文javascript API(3)
date: 2014-10-20 20:20:20
tags:
- ionic
- 教程
categories: ionic|reapp
---
### 简介
onic除了提供css框架以外，参看ionic中文详解CSS组件,还是提供了javascript UI库。许多组件都是需要通过javascript来产生比较炫的效果。ionic遵循了mvc的设计模式，这一点可以通过通过创建tab栏的官方例子项目来体会view之间的控制与切换。下面就是关于ionic的中文javascript API介绍。其实官方已经写的比较详细了，只是国内访问网速不好的地方，那个js菜单栏一直展不开，加载慢，所以自己做一个中文的，方便以后查找。
内容比较长，参看：教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionicstart.png"/>

转载请注明出处：http://www.haomou.net/2014/10/20/2014_ionic_api3/

### Popover
$ionicPopover, 参看接着讲解的 ionicPopover 控制器。这个控件和上篇中讲到的ionicModal 内容基本一致。
popover是浮动在用户app内容之上的view视图，很方便的用来展示或收集用户信息，主要用于：

展示当前view视图的更多信息
选择一个常用的工具或配置
展现一个app视图中的动作列表
把要显示在popover中的内容放在元素中即可。
用法：
```
<p>
  <button ng-click="openPopover($event)">Open Popover</button>
</p>
<script id="my-popover.html" type="text/ng-template">
  <ion-popover-view>
    <ion-header-bar>
      <h1 class="title">My Popover Title</h1>
    </ion-header-bar>
    <ion-content>
      Hello!
    </ion-content>
  </ion-popover-view>
</script>

angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $ionicPopover) {
  $ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });
});
```
API 方法：

```
fromTemplate(templateString, options), 返回ionicPopover的控制器实例
----templateString, 类型string，modal中显示的内容。
----options，类型object，传递给 $ionicPopover 初始化方法的参数
-------------------------------------------
fromTemplateUrl(templateUrl, options)，返回 ionicPopover 的控制器实例中用到的promise对象
----templateString, 类型string，modal中显示的内容url。
----options，类型object，传递给 $ionicPopover 初始化方法的参数
```
#### ionicPopover

由$ionicPopover 服务调用，当你不需要popover 的时候，要及时调用remove()方法以避免发生内存泄漏。
注意：popover 会从它自身的scope中广播’popover.shown’, ‘popover.hidden’, 和’popover.removed’事件，把这个作为传递事件参数的一部分。移除popover时会调用popover.removed 和 popover.hidden 这两个事件。

方法：

```
initialize(options), 创建一个新的modal控制器实例
----options，类型object，可选值：
-------------{object=} 父scope，默认在$rootScope下创建独立的scope
-------------{string=} 显示或隐藏的动画效果. 默认是'slide-in-up'
-------------{boolean=} 是否让popover的第一个输入获得焦点，默认是false.
-------------{boolean=} 点击背景的是否自动关闭popover，默认是 true
-------------{boolean=} 是否可以使用手机的硬件返回按钮关闭popover，默认: true.
show($event)，显示popover，返回popover 显示后的promise对象
------$event，这个popover对齐的event或target元素
hide(), 隐藏popover，返回popover 隐藏后的promise对象
remove()，从dom中移除popover 实例，并clean，返回popover 移除后的promise对象
isShown(), 返回boolean，表示当前popover 是否显示
```

### platform
$ionicPlatform , 参看本篇utility中介绍的 ionic.Platform.
用于检测当前的系统平台。比如处理绑定某些android手机上有硬件返回按钮的事件。
API 方法：
```
onHardwareBackButton(callback), 当点击系统物理按键时绑定的方法
----callback，类型function，绑定的回调方法
offHardwareBackButton(callback)，移除绑定在点击物理按键的回调方法
----callback，类型function，已经绑定的方法
registerBackButtonAction(callback, priority, [actionId])，给物理按键绑定一个action动作，当点击物理按键时，实际上只会执行一个action，所以这里会指定优先级参数。例如当显示actionsheet的时候，点击物理返回按键，这时候应该关闭这个actionsheet，而不应该退出程序，或者关闭其他的modal。返回是一个function函数，当调用这个返回函数时，会解除绑定的回调。
----callback，类型function，绑定的回调方法
----priority，类型number，优先级，只会执行优先级最高的方法
----actionId（可选），绑定这个回调对应的id，默认是随机生成的唯一的id
on(type, callback)，增加Cordova 事件监听器，比如pause, resume, volumedownbutton, batterylow, offline, 等等。更多信息，参考[Cordova's event documentation](https://cordova.apache.org/docs/en/edge/cordova_events_events.md.html#Events ). 返回function函数，调用这个返回函数可以移除注册的监听器。
----type, 类型string，Cordova 事件类型
----callback，类型function，监听函数
ready([callback])，当设备ready时候触发的事件。当设备已经ready时，会立马触发这个函数。返回一个promise对象，设备ready时候用到。
----callback，类型function，监听函数
```
### Popup
ionic popup服务允许通过程序创建一个popup弹出的窗口，需要用户交互才可以继续。
popup支持原生的 alert(),prompt(),confirm() 这些弹出窗口，也支持可定制内容和样式的弹出框。
popup中的input可以增加autofocus属性，这样当弹出对话框时，会自动是这个input获得焦点。
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic33.png"/>
用法：

```
angular.module('mySuperApp', ['ionic'])
.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {
// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {}
  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      },
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };
 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };
 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
});
```
API 方法：

show(options), 显示一个复杂的popup弹出框。
复杂的弹出框，可以设置一个buttons数组，里面每个button可以设置text属性，type属性和onTap事件，而系统默认在点击按钮时，会关闭对话框并返回结果到promise对象中，如果你不想关闭对话框，可以在onTap事件函数中调用event.preventDefault()。返回一个promise对象，该对象有个close方法，可以在程序中调用这个方法来关闭弹出框。
—-options， 类型是object，参考示例如下：

```
{
  title: '', // String. The title of the popup.
  subTitle: '', // String (optional). The sub-title of the popup.
  template: '', // String (optional). The html template to place in the popup body.
  templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
  scope: null, // Scope (optional). A scope to link to the popup content.
  buttons: [{ //Array[Object] (optional). Buttons to place in the popup footer.
    text: 'Cancel',
    type: 'button-default',
    onTap: function(e) {
      // e.preventDefault() will stop the popup from closing when tapped.
      e.preventDefault();
    }
  }, {
    text: 'OK',
    type: 'button-positive',
    onTap: function(e) {
      // Returning a value will cause the promise to resolve with the given value.
      return scope.data.response;
    }
  }]
}
```
alert(options)，警告弹出框，显示一段信息，和一个按钮，点击按钮可以关闭弹出框。返回一个promise对象，该对象有个close方法，可以在程序中调用这个方法来关闭弹出框。
——options，类型object，配置弹出框的参数。
```
{
  title: '', // String. The title of the popup.
  subTitle: '', // String (optional). The sub-title of the popup.
  template: '', // String (optional). The html template to place in the popup body.
  templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
  okText: '', // String (default: 'OK'). The text of the OK button.
  okType: '', // String (default: 'button-positive'). The type of the OK button.
}
```
confirm(options)，弹出一个comfirm对话框，点击ok按钮返回true，点击cancel返回false的promise对象。返回一个promise对象，该对象有个close方法，可以在程序中调用这个方法来关闭弹出框。
——options，类型object，显示confirm对话框的参数。例子：

```
{
  title: '', // String. The title of the popup.
  subTitle: '', // String (optional). The sub-title of the popup.
  template: '', // String (optional). The html template to place in the popup body.
  templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
  cancelText: '', // String (default: 'Cancel'). The text of the Cancel button.
  cancelType: '', // String (default: 'button-default'). The type of the Cancel button.
  okText: '', // String (default: 'OK'). The text of the OK button.
  okType: '', // String (default: 'button-positive'). The type of the OK button.
}
```
prompt(options),显示一个带有输入框，ok按钮，cancel按钮的对话框。点击ok时，返回的promise对象中包含输入的值，点击cancel时，值为undefined。返回的promise对象有个close方法，可以在程序中调用这个方法来关闭弹出框。使用例子：

```
$ionicPopup.prompt({
   title: 'Password Check',
   template: 'Enter your secret password',
   inputType: 'password',
   inputPlaceholder: 'Your password'
 }).then(function(res) {
   console.log('Your password is', res);
 });
 ```
—— options, 类型object，配置对话框参数。示例：

```
{
  title: '', // String. The title of the popup.
  subTitle: '', // String (optional). The sub-title of the popup.
  template: '', // String (optional). The html template to place in the popup body.
  templateUrl: '', // String (optional). The URL of an html template to place in the popup   body.
  inputType: // String (default: 'text'). The type of input to use
  inputPlaceholder: // String (default: ''). A placeholder to use for the input.
  cancelText: // String (default: 'Cancel'. The text of the Cancel button.
  cancelType: // String (default: 'button-default'). The type of the Cancel button.
  okText: // String (default: 'OK'). The text of the OK button.
  okType: // String (default: 'button-positive'). The type of the OK button.
}
```
### scroll
ion-scroll 创建一个可以容纳所有内容，滚动的容器。
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic34.png"/>

用法：
```
<ion-scroll zooming="true" direction="xy" style="width: 500px; height: 500px">
  <div style="width: 5000px; height: 5000px; background: url('https://upload.wikimedia.org/wikipedia/commons/a/ad/Europe_geological_map-en.jpg') repeat"></div>
 </ion-scroll>
```
注意：设置scroll box的高度和内部内容的高度很重要，这样才可以让滚动区域随意滚动显示。
API 参数：

```
delegate-handle(optional), string,控制这个scroll view的委托实例$ionicScrollDelegate
direction(optional),string,滚动的方向. 'x' or 'y' or 'xy'. 默认是 'y'.
属性：locking（可选）,类型boolean，是否锁定一次只能滚动一个方向
属性:padding（可选），类型boolean，是否给content增加padding，iOS默认为true，android默认为false
属性：scroll（可选），类型boolean，是否允许滚动内容，默认是true
属性：on-scroll，类型：expression，滚动内容时执行的表达式
属性：on-refresh，类型：expression，下拉刷新时调用，由ionRefresher 触发。
属性：scrollbar-x，类型boolean，是否显示x轴滚动条
属性：scrollbar-y，类型boolean，是否显示y轴滚动条
属性：zooming，类型boolean，是否支持手势缩放
属性：min-zoom，类型integer，最小缩放比例，默认是0.5
属性：max-zoom，类型integer，最大缩放比例，默认是3
属性：has-bouncing，类型：boolean，是否允许滚动时弹跳超过内容体的边界，ios默认true，Android默认false
```
#### ion-infinite-scroll

ionContent 和 ionScroll 中共有的子元素。
ionInfiniteScroll 允许你在用户滚动到内部内容的边缘时调用一个回调函数。
当用户滚动内容距离底部小于distance定义的距离时，会自动调用on-infinite中定义的回调函数，可以加载更多内容，加载完更多内容后，在控制器中需要广播croll.infiniteScrollComplete 事件。使用实例：

```
<ion-content ng-controller="MyController">
  <ion-list>
  ....
  ....
  </ion-list>
  <ion-infinite-scroll
    on-infinite="loadMore()"
    distance="1%">
  </ion-infinite-scroll>
</ion-content>
function MyController($scope, $http) {
  $scope.items = [];
  $scope.loadMore = function() {
    $http.get('/more-items').success(function(items) {
      useItems(items);
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  $scope.$on('$stateChangeSuccess', function() {
    $scope.loadMore();
  });
}
```
当没有更多内容加载时，停止infinite scroll的方法是使用ng-if指令
```
<ion-infinite-scroll
  ng-if="moreDataCanBeLoaded()"
  icon="ion-loading-c"
  on-infinite="loadMoreData()">
</ion-infinite-scroll>
```
API 参数：
```
on-infinite, 类型expression，当滚动到底部时候的调用函数
distance（可选），类型string，定义距离底部多少时调用on-infinite定义的表达式，默认是：1%
icon（可选），类型string，定义加载过程中显示的图标，默认是‘ion-loading-d'

$ionicScrollDelegate
```


### 谢谢！
转载请注明出处：http://www.haomou.net/2014/10/20/2014_ionic_api3/

有问题请留言。T_T  皓眸大前端开发学习  T_T