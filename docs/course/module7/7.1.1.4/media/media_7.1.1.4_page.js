loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/AnimationSlide.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{

    var slide_type = "ANIMATION";

    var slide_animations = [{id:"SLIDE_1",
        x:9.15,
        y:0,
        width:453,
        height:343,
        type:"",
        autoStart:""}];

    var slide_texts = [{compId:"ID_title",
        x:25,
        y:2,
        width:459.95,
        height:17,
        size:16,
        textAlign:"center"}];
    var slide_images = [];

    return {templateType:slide_type,
        animations:slide_animations,
        images:slide_images,
        texts:slide_texts};

}
