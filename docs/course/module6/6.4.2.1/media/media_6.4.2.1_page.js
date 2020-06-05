//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"twistedPair.jpg",
							x:46,
							y:29.45, 
							width:156.8, 
							height:156.8,
							type:"STD"},
							{name:"coaxialCable.jpg",
							x:267.7,
							y:29.45, 
							width:156.8, 
							height:156.8,
							type:"STD"},
							{name:"fiberOptic.jpg",
							x:152.9,
							y:215.95, 
							width:156.8, 
							height:156.8,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_title",
							x:15,
							y:0, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:50.35,
							y:191.95, 
							width:148,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:277,
							y:191.95, 
							width:148,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:165.35,
							y:380.95, 
							width:148,
							height:17,
							size:12,
							textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
