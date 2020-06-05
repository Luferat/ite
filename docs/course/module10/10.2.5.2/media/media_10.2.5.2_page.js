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
	
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"../../../common/images/drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};   		
							
	var slide_1_type = "IMAGE";
	var slide_1_images = [{name:"10_2_5_2_A.jpg",
							x:68,
							y:35, 
							width:306,
							height:320,
							type:"STD"}];
	var slide_1_texts = [{compId:"ID_s1_title",
            x:10,
            y:2,
            width:430,
            height:17,
            size:16,
            textAlign:"center"},
			{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}
			];
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							images:slide_1_images,
							texts:slide_1_texts};
							
	var slide_2_type = "IMAGE";
	var slide_2_images = [{name:"10_2_5_2_B.jpg",
							x:68,
							y:35, 
							width:306,
							height:320,
							type:"STD"}];
	var slide_2_texts = [{compId:"ID_s2_title",
            x:10,
            y:2,
            width:430,
            height:17,
            size:16,
            textAlign:"center"},
			{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}
			];
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
							
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"10_2_5_2_C.jpg",
							x:11.35,
							y:49.35, 
							width:420,
							height:280,
							type:"STD"}];
	var slide_3_texts = [{compId:"ID_s3_title",
            x:10,
            y:2,
            width:430,
            height:17,
            size:16,
            textAlign:"center"},
			{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}
			];
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
							
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"10_2_5_2_D.jpg",
							x:84.35,
							y:79.35, 
							width:280,
							height:216,
							type:"STD"}];
	var slide_4_texts = [{compId:"ID_s4_title",
            x:10,
            y:2,
            width:430,
            height:17,
            size:16,
            textAlign:"center"},
			{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}
			];
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
							
	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"10_2_5_2_E.jpg",
							x:64.35,
							y:37.35, 
							width:320,
							height:320,
							type:"STD"}];
	var slide_5_texts = [{compId:"ID_s5_title",
            x:10,
            y:2,
            width:430,
            height:17,
            size:16,
            textAlign:"center"},
			{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}
			];
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};	
	var commonTexts = [{}];
    var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
    return {templateType:template_type,
        textObject:commonTexts,
	slideObject:slides        
    };

}