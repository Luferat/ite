(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.slide7animation = function(_parent) {
	this.initialize();

	// Layer 1
	
	this.instance = new lib.slide_7_activity(0,1,1,_parent);
	this.instance.setTransform(81.7,21.9);

	this.addChild(this.instance);
		
	//this.instance.gotoAndStop(1);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(37.3,44.5,476.4,311);


// symbols:
(lib.knob = function() {
	this.initialize(img.knob);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,319);

(lib.display_over = function() {
	this.initialize(img.display_over);
}).prototype = new cjs.Bitmap();

(lib.port_over = function() {
	this.initialize(img.port_over);
}).prototype = new cjs.Bitmap();

(lib.rect_over = function() {
	this.initialize(img.rect_over);
}).prototype = new cjs.Bitmap();

(lib.knob_over = function() {
	this.initialize(img.knob_over);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,318,319);


(lib.knob_cover = function() {
	this.initialize(img.knob_cover);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,403,240);


(lib.knob3 = function() {
	this.initialize(img.knob3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,327,330);


(lib.knob4 = function() {
	this.initialize(img.knob4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,328);


(lib.knob5 = function() {
	this.initialize(img.knob5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,327);


(lib.knob6 = function() {
	this.initialize(img.knob6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,325);


(lib.multimeter = function() {
	this.initialize(img.multimeter);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,482);


(lib.screen_2 = function() {
	this.initialize(img.screen_2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,335,144);


(lib.screen_3 = function() {
	this.initialize(img.screen_3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,141);


(lib.screen_4 = function() {
	this.initialize(img.screen_4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,365,140);


(lib.screen_5 = function() {
	this.initialize(img.screen_5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,338,139);


(lib.screen_6 = function() {
	this.initialize(img.screen_6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,141);


(lib.screen_7 = function() {
	this.initialize(img.screen_7);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,144);


(lib.s7_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D5D5D5"],[0,1],84.6,-41.1,-173.5,297.5).s().rr(-76.8,-138.15,153.6,276.3,6);
	this.shape.setTransform(76.8,138.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153.6,276.3);


(lib.rndGlow = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0197D6").s().p("AAtAAQAAgRgNgOQgOgNgSAAQgRAAgOANQgNAOAAARQAAASANAOQAOANARAAQASAAAOgNQANgOAAgSIAAAAAAvAAQAAATgOAOQgOAOgTAAQgSAAgOgOQgOgOAAgTQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASIAAAA").cp();
	this.shape_1.setTransform(4.8,4.8);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.5,9.5);


(lib.recGlow = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00A1E3").s().p("AFoCbIAAk1IrPAAIAAE1ILPAAAF8CvIr3AAIAAldIL3AAIAAFd").cp();
	this.shape_2.setTransform(38,17.5);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,35);


(lib.KnobPNG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.knob();
	this.instance.setTransform(-14.2,40.2,0.189,0.189,-115.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.1,-40.1,80.4,80.3);


(lib.comGlow = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00A1E3").s().p("AA/iLQgHgagYgOQgYgPgaAIQgaAIgPAZQgNAWAIAfQAFAQAEAIIAVELIA/gBIAUkGIAGgMQAQgagIgdIAAAAABNiOQAKAhgSAdQgCAEgDAEQgBACgBABIgWEQIhTABIgXkWQgHgLgEgPQgJggARgdQASgdAfgJQAfgJAdARQAdASAIAfIAAAA").cp();
	this.shape_3.setTransform(8.2,20.4);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,40.8);


(lib.fluketerminalpost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance_1 = new lib.comGlow();
	this.instance_1.setTransform(0.1,12.3,1,1,0,0,0,8.2,20.4);
	this.addChild(this.instance_1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,161,227,0.2)").s().p("AAAizQAqgCAfA3QAeA1AABJQAABJgeA1QgfA1gqABQgpgBgeg1Qgfg1AAhJQAAhJAfg1QAeg3ApACIAAAA").cp();
	this.shape_4.setTransform(-3.4,8.1);
	this.addChild(this.shape_4);
	this.shape_4.alpha = .1;

	this.rect_over = new lib.port_over();
	this.rect_over.setTransform(-15,-15,1,1);
	this.addChild(this.rect_over);
	this.rect_over.visible = false;	//this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_4}]},2).wait(1));
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,-8.1,16.3,40.8);


(lib.flukehold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABNAzIiZAAIAAhlICZAAIAABl").cp();
	this.shape_5.alpha = 0.1;
	this.addChild(this.shape_5);
	//this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},3).wait(1));

	// Layer 2
	this.instance_2 = new lib.recGlow();
	this.instance_2.setTransform(0,0,0.237,0.343,0,0,0,38,17.4);
	this.addChild(this.instance_2);
	
	this.rect_over = new lib.rect_over();
	this.rect_over.setTransform(-14.5,-12,1,1);
	this.addChild(this.rect_over);
	this.rect_over.visible = false;
	
	//this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4));
	
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-5.9,18,12);


(lib.flukedialposition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance_3 = new lib.rndGlow();
	this.instance_3.setTransform(0.1,0.1,1,1,0,0,0,4.8,4.8);
	this.addChild(this.instance_3);
	
	//Rollover dial button
	
	this.knobover = new lib.knob_over();	
	this.addChild(this.knobover);
	this.knobover.setTransform(-5.8,-5.8,0.155,0.155);
	this.knobover.visible = false;
	
	
	this.shape_6 = new cjs.Shape();
	//this.shape_6.graphics.f("#3366FF").s().p("AAhggQAOAOAAASQAAATgOAOQgOAOgTAAQgSAAgOgOQgOgOAAgTQAAgSAOgOQAOgOASAAQATAAAOAOIAAAA").cp();
	this.shape_6.graphics.beginFill("#FFFFFF").drawCircle(0,0,4.8,4.8);
	this.shape_6.alpha = 0.1;
	this.addChild(this.shape_6);
	//this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_6}]},2).wait(1));
	
	
}).prototype = p = new cjs.Container();
//p.nominalBounds = new cjs.Rectangle(-4.7,-4.7,9.5,9.5);


(lib.flukemainscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AGCCuIsDAAIAAlbIMDAAIAAFb").cp();
	this.addChild(this.shape_7);
	this.shape_7.alpha = 0.1;
	//this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.shape_7}]},2).wait(1));

	// Layer 1
	this.instance_4 = new lib.recGlow();
	this.instance_4.setTransform(0,0,1,1,0,0,0,38,17.5);
	this.addChild(this.instance_4);
	
	this.rect_over = new lib.display_over();
	this.rect_over.setTransform(-45,-25,1,1);
	this.addChild(this.rect_over);
	this.rect_over.visible = false;
	
	//this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4));
	//this.gotoAndStop(1);
	
}).prototype = p = new cjs.Container();

p.nominalBounds = new cjs.Rectangle(-37.9,-17.4,76,35);


(lib.slide_7_activity = function(mode,startPosition,loop,_parent) {
		
	this.initialize(mode,startPosition,loop,{firstPos:1},true);
	
	this._parent = _parent;
	
	this.currentFrame = 0;
	
	var _this = this;
	// dial Button
	this.hotspot08 = new lib.flukedialposition();
	this.hotspot08.name = "KNOB";
	this.hotspot08.setTransform(83.2,215.4,6.312,6.312);
	
	this.hotspot08.onMouseOut = function(){this.knobover.visible = false;};
	this.hotspot08.onMouseOver = function(){this.knobover.visible = true;};
	this.hotspot08.onClick = function(){
			_this.onClickHandler(this.name);
		};
		
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hotspot08}]}).wait(8));
	
	// buttons
	this.hotspot05 = new lib.flukehold();
	this.hotspot05.name = "RECT_4";
	this.hotspot05.setTransform(113.9,164.6,0.99,0.99);
	
	this.hotspot05.onMouseOut = function(){this.rect_over.visible = false;};
	this.hotspot05.onMouseOver = function(){this.rect_over.visible = true;};
	this.hotspot05.onClick = function(){
			_this.onClickHandler(this.name);
		};
		
	this.hotspot04 = new lib.flukehold();
	this.hotspot04.name = "RECT_3";
	this.hotspot04.setTransform(94,164.6,0.99,0.99);
	
	this.hotspot04.onMouseOut = function(){this.rect_over.visible = false;};
	this.hotspot04.onMouseOver = function(){this.rect_over.visible = true;};
	this.hotspot04.onClick = function(){
			_this.onClickHandler(this.name);
		};
		
	this.hotspot03 = new lib.flukehold();
	this.hotspot03.name = "RECT_2";
	this.hotspot03.setTransform(73.8,164.6,0.99,0.99);
	
	this.hotspot03.onMouseOut = function(){this.rect_over.visible = false;};
	this.hotspot03.onMouseOver = function(){this.rect_over.visible = true;};
	this.hotspot03.onClick = function(){
			_this.onClickHandler(this.name);
		};

	this.hotspot02 = new lib.flukehold();
	this.hotspot02.name = "RECT_1";
	this.hotspot02.setTransform(54,164.6,0.99,0.99);
	
	this.hotspot02.onMouseOut = function(){this.rect_over.visible = false;};
	this.hotspot02.onMouseOver = function(){this.rect_over.visible = true;};
	this.hotspot02.onClick = function(){
			_this.onClickHandler(this.name);
		};
	
	this.hotspot07 = new lib.fluketerminalpost();	
	this.hotspot07.name = "RIGHT_POST";
	this.hotspot07.setTransform(112.4,268.1,0.99,0.99,-3.4);
	
	this.hotspot07.onMouseOut = function(){this.rect_over.visible = false;};
	this.hotspot07.onMouseOver = function(){this.rect_over.visible = true;};
	this.hotspot07.onClick = function(){
			_this.onClickHandler(this.name);
		};
		
	this.hotspot06 = new lib.fluketerminalpost();
	this.hotspot06.name = "LEFT_POST";
	this.hotspot06.setTransform(83.6,268.3,1,1,12.2);

	this.hotspot06.onMouseOut = function(){this.rect_over.visible = false;};
	this.hotspot06.onMouseOver = function(){this.rect_over.visible = true;};
	this.hotspot06.onClick = function(){
			_this.onClickHandler(this.name);
		};
		
	this.hotspot01 = new lib.flukemainscreen();
	this.hotspot01.name = "DISPLAY";
	this.hotspot01.setTransform(83.8,132.6);
	
	this.hotspot01.onMouseOut = function(){this.rect_over.visible = false;};
	this.hotspot01.onMouseOver = function(){this.rect_over.visible = true;};
	this.hotspot01.onClick = function(){
			_this.onClickHandler(this.name);
		};
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hotspot01},{t:this.hotspot02},{t:this.hotspot06},{t:this.hotspot07},{t:this.hotspot03},{t:this.hotspot04},{t:this.hotspot05}]}).wait(8));

	// screen
	this.instance_5 = new lib.screen_2();
	this.instance_5.setTransform(55.8,120.9,0.188,0.188);

	this.instance_6 = new lib.screen_3();
	this.instance_6.setTransform(53.5,121.7,0.188,0.188);

	this.instance_7 = new lib.screen_4();
	this.instance_7.setTransform(50.4,121.5,0.188,0.188);

	this.instance_8 = new lib.screen_5();
	this.instance_8.setTransform(55.8,121.9,0.188,0.188);

	this.instance_9 = new lib.screen_6();
	this.instance_9.setTransform(50.2,121.7,0.188,0.188);

	this.instance_10 = new lib.screen_7();
	this.instance_10.setTransform(65.6,116.4,0.188,0.188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

	// knob cover
	this.instance_11 = new lib.knob_cover();
	this.instance_11.setTransform(40.9,177.5,0.188,0.188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(8));

	// knobs
	this.instance_12 = new lib.KnobPNG();
	this.instance_12.setTransform(83.9,216.4,0.99,0.99,0.6);

	this.instance_13 = new lib.knob3();
	this.instance_13.setTransform(53.6,185.2,0.188,0.188);

	this.instance_14 = new lib.knob4();
	this.instance_14.setTransform(53.1,185.5,0.188,0.188);

	this.instance_15 = new lib.knob5();
	this.instance_15.setTransform(53.6,185.7,0.188,0.188);

	this.instance_16 = new lib.knob6();
	this.instance_16.setTransform(53.5,185.8,0.188,0.188);
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{scaleX:0.99,scaleY:0.99,rotation:0.6,x:83.9}}]}).to({state:[{t:this.instance_12,p:{scaleX:0.989,scaleY:0.989,rotation:22.5,x:84.4}}]},2).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[]},1).wait(1));
	
	// multimeter.png
	this.instance_17 = new lib.multimeter();
	this.instance_17.setTransform(16.1,31.3,0.627,0.627);
	//this.addChild(this.instance_17);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).wait(8));

	// background
	this.instance_18 = new lib.s7_bg();
	this.instance_18.setTransform(85.6,181.9,1.075,1.099,0,0,0,76.8,138.2);
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,4,5);
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).wait(8));

	
	
}).prototype = p = new cjs.MovieClip();

p.knobArray = [{titleId:"ID_s7_titleTxt08",bodyId:"ID_s7_bodyTxt08"},
				{titleId:"ID_s7_titleTxt09",bodyId:"ID_s7_bodyTxt09"},
				{titleId:"ID_s7_titleTxt10",bodyId:"ID_s7_bodyTxt10"},
				{titleId:"ID_s7_titleTxt11",bodyId:"ID_s7_bodyTxt11"},
				{titleId:"ID_s7_titleTxt12",bodyId:"ID_s7_bodyTxt12"},
				{titleId:"ID_s7_titleTxt13",bodyId:"ID_s7_bodyTxt13"},
				{titleId:"ID_s7_titleTxt14",bodyId:"ID_s7_bodyTxt14"}];

p.onClickHandler = function(_name)
{
	
	switch(_name)
	{
		
		case "KNOB":
				if(this.currentFrame < 7)
				{					
					this.currentFrame++;
				}
				else
				{					
					this.currentFrame = 1;					
				}
				
				this.gotoAndStop(this.currentFrame);
				
				this._parent.updateTextBox(this.knobArray[this.currentFrame-1].titleId,this.knobArray[this.currentFrame-1].bodyId);				
			break;	
			
		case "RECT_1":
				this._parent.updateTextBox("ID_s7_titleTxt02","ID_s7_bodyTxt02");								
			break;
			
		case "RECT_2":
				this._parent.updateTextBox("ID_s7_titleTxt03","ID_s7_bodyTxt03");				
			break;
			
		case "RECT_3":
				this._parent.updateTextBox("ID_s7_titleTxt04","ID_s7_bodyTxt04");				
			break;
			
		case "RECT_4":
				this._parent.updateTextBox("ID_s7_titleTxt05","ID_s7_bodyTxt05");				
			break;
			
		case "DISPLAY":
				this._parent.updateTextBox("ID_s7_titleTxt01","ID_s7_bodyTxt01");
			break;
		
		case "LEFT_POST":
				this._parent.updateTextBox("ID_s7_titleTxt06","ID_s7_bodyTxt06");
			break;
		
		case "RIGHT_POST":
				this._parent.updateTextBox("ID_s7_titleTxt07","ID_s7_bodyTxt07");
			break;
		
	}
}

p.nominalBounds = new cjs.Rectangle(-44.3,22.6,476.4,311);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;