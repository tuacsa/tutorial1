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

            _onPress: function () {
                /*sap.m.MessageToast.show('Lorem \n ipsum \n dolor sit amet', {
                    duration: 3000, 
                });*/
            }
        });
    });
