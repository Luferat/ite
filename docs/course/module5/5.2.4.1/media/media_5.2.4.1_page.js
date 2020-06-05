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
							x:4.95,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"5.2.4.1a.jpg",
							x:5,
							y:50, 
							width:430,
							height:280,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:24.85,
							y:71.85, 
							width:390,
							height:25,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:29.85,
							y:100.85, 
							width:380,
							height:15,
							size:10,
							textAlign:"left"},
							{compId:"ID_s1_txt03",
							x:29.85,
							y:200.35, 
							width:380,
							height:15,
							size:12,
							textAlign:"left"},
							{compId:"ID_s1_txt04",
							x:61,
							y:156, 
							width:315,
							height:25,
							size:10,
							textAlign:"left"},
							{compId:"ID_s1_txt05",
							x:69,
							y:178, 
							width:315,
							height:17,
							size:10,
							textAlign:"left"}];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
	
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [{name:"5.2.4.1b.jpg",
							x:5,
							y:40, 
							width:430,
							height:350,
							type:"STD"}];
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
						{compId:"ID_s2_txt01",
							x:42,
							y:47, 
							width:340,
							height:17,
							size:12,
							color:"#393536",
							textAlign:"left"}];		
	var slide_2_dragtextboxs = [{bodyCompId:"ID_s2_txt03",
								titleCompId:"",
								x:12.5,
								y:58,
								width:416,
								height:290,
								background:"NO"}];
	var slide_2_textboxs = [];					
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							dragtextboxs:slide_2_dragtextboxs,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts};
	/*
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"5.2.4.1b.jpg",
							x:5,
							y:40, 
							width:430,
							height:350,
							type:"STD"}];					
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s2_txt0",
							x:25,
							y:48, 
							width:14,
							height:12,
							size:10,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"ID_s2_txt01",
							x:40.3,
							y:48, 
							width:260,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_table",
							x:40.3,
							y:48, 
							width:260,
							height:17,
							size:10,
							textAlign:"left"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	*/
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



