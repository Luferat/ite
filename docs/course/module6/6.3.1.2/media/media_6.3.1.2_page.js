//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_3_1_2.jpg",
        x:0,
        y:10,
        width:462,
        height:391,
        type:""}];

    var slide_texts = [{compId:"ID_title01",
        x:6,
        y:14,
        width:452.90,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_title02",
            x:8,
            y:220,
            width:452.90,
            height:17,
            size:16,
            textAlign:"center"},
       {compId:"ID_bubble01",
            x:45,
            y:40.35,
            size:12,
            textAlign:"left"},
        {compId:"ID_bubble02",
            x:268.35,
            y:40.35,
            size:12,
            textAlign:"left"},
        {compId:"ID_bubble03",
            x:146,
            y:243,
            size:12,
            textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);