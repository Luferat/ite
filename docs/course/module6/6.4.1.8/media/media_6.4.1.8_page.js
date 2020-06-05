//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_4_1_8A.jpg",
        x:12.95,
        y:110.2,
        width:216.85,
        height:121.8,
        type:"STD"},
        {name:"6_4_1_8A.jpg",
        x:242.3,
        y:110.2,
        width:216.85,
        height:121.8,
        type:"STD"}
        ];

    var slide_texts = [
        {compId:"ID_txt01",
            x:80,
            y:67.85,
            width:80,
            height:17,
            size:14,
            textAlign:"center"},
        {compId:"ID_txt02",
            x:300,
            y:67.85,
            width:80,
            height:17,
            size:14,
            textAlign:"center"},
        {compId:"ID_txt03",
            x:58.4,
            y:262.85,
            width:367,
            height:20.05,
            size:12,
            textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);