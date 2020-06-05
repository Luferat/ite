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
						x:18,
						y:39,
						width:125,
						height:21,
						size:12,
						textAlign:"center"},
					{compId:"ID_btn02",
						x:18,
						y:75,
						width:125,
						height:35,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn03",
						x:18,
						y:124,
						width:125,
						height:25,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn04",
						x:18,
						y:163.65,
						width:125,
						height:35,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn05",
						x:18,
						y:215.2,
						width:125,
						height:21,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn06",
						x:18,
						y:251.75,
						width:125,
						height:25,
						size:12,
						textAlign:"center"},
						{compId:"ID_btn07",
						x:18,
						y:295.3,
						width:123,
						height:35,
						size:12,
						textAlign:"center"},
						
						];
	var buttonObject = {style:buttonStyle,
						buttons:buttons};
	var commonTexts = [{compId:"ID_inst",
        x:35,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"},{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"2_2_2_1A.jpg",
							x:150,
							y:92, 
							width:328,
							height:201,
							type:"STD"}];							
	var slide_1_texts = [];							
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};		
							
							
							var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"2_2_2_1B.jpg",
							x:150,
							y:100, 
							width:326.05,
							height:185.85,
							type:"STD"}];							
	var slide_2_texts = [];							
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
							var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"2_2_2_1C.jpg",
							x:150,
							y:100,
							width:328,
							height:185,
							type:"STD"}];							
	var slide_3_texts = [];							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
							
								var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"2_2_2_1D.jpg",
							x:150,
							y:110, 
							width:328,
							height:166,
							type:"STD"}];							
	var slide_4_texts = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
							
								var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"2_2_2_1E.jpg",
							x:150,
							y:62, 
							width:330,
							height:262,
							type:"STD"}];							
	var slide_5_texts = [];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};
							
							
							var slide_6_type = "IMAGE";
	var slide_6_images = [{name:"2_2_2_1F.jpg",
							x:205,
							y:41, 
							width:241.25,
							height:292.25,
							type:"STD"}];							
	var slide_6_texts = [];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,
							texts:slide_6_texts};
							
							
							var slide_7_type = "IMAGE";
	var slide_7_images = [{name:"2_2_2_1G.jpg",
							x:154,
							y:110, 
							width:328,
							height:165,
							type:"STD"}];							
	var slide_7_texts = [];							
	var slide_7_object = {templateType:slide_7_type,
							x:0,
							y:0,
							images:slide_7_images,
							texts:slide_7_texts};
							
							
										
	var slides = [slide_1_object, slide_2_object, slide_3_object, slide_4_object, slide_5_object, slide_6_object,slide_7_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			buttonObject:buttonObject,
			slideObject:slides};
	
}