(function () {
  'use strict';
  
  var tabsWithNavbarsModule = angular.module('mj.tabsWithNavbars', []),
  
      TEMPLATE_URL = 'tabs-with-navbars-template.html';
      

  /* *******************************
   * TabsWithNavbarsController
   * *******************************/
  function TabsWithNavbarsController($sce) {
    var ctrl = this;
  
    ctrl.injected = {
      $sce: $sce
    };
    
    ctrl.tabs = null; // gets set on init

  }
  
  // --- set some prototype methods -----------
  (function (p) {
    p.deactivateActiveNavbarItemForTab = function (tab) {
      var ctrl = this;
      
      tab[ctrl.navbarItemsArrayName].some(function __someNavbarItems(navbarItem) {
        if (navbarItem.active) {
          navbarItem.active = false;
          return true; // exit loop
        }
      });
    };
    
    p.deactivateActiveTab = function () {
      var ctrl = this;
      
      ctrl.tabs.some(function __someTabs(tab) {
        if (tab.active) {
          tab.active = false;
          return true; // exit loop
        }
      });
    };

    p.handleClickOnNavbarItem = function (navbarItem, tab) {
      var ctrl = this;
      
      ctrl.deactivateActiveNavbarItemForTab(tab);
      navbarItem.active = true;
    };
    
    p.handleClickOnTab = function (tab) {
      var ctrl = this;
      
      ctrl.deactivateActiveTab();
      tab.active = true;
    };
    
    p.init = function (scope) {
      var ctrl = this;
      
      ctrl.tabs = scope.tabs;
      ctrl.navbarItemsArrayName = scope.navbarItemsArrayName;
    };

    p.sanitizeHtml = function (htmlString) {
      var ctrl = this;
      
      return ctrl.injected.$sce.trustAsHtml(htmlString);
    };

    
  }(TabsWithNavbarsController.prototype));
  
  
  
  /* *******************************
   * tabsWithNavbars Directive
   * *******************************/
  function tabsWithNavbars() {
    
    return {
      templateUrl: TEMPLATE_URL,
      replace: true,
      transclude: false,
      controller: TabsWithNavbarsController,
      controllerAs: 'twnc',
      scope: {
        tabs: '=',
        navbarItemsArrayName: '@'
      },
      link: function (scope, element, attrs, ctrl) {
        
        // the content panes are transcluded in
        ctrl.init(scope);
      }
      
    };
  
  }
  
  TabsWithNavbarsController.$inject = ['$sce'];
  
  tabsWithNavbarsModule
    .directive('tabsWithNavbars', tabsWithNavbars);
  
}());
