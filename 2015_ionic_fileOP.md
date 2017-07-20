title: ionic文件选择与上传
date: 2015-01-07 07:07:19
tags:
- ionic
- 教程
categories: ionic|reapp
---
### ionic文件操作
采用ionic开发hybrid app混合应用，自然少不了使用文件选择和上传操作，经过皓眸哥左看看，右瞅瞅，有两种可以实现的方法：
1.采用cordova插件，需要使用js绑定事件操作，无法使用angular
2.使用ngCordova插件，这个是结合cordova与angular封装的，更多介绍参考ionic开发插件之ngCordova配置安装
本文给出一个使用ionic和ngCordova插件制作图片文件选择与上传的综合实例工程，并放在github上，你可以down下载作为种子项目开发，本人已经在android 4.4和ios 7.1上测试过，完美运行。

教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_file.png"/>

转载请注明出处：http://www.haomou.net/2015/01/07/2015_ionic_fileOP/

### 创建项目
请先先参考我的另一篇博客：ionic框架配置搭建环境,然后继续。
执行下面的命令
```
ionic start myApp sidemenu
bower install ngCordova
cordova plugin add https://github.com/wymsee/cordova-imagePicker.git
```
上面我们只是添加了选择文件的插件，还没有使用文件上传，如果使用文件上传，添加下面的命令
```
cordova plugin add org.apache.cordova.file
cordova plugin add org.apache.cordova.file-transfer
```
修改程序
修改程序引入ngCordova插件。

### 修改index.html
```
<script src="lib/ngCordova/dist/ng-cordova.js"></script>
<script src="cordova.js"></script>
```
修改app.js

添加ngCordova模块。
```
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])
```
我们打算在browser页面制作演示程序,然后将默认页面指向browser页面：
```
$urlRouterProvider.otherwise('/app/browse');
```
### 修改controller

我们打算在browser页面制作演示程序，修改appctrl即可：
(注意添加$cordovaImagePicker模块)

```
angular.module('starter.controllers', [])
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout, $cordovaImagePicker) {
        // Form data for the login modal
        $scope.loginData = {};
        $scope.imgSrc = "";
        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/login.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });
        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };
        // Open the login modal
        $scope.login = function () {
            $scope.modal.show();
        };
        //image picker
        $scope.pickImage = function () {
            console.log("haha");
            var options = {
                maximumImagesCount: 1,
                width: 800,
                height: 800,
                quality: 80
            };
            $cordovaImagePicker.getPictures(options)
                .then(function (results) {
                    console.log(results);
                    $scope.imgSrc = results[0];
                }, function (error) {
                    // error getting photos
                });
        }
.....
.....
```
### 修改browser页面

修改browser.html
```
<ion-view view-title="Browse">
    <ion-content>
        <div class="list card">
            <div class="item item-avatar">
                <img src="img/ionic.png">
                <h2>皓眸IT</h2>
                <p>www.haomou.net</p>
            </div>
            <div class="item item-body">
                <img class="full-image" src="">
                <p>
                    click select button below（点击下面选择图片的按钮，选择你要展示的图片）
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
        <button class="button button-full button-positive" ng-click="pickImage()">
            select（选择图片）
        </button>
    </ion-content>
</ion-view>
```
然后就可以了。你可以现在本地测试，然后添加android或者ios平台模拟测试运行。

<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_file2.png"/>

### 项目代码
整个项目代码已经放到github上，如果你觉得不错，给我点个星星哈。
项目地址：https://github.com/chalecao/ionic_fileOP_demo


### 谢谢！
转载请注明出处：http://www.haomou.net/2015/01/07/2015_ionic_fileOP/

有问题请留言。T_T  皓眸大前端开发学习  T_T