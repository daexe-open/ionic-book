title: ionic调试插件开发
date: 2015-02-10 09:09:09
tags:
- ionic
- 教程
categories: ionic|reapp
---
### 关于自定义插件
其实ionic关于插件这块，主要可以参考cordova，cordova上面的所有插件可以稍作修改，应用到ionic中来，但是由于涉及到一个js注入的问题，所以目前还有另外一个开源项目ng-cordova（www.ngcordova.com ）, 也就是组合了cordova和angular，已angular的方式封装注册了cordova的一些插件。
教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/plugin.png"/>

转载请注明出处：http://www.haomou.net/2015/02/10/2015_ionic_plugin/

### ionic插件开发

这里主要介绍如何开发ionic插件，我们将开发一款用于输出信息到android控制台的插件myconsole。新建一个文件夹名为console，目录结构如下：
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/plugin1.png"/>
目录说明：
src 存放对应平台的native源代码
android 存放Android平台要编译到apk的对应src的包目录
ios 存放对应IOS平台的文件
www
存放cordova plugin插件js文件，网页上的方法会先调用到这个plugin中对应的方法，然后根据配置文件调用到android或者ios中对应的类和方法。
LICENSE 存放开源的许可证，这个不是必须的
plugin.xml插件描述文件，当执行ionic plugin add命令时会解析该文件
readme.md说明文件

#### 编写js

先编写www目录下的console.js文件，代码如下：
```
var exec = require('cordova/exec');  
module.exports = {  
  
    /** 
     * 一共5个参数 
       第一个 :成功会掉 
       第二个 :失败回调 
       第三个 :将要调用的类的配置名字(在config.xml中配置 稍后在下面会讲解) 
       第四个 :调用的方法名(一个类里可能有多个方法 靠这个参数区分) 
       第五个 :传递的参数  以json的格式 
     */  
    log: function(mills,callback,err) {  
        exec(function(winParam){  
            callback(winParam);  
        }, function(errParam){  
            err(errParam);  
        }, "MyConsole", "log", [mills]);  
    },  
    err: function(mills,callback,err) {  
        exec(function(winParam){  
            callback(winParam);  
        }, function(errParam){  
            err(errParam);  
        }, "MyConsole", "err", [mills]);  
    }
};
```
#### 编写java文件

我们在这里定义了两个方法log和err，这两个方法是暴露给前台js调用的方法。然后我们编写对应android平台的java文件，我暂时放在com.haomou包目录下，MyConsole.java代码如下：
```
package com.haomou;
import android.app.Activity;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import android.net.Uri;
import android.util.Log;
/**
 * js调用java方法 
 * 必须继承CordovaPlugin   
 * 我使用的   cordova  3.3.0版本
 * @author chale  haomou.net
*/
public class MyConsole extends CordovaPlugin {
    public String message="";
	/**
	 * 注意 构造方法不能为
	 * MyConsole(){}
	 * 可以不写或者 定义为如下
	 */
	public MyConsole() {
	}
	CallbackContext callbackContext;
	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		this.callbackContext = callbackContext;
		if (action.equals("log")) {
			// 获取args的第一个参数
			message = args.getString(0);
			Log.i("myConsole", message);
			return true;
		}
		if (action.equals("err")) {
			// 获取args的第一个参数
			message = args.getString(0);
			Log.d("myConsole", message);
			return true;
		}
		return false;
	}
}
```
从上面的代码可以看到，我们在excute方法中会捕获获取的参数，如果是log则用info的方式输出信息，如果是err，则通过debug的方式输出信息。

#### 编写配置文件

最后一步我们开始编写配置文件，安装插件的时候，ionic会根据这个配置文件来动态配置android项目，编写plugin.xml内容如下：

```
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
  xmlns:android="http://schemas.android.com/apk/res/android"
  id="com.haomou.console"
  version="0.0.1">
	<!-- 插件名称 -->
	<name>console</name>
	<!-- 插件描述 -->
	<description>
		This plugin allows print msg in logcat
	</description>
	<!-- 插件license -->
	<license>MIT</license>
	<!-- 插件所依赖的cordova版本 -->
	<engines>
		<engine name="cordova" version=">=3.0.0" />
	</engines>  
	<!-- 插件模块，src指明js文件路径，clobbers指明前台js调用的接口名,这个配置会被ionic自动编译到项目的platforms/android/assets/cordova_plugin.js 文件中,其中本配置文件中的开头的id指定了src所编译后存放的目录，version指定了本插件的版本 -->
	<js-module src="www/console.js" name="console">
		<clobbers target="navigator.console" />
	</js-module>
	<!-- android -->
	<platform name="android">
		<!-- 配置Android项目中的 res/xml/config.xml 文件，编译后会将feature配置到widget中，注意这个feature的name 值，这个值和我们www/console.js 文件中的第三个参数对应-->
		<config-file target="res/xml/config.xml" parent="/*">
			<feature name="MyConsole">
				<param name="android-package" value="com.haomou.MyConsole"/>
			</feature>
		</config-file>
		<!-- 指定编译后的文件位置 -->
		<source-file src="src/android/com/haomou/MyConsole.java" target-dir="src/com/haomou" />
	</platform>
</plugin>
```
关于这个配置文件，注释中我已经写的很清楚了。这里我们要编写的工作就完成了。下面介绍如何安装和卸载ionic插件。

### 调用方法
在js代码中直接使用 MyConsole 全局对象
```
MyConsole.log('123141')
MyConsole.err('1231233')
```

### ionic插件安装与卸载
使用下面的命令查询、安装、卸载插件：
```
ionic plugin list //列出所有已安装插件
ionic plugin remove 插件名  //先根据上面的list列出插件，然后根据插件名卸载
ionic plugin  add  插件地址 //这个插件地址可以是github的项目地址，也可以是一个文件夹路径
ionic –help  //查看帮助文件
```
### 虚拟机调试ionic项目
通过ionic emulate Android命令可以直接启动虚拟机，并启动应用程序，但是启动后，就断开了，这时候我们需要使用adb连接虚拟机或者Android设备查看日志信息。
先在控制台执行adb命令，如果没有反应，需要把Android sdk目录下的platform-tools目录加入到环境变量path中。然后执行下面的命令：
```
adb devices //列出可用的Android设备
adb logcat  //进入Android日志打印控制台
adb shell //进入Android系统的shell 
adb install apk路径 //给Android设备安装应用
```
### 其他技巧
#### 如何指定编译的android版本，也就是API Level？

修改项目下的 platforms/android/project.properties和platforms/android/CordovaLib/project.properties中的target=android-19 即可。修改成你想要的版本，前提是你已经安装了对应的api版本的sdk ，否则编译会出错

### 谢谢！
转载请注明出处：http://www.haomou.net/2015/02/10/2015_ionic_plugin/

有问题请留言。T_T  皓眸大前端开发学习  T_T