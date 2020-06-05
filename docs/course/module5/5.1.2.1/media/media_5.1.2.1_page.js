//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"5.1.2.1.jpg",
							x:42,
							y:39, 
							width:380.85, 
							height:168.9,
							type:"STD"},
							{name:"5.1.2.1_B.jpg",
							x:42,
							y:218.75, 
							width:196.35, 
							height:171.65,
							type:"STD"},
							{name:"5.1.2.1_C.jpg",
							x:251.7,
							y:218.75, 
							width:170, 
							height:171.65,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_title",
							x:5,
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
