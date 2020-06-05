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
	var slide_1_images = [{name:"1_2_4_2_s1_A.jpg",
							x:62.30,
							y:40, 
							width:315.50,
							height:316.95,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"1_2_4_2_s2_A.jpg",
							x:13.25,
							y:50, 
							width:413.55,
							height:291.95,
							type:"STD"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:13,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"1_2_4_2_s3_A.jpg",
							x:21.15,
							y:50, 
							width:397.75,
							height:291.95,
							type:"STD"}];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"1_2_4_2_s4_A.jpg",
							x:16.20,
							y:99, 
							width:198,
							height:198,
							type:"STD"},
							{name:"1_2_4_2_s4_B.jpg",
							x:229.20,
							y:99, 
							width:198,
							height:198,
							type:"STD"}];								
	var slide_4_texts = [{compId:"ID_s4_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
							
	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"1_2_4_2_s5_A.jpg",
							x:192.30,
							y:45.95, 
							width:236.60,
							height:160.05,
							type:"STD"},
							{name:"1_2_4_2_s5_B.jpg",
							x:13.70,
							y:223, 
							width:233,
							height:126,
							type:"STD"}];	
														
	var slide_5_texts = [{compId:"ID_s5_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};
							
	var slide_6_type = "IMAGE";
	var slide_6_images = [{name:"1_2_4_2_s6_A.jpg",
							x:90.50,
							y:39.15, 
							width:259.05,
							height:124.85,
							type:"STD"},
							{name:"1_2_4_2_s6_B.jpg",
							x:91.45,
							y:177, 
							width:257.10,
							height:185,
							type:"STD"}];								
	var slide_6_texts = [{compId:"ID_s6_title",
							x:13,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,
							texts:slide_6_texts};
							
	var slide_7_type = "IMAGE";
	var slide_7_images = [{name:"1_2_4_2_s7_A.jpg",
							x:11.05,
							y:119.10, 
							width:237.25,
							height:173,
							type:"STD"},
							{name:"1_2_4_2_s7_B.jpg",
							x:259.05,
							y:119.10, 
							width:173,
							height:173,
							type:"STD"}
							];								
	var slide_7_texts = [{compId:"ID_s7_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"},
							{compId:"ID_s7_txt01",
							x:260.3,
							y:155.85,
							width:171,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s7_txt02",
							x:260.3,
							y:214.85,
							width:171,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s7_txt03",
							x:260.3,
							y:271.85,
							width:171,
							height:17,
							size:12,
							textAlign:"center"
							}];							
	var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							images:slide_7_images,
							texts:slide_7_texts};
							
	var slide_8_type = "IMAGE";
	var slide_8_images = [{name:"1_2_4_2_s8_A.jpg",
							x:62.30,
							y:40, 
							width:315.50,
							height:315.50,
							type:"STD"}];								
	var slide_8_texts = [{compId:"ID_s8_title",
							x:13,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_8_object = {templateType:slide_8_type,
							x:0,
							y:0,
							images:slide_8_images,
							texts:slide_8_texts};
							
	var slide_9_type = "IMAGE";
	var slide_9_images = [{name:"1_2_4_2_s9_A.jpg",
							x:62.30,
							y:40, 
							width:315.50,
							height:315.50,
							type:"STD"}];								
	var slide_9_texts = [{compId:"ID_s9_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_9_object = {templateType:slide_9_type,
							x:0,
							y:0,
							images:slide_9_images,
							texts:slide_9_texts};
							
	var slide_10_type = "IMAGE";
	var slide_10_images = [{name:"1_2_4_2_s10_A.jpg",
							x:62.30,
							y:40, 
							width:315.50,
							height:315.50,
							type:"STD"}];								
	var slide_10_texts = [{compId:"ID_s10_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"},
							{compId:"ID_s10_txt01",
							x:92,
							y:293.85,
							width:73,
							height:17,
							size:10,
							textAlign:"center"
							},
							{compId:"ID_s10_txt02",
							x:125,
							y:313.85,
							width:73,
							height:17,
							size:10,
							textAlign:"center"
							},
							{compId:"ID_s10_txt03",
							x:150,
							y:293.85,
							width:73,
							height:17,
							size:10,
							textAlign:"center"
							},{compId:"ID_s10_txt04",
							x:186.8,
							y:329.85,
							width:73,
							height:17,
							size:10,
							textAlign:"center"
							},
							{compId:"ID_s10_txt05",
							x:230,
							y:291.85,
							width:109,
							height:17,
							size:10,
							textAlign:"center"
							}];							
	var slide_10_object = {templateType:slide_10_type,
							x:0,
							y:0,
							images:slide_10_images,
							texts:slide_10_texts};
										
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object,slide_8_object,slide_9_object,slide_10_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



