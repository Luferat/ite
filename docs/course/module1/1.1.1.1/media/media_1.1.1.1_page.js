loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

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
    var slide_1_images = [{name:"1_1_1_1_s1_C.jpg",
        x:32.9,
        y:29.45,
        width:227.1,
        height:340.65,
        type:"STD"},
        {name:"1_1_1_1_s1_A.jpg",
            x:269.5,
            y:29.45,
            width:130,
            height:142.05,
            type:"STD"},
			{name:"1_1_1_1_s1_B.jpg",
            x:270.05,
            y:179.1,
            width:130,
            height:190.75,
            type:"STD"}];
    var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};
		

var slide_2_type = "MULTI_BUTTON";	
	var slide_2_buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
						overSkinImage:"../../../common/images/text_button_gradient_selected.png",
						normalTextStyle:'#FFFFFF',
						overTextStyle:'#006699',
						cornorRadius:5,
						selected:0};
	var slide_2_buttons = [{compId:"ID_s2_btn01",
						x:9.85,
						y:71.85,
						width:170,
						height:21,
						size:12,
						textAlign:"center"},
					{compId:"ID_s2_btn02",
						x:9.85,
						y:110.1,
						width:170,
						height:21,
						size:12,
						textAlign:"center"},
					{compId:"ID_s2_btn03",
						x:9.85,
						y:146.35,
						width:170,
						height:21,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn04",
						x:9.85,
						y:188.6,
						width:170,
						height:21,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn05",
						x:9.85,
						y:230.85,
						width:170,
						height:21,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn06",
						x:9.85,
						y:273.1,
						width:170,
						height:21,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn07",
						x:9.85,
						y:315.35,
						width:170,
						height:21,
						size:12,
						textAlign:"center"}];
	var slide_2_buttonObject = {style:slide_2_buttonStyle,
								buttons:slide_2_buttons};
	var slide_2_commonTexts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s2_header01",
							x:14.35,
							y:36.85, 
							width:162,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s2_header02",
							x:200.3,
							y:36.85, 
							width:218,
							height:17,
							size:12,
							textAlign:"center"}];
	
	var slide_2_1_type = "DESCRIPTION";
	var slide_2_1_images = [];							
	var slide_2_1_dragtextboxs = [{bodyCompId:"ID_s2_txt01",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:300,
									draggable:"NO"}];
	var slide_2_1_textboxs = [];							
	var slide_2_1_texts = [];							
	var slide_2_1_object = {templateType:slide_2_1_type,
							x:0,
							y:30,
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
									x:200,
									y:45,
									width:230,
									height:300,
									draggable:"NO"}];						
	var slide_2_2_object = {templateType:slide_2_2_type,
							x:0,
							y:30,
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
									x:200,
									y:45,
									width:230,
									height:300,
									draggable:"NO"}];						
	var slide_2_3_object = {templateType:slide_2_3_type,
							x:0,
							y:30,
							images:slide_2_3_images,
							dragtextboxs:slide_2_3_dragtextboxs,
							textboxs:slide_2_3_textboxs,
							texts:slide_2_3_texts};
	var slide_2_4_type = "DESCRIPTION";
	var slide_2_4_images = [];							
	var slide_2_4_textboxs = [];							
	var slide_2_4_texts = [];	
	var slide_2_4_dragtextboxs = [{bodyCompId:"ID_s2_txt04",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:300,
									draggable:"NO"}];						
	var slide_2_4_object = {templateType:slide_2_4_type,
							x:0,
							y:30,
							images:slide_2_4_images,
							dragtextboxs:slide_2_4_dragtextboxs,
							textboxs:slide_2_4_textboxs,
							texts:slide_2_4_texts};
							
	var slide_2_5_type = "DESCRIPTION";
	var slide_2_5_images = [];							
	var slide_2_5_textboxs = [];							
	var slide_2_5_texts = [];	
	var slide_2_5_dragtextboxs = [{bodyCompId:"ID_s2_txt05",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:300,
									draggable:"NO"}];						
	var slide_2_5_object = {templateType:slide_2_5_type,
							x:0,
							y:30,
							images:slide_2_5_images,
							dragtextboxs:slide_2_5_dragtextboxs,
							textboxs:slide_2_5_textboxs,
							texts:slide_2_5_texts};
							
	var slide_2_6_type = "DESCRIPTION";
	var slide_2_6_images = [];							
	var slide_2_6_textboxs = [];							
	var slide_2_6_texts = [];	
	var slide_2_6_dragtextboxs = [{bodyCompId:"ID_s2_txt06",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:300,
									draggable:"NO"}];						
	var slide_2_6_object = {templateType:slide_2_6_type,
							x:0,
							y:30,
							images:slide_2_6_images,
							dragtextboxs:slide_2_6_dragtextboxs,
							textboxs:slide_2_6_textboxs,
							texts:slide_2_6_texts};
							
	var slide_2_7_type = "DESCRIPTION";
	var slide_2_7_images = [];							
	var slide_2_7_textboxs = [];							
	var slide_2_7_texts = [];	
	var slide_2_7_dragtextboxs = [{bodyCompId:"ID_s2_txt07",
									titleCompId:"",
									x:200,
									y:45,
									width:230,
									height:300,
									draggable:"NO"}];						
	var slide_2_7_object = {templateType:slide_2_7_type,
							x:0,
							y:30,
							images:slide_2_7_images,
							dragtextboxs:slide_2_7_dragtextboxs,
							textboxs:slide_2_7_textboxs,
							texts:slide_2_7_texts};
										
	var slide_2_slides = [slide_2_1_object,slide_2_2_object,slide_2_3_object,slide_2_4_object,slide_2_5_object,slide_2_6_object,slide_2_7_object];
						
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