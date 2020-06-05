//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"6_9_1_5.jpg",
							x:0,
							y:85, 
							width:464, 
							height:159,
							type:"NONE"},
							];
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:339,
							y:197.7, 
							width:116.8,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:163,
							y:55, 
							width:116.8,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:89.55,
							y:246, 
							width:116.8,
							height:17,
							size:12,
							textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);