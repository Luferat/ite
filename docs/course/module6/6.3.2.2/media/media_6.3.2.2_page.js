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
	var tables = [{compId:"ID_table_01",
							x:25,
							y:25.05, 
							width:445.55,
							height:111.9},
					{compId:"ID_table_02",
							x:25,
							y:139.4, 
							width:445.55,
							height:111.9},
					{compId:"ID_table_03",
							x:25,
							y:253.4, 
							width:445.55,
							height:111.9}];				
	var texts = [{compId:"ID_title",
						x:5,
						y:2, 
						width:460,
						height:17,
						textAlign:"center",
						size:16},
				{compId:"ID_text",
						x:25,
						y:365, 
						width:451.55,
						height:31,
						textAlign:"left",
						size:10}];								
	
	return {templateType:template_type,
				tables:tables,
				texts:texts};
	
}