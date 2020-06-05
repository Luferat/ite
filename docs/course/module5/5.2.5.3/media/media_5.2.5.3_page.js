//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"5_2_5_3.jpg",
							x:95.4,
							y:40.95, 
							width:279.25, 
							height:339.1,
							type:"STD"},
		{name:"5_2_5_3a.png",
							x:128,
							y:239, 
							width:165, 
							height:21,
							type:""}];
							
	var slide_texts = [{compId:"ID_title",
							x:12,
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
