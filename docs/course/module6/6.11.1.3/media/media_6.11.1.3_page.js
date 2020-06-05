loadScript("../../../common/scripts/templates/slide/TableSlideNew.js");
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
    var template_type = "TABLE";
    var slide_tables = [{compId:"ID_table",
        x:19.90,
        y:70.90,
        width:438.25,
        height:258.20}];
    var slide_texts = [];

    return {templateType:template_type, tables:slide_tables, texts:slide_texts};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
