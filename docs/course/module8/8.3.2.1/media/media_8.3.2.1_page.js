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
    var slide_1_images = [{name:"8_3_2_1A.jpg",
        x:21.85,
        y:51.4,
        width:396.3,
        height:297.25,
        type:"STD"}];
    var slide_1_texts = [{compId:"ID_s1_title",
        x:10,
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
    var slide_2_images = [{name:"8_3_2_1B.jpg",
        x:134.6,
        y:48.1,
        width:170.85,
        height:303.8,
        type:"STD"}];
    var slide_2_texts = [{compId:"ID_s2_title",
        x:10,
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

      
    var slides = [slide_1_object,slide_2_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}