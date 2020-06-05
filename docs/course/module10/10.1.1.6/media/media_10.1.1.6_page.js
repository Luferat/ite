//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/InteractiveAnimSlide.js");

function registerSWF(){
swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

	function getData()
	{
	
	var template_type = "MULTI_BAR";
	var commonTexts = [];						
	
	var slide_1_type = "INTERACTIVEANIM";
	
			var slide_1_texts = {compId:"ID_s1_title",
			x:0,
			y:2,
			width:430,
			height:17,
			size:14,
			textAlign:"center"};			
			
			var slide_1_object = {templateType:slide_1_type,
			x:0,
			y:0,
			animId:0,
			texts:slide_1_texts};
	
	
	var slide_2_type = "INTERACTIVEANIM";
			
			var slide_2_texts = {compId:"ID_s1_title",
			x:0,
			y:2,
			width:430,
			height:17,
			size:14,
			textAlign:"center"};
			
			var slide_2_object = {templateType:slide_2_type,
			x:0,
			y:0,
			animId:1,
			texts:slide_2_texts};	
			
var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"slide_3.jpg",
							x:83.6,
							y:49.75, 
							width:241,
							height:287.2,
							type:""}];					
	var slide_3_texts = [{compId:"ID_s3_txt01",
							x:16,
							y:65, 
							width:79.85,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"ID_s3_txt02",
							x:307-3,
							y:71+12, 
							width:127.55,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"ID_s3_txt03",
							x:311+15,
							y:161, 
							width:127.55,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s3_txt04",
							x:19,
							y:247.2-15, 
							width:79.85,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"center"},
							{compId:"ID_s3_txt05",
							x:325.2+12,
							y:306.35-16, 
							width:112.6,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s3_txt06",
							x:278.45+14,
							y:118, 
							width:46.8,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s3_txt07",
							x:283.25+14,
							y:329.35, 
							width:46.8,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s3_txt08",
							x:278.45+14,
							y:204.25, 
							width:46.8,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"}
							];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};	
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"slide_4.jpg",
							x:25,
							y:49.75, 
							width:390,
							height:294,
							type:""}];					
	var slide_4_texts = [{compId:"ID_s4_txt01",
							x:90.65+19,
							y:168.5, 
							width:112,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s4_txt02",
							x:212.7+32-7,
							y:169.75, 
							width:112.85,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s4_txt03",
							x:330.65+34,
							y:177.95-21, 
							width:76,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s4_txt04",
							x:3,
							y:36, 
							width:112,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s4_txt05",
							x:47,
							y:321, 
							width:90.3,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"},
							{compId:"ID_s4_txt06",
							x:303.35+59-14,
							y:321+19, 
							width:74,
							height:17,
							size:11,
							color:"#393536",
							textAlign:"left"}
							];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};			
	
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
	
	return {templateType:template_type,
	textObject:commonTexts,
	slideObject:slides};
	
	}

loadScript("../../../common/scripts/swfobject.js", registerSWF);