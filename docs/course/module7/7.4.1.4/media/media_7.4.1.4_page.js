//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"7_4_1_4.jpg",
						x:10,
						y:50,
						width:450,
						height:317.75,
						type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:15,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:110,
							y:292.85, 
							width:185,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:272,
							y:292.85, 
							width:97.05,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:355,
							y:292.85, 
							width:97.05,
							height:17,
							size:12,
							textAlign:"center"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);