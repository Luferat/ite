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
							x:36.85,
							y:116, 
							width:357.25,
							height:142}];				
	var texts = [{compId:"ID_title",
							x:25,
							y:2, 
							width:430,
							height:17,
							size:16,
							textAlign:"center"}];								
	
	return {templateType:template_type,
				tables:tables,
				texts:texts};
	
}
