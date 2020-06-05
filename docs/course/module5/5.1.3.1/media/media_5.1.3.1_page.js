//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"5.1.3.1a.jpg",
							x:174.35,
							y:58.4, 
							width:121.35, 
							height:134.4,
							type:"STD"},
							{name:"5.1.3.1b.jpg",
							x:256.7,
							y:201.2, 
							width:98.55, 
							height:134.4,
							type:"STD"},
							{name:"5.1.3.1c.jpg",
							x:114.75,
							y:201.2, 
							width:133.5, 
							height:134.4,
							type:"STD"},
							{name:"question_icon2.png",
							x:144.8,
							y:68.5, 
							width:173.3, 
							height:264.8,
							type:""}
							];
							
	var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:173,
							y:334.3, 
							width:204,
							height:30,
							size:24,
							color:"#067eb2",
							textAlign:"left"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
