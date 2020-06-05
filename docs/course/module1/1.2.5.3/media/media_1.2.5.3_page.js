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
	var slide_1_tables = [{compId:"ID_s1_table",
							x:20,
							y:20, 
							width:400,
							height:224}];				
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							texts:slide_1_texts};
	
	var slide_2_type = "MULTI_BUTTON";	
	var slide_2_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var slide_2_buttons = [{compId:"ID_s2_btn01",
						x:5,
						y:45,
						width:145,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s2_btn02",
						x:5,
						y:85,
						width:145,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s2_btn03",
						x:5,
						y:125,
						width:145,
						height:23,
						size:12,
						textAlign:"center"}];
	var slide_2_buttonObject = {style:slide_2_buttonStyle,
								buttons:slide_2_buttons};
	var slide_2_commonTexts = [{compId:"ID_s2_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];
	
	var slide_2_1_type = "DESCRIPTION";
	var slide_2_1_images = [];							
	var slide_2_1_dragtextboxs = [{bodyCompId:"ID_s2_txt01",
									titleCompId:"",
									x:190,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];
	var slide_2_1_textboxs = [];							
	var slide_2_1_texts = [];							
	var slide_2_1_object = {templateType:slide_2_1_type,
							x:0,
							y:0,
							images:slide_2_1_images,							
							dragtextboxs:slide_2_1_dragtextboxs,
							textboxs:slide_2_1_textboxs,
							texts:slide_2_1_texts};
								
	var slide_2_2_type = "DESCRIPTION";
	var slide_2_2_images = [];							
	var slide_2_2_textboxs = [];							
	var slide_2_2_texts = [];	
	var slide_2_2_dragtextboxs = [{bodyCompId:"ID_s2_txt02",
									titleCompId:"",
									x:190,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_2_2_object = {templateType:slide_2_2_type,
							x:0,
							y:0,
							images:slide_2_2_images,
							dragtextboxs:slide_2_2_dragtextboxs,
							textboxs:slide_2_2_textboxs,
							texts:slide_2_2_texts};
							
	var slide_2_3_type = "DESCRIPTION";
	var slide_2_3_images = [];							
	var slide_2_3_textboxs = [];							
	var slide_2_3_texts = [];	
	var slide_2_3_dragtextboxs = [{bodyCompId:"ID_s2_txt03",
									titleCompId:"",
									x:190,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_2_3_object = {templateType:slide_2_3_type,
							x:0,
							y:0,
							images:slide_2_3_images,
							dragtextboxs:slide_2_3_dragtextboxs,
							textboxs:slide_2_3_textboxs,
							texts:slide_2_3_texts};
										
	var slide_2_slides = [slide_2_1_object,slide_2_2_object,slide_2_3_object];
						
	var slide_2_object = {templateType:slide_2_type,
									 x:0,
									 y:0,
							textObject:slide_2_commonTexts,
							buttonObject:slide_2_buttonObject,
							slideObject:slide_2_slides};
			
	var slides = [slide_1_object,slide_2_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};
}