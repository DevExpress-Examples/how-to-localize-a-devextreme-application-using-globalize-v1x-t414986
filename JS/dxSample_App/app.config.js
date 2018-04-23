// NOTE object below must be a valid JSON
window.dxSample_App = $.extend(true, window.dxSample_App, {
    "config": {
        "layoutSet": "navbar",
        "navigation": [
          {
              "title": "@home",
              "onExecute": "#home",
              "icon": "home"
          },
          {
              "title": "@about",
              "onExecute": "#about",
              "icon": "info"
          },
          {
              "title": "@greeting",
              "onExecute": "#greeting",
              "icon": "greeting"
          }
        ]
    }
});