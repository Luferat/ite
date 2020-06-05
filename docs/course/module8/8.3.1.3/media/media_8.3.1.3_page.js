
loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BAR";
    var commonTexts = [{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}];

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"8_3_1_3_A.jpg",
		x:121,
		y:40.35,
		width:231.25,
		height:346.9,
		type:"STD"},
		{name:"8_3_1_3.png",
		x:124,
		y:80,
		width:192,
		height:38,
		type:""}];
    var slide_1_texts = [{compId:"ID_label01",
        x:14,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};


    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"8_3_1_3_B.jpg",
		x:103.4,
		y:40.2,
		width:231.25,
		height:346.9,
		type:"STD"},
		{name:"8_3_1_3.png",
		x:108,
		y:91,
		width:228,
		height:45,
		type:""}];
    var slide_2_texts = [{compId:"ID_label02",
        x:14,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};

      
    var slides = [slide_1_object, slide_2_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);