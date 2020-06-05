var Animation = function()
{
	this.startAnimation();
}

var p = Animation.prototype = new createjs.Container();

p.startAnimation = function()
{
	//super class
	this.initialize();
	
	this.xmlData;
		
	this.images = this.images||{};
	
}

p.getXMLData = function(_xmlData)
{	
	this.xmlData = _xmlData;
}

p.loadAnimation = function(_id)
{
	var manifest = [{src:"images/_6_1_1_1.jpg", id:"_6_1_1_1"},
					{src:"images/paper_01.jpg", id:"paper_01"},
					{src:"images/paper_02.png", id:"paper_02"}];
	
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
	var exportRoot = new lib.classesmediaMediaObject();	
	this.addChild(exportRoot);
	
	this.getStage().update();

	createjs.Ticker.setFPS(24);
	createjs.Ticker.addListener(this.getStage());
}