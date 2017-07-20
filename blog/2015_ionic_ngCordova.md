### ngCordova是什么
开始学ionic的时候就嫌弃ionic做不了与手机硬件紧密结合的APP，今天无意中看到了另外一个项目ngCordova，福音啊。神马拍照啊，文件上传啊，地理位置啊，借助ngCordova插件都可以实现。ngCordova是结合cordova和angular包装了许多插件，诸如访问文件，摄像头，GPS等等，这些插件只需要简单配置就可以在ionic中使用。
教程索引：[ionic中文教程](/README.md)
<!--more-->
![](/assets/ionic.png)

### 为什么ngCordova
ngCordova是在Cordova Api基础上封装的一系列开源的AngularJs服务和扩展，让开发者可以方便的在HybridApp开发中调用设备能力，即可以在AngularJs代码中访问设备能力Api。

在cordova插件的sucess和error js回调方法中，是无法使用 angularjs的$scope对象和注入的方法的，只能访问全局的方法和变量，这样会导致很多麻烦，必须使用传统的js方法写很多难看的代码。使用ngCordova应该可以解决这个问题。

### ngCordova安装
进入到工程目录，使用bower工具安装
```
$ bower install ngCordova
```
然后将ng-cordova.js或者ng-cordova.min.js添加到index.html中的cordova.js引入之前，例如：
```
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```
然后再angular中添加ngCordova依赖，
```
angular.module('myApp', ['ngCordova'])
```
在使用每个插件之前，必须先检测设备是否就绪，通过cordova内置的原生事件deviceready来检测，如下：

```
document.addEventListener("deviceready", function () {
  $cordovaPlugin.someFunction().then(success, error);
}, false);
// OR with Ionic
$ionicPlatform.ready(function() {
  $cordovaPlugin.someFunction().then(success, error);
});
```
然后可以通过下面的命令添加插件到项目中：

```
cordova plugin add ...
```
至此ngcordova安装成功，关于plugin的教程，参见官网：
http://ngcordova.com/docs/plugins/

### 谢谢！
有问题请留言。T_T  别忘了给我点亮GIT星星哦！
欢迎关注我的博客: [皓眸大前端](http://www.haomou.net/)

