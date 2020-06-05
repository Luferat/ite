//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"11_3_1_2.jpg",
							x:50,
							y:70, 
							width:390, 
							height:360,
							type:""}];
							
	var slide_texts = [{compId:"ID_title_01",
							 x:95,
							 y:87,
							 width:200,
							 height:17,
							 size:12,
							 textAlign:"left"},
						 {compId:"ID_body01",
							 x:85,
							 y:114,
							 width:400,
							 height:200,
							 size:12,
							 textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
