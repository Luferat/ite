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
							textAlign:"left"},
						{compId:"ID_title",
							x:5,
							y:2,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"}];
	
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_table_01",
							x:14,
							y:64}];				
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							texts:slide_1_texts};
							
	
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_table_02",
							x:18,
							y:110}];				
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};
							
	var slide_3_type = "TABLE";
	var slide_3_tables = [{compId:"ID_table_03",
							x:18,
							y:96.85}];				
	var slide_3_texts = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							tables:slide_3_tables,
							texts:slide_3_texts};
							
	var slide_4_type = "TABLE";
	var slide_4_tables = [{compId:"ID_table_04",
							x:18,
							y:113.1}];				
	var slide_4_texts = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							tables:slide_4_tables,
							texts:slide_4_texts};
							
	var slide_5_type = "TABLE";
	var slide_5_tables = [{compId:"ID_table_05",
							x:18,
							y:101}];				
	var slide_5_texts = [];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							tables:slide_5_tables,
							texts:slide_5_texts};
							
	var slide_6_type = "TABLE";
	var slide_6_tables = [{compId:"ID_table_06",
							x:18,
							y:100}];				
	var slide_6_texts = [];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							tables:slide_6_tables,
							texts:slide_6_texts};		
																
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}

