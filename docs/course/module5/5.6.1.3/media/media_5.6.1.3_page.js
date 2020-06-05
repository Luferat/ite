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
        x:45,
        y:55,
        width:346.05,
        height:250.9}];
    var slide_texts = [{compId:"ID_title",
        x:15,
        y:2,
        width:460,
        height:17,
        size:16,
        textAlign:"center"}];

    return {templateType:template_type, tables:slide_tables, texts:slide_texts};

}

loadScript("../../../common/scripts/swfobject.js", registerSWF);

