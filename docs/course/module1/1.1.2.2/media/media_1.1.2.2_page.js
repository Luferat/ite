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

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"1_1_2_2_A.jpg",
        x:12,
        y:64,
        width:415.9,
        height:270.6,
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


    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"1_1_2_2_B.jpg",
        x:13,
        y:52,
        width:414,
        height:299,
        type:"STD"}];
    var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};

    var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"1_1_2_2_C.jpg",
        x:14,
        y:42,
        width:414.45,
        height:311.2,
        type:"STD"}];
    var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,
        texts:slide_3_texts};

    var slide_4_type = "IMAGE";
    var slide_4_images = [{name:"1_1_2_2_D.jpg",
        x:11.95,
        y:54,
        width:416.15,
        height:286.2,
        type:"STD"}];
    var slide_4_texts = [{compId:"ID_s4_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_4_object = {templateType:slide_4_type,
        x:0,
        y:0,
        images:slide_4_images,
        texts:slide_4_texts};

    var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}