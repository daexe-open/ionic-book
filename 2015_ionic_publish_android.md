title: ionic发布APP的时候到了
date: 2015-07-21 22:34:26
tags:
- android
categories: ionic|reapp
---
### 发布APP的时候到了
开发完了你的APP项目，仿真器，模拟器都调试了，手机真机也调试了，那么，恭喜你，你快要成功了，只差最后几步了。这里我们一块学学打包发布android APP。

教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/android_pub.jpg"/>

### 去掉调试插件
进入APP项目，执行：
```
cordova  plugin  rm   org .apache .cordova .console //去掉调试插件 
```

### Android 相关文件修改
更改APP目录下的platforms/android/AndroidManifest.xml文件
```
<application android : debuggable = "true"  android : hardwareAccelerated = "true"  android : icon = "@drawable/icon"  android : label = "@string/app_name" > 
```
把android：debuggable 改为false: 
```
<application android : debuggable = "false"  android : hardwareAccelerated = "true"  android : icon = "@drawable/icon"  android : label = "@string/app_name" > 
```
使用Cordova生成发布版本
```
cordova  build   --release  android
```
看到Build Successful说明构件成功

### APP签名
生成签名key，构件说明中已经提示了构件之后的apk文件在什么地方了，通过apk文件名可以看到现在的安装文件时未签名的unsigned。如果需要发布到应用商店，我们需要进行签名并优化。
```
keytool   -genkey   -v   -keystore  myApp-release-key.keystore   -alias   myApp-release-key.keystore   -keyalg  RSA   -keysize   2048   -validity   10000 
```
根据提示输入相关的密码以及其他信息，成功之后可以再当前目录下看到 名为  myApp-release-key.keystore 的文件
```
jarsigner   -verbose   -sigalg  SHA256withRSA   -digestalg  SHA1   -keystore  myApp-release-key.keystore   myApp-release-unsigned.apk   myApp-release-key.keystore 
```
在Android SDK中包含了一个工具名为Zipalign，它可以优化你的APK程序包，我们都知道APK的MIME其实就是一个Zip压缩文件，通过Zipalign可以让你的应用程序运行更快，Android123猜测从原理上来讲应该是优化Zip文件的解压速度，毕竟这个工具的文件名为zip对齐。

在Android平台中，数据文件存储在apk文 件中，可以多进程的访问，如果你开发过Win32可能知道程序的粒度对齐问题，不错虽然不是PE格式的文件，在Zip中一样，资源的访问可以通过更好的对 其优化，而zipalign使用了4字节的边界对齐方式来影射内存，通过空间换时间的方式提高执行效率。
```
zipalign   -v   4   myApp-release-unsigned.apk   myApp.apk 
```

### 相关API
附上keytool参数以及jarsigner参数:
```
  keytool用法：
-certreq     [-v] [-protected]
             [-alias <别名>] [-sigalg <sigalg>]
             [-file <csr_file>] [-keypass <密钥库口令>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-changealias [-v] [-protected] -alias <别名> -destalias <目标别名>
             [-keypass <密钥库口令>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-delete      [-v] [-protected] -alias <别名>
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-exportcert  [-v] [-rfc] [-protected]
             [-alias <别名>] [-file <认证文件>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-genkeypair  [-v] [-protected]
             [-alias <别名>]
             [-keyalg <keyalg>] [-keysize <密钥大小>]
             [-sigalg <sigalg>] [-dname <dname>]
             [-validity <valDays>] [-keypass <密钥库口令>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-genseckey   [-v] [-protected]
             [-alias <别名>] [-keypass <密钥库口令>]
             [-keyalg <keyalg>] [-keysize <密钥大小>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-help
-importcert  [-v] [-noprompt] [-trustcacerts] [-protected]
             [-alias <别名>]
             [-file <认证文件>] [-keypass <密钥库口令>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-importkeystore [-v]
             [-srckeystore <源密钥库>] [-destkeystore <目标密钥库>]
             [-srcstoretype <源存储类型>] [-deststoretype <目标存储类型>]
             [-srcstorepass <源存储库口令>] [-deststorepass <目标存储库口令>]
             [-srcprotected] [-destprotected]
             [-srcprovidername <源提供方名称>]
             [-destprovidername <目标提供方名称>]
             [-srcalias <源别名> [-destalias <目标别名>]
               [-srckeypass <源密钥库口令>] [-destkeypass <目标密钥库口令>]]
             [-noprompt]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-keypasswd   [-v] [-alias <别名>]
             [-keypass <旧密钥库口令>] [-new <新密钥库口令>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-list        [-v | -rfc] [-protected]
             [-alias <别名>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
-printcert   [-v] [-file <认证文件>]
-storepasswd [-v] [-new <新存储库口令>]
             [-keystore <密钥库>] [-storepass <存储库口令>]
             [-storetype <存储类型>] [-providername <名称>]
             [-providerclass <提供方类名称> [-providerarg <参数>]] ...
             [-providerpath <路径列表>]
jarsigner用法： [选项] jar 文件别名
       jarsigner -verify [选项] jar 文件
[-keystore <url>]           密钥库位置
[-storepass <口令>]         用于密钥库完整性的口令
[-storetype <类型>]         密钥库类型
[-keypass <口令>]           专用密钥的口令（如果不同）
[-sigfile <文件>]           .SF/.DSA 文件的名称
[-signedjar <文件>]         已签名的 JAR 文件的名称
[-digestalg <算法>]    摘要算法的名称
[-sigalg <算法>]       签名算法的名称
[-verify]                   验证已签名的 JAR 文件
[-verbose]                  签名/验证时输出详细信息
[-certs]                    输出详细信息和验证时显示证书
[-tsa <url>]                时间戳机构的位置
[-tsacert <别名>]           时间戳机构的公共密钥证书
[-altsigner <类>]           替代的签名机制的类名
[-altsignerpath <路径列表>] 替代的签名机制的位置
[-internalsf]               在签名块内包含 .SF 文件
[-sectionsonly]             不计算整个清单的散列
[-protected]                密钥库已保护验证路径
[-providerName <名称>]      提供者名称
[-providerClass <类>        加密服务提供者的名称
[-providerArg <参数>]] ... 主类文件和构造函数参数
```

### 谢谢！
转载请注明出处：http://www.haomou.net/2015/07/21/2015_ionic_publish_android/
有问题请留言。T_T  皓眸大前端开发学习  T_T
