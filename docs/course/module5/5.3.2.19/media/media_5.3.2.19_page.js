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
							textAlign:"left"},
							];
	
					  
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"5_3_2_19.jpg",
							x:10,
							y:47, 
							width:420, 
							height:295,
							type:"STD"},
							];								
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
							
							
							
							
	var slide_2_type = "TABLE";
	var slide_2_images = [{name:"icons.png",
							x:79.45,
							y:145.1, 
							width:23.75, 
							height:130.05,
							type:""}
							];
	var slide_2_tables = [{compId:"ID_s2_title",
							x:25,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							
							];				
	var slide_2_texts = [{compId:"ID_s2_table",
							x:15.35,
							y:116.35, 
							width:408.95,
							height:170.85,
							size:16,
							textAlign:"center"},
							];	
						
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_images,
							tables:slide_2_tables,
							texts:slide_2_texts,
							};
										
					  
	var slides = [slide_1_object,slide_2_object];
	
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
	
	}