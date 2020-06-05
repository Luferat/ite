//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_9_1_3.jpg",
        x:2.2,
        y:85.9,
        width:446,
        height:239,
        type:""}];

    var slide_texts = [{compId:"ID_title",
        x:11.35,
        y:7.85,
        width:448.10,
        height:17,
        size:16,
        textAlign:"center"}, 
        
        {compId:"ID_txt02",
        x:250,
        y:250,
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