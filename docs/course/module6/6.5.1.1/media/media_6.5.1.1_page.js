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
        y:78,
        width:175,
        height:21,
        size:12,
        textAlign:"center"},

        {compId:"ID_btn02",
            x:1.15,
            y:116.1,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},

        {compId:"ID_btn03",
            x:1.15,
            y:154.2,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},

        {compId:"ID_btn04",
            x:1.15,
            y:192.3,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn05",
            x:1.15,
            y:230.4,
            width:175,
            height:21,
            size:12,
            textAlign:"center"},
			
		{compId:"ID_btn06",
            x:1.15,
            y:268.5,
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
					        x:11.35,
					        y:7.85,
					        width:448.10,
					        height:17,
					        size:16,
					        textAlign:"center"},					        
					       ];
	
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"6_5_1_1_A.jpg",
							x:242.2,
							y:135.8, 
							width:224,
							height:106.75,
							type:"None"}];

	var slide_1_texts =  [ ];

	var slide_1_object = {templateType:slide_1_type,
						x:0,
						y:0,
						images:slide_1_images,
						texts:slide_1_texts}; 

	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"6_5_1_1_B.jpg",
							x:214.4,
							y:65.2, 
							width:253,
							height:224,
							type:"None"}];	

	var slide_2_texts =[];

	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};	

	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"6_5_1_1_C.jpg",
							x:219.35,
							y:62, 
							width:226.35,
							height:238.8,
							type:"None"}];								
	var slide_3_texts = [{compId:"ID_s3_title",
					        x:11.35,
					        y:7.85,
					        width:448.10,
					        height:17,
					        size:16,
					        textAlign:"center"},					        
					        {compId:"ID_s3_txt01",
					            x:165,
					            y:280,
					            width:132.75,
					            height:17,
					            size:12,
					            textAlign:"center"}];						
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};	
	
 	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"6_5_1_1_D.jpg",
							x:192.35,
							y:64.4,
							width:262.1,
							height:228.55,
							type:"None"}];								
	var slide_4_texts = [{compId:"ID_s4_title",
					        x:11.35,
					        y:7.85,
					        width:448.10,
					        height:17,
					        size:16,
					        textAlign:"center"},					        
					        {compId:"ID_s4_txt01",
					            x:165,
					            y:290,
					            width:132,
					            height:17,
					            size:12,
					            textAlign:"center"}];						
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};	

 	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"6_5_1_1_E.jpg",
							x:192.35,
							y:64.4,
							width:262.1,
							height:228.55,
							type:"None"}];								
	var slide_5_texts = [{compId:"ID_s5_title",
					        x:11.35,
					        y:7.85,
					        width:448.10,
					        height:17,
					        size:16,
					        textAlign:"center"},					        
					        {compId:"ID_s5_txt01",
					            x:175,
					            y:290,
					            width:132,
					            height:17,
					            size:12,
					            textAlign:"center"}];					
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};

 	var slide_6_type = "IMAGE";
	var slide_6_images = [{name:"6_5_1_1_F.jpg",
							x:186.35,
							y:70, 
							width:278,
							height:241.8,
							type:"None"}];								
	var slide_6_texts = [{compId:"ID_s6_title",
					        x:11.35,
					        y:7.85,
					        width:448.10,
					        height:17,
					        size:16,
					        textAlign:"center"}];						
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							images:slide_6_images,
							texts:slide_6_texts}; 

    var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object,slide_6_object];

    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slides};

}