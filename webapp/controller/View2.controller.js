sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.View2", {
            onInit: function () {
                const oCitiesModel = new JSONModel([
                    {
                        "name": "Madrid"
                    },
                    {
                        "name": "Londres"
                    },
                    {
                        "name": "Berlin"
                    },
                    {
                        "name": "Paris"
                    },
                    {
                        "name": "Lisboa"
                    },
                    {
                        "name": "Roma"
                    },
                    {
                        "name": "Atenas"
                    }
                ]);
                //oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            }
        });
    });
