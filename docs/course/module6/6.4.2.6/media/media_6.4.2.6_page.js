//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_4_2_6_A.jpg",
        x:0,
        y:0,
        width:470,
        height:400,
        type:"None"},
        {name:"6_4_2_6_B.jpg",
        x:89,
        y:263.15,
        width:299,
        height:128,
        type:"STD"}
        ];

    var slide_texts = [{compId:"ID_title",
        x:160,
        y:7.85,
        width:200,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_image01_txt01",
            x:215,
            y:35.35,
            width:150,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_image01_txt02",
            x:215,
            y:55.35,
            width:230,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_image01_txt03",
            x:220,
            y:75.35,
            width:50,
            height:17,
            size:12,
            textAlign:"center"},
        {compId:"ID_image01_txt04",
            x:225,
            y:95.35,
            width:50,
            height:17,
            size:12,
            textAlign:"center"}
            ,
        {compId:"ID_image01_txt05",
            x:215,
            y:115.35,
            width:50,
            height:17,
            size:12,
            textAlign:"center"}
            ,
        {compId:"ID_image02_txt01",
            x:220,
            y:149.65,
            width:50,
            height:17,
            size:12,
            textAlign:"center"}
            ,
        {compId:"ID_image02_txt02",
            x:210,
            y:169.65,
            width:100,
            height:17,
            size:12,
            textAlign:"center"}
            ,
        {compId:"ID_image02_txt03",
            x:220,
            y:189.65,
            width:50,
            height:17,
            size:12,
            textAlign:"center"}
            ,
        {compId:"ID_image02_txt04",
            x:225,
            y:209.65,
            width:50,
            height:17,
            size:12,
            textAlign:"center"}
            ,
        {compId:"ID_image02_txt05",
            x:215,
            y:229.65,
            width:50,
            height:17,
            size:12,
            textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);