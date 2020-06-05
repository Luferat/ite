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
    var slide_1_images = [{name:"1_2_1_6_S1_A.jpg",
        x:40,
        y:37,
        width:163.75,
        height:126,
        type:"STD"},
        {name:"1_2_1_6_S1_B.jpg",
            x:241.95,
            y:37,
            width:163.75,
            height:126,
            type:"STD"},
				{name:"1_2_1_6_S1_C.jpg",
            	 x:40,
       			 y:210,
        		width:185,
        		height:170,
        		type:"STD"},
					{name:"1_2_1_6_S1_D.jpg",
            		 x:241.95,
            		 y:210,
          			 width:163.75,
                     height:126,
           			 type:"STD"}];
					 
    var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_title01",
							x:40,
							y:173.85,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s1_title02",
							x:241.95,
							y:173.85,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s1_title03",
							x:40,
							y:346.85,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s1_title04",
							x:241.95,
							y:346.85,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};

	
	
	
	var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"1_2_1_6_S2_A.jpg",
        x:65,
        y:45,
        width:310,
        height:310,
        type:"STD"}];
					 
    var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:90.35,
							y:143.85,
							width:67,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt02",
							x:150.35,
							y:158,
							width:65,
							height:23.5,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt03",
							x:215.85,
							y:158,
							width:65,
							height:23.5,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt04",
							x:275,
							y:148,
							width:67,
							height:17,
							size:12
							},
							{compId:"ID_txt05",
							x:90.35,
							y:290,
							width:67,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt06",
							x:142.35,
							y:300,
							width:65,
							height:23.5,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt07",
							x:200.85,
							y:300.85,
							width:65,
							height:23.5,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt08",
							x:260,
							y:295,
							width:65,
							height:23.5,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt09",
							x:270,
							y:258,
							width:163.75,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_txt10",
							x:200,
							y:66.8,
							width:154,
							height:17,
							size:16,
							textAlign:"center"
							},
							{compId:"ID_txt11",
							x:130,
							y:193,
							width:300,
							height:17,
							size:16,
							textAlign:"left"
							}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};

	var slide_3_type = "TABLE";
    var slide_3_tables = [{compId:"ID_table",
        x:10,
        y:35,
        width:400,
        height:400}];
    var slide_3_texts = [{compId:"ID_s3_title",
      						x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        tables:slide_3_tables,
        texts:slide_3_texts};
	
	
		
	var slides = [slide_1_object,slide_2_object,slide_3_object];
  
   
    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}