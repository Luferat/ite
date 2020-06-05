
var bubble1,ping1,ping2,ping3,ping4,ping5,ping6;
var myTimeline;
var envelop1,envelop2,envelop3,envelop4,envelop5,envelop6,envelop7,envelop8,envelop9,envelop10,envelop11,envelop12,envelop13,envelop14,envelop15;
var bubble1,bubble2,bubble3,bubble4;
var pause,play,restart;
var nestedTimeline1,nestedTimeline2;

var animation1 = function(data)
{
	
	//alert($(data).find("component#ID_s2_txt06").text())
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';
	

	temp +='<div id="maincontainer1"><div id="imagecontainer1"><div id="slide1"><img src="slide_1.png" width="375" height="260" />';
	temp +='<div id="ping" class="ping1" style="opacity:0;"><img src="ping_1.png" width="20" height="13" /></div>';
	temp +='<div id="ping2" class="ping2"><img src="ping_2.png" width="19" height="14" /></div>'; 
	temp +='</div>';
	//
	temp+='<div id="ID_s1_txt01"></div><div id="ID_s1_txt02"></div>';
	temp+='<div id="ID_s1_txt03"></div>';
	temp+='<div id="slide1_bubble1" style="opacity:0"><div id="slide1_bub1text"></div></div>';
	temp+='<div id="slide1_bubble2" style="opacity:0"><div id="slide1_bub2text"></div></div>';
	temp+='<div id="slide1_bubble3" style="opacity:0"><div id="slide1_bub3text"></div></div>';
	
	$("#animDiv").html(temp);
	
			$("#ID_s1_txt01").html($(data).find("component#ID_s1_txt01").text());
			$("#ID_s1_txt02").html($(data).find("component#ID_s1_txt02").text());
			$("#ID_s1_txt03").html($(data).find("component#ID_s1_txt03").text());
			$("#slide1_bub1text").html($(data).find("component#ID_s1_txt05").text());
			$("#slide1_bub2text").html($(data).find("component#ID_s1_txt06").text());
			$("#slide1_bub3text").html($(data).find("component#ID_s1_txt04").text());
}

		
	function animation()
	{   
		pause = $("#pauseBtn");
		play = $("#playBtn");
		restart = $("#restartBtn");
		
		/**/var ping = $('#ping');
		for (var i = 1; i <= 12; i++) {
			ping.clone().attr('id','ping_'+i).insertAfter($('#ping'));
		}

		var ping = $('#ping2');
		for (var i = 1; i <= 8; i++) {
			ping.clone().attr('id','ping_2_'+i).insertAfter($('#ping'));
			}
	 
		ping1 = $("#ping_1"); 
		ping2 = $("#ping_2");		
		ping3 = $("#ping_3");
		ping4 = $("#ping_4"); 
		ping5 = $("#ping_5");
		ping6 = $("#ping_6"); 
		ping7 = $("#ping_7");
		ping8 = $("#ping_8"); 
		ping9 = $("#ping_9");
		ping10 = $("#ping_10");
		ping11 = $("#ping_11"); 
		ping12 = $("#ping_12"); 

		ping21 = $("#ping_2_1"); 
		ping22 = $("#ping_2_2"); 
		ping23 = $("#ping_2_3");
		ping24 = $("#ping_2_4"); 
		ping25 = $("#ping_2_5");
		ping26 = $("#ping_2_6");
		ping27 = $("#ping_2_7");
		ping28 = $("#ping_2_8"); 

		slide1_bubble1 = $("#slide1_bubble1"); 
		slide1_bubble2 = $("#slide1_bubble2"); 
		slide1_bubble3 = $("#slide1_bubble3"); 
		 

			//tl.to(slide1_bubble1,1,{css:{display:"block"}})  
			tl.to(slide1_bubble1,.1,{css:{opacity:1}})

			
			nestedTimeline1 = new TimelineMax({repeat:1,repeatDelay:0,yoyo:false,});
			  
				nestedTimeline1.append([ 

					new TweenLite(ping1,.5,{css:{opacity:1}}),
					new TweenLite(ping1,1,{css:{left:187,bottom:108},delay:.2}), 
					new TweenLite(ping1,.5,{css:{opacity:0},delay:.5}), 

					new TweenLite(ping2,.5,{css:{opacity:1},delay:.5}), 
					new TweenLite(ping2,1,{css:{left:187,bottom:108},delay:.7}), 
					new TweenLite(ping2,.5,{css:{opacity:0},delay:1}),

					new TweenLite(ping3,.5,{css:{opacity:1},delay:1}), 
					new TweenLite(ping3,1,{css:{left:187,bottom:108},delay:1.2}), 
					new TweenLite(ping3,.5,{css:{opacity:0},delay:1.5}),

					new TweenLite(ping4,.5,{css:{opacity:1},delay:1.5}), 
					new TweenLite(ping4,1,{css:{left:187,bottom:108},delay:1.7}), 
					new TweenLite(ping4,.5,{css:{opacity:0},delay:2})
				])
			
			
		tl.append(nestedTimeline1); 

	        nestedTimeline2 = new TimelineMax();
			nestedTimeline2.append([ 
				new TweenLite(ping21,.5,{css:{opacity:.9}}),
				new TweenLite(ping21,1,{css:{left:46,bottom:34},delay:.2}),
				new TweenLite(ping21,.5,{css:{opacity:0},delay:.5}),

				new TweenLite(ping5,.5,{css:{opacity:.9}}),
				new TweenLite(ping5,1,{css:{left:187,bottom:108},delay:.2}), 
				new TweenLite(ping5,.5,{css:{opacity:0},delay:.5}), 
				
				new TweenLite(ping22,.5,{css:{opacity:.9},delay:.5}),
				new TweenLite(ping22,1,{css:{left:46,bottom:34},delay:.7}),
				new TweenLite(ping22,.5,{css:{opacity:0},delay:1}),

				new TweenLite(ping6,.5,{css:{opacity:.9},delay:.5}), 
				new TweenLite(ping6,1,{css:{left:187,bottom:108},delay:.7}), 
				new TweenLite(ping6,.5,{css:{opacity:0},delay:1}),

				new TweenLite(ping23,.5,{css:{opacity:.9},delay:1}),
				new TweenLite(ping23,1,{css:{left:46,bottom:34},delay:1.2}),
				new TweenLite(ping23,.5,{css:{opacity:0},delay:1.5}),

				new TweenLite(ping7,.5,{css:{opacity:.9},delay:1}), 
				new TweenLite(ping7,1,{css:{left:187,bottom:108},delay:1.2}), 
				new TweenLite(ping7,.5,{css:{opacity:0},delay:1.5}),

				new TweenLite(ping24,.5,{css:{opacity:.9},delay:1.5}),
				new TweenLite(ping24,1,{css:{left:46,bottom:34},delay:1.7}),
				new TweenLite(ping24,.5,{css:{opacity:0},delay:2}),

				new TweenLite(ping8,.5,{css:{opacity:.9},delay:1.5}), 
				new TweenLite(ping8,1,{css:{left:187,bottom:108},delay:1.7}), 
				new TweenLite(ping8,.5,{css:{opacity:0},delay:2}),

				new TweenLite(ping25,.5,{css:{opacity:.9},delay:2}),
				new TweenLite(ping25,1,{css:{left:46,bottom:34},delay:2.2}),
				new TweenLite(ping25,.5,{css:{opacity:0},delay:2.5}),

				// add callout
				new TweenLite(slide1_bubble2,.1,{css:{opacity:1},delay:2}),  
				new TweenLite(ping9,.5,{css:{opacity:.9},delay:2}), 
				new TweenLite(ping9,1,{css:{left:187,bottom:108},delay:2.2}), 
				new TweenLite(ping9,.5,{css:{opacity:0},delay:2.5}),

				new TweenLite(ping26,.5,{css:{opacity:.9},delay:2.5}),
				new TweenLite(ping26,1,{css:{left:78,bottom:55},delay:2.7}),
				new TweenLite(ping26,.5,{css:{opacity:0.5},delay:3}),

				new TweenLite(ping10,.5,{css:{opacity:.9},delay:2.5}), 
				new TweenLite(ping10,1,{css:{left:226,bottom:98},delay:2.7}), 
				new TweenLite(ping10,.5,{css:{opacity:0.5},delay:3}),
				// add callout
				new TweenLite(slide1_bubble3,.1,{css:{opacity:1},delay:3}),  
				new TweenLite(ping27,.5,{css:{opacity:.9},delay:3}),
				new TweenLite(ping27,1,{css:{left:130,bottom:85},delay:3.2}),
				new TweenLite(ping27,.5,{css:{opacity:.7},delay:3.5}),

				new TweenLite(ping11,.5,{css:{opacity:.9},delay:3}), 
				new TweenLite(ping11,1,{css:{left:276,bottom:73},delay:3.2}), 
				new TweenLite(ping11,.5,{css:{opacity:.7},delay:3.5}),
				
				])

		tl.append(nestedTimeline2); 
		
		tl.to(pause,.05,{onComplete:myFunction})
	}
	 
	function myFunction()
	{
		//tl.invalidate();
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	 
var animation2 = function(data)
{
	
	//alert($(data).find("component#ID_s2_txt06").text())
	var animDiv = document.createElement('div');
	animDiv.id = "animDiv";			
	mainDiv.appendChild(animDiv);	

	var temp ='';
	
temp +='<div id="maincontainer">';
temp +='<div id="imagecontainer">';
temp +='<div id="cloud">';
temp +='<div id="envelop_1" style="top:10px;left:44px;"><img class="hide" src="e1.png" width="38" height="28" /></div>';
temp +='<div id="envelop6"><img class="hide" src="e3.png" width="38" height="28" /></div>';
temp +='<div id="envelop7" ><img class="hide" src="e3.png" width="38" height="28" /></div>';
temp +='<div id="envelop8" ><img class="hide" src="e3.png" width="38" height="28" /></div>';
temp +='<div id="envelop9" ><img class="hide" src="e3.png" width="38" height="28" /></div>';
temp +='<div id="envelop10"><img src="e3.png" class="hide" width="38" height="28" /></div>';
temp +='<div id="envelop11"><img src="e3.png" class="hide" width="38" height="28" /></div>';
temp +='</div>';
temp +='<div id="female"><img src="enduserfemale.png" width="86" height="88" />';
temp +='<div id="envelop4"><img class="hide" src="e1.png" width="40" height="30" /></div>';
temp +='<div id="envelop12"><img class="hide" src="e1.png" width="40" height="30" /></div>';
temp +='<div id="envelop14"><img class="hide" src="e1.png" width="40" height="30" /></div>';
temp +='</div>';
temp +='<div id="server"><img src="server.png" width="38" height="54" /></div>';
temp +='<div id="male"><img src="endusermale.png" width="89" height="89" />';
temp +='<div id="envelop5"><img class="hide"  src="e3.png" width="40" height="30" /></div>';
temp +='<div id="envelop13"><img class="hide"  src="e3.png" width="40" height="30" /></div>';
temp +='<div id="envelop15"><img class="hide"  src="e3.png" width="40" height="30" /></div>';
temp +='</div>';
temp +='<div id="unaumale"><img src="unauthorized-user.png" width="58" height="76" />';
temp +='<div id="envelop1" style="opacity:0;"><img src="e1.png" width="40" height="30" /></div>';
temp +='<div id="envelop2" style="display:none;opacity:0;"><img src="e1.png" width="40" height="30" /></div>';
temp +='<div id="envelop3"><img src="e3.png" class="hide"  width="40" height="30" /></div>';
temp +='</div>';	
temp+='<div id="bubble1" style="display:none;"><div id="bub1text"></div></div>';
temp+='<div id="bubble2" style="display:none;"><div id="bub2text"></div></div>';
temp+='<div id="bubble3" style="display:none;"><div id="bub3text"></div></div>';
temp+='<div id="bubble4" style="display:none;"><div id="bub4text"></div></div>';
temp+='<div id="ID_s2_txt02"></div><div id="ID_s2_txt03"></div>';
temp+='<div id="ID_s2_txt04"></div><div id="ID_s2_txt05"></div>';
	
	temp+='</div></div>';
	
			$("#animDiv").html(temp);
			
			$("#bub1text").html($(data).find("component#ID_s2_txt06").text());
			$("#bub2text").html($(data).find("component#ID_s2_txt08").text());
			$("#bub3text").html($(data).find("component#ID_s2_txt08").text());
			$("#bub4text").html($(data).find("component#ID_s2_txt07").text());
			$("#ID_s2_txt02").html($(data).find("component#ID_s2_txt02").text());
			$("#ID_s2_txt03").html($(data).find("component#ID_s2_txt03").text());
			$("#ID_s2_txt04").html($(data).find("component#ID_s2_txt04").text());
			$("#ID_s2_txt05").html($(data).find("component#ID_s2_txt05").text());
}
 
	function animation3()
	{   


		//$('#cloud > div').addClass('hide');
		envelop1 =  $("#envelop1"); 
		envelop_1 =  $("#envelop_1"); 
		envelop2 =  $("#envelop2");
		envelop3 =  $("#envelop3");
		envelop4 =  $("#envelop4");
		envelop5 =  $("#envelop5");
		envelop6 =  $("#envelop6");
		envelop7 =  $("#envelop7");
		envelop8 =  $("#envelop8");
		envelop9 =  $("#envelop9");
		envelop10 =  $("#envelop10");
		envelop11 =  $("#envelop11");
		envelop12 =  $("#envelop12");
		envelop13 =  $("#envelop13");
		envelop14 =  $("#envelop14");
		envelop15 =  $("#envelop15");
		bubble1  =  $("#bubble1");
		bubble2  =  $("#bubble2");
		bubble3  =  $("#bubble3");
		bubble4  =  $("#bubble4");
		pause = $("#pauseBtn");
		restart = $("#reatartBtn")
		
	 tl.call(unHide);
		tl.append([
			new TweenLite([envelop1,bubble1],.5,{css:{display:"block",opacity:"1"}}), 
			new TweenLite(envelop1,1,{css:{left:"-153px",top:"-55px"}}),
			new TweenLite(envelop2,.1,{css:{display:"block",opacity:"1"},delay:.5}),
			new TweenLite(envelop2,1,{css:{left:"-138px",top:"-55px",display:"block"},delay:.5}),
			new TweenLite(envelop_1,1.2,{css:{left:"-106px",top:"-62px"},delay:.8}),
			new TweenLite(envelop2,.1,{css:{display:"none"},delay:.75}),
			new TweenLite(envelop3,1.4,{css:{left:"-6px",top:"-133px"},delay:1})
		])
		
		tl.append([
		new TweenLite(envelop_1,2,{css:{opacity:"0",display:"none"}}),
		new TweenLite(bubble1,.2,{css:{opacity:"0",display:"none"}}),
		new TweenLite(bubble2,.5,{css:{display:"block"}}),
		new TweenLite(bubble3,.5,{css:{display:"block"}}),
		])
 		 
		.append([
		new TweenLite(envelop4,.9,{css:{left:"191px",top:"82px"}}),
		new TweenLite(envelop5,.9,{css:{left:"-133px",top:"83px"},delay:.2}),
		])	
		
			
		.append([
		new TweenLite(envelop6,.9,{css:{left:"-122px",top:"108px"}}),
		new TweenLite(envelop7,1.4,{css:{left:"-122px",top:"108px"}})
		])	
		
		.append([
		new TweenLite(envelop12,.9,{css:{left:"191px",top:"82px"}}),
		new TweenLite(envelop13,.9,{css:{left:"-133px",top:"83px"},delay:.2}),
		])	
		
		
		.append([
		new TweenLite(envelop8,.9,{css:{left:"-122px",top:"108px"}}),
		new TweenLite(envelop9,1.4,{css:{left:"-122px",top:"108px"}})
		])	
		
		
		.append([
		new TweenLite(envelop14,.9,{css:{left:"191px",top:"82px"}}),
		new TweenLite(envelop15,.9,{css:{left:"-133px",top:"83px"},delay:.2}),
		])	
		
		.append([
		new TweenLite(envelop10,.9,{css:{left:"-122px",top:"108px"}}),
		new TweenLite(envelop11,1.4,{css:{left:"-122px",top:"108px"}})
		])	
		
		.append([
		new TweenLite(bubble2,.9,{css:{display:"none"}}),
		new TweenLite(bubble3,.9,{css:{display:"none"}}),
		new TweenLite(bubble4,.9,{css:{display:"block"}})
		])
		
	.to(pause,.05,{onComplete:myFunction1})
	}
	
	function myFunction1()
	{
		$(".pause").css("z-index","0");
		$(".resbut").css("z-index","1");
	}
	
	function unHide()
	{
		$('.hide').removeClass('hide');
	}


var animeArray = [{name:animation1,animFunction:animation},{name:animation2,animFunction:animation3}];