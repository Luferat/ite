loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");
//loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");


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
    
	var slide_1_type = "MULTI_BUTTON";	
	var slide_1_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var slide_1_buttons = [{compId:"ID_s1_btn01",
						x:5,
						y:47,
						width:175,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s1_btn02",
						x:5,
						y:85.75,
						width:175,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s1_btn03",
						x:5,
						y:124.5,
						width:175,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_s1_btn04",
						x:5,
						y:163.25,
						width:175,
						height:23,
						size:12,
						textAlign:"center"}];
	var slide_1_buttonObject = {style:slide_1_buttonStyle,
								buttons:slide_1_buttons};
	var slide_1_commonTexts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];
	
	var slide_1_1_type = "DESCRIPTION";
	var slide_1_1_images = [];							
	var slide_1_1_dragtextboxs = [{bodyCompId:"ID_s1_txt01",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];
	var slide_1_1_textboxs = [];							
	var slide_1_1_texts = [];							
	var slide_1_1_object = {templateType:slide_1_1_type,
							x:0,
							y:0,
							images:slide_1_1_images,							
							dragtextboxs:slide_1_1_dragtextboxs,
							textboxs:slide_1_1_textboxs,
							texts:slide_1_1_texts};
								
	var slide_1_2_type = "DESCRIPTION";
	var slide_1_2_images = [];							
	var slide_1_2_textboxs = [];							
	var slide_1_2_texts = [];	
	var slide_1_2_dragtextboxs = [{bodyCompId:"ID_s1_txt02",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_1_2_object = {templateType:slide_1_2_type,
							x:0,
							y:0,
							images:slide_1_2_images,
							dragtextboxs:slide_1_2_dragtextboxs,
							textboxs:slide_1_2_textboxs,
							texts:slide_1_2_texts};
							
	var slide_1_3_type = "DESCRIPTION";
	var slide_1_3_images = [];							
	var slide_1_3_textboxs = [];							
	var slide_1_3_texts = [];	
	var slide_1_3_dragtextboxs = [{bodyCompId:"ID_s1_txt03",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_1_3_object = {templateType:slide_1_3_type,
							x:0,
							y:0,
							images:slide_1_3_images,
							dragtextboxs:slide_1_3_dragtextboxs,
							textboxs:slide_1_3_textboxs,
							texts:slide_1_3_texts};
	var slide_1_4_type = "DESCRIPTION";
	var slide_1_4_images = [];							
	var slide_1_4_textboxs = [];							
	var slide_1_4_texts = [];	
	var slide_1_4_dragtextboxs = [{bodyCompId:"ID_s1_txt04",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_1_4_object = {templateType:slide_1_4_type,
							x:0,
							y:0,
							images:slide_1_4_images,
							dragtextboxs:slide_1_4_dragtextboxs,
							textboxs:slide_1_4_textboxs,
							texts:slide_1_4_texts};
							
	var slide_1_5_type = "DESCRIPTION";
	var slide_1_5_images = [];							
	var slide_1_5_textboxs = [];							
	var slide_1_5_texts = [];	
	var slide_1_5_dragtextboxs = [{bodyCompId:"ID_s1_txt05",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_1_5_object = {templateType:slide_1_5_type,
							x:0,
							y:0,
							images:slide_1_5_images,
							dragtextboxs:slide_1_5_dragtextboxs,
							textboxs:slide_1_5_textboxs,
							texts:slide_1_5_texts};
							
	
										
	var slide_1_slides = [slide_1_1_object,slide_1_2_object,slide_1_3_object,slide_1_4_object,slide_1_5_object];
						
	var slide_1_object = {templateType:slide_1_type,
									 x:0,
									 y:0,
							textObject:slide_1_commonTexts,
							buttonObject:slide_1_buttonObject,
							slideObject:slide_1_slides};
							
	/*table*/						
	
	var slide_2_type = "TABLE";
	var slide_2_tables = [{compId:"ID_s2_table",
							x:15,
							y:60, 
							width:410,
							height:300}];				
	var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:15,
							textAlign:"left"}];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							tables:slide_2_tables,
							texts:slide_2_texts};
							
	/*slide3*/
	
	var slide_3_type = "MULTI_BUTTON";	
	var slide_3_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var slide_3_buttons = [{compId:"ID_s3_btn01",
						x:5,
						y:47,
						width:174.95,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s3_btn02",
						x:5,
						y:85.75,
						width:174,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s3_btn03",
						x:5,
						y:124.5,
						width:174,
						height:23,
						size:12,
						textAlign:"center"}];
	var slide_3_buttonObject = {style:slide_3_buttonStyle,
								buttons:slide_3_buttons};
	var slide_3_commonTexts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:429.05,
							height:17,
							size:16,
							textAlign:"center"}];
	
	var slide_3_1_type = "DESCRIPTION";
	var slide_3_1_images = [];							
	var slide_3_1_dragtextboxs = [{bodyCompId:"ID_s3_txt01",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];
	var slide_3_1_textboxs = [];							
	var slide_3_1_texts = [];							
	var slide_3_1_object = {templateType:slide_3_1_type,
							x:0,
							y:0,
							images:slide_3_1_images,							
							dragtextboxs:slide_3_1_dragtextboxs,
							textboxs:slide_3_1_textboxs,
							texts:slide_3_1_texts};
								
	var slide_3_2_type = "DESCRIPTION";
	var slide_3_2_images = [];							
	var slide_3_2_textboxs = [];							
	var slide_3_2_texts = [];	
	var slide_3_2_dragtextboxs = [{bodyCompId:"ID_s3_txt02",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_3_2_object = {templateType:slide_3_2_type,
							x:0,
							y:0,
							images:slide_3_2_images,
							dragtextboxs:slide_3_2_dragtextboxs,
							textboxs:slide_3_2_textboxs,
							texts:slide_3_2_texts};
							
	var slide_3_3_type = "DESCRIPTION";
	var slide_3_3_images = [];							
	var slide_3_3_textboxs = [];							
	var slide_3_3_texts = [];	
	var slide_3_3_dragtextboxs = [{bodyCompId:"ID_s3_txt03",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_3_3_object = {templateType:slide_3_3_type,
							x:0,
							y:0,
							images:slide_3_3_images,
							dragtextboxs:slide_3_3_dragtextboxs,
							textboxs:slide_3_3_textboxs,
							texts:slide_3_3_texts};
	
	
										
	var slide_3_slides = [slide_3_1_object,slide_3_2_object,slide_3_3_object];
						
	var slide_3_object = {templateType:slide_3_type,
									 x:0,
									 y:0,
							textObject:slide_3_commonTexts,
							buttonObject:slide_3_buttonObject,
							slideObject:slide_3_slides};		
										
	/*slide4*/
	
	var slide_4_type = "MULTI_BUTTON";	
	var slide_4_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var slide_4_buttons = [{compId:"ID_s4_btn01",
						x:5,
						y:47,
						width:174.95,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s4_btn02",
						x:5,
						y:85.75,
						width:174,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s4_btn03",
						x:5,
						y:124.5,
						width:174,
						height:23,
						size:12,
						textAlign:"center"}];
	var slide_4_buttonObject = {style:slide_4_buttonStyle,
								buttons:slide_4_buttons};
	var slide_4_commonTexts = [{compId:"ID_s4_title",
							x:5,
							y:2, 
							width:429.05,
							height:17,
							size:16,
							textAlign:"center"}];
	
	var slide_4_1_type = "DESCRIPTION";
	var slide_4_1_images = [];							
	var slide_4_1_dragtextboxs = [{bodyCompId:"ID_s4_txt01",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];
	var slide_4_1_textboxs = [];							
	var slide_4_1_texts = [];							
	var slide_4_1_object = {templateType:slide_4_1_type,
							x:0,
							y:0,
							images:slide_4_1_images,							
							dragtextboxs:slide_4_1_dragtextboxs,
							textboxs:slide_4_1_textboxs,
							texts:slide_4_1_texts};
								
	var slide_4_2_type = "DESCRIPTION";
	var slide_4_2_images = [];							
	var slide_4_2_textboxs = [];							
	var slide_4_2_texts = [];	
	var slide_4_2_dragtextboxs = [{bodyCompId:"ID_s4_txt02",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_4_2_object = {templateType:slide_4_2_type,
							x:0,
							y:0,
							images:slide_4_2_images,
							dragtextboxs:slide_4_2_dragtextboxs,
							textboxs:slide_4_2_textboxs,
							texts:slide_4_2_texts};
							
	var slide_4_3_type = "DESCRIPTION";
	var slide_4_3_images = [];							
	var slide_4_3_textboxs = [];							
	var slide_4_3_texts = [];	
	var slide_4_3_dragtextboxs = [{bodyCompId:"ID_s4_txt04",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:325,
									draggable:"NO"}];						
	var slide_4_3_object = {templateType:slide_4_3_type,
							x:0,
							y:0,
							images:slide_4_3_images,
							dragtextboxs:slide_4_3_dragtextboxs,
							textboxs:slide_4_3_textboxs,
							texts:slide_4_3_texts};
	
	
										
	var slide_4_slides = [slide_3_1_object,slide_3_2_object,slide_3_3_object,slide_4_3_object];
						
	var slide_4_object = {templateType:slide_4_type,
									 x:0,
									 y:0,
							textObject:slide_4_commonTexts,
							buttonObject:slide_4_buttonObject,
							slideObject:slide_4_slides};										
										
										
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
	

   
   
    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}