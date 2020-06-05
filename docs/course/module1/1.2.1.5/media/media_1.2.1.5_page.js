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
  
	var template_type = "IMAGE";
	
	var commonTexts = [];
		
	var slide_images = [{name:"1_2_1_5_A.jpg",
        x:13.05,
        y:31.05,
        width:210,
        height:139.3,
        type:"STD"},
        {name:"1_2_1_5_B.jpg",
            x:240.05,
            y:31.05,
            width:208.55,
            height:139.3,
            type:"STD"},
				{name:"1_2_1_5_C.jpg",
            	 x:15.05,
       			 y:220.05,
        		width:210,
        		height:139.3,
        		type:"STD"},
					{name:"1_2_1_5_D.jpg",
            		 x:242.05,
            		 y:220.05,
          			 width:210,
                     height:139.3,
           			 type:"STD"}];
	
							
	var slide_texts = [{compId:"ID_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:20,
							y:181,
							width:196.15,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt02",
							x:247,
							y:181,
							width:196.15,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt03",
							x:22,
							y:370,
							width:196.15,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt04",
							x:249,
							y:370,
							width:196.15,
							height:17,
							size:12,
							textAlign:"center"
							}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}