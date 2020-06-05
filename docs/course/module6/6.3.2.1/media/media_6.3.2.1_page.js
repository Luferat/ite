//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	
	var template_type = "IMAGE";
		
	var slide_images = [{name:"6_3_2_1.jpg",
							x:16.15,
							y:80, 
							width:407, 
							height:312,
							type:""}];
							
														
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:316.05,
							y:47.85, 
							width:131,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:9.35,
							y:172.85, 
							width:105,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:325.05,
							y:168.85, 
							width:131,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:171.3,
							y:234.8, 
							width:106,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:325.05,
							y:277.85, 
							width:131,
							height:17,
							size:12,
							textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
