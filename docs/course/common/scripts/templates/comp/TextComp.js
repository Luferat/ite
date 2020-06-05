var TextComp = function(_txtObject)
	{
		this.initiateComp(_txtObject);
	}
	
	var p = TextComp.prototype = new createjs.Container();
	
	p.initiateComp = function(_txtObject)
	{
		//super class inheritance
		this.initialize();
		
		this.textObject = _txtObject;
		this.buildTextDiv();
	}
	
	p.buildTextDiv = function()
	{					
		var color = this.textObject.color == undefined ? "#000000" : this.textObject.color;
		var align = this.textObject.textAlign == undefined ? "left" : this.textObject.textAlign;	
		var width = this.textObject.width == undefined ? "auto" : this.textObject.width+"px";
		var shadow = this.textObject.shadow == undefined ? "auto" : this;
		var shadowColor = this.textObject.shadowColor == undefined ? "#000" : this.textObject.shadowColor;
		
		var style = ('position:absolute;top:0px;left:0px;width:'+width+';overflow:auto;font-size:'+this.textObject.size+'px;visibility:hidden;color:'+color+';text-align:'+align+';');
		
		if( this.textObject.shadow != undefined && this.textObject.shadow != "NO")
		{
			style += 'text-shadow:-1px 2px 2px'+shadowColor+',-2px -1px 2px'+shadowColor+',-2px -1px 2px'+shadowColor+',2px 2px 3px'+shadowColor+';filter: progid:DXImageTransform.Microsoft.Shadow(color=#2C2C2C,direction=45,strength=2);';
		}
		
		var textDiv = document.createElement("div");		
		textDiv.style.cssText = style;
		textDiv.id = this.textObject.compId;
		textDiv.innerHTML = this.textObject.text;		
		
   		$("#"+this.textObject.divId).append(textDiv);
		
		var domText = new createjs.DOMElement(textDiv);
		//textDiv.shadow = new createjs.Shadow("#666666",3,3,10);
		this.addChild(domText);
		/*
		var _xValue = 0;
		var _width = $("#"+this.textObject.compId).width();
		
		if(this.textObject.textAlign == "center")
		{
			_xValue = (this.textObject.width - _width)/2;
		}
		else if(this.textObject.textAlign == "right")
		{
			_xValue = (this.textObject.width - _width);
		}
		
		domText.x = _xValue;
		domText.y =	0;
		*/
		
		this.x = this.textObject.x;
		this.y = this.textObject.y;
				
	}

p.setText = function(_txt)
{
	var div = document.getElementById(this.textObject.compId);
	div.innerHTML = _txt;
}
