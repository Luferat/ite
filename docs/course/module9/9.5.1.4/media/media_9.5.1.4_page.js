//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"9_5_1_4.jpg",
							x:65,
							y:102, 
							width:337, 
							height:120,
							type:""}];
							
	var slide_texts = [{compId:"ID_title_01",
							 x:87,
							 y:111,
							 width:200,
							 height:17,
							 size:12,
							 textAlign:"left"},
						 {compId:"ID_body01",
							 x:79,
							 y:140,
							 width:282,
							 height:200,
							 size:12,
							 textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
