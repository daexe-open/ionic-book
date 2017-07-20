title: ionic框架配置
date: 2014-08-07 17:40:49
tags:
- ionic
- phonegap
categories:
- ionic|reapp
---
### ionic概述

这段时间在做手机应用开发，由于目前部分缺少Android开发人员，所以想做个WebApp的形式，然后用phoneGap打包，先做第一个样品试用。研究了比较多的开发框架，后来自己用AngularJS和Ratchet搭建了一个小框架，做的差不多了，然后感觉有些限制，用cordova编译之后，在Android平台上的运行效果并是不太好。所以又看了一下其他的框架，比如：Lungo和QuoJS等，突然发现了一个目前比较先进的框架ionic，所以就拿来用用。目前文档比较少，有的也仅是翻译官网的，所以我把自己的配置过程记录一下，分享给喜欢的同学。
教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)

<!--more-->
<img alt="皓眸大前端开发学习" src="/images/ionic.png" class="floatnone" alt="皓眸大前端开发学习"/>

转载请注明出处：http://www.haomou.net/2014/08/07/2014_ionic/
### ionic简介
ionic是一个专注于用WEB开发技术，基于HTML5创建类似于手机平台原生应用的一个开发框架。目前绑定的与angularJS和SASS。这个框架的目的是从web的角度开发手机应用，基于PhoneGap的编译平台，可以实现编译成各个平台的应用程序。
### ionic安装
首先需要安装cordova和android环境。这个参考我的另一篇文章：[phoneGap之Android环境搭建](http://www.haomou.net/2014/08/06/2014_phonegap_android/ )，上面写的很详细，还有常见的错误及解决办法。
然后安装ionic:
```{bash}
npm install -g ionic
```
如果因为网络原因安装不上有两种办法：
1.修改npm源为淘宝npm源，可以使用下面三种方法中的任意一种

A.通过config命令
```
npm config set registry https://registry.npm.taobao.org 
npm info underscore （如果上面配置正确这个命令会有字符串response）
```
B.命令行指定
```
npm --registry https://registry.npm.taobao.org info underscore 
```
C.编辑 ~/.npmrc 加入下面内容
```
registry = https://registry.npm.taobao.org
```
2.拷贝安装过的ionic目录，配置环境变量或者建立软连接。

安装完成之后，就可以使用ionic创建项目了。
```{bash}
ionic start myApp tabs   //创建带有top栏和bottom栏的示例项目
ionic start myApp sidemenu  //创建带有左侧带有menu栏的示例项目
ionic start myApp blank   //创建空白项目
```
具体效果，可以查看官网： http://ionicframework.com/getting-started/
然后可以使用：
```{bash}
ionic serve
```
该命令会自动启动流浏览器，查看当前效果。
### Ionic Lab
Ionic Lab 是桌面版的开发环境，如果你不喜欢使用命令行操作，Ionic Lab 将会满足你的需求。
Ionic Lab 为开发者提供了一个更简单的方法来开始，编译，运行，和模拟运行Ionic的应用程序。
Ionic Lab 支持的平台有：Window、Mac OS X、Linux，下载地址为：[http://lab.ionic.io/](http://lab.ionic.io/) ，下载后直接安装即可。整个操作界面如下所示：
<img alt="Ionic Lab" src="/images/lab-preview.png" class="floatnone"/>
通过以上界面你可以完成以下操作：
创建应用
预览应用
编译应用
运行应用
上传应用
运行日志查看

### 添加Android平台
执行下面的命令,
```{bash}
cd myApp
ionic platform add android //这行可能会报错
ionic build android
ionic emulate android
```
其实上面的使用方法和cordova差不多，添加android的时候可能会报错，如下：
```{bash}
The error is:
=======================================
events.js:72
throw er; // Unhandled 'error' event
^
Error: spawn ENOENT
at errnoException (child_process.js:1000:11)
at Process.ChildProcess._handle.onexit (child_process.js:791:34)
```
解决的方法很简单，将ionic换成cordova即可，经测试works fine。
```{bash}
cd myApp
cordova platform add android //这行可能会报错
cordova build android
cordova emulate android
```

### 其他常见错误
1. 生成项目(ionic start myApp tabs)时可能会报错，如下：
```{bash}
Error: command failed:fatal:could not create work tree dir:'C:\Users/ADMINI~1\AppData\Local\Temp\plugman\git\1402853493773'.:No such file or directory
```
解决办法：进入上面对应的目录，建立对应的文件。比如在temp目录下建立plugman目录，在plugman目录下建立git目录，然后再git下建立1402853493773目录。即可，经测试有效。

2.sh: 1: node-gyp: Permission denied 安装软件包报错
这个一般是centos等系统，在root用户下安装会报错。主要是权限问题，报错详情：
```
> node-gyp rebuild

 sh: 1: node-gyp: Permission denied
 \
 > ws@0.4.32 install /root/.nvm/versions/node/v0.12.4/lib/node_modules/log.io/node_modules/socket.io-client/node_modules/ws
 > (node​​-gyp rebuild 2> builderror.log) || (exit 0)


 > ws@0.4.32 install /root/.nvm/versions/node/v0.12.4/lib/node_modules/log.io/node_modules/socket.io/node_modules/socket.io-client/node_modules/ws
 > (node​​-gyp rebuild 2> builderror.log) || (exit 0)

 npm ERR! Linux 3.13.0-48-generic
 npm ERR! argv "/root/.nvm/versions/node/v0.12.4/bin/node" "/root/.nvm/versions/node/v0.12.4/bin/npm" "install" "-g" " log.io"
 npm ERR! node v0.12.4
 npm ERR! npm v2.10.1
 npm ERR! file sh
 npm ERR! code ELIFECYCLE
 npm ERR! errno ENOENT
 npm ERR! syscall spawn

 npm ERR! contextify@0.1.14 install: `node-gyp rebuild`
 npm ERR! spawn ENOENT
 npm ERR!
 npm ERR! Failed at the contextify@0.1.14 install script 'node-gyp rebuild'.
 npm ERR! This is most likely a problem with the contextify package,
 npm ERR! not with npm itself.
 npm ERR! Tell the author that this fails on your system:
 npm ERR! node-gyp rebuild
 npm ERR! You can get their info via:
 npm ERR! npm owner ls contextify
 npm ERR! There is likely additional logging output above.

 npm ERR! Please include the following file with any support request:
 npm ERR! /root/npm-debug.log
```
可以清楚看到讯息中提示我们在执行node-gyp 的时候权限不足。

查询一下Google ，找到别人blog写得简单解决方法：
```
 npm config set unsafe-perm true
```
接下来安装就正常了。 至于npm config的使用方法， 请参考 [此处](https://translate.googleusercontent.com/translate_c?depth=1&hl=zh-CN&prev=search&rurl=translate.google.com.sg&sl=zh-TW&u=https://docs.npmjs.com/misc/config&usg=ALkJrhjNU7KHzjR4I6JC5IMFf4Ffcg3KaA) .
我们可以从npm config set unsafe-perm的解说中看到，我们刚刚修改的意思。
```
Default: false if running as root, true otherwise
Type: Boolean
Set to true to suppress the UID/GID switching when running package scripts. If set explicitly to false, then installing as a non-root user will fail.
```

### css组件
参考我的另一篇文章：[ionic中文详解CSS组件](http://www.haomou.net/2014/08/09/2014_ionic_api_css/ )
### 谢谢！
转载请注明出处：http://www.haomou.net/2014/08/07/2014_ionic/

有问题请留言。T_T  皓眸大前端开发学习  T_T
