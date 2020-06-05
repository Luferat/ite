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
	var slide_1_images = [{name:"6_3_2_5_s1_A.jpg",
							x:5.7,
							y:78, 
							width:210.1,
							height:234,
							type:"STD"},
							{name:"6_3_2_5_button_s1.png",
							x:18.6,
							y:140.1, 
							width:108.2,
							height:16.45,
							type:""},
							{name:"6_3_2_5_s1_B.jpg",
							x:223.8,
							y:78, 
							width:210.15,
							height:234,
							type:"STD"},
							{name:"6_3_2_5_button_s1.png",
							x:236.4,
							y:140.1, 
							width:108.2,
							height:16.45,
							type:""},
							{name:"6_3_2_5_button_s3.png",
							x:18,
							y:205, 
							width:147,
							height:35,
							type:""},
							{name:"6_3_2_5_button_s3.png",
							x:235,
							y:205, 
							width:147,
							height:35,
							type:""}
							];		
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
	var slide_2_images = [{name:"6_3_2_5_s2.jpg",
							x:79.95,
							y:44, 
							width:280.3,
							height:312.05,
							type:"STD"},
							{name:"6_3_2_5_button_s2.png",
							x:101.7,
							y:220.1, 
							width:181.4,
							height:16.45,
							type:""}];								
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
	var slide_3_images = [{name:"6_3_2_5_s3.jpg",
							x:79.9,
							y:44, 
							width:280.2,
							height:312.05,
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



