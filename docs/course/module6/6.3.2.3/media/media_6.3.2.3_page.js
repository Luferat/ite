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
	
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_s1_table01",
							x:5,
							y:35, 
							width:400,
							height:224},
							{compId:"ID_s1_table02",
							x:5,
							y:160, 
							width:400,
							height:224,
							size:10},
							{compId:"ID_s3_table",
							x:5,
							y:100, 
							width:400,
							height:224,
							size:10}];	
	var slide_1_images = [{name:"6_3_2_3_S1_3.jpg",
							x:10,
							y:265, 
							width:435,
							height:110,
							type:""},
							{name:"6_3_2_3_S1_1.png",
							x:15.8,
							y:80.6, 
							width:185,
							height:120,
							type:""},
							{name:"6_3_2_3_S1_1.png",
							x:235,
							y:80.6, 
							width:180,
							height:120,
							type:""},
							{name:"6_3_2_3_S1_1a.png",
							x:172.65,
							y:61.45,
							width:75.4,
							height:25,
                            type:""},
							{name:"6_3_2_3_S1_1b.png",
							x:387,
							y:62.45,
							width:16.15,
							height:43,
							type:""}]
				
	var slide_1_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:260,
							y:90, 
							width:160,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s1_txt02",
							x:35,
							y:85,
							width:160,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_s1_txt04",
							x:28,
							y:285.1, 
							width:110,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt05",
							x:145,
							y:285.1, 
							width:97,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt06",
							x:233,
							y:285.1, 
							width:59,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt07",
							x:325,
							y:285.1, 
							width:142,
							height:17,
							size:11,
							textAlign:"left"},
							{compId:"ID_s1_txt08",
							x:40,
							y:330.6, 
							width:110,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_s1_txt09",
							x:140,
							y:330.6, 
							width:300,
							height:17,
							size:14,
							textAlign:"left"}];	
						
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							tables:slide_1_tables,
							texts:slide_1_texts};
							
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table",
							x:5,
							y:60, 
							width:400,
							height:224}];				
	var slide_2_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};
							
	
	
	
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



