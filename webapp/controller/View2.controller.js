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

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.View2", {

            Formatter: Formatter,

            onInit: function () {
                const oCitiesModel = new JSONModel();
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
                var aArray1 = [1];
                var aArray2 = _.concat(aArray1, 2, 3);
                console.log(aArray2);
            },

            formatPopulation: function (fPopulation) {
                if (!fPopulation) return;
                return fPopulation * 1000000;
            },

            onPress: function (oEvent) {
                const oToolsModel = this.getOwnerComponent().getModel("ToolsModel");
                oToolsModel.setProperty("/cityName", oEvent.getSource().getCells()[0].getText());
                Common.openDialogFromFragment(this, "idSayHelloDialog", "accenture.tutorial1.ui5.tutorial1.fragment.sayHelloDialog");
            }
        });
    });
