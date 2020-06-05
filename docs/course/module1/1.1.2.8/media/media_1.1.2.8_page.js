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
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"1_1_2_8_s1_A.jpg",
							x:39.20,
							y:40, 
							width:150.25,
							height:130,
							type:"STD"},
							{name:"1_1_2_8_s1_B.jpg",
							x:256.70,
							y:40, 
							width:150.25,
							height:130,
							type:"STD"},
							{name:"1_1_2_8_s1_C.jpg",
							x:39.20,
							y:209, 
							width:150.25,
							height:130,
							type:"STD"},
							{name:"1_1_2_8_s1_D.jpg",
							x:256.70,
							y:209, 
							width:150.25,
							height:130,
							type:"STD"}];								
	var slide_1_texts = [{compId:"ID_s1_title",
        x:5,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_s1_txt01",
            x:25,
            y:175.85,
            width:195,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_s1_txt02",
            x:245,
            y:175.85,
            width:195,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_s1_txt03",
            x:25,
            y:344.85,
            width:195,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_s1_txt04",
            x:245,
            y:344.85,
            width:195,
            height:17,
            size:12,
            textAlign:"center"}];
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table",
							x:20,
							y:35, 
							width:400,
							height:224}];				
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
							tables:slide_2_tables,
							texts:slide_2_texts};
										
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



