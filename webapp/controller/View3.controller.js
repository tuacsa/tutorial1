sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Formatter",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Formatter, Common) {
        "use strict";

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.View3", {

            Formatter: Formatter,

            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteView3").attachPatternMatched( function () {
                    console.log(sap.ui.getCore().getModel("DetailModel").getData());
                    const oDetailModel = sap.ui.getCore().getModel("DetailModel");
                    this.getView().setModel(oDetailModel, "DetailModel");
                }, this);
            }
        });
    });
