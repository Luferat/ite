loadScript("../../../common/scripts/swfobject.js", registerSWF);
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js"); 

function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
	
							
	var slide_6_type = "TABLE";
	var slide_6_tables = [{compId:"ID_table",
							x:35,
							y:90}];				
	var slide_6_texts = [];							
	var slide_6_object = {templateType:slide_6_type,
							x:0,
							y:0,
							tables:slide_6_tables,
							texts:slide_6_texts};		
																
						
	return slide_6_object;
	
}

