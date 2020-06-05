function ImageComp()
{	
	this.initiateComp();				
}

ImageComp.prototype = new createjs.Container();

ImageComp.prototype.initiateComp = function()
{
	//super class inheritance
	this.initialize();

	this.image = null;
	this.imageWidth;
	this.imageHeight;
	this.imageType = null;		
}
	
ImageComp.prototype.setScale = function(_width,_height)
{		
	this.imageWidth = _width;
	this.imageHeight = _height;
}

ImageComp.prototype.setImageType = function(_type)
{
	this.imageType = _type;
}
		
ImageComp.prototype.loadImage = function(_imageName)
{		
	$("#flashContent").append('<img id="preloader" src="../../../common/images/preloader.gif" width="20" height="20" style="position:absolute;top:50%;left:50%;">');
			
	var _this = this;
	this.image = new Image();
	this.image.src = _imageName;		
	this.image.onload = function()
						{ 
							_this.imageLoaded();
						};
							
}
	
ImageComp.prototype.imageLoaded = function()
{		
	//Remove the preloader
	$("#preloader").remove();
					
	var _imageRatio = Math.min((this.imageWidth/this.image.width),(this.imageHeight/this.image.height));
	this.imageWidth = this.image.width * _imageRatio;
	this.imageHeight = this.image.height * _imageRatio;
	
	//For Image
	
	var _imageShape = new createjs.Shape();
	_imageShape.graphics.beginBitmapFill(this.image,"no-repeat").drawRect(0,0,this.image.width,this.image.height);
	_imageShape.scaleX = _imageShape.scaleY = _imageRatio;
	this.addChild(_imageShape);
	
	if(this.imageType == "STD")
	{
		this.showStandardImage();
	}
	
	if(this.getStage()) this.getStage().update();
}

ImageComp.prototype.showStandardImage = function()
{
	//For Shadow Effect
	var _shadow = new createjs.Shape();
	_shadow.graphics.beginFill('rgba(0,0,0,1)').drawRoundRect(0,0,this.imageWidth,this.imageHeight,8);
	_shadow.shadow = new createjs.Shadow("#000000",3,3,10);
	_shadow.x = _shadow.y = 0.5;
	_shadow.scaleX = _shadow.scaleY = 0.99;
	this.addChild(_shadow);
	
	//Get image shape child
	var _imageShape = this.getChildAt(0);
	this.swapChildren(_imageShape,_shadow);
	
	//For Mask 
	var _mask = new createjs.Shape();
	_mask.graphics.beginFill().drawRoundRect(0,0,this.imageWidth,this.imageHeight,8);			
	this.addChild(_mask);			
	_imageShape.mask = _mask;	
		
}

ImageComp.prototype.toString = function()
{
	return '[ImageComp '+this.z +']';	
}


