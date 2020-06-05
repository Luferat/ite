/*loadScript("../../../common/scripts/templates/comp/ImageComp.js");
loadScript("../../../common/scripts/templates/comp/MultipleImageComp.js");
loadScript("../../../common/scripts/templates/comp/TextBoxComp.js");
loadScript("../../../common/scripts/templates/comp/DraggableTextBoxComp.js");*/

var DescriptionSlide = function(_xmlData,_dataObject)
{
	this.initiateObject(_xmlData,_dataObject);	
	
}

var p = DescriptionSlide.prototype = new createjs.Container();

p.initiateObject = function (_xmlData,_dataObject)
{

	this.textItems = [];
	this.dragTBoxItems = [];
	
	this.buildImageItems(_dataObject.images);
	
	this.buildTextBoxItems(_xmlData,_dataObject.textboxs);
	
	this.buildTextItems(_xmlData,_dataObject.texts);
	
	if(_dataObject.dragtextboxs)
	{
		this.buildDragTextBoxItems(_xmlData,_dataObject.dragtextboxs);
	}
	
}

p.buildTextItems = function(_xmlData,_array)
{	
	if(_array.length == 0) return;
		
	var compId;
	var _txt;
	var _textComp;
	
	$("#flashContent").append('<div id="commonDescText"></div>');
	
	for(var i = 0;i<_array.length;i++)
	{
		compId = _array[i].compId;
		_txt = $(_xmlData).find("component#"+compId).text();
		_array[i].divId = "commonDescText";
		_array[i].compId = compId;
		_array[i].text = _txt;		
		_textComp = new TextComp(_array[i]);	
		this.addChild(_textComp);			
	}	
	
}

p.buildImageItems = function(_array)
{

	if(_array.length == 0) return;
	
	if(_array.length == 1)
	{
		var _image = new ImageComp();
		_image.x = _array[0].x;
		_image.y = _array[0].y;			
		_image.setScale(_array[0].width,_array[0].height);	
		_image.setImageType(_array[0].type);
		_image.loadImage(_array[0].name);
		this.addChild(_image);
	}
	else
	{
        var multiImageComp = new MultipleImageComp(_array);
		this.addChild(multiImageComp);	
	}
	
}

p.buildTextBoxItems = function(_xmlData,_array)
{	
	if(_array.length == 0) return;
		
	var compId;
	var _txt;
	var _textComp;
		
	$("#flashContent").append('<div id="descText"></div>');
	
	for(var i = 0;i<_array.length;i++)
	{
		
		compId = _array[i].compId;
        _txt = $(_xmlData).find("component#"+compId).text();
        _array[i].text = _txt;
		_array[i].divId = "descText";
		_array[i].compId = compId;
		_textComp = new TextBoxComp(_array[i]);		
		this.addChild(_textComp);
		
	}		
}

p.buildDragTextBoxItems = function(_xmlData,_array)
{	
	if(_array.length == 0) return;
		
	var bodyCompId;
	var titleCompId;
	var bodyText;
	var titleText;
	var _textComp;
		
	$("#flashContent").append('<div id="commonDragText"></div>');
	
	for(var i = 0;i<_array.length;i++)
	{
		//bodyCompId:"temp_body_text",
		//titleCompId:"temp_title_text",
		//divId:"animeText",
				
		if(_array[i].titleCompId == "" || _array[i].titleCompId == undefined)
		{
			_array[i].titleText = "";
		}else
		{			
			_array[i].titleText = $(_xmlData).find("component#"+_array[i].titleCompId).text();
		}
				
		_array[i].bodyText = $(_xmlData).find("component#"+_array[i].bodyCompId).text();
		_array[i].divId = "commonDragText";
		_textComp = new DraggableTextBoxComp(_array[i]);		
		this.addChild(_textComp);
		
		this.dragTBoxItems.push(_textComp);
	}		
}


p.cleanUp = function()
{
	//alert(this.getChildAt(0));
	for(var i = 0;i<this.dragTBoxItems.length;i++)
	{
		this.dragTBoxItems[i].cleanUp();
	}
	this.dragTBoxItems = null;
	
	$("#descText").remove();
	$("#commonDescText").remove();	
	$("#commonDragText").remove();
	
	this.removeAllChildren();
}

