sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../utils/Validator",
    "../utils/Common"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Validator, Common) {
        "use strict";

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.View1", {
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
            },

            onSayHello: function (oEvent) {
                
                sap.m.MessageToast.show("Hello World!", {
                    duration: 3000, 
                });
                
                /*
                if (!Validator.isNotEmpty(this.getView().byId("city-combobox").getSelectedKey())) {
                    sap.m.MessageToast.show("Select a City", {
                        duration: 3000, 
                    });
                    return;
                }

                if( !this._dialogSayHello ) {
                    this._dialogSayHello = sap.ui.xmlfragment("idSayHelloDialog", "accenture.tutorial1.ui5.tutorial1.fragment.sayHelloDialog", this);
                    this.getView().addDependent(this._dialogSayHello);
                }
                this._dialogSayHello.open();
                */
                /*
                if (!Validator.isNotEmpty(this.getView().byId("city-combobox").getSelectedKey())) {
                    sap.m.MessageToast.show("Select a City", {
                        duration: 3000, 
                    });
                    return;
                }
                Common.openDialogFromFragment(this, "idSayHelloDialog", "accenture.tutorial1.ui5.tutorial1.fragment.sayHelloDialog");
                */
            },
            
            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            },
            
            onNavigateToView2: function () {
                var oRouter = this.getOwnerComponent().getRouter();
			    oRouter.navTo("RouteView2");
                /*
                Common.navigateTo(this, "RouteView2");
                */
            }
        });
    });
