//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"1_1_2_9.jpg",
							x:73,
							y:42, 
							width:324, 
							height:324,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_title",
							 x:5,
							 y:2,
							 width:460,
							 height:17,
							 size:16,
							 textAlign:"center"},
							 {compId:"ID_txt01",
							 x:123.3,
							 y:65.85,
							 width:212,
							 height:17,
							 size:12,
							 textAlign:"center"},
							 {compId:"ID_txt02",
							 x:77.45,
							 y:336.95,
							 width:110,
							 height:17,
							 size:12,
							 textAlign:"center"},
							 {compId:"ID_txt03",
							 x:258.4,
							 y:326.95,
							 width:134.15,
							 height:17,
							 size:12,
							 textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
