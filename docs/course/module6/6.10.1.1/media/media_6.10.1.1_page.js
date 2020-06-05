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
	var images = [{name:"6_10_1_1.jpg",
							x:70.8,
							y:45.3, 
							width:328.4,
							height:328.4,
							type:"STD"}];				
	var texts = [{compId:"ID_title",
						x:15,
						y:2,
						width:460,
						height:17,
						size:16,
						textAlign:"center"}];								
	
	 var slide_object = {images:images,
        				texts:texts};

    return {templateType:template_type,
        slideObject:slide_object};
	
}
