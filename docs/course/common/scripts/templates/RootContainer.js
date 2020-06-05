var RootContainer = function()
{	
	this.initiateComp();	
}

var p = RootContainer.prototype = new createjs.Container();

p.initiateComp = function()
{
	//super class inheritance
	this.initialize();
	
	this.windowWidth;
	this.windowHeight;
	this.canvas = document.getElementById("canvas");
		
	var _bg = new createjs.Shape();
	_bg.graphics.beginFill().drawRect(0,0,STAGE_WIDTH,STAGE_HEIGHT);
	this.addChild(_bg);
		
	this.resizeHandler();
	
	var _this = this;
	setInterval(function(){
		_this.resizeHandler();
	},100);
		
}

p.resizeHandler = function()
{
	
	if(this.windowWidth != window.innerWidth || this.windowHeight != window.innerHeight)
	{
		
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
	
		this.canvas.width = ((window.innerWidth - 20) * 0.99); //;
		this.canvas.height = (window.innerHeight * 0.99);
		
		// RESIZE RATIO FOR DIV OUTSIDE CANVAS
		var nwidth = ((window.innerWidth) * 0.99); //;
		var nheight = (window.innerHeight * 0.94);
		
		p.pratio = Math.min(nwidth/STAGE_WIDTH,nheight/STAGE_HEIGHT);
		
		//RESIZING THE CONTAINER
		$('#flashContent').css('width','auto' );		
		$('#flashContent').css('cssText', 'overflow: hidden !important');
		
		var _ratio = Math.min(this.canvas.width/STAGE_WIDTH,this.canvas.height/STAGE_HEIGHT);
		if(_ratio<0.9)
		{	
			var width = this.canvas.width+"px";
			var height = this.canvas.height+"px";
			
			_ratio = 0.9;
			p.pratio = 0.9;
			//console.log("this.canvas.height --> "+this.canvas.height+" stage size "+(STAGE_HEIGHT * _ratio));
			
			this.canvas.width = (STAGE_WIDTH * _ratio);
			$('#flashContent').css('cssText', 'overflow-x: scroll !important');	
			$('#flashContent').css("width",width);		
		}
		else if(_ratio > 1.3)
		{	
			_ratio = 1.3;
		} 		
		
		this.scaleX = this.scaleY = _ratio;
		$('#mainDiv').data('scaleVal', p.pratio);
		var isiPad = navigator.userAgent.match(/iPad/i) != null;		
		if(!isiPad && (dataObject.templateType != 'DRAG_DROP' || typeof isDD == 'undefined'))
		{
			// RESIZE DIV OUTSIDE CANVAS
			$('#mainDiv').css('-webkit-transform', 'translate3d(0,0,0)');		
			$('#mainDiv').css('-moz-transform','scale('+p.pratio+', '+p.pratio+')');
			$('#mainDiv').css('-webkit-transform','scale('+p.pratio+', '+p.pratio+')');			
			//
		}
		
		// POSITIONING THE DIV OUTSIDE CANVAS
		var gap = 0;
		if(typeof TYPE != 'undefined' && TYPE == 'MULTI_BAR')
		gap = 20;
		
		var left = (nwidth - $('#mainDiv').width())/2 - gap;
		var top = (nheight - $('#mainDiv').height())/2;
		
		$('#mainDiv').css('left',left);
		$('#mainDiv').css('top',top);
		// 
		
		//POSITIONING THE CONTAINER			
		this.x = (((this.canvas.width) - (STAGE_WIDTH * _ratio))/2) ;
		this.y = ((this.canvas.height - (STAGE_HEIGHT * _ratio))/2);
		
		if(this.getStage())
		{
			this.getStage().update();
		}
		
	}	
	
}