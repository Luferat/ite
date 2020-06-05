loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH=470;
var STAGE_HEIGHT=400;

function getData(){
	var template_type = "MULTI_BAR";
	var commonTexts = [{compId:"ID_inst",
							x:5,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
						  
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"10_1_2_2_A.jpg",
							x:5.75,
							y:36.1, 
							width:428,
							height:331.35,
							type:"STD"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"10_1_2_2_B.jpg",
							x:7.05,
							y:50.6, 
							width:426.5,
							height:284.3,
							type:"STD"}];								
	var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
			
	var slides = [slide_2_object,slide_3_object];
	
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
	
	}