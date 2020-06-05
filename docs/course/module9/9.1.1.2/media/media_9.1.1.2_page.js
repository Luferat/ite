//loadScript("../../../common/scripts/templates/slide/ImageSlideNew.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "IMAGE";

    var slide_images = [{name:"9_1_1_2_A.jpg",
							x:5,
							y:75.85,
							width:145,
							height:96.45,
							type:"STD"},
						{name:"9_1_1_2_B.jpg",
							x:162,
							y:53.85,
							width:145,
							height:96.45,
							type:"STD"},
						{name:"9_1_1_2_C.jpg",
							x:319,
							y:75.85,
							width:145,
							height:96.45,
							type:"STD"},
						{name:"9_1_1_2_D.jpg",
							x:12.5,
							y:224.65,
							width:135,
							height:131.95,
							type:"STD"},
						{name:"9_1_1_2_E.jpg",
							x:169.5,
							y:274.85,
							width:145,
							height:96.45,
							type:"STD"},
						{name:"9_1_1_2_F.jpg",
							x:343.9,
							y:214.85,
							width:104.15,
							height:155.4,
							type:"STD"}];

    var slide_texts = [{compId:"ID_title",
							x:140,
							y:2, 
							width:215,
							height:17,
							size:16,
							textAlign:"center"},
						{compId:"ID_txt01",
							x:12,
							y:179.85, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt02",
							x:169,
							y:157.5, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt03",
							x:330,
							y:179.85, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt04",
							x:73,
							y:363.85, 
							width:134,
							height:17,
							size:12,
							textAlign:"left"},
						{compId:"ID_txt05",
							x:185,
							y:376.5, 
							width:134,
							height:17,
							size:12,
							textAlign:"center"},
						{compId:"ID_txt06",
							x:384,
							y:373.5, 
							width:50,
							height:17,
							size:12,
							textAlign:"left"}];

    var slide_object = {images:slide_images,
        				texts:slide_texts};

    return {templateType:template_type,
        slideObject:slide_object};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
