window.dxSample_App = window.dxSample_App || {};

$(function () {
    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if (window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !dxSample_App.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win":
                MSApp.terminateApp('');
                break;
        }
    }

    dxSample_App.localizationInitiated.done(function () {
        dxSample_App.app = new DevExpress.framework.html.HtmlApplication({
            namespace: dxSample_App,
            layoutSet: DevExpress.framework.html.layoutSets[dxSample_App.config.layoutSet],
            navigation: dxSample_App.config.navigation,
            commandMapping: dxSample_App.config.commandMapping
        });
        dxSample_App.app.router.register(":view/:id", { view: "home", id: undefined });
        dxSample_App.app.on("navigatingBack", onNavigatingBack);
        dxSample_App.app.navigate();
    });
});
