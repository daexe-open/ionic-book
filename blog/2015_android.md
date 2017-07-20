### 下载AndroidSDk好辛苦
打开android SDK manager，更新了半天，啥也没有。苦逼的android开发者，哎～～～喜讯来了，经过博主欢哥的不懈追求与研究，发现咱们可以手动操作，速度刚刚的。先配置好ANDROID_HOME环境变量，然后手动下载SDK以及需要的各个平台和相应的build tools等等，放到对应的目录就可以了，windows的应该直接覆盖或者放到对应目录就可以了。

教程索引：[ionic中文教程](/README.md)
<!--more-->
![](/assets/ionic.png)



### Android SDK
Android SDK (Android SDK主安装包，包含SDK Manager、AVD Manager、工具包tools，释放后的根文件夹为android-sdk-windows):
revision 23.0.2
http://dl.google.com/android/android-sdk_r23.0.2-windows.zip
http://dl.google.com/android/installer_r23.0.2-windows.exe
http://dl.google.com/android/android-sdk_r23.0.2-macosx.zip
http://dl.google.com/android/android-sdk_r23.0.2-linux.tgz
revision 24.0.1
http://dl.google.com/android/android-sdk_r24.0.1-windows.zip
http://dl.google.com/android/installer_r24.0.1-windows.exe
http://dl.google.com/android/android-sdk_r24.0.1-macosx.zip
http://dl.google.com/android/android-sdk_r24.0.1-linux.tgz
revision 24.0.2
http://dl.google.com/android/android-sdk_r24.0.2-windows.zip
http://dl.google.com/android/installer_r24.0.2-windows.exe
http://dl.google.com/android/android-sdk_r24.0.2-macosx.zip
http://dl.google.com/android/android-sdk_r24.0.2-linux.tgz
revision 24.1.2
http://dl.google.com/android/android-sdk_r24.1.2-windows.zip
http://dl.google.com/android/installer_r24.1.2-windows.exe
http://dl.google.com/android/android-sdk_r24.1.2-macosx.zip
http://dl.google.com/android/android-sdk_r24.1.2-linux.tgz

