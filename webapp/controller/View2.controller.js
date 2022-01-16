sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Formatter) {
        "use strict";

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.View2", {

            Formatter: Formatter,

            onInit: function () {
                const oCitiesModel = new JSONModel();
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            },

            formatPopulation: function (fPopulation) {
                if (!fPopulation) return;
                return fPopulation * 1000000;
            }
        });
    });
