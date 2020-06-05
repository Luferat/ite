//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_2_1_5.jpg",
        x:5.5,
        y:99,
        width:460.2,
        height:167.6,
        type:""}];

    var slide_texts = [{compId:"ID_title",
        x:11.35,
        y:7.85,
        width:448.10,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_txt01",
            x:21,
            y:244,
            width:131.85,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_txt03",
            x:330,
            y:244,
            width:132.75,
            height:17,
            size:12,
            textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);