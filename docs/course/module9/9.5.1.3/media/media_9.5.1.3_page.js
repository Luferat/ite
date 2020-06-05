//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_5_1_3.jpg",
						x:0,
						y:45,
						width:477,
						height:389,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:175,
							y:2, 
							width:134,
							height:17,
							size:16,
							textAlign:"center"},
						{compId:"ID_txt01",
							x:28,
							y:65, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt02",
							x:175,
							y:65,  
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt03",
							x:320,
							y:65, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt04",
							x:100,
							y:103, 
							width:350,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_txt08",
							x:115,
							y:117, 
							width:350,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_txt05",
							x:100,
							y:173, 
							width:350,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_txt09",
							x:115,
							y:186, 
							width:350,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_txt06",
							x:100,
							y:245, 
							width:350,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_txt10",
							x:115,
							y:260, 
							width:350,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_txt07",
							x:100,
							y:315, 
							width:350,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_txt11",
							x:115,
							y:329, 
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
