sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.App", {
            onInit: function () {
                this.getOwnerComponent().setModel(new JSONModel(), "ToolsModel");
                const oToolsModel = this.getOwnerComponent().getModel("ToolsModel");
                oToolsModel.setProperty("/name", "Curso Fiori");
                var oModelNorthWind = this.getOwnerComponent().getModel();
                oModelNorthWind.read("/Products", {
                    success: function (oData) {
                        console.log(oData);
                    }
                });
            }
        });
    });
