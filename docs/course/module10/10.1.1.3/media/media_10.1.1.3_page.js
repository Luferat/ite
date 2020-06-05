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
    var slide_1_images = [{name:"10_1_1_3_A.jpg",
        x:6.70,
        y:51.45,
        width:426.50,
        height:297.05,
        type:"STD"},
        {name:"highlight.png",
            x:82,
            y:106,
            width:141,
            height:21,
            type:""}];
    var slide_1_texts = [];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};


    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"10_1_1_3_B.jpg",
        x:61.20,
        y:26.40,
        width:319.55,
        height:346.15,
        type:"STD"}];
    var slide_2_texts = [];

    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};

    var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"10_1_1_3_C.jpg",
        x:8.20,
        y:50.80,
        width:425.50,
        height:296.35,
        type:"STD"},
        {name:"highlight.png",
        x:82,
        y:163,
        width:141,
        height:19,
        type:""}];
    var slide_3_texts = [];

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