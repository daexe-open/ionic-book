### 一些平台
今年似乎正刮一阵Hybrid开发风，这里说说三款不同的Hybrid开发框架， Native.js ， AppCan ， Intel XDK，各自有不同的思路和实现，给Web开发者们提供了不同的App开发平台和能力，那就一个个分别说说。
教程索引：[ionic中文教程](/README.md)
<!--more-->
![](/assets/ionic.png)

### Native_js

实质上属于 [HTML5+](http://www.html5plus.org/) 规范和HBuilder的结合实现，HTML5+就没什么好说的，据说是国内组织搞的（不太清楚，感觉就是DCloud牵头搞的），应用上跟PhoneGap类似。Native.js属于HTML5+规范未实现的原生API部分的Proxy，是不是可以理解为那些规范里的实现都是通过Native.js实现的，就是暴露了原生API封装实现给了开发者，看难度好像有点大，需要根据不同平台调用原生API。那就要求开发者理解那些原生API，思路上跟Titanium的Widget类似，但是实现上选择了JS Bridge方式，我认为不是很好的一个方向，有点噱头的意思。那在它的平台上就只能希望HTML5+规范的部分能实现的更加完整和全面。

关于Native.js的实现，我的猜测是大量的使用了反射来将JS转为Java或者Objective-C，性能上是很大的考验。

另外，HBuilder是基于Aptana开发的，更加倾向于小清新，会场上也真的已经有了不少实际用户，让我大吃一惊。

关于HBuilder的介绍参看： [《近匠》HBuilder：如何用JS调用几十万原生API？](http://www.csdn.net/article/2014-04-11/2819266-jinjiang-with-hbuilder)

Dcloud.io官网上有关于Native.js的 [PDF文档](http://download.dcloud.net.cn/HTML5%2B%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91-Native.js.pdf)

### AppCan
国内比较成熟的Hybrid开发平台，开发框架涵盖了丰富的自定义API，商业模式也比较清晰，但是，相对来说比较封闭，更加适合政府部门，我猜的。

具体的就不予置评了，请参看 [AppCan官网](http://www.appcan.cn/)

### Intel_XDK
Intel XDK框架真是第一次听说，之前孤陋寡闻了。Intel居然也加入了Hybrid开发阵营，可能真的是像他们的老大张海立所说的这款产品之前一直是国外团队在开发，国外团队也刚开始接手不久。

张海立的演讲很精彩，搜了一下，复旦毕业，言语真的很像上海人，还真有点想投奔他的感觉，哈哈。

至于Intel XDK这款产品，那就是站在开源产品之上集大成，相较于前两位更加开放、新潮，集成了包括 [Cordova](http://cordova.apache.org/) ， [Ripple](http://ripple.incubator.apache.org/) ， [Brackets](http://brackets.io/) ，V8，还有一些开源的UI框架和开放的Service服务，将设计、开发、测试、编译、分发集成设计出一套完整的开发方案，IDE级别。

出彩的 [Crosswalk](https://crosswalk-project.org/) ，看了下官网介绍，似乎是Cordova升级版，以至于每次出现XDK必出现Crosswalk，躲都躲不过。

### Crosswalk
前面说了这么多，主要是想引出Crosswalk 这个东东。首先呢, crosswalk 只是针对安卓平台的。那么我们为什么要使用 crosswalk 呢.因为低于android 4.4 的webview 是一个蹩脚的Android WebKit浏览器内核（android版本越低性能就越差,android 4.4以上已经使用了Chromium ）,所以英特尔公司发布了 [Crosswalk引擎](https://crosswalk-project.org/)，可以让 Android 4.0-4.3 的手机上的应用打包 Chromium 引擎而不是 Android WebKit。虽说未来 Android 4.4 会占据更多市场份额，但目前主流的 Android 手机的系统版本毕竟还是 4.1、4.2（4以下的就不说了…）。

cordova 和 crosswalk 的一些差异
#### 安装包的大小

【cordova,一个纯html5的 apk 仅有1.5M左右(不涉及原生功能),涉及到一些原生功能,比如相机、文件系统、推送等因为需要加入插件,一般 apk 在 5M 左右】，而【crosswalk,一个纯html的 apk 就达到了19M左右,如果需要加入杂七杂八的插件,那就是奔着25M去了】,天朝流量还是很贵的….（用户一看app这么大,算了不下了…)

#### 开发的简便性

【我是一个专职 cordova 开发者,所以cordova已经用习惯，这一条可能不够客观，仅供参考】.首先【cordova 3.0+ 的版本开发起来都很方便了,命令行命令行你的应用就搞定了 - -! 】,而【crosswalk集成比较麻烦,也许是我没找到门道…..手动集成导入包什么的总觉得好麻烦啊…..然后我默默的去下载了一个 intelxdk ,因为他能直接打包基于 crosswalk 的应用,但是点了打包之后,发了一个邮件给你让你去下载,这…这….这……我总觉得云打包需要上传代码是不是不太合适啊….】
#### 插件生态圈

crosswalk 虽然能兼容 cordova plugin 但并不是完全一致的，而且并不是所有的cordova plugin 都能用在crosswalk 上

#### 流畅度

大家最关心的应该在这里了…首先我说一下我是用的 App Framework 这个前端框架的,这个现在也是intel的 - -），我测试的手机是 华为 g510 android 4.1.1 的手机,性能并不强，在滚动流畅度和整理流畅度上 crosswalk 不得不承认确实有明显提升，但是个人觉得cordova在安卓上的流畅度也在可以接受的范围之内。【其实说白了，cordova性能确实差一些，但是可以通过一些手段优化来提升性能，或者牺牲一下用户体验，关闭一些没必要的切换动画什么的来提升】

最后说一下用cordova不就是为了跨平台, 而 crosswalk 是只针对安卓平台的,所以如果你的应用主打ios平台的话，用不用就随意了（我只是这么一说,安卓端的客户还是不能丢的）…
题外话,在 ios 平台上 cordova 已经表现的很完美了（除了万恶的 position:fixed ）,跟原生应用并没有太大的差别（也可能是因为我现在做的都不是很复杂的应用…没体现出跟原生的差异性…）。

#### Crosswalk有何优势

Crosswalk采用Chromium内核并不断地快速演进（六周一次更新），使基于Crosswalk的Web应用充分享有Chromium的功能与性能优势，以及较好的平台一致性。同时，Crosswalk支持最新的HTML5 API，包括WebGL，WebAudio，WebRTC，Gamepad，WebSocket等等。一个展示基于Crosswalk的web应用的很好的例子是这款名为HexGL的3D游戏，我们在原有游戏（http://hexgl.bkcore.com ）基础上做了一些改进（https://github.com/hmin/HexGL ），如图1所示。它是一款用纯web技术开发的游戏，使用了WebGL，WebAudio，Gamepad，Presentation等HTML5 API，支持4.0之后的所有Andorid平台，并且在低端的Android设备上也能流畅运行，诸如红米手机。

### ionic

说说ionic吧，我的感觉是ionic是基于cordova和Angular做了一套UI层，适配了一套css，并制作了丰富的UI组件，用于快速开发Mobile APP，用户可以自己开发插件实现一些特殊的功能。
关于设备层的API，参考另外一个项目：[ng-cordova](http://www.ngcordova.com) ,ng-cordova组合了cordova和angular，以angular的方式封装注册了cordova的一些插件。

#### ionic添加Crosswalk
幸运的是ionic支持配置浏览器内核，通过下面的命令可以列出支持的浏览器内核：
```
ionic browser list
```
下面的命令可以为ionic安装对应android平台的crosswalk，对应Chromium 37 (Crosswalk 8.37.189.12 version).
```
ionic browser add crosswalk
//指定安装版本
ionic browser add crosswalk@10.39.235.15
移除平台的浏览器：
ionic browser revert android
ionic browser revert ios
//或者单独移除浏览器
ionic browser rm crosswalk
```
### 谢谢！
有问题请留言。T_T  别忘了给我点亮GIT星星哦！
欢迎关注我的博客: [皓眸大前端](http://www.haomou.net/)
