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
	var slide_1_images = [{name:"1_2_4_1_S1_A.jpg",
							x:202,
							y:40, 
							width:229.10,
							height:175,
							type:"STD"},
							{name:"1_2_4_1_S1_B.jpg",
							x:10,
							y:180, 
							width:229.10,
							height:175,
							type:"STD"}
							];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
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
	var slide_2_images = [{name:"1_2_4_1_S2_A.jpg",
							x:10,
							y:40, 
							width:229.10,
							height:175,
							type:"STD"},
							{name:"1_2_4_1_S2_B.jpg",
							x:202,
							y:180, 
							width:229.10,
							height:175,
							type:"STD"}
							];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
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
	var slide_3_images = [{name:"1_2_4_1_S3_B.jpg",
							x:210.95,
							y:83, 
							width:220,
							height:273.50,
							type:"STD"},
							{name:"1_2_4_1_S3_A.jpg",
							x:10.05,
							y:39, 
							width:220,
							height:273.50,
							type:"STD"}							
							];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
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
	var slide_4_images = [{name:"1_2_4_1_S4_A.jpg",
							x:202,
							y:40, 
							width:229.10,
							height:175,
							type:"STD"},
							{name:"1_2_4_1_S4_B.jpg",
							x:10,
							y:180, 
							width:229.10,
							height:175,
							type:"STD"}];								
	var slide_4_texts = [{compId:"ID_s4_title",
							x:5,
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
	var slide_5_images = [{name:"1_2_4_1_S5_A.jpg",
							x:10,
							y:40, 
							width:229.10,
							height:175,
							type:"STD"},
							{name:"1_2_4_1_S5_B.jpg",
							x:202,
							y:180, 
							width:229.10,
							height:175,
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
	var slide_6_images = [{name:"1_2_4_1_S6_A.jpg",
							x:130,
							y:40, 
							width:290,
							height:175,
							type:"STD"},
							{name:"1_2_4_1_S6_B.jpg",
							x:20,
							y:186, 
							width:290,
							height:175,
							type:"STD"}];								
	var slide_6_texts = [{compId:"ID_s6_title",
							x:5,
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
	var slide_7_images = [{name:"1_2_4_1_S7_A.jpg",
							x:202,
							y:37, 
							width:290,
							height:175,
							type:"STD"},
							{name:"1_2_4_1_S7_B.jpg",
							x:10,
							y:185, 
							width:290,
							height:175,
							type:"STD"}
							];								
	var slide_7_texts = [{compId:"ID_s7_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"}];							
	var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							images:slide_7_images,
							texts:slide_7_texts};
							
	var slide_8_type = "IMAGE";
	var slide_8_images = [{name:"1_2_4_1_S8_A.jpg",
							x:13,
							y:27, 
							width:187,
							height:143,
							type:"STD"},{name:"1_2_4_1_S8_B.jpg",
							x:234,
							y:27, 
							width:187,
							height:143,
							type:"STD"},{name:"1_2_4_1_S8_C.jpg",
							x:13,
							y:202, 
							width:187,
							height:143,
							type:"STD"},{name:"1_2_4_1_S8_D.jpg",
							x:234,
							y:202, 
							width:187,
							height:143,
							type:"STD"}];								
	var slide_8_texts = [{compId:"ID_s8_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"},
							{compId:"ID_s8_txt01",
							x:54.5,
							y:178.85,
							width:104,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s8_txt02",
							x:275.5,
							y:178.85,
							width:104,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s8_txt03",
							x:54.5,
							y:354.85,
							width:104,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s8_txt04",
							x:275.5,
							y:354.85,
							width:104,
							height:17,
							size:12,
							textAlign:"center"
							}];							
	var slide_8_object = {templateType:slide_8_type,
							x:0,
							y:0,
							images:slide_8_images,
							texts:slide_8_texts};
							
	var slide_9_type = "IMAGE";
	var slide_9_images = [{name:"1_2_4_1_S9_A.jpg",
							x:13,
							y:27, 
							width:187,
							height:143,
							type:"STD"},{name:"1_2_4_1_S9_B.jpg",
							x:234,
							y:27, 
							width:187,
							height:143,
							type:"STD"},{name:"1_2_4_1_S9_C.jpg",
							x:13,
							y:202, 
							width:187,
							height:143,
							type:"STD"},{name:"1_2_4_1_S9_D.jpg",
							x:234,
							y:202, 
							width:187,
							height:143,
							type:"STD"}];								
	var slide_9_texts = [{compId:"ID_s9_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"},
							{compId:"ID_s9_txt01",
							x:54.5,
							y:178.85,
							width:104,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s9_txt02",
							x:275.5,
							y:178.85,
							width:104,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s9_txt03",
							x:54.5,
							y:354.85,
							width:104,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s9_txt04",
							x:275.5,
							y:354.85,
							width:104,
							height:17,
							size:12,
							textAlign:"center"
							}];							
	var slide_9_object = {templateType:slide_9_type,
							x:0,
							y:0,
							images:slide_9_images,
							texts:slide_9_texts};
							
											
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object,slide_8_object,slide_9_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



