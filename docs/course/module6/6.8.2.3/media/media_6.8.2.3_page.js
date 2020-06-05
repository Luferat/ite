//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"6_8_2_3.jpg",
							x:15,
							y:55, 
							width:440.05, 
							height:297.8,
							type:"STD"},
						{name:"highlight.png",
							x:214,
							y:243.3, 
							width:89, 
							height:23,
							type:""}];
							
	var slide_texts = [{compId:"ID_s1_title",
							x:11.35,
							y:7.85, 
							width:448.1,
							height:17,
							size:16,
							color:"#000000",
							textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);