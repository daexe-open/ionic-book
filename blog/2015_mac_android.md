### MAC下玩Android
为什么需要在mac下用Android，这个主要是因为前几天手痒，哈哈，把系统装成了黑苹果。不过用起来还是蛮流畅的，所以就用这个，懒得换了。熟悉熟悉mac也挺好的，在一个就是现在在学习ionic和cordova，做完项目后可以同时编译生成Android和ios手机app，这样挺方便的。你是不是也心动了，快点动手吧。
教程索引：[ionic中文教程](/README.md)
<!--more-->
![](/assets/ionic.png)


### 安装工具
1、最好选择ADT Bundle，这里面已经集成好了Eclipse、ADT、Android SDK Tools，不用自己去设置了。
我使用的版本是adt-bundle-mac-x86_64-20131030.zip，22.3.0
百度盘下载地址：http://pan.baidu.com/s/1qWNRJ8g 共有470MB
网上有今年的新版：adt-bundle-mac-x86_64-20140624，这个版本除了集成是API 20外，没有别的，而且用起来错误一大堆，我也不打算去排错了，用这V22.3.0的非常的好。

上面这个是别人写的经验，但是V22.3.0 版本是可以用，但是如果想用x86虚拟机的，就不行了。这里面有一个坑，很大的坑，就是adt V22.3.0升级到adt V23以上版本，升级不了。不能升级，就不能使用新的AVD，就不能使用新的虚拟机。所以建议还是使用比较新的版本。

附上地址：
ADT
23.0.4：https://dl.google.com/android/ADT-23.0.4.zip

SDK——23.0.2
Windows32 & 64-bit:http://dl.google.com/android/android-sdk_r23.0.2-windows.zip
Windows32 & 64-bit:http://dl.google.com/android/installer_r23.0.2-windows.exe
Mac OS X32 & 64-bit:http://dl.google.com/android/android-sdk_r23.0.2-macosx.zip
Linux32 & 64-bit:http://dl.google.com/android/android-sdk_r23.0.2-linux.tgz

ADT Bundle——23.0.2
Windows 32-bit:https://dl.google.com/android/adt/adt-bundle-windows-x86-20140702.zip
Windows 64-bit:https://dl.google.com/android/adt/adt-bundle-windows-x86_64-20140702.zip
Mac OS X 64-bit:https://dl.google.com/android/adt/adt-bundle-mac-x86_64-20140702.zip
Linux 32-bit:https://dl.google.com/android/adt/adt-bundle-linux-x86-20140702.zip
Linux 64-bit:https://dl.google.com/android/adt/adt-bundle-linux-x86_64-20140702.zip
﻿﻿如果你的下载慢，请修改hosts文件，添加下面的地址，经测试这个是比较快的。
```
74.125.113.121 developer.android.com 
203.208.46.146 dl.google.com 
203.208.46.146 dl-ssl.google.com
```
（号外，上面的这个地址好像不能用了，半年前还是我能找到的最快的地址，现在可能被封了）
当然，如果你不怕麻烦，选择Eclipse+ADT的方式，会消耗很多时间，各种的版本问题，各种的下载，总之不推荐。因为我是做安卓开发，不是做JAVA开发，用Google给我们做好的ADT Bundle应该说是最好的选择。

2、这个版本仅仅集成了API 19，即Android 4.4。你可以打开SDK Manager安装你需要的版本即可。

### mac安装ant
1. 下载安装ant，这个是在用phonegap的cordova工具生成android项目时，需要的编辑工具。下载地址（http://ant.apache.org/bindownload.cgi ）,当前最新版是Apache Ant 1.9.3，可以下载那个zip包

2.将下载的zip包解压到一个目录下，如/usr/local。这时候需要你提供修改权限，输入密码。

Tip:什么？不会进入usr目录？打开Finder，选择菜单中的“前往”>“前往文件夹”，或者在打开Finder后用快捷键“shift+command+G”，就进入到了/usr/local目录下。

