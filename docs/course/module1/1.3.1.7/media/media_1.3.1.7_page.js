loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
//loadScript("../../../common/scripts/templates/slide/MultiButtonSlide.js");

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
    var slide_1_images = [{name:"1_3_1_7_S1_A.jpg",
        x:67.5,
        y:50,
        width:305,
        height:300,
        type:"STD"}];
    var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
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
    var slide_2_images = [{name:"1_3_1_7_S2_A.jpg",
        x:40,
        y:37,
        width:163.75,
        height:126,
        type:"STD"},
        {name:"1_3_1_7_S2_B.jpg",
            x:241.95,
            y:37,
            width:163.75,
            height:126,
            type:"STD"},
				{name:"1_3_1_7_S2_C.jpg",
            	 x:40,
           		 y:210,
            	 width:163.75,
           		 height:126,
            	 type:"STD"},
					{name:"1_3_1_7_S2_D.jpg",
            		 x:241.95,
            		 y:210,
          			 width:163.75,
                     height:126,
           			 type:"STD"}];
					 
    var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s2_txt01",
							x:40,
							y:173.85,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s2_txt02",
							x:241.95,
							y:173.85,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s2_txt03",
							x:40,
							y:346.85,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s2_txt04",
							x:241.95,
							y:346.85,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};

	
	
	
	
		
	var slides = [slide_1_object,slide_2_object];
  
   
    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}