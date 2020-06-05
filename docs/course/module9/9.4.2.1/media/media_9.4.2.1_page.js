//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"9_4_2_1.jpg",
							x:57.5,
							y:32, 
							width:355, 
							height:355,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:122.35,
							y:96.85, 
							width:104,
							height:17,
							size:12,
							color:"#FFFFFF",
							textAlign:"left"},
							{compId:"ID_txt02",
							x:286.3,
							y:211.85, 
							width:104,
							height:17,
							color:"#FFFFFF",
							size:12,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:242.3,
							y:339.85, 
							width:104,
							height:17,
							size:12,
							color:"#FFFFFF",
							textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);