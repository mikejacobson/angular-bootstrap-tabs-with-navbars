angular-bootstrap-tabs-with-navbars
===================================

Angular directive for quickly creating a two-level menu system with Bootstrap tabs as the top level and a 
Bootstrap navbar as the second level.

<a href="http://plnkr.co/edit/7nFx83mQQJpUWfu38QxS?p=preview" target="_blank">Here's a plunk</a> showing it in action.

Usage
-----
1. Download it or install it using bower: `bower install angular-bootstrap-tabs-with-navbars`
2. Include `tabs-with-navbars.css` on your page *after* Bootstrap's CSS
3. Include `tabs-with-navbars.js` on your page
4. Add `mj.tabsWithNavbars` as a module dependency to your app: `angular.module('myapp', ['mj.tabsWithNavbars']);`

Overview
--------
Add the directive to your markup like so:

```html
        <tabs-with-navbars 
          tabs="ctrl.tabs"
          navbar-items-array-name="navbarItems">
        </tabs-with-navbars>

```

It assumes you have a tabs data array like this:
```javascript
    ctrl.tabs = [
      {
        title: 'Small Stuff',
        active: true,
        navbarItems: [
          {
            title: 'Pencils',
            active: true,
            iconCssClass: 'glyphicon glyphicon-pencil',
            targetPaneContent: getTargetPaneHtml('Our Pencils!')
          },
          {
            title: 'Glasses',
            active: false,
            iconCssClass: 'glyphicon glyphicon-glass',
            targetPaneContent: getTargetPaneHtml('Our Glasses!')
          },
          {
            title: 'Cameras',
            active: false,
            iconCssClass: 'glyphicon glyphicon-camera',
            targetPaneContent: getTargetPaneHtml('Our Cameras!')
          }
        ]
      },
      {
        title: 'Big Stuff',
        active: false,
        navbarItems: [
          {
            title: 'Planes',
            active: true,
            iconCssClass: 'glyphicon glyphicon-plane',
            targetPaneContent: getTargetPaneHtml('Our Planes!')
          },
          {
            title: 'Giant Magnets',
            active: false,
            iconCssClass: 'glyphicon glyphicon-magnet',
            targetPaneContent: getTargetPaneHtml('Our Giant Magnets!')
          },
          {
            title: 'Trees',
            active: false,
            iconCssClass: 'glyphicon glyphicon-tree-conifer',
            targetPaneContent: getTargetPaneHtml('Our Trees!')
          }
        ]
      }
      
    ];
```

