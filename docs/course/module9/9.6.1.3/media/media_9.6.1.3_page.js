loadScript("../../../common/scripts/swfobject.js", registerSWF);
loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "TABLE";

    var slide_1_tables = [{compId:"ID_table",
        x:25,
        y:131.75}];
    var slide_1_texts = [{compId:"ID_title",
        x:25,
        y:2,
        width:430,
        height:17,
        size:16,
        textAlign:"center"}];

    return {templateType:template_type,
        tables:slide_1_tables,
        texts:slide_1_texts};

}

