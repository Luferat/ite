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

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"10_2_2_2_A.jpg",
							x:96,
							y:23,
							width:248,
							height:330,
							type:"STD"}];
    var slide_1_texts = [{compId:"ID_s1_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        texts:slide_1_texts};


    var slide_2_type = "IMAGE";
    var slide_2_images = [{name:"10_2_2_2_B.jpg",
							x:28.6,
							y:61,
							width:380,
							height:262.4,
							type:"STD"}];
    var slide_2_texts = [{compId:"ID_s2_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        texts:slide_2_texts};

    var slide_3_type = "IMAGE";
    var slide_3_images = [{name:"10_2_2_2_C.jpg",
							x:27.5,
							y:71,
							width:385,
							height:241.65,
							type:"STD"}];
    var slide_3_texts = [{compId:"ID_s3_title",
							x:5,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"}];
    var slide_3_object = {templateType:slide_3_type,
        x:0,
        y:0,
        images:slide_3_images,
        texts:slide_3_texts};

	 var slide_4_type = "IMAGE";
		var slide_4_images = [{name:"10_2_2_2_D.jpg",
								x:57.05,
								y:26,
								width:325.95,
								height:325.95,
								type:"STD"}];
		var slide_4_texts = [{compId:"ID_s4_title",
								x:5,
								y:2, 
								width:460,
								height:17,
								size:16,
								textAlign:"center"}];
		var slide_4_object = {templateType:slide_4_type,
			x:0,
			y:0,
			images:slide_4_images,
			texts:slide_4_texts};
		
    var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}