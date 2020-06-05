//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_8_1_1.jpg",
        x:0,
        y:35,
        width:470,
        height:400,
        type:""}];

    var slide_texts = [{compId:"ID_title",
        x:11.35,
        y:7.85,
        width:448.10,
        height:17,
        size:16,
        textAlign:"center"}, 
        {compId:"ID_txt01",
        x:-60,
        y:240,
        width:280,
        height:17,
        size:12,
        textAlign:"center"},
        {compId:"ID_txt02",
        x:200,
        y:220,
        width:90,
        height:50,
        size:12,
        border:2,
        background: '#E07F00',
        textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);