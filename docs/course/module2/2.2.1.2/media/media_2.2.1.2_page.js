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
						x:10,
						y:117,
						width:152.75,
						height:23.75,
						size:12,
						textAlign:"center"},
					{compId:"ID_btn02",
						x:10,
						y:153,
						width:152.75,
						height:23.75,
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
							textAlign:"left"}];
	
	var slide_1_type = "DESCRIPTION";
	var slide_1_images = [{name:"2_2_1_2A.jpg",
							x:201,
							y:25, 
							width:254.05,
							height:228,
							type:"STD"}];							
	var slide_1_textboxs = [{compId:"ID_s1_caption",
							x:173,
							y:262, 
							width:280,
							height:40,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							textboxs:slide_1_textboxs,
							texts:slide_1_texts};
							
	
	var slide_2_type = "DESCRIPTION";
	var slide_2_images = [{name:"2_2_1_2B.jpg",
							x:185,
							y:25, 
							width:254.05,
							height:228,
							type:"STD"}];							
	var slide_2_textboxs = [{compId:"ID_s2_caption",
							x:173,
							y:262, 
							width:280,
							height:40,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							textboxs:slide_2_textboxs,
							texts:slide_2_texts};
										
	var slides = [slide_1_object,slide_2_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			buttonObject:buttonObject,
			slideObject:slides};
	
}



// code below is needed for html5 content from Flash CS6
//loadScript("../../../common/scripts/createJS_bundle.min.js", null);
//loadScript("media_2.2.1.2_graphic.js", null);
