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
	var slide_1_images = [{name:"10_2_5_1A.jpg",
							x:61.05,
							y:42.55, 
							width:314.9,
							height:314.9,
							type:"STD"}];				
	var slide_1_texts = [{compId:"ID_s1_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							
							{compId:"ID_s1_text01",
							x:69.05,
							y:72.35, 
							width:314.9,
							height:17,
							size:14,
							color:"white",
							textAlign:"center"},
							
							{compId:"ID_s1_text04",
							x:72.05,
							y:130.85, 
							width:314.9,
							height:17,
							size:14,
							color:"white",
							textAlign:"center"},
							{compId:"ID_s1_text02",
							x:68.5,
							y:170.85, 
							width:314.9,
							height:17,
							size:14,
							color:"white",
							textAlign:"center"},
							
							{compId:"ID_s1_text05",
							x:72,
							y:248.85, 
							width:314.9,
							height:17,
							size:14,
							color:"white",
							textAlign:"center"},
							
							{compId:"ID_s1_text03",
							x:68.5,
							y:312.85, 
							width:314.9,
							height:17,
							size:14,
							color:"white",
							textAlign:"center"},
							
							
														
							];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
							
							var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"10_2_5_1B.jpg",
							x:8.05,
							y:47, 
							width:420.95,
							height:309.5,
							type:"STD"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:15,
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
										
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}