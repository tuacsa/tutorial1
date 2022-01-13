/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"accenturetutorial1.ui5./tutorial1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
