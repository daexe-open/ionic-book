title: ionic开发APP版本调试
date: 2015-02-10 07:17:27
tags:
- ionic
- 教程
categories: ionic|reapp
---
### 大话调试
学习前端，最基本的首先要学会调试。特别是js调试，当然我们做网页，都习惯用chrome或者firebug做调试，的确提供了不少便利。但是我们如今用js开发编译手机APP的时候，调试就显得无力了。皓眸哥我很少调试代码的，基本都是从错误原因反推定位可能出错的地方，基本上想一想就能解决。但是，难免会遇到一些神不知、鬼不觉的情况，比如版本冲突，类库冲突，等等没有报错，但就是不正确的情况，这时候真的需要调试一把。怎么办呢，看皓眸哥有哪些办法？

教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/debug.png"/>

转载请注明出处：http://haomou.net/2015/02/10/2015_ionic_debug/

### APP调试
关于ionic编译APP项目调试，其实没有特别好的方法，对于界面，我们可以通过浏览器直接调试，然而对于功能性的问题，调试就不是那么方便了。有两种方法可以做：

使用cordova提示控件，比如dialog，toast等等
使用控制台打印到Android的logcat中
比较推荐第二种方法来做，这样我们不管是用Android虚拟机还是真机调试，只要连接上logcat就可以查看调试信息。但是目前官方还没有提供这样的插件，我们下面就结合ionic插件开发的教程，和你一块编写一个console插件，插件中提供log方法，这样你安装这个插件之后，调试android应用时可以通过console.log方法将调试信息输出到logcat中。
上面说的两种方法都属于离线调试的方法，如果你希望能像在浏览器中一行一行的调试代码，这几乎是不可能的。所以目前只有上面的方法调试。

### 插件开发
关于插件开发，请移步 ionic插件开发 http://www.haomou.net/2015/02/10/2015_ionic_plugin/

### 指定android版本

#### 如何指定编译的android版本，也就是API Level？

修改项目下的 platforms/android/project.properties
和
platforms/android/CordovaLib/project.properties
中的target=android-19 即可。
修改成你想要的版本，前提是你已经安装了对应的api版本的sdk ，否则编译会出错

### 谢谢！
转载请注明出处：http://haomou.net/2015/02/10/2015_ionic_debug/

有问题请留言。T_T  皓眸大前端开发学习  T_T