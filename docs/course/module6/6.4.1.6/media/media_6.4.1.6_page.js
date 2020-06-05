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

    var slide_images = [{name:"6_4_1_6_s1_A.jpg",
						x:5,
						y:60,
						width:461.4,
						height:343.4,
						type:""}];

    var slide_texts = [{compId:"ID_s1_title",
							x:10,
							y:2, 
							width:460,
							height:17,
							size:16,
							textAlign:"center"},
							{compId:"ID_s1_txt01",
							x:165,
							y:143, 
							width:92.65,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt02",
							x:13,
							y:255, 
							width:87.8,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt03",
							x:370,
							y:171.75, 
							width:92.65,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt04",
							x:43,
							y:284, 
							width:27.1,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s1_txt05",
							x:43,
							y:223, 
							width:27.1,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s1_txt06",
							x:404,
							y:226, 
							width:27.1,
							height:17,
							size:12,
							textAlign:"center"},
							{compId:"ID_s1_txt07",
							x:15 ,
							y:178.5, 
							width:75.45,
							height:17.95,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt08",
							x:99,
							y:323.25, 
							width:86.55,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt09",
							x:189,
							y:323.25, 
							width:90.3,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt10",
							x:269,
							y:323.25, 
							width:117.9,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt11",
							x:375,
							y:209.75, 
							width:88.45,
							height:17,
							size:10,
							textAlign:"center"},
							{compId:"ID_s1_txt12",
							x:120,
							y:180, 
							width:187.2,
							height:17,
							size:10,
							textAlign:"center"},];

    var slide_object = {images:slide_images,
        texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

