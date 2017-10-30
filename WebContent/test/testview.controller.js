sap.ui.controller("test.testview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf test.testview
*/
	onInit: function() {
		var data = [{SourceName: "GOLDEN", ShipTo: "14767578", Comment: "fsfsdfsdfsdfs dfvfdg fgfdgd"},
		            {SourceName: "GOLDEN", ShipTo: "14767578", Comment: "fsfsdfsdfsdfs dfvfdg fgfdgd"},
		            {SourceName: "GOLDEN", ShipTo: "14767578", Comment: "fsfsdfsdfsdfs dfvfdg fgfdgd"},
		            {SourceName: "GOLDEN", ShipTo: "14767578", Comment: "fsfsdfsdfsdfs dfvfdg fgfdgd"},
		            {SourceName: "SHENANDOAH BREWERY", ShipTo: "14767578", Comment: "fsfsdfsdfsdfs dfvfdg fgfdgd"}];
		var oModel = new sap.ui.model.json.JSONModel();
        oModel.setData(data);
        this.getView().setModel(oModel);
        
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf test.testview
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf test.testview
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf test.testview
*/
//	onExit: function() {
//
//	}

});