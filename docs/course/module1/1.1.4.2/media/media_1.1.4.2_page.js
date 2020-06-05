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
	var slide_1_images = [{name:"1_1_4_2_A.jpg",
							x:50,
							y:30, 
							width:340,
							height:340,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:69.35,
							y:214.85, 
							width:151,
							height:17,
							size:12,
							color:"white",
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:243.3,
							y:221.85, 
							width:104,
							height:17,
							size:12,
							color:"white",
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:76.35,
							y:313.85, 
							width:104,
							height:17,
							size:12,
							color:"white",
							textAlign:"center"}
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"1_1_4_2_B.jpg",
							x:50,
							y:30, 
							width:340,
							height:340,
							type:"STD"}];								
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
	var slide_3_images = [{name:"1_1_4_2_C.jpg",
							x:50,
							y:30, 
							width:340,
							height:340,
							type:"STD"}];								
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
										
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



