//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"10_2_1_1.jpg",
							x:40.3,
							y:32.85, 
							width:387.35, 
							height:353.25,
							type:"STD"}];
							
	var slide_texts = [{compId:"ID_title",
							x:10,
							y:2, 
							width:460,
							height:40,
							size:16,
							textAlign:"center"},
							{compId:"ID_txt01",
							x:259.35,
							y:67, 
							width:67,
							height:38,
							size:11,
							color:"white",
							textAlign:"center"},
							{compId:"ID_txt02",
							x:379.75,
							y:117, 
							width:17,
							height:114,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt03",
							x:378.75,
							y:255.35, 
							width:17,
							height:104,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt04",
							x:364,
							y:146, 
							width:17,
							height:83,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt05",
							x:364,
							y:238.35, 
							width:17,
							height:104,
							size:14,
							textAlign:"center"},
							{compId:"ID_txt06",
							x:154.35,
							y:100, 
							width:250,
							height:29.95,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt07",
							x:154.35,
							y:124.85, 
							width:250,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt08",
							x:154.35,
							y:215.35, 
							width:250,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt09",
							x:154.35,
							y:263.85, 
							width:250,
							height:17,
							size:10,
							textAlign:"left"},
							{compId:"ID_txt10",
							x:154.35,
							y:301.85, 
							width:250,
							height:17,
							size:10,
							textAlign:"left"}
							];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
