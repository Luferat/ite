loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	
							
	var slide_4_type = "TABLE";
	var slide_4_tables = [{compId:"ID_table",
							x:35,
							y:90}];				
	var slide_4_texts = [];							
	var slide_4_object = {templateType:slide_4_type,
							x:0,
							y:0,
							tables:slide_4_tables,
							texts:slide_4_texts};
							
	return slide_4_object;
	
}

