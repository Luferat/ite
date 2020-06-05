//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"11_1_1_1.jpg",
							x:65,
							y:92, 
							width:337, 
							height:322,
							type:""}];
							
	var slide_texts = [{compId:"ID_title_01",
							 x:93,
							 y:108,
							 width:200,
							 height:17,
							 size:12,
							 textAlign:"left"},
						 {compId:"ID_body01",
							 x:85,
							 y:133,
							 width:200,
							 height:200,
							 size:12,
							 textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
