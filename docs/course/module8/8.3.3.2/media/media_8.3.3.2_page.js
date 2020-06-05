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

   
    var buttons = [{compId:"ID_drag03",
        x:4,
        y:60,
        width:155,
        height:55,
        size:11,
        textAlign:"center"},
        {compId:"ID_drag04",
            x:4,
            y:126,
            width:155,
            height:55,
            size:11,
            textAlign:"center"},
        {compId:"ID_drag01",
            x:4,
            y:193,
            width:155,
            height:55,
            size:11,
            textAlign:"center"},
        {compId:"ID_drag02",
            x:4,
            y:259,
            width:155,
            height:55,
            size:11,
            textAlign:"center"}];
					
					
	var dropBox = [{compId:"ID_drop01",
            x:258,
            y:60,
            width:155,
            height:55,
            size:12,
            answer:3,           
        textAlign:"center"},
        {compId:"ID_drop02",
            x:258,
            y:126,
            width:155,
            height:55,
            size:12,
            answer:4,
            textAlign:"center"},
        {compId:"ID_drop03",
           x:258,
            y:193,
            width:155,
            height:55,
            size:12,
            answer:1,
            textAlign:"center"},
        {compId:"ID_drop04",
            x:258,
            y:259,
            width:155,
            height:55,
            size:12,
            answer:2,
            textAlign:"center"}];		
					
					

    var buttonObject = {style:buttonStyle,
        buttons:buttons};

    var commonTexts = [ ];

   
    var dropObject = {style:buttonStyle,dropBox:dropBox};
	
	var slide_3_texts = [
	{compId:"ID_title",
            x:0,
            y:0,
            width:430,
            height:17,
            size:16,
            textAlign:"center"},
			
			{compId:"ID_inst",
	    x:5,
        y:350,
        width:319,
        height:17,
        size:12,
        textAlign:"left"},
	{compId:"ID_def01",
            x:169.3,
            y:79,
            width:85,
            height:17,
            size:12,
                      
        textAlign:"center"},
        {compId:"ID_def02",
            x:169.3,
            y:145.65,
            width:85,
            height:17,
            size:12,
           
            textAlign:"center"},
        {compId:"ID_def03",
           x:169.3,
            y:212.3,
            width:85,
            height:17,
            size:12,
            
            textAlign:"center"},
        {compId:"ID_def04",
            x:169.3,
            y:278.95,
            width:85,
            height:17,
            size:12,
          
            textAlign:"center"}];

    var slide_images = [{compId:"ID_image01",
        name:"../../../common/images/dd_bg.png",
        x:167,
        y:53,
        width:267,
        height:269,
        size:12,
        textAlign:"left"}];
    var submit_buttons = [{compId:"ID_CHECK",
        x:346,
        y:345,
        width:100,
        height:23,
        size:12,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
            x:346,
            y:374,
            width:100,
            height:23,
            size:12,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
	
	 
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:180,
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
        slideObject:slide_3_texts,
        slideImages:slide_images,
        dropObject:dropObject,
        submitObject:submit_buttons,
        feedbackObj:feedbackObj,
	instobj:instobj
    };

}

