### 一些配置
哎，真是不好意思。之前翻译Ionic教程的时候，忘记翻译ionic工具类api和配置这一块了。之前一致比较忙，忘记了。很多朋友经常问一些配置问题，比如为什么android的tab导航在上面，ios的tab导航在下面？...等等。其实这些都可以在ionic里面配置的。下面看我一一道来。
教程索引：[ionic中文教程](/README.md)
<!--more-->
![](/assets/ionic.png)


### $ionicConfigProvider
$ionicConfigProvider可是一个神器，可以配置很多东东。比如配置view的缓存，配置tab栏的显示位置，配置过渡动画等等。
下面一个一个说。
#### views.maxCache配置view缓存
可以配置整个平台的ionic view缓存，也可以配置android平台或者ios平台的缓存，如下：
```
var myApp = angular.module('reallyCoolApp', ['ionic']);

myApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);
  //配置android平台的缓存
  $ionicConfigProvider.platform.android.views.maxCache(5);

  // note that you can also chain configs
  $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
});
```
#### $ionicConfigProvider的所有方法
1. views.transition(transition/string)
设置视图之间的过渡切换效果，默认是platform，可选值如下：
platform: 根据平台动态选择相应的过渡效果，如果不是android或者ios，则默认是ios.
ios: iOS过渡效果.
android: Android过渡效果.
none: 无过渡效果.

2. views.maxCache(maxNumber/number)
设置DOM中缓存的最大视图数目，如果超过限制，则移除最长时间没有显示的视图。DOM缓存中的视图会缓存scope和当前状态以及滚动的位置。缓存中的scope并不在 $watch 监听生命周期中，当视图重新显示的时候，会重新进入 $watch。如果 maximum cache 设置为 0, 离开的view会被立即从dom中移除, 下次再显示这个view的时候, 就会重新编译, 附加到dom上, 重新绑定到对应的元素.相当于是禁用缓存.


3.views.forwardCache(value/boolean)
默认情况下，最近访问的视图会被缓存，当导航回到某个已经访问过的视图的时候，相同实例的数据和dom元素会被重新引用到。然而，当回退到上一个视图的时候，刚刚前进的视图会被清除掉，如果你再次前进到这个视图，就会创建一个新的DOM节点元素和控制器实例。基本上任何一个前进访问的视图每次都会被重置。这个设置选项中设置为true的时候就会缓存前进的视图，而且不会每次加载的时候不会重置。

4.scrolling.jsScrolling(value/boolean)
配置是使用js的scroll滚动还是使用原生的滚动。如果设置为false和在每个 ion-content中设置overflow-scroll='true'一样的效果。

5.backButton.icon(value/string)
设置返回按钮的图标。

6.backButton.text(value/string)
设置返回按钮的文字。

7. backButton.previousTitleText(value/boolean)
设置是否将上一个view视图的title设置成返回按钮的文字，iOS是默认的true。


7.form.checkbox(value/string)
设置Checkbox的样式. Android 默认是方形square，iOS 默认是圆形circle.

8.form.toggle(value/string)
设置Toggle元素的样式. Android默认是small，iOS默认是large.

9.spinner.icon(value/string)
设置默认的spinner图标。可以是: android, ios, ios-small, bubbles, circles, crescent, dots, lines, ripple, or spiral.

10.tabs.style(value/string)
设置tab的样式。 Android 默认是striped and iOS 默认是standard。可选的值是striped and standard.

11.tabs.position(value/string)
设置Tab的位置. Android tab的位置默认在顶部，iOS 默认是在底部.可选的值是 top 和 bottom.

12.templates.maxPrefetch(value/integer)
设置根据在$stateProvider.state中定义的模板url预取的模板数量。 如果设置为 0,当导航到新的页面时候用户必须等待加载到该页面. 默认是 30.

13. navBar.alignTitle(value)
设置导航条的标题的对其方式。 默认是center。可选值如下：

platform: 根据平台动态选择标题的样式，ios默认显示为center，android默认是left，如果不是ios或android，则默认显示center。
left: 导航条标题显示在左边
center: 导航条标题显示在中间
right: 导航条标题显示在右边

14.navBar.positionPrimaryButtons(value/string)
设置导航条中主导航按钮的对其位置，默认是 left.

platform: 根据平台动态选择标题的样式，ios默认显示为left，android默认是right，如果不是ios或android，则默认显示left。
left: Left align the primary navBar buttons in the navBar
right: Right align the primary navBar buttons in the navBar.

15.navBar.positionSecondaryButtons(value/string)
设置导航条中次导航按钮的对其位置，默认是 left.

platform: 根据平台动态选择标题的样式，ios默认显示为right，android默认是left，如果不是ios或android，则默认显示right。
left: Left align the primary navBar buttons in the navBar
right: Right align the primary navBar buttons in the navBar.


### ionic.Platform平台相关接口
ionic.Platform提供了平台相关的函数方法。
```
angular.module('PlatformApp', ['ionic'])
.controller('PlatformCtrl', function($scope) {

  ionic.Platform.ready(function(){
    // will execute when device is ready, or immediately if the device is already ready.
  });

  var deviceInformation = ionic.Platform.device();

  var isWebView = ionic.Platform.isWebView();
  var isIPad = ionic.Platform.isIPad();
  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();
  var isWindowsPhone = ionic.Platform.isWindowsPhone();

  var currentPlatform = ionic.Platform.platform();
  var currentPlatformVersion = ionic.Platform.version();

  ionic.Platform.exitApp(); // stops the app
});

```
#### ionic.Platform所有方法
1. ready(callback)
设备准备就绪后触发回调函数, 如果设备本来已经就绪会立即触发回调函数。该方法可以在任何地方运行，不用包装在方法中。当APP中有WebView (Cordova), 设备就绪时就会调用回调。如果app是在web browser中, 会在window.load之后调用回调函数。 需要注意Cordova features (Camera, FileSystem, etc) 在web浏览器中都不会起作用。

2. setGrade(grade)
Set the grade of the device: 'a', 'b', or 'c'. 'a' is the best (most css features enabled), 'c' is the worst. By default, sets the grade depending on the current device.

3. device()
Return the current device (given by cordova).returns: object The device object.

4.isWebView()
Returns: boolean Check if we are running within a WebView (such as Cordova).

5.isIPad()
Returns: boolean Whether we are running on iPad.

6.isIOS()
Returns: boolean Whether we are running on iOS.

7.isAndroid()
Returns: boolean Whether we are running on Android.

8.isWindowsPhone()
Returns: boolean Whether we are running on Windows Phone.

9.platform()
Returns: string The name of the current platform.

10.version()
Returns: number The version of the current device platform.

11.exitApp()
Exit the app.

12.showStatusBar(shouldShow/boolean)
Shows or hides the device status bar (in Cordova). Requires cordova plugin add org.apache.cordova.statusbar

13.fullScreen([showFullScreen/boolean], [showStatusBar/boolean])
Sets whether the app is fullscreen or not (in Cordova).

#### ionic.Platform属性
1. boolean isReady
Whether the device is ready.

2. boolean isFullScreen
Whether the device is fullscreen.

3. Array(string) platforms
An array of all platforms found.

4. string grade
What grade the current platform is.


### 谢谢！
有问题请留言。T_T  别忘了给我点亮GIT星星哦！
欢迎关注我的博客: [皓眸大前端](http://www.haomou.net/)

