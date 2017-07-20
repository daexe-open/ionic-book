title: ionic在ios9中的bug修复
date: 2015-10-27 09:12:09
tags:
- ionic
- bug
categories: ionic|reapp
---
### ionic遇见ios9
更新了ios9之后，在微信浏览器测试ionic，在tab导航栏，经常点击一下，跳不到对应页面，还会闪屏，tab导航图标一直闪，然后用Android手机测了一下，正常。还以为是我自己手机配置差的原因，后来发现并不是。
原来是ionic的一个bug。
教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic.png"/>
### 修复方法
patch地址：https://github.com/imskojs/ngIOS9UIWebViewPatch
可以自行下载，然后在项目中添加如下代码：
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_patch_1.jpg"/>
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_patch_2.png"/>

ok了，万事大吉了，你可以重新测测。

### 升级ionic
升级你的ionic吧，也可以解决这个问题！新的版本已经添加了这个patch。

### 谢谢！
转载请注明出处：http://www.haomou.net/2015/10/27/2015_ionic_ios9_patch/
有问题请留言。T_T  皓眸大前端开发学习  T_T
