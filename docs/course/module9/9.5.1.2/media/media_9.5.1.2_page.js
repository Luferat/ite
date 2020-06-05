//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_5_1_2.jpg",
						x:0,
						y:42,
						width:477,
						height:389,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:140,
							y:2, 
							width:215,
							height:17,
							size:16,
							textAlign:"center"},
						{compId:"ID_txt01",
							x:32,
							y:64, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt02",
							x:175,
							y:64, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt03",
							x:320,
							y:64, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt04",
							x:44,
							y:111, 
							width:350,
							height:17,
							size:12,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
