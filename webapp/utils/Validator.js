sap.ui.define([

], function () {
    "use-strict";

    var Validator = {
        isNotEmpty: function (fName) {
            return !!fName;
        }
    }

    return Validator;

}, true);