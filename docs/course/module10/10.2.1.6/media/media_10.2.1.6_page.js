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
							x:0,
							y:390, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_table01",
							x:17,
							y:34, 
							width:400,
							height:224}];				
	var slide_1_texts = [{compId:"ID_s1_title",
							x:0,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							texts:slide_1_texts};
							
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_table02",
							x:17,
							y:32, 
							width:400,
							height:224}];				
	var slide_2_texts = [{compId:"ID_s2_title",
							x:0,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};
							
	var slide_3_type = "TABLE";
	var slide_3_tables = [{compId:"ID_table03",
							x:20,
							y:82.55, 
							width:400,
							height:224}];				
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
							tables:slide_3_tables,
							texts:slide_3_texts};
							
	
	var slides = [slide_1_object,slide_2_object,slide_3_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



