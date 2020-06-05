loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	
							
	var slide_5_type = "TABLE";
	var slide_5_tables = [{compId:"ID_table",
							x:35,
							y:90}];				
	var slide_5_texts = [];							
	var slide_5_object = {templateType:slide_5_type,
							x:0,
							y:0,
							tables:slide_5_tables,
							texts:slide_5_texts};
							
	
						
	return slide_5_object;
	
}

