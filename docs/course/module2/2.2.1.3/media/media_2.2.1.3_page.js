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
        x:1.15,
        y:29.95,
        width:175,
        height:21,
        size:12,
        textAlign:"center"},

        {compId:"ID_btn02",
            x:1.15,
            y:57.60,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},

        {compId:"ID_btn03",
            x:1.15,
            y:85.25,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},

        {compId:"ID_btn04",
            x:1.15,
            y:112.90,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn05",
            x:1.15,
            y:140.55,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn06",
            x:1.15,
            y:168.20,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn07",
            x:1.15,
            y:195.85,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn08",
            x:1.15,
            y:223.50,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn09",
            x:1.15,
            y:251.15,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn10",
            x:1.15,
            y:278.80,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn11",
            x:1.15,
            y:306.45,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn12",
            x:1.15,
            y:334.30,
            width:175,
            height:21,
            size:12,
            textAlign:"center"}
			];
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
							x:0,
							y:0, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];

    var slide_1_type = "DESCRIPTION";
    var slide_1_images = [{name:"2.2.1.3a.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_1_textboxs = [{compId:"ID_s1_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_1_texts = [];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        textboxs:slide_1_textboxs,
        texts:slide_1_texts};


    var slide_2_type = "DESCRIPTION";
    var slide_2_images = [{name:"2.2.1.3b.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_2_textboxs = [{compId:"ID_s2_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_2_texts = [];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        textboxs:slide_2_textboxs,
        texts:slide_2_texts};

    var slide_3_type = "DESCRIPTION";
    var slide_3_images = [{name:"2.2.1.3c.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_3_textboxs = [{compId:"ID_s3_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_3_texts = [];
    var slide_3_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_3_images,
        textboxs:slide_3_textboxs,
        texts:slide_3_texts};

    var slide_4_type = "DESCRIPTION";
    var slide_4_images = [{name:"2.2.1.3d.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_4_textboxs = [{compId:"ID_s4_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_4_texts = [];
    var slide_4_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_4_images,
        textboxs:slide_4_textboxs,
        texts:slide_4_texts};


	var slide_5_type = "DESCRIPTION";
    var slide_5_images = [{name:"2.2.1.3e.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_5_textboxs = [{compId:"ID_s5_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_5_texts = [];
    var slide_5_object = {templateType:slide_5_type,
        x:0,
        y:0,
        images:slide_5_images,
        textboxs:slide_5_textboxs,
        texts:slide_5_texts};
		
		
		
	var slide_6_type = "DESCRIPTION";
    var slide_6_images = [{name:"2.2.1.3f.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_6_textboxs = [{compId:"ID_s6_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_6_texts = [];
    var slide_6_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_6_images,
        textboxs:slide_6_textboxs,
        texts:slide_6_texts};
		
	var slide_7_type = "DESCRIPTION";
    var slide_7_images = [{name:"2.2.1.3g.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_7_textboxs = [{compId:"ID_s7_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_7_texts = [];
    var slide_7_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_7_images,
        textboxs:slide_7_textboxs,
        texts:slide_7_texts};
		
	var slide_8_type = "DESCRIPTION";
    var slide_8_images = [{name:"2.2.1.3h.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_8_textboxs = [{compId:"ID_s8_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_8_texts = [];
    var slide_8_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_8_images,
        textboxs:slide_8_textboxs,
        texts:slide_8_texts};
		
	var slide_9_type = "DESCRIPTION";
    var slide_9_images = [{name:"2.2.1.3i.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_9_textboxs = [{compId:"ID_s9_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_9_texts = [];
    var slide_9_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_9_images,
        textboxs:slide_9_textboxs,
        texts:slide_9_texts};
		
	var slide_10_type = "DESCRIPTION";
    var slide_10_images = [{name:"2.2.1.3j.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_10_textboxs = [{compId:"ID_s10_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_10_texts = [];
    var slide_10_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_10_images,
        textboxs:slide_10_textboxs,
        texts:slide_10_texts};
		
	var slide_11_type = "DESCRIPTION";
    var slide_11_images = [{name:"2.2.1.3k.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_11_textboxs = [{compId:"ID_s11_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_11_texts = [];
    var slide_11_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_11_images,
        textboxs:slide_11_textboxs,
        texts:slide_11_texts};
		
	var slide_12_type = "DESCRIPTION";
    var slide_12_images = [{name:"2.2.1.3l.jpg",
        x:185,
        y:30,
        width:280,
        height:330,
        type:"STD"}];
    var slide_12_textboxs = [{compId:"ID_s12_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_12_texts = [];
    var slide_12_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_12_images,
        textboxs:slide_12_textboxs,
        texts:slide_12_texts};

    var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object,slide_7_object,slide_8_object,slide_9_object,slide_10_object,slide_11_object,slide_12_object];

    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slides};

}