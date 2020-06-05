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
  
    var buttons = [{compId:"ID_s1_drag03",
        x:10,
        y:70,
        width:160,
        height:60,
        size:9,
        textAlign:"left"},
        {compId:"ID_s1_drag02",
            x:10,
        	y:141.5,
        	width:160,
        	height:60,
            size:9,
            textAlign:"left"},
        {compId:"ID_s1_drag01",
            x:10,
        	y:213,
        	width:160,
        	height:60,
            size:9,
            textAlign:"left"}];
    var dropBox = [{compId:"ID_s1_drop01",
            x:260,
            y:70,
            width:160,
            height:60,
            size:10,
            answer:3,           
        textAlign:"center"},
        {compId:"ID_s1_drop02",
            x:260,
            y:141.5,
            width:160,
            height:60,
            size:10,
            answer:2,
            textAlign:"center"},
        {compId:"ID_s1_drop03",
            x:260,
            y:213,
            width:160,
            height:60,
            size:10,
            answer:1,
            textAlign:"center"}];

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [{}];
    var slide_1_texts = [{compId:"ID_s1_title",
            x:10,
            y:2,
            width:430,
            height:17,
            size:16,
            textAlign:"center"},
        { compId:"ID_s1_inst",
    x:20,
    y:340,
    width:321,
    height:17,
    size:12,
    textAlign:"left"},
			{compId:"ID_s1_txt01",
        x:242.35,
        y:87.5,
        width:180,
        height:19,
        size:10,
        textAlign:"center"},
		{compId:"ID_s1_txt02",
        x:242.35,
        y:170.5,
        width:180,
        height:19,
        size:10,
        textAlign:"center"},
		{compId:"ID_s1_txt03",
        x:201.4,
        y:49.9,
        width:439.05,
        height:17,
        size:10,
        textAlign:"center"},
		{compId:"ID_s1_def01",
        x:182,
        y:90.5,
        width:73.35,
        height:17,
        size:12,
        textAlign:"center"},
		{compId:"ID_s1_def02",
        x:182,
        y:162,
        width:73.35,
        height:17,
        size:12,
        textAlign:"center"},
		{compId:"ID_s1_def03",
        x:182,
        y:233.5,
        width:73.35,
        height:17,
        size:12,
        textAlign:"center"}
		];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_1_images = [{compId:"ID_image01",
        name:"../../../common/images/dd_bg.png",
        x:185,
        y:63.45,
        width:260,
        height:216,
        size:12,
        textAlign:"left"}];
    var submit_buttons = [{compId:"ID_CHECK",
        x:352.5,
        y:330,
        width:79.8,
        height:21,
        size:9,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
            x:352.5,
            y:358,
            width:75.9,
            height:21,
            size:10,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:103,
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
        slideObject:slide_1_texts,
        slideImages:slide_1_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
	instobj:instobj
    };

}


