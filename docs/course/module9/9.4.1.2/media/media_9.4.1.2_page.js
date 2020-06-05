//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_4_1_2.jpg",
						x:13.15,
						y:38.55,
						width:443.7,
						height:343,
						type:"STD"},
						{name:"9_4_1_2A.jpg",
						x:25,
						y:222,
						width:151.95,
						height:146.15,
						type:""},
						{name:"9_4_1_2B.jpg",
						x:232,
						y:220,
						width:200,
						height:138,
						type:""},
						{name:"signal.jpg",
						x:25,
						y:50,
						width:191.2,
						height:173.05,
						type:""},
						{name:"signal.jpg",
						x:280,
						y:60,
						width:127.05,
						height:115.05,
						type:""}];

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

