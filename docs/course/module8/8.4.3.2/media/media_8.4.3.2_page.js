//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"8_4_3_2.jpg",
						x:15,
						y:49.1,
						width:445,
						height:282.2,
						type:"STD"},
						{name:"8_4_3_2a.png",
						x:305,
						y:285,
						width:162,
						height:79,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:30,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:315,
							y:355, 
							width:156,
							height:17,
							size:12,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);