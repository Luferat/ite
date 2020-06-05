//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"6_8_2_1_A.jpg",
							x:15,
							y:37, 
							width:213.1, 
							height:142.35,
							type:"STD"},
							{name:"6_8_2_1_B.jpg",
							x:243.95,
							y:37, 
							width:213.1, 
							height:142.35,
							type:"STD"},
							{name:"6_8_2_1_C.jpg",
							x:128.95,
							y:215, 
							width:213.1, 
							height:142.35,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);