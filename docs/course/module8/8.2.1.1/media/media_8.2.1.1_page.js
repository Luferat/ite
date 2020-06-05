//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"8_2_1_1_A.jpg",
							x:18.9,
							y:130, 
							width:222.15, 
							height:138.85,
							type:"STD"},
							{name:"8_2_1_1_B.jpg",
							x:263.9,
							y:130.05, 
							width:185.05, 
							height:138.8,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_s1_title",
							x:18.9,
							y:57.85, 
							width:222.15,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s2_title",
							x:263.9,
							y:57.85, 
							width:185.05,
							height:17,
							size:14,
							textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);