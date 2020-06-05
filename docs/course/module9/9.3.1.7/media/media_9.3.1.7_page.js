//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"9_3_1_7.jpg",
							x:61.75,
							y:30.9, 
							width:345.45, 
							height:357.1,
							type:"STD"},{name:"highlight.png",
							x:278,
							y:316, 
							width:115, 
							height:40,
							type:""}];
							
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
