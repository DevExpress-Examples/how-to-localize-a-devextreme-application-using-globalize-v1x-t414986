dxSample_App.home = function (params) {
    "use strict";

    var viewModel = {
        btnSettings: {
            text: Globalize.formatMessage("btnClick"),
            onClick: function () {
                DevExpress.ui.dialog.alert(Globalize.formatMessage("alertMessage"), Globalize.formatMessage("alertTitle"));
            }
        },
        btnNavigateSettings: {
            text: Globalize.formatMessage("btnNavigate"),
            onClick: function () {
                dxSample_App.app.navigate("greeting");
            }
        },
        gridSettings: {
            dataSource: [{ID: 1, Name: "Amy"}],
            editing: {
                mode: "row",
                allowUpdating: true,
                allowDeleting: true,
                allowAdding: true
            }
        }
    };

    return viewModel;
};