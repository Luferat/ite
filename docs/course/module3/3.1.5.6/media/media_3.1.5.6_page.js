//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"3_1_5_6.jpg",
        x:75,
        y:49,
        width:340,
        height:340,
        type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


// called from body onload event in media/index.html
function init() {
	// code below adds the html5 graphic from Flash CS6 to the page
	canvas = document.getElementById("canvas");
	exportRoot = new lib.main();

	stage = new Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	Ticker.setFPS(24);
	Ticker.addListener(stage);
}



loadScript("../../../common/scripts/swfobject.js", registerSWF);


// code below is needed for html5 content from Flash CS6
loadScript("../../../common/scripts/createJS_bundle.min.js", null);
loadScript("media_3.1.5.6_graphic.js", null);
