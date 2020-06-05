// JavaScript Document for Syntax Checker

var animation = { "comp1" : [{"left" : 131, 
  "top" : -47}
 ],
 "comp2" : [{"left" : 170, 
  "top" : -115}
 ],
 "comp3" : [{"left" : 115, 
  "top" : -206}
 ],
 "comp4" : [{"left" : 40, 
  "top" : -246}
 ],
 "comp5" : [{"left" : -60, 
  "top" : -253}
 ],
 "comp6" : [{"left" : -140, 
  "top" : -211}
 ],
 "comp7" : [{"left" : -180, 
  "top" : -120}
 ],
 "comp8" : [{"left" : -156, 
  "top" : -48}
 ]
 }; 

var computer_1;
var computer_2;
var data


var Interactiveslide = function (_xmlData,_dataObject)
{

	data=_xmlData;

    var temp = '<div id="main"><div id="title"></div><div id="hubtext"></div><div id="comp1"><img src="system.png"width="65"height="55"/><span></span></div><div id="comp2"><img src="system.png"width="65"height="55"/><span></span></div><div id="comp3"><img src="system.png"width="65"height="55"/><span></span></div>';
	temp+='<div id="comp4"><img src="system.png"width="65"height="55"/><span></span></div><div id="comp5"><img src="system.png"width="65"height="55"/><span></span></div><div id="comp6"><img src="system.png"width="65"height="55"/><span></span></div><div id="comp7"><img src="system.png"width="65"height="55"/><span></span></div><div id="comp8"><img src="system.png"width="65"height="55"/><span></span></div><div id="button"><input type="button" id="submit" value="Send"/><input type="button" id="reset" value="Reset"/></div><div id="Ins_text"></div></div>';
	
	$("#mainDiv").html(temp);
	
	
	
	
	$("#title").html($(data).find("#ID_title").text());
    $("#hubtext").html($(data).find("#ID_txt01").text());
	$("#comp1 span").html($(data).find("#ID_txt02").text());
	$("#comp2 span").html($(data).find("#ID_txt03").text());
	$("#comp3 span").html($(data).find("#ID_txt04").text());
	$("#comp4 span").html($(data).find("#ID_txt05").text());
	$("#comp5 span").html($(data).find("#ID_txt06").text());
	$("#comp6 span").html($(data).find("#ID_txt07").text());
	$("#comp7 span").html($(data).find("#ID_txt08").text());
	$("#comp8 span").html($(data).find("#ID_txt09").text());
	$("#Ins_text").html($(data).find("#ID_inst").text());	
	select_random();

 
 
 $(document).ready(function(){
	$("#reset").click(function(){
		$("#reset").css("z-index","-1");
		
		//$("#comp"+computer_1+" img").css({width:'55px',height:'46px'});
		//$("#comp"+computer_2+" img").css({width:'55px',height:'46px'});	
		//$("#comp"+computer_1+" span").css("padding","0px 0 0 0px");
		//$("#comp"+computer_2+" span").css("padding","0px 0 0 0px");		
			
		$("#comp"+computer_1+" span img:last-child").stop();
		$("#comp"+computer_2+" span img:last-child").stop();		
		$("img[src='system_glow.png']").attr('src','system.png');
		$("img[src='mail1.png']").remove();
		$("img[src='mail2.png']").remove();
		$("#comp"+computer_1+" span").val('H'+computer_1);		
		select_random();
	});
	
		
	$("#submit").click(function(){	
	
		$("#reset").css("z-index","0");
		$("#comp"+computer_1+" span").append("<img src='mail1.png' width='27' height='17'/>");
		$("#comp"+computer_2+" span").append("<img src='mail2.png' width='27' height='17'/>");
		
		
		$("#comp"+computer_1+" span img").css({position: 'absolute',left: '0',top: '0'});
		$("#comp"+computer_2+" span img").css({position: 'absolute',left: '0',top: '0'})
		
	$("#comp"+computer_1+" span img").clone().insertAfter("#comp"+computer_1+" span img").css({position: 'absolute',left: '0px',top: '0px'});
		
	$("#comp"+computer_1+" span img:last-child").animate(
		{top:eval("(" + 'animation.comp'+computer_1+'[0].top' + ")")+'px',left:eval("(" + 'animation.comp'+computer_1+'[0].left' + ")")+'px'},2500,function(){}
		);
		
			$("#comp"+computer_2+" span img").clone().insertAfter("#comp"+computer_2+" span img").css({position: 'absolute',left: '0',top: '0'});
		
	$("#comp"+computer_2+" span img:last-child").animate(
{top:eval("(" + 'animation.comp'+computer_2+'[0].top' + ")")+'px',left:eval("(" + 'animation.comp'+computer_2+'[0].left' + ")")+'px'},2500,function(){
	
	$("img[src='mail1.png']").remove();
	$("img[src='mail2.png']").remove();
	$("#main").append("<div id='blast' style='width:105px;height:60px;position:absolute;top:42px;left:172px;'><img src='blast.png' width='105' height='60' /></div>")
	remove_blast();
	

	}
		
		);
	
	})
	
	});

 }
function select_random()
{
	computer_1 = Math.round(10*Math.random());
	while ((computer_1 == 0) || (computer_1>8)) {
	computer_1 = Math.round(10*Math.random());
	}
	computer_2 = Math.round(10*Math.random());
	while ((computer_2 == computer_1 || computer_2 == 0) || (computer_2>8)) 
	{
	computer_2 = Math.round(10*Math.random());
	}	
	
	$("#comp"+computer_1+" img").attr("src","system_glow.png");
	$("#comp"+computer_2+" img").attr("src","system_glow.png");	
		
}

function remove_blast()
{
	setInterval(function(){$("#blast").remove();},1500);
}


