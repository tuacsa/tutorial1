sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.View1", {
            onInit: function () {
                this.getView().setModel(new JSONModel(), "ToolsModel");
                const oToolsModel = this.getView().getModel("ToolsModel");
                oToolsModel.setProperty("/name", "Curso Fiori");

                const oCitiesModel = new JSONModel();
                oCitiesModel.loadData("../model/cities.json");
                this.getView().setModel(oCitiesModel, "CitiesModel");
            },

            onSayHello: function () {

                /*sap.m.MessageToast.show("Hello World!", {
                    duration: 3000, 
                });*/


                if( !this._dialogSayHello ) {
                    this._dialogSayHello = sap.ui.xmlfragment("idSayHelloDialog", "accenture.tutorial1.ui5.tutorial1.fragment.sayHelloDialog", this);
                    this.getView().addDependent(this._dialogSayHello);
                }
                this._dialogSayHello.open();
            },

            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            }
        });
    });
