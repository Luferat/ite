//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"6_2_1_7.jpg",
							x:50,
							y:80, 
							width:392,
							height:256,
							type:""}];
	var slide_texts = [{compId:"ID_title",
                            x:0,
                            y:2,
                            width:460,
                            height:17,
                            size:16,
                            textAlign:"center"},
                        {compId:"ID_txt01",
                            x:55,
                            y:33.85,
                            width:150,
                            height:17,
                            size:11,
                            textAlign:"left"},
                        {compId:"ID_txt02",
                            x:340,
                            y:90,
                            width:150,
                            height:17,
                            size:11,
                            textAlign:"left"},
                       {compId:"ID_txt03",
                            x:268,
                            y:160,
                            width:150,
                            height:17,
                            size:11,
                            textAlign:"left"},
                        {compId:"ID_txt04",
                            x:190,
                            y:230,
                            width:150,
                            height:17,
                            size:11,
                            textAlign:"left"},
                       {compId:"ID_txt05",
                            x:118,
                            y:290,
                            width:182,
                            height:17,
                            size:11,
                            textAlign:"left"}];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);