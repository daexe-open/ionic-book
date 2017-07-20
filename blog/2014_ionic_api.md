title: ionic中文javascript API(1)
date: 2014-08-11 09:40:49
tags:
- ionic
- API
categories:
- ionic|reapp
---
### 简介

ionic除了提供css框架以外，参看[ionic中文详解CSS组件](http://www.haomou.net/2014/08/09/2014_ionic_api_css/ ),还是提供了javascript UI库。许多组件都是需要通过javascript来产生比较炫的效果。ionic遵循了mvc的设计模式，这一点可以通过通过创建tab栏的官方例子项目来体会view之间的控制与切换。下面就是关于ionic的中文javascript API介绍。其实官方已经写的比较详细了，只是国内访问网速不好的地方，那个js菜单栏一直展不开，加载慢，所以自己做一个中文的，方便以后查找。
内容很长，参看：
[ionic中文javascript API(1)](http://www.haomou.net/2014/08/11/2014_ionic_api/ )
[ionic中文javascript API(2)](http://www.haomou.net/2014/10/13/2014_ionic_api2/ )
教程索引：(持续更新)
[ionic中文教程](http://www.haomou.net/2014/10/06/2014_ionic_learn/)
<!--more-->
<img alt="皓眸大前端开发学习" src="/images/ionic.png" class="floatnone" alt="皓眸大前端开发学习"/>

转载请注明出处：http://www.haomou.net/2014/08/11/2014_ionic_api/

### Tabs
####1. ion-tabs 
通过tab栏切换不同的page，注意：不要将ion-tabs放在ion-content里面，会导致一个css错误。
效果
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/ionic_js1.jpg"></img>
android和ios在默认样式上有一些不同的地方，官方文档中都有说明，tab位置，$ionicConfigProvider, tabs.position(value)
Android 默认是顶部(top)，Ios是底部 (bottom) :http://ionicframework.com/docs/api/provider/$ionicConfigProvider/
如果将tab配置成统一为下方，配制方法：
```
var myApp = angular.module('reallyCoolApp', ['ionic']);

myApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(5);

  // note that you can also chain configs
  $ionicConfigProvider.tabs.position("bottom");
});
```
用法
```{bash}
<ion-tabs class="tabs-positive tabs-icon-only">

  <ion-tab title="Home" icon-on="ion-ios7-filing" icon-off="ion-ios7-filing-outline">
    <!-- Tab 1 content -->
  </ion-tab>

  <ion-tab title="About" icon-on="ion-ios7-clock" icon-off="ion-ios7-clock-outline">
    <!-- Tab 2 content -->
  </ion-tab>

  <ion-tab title="Settings" icon-on="ion-ios7-gear" icon-off="ion-ios7-gear-outline">
    <!-- Tab 3 content -->
  </ion-tab>

</ion-tabs>
```
API
<table class="table table-bordered table-striped table-condensed"><tr><th>
Attr	</th><th>
Type	</th><th>
Details</th><tr><td>

delegate-handle(optional)</td><td>
string	</td><td>
The handle used to identify these tabs with $ionicTabsDelegate</td></tr></table>
实例
```{bash}
<html ng-app="ionicApp">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title>Inline Tabs</title>

    <link href="http://code.ionicframework.com/1.0.0-beta.1/css/ionic.min.css" rel="stylesheet">
    <script src="http://code.ionicframework.com/1.0.0-beta.1/js/ionic.bundle.min.js"></script>
  </head>
  <body ng-controller="RootCtrl">

    <ion-tabs class="tabs-icon-only tabs-positive">

      <ion-tab title="Home"
               icon-on="ion-ios7-filing"
               icon-off="ion-ios7-filing-outline"
               ng-controller="HomeCtrl">

        <ion-header-bar class="bar-positive">
          <button class="button button-clear" ng-click="newTask()">New</button>
          <h1 class="title">Tasks</h1>
        </ion-header-bar>

        <ion-content has-tabs="true" on-refresh="onRefresh()">

          <ion-refresher></ion-refresher>
          <ion-list scroll="false" on-refresh="onRefresh()"
                    s-editing="isEditingItems"
                    animation="fade-out"
                    delete-icon="icon ion-minus-circled">
            <ion-item ng-repeat="item in items"
                      item="item"
                      buttons="item.buttons"
                      can-delete="true"
                      can-swipe="true"
                      on-delete="deleteItem(item)"
                      ng-class="{completed: item.isCompleted}">
              {{item.title}}
              <i class="{{item.icon}}"></i>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-tab>

      <ion-tab title="About" icon-on="icon ion-ios7-clock" icon-off="icon ion-ios7-clock-outline">
        <header class="bar bar-header bar-positive">
          <h1 class="title">Deadlines</h1>
        </header>
        <ion-content has-header="true">
          <h1>Deadlines</h1>
        </ion-content>
      </ion-tab>

      <ion-tab title="Settings" icon-on="icon ion-ios7-gear" icon-off="icon ion-ios7-gear-outline">
        <header class="bar bar-header bar-positive">
          <h1 class="title">Settings</h1>
        </header>
        <ion-content has-header="true">
          <h1>Settings</h1>
        </ion-content>
      </ion-tab>

    </ion-tabs>

    <script id="newTask.html" type="text/ng-template">
      <div id="task-view" class="modal slide-in-up" ng-controller="TaskCtrl">
        <header class="bar bar-header bar-secondary">
          <h1 class="title">New Task</h1>
          <button class="button button-clear button-primary" ng-click="close()">Done</button>
        </header>
        <ion-content class="padding has-header">
          <input type="text" placeholder="I need to do this...">
        </ion-content>
      </div>
    </script>

  </body>
</html>
```
app.js
```{bash}
angular.module('ionicApp', ['ionic'])

.controller('RootCtrl', function($scope) {
  $scope.onControllerChanged = function(oldController, oldIndex, newController, newIndex) {
    console.log('Controller changed', oldController, oldIndex, newController, newIndex);
    console.log(arguments);
  };
})


.controller('HomeCtrl', function($scope, $timeout, $ionicModal, $ionicActionSheet) {
  $scope.items = [];

  $ionicModal.fromTemplateUrl('newTask.html', function(modal) {
    $scope.settingsModal = modal;
  });

  var removeItem = function(item, button) {
    $ionicActionSheet.show({
      buttons: [],
      destructiveText: 'Delete Task',
      cancelText: 'Cancel',
      cancel: function() {
        return true;
      },
      destructiveButtonClicked: function() {
        $scope.items.splice($scope.items.indexOf(item), 1);
        return true;
      }
    });
  };

  var completeItem = function(item, button) {
    item.isCompleted = true;
  };

  $scope.onReorder = function(el, start, end) {
    ionic.Utils.arrayMove($scope.items, start, end);
  };

  $scope.onRefresh = function() {
    console.log('ON REFRESH');

    $timeout(function() {
      $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
  }


  $scope.removeItem = function(item) {
    removeItem(item);
  };

  $scope.newTask = function() {
    $scope.settingsModal.show();
  };

  // Create the items
  for(var i = 0; i < 25; i++) {
    $scope.items.push({
      title: 'Task ' + (i + 1),
      buttons: [{
        text: 'Done',
        type: 'button-success',
        onButtonClicked: completeItem,
      }, {
        text: 'Delete',
        type: 'button-danger',
        onButtonClicked: removeItem,
      }]
    });
  }

})

.controller('TaskCtrl', function($scope) {
  $scope.close = function() {
    $scope.modal.hide();
  }
});
```
<h4>2.ion-tab</h4>
作为ion-tabs的tab项，用于切换选择tab的内容，只有当tab被选中时，其对应的内容content才会存在。每个ion tab都有自己的查看历史。

用法
```{bash}
<ion-tab
  title="Tab!"
  icon="my-icon"
  href="#/tab/tab-link"
  on-select="onTabSelected()"
  on-deselect="onTabDeselected()">
</ion-tab>
```
API
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
title</td><td>
string</td><td>
The title of the tab.</td></tr><tr><td>
href(optional)</td><td>
string</td><td>
The link that this tab will navigate to when tapped.</td></tr><tr><td>
icon(optional)</td><td>
string</td><td>
The icon of the tab. If given, this will become the default for icon-on and icon-off.</td></tr><tr><td>
icon-on(optional)</td><td>
string</td><td>
The icon of the tab while it is selected.</td></tr><tr><td>
icon-off(optional)</td><td>
string	</td><td>
The icon of the tab while it is not selected.</td></tr><tr><td>
badge(optional)</td><td>
expression</td><td>
The badge to put on this tab (usually a number).</td></tr><tr><td>
badge-style(optional)</td><td>
expression	</td><td>
The style of badge to put on this tab (eg tabs-positive).</td></tr><tr><td>
on-select(optional)</td><td>
expression	</td><td>
Called when this tab is selected.</td></tr><tr><td>
on-deselect(optional)</td><td>
expression	</td><td>
Called when this tab is deselected.</td></tr><tr><td>
ng-click(optional)</td><td>
expression	</td><td>
By default, the tab will be selected on click. If ngClick is set, it will not. You can explicitly switch tabs using $ionicTabsDelegate.select().</td></tr></table>
<h4>3. \$ionicTabsDelegate</h4>
是ion-tabs的一个api参数，通过这个可以选择切换不同的tab,可以通过$getByHandle 方法获取不同的tab的实例。

用法
```{bash}
<body ng-controller="MyCtrl">
  <ion-tabs>

    <ion-tab title="Tab 1">
      Hello tab 1!
      <button ng-click="selectTabWithIndex(1)">Select tab 2!</button>
    </ion-tab>
    <ion-tab title="Tab 2">Hello tab 2!</ion-tab>

  </ion-tabs>
</body>
function MyCtrl($scope, $ionicTabsDelegate) {
  $scope.selectTabWithIndex = function(index) {
    $ionicTabsDelegate.select(index);
  }
}
```
参数
1. select(index, [shouldChangeHistory]),Select the tab matching the given index.
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
index	</td><td>
number	</td><td>
Index of the tab to select.</td></tr><tr><td>
shouldChangeHistory(optional)</td><td>
boolean	</td><td>
Whether this selection should load this tab's view history (if it exists) and use it, or just load the default page. Default false. Hint: you probably want this to be true if you have an ionNavView inside your tab.</td></tr></table>

2. selectedIndex(),Returns: number The index of the selected tab, or -1.

3. \$getByHandle(handle)

<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
handle	</td><td>
string	</td><td>
Returns: delegateInstance A delegate instance that controls only the ionTabs directives with delegate-handle matching the given handle.</td></tr></table>
```{bash}
Example  $ionicTabsDelegate.$getByHandle('my-handle').select(0);
```
### ion-side-menus 
####1.ion-side-menus 
是一个带有边栏菜单的容器，可以通过点击按钮或者滑动屏幕来展开菜单。在js中可以通过$ionicSideMenuDelegate来获取该组件对应的实例。为了自动关闭已打开的menu，可以通过在ion-side-menu-content中的按钮或link添加menu-close样式。

用法
```{bash}
<ion-side-menus>
  <!-- Center content -->
  <ion-side-menu-content ng-controller="ContentController">
  </ion-side-menu-content>

  <!-- Left menu -->
  <ion-side-menu side="left">
  </ion-side-menu>

  <!-- Right menu -->
  <ion-side-menu side="right">
  </ion-side-menu>
</ion-side-menus>
function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
```
API
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
delegate-handle(optional)</td><td>
string	</td><td>
The handle used to identify this side menu with $ionicSideMenuDelegate.</td></tr></table>
效果
<img class="floatnone" alt="皓眸大前端开发学习" src="/images/sidemenu.gif"/>

<h4>2. ion-side-menu-content </h4>
展示主要内容的容器。可以通过滑动屏幕来展开menu

用法
```{bash}
<ion-side-menu-content
  edge-drag-threshold="true"
  drag-content="true">
</ion-side-menu-content>
```
API
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
drag-content
(optional)</td><td>
boolean	</td><td>
Whether the content can be dragged. Default true.</td></tr><tr><td>
edge-drag-threshold</td><td>	boolean|number	</td><td>
Whether the content drag can only start if it is below a certain threshold distance from the edge of the screen. Default false. Accepts three types of values:
- If a non-zero number is given, that many pixels is used as the maximum allowed distance from the edge that starts dragging the side menu.
- If true is given, the default number of pixels (25) is used as the maximum allowed distance.
- If false or 0 is given, the edge drag threshold is disabled, and dragging from anywhere on the content is allowed.</td></tr></table>

####3. ion-side-menu 
存放侧边栏的容器，
用法
```{bash}
<ion-side-menu
  side="left"
  width="myWidthValue + 20"
  is-enabled="shouldLeftSideMenuBeEnabled()">
</ion-side-menu>
```
API
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
side</td><td>	string	</td><td>
Which side the side menu is currently on. Allowed values: 'left' or 'right'.</td></tr><tr><td>
is-enabled
(optional)</td><td>
boolean	</td><td>
Whether this side menu is enabled.</td></tr><tr><td>
width
(optional)</td><td>
number	</td><td>
How many pixels wide the side menu should be. Defaults to 275.</td></tr></table>

####4. menu-toggle
用于切换显示侧边栏菜单
用法
```{bash}
<ion-view>
  <ion-nav-buttons side="left">
   <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
  </ion-nav-buttons>
 ...
</ion-view>
```

####5. menu-close
关闭当前打开的menu，下面的例子是在一个menu栏里面的一项菜单，点击可以关闭menu
```{bash}
<a menu-close href="#/home" class="item">Home</a>
```

####6. $ionicSideMenuDelegate 
用于指定控制	ionSideMenus 的实例，
用法
```{bash}
<body ng-controller="MainCtrl">
  <ion-side-menus>
    <ion-side-menu-content>
      Content!
      <button ng-click="toggleLeftSideMenu()">
        Toggle Left Side Menu
      </button>
    </ion-side-menu-content>
    <ion-side-menu side="left">
      Left Menu!
    <ion-side-menu>
  </ion-side-menus>
</body>
function MainCtrl($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeftSideMenu = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
```
方法
- toggleLeft([isOpen]), Toggle the left side menu (if it exists).
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
isOpen
(optional)</td><td>
boolean	</td><td>
Whether to open or close the menu. Default: Toggles the menu.</td></tr></table>
- toggleRight([isOpen]),Toggle the right side menu (if it exists).
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
isOpen
(optional)</td><td>
boolean	</td><td>
Whether to open or close the menu. Default: Toggles the menu.</td></tr></table>
- getOpenRatio(),Gets the ratio of open amount over menu width. For example, a menu of width 100 that is opened by 50 pixels is 50% opened, and would return a ratio of 0.5.
Returns: float 0 if nothing is open, between 0 and 1 if left menu is opened/opening, and between 0 and -1 if right menu is opened/opening.
- isOpen(),Returns: boolean Whether either the left or right menu is currently opened.
- isOpenLeft(),Returns: boolean Whether the left menu is currently opened.
- isOpenRight(),Returns: boolean Whether the right menu is currently opened.
- canDragContent([canDrag]),Returns: boolean Whether the content can be dragged to open side menus.
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
canDrag
(optional)</td><td>
boolean	</td><td>
Set whether the content can or cannot be dragged to open side menus.</td></tr></table>
- edgeDragThreshold(value),Returns: boolean Whether the drag can start only from within the edge of screen threshold.
<table class="table table-bordered table-striped table-condensed"><tr><th>Attr</th><th>Type</th><th>Details</th></tr><tr><td>
value</td><td>	boolean|number	</td><td>
Set whether the content drag can only start if it is below a certain threshold distance from the edge of the screen. Accepts three different values:
-If a non-zero number is given, that many pixels is used as the maximum allowed distance from the edge that starts dragging the side menu.
-If true is given, the default number of pixels (25) is used as the maximum allowed distance.
-If false or 0 is given, the edge drag threshold is disabled, and dragging from anywhere on the content is allowed.</td></tr></table>
\$getByHandle(handle),Returns: delegateInstance A delegate instance that controls only the ionSideMenus directives with delegate-handle matching the given handle.
```{bash}
Example: $ionicSideMenuDelegate.$getByHandle('my-handle').toggleLeft();
```

### Navigation

#### ion-nav-view
ionic能够记录用户的导航历史，能够在导航页面间添加过渡效果。ionic使用的是AngularUI router模块以‘states'来组织app 的界面。在Angular核心中的\$route service，可以通过url来控制不同的view。而AngularUI router提供了一个更强大的state manager，可以和named, nested, and parallel views绑定，允许不止一个模板来渲染页面。另外，不同的state不需要和url绑定，数据会自动更新。
ionNavView 是用来渲染视图中的模板的，每个模板是其中的一个状态。不同的state通常在程序中定义映射到一个url。
用法
在这个例子中，我们创建一个导航，切换不同的状态。我们使用ionNavView显示content，使用ionNavBar显示顶栏，可以在animation样式中指定切换的动画效果，推荐的有: 'slide-left-right', 'slide-left-right-ios7', 'slide-in-up'.
```{bash}
<ion-nav-bar></ion-nav-bar>
<ion-nav-view animation="slide-left-right">
  <!-- Center content -->
</ion-nav-view>
```
	var app = angular.module('myApp', ['ionic']);
	app.config(function($stateProvider) {
	  $stateProvider
	  .state('index', {
	    url: '/',
	    templateUrl: 'home.html'
	  })
	  .state('music', {
	    url: '/music',
	    templateUrl: 'music.html'
	  });
	});

在app启动的时候，\$stateProvider 会查看url, 如果和 index 状态匹配,然后会在 <ion-nav-view> 中加载 home.html.在Angular中创建模板的一种简单的方法是把html内容放在
```{bash}
<script type="text/ng-template">
```
里面，如下：
	<script id="home" type="text/ng-template">
	  <!-- The title of the ion-view will be shown on the navbar -->
	  <ion-view title="'Home'">
	    <ion-content ng-controller="HomeCtrl">
	      <!-- The content of the page -->
	      <a href="#/music">Go to music page!</a>
	    </ion-content>
	  </ion-view>
	</script>

####1.ion-view 
作为ionNavView的子元素，用于展示当前的view。
用法
```{bash}
	<ion-nav-bar></ion-nav-bar>
	<ion-nav-view class="slide-left-right">
	  <ion-view title="My Page">
	    <ion-content>
	      Hello!
	    </ion-content>
	  </ion-view>
	</ion-nav-view>
```
API
```{bash}
title(optional)	string	The title to display on the parent ionNavBar.

hide-back-button(optional)  boolean  Whether to hide the back button on the parent ionNavBar by default.

hide-nav-bar(optional)  boolean	 Whether to hide the parent ionNavBar by default.
```
####2.ion-nav-bar
如果我们使用ionNavView指令，我们就可以创建一个顶部栏<ion-nav-bar>，这个顶部栏会随着应用的状态变化而变化。

我们可以在里面放置一个返回的按钮ionNavBackButton 用于返回操作。

也可以在ionNavButtons 中添加业务需要的按钮。
通过animation 属性可以添加标题切换的动态效果。推荐的效果是'nav-title-slide-ios7'。

ion-nav-bar 只有在你的元素内部中有ionView 标签包裹的情况下才会正常工作。

 用法
 ```
<body ng-app="starter">
  <!-- The nav bar that will be updated as we navigate -->
  <ion-nav-bar class="bar-positive" animation="nav-title-slide-ios7">
  </ion-nav-bar>

  <!-- where the initial view template will be rendered -->
  <ion-nav-view>
    <ion-view>
      <ion-content>Hello!</ion-content>
    </ion-view>
  </ion-nav-view>
</body>
```
API接口
```
	属性：delegate-handle(optional) 	类型：string	
	描述：The handle used to identify this navBar with $ionicNavBarDelegate.

	属性：align-title(optional) 	类型：string	
	描述：Where to align the title of the navbar. Available: 'left', 'right', 'center'. Defaults to 'center'.

	属性：no-tap-scroll(optional)	类型：boolean	
	描述：By default, the navbar will scroll the content to the top when tapped. Set no-tap-scroll to true to disable this behavior.
```
其他用法
你可以把ion-nav-bar放到不同的ion-view 元素里面，这样你的每个不同的ion-view就有各自独立的navbar。
这个和在ion-view里面放置 header bar 差不多，只是这里拥有navbar的特性。需要注意，这样使用时，在navbar 里面放置buttons就可以，不要使用<ion-nav-buttons>。
```{bash}
<ion-view title="myTitle">
  <ion-nav-bar class="bar-positive">
    <ion-nav-back-button>
      Back
    </ion-nav-back-button>
    <div class="buttons right-buttons">
      <button class="button">
        Right Button
      </button>
    </div>
  </ion-nav-bar>
</ion-view>
```
####3.ion-nav-buttons 
使用ionNavButtons 设置ionView中的buttons，在这里面放置的所有button将会被放置在navbar中对应的位置。当你离开父控件视图时，就会销毁。
用法：
```
<ion-nav-bar>
</ion-nav-bar>
<ion-nav-view>
  <ion-view>
    <ion-nav-buttons side="left">
      <button class="button" ng-click="doSomething()">
        I'm a button on the left of the navbar!
      </button>
    </ion-nav-buttons>
    <ion-content>
      Some super content here!
    </ion-content>
  </ion-view>
</ion-nav-view>
```
API用法
```
属性：side	类型：string	
描述：The side to place the buttons on in the parent ionNavBar. Available: 'left' or 'right'.
```
####4. ion-nav-back-button 
在ionNavBar中设置返回按钮。
当用户在当前的导航历史栈中可以返回时，会显示返回按钮。默认点击该按钮会执行返回操作，更多的方法参看示例。
用法：
```
默认执行返回：

<ion-nav-bar>
  <ion-nav-back-button class="button-clear">
    <i class="ion-arrow-left-c"></i> Back
  </ion-nav-back-button>
</ion-nav-bar>

用户自己定制动作, 使用 $ionicNavBarDelegate:

<ion-nav-bar ng-controller="MyCtrl">
  <ion-nav-back-button class="button-clear"
    ng-click="goBack()">
    <i class="ion-arrow-left-c"></i> Back
  </ion-nav-back-button>
</ion-nav-bar>
function MyCtrl($scope, $ionicNavBarDelegate) {
  $scope.goBack = function() {
    $ionicNavBarDelegate.back();
  };
}

显示返回的view的标题, 使用 $ionicNavBarDelegate.

<ion-nav-bar ng-controller="MyCtrl">
  <ion-nav-back-button class="button-icon">
    <i class="icon ion-arrow-left-c"></i>{{getPreviousTitle() || 'Back'}}
  </ion-nav-back-button>
</ion-nav-bar>
function MyCtrl($scope, $ionicNavBarDelegate) {
  $scope.getPreviousTitle = function() {
    return $ionicNavBarDelegate.getPreviousTitle();
  };
}
```
####5. navi-clear
nav-clear是一个属性指令，用于改变视图的元素中。比如
```
<a href>
<button ui-sref>
```
当点击带有nav-clear指令的元素时，该指令会阻止下一个view的过渡，这个用的比较多，比如在sidemenu中。
用法：
下面的例子是在sidemenu中的一个超链接，点击这个超链接时会阻止切换view之间的过渡。
```
<a nav-clear menu-close href="#/home" class="item" >home</a>
```
####6. \$ionicNavBarDelegate
委托处理控制ionNavBar 指令。
用法：
```
<body ng-controller=“MyCtrl”>
	<ion-nav-bar>
		<button ng-cllick="setNavTitle('banana')">
		set title to banana
		</button>
	</ion-nav-bar>
</body>

function MyCtrl($scope,$ionicNavBarDelegate){
	$scope.setNavTitle = function(title){
		$ionicNavBarDelegate.setTitle(title);
	}
}
```
方法：
```
back([event])  根据历史记录返回
align([direction])  根据给定的方向对齐标题
showBackButton([show])  Set/Get ionNavButton 是否显示，返回值是boolean是否显示
showBar(show)   set/get ionNavBar 是否显示，返回值是boolean是否显示
setTitle(title)  设置标题 ionNavBar
changeTitle(title,direction)   改变标题，通过过渡设置新的标题移除旧的标题
getTitle()  返回当前navbar的标题
getPreviousTitle()   返回navbar之前的标题
$getByHandle(handle)  匹配给定的handle 返回委托的实例来控制navBar
例子：$ionicNavBarDelegate.$getByHandle('myHandle').setTitle('newTitle')
```
### action sheet
$ionicActionSheet 是一个上拉显示的菜单控件，危险的操作可以用不同的颜色标示，点击屏幕的背景处或者按escape键即可取消显示。如下图：
<img alt="皓眸大前端开发学习" src="/images/actionSheet.gif" class="floatnone" alt="皓眸大前端开发学习"/>
用法
在你的controller中使用$ionicActionSheet来触发 Action Sheet
```
angular.module('mySuperApp', ['ionic'])
.controller(function($scope, $ionicActionSheet, $timeout) {

 // Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);

 };
});
```
方法：show（options），显示并返回新的action sheet。加载action sheet时会创建新的隔离的scope
参数：
```
action sheet 的options参数：

[Object] buttons Which buttons to show. Each button is an object with a text field.
{string} titleText The title to show on the action sheet.
{string=} cancelText the text for a 'cancel' button on the action sheet.
{string=} destructiveText The text for a 'danger' on the action sheet.
{function=} cancel Called if the cancel button is pressed, the backdrop is tapped or the hardware back button is pressed.
{function=} buttonClicked Called when one of the non-destructive buttons is clicked, with the index of the button that was clicked and the button object. Return true to close the action sheet, or false to keep it opened.
{function=} destructiveButtonClicked Called when the destructive button is clicked. Return true to close the action sheet, or false to keep it opened.
{boolean=} cancelOnStateChange Whether to cancel the actionSheet when navigating to a new state. Default true.

```
### Backdrop
$ionicBackdrop 在UI上显示或隐藏背景层，在弹出框、加载框、其他弹出层中使用。许多UI界面需要背景层，在一个DOM页面只需要一个背景层就够了。在组件中可以使用$ionicBackdrop.retain()来显示背景层，使用$ionicBackdrop.release()隐藏背景层。每次调用retain后，背景会一直显示，直到调用release消除背景层。
用法：
```
function MyController($scope, $ionicBackdrop, $timeout) {
  //Show a backdrop for one second
  $scope.action = function() {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 1000);
  };
}
```
方法：
```
retain()    保持显示背景层
release()    释放背景层
```
### Content
#### ion-content ，委托实例为$ionicScrollDelegate
ionContent 指令是很方便使用的显示内容的组件，可以配置成使用ionic定制的scroll视图或者是浏览器那种溢出滚动的视图。
我们推荐在大多数情况下使用ionic定制的scroll视图，有时候处于性能的考虑，只有使用浏览器原生的溢出滚动视图才可以达到效果的情况，我们可以切换到溢出滚动视图。
你可以使用ionRefresher 指令实现下拉刷新，使用ionInfiniteScroll 实现无限制的滚动
注意，这个指令会产生自己的child scope，关于scope可以参考https://docs.angularjs.org/guide/scope
用法：
```
  <ion-content
    [delegate-handle=""]
    [direction=""]
    [locking=""]
    [padding=""]
    [scroll=""]
    [overflow-scroll=""]
    [scrollbar-x=""]
    [scrollbar-y=""]
    [start-y=""]
    [on-scroll=""]
    [on-scroll-complete=""]
    [has-bouncing=""]>
  ...
  </ion-content>
```
API文档
```
属性：delegate-handle(可选)，类型string，使用$ionicScrollDelegate来处理这个scrollview
属性：direction(可选)，类型String，指定滚动的方向，可选值是'x','y','xy',默认是'y'
属性：locking（可选）,类型boolean，是否锁定一次只能滚动一个方向
属性:padding（可选），类型boolean，是否给content增加padding，iOS默认为true，android默认为false
属性：scroll（可选），类型boolean，是否允许滚动内容，默认是true
属性：overflow-scroll（可选），类型boolean，是否使用overflow-scrolling 而不是ionic scroll
属性：scrollbar-x，类型boolean，是否显示x轴滚动条
属性：scrollbar-y，类型boolean，是否显示y轴滚动条
属性：start-y，类型string，y轴scroll初始位置，默认是0
属性：on-scroll，类型：expression，滚动内容时执行的表达式
属性：on-scroll-complete，类型：expression，滚动操作结束时执行的表达式
属性：has-bouncing，类型：boolean，是否允许滚动时弹跳超过内容体的边界，ios默认true，Android默认false
```
#### ion-refresher 
在scrollview中添加下拉刷新，在ionContent或ionScroll中第一个子元素位置放置改指令，加载结束时候，在control中广播'scroll.refreshComplete' 事件
用法：
```
<ion-content ng-controller="MyController">
  <ion-refresher
    pulling-text="Pull to refresh..."
    on-refresh="doRefresh()">
  </ion-refresher>
  <ion-list>
    <ion-item ng-repeat="item in items"></ion-item>
  </ion-list>
</ion-content>
angular.module('testApp', ['ionic'])
.controller('MyController', function($scope, $http) {
  $scope.items = [1,2,3];
  $scope.doRefresh = function() {
    $http.get('/new-items')
     .success(function(newItems) {
       $scope.items = newItems;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});
```
API参数：
```

Attr	Type	Details
on-refresh(optional),expression,Called when the user pulls down enough and lets go of the refresher.
-----------------------------------------------------------
on-pulling(optional),expression,Called when the user starts to pull down on the refresher.
-----------------------------------------------------------
pulling-icon(optional),string,The icon to display while the user is pulling down. Default: 'ion-arrow-down-c'.
-----------------------------------------------------------
pulling-text(optional),string,The text to display while the user is pulling down.
-----------------------------------------------------------
refreshing-icon(optional),string,The icon to display after user lets go of the refresher.
-----------------------------------------------------------
refreshing-text(optional),string,The text to display after the user lets go of the refresher.
-----------------------------------------------------------
disable-pulling-rotation(optional),boolean,Disables the rotation animation of the pulling icon when it reaches its activated threshold. To be used with a custom pulling-icon.
```
####ion-pane
简单的适配内容的容器
用法：
```
<ion-pane>
  ...
</ion-pane>
```


### 第二部分
参看：[ionic中文javascript API(2)](http://www.haomou.net/2014/10/13/2014_ionic_api2/ )

### 谢谢！
转载请注明出处：http://www.haomou.net/2014/08/11/2014_ionic_api/

有问题请留言。T_T  皓眸大前端开发学习  T_T
