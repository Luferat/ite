//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	var template_type = "IMAGE";
		
	var slide_images = [{name:"7.0.1.1a.jpg",
							x:33,
							y:57, 
							width:180, 
							height:120,
							type:"STD"},
							{name:"7.0.1.1b.jpg",
							x:258,
							y:57, 
							width:180, 
							height:120,
							type:"STD"},
							{name:"7.0.1.1d.jpg",
							x:33,
							y:222, 
							width:180, 
							height:120.05,
							type:"STD"},
							{name:"7.0.1.1e.jpg",
							x:258,
							y:222, 
							width:180, 
							height:120.05,
							type:"STD"},
							{name:"7.0.1.1c.jpg",
							x:147.25,
							y:127.9, 
							width:180, 
							height:139.5,
							type:"STD"},
							];
							
	var slide_texts = [{compId:"ID_title",
            x:10,
            y:2,
            width:460,
            height:17,
            size:16,
            textAlign:"center"}];
							
	var slide_object = {images:slide_images,
						texts:slide_texts};
						
	return {templateType:template_type,
			slideObject:slide_object};
	
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
