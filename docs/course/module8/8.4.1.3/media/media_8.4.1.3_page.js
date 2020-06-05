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
							y:390, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"8_4_1_3_A.jpg",
							x:3,
							y:38.2, 
							width:426.05,
							height:319.55,
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
							
							
							
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_table",
							x:12,
							y:58.35}];				
	var slide_2_texts = [{compId:"ID_title",
							x:40,
							y:0, 
							width:430,
							height:17,
                            size:16,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};
							
							
	
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"8_4_1_3_C.jpg",
							x:4,
							y:40, 
							width:424.15,
							height:318.1,
							type:"STD"},
							{name:"8_4_1_3_Ca.png",
							x:143,
							y:202, 
							width:276,
							height:175,
							type:""}];					
	var slide_3_texts = [{compId:"ID_s3_title",
							x:15,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:124,
							y:368, 
							width:160,
							height:17,
							size:12,
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
