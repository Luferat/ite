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

    var slide_1_type = "DESCRIPTION";
    var slide_1_images = [{name:"2_2_1_5_s1.jpg",
        x:225,
        y:35.35,
        width:210,
        height:323,
        type:"STD"}];
    var slide_1_textboxs = [{compId:"ID_s1_txt01",
        x:10.30,
        y:130.35,
        width:200,
        height:60,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];

    var slide_1_texts = [{compId:"ID_s1_title",
        x:5,
        y:2,
        width:429.05,
        height:17,
        size:16,
        textAlign:"center"}];

    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        textboxs:slide_1_textboxs,
        texts:slide_1_texts};


    var slide_2_type = "DESCRIPTION";
    var slide_2_images = [{name:"2_2_1_5_s2.jpg",
        x:109.40,
        y:55.35,
        width:233,
        height:189,
        type:"STD"}];
    var slide_2_textboxs = [{compId:"ID_s2_txt01",
        x:109.40,
        y:257.35,
        width:233,
        height:60,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_2_texts = [{compId:"ID_s2_title",
        x:5,
        y:2,
        width:420.05,
        height:17,
        size:16,
        textAlign:"center"}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        textboxs:slide_2_textboxs,
        texts:slide_2_texts};


    var slide_3_type = "DESCRIPTION";
    var slide_3_images = [{name:"2_2_1_5_s3.jpg",
        x:215.25,
        y:31.35,
        width:210.50,
        height:335.90,
        type:"STD"}];
    var slide_3_textboxs = [{compId:"ID_s3_txt01",
        x:10.80,
        y:106.35,
        width:190,
        height:60,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_3_texts = [{compId:"ID_s3_title",
        x:5,
        y:2,
        width:425.05,
        height:17,
        size:16,
        textAlign:"center"}];
    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,
        textboxs:slide_3_textboxs,
        texts:slide_3_texts};

    var slide_4_type = "DESCRIPTION";
    var slide_4_images = [{name:"2_2_1_5_s4.jpg",
        x:32.15,
        y:29.40,
        width:378,
        height:253,
        type:"STD"}];
    var slide_4_textboxs = [{compId:"ID_s4_txt01",
        x:33.35,
        y:292.35,
        width:378,
        height:60,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_4_texts = [{compId:"ID_s4_title",
        x:5,
        y:2,
        width:429.05,
        height:60,
        size:16,
        textAlign:"center"}];
    var slide_4_object = {templateType:slide_4_type,
        x:0,
        y:0,
        images:slide_4_images,
        textboxs:slide_4_textboxs,
        texts:slide_4_texts};

   var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}