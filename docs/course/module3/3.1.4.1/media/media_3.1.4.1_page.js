//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"3_1_4_1.jpg",
							x:68.05,
							y:33, 
							width:340, 
							height:340,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_txt01",
							x:88.35,
							y:177.85, 
							width:104,
							height:17,
							size:12,
							color:"0xFFFFFF",
							textAlign:"center"},							
							{compId:"ID_txt02",
							x:268.3,
							y:175.85, 
							width:104,
							height:17,
							size:12,
							color:"0xFFFFFF",
							textAlign:"center"},
							{compId:"ID_txt03",
							x:202.3,
							y:313.85, 
							width:104,
							height:17,
							size:12,
							color:"0xFFFFFF",
							textAlign:"center"},
							{compId:"ID_title",
							 x:15,
							 y:2,
							 width:460,
							 height:17,
							 size:16,
							 textAlign:"center"}
							];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);