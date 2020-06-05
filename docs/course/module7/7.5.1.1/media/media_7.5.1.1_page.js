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

    var slide_1_type = "TABLE";
    var slide_1_tables = [{compId:"ID_s1_table01",
        x:8,
        y:38,
        width:409.80,
        height:121.80},
        {compId:"ID_s1_table02",
            x:8,
            y:220,
            width:409.80,
            height:121.80}];
    var slide_1_texts = [{compId:"ID_s1_title",
        x:8,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        tables:slide_1_tables,
        texts:slide_1_texts};


    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"7_5_1_1.jpg",
        x:8.95,
        y:35.45,
        width:422.95,
        height:319,
        type:"STD"}];
    var slide_2_texts = [{compId:"ID_s2_title",
        x:15,
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