### tools
(Android SDK的工具包，释放到android-sdk-windows下，文件夹tools覆盖android-sdk-windows/tools
如果下载不下来，将前面的 https://dl-ssl.google.com 修改成 http://dl.google.com 即可
revision 23.0.2
https://dl-ssl.google.com/android/repository/tools_r23.0.2-windows.zip
https://dl-ssl.google.com/android/repository/tools_r23.0.2-linux.zip
https://dl-ssl.google.com/android/repository/tools_r23.0.2-macosx.zip
revision 23.0.5
https://dl-ssl.google.com/android/repository/tools_r23.0.5-windows.zip
https://dl-ssl.google.com/android/repository/tools_r23.0.5-linux.zip
https://dl-ssl.google.com/android/repository/tools_r23.0.5-macosx.zip
revision 24
https://dl-ssl.google.com/android/repository/tools_r24-windows.zip
https://dl-ssl.google.com/android/repository/tools_r24-linux.zip
https://dl-ssl.google.com/android/repository/tools_r24-macosx.zip
revision 24.0.1
https://dl-ssl.google.com/android/repository/tools_r24.0.1-windows.zip
https://dl-ssl.google.com/android/repository/tools_r24.0.1-linux.zip
https://dl-ssl.google.com/android/repository/tools_r24.0.1-macosx.zip
revision 24.0.2
https://dl-ssl.google.com/android/repository/tools_r24.0.2-windows.zip
https://dl-ssl.google.com/android/repository/tools_r24.0.2-linux.zip
https://dl-ssl.google.com/android/repository/tools_r24.0.2-macosx.zip
revision 24.1.2
https://dl-ssl.google.com/android/repository/tools_r24.1.2-windows.zip
https://dl-ssl.google.com/android/repository/tools_r24.1.2-linux.zip
https://dl-ssl.google.com/android/repository/tools_r24.1.2-macosx.zip
revision 24.2
https://dl-ssl.google.com/android/repository/tools_r24.2-windows.zip
https://dl-ssl.google.com/android/repository/tools_r24.2-linux.zip
https://dl-ssl.google.com/android/repository/tools_r24.2-macosx.zip

###platform-tools
Android平台工具包，释放到android-sdk-windows下，产生文件夹platform-tools
如果下载不下来，将前面的 https://dl-ssl.google.com 修改成 http://dl.google.com 即可

revision 19
https://dl-ssl.google.com/android/repository/platform-tools_r19-windows.zip
https://dl-ssl.google.com/android/repository/platform-tools_r19-linux.zip
https://dl-ssl.google.com/android/repository/platform-tools_r19-macosx.zip
revision 19.0.2
https://dl-ssl.google.com/android/repository/platform-tools_r19.0.2-windows.zip
https://dl-ssl.google.com/android/repository/platform-tools_r19.0.2-linux.zip
https://dl-ssl.google.com/android/repository/platform-tools_r19.0.2-macosx.zip
revision 20
https://dl-ssl.google.com/android/repository/platform-tools_r20-windows.zip
https://dl-ssl.google.com/android/repository/platform-tools_r20-linux.zip
https://dl-ssl.google.com/android/repository/platform-tools_r20-macosx.zip
revision 21
https://dl-ssl.google.com/android/repository/platform-tools_r21-windows.zip
https://dl-ssl.google.com/android/repository/platform-tools_r21-linux.zip
https://dl-ssl.google.com/android/repository/platform-tools_r21-macosx.zip
revision 22
https://dl-ssl.google.com/android/repository/platform-tools_r22-windows.zip
https://dl-ssl.google.com/android/repository/platform-tools_r22-linux.zip
https://dl-ssl.google.com/android/repository/platform-tools_r22-macosx.zip

### build-tools
(释放到android-sdk-windows下，产生文件夹build-tools，各版本都可能用到)
注意经常有一个错误， no installed build tools found, 搞定的方法是把解压后的包名由android-22 修改成 22 数字即可
如果下载不下来，将前面的 https://dl-ssl.google.com 修改成 http://dl.google.com 即可

revision 17
https://dl-ssl.google.com/android/repository/build-tools_r17-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r17-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r17-macosx.zip
revision 18.0.1
https://dl-ssl.google.com/android/repository/build-tools_r18.0.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r18.0.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r18.0.1-macosx.zip
revision 18.1
https://dl-ssl.google.com/android/repository/build-tools_r18.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r18.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r18.1-macosx.zip
revision 18.1.1
https://dl-ssl.google.com/android/repository/build-tools_r18.1.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r18.1.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r18.1.1-macosx.zip
revision 19
https://dl-ssl.google.com/android/repository/build-tools_r19-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r19-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r19-macosx.zip
revision 19.0.1
https://dl-ssl.google.com/android/repository/build-tools_r19.0.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r19.0.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r19.0.1-macosx.zip
revision 19.0.2
https://dl-ssl.google.com/android/repository/build-tools_r19.0.2-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r19.0.2-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r19.0.2-macosx.zip
revision 19.0.3
https://dl-ssl.google.com/android/repository/build-tools_r19.0.3-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r19.0.3-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r19.0.3-macosx.zip
revision 19.1
https://dl-ssl.google.com/android/repository/build-tools_r19.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r19.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r19.1-macosx.zip
revision 20
https://dl-ssl.google.com/android/repository/build-tools_r20-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r20-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r20-macosx.zip
revision 21
https://dl-ssl.google.com/android/repository/build-tools_r21-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r21-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r21-macosx.zip
revision 21.0.1
https://dl-ssl.google.com/android/repository/build-tools_r21.0.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.0.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.0.1-macosx.zip
revision 21.0.2
https://dl-ssl.google.com/android/repository/build-tools_r21.0.2-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.0.2-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.0.2-macosx.zip
revision 21.1
https://dl-ssl.google.com/android/repository/build-tools_r21.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.1-macosx.zip
revision 21.1.1
https://dl-ssl.google.com/android/repository/build-tools_r21.1.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.1.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.1.1-macosx.zip
revision 21.1.2
https://dl-ssl.google.com/android/repository/build-tools_r21.1.2-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.1.2-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r21.1.2-macosx.zip
revision 22
https://dl-ssl.google.com/android/repository/build-tools_r22-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r22-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r22-macosx.zip
revision 22.0.1
https://dl-ssl.google.com/android/repository/build-tools_r22.0.1-windows.zip
https://dl-ssl.google.com/android/repository/build-tools_r22.0.1-linux.zip
https://dl-ssl.google.com/android/repository/build-tools_r22.0.1-macosx.zip

### platforms
各种版本的Android平台，释放到android-sdk-windows/platforms下，如果下载不下来，将前面的 https://dl-ssl.google.com 修改成 http://dl.google.com 即可
Android 1.1 (API 2):
https://dl-ssl.google.com/android/repository/android-1.1_r1-windows.zip
https://dl-ssl.google.com/android/repository/android-1.1_r1-linux.zip
https://dl-ssl.google.com/android/repository/android-1.1_r1-macosx.zip
Android 1.5 (API 3):
https://dl-ssl.google.com/android/repository/android-1.5_r04-windows.zip
https://dl-ssl.google.com/android/repository/android-1.5_r04-linux.zip
https://dl-ssl.google.com/android/repository/android-1.5_r04-macosx.zip
Android 1.6 (API 4):
https://dl-ssl.google.com/android/repository/android-1.6_r03-windows.zip
https://dl-ssl.google.com/android/repository/android-1.6_r03-linux.zip
https://dl-ssl.google.com/android/repository/android-1.6_r03-macosx.zip
Android 2.0 (API 5) Obsolete:
https://dl-ssl.google.com/android/repository/android-2.0_r01-windows.zip
https://dl-ssl.google.com/android/repository/android-2.0_r01-linux.zip
https://dl-ssl.google.com/android/repository/android-2.0_r01-macosx.zip
Android 2.0.1 (API 6) Obsolete:
https://dl-ssl.google.com/android/repository/android-2.0.1_r01-windows.zip
https://dl-ssl.google.com/android/repository/android-2.0.1_r01-linux.zip
https://dl-ssl.google.com/android/repository/android-2.0.1_r01-macosx.zip
Android 2.1 (API 7):
https://dl-ssl.google.com/android/repository/android-2.1_r03-linux.zip
Android 2.2 (API 8):
https://dl-ssl.google.com/android/repository/android-2.2_r03-linux.zip
Android 2.3 (API 9) Obsolete:
https://dl-ssl.google.com/android/repository/android-2.3.1_r02-linux.zip
Android 2.3.3 (API 10):
https://dl-ssl.google.com/android/repository/android-2.3.3_r02-linux.zip
Android 3.0 (API 11):
https://dl-ssl.google.com/android/repository/android-3.0_r02-linux.zip
Android 3.1 (API 12):
https://dl-ssl.google.com/android/repository/android-3.1_r03-linux.zip
Android 3.2 (API 13):
https://dl-ssl.google.com/android/repository/android-3.2_r01-linux.zip
Android 4.0 (API 14):
https://dl-ssl.google.com/android/repository/android-14_r04.zip
Android 4.0.3 (API 15):
https://dl-ssl.google.com/android/repository/android-15_r05.zip
Android 4.1.2 (API 16):
https://dl-ssl.google.com/android/repository/android-16_r05.zip
Android 4.2.2 (API 17):
https://dl-ssl.google.com/android/repository/android-17_r03.zip
Android 4.3 (API 18):
https://dl-ssl.google.com/android/repository/android-18_r03.zip
Android 4.4.2 (API 19):
https://dl-ssl.google.com/android/repository/android-19_r04.zip
Android 4.4W (API 20):
https://dl-ssl.google.com/android/repository/android-20_r02.zip
Android L (API 20, L Preview):
https://dl-ssl.google.com/android/repository/android-L_r04.zip
Android 5.0.1 (API 21):
https://dl-ssl.google.com/android/repository/android-21_r02.zip
Android 5.1 (API 22):
https://dl-ssl.google.com/android/repository/android-22_r02.zip


### system-images
Android系统镜像，释放到android-sdk-windows/system-images/android-xx下[xx对应api版本数字]
如果下载不下来，将前面的 https://dl-ssl.google.com 修改成 http://dl.google.com 即可

system-images/android-10
http://dl-ssl.google.com/android/repository/sys-img/x86/sysimg_x86-10_r02.zip
system-images/android-14
https://dl-ssl.google.com/android/repository/sysimg_armv7a-14_r02.zip
system-images/android-15
https://dl-ssl.google.com/android/repository/sysimg_armv7a-15_r02.zip
https://dl-ssl.google.com/android/repository/sys-img/mips/sysimg_mips-15_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/x86/sysimg_x86-15_r01.zip
system-images/android-16
https://dl-ssl.google.com/android/repository/sysimg_armv7a-16_r03.zip
https://dl-ssl.google.com/android/repository/sys-img/mips/sysimg_mips-16_r04.zip
https://dl-ssl.google.com/android/repository/sys-img/x86/sysimg_x86-16_r01.zip
system-images/android-17
http://dl-ssl.google.com/android/repository/sysimg_armv7a-17_r02.zip
http://dl-ssl.google.com/android/repository/sys-img/mips/sysimg_mips-17_r01.zip
http://dl-ssl.google.com/android/repository/sys-img/x86/sysimg_x86-17_r01.zip
system-images/android-18
http://dl-ssl.google.com/android/repository/sysimg_armv7a-18_r02.zip
http://dl-ssl.google.com/android/repository/sys-img/x86/sysimg_x86-18_r01.zip
system-images/android-19
http://dl-ssl.google.com/android/repository/sysimg_armv7a-19_r02.zip
http://dl-ssl.google.com/android/repository/sys-img/x86/sysimg_x86-19_r02.zip
system-images/android-20/android-wear
https://dl-ssl.google.com/android/repository/sys-img/android-wear/android-wear-sysimg-1077298.zip
https://dl-ssl.google.com/android/repository/sys-img/android-wear/sysimg_wear_arm-20_r04.zip
https://dl-ssl.google.com/android/repository/sys-img/android-wear/sysimg_wear_x86-20_r04.zip
system-images/android-L
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_armv7a-L_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_arm-L_r02.zip
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_x86-L_r02.zip
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_x86_64-L_r01.zip
system-images/android-L/android-tv
https://dl-ssl.google.com/android/repository/sys-img/android-tv/sysimg_tv_arm-L_r02.zip
https://dl-ssl.google.com/android/repository/sys-img/android-tv/sysimg_tv_x86-L_r02.zip
system-images/android-21
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_arm-21_r03.zip
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_x86-21_r03.zip
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_x86_64-21_r03.zip
https://dl-ssl.google.com/android/repository/sys-img/android-tv/sysimg_atv_arm-21_r03.zip
https://dl-ssl.google.com/android/repository/sys-img/android-tv/sysimg_atv_x86-21_r03.zip
https://dl-ssl.google.com/android/repository/sys-img/android-wear/sysimg_wear_arm-21_r03.zip
https://dl-ssl.google.com/android/repository/sys-img/android-wear/sysimg_wear_x86-21_r03.zip
https://dl-ssl.google.com/android/repository/sys-img/google_apis/sysimg_arm-21_r05.zip
https://dl-ssl.google.com/android/repository/sys-img/google_apis/sysimg_x86-21_r05.zip
https://dl-ssl.google.com/android/repository/sys-img/google_apis/sysimg_x86_64-21_r05.zip
system-images/android-22
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_arm-22_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_x86-22_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/android/sysimg_x86_64-22_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/android-tv/sysimg_atv_arm-22_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/android-tv/sysimg_atv_x86-22_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/google_apis/sysimg_arm-22_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/google_apis/sysimg_x86-22_r01.zip
https://dl-ssl.google.com/android/repository/sys-img/google_apis/sysimg_x86_64-22_r01.zip

### docs 
(文档，释放到android-sdk-windows下，会产生文件夹docs)
如果下载不下来，将前面的 https://dl-ssl.google.com 修改成 http://dl.google.com 即可

https://dl-ssl.google.com/android/repository/docs-16_r03.zip
https://dl-ssl.google.com/android/repository/docs-17_r02.zip
https://dl-ssl.google.com/android/repository/docs-18_r01.zip
https://dl-ssl.google.com/android/repository/docs-19_r02.zip
https://dl-ssl.google.com/android/repository/docs-L_r01.zip
https://dl-ssl.google.com/android/repository/docs-21_r01.zip
https://dl-ssl.google.com/android/repository/docs-22_r01.zip


###samples 
(应用实例，释放到android-sdk-windows/samples下)，如果下载不下来，将前面的 https://dl-ssl.google.com 修改成 http://dl.google.com 即可

https://dl-ssl.google.com/android/repository/samples-2.1_r01-linux.zip
https://dl-ssl.google.com/android/repository/samples-2.2_r01-linux.zip
https://dl-ssl.google.com/android/repository/samples-2.3_r01-linux.zip
https://dl-ssl.google.com/android/repository/samples-2.3.3_r01-linux.zip
https://dl-ssl.google.com/android/repository/samples-3.0_r01-linux.zip
https://dl-ssl.google.com/android/repository/samples-3.1_r01-linux.zip
https://dl-ssl.google.com/android/repository/samples-3.2_r01-linux.zip
https://dl-ssl.google.com/android/repository/samples-14_r02.zip
https://dl-ssl.google.com/android/repository/samples-15_r02.zip
https://dl-ssl.google.com/android/repository/samples-16_r01.zip
https://dl-ssl.google.com/android/repository/samples-17_r01.zip
https://dl-ssl.google.com/android/repository/samples-18_r01.zip
https://dl-ssl.google.com/android/repository/samples-19_r06.zip
https://dl-ssl.google.com/android/repository/samples-20_r03.zip
https://dl-ssl.google.com/android/repository/samples-L_r02.zip
https://dl-ssl.google.com/android/repository/samples-21_r04.zip
https://dl-ssl.google.com/android/repository/samples-22_r05.zip


### sources 
(Android SDK源程序，释放到android-sdk-windows/sources/android-xx下[xx对应api版本数字])
https://dl-ssl.google.com/android/repository/sources-14_r01.zip
https://dl-ssl.google.com/android/repository/sources-15_r02.zip
https://dl-ssl.google.com/android/repository/sources-16_r02.zip
https://dl-ssl.google.com/android/repository/sources-17_r01.zip
https://dl-ssl.google.com/android/repository/sources-18_r01.zip
https://dl-ssl.google.com/android/repository/sources-19_r02.zip
https://dl-ssl.google.com/android/repository/sources-20_r01.zip
https://dl-ssl.google.com/android/repository/sources-21_r01.zip
https://dl-ssl.google.com/android/repository/sources-22_r01.zip


(10)extras (扩展应用，释放到android-sdk-windows/extras下)
Android Support Repository(extras/android/m2repository)
https://dl-ssl.google.com/android/repository/android_m2repository_r12.zip
https://dl-ssl.google.com/android/repository/android_m2repository_r14.zip
Android Support Library(extras/android/support)
https://dl-ssl.google.com/android/repository/support_r20.zip
https://dl-ssl.google.com/android/repository/support_r21.zip
https://dl-ssl.google.com/android/repository/support_r21.0.2.zip
https://dl-ssl.google.com/android/repository/support_r21.0.3.zip
https://dl-ssl.google.com/android/repository/support_r22.0.0.zip
https://dl-ssl.google.com/android/repository/support_r22.1.1.zip
Google AdMob Ads SDK(extras/google/admob_ads_sdk) (Obsolete)
https://dl-ssl.google.com/googleadmobadssdk/googleadmobadssdkandroid-6.4.1.zip
Google Analytics App Tracking SDK(extras/google/analytics_sdk_v2) (Obsolete)
https://dl.google.com/gaformobileapps/GoogleAnalyticsAndroid_2.0beta5.zip
Google Cloud Messaging for Android Library(extras/google/gcm) (Obsolete)
https://dl-ssl.google.com/android/repository/gcm_r03.zip
Google Play services for Froyo
https://dl-ssl.google.com/android/repository/google_play_services_3265130_r12.zip
Google Play services(extras/google/google_play_services)
https://dl-ssl.google.com/android/repository/google_play_services_6111000_r20.zip
https://dl-ssl.google.com/android/repository/google_play_services_6171000_r21.zip
https://dl-ssl.google.com/android/repository/google_play_services_6587000_r22.zip
https://dl-ssl.google.com/android/repository/google_play_services_7095000_r23.zip
https://dl-ssl.google.com/android/repository/google_play_services_7327000_r24.zip
Google Repository(extras/google/m2repository)
https://dl-ssl.google.com/android/repository/google_m2repository_r13.zip
https://dl-ssl.google.com/android/repository/google_m2repository_r15.zip
https://dl-ssl.google.com/android/repository/google_m2repository_r16.zip
https://dl-ssl.google.com/android/repository/google_m2repository_r17.zip
Google Play APK Expansion Library(extras/google/play_apk_expansion)
https://dl-ssl.google.com/android/repository/market_apk_expansion-r03.zip
Google Play Billing Library(extras/google/play_billing)
https://dl-ssl.google.com/android/repository/play_billing_r05.zip
Google Play Licensing Library(extras/google/play_licensing)
https://dl-ssl.google.com/android/repository/market_licensing-r02.zip
Android Auto API Simulators
https://dl-ssl.google.com/android/repository/simulator_r01.zip
Google USB Driver(extras/usb_driver)
https://dl-ssl.google.com/android/repository/usb_driver_r10-windows.zip
https://dl-ssl.google.com/android/repository/usb_driver_r11-windows.zip
Google Web Driver(extras/google/webdriver)
https://dl-ssl.google.com/android/repository/webdriver_r02.zip
Intel x86 Emulator Accelerator(HAXM installer)(extras/intel/Hardware_Accelerated_Execution_Manager)
https://software.intel.com/sites/default/files/haxm-windows_r03.zip
https://software.intel.com/sites/default/files/managed/21/5f/haxm-macosx_r05.zip
https://download-software.intel.com/sites/landingpage/android/extra_intel_haxm-windows_r03.zip
https://download-software.intel.com/sites/landingpage/android/extra_intel_haxm-macosx_r03.zip
https://dl-ssl.google.com/android/repository/extras/intel/haxm-windows_r05.zip
https://dl-ssl.google.com/android/repository/extras/intel/haxm-windows_r05.3.zip
https://dl-ssl.google.com/android/repository/extras/intel/haxm-macosx_r04.zip
https://dl-ssl.google.com/android/repository/extras/intel/haxm-macosx_r05.3.zip


###add-ons 
(google手机api,释放到android-sdk-windows/add-ons/)
addon-google_apis-google-xx[xx对应api版本数字]
https://dl-ssl.google.com/android/repository/google_apis-3-r03.zip
https://dl-ssl.google.com/android/repository/google_apis-4_r02.zip
https://dl-ssl.google.com/android/repository/google_apis-5_r01.zip
https://dl-ssl.google.com/android/repository/google_apis-6_r01.zip
https://dl-ssl.google.com/android/repository/google_apis-7_r01.zip
https://dl-ssl.google.com/android/repository/google_apis-8_r02.zip
https://dl-ssl.google.com/android/repository/google_apis-9_r02.zip
https://dl-ssl.google.com/android/repository/google_apis-10_r02.zip
https://dl-ssl.google.com/android/repository/google_apis-11_r01.zip
https://dl-ssl.google.com/android/repository/google_apis-12_r01.zip
https://dl-ssl.google.com/android/repository/google_apis-13_r01.zip
https://dl-ssl.google.com/android/repository/google_apis-14_r02.zip
https://dl-ssl.google.com/android/repository/google_apis-15_r02.zip
https://dl-ssl.google.com/android/repository/google_apis-16_r03.zip
https://dl-ssl.google.com/android/repository/google_apis-17_r03.zip
https://dl-ssl.google.com/android/repository/google_apis-18_r03.zip
https://dl-ssl.google.com/android/repository/google_apis-19_r13.zip  Google APIs (ARM System Image)
https://dl-ssl.google.com/android/repository/sys-img/x86/google_apis_x86-19_r13.zip  Google APIs (x86 System Image)

https://dl-ssl.google.com/android/repository/google_tv-12_r02.zip
https://dl-ssl.google.com/android/repository/google_tv-13_r01.zip

https://dl-ssl.google.com/android/repository/google_apis-21_r01.zip
https://dl-ssl.google.com/android/repository/google_apis-22_r01.zip


#### Glass Development Kit Preview
https://dl.google.com/glass/xe22/google-gdk.zip

addon-intel_atom_x86_system_image-intel_corporation-xx
https://software.intel.com/sites/landingpage/android/addon_intel_sysimg_2.3.7_api-10.zip
addon-dual_screen_apis-kyocera_corporation-xx (Dual Screen api)
http://dl.kyocera-wireless.com/echobykyocera.com/ECHO-SDK-v1-03.zip
http://dl.kyocera-wireless.com/echobykyocera.com/ECHO-SDK-v2-00.zip
addon-sony_xperia_extensions_edk_2_0-sony_mobile_communications_ab-xx
http://dl-developer.sonymobile.com/edk/android/edk_2.0_ver2.zip
addon-real3d-lge-xx
http://developer.lgmobile.com/sdk/android/Real3D_addon_api-8_r01.zip
http://developer.lgmobile.com/sdk/android/Real3D_SDK_api-10_r02.zip
http://developer.lgmobile.com/sdk/android/Real3D_SDK_api-14_r01.zip
addon-htc_opensense_sdk-htc-15
http://dl.htcdev.com/sdk/zip/htc_opensense_sdk.zip
addon-htc_opensense_apis-16
http://dl.htcdev.com/sdk/zip/htc_opensense_apis.zip


说明: 以上第(3)点及以后，可以将安装包放在文件夹android-sdk-windows/temp下，通过SDK Manager自动安装释放到相应位置.


### ADT——Plugin
ADT Plugin for Eclipse
http://dl.google.com/android/ADT-22.2.1.zip
http://dl.google.com/android/ADT-22.3.0.zip
http://dl.google.com/android/ADT-22.6.2.zip
http://dl.google.com/android/ADT-22.6.3.zip
http://dl.google.com/android/ADT-23.0.2.zip


### Eclipse与ADT
Android Developer Tools(基于Eclipse的Android开发环境，已包含Eclipse与ADT).
revision 22.6.2
http://dl.google.com/android/adt/22.6.2/adt-bundle-windows-x86-20140321.zip
http://dl.google.com/android/adt/22.6.2/adt-bundle-windows-x86_64-20140321.zip
http://dl.google.com/android/adt/22.6.2/adt-bundle-mac-x86_64-20140321.zip
http://dl.google.com/android/adt/22.6.2/adt-bundle-linux-x86-20140321.zip
http://dl.google.com/android/adt/22.6.2/adt-bundle-linux-x86_64-20140321.zip
revision 23
http://dl.google.com/android/adt/adt-bundle-windows-x86-20140624.zip
http://dl.google.com/android/adt/adt-bundle-windows-x86_64-20140624.zip
http://dl.google.com/android/adt/adt-bundle-mac-x86_64-20140624.zip
http://dl.google.com/android/adt/adt-bundle-linux-x86-20140624.zip
http://dl.google.com/android/adt/adt-bundle-linux-x86_64-20140624.zip
revision 23.0.2
http://dl.google.com/android/adt/adt-bundle-windows-x86-20140702.zip
http://dl.google.com/android/adt/adt-bundle-windows-x86_64-20140702.zip
http://dl.google.com/android/adt/adt-bundle-mac-x86_64-20140702.zip
http://dl.google.com/android/adt/adt-bundle-linux-x86-20140702.zip
http://dl.google.com/android/adt/adt-bundle-linux-x86_64-20140702.zip


### Android NDK
revision 9d
http://dl.google.com/android/ndk/android-ndk-r9d-windows-x86.zip
http://dl.google.com/android/ndk/android-ndk-r9d-windows-x86_64.zip
http://dl.google.com/android/ndk/android-ndk-r9d-darwin-x86.tar.bz2
http://dl.google.com/android/ndk/android-ndk-r9d-darwin-x86_64.tar.bz2
http://dl.google.com/android/ndk/android-ndk-r9d-linux-x86.tar.bz2
http://dl.google.com/android/ndk/android-ndk-r9d-linux-x86_64.tar.bz2
http://dl.google.com/android/ndk/android-ndk-r9d-cxx-stl-libs-with-debug-info.zip
revision 10c
http://dl.google.com/android/ndk/android-ndk-r10c-windows-x86.exe
http://dl.google.com/android/ndk/android-ndk-r10c-windows-x86_64.exe
http://dl.google.com/android/ndk/android-ndk-r10c-darwin-x86.bin
http://dl.google.com/android/ndk/android-ndk-r10c-darwin-x86_64.bin
http://dl.google.com/android/ndk/android-ndk-r10c-linux-x86.bin
http://dl.google.com/android/ndk/android-ndk-r10c-linux-x86_64.bin
revision 10d
http://dl.google.com/android/ndk/android-ndk-r10d-windows-x86.exe
http://dl.google.com/android/ndk/android-ndk-r10d-windows-x86_64.exe
http://dl.google.com/android/ndk/android-ndk-r10d-darwin-x86.bin
http://dl.google.com/android/ndk/android-ndk-r10d-darwin-x86_64.bin
http://dl.google.com/android/ndk/android-ndk-r10d-linux-x86.bin
http://dl.google.com/android/ndk/android-ndk-r10d-linux-x86_64.bin


###Android Studio
(The official Android IDE)
revision 0.8.14
https://dl.google.com/dl/android/studio/ide-zips/0.8.14/android-studio-ide-135.1538390-windows.zip
https://dl.google.com/dl/android/studio/ide-zips/0.8.14/android-studio-ide-135.1538390-mac.zip
https://dl.google.com/dl/android/studio/ide-zips/0.8.14/android-studio-ide-135.1538390-linux.zip
revision 1.1.0
https://dl.google.com/dl/android/studio/install/1.1.0/android-studio-bundle-135.1740770-windows.exe
https://dl.google.com/dl/android/studio/install/1.1.0/android-studio-ide-135.1740770-windows.exe
https://dl.google.com/dl/android/studio/ide-zips/1.1.0/android-studio-ide-135.1740770-windows.zip
https://dl.google.com/dl/android/studio/install/1.1.0/android-studio-ide-135.1740770-mac.dmg
https://dl.google.com/dl/android/studio/ide-zips/1.1.0/android-studio-ide-135.1740770-linux.zip


### 其他资料
如果下载不下来，将前面的 https://dl-ssl.google.com 修改成 http://dl.google.com 即可

Android SDK 官方下载页面
http://developer.android.com/sdk/index.html


Android SDK 国内镜像站点(大连东软信息学院)
http://mirrors.neusoft.edu.cn/android/repository/


Android Open Source
https://android.googlesource.com/
https://developers.google.com/android/nexus/images


Android Open Source 国内镜像站点
http://mirror.neu.edu.cn/android/

### 谢谢！

有问题请留言。T_T  别忘了给我点亮GIT星星哦！
欢迎关注我的博客: [皓眸大前端](http://www.haomou.net/)


