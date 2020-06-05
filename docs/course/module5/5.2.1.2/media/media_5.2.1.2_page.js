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
	
					  
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_table",
							x:38,
							y:41.55, 
							width:404.5,
							height:314.9}];				
	var slide_1_texts = [{compId:"ID_s1_title",
							x:25,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							texts:slide_1_texts};
										
					  
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"5_2_1_2_s2.jpg",
							x:15.85,
							y:45.9, 
							width:409.45,
							height:307.9,
							type:"STD"}];								
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
	var slide_3_images = [{name:"5_2_1_2_s3.jpg",
							x:16.65,
							y:50.55, 
							width:407.8,
							height:294.05,
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