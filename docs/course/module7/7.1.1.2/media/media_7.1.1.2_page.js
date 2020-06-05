loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "MULTI_BAR";

    var commonTexts = [{compId:"ID_inst",
        x:5,
        y:380,
        width:460,
        height:17,
        size:12,
        textAlign:"left"}];

    var slide_1_type = "IMAGE_POPOVER";

    var slide_1_texts = [{compId:"ID_s01_title",
        x:10,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_sub_inst",
            x:9.3,
            y:282.85,
            width:430,
            height:17,
            size:12,
            textAlign:"left"}];
    var slide_1_images = [{name:"7_1_1_2_A.jpg",
        x:17.50,
        y:24.75,
        width:403.75,
        height:253.30,
        type:""}];
    var slide_1_hotSpots = [{name:"images/hotspot_s1_01.png",
        x:78.15,
        y:45.85,
        textBoxId:"ID_s01_cap01",
        textBoxX:6,
        textBoxY:280.3,
        textBoxWidth:420,
        textBoxHeight:93,
        popupImage:"images/popup_s01_hot01.png",
        popupImageX:38.75,
        popupImageY:36.55
    },
       {name:"images/hotspot_s1_02.png",
            x:171.8,
            y:181.45,
            textBoxId:"ID_s01_cap02",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s01_hot02.png",
            popupImageX:171.8,
            popupImageY:181.45
        }, 
        {name:"images/hotspot_s1_03.png",
            x:334.25,
            y:205.35,
            textBoxId:"ID_s01_cap03",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s01_hot03.png",
            popupImageX:302.50,
            popupImageY:167
        },
        {name:"images/hotspot_s1_04.png",
            x:135.35,
            y:49.10,
            textBoxId:"ID_s01_cap04",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s01_hot04.png",
            popupImageX:110.05,
            popupImageY:37.50
        },
        {name:"images/hotspot_s1_05.png",
            x:230.15,
            y:49.60,
            textBoxId:"ID_s01_cap05",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s01_hot05.png",
            popupImageX:186.55,
            popupImageY:32.70
        }];
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,
        hotSpots:slide_1_hotSpots,
        texts:slide_1_texts};

    var slide_2_type = "IMAGE_POPOVER";

    var slide_2_texts = [{compId:"ID_s02_title",
        x:10,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"},
        {compId:"ID_sub_inst",
            x:9.3,
            y:282.85,
            width:430,
            height:17,
            size:12,
            textAlign:"left"}];
    var slide_2_images = [{name:"7_1_1_2_B.jpg",
        x:17.50,
        y:24.75,
        width:403.75,
        height:253.30,
        type:""}];
    var slide_2_hotSpots = [{name:"images/hotspot_s2_01.png",
        x:67,
        y:144.75,
        textBoxId:"ID_s02_cap01",
        textBoxX:6,
        textBoxY:280.3,
        textBoxWidth:420,
        textBoxHeight:93,
        popupImage:"images/popup_s02_hot01.png",
        popupImageX:57.20,
        popupImageY:129.5
    },
        {name:"images/hotspot_s2_02.png",
            x:134.65,
            y:151.50,
            textBoxId:"ID_s02_cap02",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s02_hot02.png",
            popupImageX:112.35,
            popupImageY:130.50
        },
        {name:"images/hotspot_s2_03.png",
            x:161.95,
            y:151.50,
            textBoxId:"ID_s02_cap03",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s02_hot03.png",
            popupImageX:139.40,
            popupImageY:130.5
        },
        {name:"images/hotspot_s2_04.png",
            x:187.40,
            y:151.50,
            textBoxId:"ID_s02_cap04",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s02_hot04.png",
            popupImageX:166.50,
            popupImageY:130.5
        },
        {name:"images/hotspot_s2_05.png",
            x:225.60,
            y:151.90,
            textBoxId:"ID_s02_cap05",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s02_hot05.png",
            popupImageX:204.05,
            popupImageY:130.5
        },
        {name:"images/hotspot_s2_06.png",
            x:251.70,
            y:151.50,
            textBoxId:"ID_s02_cap06",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s02_hot06.png",
            popupImageX:231.10,
            popupImageY:130.5
        },
        {name:"images/hotspot_s2_07.png",
            x:276.45,
            y:151.50,
            textBoxId:"ID_s02_cap07",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s02_hot07.png",
            popupImageX:255.55,
            popupImageY:130.5
        },
        {name:"images/hotspot_s2_08.png",
            x:301,
            y:151.50,
            textBoxId:"ID_s02_cap08",
            textBoxX:6,
            textBoxY:280.3,
            textBoxWidth:420,
            textBoxHeight:93,
            popupImage:"images/popup_s02_hot08.png",
            popupImageX:279.15,
            popupImageY:130.5
        }
       ];
    var slide_2_object = {templateType:slide_2_type,
        x:0,
        y:0,
        images:slide_2_images,
        hotSpots:slide_2_hotSpots,
        texts:slide_2_texts};



    var slide_object = [slide_1_object,slide_2_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slide_object};



}
