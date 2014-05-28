
describe('kitchen sink', function() {


  describe('ionCheckbox simple', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionCheckbox/simple/');
    });

    it('should uncheck 1st and check 2nd checkbox by clicking its label', function(){
      var ele = element.all(by.css('label.item-checkbox'));
      ele.get(0).click();
      ele.get(1).click();
    });

    it('should check 1st and uncheck 2nd checkbox by clicking its label', function(){
      var ele = element.all(by.css('label.item-checkbox'));
      ele.get(0).click();
      ele.get(1).click();
    });

  });


  describe('collectionRepeat contacts', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/collectionRepeat/contacts/');
    });

    it('should scroll to the bottom', function(){
      var ele = element(by.css('.bar-header .button'));
      ele.click();
    });

    it('should scroll to the top', function(){
      var ele = element(by.css('.bar-header'));
      ele.click();
    });

    it('should filter by juan', function(){
      var ele = element(by.model('search'));
      ele.sendKeys('juan');
    });

    it('should clear search', function(){
      var ele = element(by.css('.bar-header .input-button'));
      ele.click();
    });

  });


  describe('ionHeaderBar simple', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionHeaderBar/simple/');
    });

    it('should show subheader', function(){
      var ele = element.all(by.css('.toggle'));
      ele.get(0).click();
    });

    it('should hide subheader', function(){
      var ele = element.all(by.css('.toggle'));
      ele.get(0).click();
    });

    it('should hide header', function(){
      var ele = element.all(by.css('.toggle'));
      ele.get(1).click();
    });

    it('should show header', function(){
      var ele = element.all(by.css('.toggle'));
      ele.get(1).click();
    });

  });


  describe('ionFooterBar simple', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionFooterBar/simple/');
    });

    it('should show subfooter', function(){
      var ele = element.all(by.css('.toggle'));
      ele.get(0).click();
    });

    it('should hide subfooter', function(){
      var ele = element.all(by.css('.toggle'));
      ele.get(0).click();
    });

    it('should hide footer', function(){
      var ele = element.all(by.css('.toggle'));
      ele.get(1).click();
    });

    it('should show footer', function(){
      var ele = element.all(by.css('.toggle'));
      ele.get(1).click();
    });

  });


  describe('ionInfiniteScroll forever', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionInfiniteScroll/forever/');
    });

  });


  describe('ionList animated', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionList/animated/');
    });

    it('should add item below Item 0', function(){
      var ele = element.all(by.css('.list .button'));
      ele.get(0).click();
    });

    it('should remove Item 0', function(){
      var ele = element.all(by.css('.list .button'));
      ele.get(1).click();
    });

  });


  describe('ionList reorderDelete', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionList/reorderDelete/');
    });

    it('should show reorder icons', function(){
      var ele = element.all(by.css('.bar-header .button'));
      ele.get(1).click();
    });

    it('should hide reorder icons', function(){
      var ele = element.all(by.css('.bar-header .button'));
      ele.get(1).click();
    });

    it('should show delete icons', function(){
      var ele = element.all(by.css('.bar-header .button'));
      ele.get(0).click();
    });

    it('should hide delete icons', function(){
      var ele = element.all(by.css('.bar-header .button'));
      ele.get(0).click();
    });

  });


  describe('ionRefresher refreshList', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionRefresher/refreshList/');
    });

  });


  describe('ionSideMenus navWithMenu', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionSideMenus/navWithMenu/');
    });

    it('should nav to Search from left menu', function(){
      var ele = element.all(by.css('button[menu-toggle="left"]'));
      ele.get(0).click();

      browser.sleep(500).then(function(){
        var itemEle = element.all(by.css('ion-side-menu[side="left"] a'));
        itemEle.get(0).click();
      });
    });

    it('should nav to Browse from left menu', function(){
      var ele = element.all(by.css('button[menu-toggle="left"]'));
      ele.get(0).click();

      browser.sleep(500).then(function(){
        var itemEle = element.all(by.css('ion-side-menu[side="left"] a'));
        itemEle.get(1).click();
      });
    });

  });


  describe('ionSideMenus simple', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionSideMenus/simple/');
    });

    it('should show left menu', function(){
      var ele = element.all(by.css('.bar-header .button'));
      ele.get(0).click();
    });

    it('should hide left menu by clicking header button', function(){
      var ele = element.all(by.css('.bar-header .button'));
      ele.get(0).click();
    });

    it('should show left menu', function(){
      var ele = element.all(by.css('.bar-header .button'));
      ele.get(0).click();
    });

    it('should hide left menu by close menu item', function(){
      var ele = element.all(by.css('ion-side-menu[side="left"] a'));
      ele.get(0).click();
    });

  });


  describe('ionSlideBox appIntro', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionSlideBox/appIntro/');
    });

    it('should go to slide 2', function(){
      var ele = element(by.css('.right-buttons .button'));
      ele.click();
    });

    it('should go to slide 1', function(){
      var ele = element(by.css('.left-buttons .button'));
      ele.click();
    });

    it('should go to slide 2', function(){
      var ele = element(by.css('.right-buttons .button'));
      ele.click();
    });

    it('should go to slide 3', function(){
      var ele = element(by.css('.right-buttons .button'));
      ele.click();
    });

    it('should go to main app', function(){
      var ele = element(by.css('.right-buttons .button'));
      ele.click();
    });

    it('should start over', function(){
      var ele = element(by.css('ion-nav-view .button'));
      ele.click();
    });

  });


  describe('ionTabs tabsAndNav', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/ionTabs/tabsAndNav/');
    });

    it('should go to page 2 in Home tab', function(){
      var ele = element.all(by.css('ion-nav-view[name="home-tab"] .button'));
      ele.get(0).click();
    });

    it('should go to page 3 in Home tab', function(){
      var ele = element.all(by.css('ion-nav-view[name="home-tab"] .button'));
      ele.get(1).click();
    });

    it('should go to About tab', function(){
      var ele = element.all(by.css('.tabs a'));
      ele.get(1).click();
    });

    it('should go to page 2 in About tab', function(){
      var ele = element.all(by.css('ion-nav-view[name="about-tab"] .button'));
      ele.get(0).click();
    });

    it('should go to Contact tab', function(){
      var ele = element.all(by.css('.tabs a'));
      ele.get(2).click();
    });

    it('should go to About tab and still be at page 2', function(){
      var ele = element.all(by.css('.tabs a'));
      ele.get(1).click();
    });

    it('should go to Home tab and still be at page 3', function(){
      var ele = element.all(by.css('.tabs a'));
      ele.get(0).click();
    });

    it('should go back to page 2 in Home tab', function(){
      var ele = element(by.css('ion-nav-back-button'));
      ele.click();
    });

    it('should go back to page 1 in Home tab', function(){
      var ele = element(by.css('ion-nav-back-button'));
      ele.click();
    });

    it('should go to About tab and still be at page 2', function(){
      var ele = element.all(by.css('.tabs a'));
      ele.get(1).click();
    });

    it('should go back to page 1 in About tab', function(){
      var ele = element(by.css('ion-nav-back-button'));
      ele.click();
    });

    it('should go to Home tab and still be at page 1', function(){
      var ele = element.all(by.css('.tabs a'));
      ele.get(0).click();
    });

  });


  describe('$ionicActionSheet takeAction', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/$ionicActionSheet/takeAction/');
    });

    it('should open up actionsheet', function(){
      var ele = element(by.css('.button'));
      ele.click();
    });

    it('should close when clicking backdrop', function(){
      var ele = element(by.css('.action-sheet-backdrop'));
      ele.click();
    });

    it('should open up actionsheet again', function(){
      var ele = element(by.css('.button'));
      ele.click();
    });

    it('should click the share button', function(){
      var ele = element.all(by.css('.action-sheet-group .button'));
      ele.get(0).click();
    });

  });


  describe('$ionicPopup popping', function() {

    it('should init', function(){
      browser.get('http://demo.ionicframework.com/nightly/$ionicPopup/popping/');
    });

    it('should open confirm popup', function(){
      var ele = element.all(by.css('[ng-click="showConfirm()"]'));
      ele.get(0).click();
    });

    it('should cancel confirm popup', function(){
      var ele = element.all(by.css('.popup-buttons .button'));
      ele.get(0).click();
    });

    it('should open prompt popup and enter input', function(){
      var ele = element.all(by.css('[ng-click="showPrompt()"]'));
      ele.get(0).click();
      ele = element(by.model('data.response'));
      ele.sendKeys('Waffles');
    });

    it('should close prompt popup by clicking OK', function(){
      var ele = element.all(by.css('.popup-buttons .button'));
      ele.get(1).click();
    });

    it('should open alert popup', function(){
      var ele = element.all(by.css('[ng-click="showAlert()"]'));
      ele.get(0).click();
    });

    it('should close alert popup', function(){
      var ele = element.all(by.css('.popup-buttons .button'));
      ele.get(0).click();
    });

  });


});