3.配置环境变量：

1)获取root权限
```
$sudo -s根据提示输入管理员密码，提示符会改成bash-3.2#
```
2）修改bashrc文件读写权限
```
bash-3.2#chmod +w /etc/bashrc
```
3）查看修改权限后的结果，如显示类似下面，说明修改权限成功。

```
-rw-rw-rw-1 rootwheel8161 13 13:55 /etc/bashrc
```
4）修改bashrc文件 或者 .bash_profile

```
bash-3.2#vi /etc/bashrc
```
按i键进入编辑状态，在文件末尾加入下面两行

```
export ANT_HOME=/usr/local/apache-ant-1.9.3
export PATH=${PATH}:${ANT_HOME}/bin
```
Tip:其中“apache-ant-1.9.3”是你解压缩的文件夹名称

按ESC键退出编辑状态。输入:wq!保存并退出。

5）测试

重新打开终端并输入
```
$ant -version
```
配置成功则显示如下：
```
Apache Ant(TM) version 1.9.3 compiled on December 23 2013
```
### 安装NodeJS插件
这个之前介绍过如何安装，这里就不说明了，参考：（http://www.haomou.net/2014/07/29/2014_nodejs_1/ ）

接着安装pnonegap和cordova，如下：
```
npm install -g phonegap
...
npm install -g cordova
```
安装完成之后，我们就可以使用phonegap生成一个android项目文件。执行如下命令：

```
cordova create myapp com.org.myapp "HelloWorld"  
cd myapp  
cordova platform add android  //添加android运行平台
cordova build android   //编译apk
cordova emulate android  //调用adb调试应用
```
上面的倒数第二步，cordova platform add android这个可能会报错。

#### 错误1-ANDROID_HOME is not set
```
/Users/chale/.cordova/lib/npm_cache/cordova-android/3.6.4/package/bin/node_modules/q/q.js:126
                    throw e;
                          ^
Error: ANDROID_HOME is not set and "android" command not in your PATH. You must fulfill at least one of these conditions.
    at /Users/chale/.cordova/lib/npm_cache/cordova-android/3.6.4/package/bin/lib/check_reqs.js:159:19
    at _fulfilled (/Users/chale/.cordova/lib/npm_cache/cordova-android/3.6.4/package/bin/node_modules/q/q.js:798:54)
    at self.promiseDispatch.done (/Users/chale/.cordova/lib/npm_cache/cordova-android/3.6.4/package/bin/node_modules/q/q.js:827:30)
    at Promise.promise.promiseDispatch (/Users/chale/.cordova/lib/npm_cache/cordova-android/3.6.4/package/bin/node_modules/q/q.js:760:13)
    at /Users/chale/.cordova/lib/npm_cache/cordova-android/3.6.4/package/bin/node_modules/q/q.js:821:14
    at flush (/Users/chale/.cordova/lib/npm_cache/cordova-android/3.6.4/package/bin/node_modules/q/q.js:108:17)
    at process._tickCallback (node.js:442:13)
    at Function.Module.runMain (module.js:499:11)
    at startup (node.js:119:16)
```
错误提示是没有添加ANDROID_HOME到环境变量中，我们添加即可，方法：

```
sudo vi ~/.bash_profile
```
追加 下载的adt bundle目录下的sdk目录为ANDROID_HOME，例如：
```
export ANDROID_HOME=/Applications/adt-bundle-mac-x86_64-20131030/sdk
```
然后是配置生效
```
source ~/.bash_profile
```
然后重试一下，我的是成功了！

#### 错误2-Please install Android target 17

这个是windows安装时容易出现的错误。
```
[error] Please install Android target 17 (the Android 4.2 SDK). Make sure you have the latest Android tools installed as well.
```
这个主要是没有安装和当前cordova对应要求的android平台sdk，这个可以通过2种方法解决，

