
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
	var slide_1_images = [{name:"7_2_2_2_s1.jpg",
							x:12,
							y:51, 
							width:404.9,
							height:303.85,
							type:"STD"},
							{name:"7_2_2_2_s1a.png",
							x:49,
							y:77, 
							width:152,
							height:44,
							type:""},
							{name:"7_2_2_2_s1a.png",
							x:235,
							y:77, 
							width:152,
							height:44,
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
	var slide_2_images = [{name:"7_2_2_2_s2.jpg",
							x:18,
							y:51, 
							width:404.9,
							height:303.85,
							type:"STD"},
							{name:"7_2_2_2_s2a.png",
							x:150,
							y:137, 
							width:48,
							height:48,
							type:""},
							{name:"7_2_2_2_s2a.png",
							x:220,
							y:137, 
							width:48,
							height:48,
							type:""}];					
	var slide_2_texts = [{compId:"ID_s2_title",
							x:10,
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
	var slide_3_images = [{name:"7_2_2_2_s3.jpg",
							x:18,
							y:51, 
							width:404.9,
							height:303.85,
							type:"STD"},
							{name:"7_2_2_2_s3a.png",
							x:27,
							y:83.15, 
							width:48,
							height:256,
							type:""},
							{name:"7_2_2_2_s3a.png",
							x:369,
							y:82, 
							width:48,
							height:256,
							type:""}];					
	var slide_3_texts = [{compId:"ID_s3_title",
							x:10,
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

