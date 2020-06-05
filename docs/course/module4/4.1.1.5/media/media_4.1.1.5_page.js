loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/AnimationSlide.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 450;

function getData()
{
    var template_type = "ANIMATION";

    var commonTexts = [];

    var slide_animations = [{id:"",
        x:0,
        y:43,
        width:424,
        height:443,
        type:"",
        autoStart:""}];

    var slide_texts = [{compId:"ID_title",
							x:70,
							y:2, 
							width:240,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_images = [{name:"arrow.png",
        x:365,
        y:48,
        width:99,
        height:104,
        type:""}];

    return {templateType:template_type,
        animations:slide_animations,
        texts:slide_texts,
        images:slide_images,
        imageIndex:1 };



}
