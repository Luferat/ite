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
	var tables = [{compId:"ID_table",
							x:37.05,
							y:59, 
							width:378,
							height:142}];				
	var texts = [];
	
	return {templateType:template_type,
				tables:tables,
				texts:texts};
	
}
