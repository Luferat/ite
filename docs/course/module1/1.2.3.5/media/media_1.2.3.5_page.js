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
						x:7,
						y:34,
						width:178.1,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn02",
						x:7,
						y:72.1,
						width:178.1,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn03",
						x:7,
						y:110.2,
						width:178.1,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn04",
						x:7,
						y:148.3,
						width:178.1,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn05",
						x:7,
						y:186.4,
						width:178.1,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn06",
						x:7,
						y:224.5,
						width:178.1,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn07",
						x:7,
						y:262.6,
						width:178.1,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn08",
						x:7,
						y:300.7,
						width:178.1,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn09",
						x:7,
						y:339,
						width:178.1,
						height:23,
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
	var slide_1_dragtextboxs = [{bodyCompId:"ID_txt01",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
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
	var slide_2_dragtextboxs = [{bodyCompId:"ID_txt02",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
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
	var slide_3_dragtextboxs = [{bodyCompId:"ID_txt03",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
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
	var slide_4_dragtextboxs = [{bodyCompId:"ID_txt04",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
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
	var slide_5_dragtextboxs = [{bodyCompId:"ID_txt05",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
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
							
	var slide_6_type = "DESCRIPTION";
	var slide_6_images = [];							
	var slide_6_dragtextboxs = [{bodyCompId:"ID_txt06",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
									height:325,
									draggable:"NO"}];
	var slide_6_textboxs = [];							
	var slide_6_texts = [];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,							
							dragtextboxs:slide_6_dragtextboxs,
							textboxs:slide_6_textboxs,
							texts:slide_6_texts};
	var slide_7_type = "DESCRIPTION";
	var slide_7_images = [];							
	var slide_7_dragtextboxs = [{bodyCompId:"ID_txt07",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
									height:325,
									draggable:"NO"}];
	var slide_7_textboxs = [];							
	var slide_7_texts = [];							
	var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							images:slide_7_images,							
							dragtextboxs:slide_7_dragtextboxs,
							textboxs:slide_7_textboxs,
							texts:slide_7_texts};
							
	var slide_8_type = "DESCRIPTION";
	var slide_8_images = [];							
	var slide_8_dragtextboxs = [{bodyCompId:"ID_txt08",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
									height:325,
									draggable:"NO"}];
	var slide_8_textboxs = [];							
	var slide_8_texts = [];							
	var slide_8_object = {templateType:slide_8_type,
							x:0,
							y:0,
							images:slide_8_images,							
							dragtextboxs:slide_8_dragtextboxs,
							textboxs:slide_8_textboxs,
							texts:slide_8_texts};
							
	var slide_9_type = "DESCRIPTION";
	var slide_9_images = [];							
	var slide_9_dragtextboxs = [{bodyCompId:"ID_txt09",
									titleCompId:"",
									x:200,
									y:45,
									width:262,
									height:325,
									draggable:"NO"}];
	var slide_9_textboxs = [];							
	var slide_9_texts = [];							
	var slide_9_object = {templateType:slide_9_type,
							x:0,
							y:0,
							images:slide_9_images,							
							dragtextboxs:slide_9_dragtextboxs,
							textboxs:slide_9_textboxs,
							texts:slide_9_texts};
																				
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object,slide_8_object,slide_9_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			buttonObject:buttonObject,
			slideObject:slides};
	
}



// code below is needed for html5 content from Flash CS6
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_2.2.1.2_graphic.js", null);
