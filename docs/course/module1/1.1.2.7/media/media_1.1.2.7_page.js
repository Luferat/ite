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
    var slide_1_images = [{name:"1_1_2_7_s1_a.jpg",
							x:18,
							y:41,
							width:188,
							height:125,
							type:"STD"},
							{name:"1_1_2_7_s1_b.jpg",
							x:230,
							y:41,
							width:188,
							height:125,
							type:"STD"},
							{name:"1_1_2_7_s1_c.jpg",
							x:18,
							y:211,
							width:188,
							height:125,
							type:"STD"},
							{name:"1_1_2_7_s1_d.jpg",
							 x:230,
							 y:211,
							 width:188,
							 height:125,
							 type:"STD"}];
    var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:18,
							y:175,
							width:188,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s1_txt02",
							x:230,
							y:180,
							width:188,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s1_txt03",
							x:18,
							y:345,
							width:188,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s1_txt04",
							x:230,
							y:345,
							width:188,
							height:17,
							size:12,
							textAlign:"center"
							}];
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
						x:10,
						y:40,
						width:120,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s2_btn02",
						x:10,
						y:80,
						width:120,
						height:23,
						size:12,
						textAlign:"center"},
					{compId:"ID_s2_btn03",
						x:10,
						y:120,
						width:120,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn04",
						x:10,
						y:160,
						width:120,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn05",
						x:10,
						y:200,
						width:120,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn06",
						x:10,
						y:240,
						width:120,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn07",
						x:10,
						y:280,
						width:120,
						height:23,
						size:12,
						textAlign:"center"},
						{compId:"ID_s2_btn08",
						x:10,
						y:320,
						width:120,
						height:23,
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
							textAlign:"center"}];
	
	var slide_2_1_type = "DESCRIPTION";
	var slide_2_1_images = [{name:"1_1_2_7_s2_a.jpg",
							x:188,
							y:10, 
							width:196,
							height:200,
							type:"STD"}];							
	var slide_2_1_dragtextboxs = [];
	var slide_2_1_textboxs = [{compId:"ID_s2_txt01",
							x:146,
							y:230, 
							width:280,
							height:75,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_1_texts = [];							
	var slide_2_1_object = {templateType:slide_2_1_type,
							x:0,
							y:30,
							images:slide_2_1_images,							
							dragtextboxs:slide_2_1_dragtextboxs,
							textboxs:slide_2_1_textboxs,
							texts:slide_2_1_texts};
								
	var slide_2_2_type = "DESCRIPTION";
	var slide_2_2_images = [{name:"1_1_2_7_s2_b.jpg",
							x:235,
							y:10, 
							width:103,
							height:200,
							type:"STD"}];							
	var slide_2_2_textboxs = [{compId:"ID_s2_txt02",
							x:146,
							y:230, 
							width:280,
							height:75,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_2_texts = [];	
	var slide_2_2_dragtextboxs = [];						
	var slide_2_2_object = {templateType:slide_2_2_type,
							x:0,
							y:30,
							images:slide_2_2_images,
							dragtextboxs:slide_2_2_dragtextboxs,
							textboxs:slide_2_2_textboxs,
							texts:slide_2_2_texts};
							
	var slide_2_3_type = "DESCRIPTION";
	var slide_2_3_images = [{name:"1_1_2_7_s2_c.jpg",
							x:266,
							y:10, 
							width:40,
							height:200,
							type:"STD"}];							
	var slide_2_3_textboxs = [{compId:"ID_s2_txt03",
							x:146,
							y:230, 
							width:280,
							height:75,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_3_texts = [];	
	var slide_2_3_dragtextboxs = [];						
	var slide_2_3_object = {templateType:slide_2_3_type,
							x:0,
							y:30,
							images:slide_2_3_images,
							dragtextboxs:slide_2_3_dragtextboxs,
							textboxs:slide_2_3_textboxs,
							texts:slide_2_3_texts};
	var slide_2_4_type = "DESCRIPTION";
	var slide_2_4_images = [{name:"1_1_2_7_s2_d.jpg",
							x:203,
							y:10, 
							width:166.05,
							height:200,
							type:"STD"}];							
	var slide_2_4_textboxs = [{compId:"ID_s2_txt04",
							x:146,
							y:230, 
							width:280,
							height:75,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_4_texts = [];	
	var slide_2_4_dragtextboxs = [];						
	var slide_2_4_object = {templateType:slide_2_4_type,
							x:0,
							y:30,
							images:slide_2_4_images,
							dragtextboxs:slide_2_4_dragtextboxs,
							textboxs:slide_2_4_textboxs,
							texts:slide_2_4_texts};
							
	var slide_2_5_type = "DESCRIPTION";
	var slide_2_5_images = [{name:"1_1_2_7_s2_e.jpg",
							x:199.5,
							y:10, 
							width:173,
							height:200,
							type:"STD"}];							
	var slide_2_5_textboxs = [{compId:"ID_s2_txt05",
							x:146,
							y:230, 
							width:280,
							height:75,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_5_texts = [];	
	var slide_2_5_dragtextboxs = [];						
	var slide_2_5_object = {templateType:slide_2_5_type,
							x:0,
							y:30,
							images:slide_2_5_images,
							dragtextboxs:slide_2_5_dragtextboxs,
							textboxs:slide_2_5_textboxs,
							texts:slide_2_5_texts};
							
	var slide_2_6_type = "DESCRIPTION";
	var slide_2_6_images = [{name:"1_1_2_7_s2_f.jpg",
							x:196,
							y:10, 
							width:180,
							height:135,
							type:"STD"}];							
	var slide_2_6_textboxs = [{compId:"ID_s2_txt06",
							x:146,
							y:230, 
							width:280,
							height:75,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_6_texts = [];	
	var slide_2_6_dragtextboxs = [];						
	var slide_2_6_object = {templateType:slide_2_6_type,
							x:0,
							y:30,
							images:slide_2_6_images,
							dragtextboxs:slide_2_6_dragtextboxs,
							textboxs:slide_2_6_textboxs,
							texts:slide_2_6_texts};
							
	var slide_2_7_type = "DESCRIPTION";
	var slide_2_7_images = [{name:"1_1_2_7_s2_g.jpg",
							x:146,
							y:10, 
							width:280,
							height:186,
							type:"STD"}];							
	var slide_2_7_textboxs = [{compId:"ID_s2_txt07",
							x:146,
							y:230, 
							width:280,
							height:75,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_7_texts = [];	
	var slide_2_7_dragtextboxs = [];						
	var slide_2_7_object = {templateType:slide_2_7_type,
							x:0,
							y:30,
							images:slide_2_7_images,
							dragtextboxs:slide_2_7_dragtextboxs,
							textboxs:slide_2_7_textboxs,
							texts:slide_2_7_texts};
	
	var slide_2_8_type = "DESCRIPTION";
	var slide_2_8_images = [{name:"1_1_2_7_s2_h.jpg",
							x:146,
							y:10, 
							width:280,
							height:186,
							type:"STD"}];							
	var slide_2_8_textboxs = [{compId:"ID_s2_txt08",
							x:146,
							y:230, 
							width:280,
							height:75,
							size:15,
							type:"PLAIN",
							color:"#e0d5e6"}];							
	var slide_2_8_texts = [];	
	var slide_2_8_dragtextboxs = [];						
	var slide_2_8_object = {templateType:slide_2_8_type,
							x:0,
							y:30,
							images:slide_2_8_images,
							dragtextboxs:slide_2_8_dragtextboxs,
							textboxs:slide_2_8_textboxs,
							texts:slide_2_8_texts};
										
	var slide_2_slides = [slide_2_1_object,slide_2_2_object,slide_2_3_object,slide_2_4_object,slide_2_5_object,slide_2_6_object,slide_2_7_object,slide_2_8_object];
						
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