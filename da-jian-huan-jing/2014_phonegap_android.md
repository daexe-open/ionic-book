### PhoneGap说明

PhoneGap，一早就听说有这么一个神奇的应用，它可以把WEB项目打包成各种移动平台的应用程序。这里我就研究一下，把之前开发的WebRTC项目打包成Android平台的apk文件试一下。正好公司现在比较缺少Android应用开发人员，看来web应用还是很有前景的。不过在网上看过不少评论说PhoneGap打包的程序运行比较慢，用户体验差，和native应用没的一比，这里也算是是做个小实验，自己看看到底怎么样。
教程索引：[ionic中文教程](/README.md)
<!--more-->
![](/assets/ionic.png)


### PhoneGap与cordova
后面会讲到cordova，主要用这个生成项目。为了不至混淆，这里解释一下。
PhoneGap是一个用基于HTML，CSS和JavaScript的，创建移动跨平台移动应用程序的快速开发平台。它使开发者能够利用iPhone，Android，Palm，Symbian,WP7,Bada和Blackberry智能手机的核心功能——包括地理定位，加速器，联系人，声音和振动等，此外PhoneGap拥有丰富的插件，可以调用。
Phonegap是一款开源的开发框架，旨在让开发者使用HTML、Javascript、CSS等Web APIs开发跨平台的移动应用程序。原本由Nitobi公司开发，现在由Adobe拥有。它需要特定平台提供的附加软件，例如iPhone的iPhone SDK，Android的Android SDK等，也可以和DW5.5及以上版本配套开发。使用PhoneGap只比为每个平台分别建立应用程序好一点点，因为虽然基本代码是一样的，但是你仍然需要为每个平台分别编译应用程序。
Cordova提供了一组设备相关的API，通过这组API，移动应用能够以JavaScript访问原生的设备功能，如摄像头、麦克风等。Cordova还提供了一组统一的JavaScript类库，以及为这些类库所用的设备相关的原生后台代码。Cordova支持如下移动操作系统：iOS, Android,ubunto phone os, Blackberry, Windows Phone, Palm WebOS, Bada 和 Symbian。
Cordova是贡献给Apache后的开源项目，是从PhoneGap中抽出的核心代码，是驱动PhoneGap的核心引擎。你可以把他想象成类似于Webkit和Google Chrome的关系。
### 安装JAVA和ADT
1. 首先要安装java运行环境jdk，这个可以自行到官网下载。百度也有下载连接：（ http://www.baidu.com/s?tn=baidu&ie=utf-8&f=8&wd=jdk ），这个主意要将java安装路径的bin目录加入系统或用户的环境变量path中，安装完可以在cmd命令行窗口输入java -version，看是否有反应。
2. 然后下载ADT（Android Development Tools），这个到官网下载：（http://developer.android.com/sdk/index.html ），这个网站打开慢，下载还是比较快的。下载后解压ADT，这个里面主要包含两个文件夹，一个是装好插件的eclipse，用于开发Android应用，另外一个是android开发sdk目录。需要将sdk/platform-tools这个路径加入系统环境变量path中，为了以后调试用到adb。
3. 下载安装ant，这个是在用phonegap的cordova工具生成android项目时，需要的编辑工具。下载地址：（http://ant.apache.org/bindownload.cgi ），安装完之后要注意，一定要在cmd命令行窗口输入 ant 命令，看是否报错。我的这个就报错：在jre目录找不到tools.jar。解决方法很简单，自己看了一下jre目录是没有，在jdk目录下lib目录有tools.jar，于是拷贝一个过去就解决了。

### 安装NodeJS插件
这个之前介绍过如何安装，这里就不说明了，参考：（http://www.haomou.net/2014/07/29/2014_nodejs_1/ ）
接着安装pnonegap和cordova，如下：
```{bash}
npm install -g phonegap
...
npm install -g cordova
```
安装完成之后，我们就可以使用phonegap生成一个android项目文件。执行如下命令：
```{bash}
cordova create myapp com.org.myapp "HelloWorld"  
cd myapp  
cordova platform add android  //添加android运行平台
cordova build android   //编译apk
cordova emulate android  //调用adb调试应用
```
上面的倒数第二步，cordova platform add android这个可能会报错。
```{bash}
[error] Please install Android target 17 (the Android 4.2 SDK). Make sure you have the latest Android tools installed as well.
```
这个主要是没有安装和当前cordova对应要求的android平台sdk，这个可以通过2种方法解决，
1. 打开ADT，打开Android SDK manager，安装对应平台的SDK。（参考下一小节）
2. 打开如下目录，可能其中的版本号不一，
```{bash}
C:\Users\USER_NAME\.cordova\lib\android\cordova\3.1.0\framework\project.properties
```
修改
```{bash}
target=android-17
```
可以把这个修改成你现在已安装的平Andriod台，或者想要指定的Android平台。
这个问题解决后，上面的示例项目即可生成，然后使用ADT Eclipse导入该项目即可，同意通过运行，查看在AVD中的运行效果。
### Android开发平台搭建技巧
技巧一：Android SDK Manager打开非常慢，总是失败。解决方法：
> 访问站长工具网站（http://tool.chinaz.com/  )，选择 其他工具/超级PING ，把域名dl-ssl.google.com粘贴进去，然后勾选海外的，点击查询，会列出一些可以ping通的IP地址。
> 使用cmd命令行ping 对应的ip地址，修改系统的host文件，具体位置在（C:\Windows\System32\drivers\etc），在最后一行增加域名解析记录：
```{bash}
74.125.206.93 dl-ssl.google.com
```
然后重新打开Android SDK Manager，试一下。如果不行，就换一个ip，重新修改host，总有可以的。我用的这个是英国的ip，速度还不错。
技巧二：manage AVD里面新建Android虚拟机的时候，报错：
```{bash}
No system images installed for this target
```
解决方法：在Android SDK Manager中下载对应平台的ARM EABI v7a System image。
技巧三：打开eclipse时，卡在Android sdk content loader 0%，解决办法：
方法1：遇到Eclipse右下角一直显示“Android sdk content loader 0%”的情况时，直接关掉Eclipse，有ADB进程在运行时通过进程管理器结束进程，然后重启Eclipse。通过这种方法多数情况下问题会得到解决。
方法2：关闭Eclipse，删掉C:\Users\用户名\.android文件夹下的所有内容，再重启Eclipse。

### 谢谢！
有问题请留言。T_T  别忘了给我点亮GIT星星哦！
欢迎关注我的博客: [皓眸大前端](http://www.haomou.net/)


