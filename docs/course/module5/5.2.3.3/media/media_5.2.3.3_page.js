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
        x:40,
        y:79.45,
        width:409,
        height:250.2}];
    var slide_texts = [{compId:"ID_s1_title",
        x:5,
        y:2,
        width:460,
        height:17,
        size:16,
        textAlign:"center"}];

    return {templateType:template_type, tables:slide_tables, texts:slide_texts};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

