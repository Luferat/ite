//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"11_1_3_2.jpg",
							x:5,
							y:5, 
							width:463.95, 
							height:389.15,
							type:""}];
							
	var slide_texts =  [{compId:"ID_page_header",
							 x:43,
							 y:23.65,
							 width:200,
							 height:17,
							 size:12,
							 textAlign:"left"},
							 {compId:"ID_header01",
							 x:43,
							 y:49,
							 width:200,
							 height:200,
							 size:12,
							 textAlign:"left"},
							  {compId:"ID_header02",
							 x:43,
							 y:133.35,
							 width:200,
							 height:200,
							 size:12,
							 textAlign:"left"},
							 {compId:"ID_header03",
							 x:43,
							 y:214.35,
							 width:200,
							 height:200,
							 size:12,
							 textAlign:"left"},
							 {compId:"ID_header04",
							 x:43,
							 y:315.05,
							 width:200,
							 height:200,
							 size:12,
							 textAlign:"left"}
							 ]; 
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
