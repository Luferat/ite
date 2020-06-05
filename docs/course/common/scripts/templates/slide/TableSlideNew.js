// JavaScript Document
/*loadScript("../../../common/scripts/templates/comp/TextComp.js");
loadScript("../../../common/scripts/templates/comp/TableComp.js");*/

var TableSlideNew = function (_xmlData,_dataObject)
{
	this.initiateComp(_xmlData,_dataObject);
	
}

var p = TableSlideNew.prototype = new createjs.Container();
		
p.initiateComp = function(_xmlData,_dataObject)
{	
	//super class inheritance
	this.initialize();
	this.buildTable(_xmlData,_dataObject.tables);	
	
	if(_dataObject.images)
	{	
		this.buildImageItems(_dataObject.images);
	}
	
	
	
	this.buildTextItems(_xmlData,_dataObject.texts);
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
p.buildTextItems = function(_xmlData,_array)
{	
	if(_array.length == 0) return;
		
	var compId;
	var _txt;
	var _textComp;
	
	$("#flashContent").append('<div id="temp_table_text"></div>');
	
	for(var i = 0;i<_array.length;i++)
	{
		compId = _array[i].compId;
		_txt = $(_xmlData).find("component#"+compId).text();
		_array[i].divId = "temp_table_text";
		_array[i].compId = compId;
		_array[i].text = _txt;		
		_textComp = new TextComp(_array[i]);	
		this.addChild(_textComp);			
	}	
	
}


p.buildTable = function(_xmlData,_array)
{	

	if(_array.length == 0) return;
	
	$("#flashContent").append('<div id="temp_table"></div>');
		
	var compId;
	var _tableContent;
	var _tableComp;
		
	for(var i = 0;i<_array.length;i++)
	{		compId = _array[i].compId;
		
		_tableContent = $(_xmlData).find("component#"+compId).text();
		_array[i].text = _tableContent;
		_array[i].tagId = compId;
		_array[i].divId = "temp_table";
		
		_tableComp = new TableComp(_array[i]);
		
		this.addChild(_tableComp);
		_tableComp.setTable();
	}	
	
	var _this = this;		
	setTimeout(function(){_this.getStage().update();},100);
			
}

p.cleanUp = function()
{
	$("#temp_table_text").remove();
	$("#temp_table").remove();
}