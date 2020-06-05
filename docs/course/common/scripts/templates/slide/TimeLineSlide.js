	
$(document).ready(function(){ 
	$('div .top_nav').live('mousedown', function() {
		  $('#dvTimeLine').attr('alt','prev');
	});
	$('div .bottom_nav').live('mousedown', function() {
		  $('#dvTimeLine').attr('alt','next');
	});
});

var bindTimeLine = {
	
	   _minYr :0,
       _maxYr:0,
       _scale :0,
       yearArr :{},
       yrOffset:0,
       defaultPadding:50,
       timeLineHt:337-(24+16),
       defaultImgHt:35, 
	   offSetY:0,
	  
	initTimeLine : function(data){ 

		PageContent.xmlData = data;
		
		bindTimeLine.loadXml(); 
	},

	loadXml : function()
	{ 

		var url=location.href;
		url=url.split("/")
		url=url[url.length-3];
		var xmlFile='media_'+url+'_layout.xml'; 

		var xmlFile = xmlFile;
            $.ajax({
                type: "GET",
                crossDomain:false, 
                url: xmlFile,
                dataType: "xml",
                success: bindTimeLine.getXMLData,
                error: bindTimeLine.getXMLErrorr
            }); 

	},  

	bindPageHtml : function() //bind the container
	{
		dataBind='<div class="timelinecontainer">';
		dataBind+='<h1 id="ID_title"></h1>';
		dataBind+='<div class="top_nav"><a href="javascript:;"><img src="../../../common/images/up_arrow.jpg" width="40" height="7" alt="" /></a></div>';
		dataBind+='<div id="wrapper" class="fltlft left_area">	';
		dataBind+='</div>';
		dataBind+='<div id="dvTimeLine" class="fltrt right_area">';
		dataBind+='<div class="fltlft bluedot"><img class="dot_normal" src="../../../common/images/spacer.png" width="18" height="19" alt="" /><img class="dot_selected" src="../../../common/images/spacer.png" width="18" height="19" alt="" /><img class="dot_normal" src="../../../common/images/spacer.png" width="18" height="19" alt="" /></div>';
		dataBind+='<div class="fltlft bluedot dot2"><img class="dot_normal" src="../../../common/images/spacer.png" width="18" height="19" alt="" /></div>';
		dataBind+='</div>';
		dataBind+='<div class="clearfloat"></div>';
		dataBind+='<div class="bottom_nav"><a href="javascript:;"><img src="../../../common/images/down_arrow.jpg" width="40" height="7" alt="" /></a></div>';
		dataBind+='</div>';	

		$('#mainDiv').html(dataBind);
	},

	getXMLData:function (data)
    {   
    	//get and set min,max years and scale
		bindTimeLine.bindPageHtml();

		bindSlideFactory.xmlContent = data;
		bindTimeLine._minYr = parseInt($(data).find("timeline").attr("min"));
		bindTimeLine._maxYr = parseInt($(data).find("timeline").attr("max"));
		bindTimeLine._scale = parseInt($(data).find("timeline").attr("scale")); 

		bindTimeLine.yrOffset = Math.round(bindTimeLine.timeLineHt/(bindTimeLine._maxYr - bindTimeLine._minYr)); 

		bindTimeLine.generateTimeLineSection(data); 

		bindTimeLine.loadNavButtons();

		bindSlideFactory.bindSlidesSkeleton();

		//PageContent.loadContentXML();
		PageContent.setContent();

    }, 

	generateTimeLineSection:function(xmlData){
		
		//get the array of years
	 		var yearArr = new Array();
			$(xmlData).find("event").each(function()
			{
				yearArr.push($(this).attr("date"));
			});
	  
			yearArr.sort(bindTimeLine.sortmyway); 
			bindTimeLine.yearArr = yearArr; 
			bindTimeLine.bindTimeLineSection(); 

	},

    loadNavButtons:function()
    {
		var _onclick=''; 
		var dvSelector = 'dv_'+bindTimeLine._minYr; 
		var dvNextSelector = $('#'+dvSelector+' + div').attr('id');

		_onclick = $('#'+dvNextSelector+'> a').attr('onclick'); 
		$('.bottom_nav').attr('onclick',_onclick);


		bindSlideFactory.selectedyear = bindTimeLine._minYr;
    },

	sortmyway:function(data_A, data_B)
	{
		return (data_A - data_B);
	},

    getXMLErrorr:function(data)
    {       
        var _data = data; 
    },

    bindTimeLineyear:function ()
    {
    	var length = (bindTimeLine._maxYr - bindTimeLine._minYr)/10;
		var _year = bindTimeLine._minYr;
    	var str= ''; 
    	var offSet = (bindTimeLine.yrOffset * 10) ;
 		var  top = offSet;
 		var left = parseInt($('#dvTimeLine > div').css('left'))+25;
    	for(var i= 0; i<= length; i++)
			{ 

				top =bindTimeLine.defaultPadding + (bindTimeLine.yrOffset * (_year - bindTimeLine._minYr));
				str+='<div style="top:'+top+'px;left:'+left+'px; position: absolute;">'+_year+'</div>'; 
				_year = _year + bindTimeLine._scale; 
			}

			 $('#dvTimeLine').html(str);

    },

    bindTimeLineSection:function ()
    { 
    	var str = ''; 
    	var lastValue = 0; 
    	var _index = 1; 

		bindTimeLine.bindTimeLineyear();

		$.each(bindTimeLine.yearArr, function(index, value) {   

		 	var val = parseInt(value); 

			tempOffset = bindTimeLine.defaultPadding + (bindTimeLine.yrOffset * (val - bindTimeLine._minYr)); 
			 
		 	if(lastValue == 0)
				str+='<div id="dv_'+val+'" class="fltlft bluedot" style="top:'+tempOffset+'px;"><a id="a_'+val+'" rel='+val+' rev="1" href="javascript:;" onclick="bindTimeLine.timeLineClick(\''+val+'\')"><img id="img_'+val+'" alt="button" width="18" height="19" alt="" src="../../../common/images/spacer.png" class="dot_selected"/></a>';  //for the 1st time
			else if(lastValue != 0 && lastValue == val) {  
				_index ++;
				str+='<a id=\'a_'+val+'_x'+_index+'\' rel='+val+' rev='+_index+' href="javascript:;" onclick="bindTimeLine.timeLineClick(\''+val+'_x'+_index+'\')"><img id=\'img_'+val+'_x'+_index+'\' width="18" height="19" alt="" src="../../../common/images/spacer.png" class="dot_normal"/></a>';  
			}
			else {  
				_index = 1;
				str+='</div><div id="dv_'+val+'" class="fltlft bluedot" style="top:'+tempOffset+'px;"><a id="a_'+val+'" rel='+val+' rev="1" href="javascript:;" onclick="bindTimeLine.timeLineClick(\''+val+'\')"><img id="img_'+val+'" width="18" height="19" alt="" src="../../../common/images/spacer.png" class="dot_normal"/></a>';  //for the 1st time
			}
			 	 lastValue = parseInt(value);  
		 		 bindTimeLine.bindSlides(val,_index);

    	}); 
		 	
    	 $('#dvTimeLine').append(str); 
    },

    bindSlides:function(value,_index)
	{ 
		var dataBind='';

		if(_index > 1)
		value =  value+"_x"+_index; 


		if($('#wrapper > div').length == 0)
		 	dataBind='<div id="dvSlide_'+(value)+'">';
		else
			dataBind='<div id="dvSlide_'+(value)+'" style="display:none;">';

		dataBind+='<div class="slide_title" alt='+value+'>';
		dataBind+='<h1></h1>';		
		dataBind+='<span></span>';
		dataBind+='</div>';
		dataBind+='<div class="slide_content">';		
		dataBind+='<div id=\'graphics_'+value+'\'></div>'; 
		dataBind+='<div id=\'content_'+value+'\'></div>'; 
		dataBind+='</div>';
		dataBind+='</div>';

		if($('#wrapper > div').length == 0)
			$('#wrapper').html(dataBind);
		else{
			$('#wrapper > div:last').after(dataBind); 
		}
	}, 
	
    timeLineClick:function(year)
    {
    	var aSelector,selector  = '';
		var arr,_onclick = '';


	//1) init the slides
		bindSlideFactory.diablePriviousSlide();
		bindSlideFactory.selectedyear = year; 
		bindSlideFactory.enableCurrentSlide(); 
		
		bindSlideFactory.bindSlidesSkeleton();
		PageContent.setContent();
		 	
	//2) add click selector 
	
		var childlength = $('#dv_'+year+' a').length;
		if($('#dvTimeLine').attr('alt') == 'prev' && childlength > 1 && year.indexOf('_x') <0){
			//if(parseInt($("#dv_"+year+" span + a").attr('rev')) == 1) 
			if($("#dv_"+year+" a[rev=2] > img").hasClass('dot_selected') == true)
				year = year;
			 else
				year = year+'_x'+$('#dv_'+year+' a').length; 
		}

		  if(year.indexOf('_x') >0){

				arr = year.split('_x');
				 
				selector = "#img_"+arr[0]+'_x'+arr[1];
				aSelector= "#a_"+arr[0]+'_x'+arr[1];
		  	}else {
				selector = "#img_"+year;
				aSelector= "#a_"+year;
		  	}
		  	

		  $('#dvTimeLine img.dot_selected').addClass('dot_normal').removeClass("dot_selected");
		  $(selector).addClass('dot_selected').removeClass("dot_normal"); 


	//3) update top and bottom arrow for navigation
		  var dvSelector = $(selector).parent().parent().attr('id'); 
		  var childlength = $('#'+dvSelector+' a').length;
		  if(childlength > 1){ 
		  	var _alt = $('#dvTimeLine').attr('alt');
				if($(aSelector).next().length >0 && $(selector).parent().attr('rev') == ("1") >0){ 
			  		  
					var dvPrevSelector = $('#'+dvSelector).prev().attr('id');
					_onclick = $('#'+dvPrevSelector+'> a').attr('onclick'); 
					$('.top_nav').attr('onclick',_onclick);

					_onclick = $(aSelector).next().attr('onclick');   
					$('.bottom_nav').attr('onclick',_onclick);   

				} 
				else if(childlength == parseInt($(aSelector).attr('rev'))){ 

					_onclick = $(aSelector).prev().attr('onclick');
					$('.top_nav').attr('onclick',_onclick);  

					var dvNextSelector = $('#'+dvSelector+' + div').attr('id');
					_onclick = $('#'+dvNextSelector+'> a').attr('onclick'); 
					$('.bottom_nav').attr('onclick',_onclick);   

				}else {
					
					_onclick = $(aSelector).prev().attr('onclick'); 
					$('.top_nav').attr('onclick',_onclick); 

					_onclick = $(aSelector).next().attr('onclick');
					$('.bottom_nav').attr('onclick',_onclick);  
				} 
		  }else
		  {

		  	//for next element
				var dvNextSelector = $('#'+dvSelector+' + div').attr('id');
				_onclick = $('#'+dvNextSelector+'> a').attr('onclick');  
				$('.bottom_nav').attr('onclick',_onclick);

			//for previous element
				var dvPrevSelector = $('#'+dvSelector).prev().attr('id');
				_onclick = $('#'+dvPrevSelector+'> a').attr('onclick'); 
				$('.top_nav').attr('onclick',_onclick);
		}

    }, 

    removeDuplicates:function(inputArray) {
		var outputArray = new Array();
		var dval = 0;
       for(var i = 0; i<inputArray.length; i++)
       {
		if(inputArray[i] != dval) 
			outputArray.push(inputArray[i]);
			dval = inputArray[i]; 
       }		 	
	    outputArray.sort(bindTimeLine.sortmyway); 
        return outputArray;
    }

};


