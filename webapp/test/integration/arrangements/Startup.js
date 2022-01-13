sap.ui.define([
	"sap/ui/test/Opa5",
	"accenture/tutorial1/ui5/tutorial1/localService/mockserver"
], function (Opa5, mockserver) {
	"use strict";

	return Opa5.extend("accenture.tutorial1.ui5.tutorial1.test.integration.arrangements.Startup", {

		iStartMyApp: function (oOptionsParameter) {
			var oOptions = oOptionsParameter || {};

			// start the app with a minimal delay to make tests fast but still async to discover basic timing issues
			oOptions.delay = oOptions.delay || 50;

			// configure mock server with the current options
			var oMockServerInitialized = mockserver.init(oOptions);

			this.iWaitForPromise(oMockServerInitialized);

			// start the app UI component
			this.iStartMyUIComponent({
				componentConfig: {
					name: "accenture.tutorial1.ui5.tutorial1",
					async: true
				},
				hash: oOptions.hash,
				autoWait: oOptions.autoWait
			});
		}
	});
});
