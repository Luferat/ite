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
	var commonTexts = [{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}];
	var buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
						
	var buttons = [{compId:"ID_btn01",
						x:50,
						y:90,
						width:110,
						height:35,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn02",
						x:50,
						y:140,
						width:110,
						height:35,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn03",
						x:50,
						y:190,
						width:110,
						height:35,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn04",
						x:50,
						y:240,
						width:110,
						height:35,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn05",
						x:50,
						y:290,
						width:110,
						height:35,
						size:12,
						textAlign:"center"}];
						
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
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
	
	var slide_1_type = "DESCRIPTION";
	var slide_1_images = [];							
	var slide_1_dragtextboxs = [{bodyCompId:"ID_bodyTxt01",
									titleCompId:"ID_titleTxt01",
									x:200,
									y:45,
									width:260,
									height:325,
									draggable:"NO"}];
	var slide_1_textboxs = [];							
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,							
							dragtextboxs:slide_1_dragtextboxs,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts};
							
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [];							
	var slide_2_dragtextboxs = [{bodyCompId:"ID_bodyTxt02",
									titleCompId:"ID_titleTxt02",
									x:200,
									y:45,
									width:260,
									height:325,
									draggable:"NO"}];
	var slide_2_textboxs = [];							
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,							
							dragtextboxs:slide_2_dragtextboxs,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts};
							
	var slide_3_type = "DESCRIPTION";
	var slide_3_images = [];							
	var slide_3_dragtextboxs = [{bodyCompId:"ID_bodyTxt03",
									titleCompId:"ID_titleTxt03",
									x:200,
									y:45,
									width:260,
									height:325,
									draggable:"NO"}];
	var slide_3_textboxs = [];							
	var slide_3_texts = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,							
							dragtextboxs:slide_3_dragtextboxs,
							textboxs:slide_3_textboxs,
							texts:slide_3_texts};
							
							
	var slide_4_type = "DESCRIPTION";
	var slide_4_images = [];							
	var slide_4_dragtextboxs = [{bodyCompId:"ID_bodyTxt04",
									titleCompId:"ID_titleTxt04",
									x:200,
									y:45,
									width:260,
									height:325,
									draggable:"NO"}];
	var slide_4_textboxs = [];							
	var slide_4_texts = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,							
							dragtextboxs:slide_4_dragtextboxs,
							textboxs:slide_4_textboxs,
							texts:slide_4_texts};
							
	var slide_5_type = "DESCRIPTION";
	var slide_5_images = [];							
	var slide_5_dragtextboxs = [{bodyCompId:"ID_bodyTxt05",
									titleCompId:"ID_titleTxt05",
									x:200,
									y:45,
									width:260,
									height:325,
									draggable:"NO"}];
	var slide_5_textboxs = [];							
	var slide_5_texts = [];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,							
							dragtextboxs:slide_5_dragtextboxs,
							textboxs:slide_5_textboxs,
							texts:slide_5_texts};
																				
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			buttonObject:buttonObject,
			slideObject:slides};
	
}



// code below is needed for html5 content from Flash CS6
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_2.2.1.2_graphic.js", null);
