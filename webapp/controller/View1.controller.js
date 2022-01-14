sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("accenture.tutorial1.ui5.tutorial1.controller.View1", {
            onInit: function () {
            },

            onSayHello: function () {
                sap.m.MessageToast.show("Hello World!", {
                    duration: 3000, 
                });


                /*if( !this._dialogSayHello ) {
                    this._dialogSayHello = sap.ui.xmlfragment("idSayHelloDialog", "accenture.tutorial1.ui5.tutorial1.fragment.sayHelloDialog", this);
                    this.getView().addDependent(this._dialogSayHello);
                }
                this._dialogSayHello.open();*/
            },

            onClose: function () {
                if ( this._dialogSayHello ) {
                    this._dialogSayHello.close()
                }
            }
        });
    });
