
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
							y:382, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"9_2_1_1_A.jpg",
							x:50,
							y:29, 
							width:340,
							height:340,
							type:"STD"}];								
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
	var slide_2_images = [{name:"9_2_1_1_B.jpg",
							x:50,
							y:29, 
							width:340,
							height:340,
							type:"STD"}];					
	var slide_2_texts = [{compId:"ID_s2_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:245,
							y:292.85, 
							width:104,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_s2_txt02",
							x:315.3,
							y:264.85, 
							width:68,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_s2_txt03",
							x:320,
							y:175.85, 
							width:59,
							height:17,
							size:12,
							textAlign:"right"},
							{compId:"ID_s2_txt07",
							x:310,
							y:150, 
							width:59,
							height:17,
							size:12,
							textAlign:"right"}];							
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
