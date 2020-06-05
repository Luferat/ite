//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"6_9_1_2.jpg",
							x:0,
							y:30, 
							width:456, 
							height:259.75,
							type:"NONE"}];
							
	var slide_texts = [{compId:"ID_title",
							x:173,
							y:0, 
							width:280,
							height:40,
							size:15,
							textAlign:"left"},
							{compId:"ID_txt01",
							x:5.2,
							y:298.65, 
							width:105.95,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt02",
							x:140.2,
							y:298.65, 
							width:82.95,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:275,
							y:275.65, 
							width:110.95,
							height:17,
							size:12,
							textAlign:"center"},
							
							{compId:"ID_txt05",
							x:336.15,
							y:99, 
							width:110.95,
							height:17,
							size:12,
							
							textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);