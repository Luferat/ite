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
        y:390,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}];

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"6_4_1_3_s1.jpg",
        x:7.45,
        y:41.50,
        width:425.25,
        height:98.35,
        type:"STD"},
        {name:"6_4_1_3_A-1.jpg",
            x:10,
            y:165,
            width:410.25,
            height:290,
            type:""}];
    var slide_1_texts = [{compId:"ID_s1_title",
        x:5,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_s1_txt01",
            x:0,
            y:245,
            width:117,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_s1_txt02",
            x:170,
            y:240.65,
            width:117,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_s1_txt03",
            x:325,
            y:218,
            width:117,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_s1_txt04",
            x:0,
            y:360,
            width:117,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_s1_txt05",
            x:170,
            y:358,
            width:117,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_s1_txt06",
            x:325,
            y:335,
            width:117,
            height:17,
            size:12,
            textAlign:"center"}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};


    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"6_4_1_3_s2_B.jpg",
        x:10.15,
        y:77.10,
        width:241.90,
        height:276.35,
        type:"NONE"},
        {name:"6_4_1_3_s2.jpg",
            x:238.55,
            y:41.30,
            width:188.90,
            height:161.35,
            type:"STD"}];
    var slide_2_texts = [{compId:"ID_s2_title",
        x:5,
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

    /**/

    var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"6_4_1_3_s3.jpg",
            x:50,
            y:30,
            width:437.95,
            height:355,
            type:"STD"}];
    var slide_3_texts = [{compId:"ID_s3_title",
        x:10,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"}];

    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,
        texts:slide_3_texts};

    var slides = [slide_1_object,slide_2_object,slide_3_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}
