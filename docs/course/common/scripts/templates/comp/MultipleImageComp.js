
var MultipleImageComp = function(_imageDataArray)
{	
	this.init(_imageDataArray);	
}

MultipleImageComp.prototype = new createjs.Container();
	
MultipleImageComp.prototype.init = function(_imageDataArray)
{
	this.initialize();
	
	this.loaderCnt = -1;
	this.imageArray = _imageDataArray;
	this.interval;
	this.loadNextImage();
		
};

	
MultipleImageComp.prototype.loadNextImage = function()
{
	this.loaderCnt++;
	
	if(this.loaderCnt < this.imageArray.length)
	{
		this.loadImage();		
	}	
	else if(this.loaderCnt == this.imageArray.length)
	{
		if(this.getStage()) this.getStage().update();
	}
}

MultipleImageComp.prototype.loadImage = function()
{	
	var _this = this;
	var image = new Image();		
	image.src = this.imageArray[this.loaderCnt].name;
	image.onload = function(ev){
						_this.imageLoaded(ev);
					};
}

MultipleImageComp.prototype.imageLoaded = function(_image)
{		
	//Add the image
	this.addImage(_image.target);
	
	//Load Next Image
	this.loadNextImage();
	
}

MultipleImageComp.prototype.addImage = function(_image)
{
	var imageContainer = new createjs.Container();	
	imageContainer.x = this.imageArray[this.loaderCnt].x;
	imageContainer.y = this.imageArray[this.loaderCnt].y;
	this.addChild(imageContainer);
	
	var imageWidth = this.imageArray[this.loaderCnt].width;
	var imageHeight = this.imageArray[this.loaderCnt].height;
	
	var imageRatio = Math.min((imageWidth/_image.width),(imageHeight/_image.height));
	imageWidth = imageRatio * _image.width;
	imageHeight = imageRatio * _image.height;
	
	var _imageShape = new createjs.Shape();
	_imageShape.graphics.beginBitmapFill(_image, "no-repeat").drawRect(0,0,_image.width,_image.height);
	_imageShape.scaleX = _imageShape.scaleY = imageRatio;
	imageContainer.addChild(_imageShape);
		
	if(this.imageArray[this.loaderCnt].type == "STD")
	{
		this.showStandardImage(imageContainer,imageWidth,imageHeight);
	}
	
}

MultipleImageComp.prototype.showStandardImage = function(_container,_imageWidth,_imageHeight)
{
	//For Shadow Effect
	var _shadow = new createjs.Shape();
	_shadow.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0,_imageWidth,_imageHeight,8);
	_shadow.shadow = new createjs.Shadow("#000000",3,3,10);
	_shadow.x = _shadow.y = 0.5;
	_shadow.scaleX = _shadow.scaleY = 0.99;
	_container.addChild(_shadow);
	
	//Get image shape child
	var _imageShape = _container.getChildAt(0);
	_container.swapChildren(_imageShape,_shadow);
	
	//For Mask 
	var _mask = new createjs.Shape();
	_mask.graphics.beginFill().drawRoundRect(0,0,_imageWidth,_imageHeight,8);			
	_container.addChild(_mask);			
	_imageShape.mask = _mask;	
		
}
