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
							x:5,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"1_1_4_1_s1.jpg",
							x:18,
							y:49, 
							width:404.9,
							height:303.7,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
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
	var slide_2_images = [{name:"1_1_4_1_s2_A.jpg",
							x:169.75,
							y:36, 
							width:259.95,
							height:173.3,
							type:"STD"},
							{name:"1_1_4_1_s2_B.jpg",
							x:9.9,
							y:174.75, 
							width:228.95,
							height:186.35,
							type:"STD"}];
							
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};	
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"1_1_4_1_s3.jpg",
							x:65.1,
							y:42.95, 
							width:309.8,
							height:309.85,
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
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"1_1_4_1_s4.jpg",
							x:65.1,
							y:42.95, 
							width:309.8,
							height:309.85,
							type:"STD"}];								
	var slide_4_texts = [{compId:"ID_s4_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
							
	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"1_1_4_1_s5.jpg",
							x:18,
							y:62, 
							width:404.9,
							height:269.4,
							type:"STD"}];								
	var slide_5_texts = [{compId:"ID_s5_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};
							
														
	
										
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



