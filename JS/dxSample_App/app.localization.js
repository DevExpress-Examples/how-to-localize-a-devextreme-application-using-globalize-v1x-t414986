window.dxSample_App = window.dxSample_App || {};
window.dxSample_App.data = window.dxSample_App.data || {};

$(function () {
    dxSample_App.localizationInitiated = $.when(
      $.getJSON("js/cldr/main/de/ca-gregorian.json"),
      $.getJSON("js/cldr/main/de/numbers.json"),
      $.getJSON("js/cldr/main/de/currencies.json"),
      $.getJSON("js/cldr/supplemental/likelySubtags.json"),
      $.getJSON("js/cldr/supplemental/timeData.json"),
      $.getJSON("js/cldr/supplemental/weekData.json"),
      $.getJSON("js/cldr/supplemental/currencyData.json"),
      $.getJSON("js/cldr/supplemental/numberingSystems.json")
    ).then(function () {
        // Normalize $.get results, we only need the JSON, not the request statuses.
        return [].slice.apply(arguments, [0]).map(function (result) {
            return result[0];
        });
    }).then(
        Globalize.load
    ).then(function () {

        Globalize.loadMessages({
            de: {
                "home": "Zuhause",
                "btnClick": "Klick mich",
                "alertMessage": "Ich habe geklickt",
                "alertTitle": "Alarm Titel",
                "btnNavigate": "Navigieren",
                "greeting": "Gruß",
                "about": "Über",
                "welcome": "Herzlich willkommen",
                "back": "Zurück"
            }
        });

        Globalize.locale('de');

        $.each(dxSample_App.config.navigation, function () {
            if (this.title.indexOf('@') === 0) {
                this.title = Globalize.formatMessage(this.title.substring(1));
            }
        });

    });
});