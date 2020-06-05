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
    var slide_1_images = [{name:"1_2_2_3_A.jpg",
        x:12,
        y:40,
        width:398.75,
        height:391
        }];
    var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};


    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"1_2_2_3_B.jpg",
        x:0,
        y:45,
        width:431.4,
        height:360.85
        }];
    var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};

    var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"1_2_2_3.jpg",
        x:54.4,
        y:31.3,
        width:334,
        height:334,
        type:"STD"}];
    var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:103.3,
							y:34.85, 
							width:104,
							height:17,
							size:14,
							color:"#e31c23",
							textAlign:"center"}];
    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,
        texts:slide_3_texts};

   
    var slides = [slide_1_object,slide_2_object,slide_3_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}