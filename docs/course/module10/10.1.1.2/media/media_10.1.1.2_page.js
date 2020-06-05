//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"10_1_1_2.jpg",
						x:70,
						y:38,
						width:344.95,
						height:344.95,
						type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:35,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_text-01",
							x:285,
							y:166, 
							width:65.1,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_text-02",
							x:285,
							y:195, 
							width:65.1,
							height:17,
							size:14,
							textAlign:"center"},
							{compId:"ID_s1_text-03",
							x:285,
							y:234, 
							width:65.1,
							height:17,
							size:14,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);