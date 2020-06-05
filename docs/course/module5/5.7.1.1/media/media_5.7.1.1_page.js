//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"5.7.1.1a.jpg",
							x:261.05,
							y:47, 
							width:158, 
							height:200,
							type:"STD"},
							{name:"5.7.1.1b.jpg",
							x:157.6,
							y:102, 
							width:149, 
							height:200,
							type:"STD"},
							{name:"5.7.1.1c.jpg",
							x:51,
							y:157, 
							width:146.45, 
							height:200,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_title",
							x:10,
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
