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
							x:19.9,
							y:107.95, 
							width:438.25,
							height:184.1}];				
	var texts = [];								
	
	return {templateType:template_type,
				tables:tables,
				texts:texts};
	
}



