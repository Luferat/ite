/*loadScript("../../../common/scripts/templates/comp/ButtonComp.js");
loadScript("../../../common/scripts/templates/slide/DescriptionSlide.js");
loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/templates/comp/TextComp.js");*/

var MultiButtonSlide = function(_xmlData,_dataObject)
{	
	this.initiateComp(_xmlData,_dataObject);
}

var p = MultiButtonSlide.prototype = new createjs.Container();

p.loadJSFiles = function(scripts, callback, _this)
{
	var loadCount = scripts.length;
	function done(){
		loadCount -=1;
		if (loadCount==0){ 
			callback(_this);
		}
	}
	for ( var i=0; i<scripts.length; i++){
		$.getScript(scripts[i], done);
	}
}

p.initiateComp = function(_xmlData,_dataObject)
{
	//super class inheritance
	this.initialize();
		
	this.xmlData = _xmlData;
	this.slideObject = _dataObject.slideObject;
	
	this.buttonItems = [];
	this.currentSelectedButton;
	//slide container
	this.slideContainer;
	
	//Build Graphics Items
	if(_dataObject.graphics)
	{
		this.buildGraphicsItems(_dataObject.graphics);	
	}
		
	//Build Button Items
	this.buildButtonItems(_xmlData,_dataObject.buttonObject);
	
	//Build common texte items
	this.textItems = [];
	this.buildTextItems(_xmlData,_dataObject.textObject);
	
}

p.buildGraphicsItems = function(_array)
{
	var _shape;
	for(var i = 0;i<_array.length;i++)
	{
		_shape = new createjs.Shape();
		_shape.graphics.beginFill(_array[i].color).drawRoundRect(_array[i].x,_array[i].y,_array[i].width,_array[i].height,_array[i].corner);
		this.addChild(_shape);
	}
}

p.buildButtonItems = function(_xmlData,_buttonObject)
{
	var _array = _buttonObject.buttons;
	var buttonComp;
	var _txt;
	//var compId;
	
	if(_array.length == 0) return;
	
	$("#flashContent").append('<div id="temp_button_txt"></div>');
	
	for(var i = 0;i<_array.length;i++)
	{
		var compId = _array[i].compId;
		_txt = $(_xmlData).find("component#"+compId).text();
				
		_array[i].text = _txt;		
		_array[i].txtId = compId;
		_array[i].divId = "temp_button_txt";
		buttonComp = new ButtonComp(_buttonObject.style,_array[i]);
		buttonComp.id = i;
		this.addChild(buttonComp);
		
		this.buttonItems.push(buttonComp);
		
	}
	
	this.slideStatus(_buttonObject.style.selected);
	
}

p.callBackFromButton = function(_id)
{
	
	if(this.currentSelectedButton == _id) return;
	
	this.slideStatus(_id);
}

p.slideStatus = function(_id)
{	

	//Reset button handler
	this.buttonStatus(_id);
		
	if(this.getStage()) this.getStage().update();
	
	
	//clean up old slide
	if(this.slideContainer)
	{
		this.slideContainer.cleanUp();
		this.slideContainer.removeAllChildren();
		this.removeChild(this.slideContainer);
		this.slideContainer = null;
		this.getStage().update();
	};
	
	//alert(this.getChildByName("slide"));
	
	
	var slideType = this.slideObject[_id].templateType;
	this.slideType = slideType;
	this.currentID = _id;
	switch(slideType)
	{
		case "IMAGE":
				var _scripts = ["../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/slide/ImageSlideNew.js","../../../common/scripts/templates/comp/ImageComp.js"];
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;
		case "DESCRIPTION":
				var _scripts = ["../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/ImageComp.js","../../../common/scripts/templates/comp/TextBoxComp.js","../../../common/scripts/templates/comp/ButtonComp.js","../../../common/scripts/templates/slide/DescriptionSlide.js","../../../common/scripts/templates/comp/DraggableTextBoxComp.js"];
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;
		case undefined:
				console.log("You forgot to update the template type in slide "+_id);
			break;
	}
		
	//Handle Slides
	
}

p.onLoadJavascript = function(_this)
{	
	switch(_this.slideType)
	{
		case "IMAGE":
				_this.slideContainer = new ImageSlideNew(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);	
			break;
		case "DESCRIPTION":
				_this.slideContainer = new DescriptionSlide(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);
			break;
		case undefined:
				console.log("You forgot to update the template type in slide "+_this.currentID);
			break;
	}
	_this.slideContainer.x = _this.slideObject[_this.currentID].x;
	_this.slideContainer.y = _this.slideObject[_this.currentID].y;
	
	if(_this.getStage()) _this.getStage().update();
}

p.buttonStatus = function(_id)
{
	var _button;
	if(this.currentSelectedButton != undefined)
	{
		_button = this.buttonItems[this.currentSelectedButton];
		_button.setSelected(false);
	}
	
	this.currentSelectedButton = _id;	
	_button = this.buttonItems[this.currentSelectedButton];
	_button.setSelected(true);	
}
	
p.buildTextItems = function(_xmlData,_array)
{	
	if(_array.length == 0) return;
		
	var compId;
	var _txt;
	var _textComp;
	
	$("#flashContent").append('<div id="commonButtonText"></div>');
		
	for(var i = 0;i<_array.length;i++)
	{
		compId = _array[i].compId;
		_txt = $(_xmlData).find("component#"+compId).text();
		_array[i].divId = "commonButtonText";
		_array[i].compId = compId;
		_array[i].text = _txt;
		
		_textComp = new TextComp(_array[i]);							
		//_textComp.setText(_txt,compId);		
				
		this.addChild(_textComp);
		
	}		
}

p.cleanUp = function()
{
	$("#temp_button_txt").remove();
	$("#commonButtonText").remove();	
	if(this.slideContainer)
	{
		this.slideContainer.cleanUp();
		this.slideContainer.removeAllChildren();
		this.removeChild(this.slideContainer);
		this.slideContainer = null;
		this.getStage().update();
	};
	this.removeAllChildren();	
}
