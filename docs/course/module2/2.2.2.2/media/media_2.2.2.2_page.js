loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "MULTI_BUTTON";
	var buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};


	var buttons = [{compId:"ID_btn01",
						x:3,
						y:95,
						width:125,
						height:35,
						size:12,
						textAlign:"center"},
					{compId:"ID_btn02",
						x:3,
						y:153.1,
						width:125,
						height:35,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn03",
						x:3,
						y:211.2,
						width:125,
						height:35,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn04",
						x:3,
						y:269.3,
						width:125,
						height:35,
						size:12,
						textAlign:"center"},
		
						];
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
	var commonTexts = [ ];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"2_2_2_2A.jpg",
							x:136,
							y:80, 
							width:330,
							height:233,
							type:"STD"}];							
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};		
							
							
							var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"2_2_2_2B.jpg",
							x:136,
							y:85, 
							width:330,
							height:225,
							type:"STD"}];							
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
							var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"2_2_2_2C.jpg",
							x:136,
							y:65, 
							width:330,
							height:263,
							type:"STD"}];							
	var slide_3_texts = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
							
								var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"2_2_2_2D.jpg",
							x:136,
							y:80, 
							width:330,
							height:241,
							type:"STD"}];							
	var slide_4_texts = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
							
								var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"2_2_2_1E.jpg",
							x:168,
							y:32, 
							width:258.3,
							height:315,
							type:"STD"}];							
	
							
							
										
	var slides = [slide_1_object, slide_2_object, slide_3_object, slide_4_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			buttonObject:buttonObject,
			slideObject:slides};
	
}