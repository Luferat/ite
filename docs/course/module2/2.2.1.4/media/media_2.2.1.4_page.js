loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BUTTON";
    var buttonStyle = {normalSkinImage:"../../../common/images/text_button_gradient.png",
        overSkinImage:"../../../common/images/text_button_gradient_selected.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};
    var buttons = [{compId:"ID_btn01",
        x:0.95,
        y:68.85,
        width:160,
        height:21,
        size:12,
        textAlign:"center"},

        {compId:"ID_btn02",
            x:0.95,
            y:103.20,
            width:160,
            height:21,
            size:12,
            textAlign:"center"},

        {compId:"ID_btn03",
            x:0.95,
            y:141.15,
            width:160,
            height:21,
            size:12,
            textAlign:"center"},

        {compId:"ID_btn04",
            x:0.95,
            y:179.10,
            width:160,
            height:21,
            size:12,
            textAlign:"center"} ];
    var buttonObject = {style:buttonStyle,
        buttons:buttons};
    var commonTexts = [{compId:"ID_inst",
        x:5,
        y:379,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}];

    var slide_1_type = "DESCRIPTION";
    var slide_1_images = [{name:"2.2.1.4a.jpg",
        x:185,
        y:30,
        width:280,
        height:210,
        type:"STD"}];
    var slide_1_textboxs = [{compId:"ID_s1_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_1_texts = [];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        textboxs:slide_1_textboxs,
        texts:slide_1_texts};


    var slide_2_type = "DESCRIPTION";
    var slide_2_images = [{name:"2.2.1.4b.jpg",
        x:200.95,
        y:30,
        width:248,
        height:224,
        type:"STD"}];
    var slide_2_textboxs = [{compId:"ID_s2_caption",
        x:184.95,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_2_texts = [];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        textboxs:slide_2_textboxs,
        texts:slide_2_texts};

    var slide_3_type = "DESCRIPTION";
    var slide_3_images = [{name:"2.2.1.4c.jpg",
        x:225.30,
        y:30,
        width:200,
        height:200,
        type:"STD"}];
    var slide_3_textboxs = [{compId:"ID_s3_caption",
        x:185,
        y:260,
        width:280,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_3_texts = [];
    var slide_3_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_3_images,
        textboxs:slide_3_textboxs,
        texts:slide_3_texts};

    var slide_4_type = "DESCRIPTION";
    var slide_4_images = [{name:"2.2.1.4d.jpg",
        x:209,
        y:30,
        width:231.90,
        height:224,
        type:"STD"}];
    var slide_4_textboxs = [{compId:"ID_s4_caption",
        x:185,
        y:260,
        width:270,
        height:100,
        size:12,
        type:"PLAIN",
        color:"#E0D5E6"}];
    var slide_4_texts = [];
    var slide_4_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_4_images,
        textboxs:slide_4_textboxs,
        texts:slide_4_texts};

    var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];

    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slides};

}