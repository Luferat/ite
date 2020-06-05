//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"5_3_2_12.jpg",
        x:10,
        y:40,
        width:450,
        height:336,
        type:"STD"}];

    var slide_texts = [{compId:"ID_title",
        x:10,
        y:2,
        width:460,
        height:17,
        size:"16",
        textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);