loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;
var TYPE = "MULTI_BAR";

function getData()
{
	var template_type = "MULTI_BAR";
	var commonTexts = [							
		];
	var slide_1_type = "TABLE";
	var slide_1_tables = [{compId:"ID_table",
							x:60,
							y:53,
							width:300,
							height:500}];				
	var slide_1_texts = [{compId:"ID_title",
							x:50,
							y:0,
							width:430,
							height:17,
                            size:16,
							textAlign:"center"},
							{compId:"ID_inst",
							x:5,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"},];
	var slide_1_object = {templateType:slide_1_type,
							x:0,
							y:0,
							tables:slide_1_tables,
							texts:slide_1_texts};
	
	var slide_2_type = "DRAG_DROP";
    var buttonStyle = {normalSkinImage:"../../../common/images/drag_normal.png",
        overSkinImage:"../../../common/images/drop_normal.png",
        dropNormalSkinImage:"../../../common/images/drop_normal.png",
        normalTextStyle:'#FFFFFF',
        overTextStyle:'#006699',
        cornorRadius:5,
        selected:0};

    var buttons = [{compId:"ID_ds_open",
        x:103,
        y:338.5,
        width:100,
        height:30,
        size:12,
        textAlign:"center"},
        {compId:"ID_ds_closed",
            x:221,
            y:338.5,
            width:100,
            height:30,
            size:12,
            textAlign:"center"}        
    ];
    var dropBox = [{compId:"ID_dt_01",
        x:21,
        y:28,
        width:100,
        height:30,
        size:10,
        answer:2,
        textAlign:"center"},
		{compId:"ID_dt_02",
        x:21,
        y:61.1,
        width:100,
        height:30,
        size:10,
        answer:2,
        textAlign:"center"},
		{compId:"ID_dt_03",
        x:21,
        y:94.2,
        width:100,
        height:30,
        size:10,
        answer:1,
        textAlign:"center"},			
		{compId:"ID_dt_04",
        x:21,
        y:127.3,
        width:100,
        height:30,
        size:10,
        answer:2,
        textAlign:"center"},
					
		{compId:"ID_dt_05",
        x:21,
        y:160.4,
        width:100,
        height:30,
        size:10,
        answer:1,
        textAlign:"center"},
		
		{compId:"ID_dt_06",
        x:21,
        y:193.5,
        width:100,
        height:30,
        size:10,
        answer:1,
        textAlign:"center"},
		
		{compId:"ID_dt_07",
        x:21,
        y:226.6,
        width:100,
        height:30,
        size:10,
        answer:2,
        textAlign:"center"},
		
		{compId:"ID_dt_08",
        x:21,
        y:259.7,
        width:100,
        height:30,
        size:10,
        answer:1,
        textAlign:"center"},
		
		{compId:"ID_dt_09",
        x:21,
        y:292.8,
        width:100,
        height:30,
        size:10,
        answer:2,
        textAlign:"center"}        
    ];
    	
	var buttonObject = {style:buttonStyle,
        buttons:buttons};

 
    var slide_2_texts = [{compId:"ID_title",
							x:5,
							y:0,
							width:430,
							height:17,
                            size:16,
						textAlign:"center"},
							
		{compId:"ID_inst",
							x:6,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"},	
	{compId:"ID_q01",
        x:125,
        y:34.5,
        width:287,
        height:17,
        size:12,
        textAlign:"left"},
		
		{compId:"ID_q02",
        x:125,
        y:62.6,
        width:287,
        height:17,
        size:12,
        textAlign:"left"},
		
		{compId:"ID_q03",
        x:125,
        y:96.7,
        width:287,
        height:17,
        size:12,
        textAlign:"left"},
		
		{compId:"ID_q04",
        x:125,
        y:133.80,
        width:287,
        height:17,
        size:12,
        textAlign:"left"},
		
		{compId:"ID_q05",
        x:125,
        y:161.9,
        width:287,
        height:17,
        size:12,
        textAlign:"left"},
		
		{compId:"ID_q06",
        x:125,
        y:200,
        width:287,
        height:17,
        size:12,
        textAlign:"left"},
		
		{compId:"ID_q07",
        x:125,
        y:233.1,
        width:308,
        height:17,
        size:12,
        textAlign:"left"},
		
		{compId:"ID_q08",
        x:125,
        y:260.2,
        width:280,
        height:17,
        size:12,
        textAlign:"left"},
		
		{compId:"ID_q09",
        x:125,
        y:299.3,
        width:287,
        height:17,
        size:12,
        textAlign:"left"},

        
    ];
    var dropObject = {style:buttonStyle,dropBox:dropBox};

    var slide_2_images = [{compId:"ID_image01",
        name:"../../../common/images/dd_bg.png",
        x:0,
        y:25,
        width:410,
        height:300,
        size:12,
        textAlign:"left"},
		{compId:"ID_image02",
        name:"../../../common/images/question_icon.png",
        x:35,
        y:340,
        width:28,
        height:39,
	    clickable:1,
        size:12,
        textAlign:"left"}];
    var submit_buttons = [{compId:"ID_CHECK",
        x:340,
        y:327,
        width:59,
        height:21,
        size:12,
        normalSkinImage:"../../../common/images/btn_normal.png",
        textAlign:"center"},
        {compId:"ID_RESET",
             x:340,
        y:356,
        width:59,
        height:21,
            size:12,
            normalSkinImage:"../../../common/images/btn_normal.png",
            textAlign:"center"}
    ];
    var feedbackObj = [{compId:"ID_FEEDBACK",
        x:170,
        y:77,
        width:172,
        height:23,
        size:12,
        image:"../../../common/images/feedback.png",
        textAlign:"center"}];
	
    var helpObj = [{compId:"ID_HELP",
        x:0,
        y:0,
        width:420,
        height:300,
        size:12,
        image:"../../../common/images/instruction_bg2.png",
        textAlign:"center"},

	{compId:"ID_CONTINUE",
        x:195,
        y:300,
        width:272,
        height:23,
        size:12,
        image:"../../../common/images/btn_normal.png",
        textAlign:"center"}
	];
	
    var instobj = {ansType:"one-many", helpObj:helpObj, isDropLabel:true};
	
 var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts,
							textObject:commonTexts,
							buttonObject:buttonObject,
							slideObject:slide_2_texts,
							slideImages:slide_2_images,
							dropObject:dropObject,
							submitObject:submit_buttons,
							feedbackObj:feedbackObj,
                            instobj:instobj
    };
			
	var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"4_2_1_2_A.jpg",
							x:13,
							y:45.75,
							width:412.05,
							height:286.5,
							type:"STD"}];
	var slide_3_texts = [{compId:"ID_title",
							x:10,
							y:2,
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_inst",
							x:5,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"},];
							
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};
	var slide_4_type = "IMAGE";
	var slide_4_images = [{name:"4_2_1_2_B.jpg",
							x:14.95,
							y:39.85,
							width:410,
							height:298.35,
							type:"STD"}];
	var slide_4_texts = [{compId:"ID_title",
							x:16,
							y:2,
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_inst",
							x:5,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];
							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							images:slide_4_images,
							texts:slide_4_texts};
												
	var slide_5_type = "IMAGE";
	var slide_5_images = [{name:"4_2_1_2_C.jpg",
							x:68.25,
							y:19.5,
							width:303.45,
							height:339.05,
							type:"STD"}];
	var slide_5_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_inst",
							x:5,
							y:379, 
							width:460,
							height:17,
							size:12,
							textAlign:"left"}];	
							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							images:slide_5_images,
							texts:slide_5_texts};
															
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object,slide_5_object];
						
	return {templateType:template_type,
			textObject:commonTexts,
			slideObject:slides};
	
}



