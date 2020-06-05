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
    var slide_1_images = [{name:"1_3_1_10_s1_A.jpg",
        x:18,
        y:64.95,
        width:404.9,
        height:268.4,
        type:"STD"}];
					 
    var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:30,
							y:287.85,
							width:53.3,
							height:17,
							size:10,
							textAlign:"center"
							},
							{compId:"ID_s1_txt02",
							x:90,
							y:287.85,
							width:60,
							height:17,
							size:10,
							textAlign:"center"
							},
							{compId:"ID_s1_txt03",
							x:160.55,
							y:287.85,
							width:83.05,
							height:17,
							size:10,
							textAlign:"center"
							},
							{compId:"ID_s1_txt04",
							x:255.9,
							y:287.85,
							width:53.35,
							height:17,
							size:10
							},
							{compId:"ID_s1_txt05",
							x:305.8,
							y:287.85,
							width:52.35,
							height:17,
							size:10,
							textAlign:"center"
							},
							{compId:"ID_s1_txt06",
							x:359.65,
							y:287.85,
							width:53.35,
							height:17,
							size:10,
							textAlign:"center"
							}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};
		
		

	var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"1_3_1_10_s2.jpg",
							x:2,
							y:50,
							width:430,
							height:313,
							type:"STD"}];
    var slide_2_texts = [{compId:"ID_s2_title",
      						x:8,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
		images:slide_2_images,
        texts:slide_2_texts};
		
	
	var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"1_3_1_10_s3_A.jpg",
        x:16.35,
        y:102.4,
        width:196,
        height:146.25,
        type:"STD"},
        {name:"1_3_1_10_s3_B.jpg",
            x:228.4,
            y:102.4,
            width:196,
            height:147.25,
            type:"STD"}];
					 
    var slide_3_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s3_txt01",
							x:17.75,
							y:260.55,
							width:87.55,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s3_txt02",
							x:115.75,
							y:260.55,
							width:93.05,
							height:17,
							size:12,
							textAlign:"center"
							},
							{compId:"ID_s3_txt03",
							x:232.2,
							y:260.55,
							width:188.4,
							height:17,
							size:12,
							textAlign:"center"
							}];
    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,
        texts:slide_3_texts};

	var slide_4_type = "TABLE";
    var slide_4_tables = [{compId:"ID_s4_table",
							x:16,
							y:70,
							width:400,
							height:400}];
    var slide_4_texts = [{compId:"ID_s4_title",
      						x:2,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_4_object = {templateType:slide_4_type,
        x:0,
        y:0,
        tables:slide_4_tables,
        texts:slide_4_texts};
		
	var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];
  
   
    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}