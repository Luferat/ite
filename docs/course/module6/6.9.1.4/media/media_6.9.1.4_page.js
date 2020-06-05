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
	var images = [{name:"6_9_1_4.jpg",
							x:2,
							y:33.15, 
							width:430,
							height:344,
							type:""}];				
	var texts = [{compId:"ID_title",
						x:5,
						y:2,
						width:460,
						height:17,
						size:16,
						textAlign:"center"},
				
				{compId:"ID_txt04",
						x:367.55,
						y:131.1,
						width:104.7,
						height:17,
						size:12,
						textAlign:"left"},
				{compId:"ID_txt05",
						x:153.65,
						y:128.9,
						width:104,
						height:17,
						size:12,
						textAlign:"right"}];								
	
	 var slide_object = {images:images,
        				texts:texts};

    return {templateType:template_type,
        slideObject:slide_object};
	
}
