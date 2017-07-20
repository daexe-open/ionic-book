### ionic遇见ios9
更新了ios9之后，在微信浏览器测试ionic，在tab导航栏，经常点击一下，跳不到对应页面，还会闪屏，tab导航图标一直闪，然后用Android手机测了一下，正常。还以为是我自己手机配置差的原因，后来发现并不是。原来是ionic的一个bug。
教程索引：[ionic中文教程](/README.md)
<!--more-->
![](/assets/ionic.png)


### 修复方法
patch地址：https://github.com/imskojs/ngIOS9UIWebViewPatch
可以自行下载，然后在项目中添加如下代码：
![](/assets/ionic_patch_1.jpg)
![](/assets/ionic_patch_2.png)

ok了，万事大吉了，你可以重新测测。

### 升级ionic
升级你的ionic吧，也可以解决这个问题！新的版本已经添加了这个patch。

### 谢谢！
有问题请留言。T_T  别忘了给我点亮GIT星星哦！
欢迎关注我的博客: [皓眸大前端](http://www.haomou.net/)

