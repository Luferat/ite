//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"10_1_2_1.jpg",
        x:54.75,
        y:201.9,
        width:359.35,
        height:96,
        type:""},
       {name:"bubble-1.png",
            x:3,
            y:55,
            width:250,
            height:180,
            type:""},

        {name:"bubble-2.png",
            x:260,
            y:129,
            width:192,
            height:153,
            type:""}];

    var slide_texts = [{compId:"ID_bubble01",
        x:30,
        y:78,
        width:218,
        height:140,
        size:12,
        textAlign:"left"},
       {compId:"ID_bubble02",
            x:282,
            y:140,
            width:188,
            height:148,
            size:12,
            textAlign:"left"},
         {compId:"ID_txt01",
            x:72,
            y:302,
            width:100,
            height:17,
            size:12,
            textAlign:"left"},
          {compId:"ID_txt02",
            x:325,
            y:302,
            width:100,
            height:17,
            size:12,
            textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);