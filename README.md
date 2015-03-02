angular-bootstrap-tabs-with-navbars
===================================

Angular directive for quickly creating a two-level menu system with Bootstrap tabs as the top level and a 
Bootstrap navbar as the second level. That is, each tab has its own navbar acting as its submenu.

<a href="http://plnkr.co/edit/7nFx83mQQJpUWfu38QxS?p=preview" target="_blank">Here's a plunk</a> showing it in action. (Be sure to make the plunk's preview area wide enough so the navbar lays out horizontally rather than stack vertically.)

Usage
-----
1. Download it or install it using bower: `bower install angular-bootstrap-tabs-with-navbars`
2. Include `tabs-with-navbars.css` on your page *after* Bootstrap's CSS
3. Include `tabs-with-navbars.js` on your page
4. Add `mj.tabsWithNavbars` as a module dependency to your app: `angular.module('myapp', ['mj.tabsWithNavbars']);`

Overview
--------
The directive can be an element or an attribute, so you can add it to your markup like this:

```html
<tabs-with-navbars 
  tabs="ctrl.tabs"
  navbar-items-array-name="navbarItems">
</tabs-with-navbars>
```

or like this:

```html
<div tabs-with-navbars 
     tabs="ctrl.tabs"
     navbar-items-array-name="navbarItems">
</div>
```

You need to include the following attributes on the element:

|             Attribute               | Type | Description |
| ----------------------------------- | ------ | ----------------------------------- |
| `tabs` | Array     | A reference to your `tabs` data array (see below) |
| `navbar-items-array-name` | String | The name of the property on your `tab` objects that contains that tab's navbar items array |


The directive assumes you have a `tabs` data array that looks something like this:

```javascript
tabs = [
  { // Tab 1: Small Stuff
    title: 'Small Stuff',
    active: true,
    navbarItems: [ // Tab 1 Navbar Items
      {
        title: 'Pencils',
        active: true,
        iconCssClass: 'glyphicon glyphicon-pencil',
        targetPaneContent: '<div>Our Pencils!</div>'
      },
      {
        title: 'Glasses',
        active: false,
        iconCssClass: 'glyphicon glyphicon-glass',
        targetPaneContent: '<div>Our Glasses!</div>'
      }
    ]
  },
  { // Tab 2: Big Stuff
    title: 'Big Stuff',
    active: false,
    navbarItems: [ // Tab 2 Navbar Items
      {
        title: 'Planes',
        active: true,
        iconCssClass: 'glyphicon glyphicon-plane',
        targetPaneContent: '<div>Our Planes!</div>'
      },
      {
        title: 'Giant Magnets',
        active: false,
        iconCssClass: 'glyphicon glyphicon-magnet',
        targetPaneContent: '<div>Our Giant Magnets!</div>'
      }
    ]
  }
];
```

where each `tab` object has the following properties:

|         Name           | Type | Description |
| ---------------------- | ------- | ---------------------------------------------------------|
| `title` (Required) | HTML | The tab title/label; it can be HTML or plain text |
| `active` (Required) | Boolean | Flag indicating whether the tab is active or not |
| `navbarItems` (Required) | Array | Array of navbar items for that tab; the property can be named anything you want because you pass the name into the directive on the `navbar-items-array-name` attribute |


And each navbar item object has the following properties:

| Name | Type | Description |
| ---------------------------- | ------- | ----------------------------------------------------|
| `title` (Required) | HTML | The item title/label; it can be HTML or plain text |
| `active` (Required) | Boolean | Flag indicating whether the item is active or not |
| `iconCssClass` (Optional) | String | CSS class for the item's icon (e.g., a glyphicon class) |  
| `targetPaneContent` (Required) | HTML | The HTML content of the item's content pane |


License
-------
MIT License.
