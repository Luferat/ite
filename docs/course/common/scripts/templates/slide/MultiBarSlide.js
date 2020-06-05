/*loadScript("../../../common/scripts/templates/comp/BarButtonComp.js");
loadScript("../../../common/scripts/templates/comp/TextComp.js");
loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");
loadScript("../../../common/scripts/templates/slide/DescriptionSlide.js");
loadScript("../../../common/scripts/templates/slide/AnimationSlide.js");
loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");
loadScript("../../../common/scripts/templates/slide/ImagePopOverSlide.js");
loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");
loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");*/

var MultiBarSlide = function(_xmlData,_dataObject)
{
	this.initiateComp(_xmlData,_dataObject);	
}

var p = MultiBarSlide.prototype = new createjs.Container();

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
	this._dataObject = _dataObject;
	this.slideObject = _dataObject.slideObject;
	this.isViewDD = 0;
	
	this.buttonItems = [];
	this.currentSelectedButton = 0;
	this.currentID = 0;
	//slide container
	this.slideContainer;
	
	var scripts = ["../../../common/scripts/templates/comp/BarButtonComp.js","../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/ImageComp.js"];
	this.loadJSFiles(scripts, this.onLoadJSFile, this);
}

p.onLoadJSFile = function(_this)
{	
	//Build Button Items
	_this.buildButtonItems(_this._dataObject.slideObject.length);
	
	//Build common text items
	_this.buildTextItems(_this._xmlData,_this._dataObject.textObject);
}


p.buildButtonItems = function(_count)
{
	if(_count == 0) return;
	
	var buttonHolder = new createjs.Container();
	buttonHolder.x = 440;
	buttonHolder.y = 1;
	this.addChild(buttonHolder);
	
	var borderImage = new ImageComp();
	borderImage.x = 0;
	borderImage.y = 0;			
	borderImage.setScale(30,390);	
	borderImage.setImageType("none");
	borderImage.loadImage(_name = "../../../common/images/btn_bar.png");
	buttonHolder.addChild(borderImage);
	
	var buttonComp;
	
	for(var i = 0;i<_count;i++)
	{
		buttonComp = new BarButtonComp(i+1);
		buttonComp.x = 1.6;
		buttonComp.y = (i*36)+2;
		
		buttonHolder.addChild(buttonComp);
		
		this.buttonItems.push(buttonComp);
	}
	
	this.slideStatus(0);
	
}

p.callBackFromButton = function(_id)
{	
	if(this.currentSelectedButton == _id) return;
	
	this.slideStatus(_id);
}

p.slideStatus = function(_id)
{	
	this.currentID = _id;	
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
	
	$("#dragDropDiv").remove();
	$("#animDiv").remove();
		
	var slideType = this.slideObject[_id].templateType;
	this.slideType = slideType;
	var _scripts;
	switch(slideType)
	{
		case "IMAGE":
				_scripts = ["../../../common/scripts/templates/slide/ImageSlideNew.js","../../../common/scripts/templates/comp/MultipleImageComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);	
			break;
			
		case "DESCRIPTION":
				_scripts = ["../../../common/scripts/templates/slide/DescriptionSlide.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/TextBoxComp.js","../../../common/scripts/templates/comp/DraggableTextBoxComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);	
			break;
		
		case "TABLE":
				_scripts = ["../../../common/scripts/templates/slide/TableSlideNew.js","../../../common/scripts/templates/comp/TableComp.js","../../../common/scripts/templates/comp/MultipleImageComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);
			break;
		
		case "MULTI_BUTTON":
				_scripts = ["../../../common/scripts/templates/slide/MultiButtonSlide.js","../../../common/scripts/templates/comp/ButtonComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);	
			break;
		
		case "ANIMATION":
				_scripts = ["../../../common/scripts/templates/slide/AnimationSlide.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/AnimationComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);				
			break;
			
		case "DRAG_DROP":				
				_scripts = ["../../../common/scripts/templates/comp/DragDropComp.js","../../../common/scripts/templates/slide/DragDropSlide.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);			
			break;
		
		case "IMAGE_POPOVER":				
				_scripts = ["../../../common/scripts/templates/slide/ImagePopOverSlide.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/DraggableTextBoxComp.js"]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);		
			break;
			
			case "INTERACTIVEANIM":				
				var animPath = mediaPath+'/Animation.js';
				_scripts = ["../../../common/scripts/templates/slide/InteractiveAnimSlide.js","../../../common/scripts/templates/comp/AnimationControlComp.js","../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js","../../../common/js/greensock/TweenMax.min.js",animPath]
				this.loadJSFiles(_scripts, this.onLoadJavascript, this);	
			break;

				
		case "undefined":
				console.log("You forgot to update the template type in slide "+_id);
			break;
	}
	
	//if(this.getStage()) this.getStage().update();
	
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
		
		case "TABLE":
				_this.slideContainer = new TableSlideNew(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);
			break;
		
		case "MULTI_BUTTON":
				_this.slideContainer = new MultiButtonSlide(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);
			break;
		
		case "ANIMATION":
				_this.slideContainer = new AnimationSlide(_this.xmlData,_this.slideObject[_this.currentID]);
				_this.addChild(_this.slideContainer);				
			break;
			
		case "DRAG_DROP":				
				if(typeof _this.slideObject[_this.currentID].instobj.noDefaultHelp == 'undefined' && _this.slideObject[_this.currentID].instobj.noDefaultHelp != true)
					_this.isViewDD++;
				_this.slideObject[_this.currentID].isViewDD = _this.currentID.isViewDD;
				var slide = new DragDropSlide(_this.xmlData,_this.slideObject[_this.currentID]);				
			break;
		
		case "IMAGE_POPOVER":				
				_this.slideContainer = new ImagePopOverSlide(_this.xmlData, _this.slideObject[_this.currentID]);	
				_this.addChild(_this.slideContainer);		
			break;
			
			case "INTERACTIVEANIM":				
				_slide = new InteractiveAnimSlide(_this.xmlData, _this.slideObject[_this.currentID]);					
			break;

				
		case "undefined":
				console.log("You forgot to update the template type in slide "+_this.currentID);
			break;
	}
	if(_this.slideContainer){
		_this.slideContainer.x = _this.slideObject[_this.currentID].x;
		_this.slideContainer.y = _this.slideObject[_this.currentID].y;
	}
	
}

p.buttonStatus = function(_id)
{
	//if(this.currentSelectedButton == undefined) return;
		
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
	
	$("#flashContent").append('<div id="commonBarText"></div>');
		
	for(var i = 0;i<_array.length;i++)
	{
		compId = _array[i].compId;
		_txt = $(_xmlData).find("component#"+compId).text();
		_array[i].divId = "commonBarText";
		_array[i].compId = compId;
		_array[i].text = _txt;
		
		_textComp = new TextComp(_array[i]);							
		//_textComp.setText(_txt,compId);		
				
		this.addChild(_textComp);		
	}		
	
}

p.cleanUp = function()
{
	$("#commonBarText").remove();	
}
