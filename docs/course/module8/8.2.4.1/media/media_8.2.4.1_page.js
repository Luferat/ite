loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [{compId:"ID_inst",
							x:4.95,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"8.2.4.1a.jpg",
							x:18,
							y:61, 
							width:404.9,
							height:252.8,
							type:"STD"},
							{name:"8_2_4_1a1.png",
							x:183.3,
							y:125, 
							width:243,
							height:35,
							type:""}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"8.2.4.1b.jpg",
							x:25,
							y:37, 
							width:380,
							height:284.8,
							type:"STD"},
							{name:"8.2.4.1b1.png",
							x:27,
							y:278, 
							width:48,
							height:70,
							type:""},
							{name:"8.2.4.1b2.png",
							x:75,
							y:278, 
							width:97,
							height:67,
							type:""}];					
	var slide_2_texts = [{compId:"ID_s2_title",
							x:8,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:10.85,
							y:342.85, 
							width:89,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s2_txt02",
							x:171.35,
							y:329.85, 
							width:140,
							height:17,
							size:12,
							textAlign:"left"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"8.2.4.1c.jpg",
							x:0,
							y:61, 
							width:429,
							height:300,
							type:"STD"}];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
											
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}
