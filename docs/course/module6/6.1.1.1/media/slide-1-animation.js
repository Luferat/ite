(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();
	this.instance.setTransform(-66.9,-30.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,355.1,355.1);


// symbols:
(lib._6_1_1_1 = function() {
	this.initialize(img._6_1_1_1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,442);


(lib.paper_01 = function() {
	this.initialize(img.paper_01);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,99);


(lib.paper_02 = function() {
	this.initialize(img.paper_02);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,100);


(lib.file_01 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.paper_02();
	this.instance.setTransform(-18.4,-34.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-34.3,130,100);


(lib.file = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.paper_01();
	this.instance_1.setTransform(-18.4,-34.3);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-34.3,63,99);


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// screen2
	this.instance_2 = new lib.file("synched",0);
	this.instance_2.setTransform(314.8,107.2,0.52,0.52,0,0,0,41.1,42.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({startPosition:0,_off:false},0).to({regX:41,regY:42.6,rotation:30,x:270.4,y:142.6,alpha:1},20,cjs.Ease.get(0.01)).to({regX:41.1,regY:42.9,scaleX:0.57,scaleY:0.57,rotation:59.8,x:268.4,y:188.9},25,cjs.Ease.get(0.01)).to({regX:41.2,regY:42.6,scaleX:0.42,scaleY:0.42,rotation:68,x:148.4,y:262.8},32,cjs.Ease.get(0.01)).wait(28));

	// screen1
	this.instance_3 = new lib.file_01("synched",0);
	this.instance_3.setTransform(142.2,253.5,0.452,0.452,-24.2,0,0,41.2,42.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({startPosition:0,_off:false},0).to({x:204.2,y:212.5,alpha:1},16,cjs.Ease.get(0.01)).to({regX:41.3,rotation:-39.8,x:277,y:193.9},25,cjs.Ease.get(0.01)).to({regX:41.7,regY:42.6,rotation:-44.8,x:307.3,y:150.5},20,cjs.Ease.get(0.01)).to({regX:41.1,regY:42.8,rotation:-49.8,x:285.5,y:100.7},21).to({regY:42.5,scaleX:0.46,scaleY:0.45,rotation:0,skewX:3,skewY:-1.8,x:300.8,y:108.5},18,cjs.Ease.get(0.01)).wait(5));

	// imageLoader
	this.instance_4 = new lib._6_1_1_1();
	this.instance_4.setTransform(67,31,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67,31,355.1,355.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;