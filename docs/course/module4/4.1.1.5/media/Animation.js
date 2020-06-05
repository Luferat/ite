var intervalID;
var isAnimComplete = true;
var currentImage = 1, cImage = 1;
var ypos = 0, xpos = 0;
var mouseX = 0;
var mouseY = 0;
var _this;
var loadCount = 0;

var Animation = function()
{
	this.init();
}

var p = Animation.prototype = new createjs.Container();

p.init = function()
{	//super class
	this.initialize();
	this.slideId;
	this.textBox;
	this.xmlData;
	this.images = this.images||{};
	
	//$("#flashContent").append('<div id="animeText"></div>');
}

p.getXMLData = function(_xmlData)
{	

}

p.loadAnimation = function(_id)
{
   _this = this;
    var preloader = "../../../common/images/preloader.gif";    
    var manifest = [];
   // $("#flashContent").css('display','none');
    $("body").append('<img id="preloader" src='+preloader+' width="20" height="20" style="position:absolute;top:50%;left:50%;">');
    
    for(var i=0;i<31;i++)
    {
		manifest[i] = {src:"./images/"+(i+1)+".jpg", id:i}		
    }
    var preload;
    preload = new createjs.PreloadJS();
    preload.onProgress = handleProgress;
    preload.onComplete = handleComplete;
    preload.onFileLoad = handleFileLoad;
    preload.loadManifest(manifest);

}

function handleProgress(event) {
     
}
function handleFileLoad(event) {
     var img = new Image();
     img.src = event.src;
     img.id = event.id;
     img.onload = handleLoadComplete;
}
function handleLoadComplete(event) {
    var movieClip = new createjs.Container();
    var bmp = new createjs.Bitmap(this);
    var _w = this.width;
    var _h = this.height;
    movieClip.name = this.id;
    loadCount++;
    bmp.scaleX = bmp.scaleY = .85;
 
    movieClip.addChild(bmp);
    console.log(movieClip.name);
    movieClip.visible = (movieClip.name == 1)?true:false;
    
    _this.addChild(movieClip);
    if(_this.getStage()) _this.getStage().update();
	$('#preloader').remove();
    if(loadCount == 31)
    {
		$('#preloader').remove();
		$("#flashContent").css('display','block');
		doMouseActions()
    }
}

function play_animation()
{
	cImage = (cImage>30)?30:cImage;
	cImage = (cImage <= 0)?1:cImage;
	var curImage = _this.getChildAt(currentImage);	
	if(currentImage < cImage){
		curImage.visible = false;
		currentImage = currentImage+1;	
	}
	else if(currentImage > cImage)
	{
		curImage.visible = false;
		currentImage = currentImage-1;
	}
	var nxtImage = _this.getChildAt(currentImage);
	nxtImage.visible = true;
	if(currentImage != cImage){
		setTimeout(function(){play_animation()}, 50);
	}
	if(_this.getStage()) _this.getStage().update();
}

function handleComplete(event) {
    
}

function doMouseActions()
{
    var stg = _this.getStage();
    createjs.Touch.enable(stg);
    
    stg.onMouseMove = function(evt)
    { 
	var startX = _this.parent.parent.parent.x;
	var startY = _this.parent.parent.parent.y + 40;
	var endX = startX + (360.4 * _this.parent.parent.parent.scaleX);
	var endY = startY + (376.55 * _this.parent.parent.parent.scaleY);	

	document.body.style.cursor='default';
	var tempEY = endY-(endY*.01);
	var tempSY = startY+(endY*.35);
	if(evt.stageY < tempEY && evt.stageY > tempSY && evt.stageX > startX && evt.stageX < endX)
	{	
		cImage = Math.floor((tempEY-evt.stageY)/((tempEY-tempSY)/31));
		play_animation();
	}
	if(evt.stageY < endY && evt.stageY > startY && evt.stageX > startX && evt.stageX < endX)
	{
		document.body.style.cursor='pointer';
	}
    }
}
