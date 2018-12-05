

// save current sizeChanged function
var ctrl_pagedpane_sizeChanged = ctrl_pagedpane.prototype.sizeChanged;

// overload paged pane sizeChanged()
ctrl_pagedpane.prototype.sizeChanged=function()
{
		// call paged pane's real sizeChanged() function 
		ctrl_pagedpane_sizeChanged.call(this);

		// test our paged panes name and only do the following if the name is "flexBox"
		if ( this.getProperty(eBaseProperties.name) == "flexBox" )
		{	// position our child elements
			this.eventParamsAdd("pWidth",this.getProperty(eBaseProperties.width));
			this.sendEvent("evSizeChanged");
		}

};


