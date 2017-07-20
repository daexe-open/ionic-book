title: 手机网页调试工具weinre
date: 2015-08-20 11:36:55
tags:
- ionic
- weinre
categories: ionic|reapp
---
### 调试手机网页
调试手机网页一直很头疼，以前的做法全靠自己分析，用不同的浏览器打开做的网页，根据现象分析结果。貌似好不方便，要是能像浏览器开发者工具那样查看就好了。那么weinre来了。其实这个项目已经早有了。[weiner主页](http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html)：http://people.apache.org/~pmuellr/weinre/docs/latest/Home.html
这里我们还是介绍一下怎么使用吧。当然调试ionic app也可以用到，所以就放到ionic系列教程里了。
教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/weinre-demo.jpg"/>

转载请注明出处：http://haomou.net/2015/08/20/2015_ionic_debug2/

### 配置调试服务器
1、安装node.js
安装程序下载：http://nodejs.org/#download
本文安装在“F:/nodejs/”目录。

2、测试安装是否成功
打开CMD，切换到nodejs所在的安装目录。输入如下命令测试node.js和npm是否安装成功。默认windows最新安装包，会包含npm，如果npm没有安装，请手动安装。
```
C:\Users\jason>f: (选择盘符)
F:\>cd nodejs (选择目录)
F:\nodejs>node -v v0.10.0 
F:\nodejs>npm -v 1.2.14
```
3、使用npm安装weinre,在node.js安装目录输入以下命令
```
npm install weinre
```
4、启动weinre服务器
```
node.exe node_modules\weinre\weinre --boundHost -all-
node.exe node_modules\weinre\weinre --boundHost  192.168.1.125 
```
在windows下，系统防火墙可能会弹出是否允许其访问网络的提示，点击充许即可。

5、浏览器打开
```
http://localhost:8080
http://192.168.1.125:8080
```
如果访问正常，说明服务器已配置成功。
### 直接使用phoneGap的调试服务器

如果觉得服务器配置麻烦，也可以使用phoneGap现成的调试服务器。
phoneGap调试服务器地址：http://debug.phonegap.com/（相当于本机安装的http://localhost:8080）

### weinre使用方法
1. 需调试的页面加入JS脚本
```
<script src="http://127.0.0.1:8080/target/target-script-min.js#anonymous"></script>
```
也可以使用收获夹快速添加调试脚本到需要调试的页面。
将以下代码添加到书签，访问需要调试的页面时，访问一下书签，即可以通过JS将调试脚本添加到当前页面，但部份浏览器不支持！
```
javascript:(function(e){e.setAttribute("src","http://你的调试服务器地址/target/target-script-min.js#anonymous");document.getElementsByTagName("body")[0].a(e);})(document.createElement_x_x_x_x_x_x_x("script"));void(0);
```
2. 在PC端使用webkit浏览器打开控制台
```
http://10.18.252.111:8080/client/#anonymous

其中 #后面为识别码
```
tips：识别码仅仅是为了识别多个需调试的项目时使用，可供多用户操作。

在控制台，你就可以轻松的调试手机网页了！
### 谢谢！
转载请注明出处：http://haomou.net/2015/02/10/2015_ionic_debug/

有问题请留言。T_T  皓眸大前端开发学习  T_T