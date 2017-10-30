sap.ui.jsview("test.testview", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf test.testview
	*/ 
	getControllerName : function() {
		return "test.testview";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf test.testview
	*/ 
	createContent : function(oController) {
		var table = 
			new sap.ui.table.Table({
				width:"30%",
				visibleRowCount : 4,
				selectionBehavior : sap.ui.table.SelectionBehavior.None, 
				navigationMode : sap.ui.table.NavigationMode.Scrollbar, 
				columns : [ new sap.ui.table.Column({
					            label: new sap.ui.commons.Label({
					                text: "Source"
					            }),
					            template: new sap.ui.commons.TextView().bindProperty("text", "SourceName"),
					            width: "30%",
					            sortProperty: "SourceName",
					            filterProperty: "SourceName",
					        }),
					        new sap.ui.table.Column({
					            label: new sap.ui.commons.Label({
					                text: "Ship To"
					            }),
					            template: new sap.ui.commons.TextView().bindProperty("text", "ShipTo"),
					            width: "30%",
					            sortProperty: "ShipTo",
					            filterProperty: "ShipTo",
					        }),
					        new sap.ui.table.Column({
					            label: new sap.ui.commons.Label({
					                text: "Source"
					            }),
					            template: new sap.ui.commons.TextView().bindProperty("text", "Comment"),
					            width: "40%",
					            sortProperty: "Comment",
					            filterProperty: "Comment",
					        })]
			});
		table.bindRows("/");
 		return new sap.m.Page({
			title: "Title",
			content: [table]
		});
	}

});