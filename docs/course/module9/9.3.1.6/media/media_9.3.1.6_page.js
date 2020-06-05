//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_3_1_6.jpg",
						x:12,
						y:50,
						width:460,
						height:350,
						type:""}];

    var slide_texts = [{compId:"ID_title",
							x:20,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:140,
							y:65.85, 
							width:110,
							height:17,
							size:12,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"ID_txt02",
							x:252,
							y:65.85, 
							width:90,
							height:17,
							size:12,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"ID_txt03",
							x:363,
							y:65.85, 
							width:90,
							height:17,
							size:12,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"ID_txt04",
							x:51,
							y:134.85, 
							width:200,
							height:17,
							size:16,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"ID_txt05",
							x:54,
							y:174, 
							width:125,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt06",
							x:193,
							y:174, 
							width:125,
							height:17,
							size:12,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"ID_txt07",
							x:330,
							y:174, 
							width:125,
							height:17,
							size:12,
							color:"#ffffff",
							textAlign:"left"},
							{compId:"ID_txt08",
							x:59,
							y:265, 
							width:268,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt09",
							x:350,
							y:289, 
							width:70,
							height:17,
							size:12,
							textAlign:"left"},
							{compId:"ID_txt10",
							x:75,
							y:325, 
							width:253,
							height:17,
							size:10,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);


