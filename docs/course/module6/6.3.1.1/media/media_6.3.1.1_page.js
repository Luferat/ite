loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	
	var template_type = "IMAGE";
	var images = [{name:"6_3_1_1.jpg",
							x:63,
							y:33, 
							width:354,
							height:354,
							type:"STD"}];				
	var texts = [{compId:"ID_title",
						x:98,
						y:2,
						width:300,
						height:17,
						size:16,
						textAlign:"center"},
				{compId:"ID_txt01",
						x:92.35,
						y:43.99,
						width:182,
						height:17,
						size:9,
						textAlign:"left"},
				{compId:"ID_txt02",
						x:93,
						y:143.2,
						width:315,
						height:17,
						size:9,
						textAlign:"left"},
				{compId:"ID_txt03",
						x:92.9,
						y:279.2,
						width:200,
						height:17,
						size:9,
						textAlign:"left"}];								
	
	 var slide_object = {images:images,
        				texts:texts};

    return {templateType:template_type,
        slideObject:slide_object};
	
}
