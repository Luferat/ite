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
							y:380, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
							
	var slide_1_type = "ANIMATION";
	
    var slide_1_animations = [{id:"SLIDE_1",
        x:40,
        y:32,
        width:360,
        height:320,
		type:"STD",
        autoStart:""}];

    var slide_1_texts = [{compId:"ID_s1_title",
								x:5,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"}];
	var slide_1_images = [];
    var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							animations:slide_1_animations,
							images:slide_1_images,
        					texts:slide_1_texts};
				
	var slide_2_type = "IMAGE";
	var slide_2_texts = [{compId:"ID_s2_title",
								x:5,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"},
						  {compId:"ID_s2_txt01",
								x:246,
								y:244,
								width:140,
								height:17,
								size:12,
								textAlign:"left"}];
	var slide_2_images = [{name:"2.2.4.3b.jpg",
							x:50,
							y:26,
							width:340,
							height:340,
							type:"STD"}];
    var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
        					texts:slide_2_texts};
							
	var slide_3_type = "IMAGE";
	var slide_3_texts = [{compId:"ID_s3_title",
								x:5,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"}];
	var slide_3_images = [{name:"2.2.4.3c.jpg",
							x:50,
							y:26,
							width:340,
							height:340,
							type:"STD"}];
    var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
        					texts:slide_3_texts};
							
	var slide_4_type = "IMAGE";
	var slide_4_texts = [{compId:"ID_s4_title",
								x:5,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"}];
	var slide_4_images = [{name:"2.2.4.3d.jpg",
							x:50,
							y:26,
							width:340,
							height:340,
							type:"STD"}];
    var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
        					texts:slide_4_texts};
							
	var slide_5_type = "IMAGE";
	var slide_5_texts = [{compId:"ID_s5_title",
								x:5,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"}];
	var slide_5_images = [{name:"2.2.4.3e.jpg",
							x:50,
							y:26,
							width:340,
							height:340,
							type:"STD"}];
    var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
        					texts:slide_5_texts};
													
	var slide_6_type = "ANIMATION";
	
    var slide_6_animations = [{id:"SLIDE_6",
        x:40,
        y:32.10,
        width:360,
        height:320.05,
		type:"STD",
        autoStart:""}];

    var slide_6_texts = [{compId:"ID_s6_title",
								x:5,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"}];
	var slide_6_images = [];
    var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							animations:slide_6_animations,
							images:slide_6_images,
        					texts:slide_6_texts};
										
	var slide_7_type = "ANIMATION";
	
    var slide_7_animations = [{id:"SLIDE_7",
        x:-80,
        y:-20,
        width:165,
        height:320.05,
        autoStart:""}];

    var slide_7_texts = [{compId:"ID_s7_title",
								x:5,
								y:2,
								width:430,
								height:17,
								size:16,
								textAlign:"center"},
						{compId:"ID_s7_inst",
								x:5,
								y:333,
								width:430,
								height:17,
								size:12,
								textAlign:"left"}];
	var slide_7_images = [];
    var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							animations:slide_7_animations,
							images:slide_7_images,
        					texts:slide_7_texts};
		
							
	var slide_object = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object];

    return {templateType:template_type,
       		textObject:commonTexts,
			slideObject:slide_object};



}
