
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.slide1animation = function(mode,startPosition,loop,_parent) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 5
	//this.text = new cjs.Text("Clockwise", "bold 16px Arial");
	//this.text.textAlign = "center";
	//this.text.lineHeight = 18;
	//this.text.setTransform(186.1,180.9);
	
	this.text1 = new TextComp({compId:"ID_s1_txt01",
								x:0,
								y:0,
								width:250,
								height:20,
								text:_parent.getTextValue("ID_s1_txt01"),
								divId:"animeText",
								size:16});
	this.addChild(this.text1);
	
	this.text2 = new TextComp({compId:"ID_s1_txt02",
								x:0,
								y:0,
								width:250,
								height:20,
								text:_parent.getTextValue("ID_s1_txt02"),
								divId:"animeText",
								size:16});
	this.addChild(this.text2);
	this.text2.visible = false;
	
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1,p:{regX:41.3,x:227.39999999999998,y:183.2,text:"",lineWidth:78}}]}).to({state:[{t:this.text2,p:{visible:true, regX:70.5,x:360.65000000000003,y:232.9,text:"",lineWidth:137}}]},45).wait(91));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3CFBD").s().p("At4H0Ib8gCI8HvlIALPn").cp();
	this.shape.setTransform(218.5,310.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(136));

	// Layer 4
	this.instance = new lib.FlatheadScrewdriver0001();
	this.instance.setTransform(182.5,62.5);

	this.instance_1 = new lib.FlatheadScrewdriver0002();
	this.instance_1.setTransform(182.5,62.5);

	this.instance_2 = new lib.FlatheadScrewdriver0003();
	this.instance_2.setTransform(182.5,62.5);

	this.instance_3 = new lib.FlatheadScrewdriver0004();
	this.instance_3.setTransform(182.5,62.5);

	this.instance_4 = new lib.FlatheadScrewdriver0005();
	this.instance_4.setTransform(182.5,62.5);

	this.instance_5 = new lib.FlatheadScrewdriver0006();
	this.instance_5.setTransform(182.5,62.5);

	this.instance_6 = new lib.FlatheadScrewdriver0007();
	this.instance_6.setTransform(182.5,62.5);

	this.instance_7 = new lib.FlatheadScrewdriver0008();
	this.instance_7.setTransform(182.5,62.5);

	this.instance_8 = new lib.FlatheadScrewdriver0009();
	this.instance_8.setTransform(182.5,62.5);

	this.instance_9 = new lib.FlatheadScrewdriver0010();
	this.instance_9.setTransform(182.5,62.5);

	this.instance_10 = new lib.FlatheadScrewdriver0011();
	this.instance_10.setTransform(182.5,62.5);

	this.instance_11 = new lib.FlatheadScrewdriver0046();
	this.instance_11.setTransform(182.5,62.5);

	this.instance_12 = new lib.FlatheadScrewdriver0047();
	this.instance_12.setTransform(182.5,62.5);

	this.instance_13 = new lib.FlatheadScrewdriver0048();
	this.instance_13.setTransform(182.5,62.5);

	this.instance_14 = new lib.FlatheadScrewdriver0049();
	this.instance_14.setTransform(182.5,62.5);

	this.instance_15 = new lib.FlatheadScrewdriver0050();
	this.instance_15.setTransform(182.5,62.5);

	this.instance_16 = new lib.FlatheadScrewdriver0051();
	this.instance_16.setTransform(182.5,62.5);

	this.instance_17 = new lib.FlatheadScrewdriver0052();
	this.instance_17.setTransform(182.5,62.5);

	this.instance_18 = new lib.FlatheadScrewdriver0053();
	this.instance_18.setTransform(182.5,62.5);

	this.instance_19 = new lib.FlatheadScrewdriver0054();
	this.instance_19.setTransform(182.5,62.5);

	this.instance_20 = new lib.FlatheadScrewdriver0055();
	this.instance_20.setTransform(182.5,62.5);

	this.instance_21 = new lib.FlatheadScrewdriver0056();
	this.instance_21.setTransform(182.5,62.5);

	this.instance_22 = new lib.FlatheadScrewdriver0057();
	this.instance_22.setTransform(182.5,62.5);

	this.instance_23 = new lib.FlatheadScrewdriver0058();
	this.instance_23.setTransform(182.5,62.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},35).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).wait(79));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#D5D5D5"],[0,1],-39.1,8.2,-179.5,181.3).s().p("AcIZAMg4PAAAMAAAgx/MA4PAAAMAAAAx/").cp();
	this.shape_1.setTransform(308.5,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(128.5,40.5,360,320);


// symbols:
(lib.FlatheadScrewdriver0001 = function() {
	this.initialize(img.FlatheadScrewdriver0001);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0002 = function() {
	this.initialize(img.FlatheadScrewdriver0002);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0003 = function() {
	this.initialize(img.FlatheadScrewdriver0003);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0004 = function() {
	this.initialize(img.FlatheadScrewdriver0004);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0005 = function() {
	this.initialize(img.FlatheadScrewdriver0005);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0006 = function() {
	this.initialize(img.FlatheadScrewdriver0006);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0007 = function() {
	this.initialize(img.FlatheadScrewdriver0007);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0008 = function() {
	this.initialize(img.FlatheadScrewdriver0008);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0009 = function() {
	this.initialize(img.FlatheadScrewdriver0009);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0010 = function() {
	this.initialize(img.FlatheadScrewdriver0010);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0011 = function() {
	this.initialize(img.FlatheadScrewdriver0011);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0046 = function() {
	this.initialize(img.FlatheadScrewdriver0046);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0047 = function() {
	this.initialize(img.FlatheadScrewdriver0047);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0048 = function() {
	this.initialize(img.FlatheadScrewdriver0048);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0049 = function() {
	this.initialize(img.FlatheadScrewdriver0049);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0050 = function() {
	this.initialize(img.FlatheadScrewdriver0050);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0051 = function() {
	this.initialize(img.FlatheadScrewdriver0051);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0052 = function() {
	this.initialize(img.FlatheadScrewdriver0052);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0053 = function() {
	this.initialize(img.FlatheadScrewdriver0053);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0054 = function() {
	this.initialize(img.FlatheadScrewdriver0054);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0055 = function() {
	this.initialize(img.FlatheadScrewdriver0055);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0056 = function() {
	this.initialize(img.FlatheadScrewdriver0056);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0057 = function() {
	this.initialize(img.FlatheadScrewdriver0057);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);


(lib.FlatheadScrewdriver0058 = function() {
	this.initialize(img.FlatheadScrewdriver0058);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,275);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;