打开ADT，打开Android SDK manager，安装对应平台的SDK。（参考下一小节）
打开如下目录，可能其中的版本号不一，
```
C:\Users\USER_NAME\.cordova\lib\android\cordova\3.1.0\framework\project.properties
```
修改
```
target=android-17
```
可以把这个修改成你现在已安装的平Andriod台，或者想要指定的Android平台。
这个问题解决后，上面的示例项目即可生成，然后使用ADT Eclipse导入该项目即可，同意通过运行，查看在AVD中的运行效果。

### Android开发平台搭建技巧
技巧一：Android SDK Manager打开非常慢，总是失败。解决方法：

访问站长工具网站（http://tool.chinaz.com/ )，选择 其他工具/超级PING ，把域名dl-ssl.google.com粘贴进去，然后勾选海外的，点击查询，会列出一些可以ping通的IP地址。
使用cmd命令行ping 对应的ip地址，修改系统的host文件，具体位置在（C:\Windows\System32\drivers\etc），在最后一行增加域名解析记录：
```
74.125.206.93 dl-ssl.google.com
```
然后重新打开Android SDK Manager，试一下。如果不行，就换一个ip，重新修改host，总有可以的。我用的这个是英国的ip，速度还不错。
技巧二：manage AVD里面新建Android虚拟机的时候，报错：

```
No system images installed for this target
```
解决方法：在Android SDK Manager中下载对应平台的ARM EABI v7a System image。
技巧三：打开eclipse时，卡在Android sdk content loader 0%，解决办法：
方法1：遇到Eclipse右下角一直显示“Android sdk content loader 0%”的情况时，直接关掉Eclipse，有ADB进程在运行时通过进程管理器结束进程，然后重启Eclipse。通过这种方法多数情况下问题会得到解决。
方法2：关闭Eclipse，删掉C:\Users\用户名.android文件夹下的所有内容，再重启Eclipse。

技巧四：强制更新SDK Manager 列表
用SDK Manager 更新就可以解决了。
更新方法：
在tools- >options中清除缓存 并且选中 Force https://..sources to be fetched using http://...；
更改host文件，在host文件中加入如下信息（win7或者win8修改host文件需要权限，可以将host文件拷贝出来修改后再替换）：
```
74.125.113.121 developer.android.com
203.208.46.146 dl.google.com
203.208.46.146 dl-ssl.google.com
```
更新完后重新打开SDK Manager，这是应该就可以下载了

技巧五：虚拟机使用x86架构cpu提升速度
安装intel HAXM支持:https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager
这个也可以通过Android SDK Manager安装，在extra目录，但是有时候没有这个选项，我强制更新SDK Manager之后也没有x86内容。参考：
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/android_x86.png"/>
然后按照下图创建虚拟机即可，绝对提升Android 虚拟机速度。
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/android_x862.png"/>

我在自己的mac上搞了半天，死活不出现x86的选项，只能自己手动添加了，参考:
https://software.intel.com/en-us/android/articles/alternate-method-installing-the-intel-atom-android-x86-emulator-image-manually
手动下载Android 2.3.7 x86 Emulator Image 放到addon目录下。附上：
Android 2.3.7 (Gingerbread) x86 Emulator Image下载地址：
https://software.intel.com/en-us/articles/android-237-gingerbread-x86-emulator-image-add-on
Android 4.4 (kitkat) x86 Emulator Image下载地址：
https://software.intel.com/en-us/android/articles/android-44-kitkat-x86-emulator-system-image
Android 4.4 (kitkat) x86 Emulator安装说明，这个与上面的不太一样：
https://software.intel.com/en-us/android/articles/intel-atom-x86-image-for-android-4-4-kitkat-installation-instructions-manually

总结一下，我折腾了半天，发现一个问题。起始只要升级一下Android SDK platform-tools就可以了，怎么升级呢，看下图，升级之后重新开启这个sdk Manager就可以了，汗死了！！
### 谢谢！
有问题请留言。T_T  别忘了给我点亮GIT星星哦！
欢迎关注我的博客: [皓眸大前端](http://www.haomou.net/)

