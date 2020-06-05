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
	
					  
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"5.3.1.3a.jpg",
							x:80,
							y:40, 
							width:262.85,
							height:320,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:-10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
										
					  
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"5.3.1.3b.jpg",
							x:65.75,
							y:40, 
							width:308.55,
							height:320,
							type:"STD"}];								
	var slide_2_texts = [{compId:"ID_s2_title",
							x:-10,
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
							
	
			
	var slides = [slide_1_object,slide_2_object];
	
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
	
	}