var bindSlideFactory = { 
	 xmlContent:'', 
	 selectedyear:0,

	 bindSlidesSkeleton:function()
	 { 
	 	var id, x, y, width, height, src, dataBind = '';
	 	var dvYear = bindSlideFactory.selectedyear+''; 
	 	var year = parseInt(bindSlideFactory.selectedyear); 
		var _yearXML ='';


		$(bindSlideFactory.xmlContent).find("event").each(function()
		{ 

			if(dvYear.indexOf('x') > 0)
			{
				var alt = $(this).attr("alt");
				if(alt)
					_yearXML = $(this).attr("date")+'_'+alt;

			}else 
			 _yearXML = ($(this).attr("date")).toString();



			if(_yearXML == dvYear)
			{
				//bind all the images for the particular slide
				$(this).children('img').each(function(){

					id= $(this).attr("id");
					x= $(this).attr("x");
					y= $(this).attr("y");
					width= $(this).attr("width");
					height= $(this).attr("height");
					src= $(this).attr("src");
					
					dataBind+='<img id=\'imgGraphic_'+id+'\' width='+width+' height='+height+' src='+src+' style="left:'+x+'px;top:'+y+'px;" alt='+dvYear+' />';

				});
				$('#graphics_'+dvYear).html(dataBind);
				dataBind='';

				//bind all the title for the particular slide
				dataBind+='<h1>'+year+'</h1>'; 
				$(this).children('titletext').each(function(){

					id = $(this).attr("src");
					x = $(this).attr("x");
					y = $(this).attr("y");
					width = $(this).attr("width");
					height = $(this).attr("height");
					src = $(this).attr("src"); 
				 
				dataBind+='<span id='+id+' width='+width+' height='+height+' alt='+dvYear+'>'; 
				dataBind+='</span>';	
				});

				$('div[alt='+dvYear+']').html(dataBind);
				dataBind='';
				
				//bind all the title for the particular slide
				$(this).children('bodytext').each(function(){

					id = $(this).attr("src");
					x = $(this).attr("x");
					y = $(this).attr("y");
					width = $(this).attr("width");
					height = $(this).attr("height");
					src = $(this).attr("src");

				
				dataBind+='<p id='+id+' width='+width+' height='+height+' alt='+dvYear+'>'; 
				dataBind+='</p>';	
				});
				$('#content_'+dvYear).html(dataBind);
				dataBind=''; 				 
			} 
		}); 
	 
	}, 

	enableCurrentSlide:function(){ 
	$('#dvSlide_'+bindSlideFactory.selectedyear).show();  
	},

	diablePriviousSlide:function(){   
		$('#dvSlide_'+bindSlideFactory.selectedyear).hide();  
	} 

};


var PageContent={

 xmlData:'',

loadContentXML:function()
	{ 
		var xmlFile = "media.xml";
            $.ajax({
                type: "GET",
                crossDomain:false, 
                url: xmlFile,
                dataType: "xml",
                success: PageContent.getContent,
                error: bindTimeLine.getXMLErrorr
            }); 

	},  

	getContent : function(xmlContent){

		PageContent.xmlData = xmlContent; 
		PageContent.setContent();
		
	},

	setContent : function(){
		$(PageContent.xmlData).find("component").each(function()
			{  
				var selector ='#'+ $(this).attr("id");

				var data = $(this).children('text').text();

				$(selector).html(data);
		});
	}

};





 