//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_2_1_4.jpg",
        x:6.15,
        y:50,
        width:454,
        height:302,
        type:""}];

    var slide_texts = [{compId:"ID_title",
        x:11.35,
        y:7.85,
        width:448.10,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_txt01",
            x:20,
            y:170,
            width:104,
            height:17,
            size:12,
            textAlign:"center"},
       {compId:"ID_txt02",
            x:180.05,
                y:198.20,
            width:122.35,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_txt03",
            x:318,
            y:125,
            width:70.15,
            height:17,
            size:12,
            textAlign:"center"},
       {compId:"ID_txt04",
            x:20,
            y:360,
            width:104,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_txt05",
            x:345,
            y:355,
            width:104,
            height:17,
            size:12,
            textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
