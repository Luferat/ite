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
							x:30,
							y:23.95, 
							width:300,
							height:500}];				
	var slide_1_texts = [];							
				
	return {templateType:template_type,
			tables:slide_1_tables,
			texts:slide_1_texts};
	
}
