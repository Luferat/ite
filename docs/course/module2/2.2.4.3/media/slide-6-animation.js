(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.slide6animation = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.RetrievingToolsAnimation();
	this.instance.setTransform(250,256.6,1,1,0,0,0,250,256.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,5,5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,320.1);


// symbols:
(lib.plier_close = function() {
	this.initialize(img.plier_close);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,203);


(lib.plier_open = function() {
	this.initialize(img.plier_open);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,203);


(lib.tweeser_close = function() {
	this.initialize(img.tweeser_close);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,167);


(lib.tweeser_open = function() {
	this.initialize(img.tweeser_open);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,167);


(lib.RetrievingTools = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// tweeser
	this.instance = new lib.tweeser_open();
	this.instance.setTransform(298,0,0.998,0.998,53.4);

	this.instance_1 = new lib.tweeser_close();
	this.instance_1.setTransform(310,20,0.998,0.998,58);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:0}}]}).to({state:[{t:this.instance,p:{y:20}}]},31).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance,p:{y:20}}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance,p:{y:20}}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance,p:{y:20}}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance,p:{y:20}}]},3).to({state:[{t:this.instance,p:{y:20}}]},59).wait(1));

	// plier
	this.instance_2 = new lib.plier_close();
	this.instance_2.setTransform(122.5,32.5,0.996,0.996,35.6);

	this.instance_3 = new lib.plier_open();
	this.instance_3.setTransform(122.5,72.5,0.996,0.996,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:32.5}}]}).to({state:[{t:this.instance_2,p:{y:72.5}}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_2,p:{y:72.5}}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_2,p:{y:72.5}}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_2,p:{y:72.5}}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_2,p:{y:72.5}}]},3).to({state:[{t:this.instance_2,p:{y:72.5}}]},87).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,0,442.1,400);


(lib.RetrievingToolsAnimation = function() {
	this.initialize();

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AbM4/QAIABAHACQAIACAHAEQAGAEAGAFQAFAGAEAGQAEAHACAIQACAHABAIMAAAAwHQgBAIgCAHQgCAIgEAHQgEAGgFAGQgGAFgGAEQgHAEgIACQgHACgIABMg2XAAAQg2gGgGg2MAAAgwHQABgIACgHQACgIAEgHQAEgGAFgGQAGgFAGgEQAHgEAIgCQAHgCAIgBMA2XAAA").cp();
	mask.setTransform(180,160);

	// animation
	this.photo = new lib.RetrievingTools();
	this.photo.setTransform(176.9,176.8,0.8,0.8,0,0,0,221.1,221);
	this.photo.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);

	this.photo.mask = mask;
	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#D5D5D5"],[0,1],-39.1,8.2,-179.5,181.3).s().p("AcIZAMg4PAAAMAAAgx/MA4PAAAMAAAAx/").cp();
	this.shape.setTransform(180,160);

	this.shape.mask = mask;
	this.addChild(this.shape,this.photo);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,320);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;