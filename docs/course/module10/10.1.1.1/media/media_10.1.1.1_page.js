loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/DragDropSlide.js");


function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"../../../common/images/drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_drag01",
        x:154,
        y:203.9,
        width:160,
        height:44,
        size:12,
        textAlign:"center"},
        {compId:"ID_drag02",
            x:154,
            y:254.8,
            width:160,
            height:44,
            size:12,
            textAlign:"center"},
        {compId:"ID_drag03",
            x:154,
            y:305.7,
            width:160,
            height:44,
            size:12,
            textAlign:"center"}
    ];
    var dropBox = [{compId:"ID_drop01",
        x:273,
        y:38,
        width:160,
        height:44,
        size:12,
        answer:2,
        textAlign:"center"},
        {compId:"ID_drop02",
            x:273,
            y:86,
            width:160,
            height:44,
            size:12,
            answer:3,
            textAlign:"center"},
        {compId:"ID_drop03",
            x:273,
            y:134,
            width:160,
            height:44,
            size:12,
            answer:1,
            textAlign:"center"}
    ];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [{compId:"ID_inst",
        x:20,
        y:362.85,
        width:346,
        height:17,
        size:12,
        textAlign:"left"},
        {compId:"ID_title",
            x:120,
            y:2,
            width:300,
            height:17,
            size:16,
            textAlign:"center"}];
    var slide_text = [{compId:"ID_term01",
        x:-10,
        y:45,
        width:277,
        height:17,
        size:10,
        textAlign:"right"},

        {compId:"ID_term02",
            x:-2,
            y:93,
            width:270,
            height:17,
            size:10,
            textAlign:"right"},

        {compId:"ID_term03",
            x:25,
            y:143,
            width:237,
            height:17,
            size:10,
            textAlign:"right"}
    ];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_images = [{compId:"ID_image01",
        name:"../../../common/images/dd_bg.png",
        x:-5,
        y:34,
        width:442,
        height:149.05,
        size:12,
        textAlign:"left"}];
    var submit_buttons = [{compId:"ID_CHECK",
        x:380.95,
        y:343.8,
        width:100,
        height:23,
        size:12,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
            x:380.95,
            y:369.30,
            width:100,
            height:23,
            size:12,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:195,
        y:77,
        width:172,
        height:23,
        size:12,
        image:"../../../common/images/feedback.png",
        textAlign:"center"}];
    var instobj = {ansType:""};
    
    return {templateType:template_type,
        textObject:commonTexts,
        buttonObject:buttonObject,
        slideObject:slide_text,
        slideImages:slide_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
	instobj:instobj
    };

}


