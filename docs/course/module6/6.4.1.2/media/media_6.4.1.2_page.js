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
	var slide_1_images = [{name:"6_4_1_2_s1_A.jpg",
							x:5,
							y:96.2, 
							width:199,
							height:199,
							type:"STD"},
							{name:"6_4_1_2_s1_B.jpg",
							x:218,
							y:114.35, 
							width:216.3,
							height:165.2,
							type:"NONE"}];								
	var slide_1_texts = [{compId:"ID_s1_txt01",
							x:20,
							y:75, 
							width:195,
							height:17,
							size:12,
							color:0x393536,
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:226,
							y:75, 
							width:195,
							height:17,
							size:12,
							color:0x393536,
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:226.75,
							y:212, 
							width:195,
							height:17,
							size:12,
							color:0x393536,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"6_4_1_2_s2_A.jpg",
							x:11.4,
							y:93, 
							width:202.2,
							height:214.95,
							type:"NONE"},
							{name:"6_4_1_2_s2_B.jpg",
							x:233.1,
							y:94.8, 
							width:199.3,
							height:214.8,
							type:"STD"}];				
	var slide_2_texts = [{compId:"ID_s2_txt01",
							x:240,
							y:71, 
							width:191.6,
							height:17,
							size:12,
							color:0x393536,
							textAlign:"center"},
							];							
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