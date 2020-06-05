
loadScript("../../../common/scripts/templates/comp/DraggableTextBoxComp.js");

var Animation = function()
{
	this.init();
}

var p = Animation.prototype = new createjs.Container();

p.init = function()
{
	//super class
	this.initialize();
	
	this.slideId;
	this.textBox;
	
	this.xmlData;
	this.images = this.images||{};
	
	$("#flashContent").append('<div id="animeText"></div>');
}

p.getXMLData = function(_xmlData)
{	
	this.xmlData = _xmlData;
}

p.getTextValue = function(_compId)
{
	 return $(this.xmlData).find("component#"+_compId).text();		
}

p.updateTextBox = function(_titleCompId,_bodyCompId)
{
	var _titleText = $(this.xmlData).find("component#"+_titleCompId).text();		
	this.textBox.setTitleText(_titleText);	
	var _bodyText = $(this.xmlData).find("component#"+_bodyCompId).text();		
	this.textBox.setBodyText(_bodyText);	
}

p.loadAnimation = function(_id)
{
	this.slideId = _id;
	var manifest;
	
	if(_id == "SLIDE_1")
	{
		manifest = [
			{src:"images/FlatheadScrewdriver0001.png", id:"FlatheadScrewdriver0001"},
			{src:"images/FlatheadScrewdriver0002.png", id:"FlatheadScrewdriver0002"},
			{src:"images/FlatheadScrewdriver0003.png", id:"FlatheadScrewdriver0003"},
			{src:"images/FlatheadScrewdriver0004.png", id:"FlatheadScrewdriver0004"},
			{src:"images/FlatheadScrewdriver0005.png", id:"FlatheadScrewdriver0005"},
			{src:"images/FlatheadScrewdriver0006.png", id:"FlatheadScrewdriver0006"},
			{src:"images/FlatheadScrewdriver0007.png", id:"FlatheadScrewdriver0007"},
			{src:"images/FlatheadScrewdriver0008.png", id:"FlatheadScrewdriver0008"},
			{src:"images/FlatheadScrewdriver0009.png", id:"FlatheadScrewdriver0009"},
			{src:"images/FlatheadScrewdriver0010.png", id:"FlatheadScrewdriver0010"},
			{src:"images/FlatheadScrewdriver0011.png", id:"FlatheadScrewdriver0011"},
			{src:"images/FlatheadScrewdriver0046.png", id:"FlatheadScrewdriver0046"},
			{src:"images/FlatheadScrewdriver0047.png", id:"FlatheadScrewdriver0047"},
			{src:"images/FlatheadScrewdriver0048.png", id:"FlatheadScrewdriver0048"},
			{src:"images/FlatheadScrewdriver0049.png", id:"FlatheadScrewdriver0049"},
			{src:"images/FlatheadScrewdriver0050.png", id:"FlatheadScrewdriver0050"},
			{src:"images/FlatheadScrewdriver0051.png", id:"FlatheadScrewdriver0051"},
			{src:"images/FlatheadScrewdriver0052.png", id:"FlatheadScrewdriver0052"},
			{src:"images/FlatheadScrewdriver0053.png", id:"FlatheadScrewdriver0053"},
			{src:"images/FlatheadScrewdriver0054.png", id:"FlatheadScrewdriver0054"},
			{src:"images/FlatheadScrewdriver0055.png", id:"FlatheadScrewdriver0055"},
			{src:"images/FlatheadScrewdriver0056.png", id:"FlatheadScrewdriver0056"},
			{src:"images/FlatheadScrewdriver0057.png", id:"FlatheadScrewdriver0057"},
			{src:"images/FlatheadScrewdriver0058.png", id:"FlatheadScrewdriver0058"}
		];
						
	}
	else if(_id == "SLIDE_6")
	{
		manifest = [
			{src:"images/plier_close.png", id:"plier_close"},
			{src:"images/plier_open.png", id:"plier_open"},
			{src:"images/tweeser_close.png", id:"tweeser_close"},
			{src:"images/tweeser_open.png", id:"tweeser_open"}
		];			
	}	
	else if(_id == "SLIDE_7")
	{
		manifest = [
			{src:"images/knob.png", id:"knob"},
			{src:"images/knob_cover.png", id:"knob_cover"},
			{src:"images/knob3.jpg", id:"knob3"},
			{src:"images/knob4.jpg", id:"knob4"},
			{src:"images/knob5.jpg", id:"knob5"},
			{src:"images/knob6.jpg", id:"knob6"},
			{src:"images/display_over.png", id:"display_over"},
			{src:"images/port_over.png", id:"port_over"},
			{src:"images/rect_over.png", id:"rect_over"},
			{src:"images/knob_over.png", id:"knob_over"},
			{src:"images/multimeter.png", id:"multimeter"},
			{src:"images/screen_2.jpg", id:"screen_2"},
			{src:"images/screen_3.jpg", id:"screen_3"},
			{src:"images/screen_4.jpg", id:"screen_4"},
			{src:"images/screen_5.jpg", id:"screen_5"},
			{src:"images/screen_6.jpg", id:"screen_6"},
			{src:"images/screen_7.jpg", id:"screen_7"}
		];
				
		
		
	}
	
	var _this = this;
	var loader = new createjs.PreloadJS(false);
	loader.onFileLoad = this.handleFileLoad;
	loader.onComplete = function(){
			_this.handleComplete();
		}
	loader.loadManifest(manifest);
	
}

p.handleFileLoad = function (o) {
	if (o.type == "image") { images[o.id] = o.result; }
}

p.handleComplete = function () {
	var exportRoot;
	
	if(this.slideId == "SLIDE_1")
	{
		exportRoot = new lib.slide1animation(0,1,1,this);	
		exportRoot.x = -130;
		exportRoot.y = -40;	
	}
	else if(this.slideId == "SLIDE_6")
	{
		exportRoot = new lib.slide6animation();
	}
	else if(this.slideId == "SLIDE_7")
	{
		exportRoot = new lib.slide7animation(this);
		exportRoot.instance.gotoAndStop(1);
			
		//Loading the Text Box Comp
		this.textBox = new DraggableTextBoxComp({bodyCompId:"temp_body_text",
			titleCompId:"temp_title_text",
			divId:"animeText",
			bodyText:this.getTextValue("ID_s7_bodyTxt"),
			titleText:this.getTextValue("ID_s7_titleTxt"),
			x:260,
			y:52,
			width:250,
			height:303,
			draggable:"YES"});
		this.addChild(this.textBox);
	}
	
	this.addChild(exportRoot);
	
	this.getStage().update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addListener(this.getStage());
}