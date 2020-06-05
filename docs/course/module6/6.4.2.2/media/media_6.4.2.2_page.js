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
	var slide_1_images = [{name:"6_4_2_2_s1.jpg",
							x:63.5,
							y:45, 
							width:313,
							height:313,
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
	var slide_2_images = [{name:"6_4_2_2_s2.jpg",
							x:7.5,
							y:64, 
							width:424.85,
							height:270,
							type:"STD"}];				
	var slide_2_texts = [{compId:"ID_s2_title",
							x:14.95,
							y:2, 
							width:423,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:22,
							y:163, 
							width:102,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s2_txt02",
							x:175,
							y:155, 
							width:102,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s2_txt03",
							x:302,
							y:191, 
							width:102,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s2_txt04",
							x:301,
							y:268, 
							width:102,
							height:17,
							size:12,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
							
							var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"6_4_2_2_s3.jpg",
							x:7.4,
							y:64, 
							width:424.85,
							height:270.9,
							type:"STD"}];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:28,
							y:80, 
							width:123,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s3_txt02",
							x:24,
							y:260, 
							width:123,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s3_txt03",
							x:249,
							y:273, 
							width:123,
							height:17,
							size:12,
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