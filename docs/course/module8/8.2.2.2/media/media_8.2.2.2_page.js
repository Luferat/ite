//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"8.2.2.2a.jpg",
						x:15,
						y:81,
						width:420,
						height:281.25,
						type:"STD"},
						{name:"8.2.2.2a1.png",
						x:55,
						y:50,
						width:390,
						height:333,
						type:""}];
    var slide_texts = [{compId:"ID_title",
							x:25,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:115,
							y:51.35, 
							width:130.5,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt03",
							x:315,
							y:51.35, 
							width:130,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt02",
							x:400,
							y:34.85, 
							width:91.5,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt04",
							x:195,
							y:360, 
							width:130,
							height:17,
							size:12,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);