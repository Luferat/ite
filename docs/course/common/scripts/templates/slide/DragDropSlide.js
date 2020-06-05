//loadScript("../../../common/scripts/templates/comp/DragDropComp.js");
var DragDropSlide = function(_xmlData,_dataObject)
{		
	this.initiateComp(_xmlData,_dataObject);	
}
//var _this = DragDropSlide.prototype = new createjs.Container();
var _this = DragDropSlide.prototype;

_this.initiateComp = function(_xmlData,_dataObject)
{	
	//xmlData = _xmlData;
	_this.dataObject = _dataObject;
	_this.xmlData = _xmlData;
	_this.cont = this;
	_this.style = _dataObject.buttonObject.style;	
	
	_this.buildPageAssets();
	_this.buildDropItems();
	_this.buildDragItems();
	if(_dataObject.instobj.helpObj != undefined && _dataObject.isViewDD == 1)
	{
		_this.ddComp.showHelp();
	}
}
_this.buildDragItems = function()
{
	var mainDiv = document.getElementById("mainDiv");
		
	var dragDropDiv = document.getElementById("dragDropDiv");
	if(dragDropDiv == null){
			dragDropDiv = document.createElement('div');
			dragDropDiv.id = "dragDropDiv";			
			mainDiv.appendChild(dragDropDiv);
		}	
	var itemLen = 0;
	_this.snapResArr = [];
	if(_this.dataObject.instobj.ansType == 'one-many')
	{		
		_this.drags = [];
		for(var j=0;j<10;j++)
		{			
			_this.dataObject.buttonObject.buttons[0].tag = 1;
			_this.drags[j] = _this.dataObject.buttonObject.buttons[0];			
		}
		for(var j=10;j<20;j++)
		{	
			_this.dataObject.buttonObject.buttons[1].tag = 2;
			_this.drags[j] = _this.dataObject.buttonObject.buttons[1];
		}		
	}
	else{
		_this.drags = _this.dataObject.buttonObject.buttons;		
	}
	itemLen = _this.drags.length;
	
	for(var i=0;i<itemLen;i++)
	{
		var compId = _this.drags[i].compId;
		_this.snapResArr[i] = 0;
		
		var dragDiv = document.createElement('div');		
		$(dragDiv).attr('id',"drag"+i);
				
		dragDiv.style.cssText = "position:absolute;top:"+_this.drags[i].y+"px;left:"+_this.drags[i].x+"px;width:auto;height:auto;cursor:pointer;";
		dragDropDiv.appendChild(dragDiv);
		
		dragDiv.y = _this.drags[i].y;
		dragDiv.x = _this.drags[i].x;
		
		$(dragDiv).data('tag',_this.drags[i].tag);
		$(dragDiv).data('x',dragDiv.x);
		$(dragDiv).data('y',dragDiv.y);		
		
		var imgDiv = document.createElement('img');
		imgDiv.src = _this.style.normalSkinImage;
		$(imgDiv).width(_this.drags[i].width);
		$(imgDiv).height(_this.drags[i].height);
		//imgDiv.style.cssText = "position:absolute;top:"+0+"px;left:"+0+"px;width:auto;height:auto;font-size:16px;";
		dragDiv.appendChild(imgDiv);
		
		_this.setLabel({i:i, btnDiv:dragDiv, imgDiv:imgDiv, compId:compId});
		
		imgDiv.onload = function(evt)
		{
			_this.imageLoaded(evt, {i:i, btnDiv:dragDiv, imgDiv:imgDiv, compId:compId});
		}

        $(dragDiv).mouseover(function()
        {
            //$(this).css("box-shadow","0 5px 6px 4px #038BD1");

        }) ;


        $(dragDiv).mouseout(function(){

           // $(this).css("box-shadow","");

        });

		_this.enableDrag(dragDiv);
		
	}
	
	//$("#mainDiv").css('border','1px solid red');
}


_this.buildDropItems = function()
{
	var mainDiv = document.getElementById("mainDiv");
	var dragDropDiv = document.getElementById("dragDropDiv");
	if(dragDropDiv == null){
			dragDropDiv = document.createElement('div');
			dragDropDiv.id = "dragDropDiv";			
			mainDiv.appendChild(dragDropDiv);	
		}
	_this.drops = _this.dataObject.dropObject.dropBox;	
	 
	for(var i=0;i<_this.drops.length;i++)
	{
		var compId = _this.drops[i].compId;
		
		var dropDiv = document.createElement('div');		
		$(dropDiv).attr('id',"drop"+i);
		$(dropDiv).data('contains',0);
		
		dropDiv.style.cssText = "position:absolute;top:"+_this.drops[i].y+"px;left:"+_this.drops[i].x+"px;width:auto;height:auto;font-size:16px;";
		dragDropDiv.appendChild(dropDiv);
		$(dropDiv).data('answer',_this.drops[i].answer);
		dropDiv.y = _this.drops[i].y;
		dropDiv.x = _this.drops[i].x;

		var imgDiv = document.createElement('img');
		imgDiv.src = _this.style.dropNormalSkinImage;
		//imgDiv.style.cssText = "position:absolute;top:"+0+"px;left:"+0+"px;width:auto;height:auto;font-size:16px;";
		dropDiv.appendChild(imgDiv);
		
		$(imgDiv).width(_this.drops[i].width);
		$(imgDiv).height(_this.drops[i].height);
		
		var tempDiv = document.createElement('img');
		tempDiv.src = "../../../common/images/tick.png";
		tempDiv.src = "../../../common/images/wrong.png";

		var tickDiv = document.createElement('img');
		$(tickDiv).attr('id',"tick"+i);
		tickDiv.style.cssText = "position:absolute;";
		dropDiv.appendChild(tickDiv);
		
		if(_this.dataObject.instobj.isDropLabel)
		{
			_this.setLabel({i:i, btnDiv:dropDiv, imgDiv:imgDiv, compId:compId, droppable:true});
		}
		
		imgDiv.onload = function(evt)
		{
			_this.imageLoaded(evt, {i:i, btnDiv:dropDiv, imgDiv:imgDiv, compId:compId});
		}
		_this.enableDrop(dropDiv);
		
	}
		
	//$("#mainDiv").css('border','1px solid red');
}

_this.buildPageAssets = function()
{
	_this.dataObject.curObj = _this;
	_this.ddComp = new DragDropComp(_this.xmlData, _this.dataObject);	 
	_this.ddComp.buildImages();
	_this.ddComp.buildTextItems();
	_this.ddComp.buildSubmitButtons();
	
}

_this.checkAnswers = function()
{
    var correctCnt = 0;
    var resultArr = [];
    var isCorrect = false;
    for(var i=0;i<_this.drops.length;i++)
    {
	var corAns = _this.drops[i].answer-1;
        var actAns = ($("#drop"+i).data('dropped')==undefined)?"drag-1":$("#drop"+i).data('dropped').num;
        actAns = actAns.split("drag")[1];
	
	if(_this.dataObject.instobj.ansType == 'one-many')
	{		
		actAns = ($("#drop"+i).data('dropped')==undefined || $("#drop"+i).data('dropped').dragItem == undefined)?"drag-1":$($("#drop"+i).data('dropped').dragItem).data("tag");
		corAns = _this.drops[i].answer;		
	}
	else if(_this.dataObject.instobj.ansType == 'many-one')
	{
		actAns = ($("#drop"+i).data('dropped')==undefined || $("#drop"+i).data('dropped').dragItem == undefined)?"drag-1":$($("#drop"+i).data('dropped').dragItem).data("tag");
		corAns = $("#drop"+i).data('answer');
	}
        if(parseInt(corAns,10) == parseInt(actAns,10))
        {
            resultArr[i] = 1;
            $("#tick"+i).attr('src', '../../../common/images/tick.png');
            correctCnt++;
        }
        else
        {
            resultArr[i] = 0;
            $("#tick"+i).attr('src', '../../../common/images/wrong.png');
        }
	$("#tick"+i).css("display","block");
	$("#tick"+i).css("left",$("#drop"+i+" img").width()+2);
	$("#tick"+i).css("top",($("#drop"+i+" img").height()/2 - 7));
	$("#tick"+i).show();	
    }

    if(correctCnt == _this.drops.length)
    {
        isCorrect = true;
    }
    else
    {
        isCorrect = false;
    }
     $("#drop"+i).data('dropped', {num:"drag-1", dragItem:null});
     //$("#drop"+i).data('test', null);
    _this.ddComp.showFeedback({correctCnt:correctCnt, resultArr:resultArr, isCorrect:isCorrect});
}

_this.resetAnswers = function()
{
    _this.snapResArr = [];
    for(var i=0;i<_this.drags.length;i++)
    {
        var element = "#drag"+i;
        $(element).animate({"left": +$(element).data('x')+"px", "top": +$(element).data('y')+"px"}, "slow");
	$(element).data("isDropped", {});
	$(element).data('dItem', null)
	
        var dropElement = "#drop"+i;
        $(dropElement).data('dropped', {num:"drag-1", dragItem:null});
        $(dropElement).data('test', null);
	$(dropElement).data('contains',0);
	
       $("#tick"+i).hide();
       $("#tick"+i).css("display","none");
        $("#ID_FEEDBACK").animate({"height":"0px"},"slow",function(){$("#ID_FEEDBACK").remove()});
    }
}

_this.touchHandler = function(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";

    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;
        case "touchend":   type="mouseup"; break;
        default: return;
    }
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
                              first.screenX, first.screenY,
                              first.clientX, first.clientY, false,
                              false, false, false, 0/*left*/, null);
 
    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}
 
_this.initTouch = function()
{
   document.addEventListener("touchstart", _this.touchHandler, true);
   document.addEventListener("touchmove", _this.touchHandler, true);
   document.addEventListener("touchend", _this.touchHandler, true);
   document.addEventListener("touchcancel", _this.touchHandler, true);
}

_this.enableDrag = function(dragDiv)
{
    _this.dragItem = null;
        
    $(function() {
       _this.initTouch();
        var pointerY;
        var pointerX;
        var diff;
	var scaleVal;
        $(dragDiv).draggable({
            revert: false,
            zIndex:2500,
	    
            start:function(evt, ui){
                _this.dropItem = null;
                _this.dragItem = this;
		scaleVal = $('#mainDiv').data('scaleVal');
		diff = (evt.pageY - $('#canvas').offset().top) / parseInt($(evt.target).css('top'));
		pointerY = parseInt($(evt.target).css('top')) / evt.pageY;		
		pointerX = (evt.pageX - $('#canvas').offset().left) / scaleVal - parseInt($(evt.target).css('left'));
		
		diff = (evt.pageY - $('#canvas').offset().top) / (scaleVal) - parseInt($(evt.target).css('top'));
            },
	    drag : function(evt, ui) {	    
		      $("#ID_FEEDBACK").remove();
		      
		
		      if($(this).data('dItem') != undefined && $(this).data('dItem') != null)
		      {
			      $($(this).data('dItem')).data('contains',0);
			      $(this).data('dItem', null)
		      }
		      if($(this).data("isDropped")!= undefined && $(this).data("isDropped").flag == 1)
		      {			 
			 var id = $(this).data("isDropped").drop.attr('id').split('drop')[1];			
			 $("#tick"+id).hide();			 
			 $(this).data("isDropped").drop.data('dropped', {num:"drag-1", dragItem:null});
			 $(this).data("isDropped").drop.data('test', null);			 
		      }		      
		        if (!createjs.Touch.isSupported()) { 				
				ui.position.top = (evt.pageY * pointerY);
				ui.position.left = Math.round((evt.pageX - $('#canvas').offset().left) / scaleVal - pointerX);
			}
			else
			{
				ui.position.top = Math.round((evt.pageY - $('#canvas').offset().top) / (scaleVal) - diff); 
				ui.position.left = Math.round((evt.pageX - $('#canvas').offset().left) / scaleVal - pointerX); 
				
			}
			if (ui.position.left < -100) 
			    ui.position.left = -100;
			if (ui.position.left + $(this).width() > $('#mainDiv').width())
			    ui.position.left = $('#mainDiv').width() - $(this).width();  
			if (ui.position.top < 0)
			    ui.position.top = 0;
			if (ui.position.top + $(this).height() > $('#mainDiv').height())
			    ui.position.top = $('#mainDiv').height() - $(this).height(); 
			
	    },
            stop:function(){
                if(_this.dropItem == null){
		    $(this).data("isDropped", {});		    
		    _this.snapResArr[$(_this.dragItem).attr('id').split('drag')[1]] = 0;
                    $(this).animate({"left": +this.x+"px", "top": +this.y+"px"}, "slow");
                }
            }
        });
    });
}
_this.enableDrop = function(dropDiv)
{
    $(dropDiv).droppable({
        out:function() {           
	    //$(this).data('dropped', {num:"drag-1", dragItem:null});
            $(this).data('test', null);	    
        },
        drop: function() {	    
	    var tID = $(this).attr('id').split('drop')[1];
	    
	    $("#tick"+tID).hide();
	    if(_this.dataObject.instobj.ansType == 'snap-back')
	    {
		_this.dropItem = this;
				
		var tag = $(_this.dragItem).data('tag');
		var ans = $(this).data('answer');
		
		if(tag == ans)
		{			
			if($(this).data('contains') == 1)
			{
				var prevDrag = $(this).data('dropped').dragItem;				
				$(prevDrag).data('dItem', null);
				$(prevDrag).animate({"left": +prevDrag.x+"px", "top": +prevDrag.y+"px"}, "slow");
			}
			
			$(_this.dragItem).data('dItem', this);
			$(this).data('contains', 1);			
			$(_this.dragItem).css("left", this.x);
			$(_this.dragItem).css("top", this.y);
			$(this).data('dropped', {num: $(_this.dragItem).attr('id'), dragItem:_this.dragItem});
			_this.snapResArr[$(_this.dragItem).attr('id').split('drag')[1]] = 1;
		}
		else
		{			
			_this.snapResArr[$(_this.dragItem).attr('id').split('drag')[1]] = 0;
			$(_this.dragItem).animate({"left": +$(_this.dragItem).data('x')+"px", "top": +$(_this.dragItem).data('y')+"px"}, "slow");
		}
		_this.validateAnswers();
	    }
	    else{
                _this.dropItem = this;				
		if($(this).data('contains') == 1)
		{
			var prevDrag = $(this).data('dropped').dragItem;
			$(prevDrag).data("isDropped", {});
			$(prevDrag).data('dItem', null);		
		        $(prevDrag).animate({"left": +prevDrag.x+"px", "top": +prevDrag.y+"px"}, "slow");
		}
			
		$(_this.dragItem).data('dItem', this);
		$(this).data('contains', 1);
                $(_this.dragItem).css("left", this.x);
                $(_this.dragItem).css("top", this.y);
                $(this).data('dropped', {num: $(_this.dragItem).attr('id'), dragItem:_this.dragItem});
                $(this).data('test', _this.dragItem);
		$(_this.dragItem).data("isDropped", {flag:1, drop:$(this)});
            }
        }
    });
}

_this.validateAnswers = function()
{
		var cnt = 0;
		for(var j=0;j<_this.snapResArr.length;j++)
		{			
			if(_this.snapResArr[j] == 1){
				cnt++;
			}
		}
		if(_this.drags.length == cnt)
		{
			_this.ddComp.showFeedback({isCorrect:true});
		}

}

_this.imageLoaded = function(evt, data)
{		
}

_this.setLabel = function(data)
{
	var labelDiv = document.createElement('div');
        labelDiv.id = "text"+data.compId;
	labelDiv.innerHTML = $(_this.xmlData).find("component#"+data.compId).text();	
	
	var top = $(data.imgDiv).offset().top;
	var left = $(data.imgDiv).offset().left;
	
	if(data.droppable)
		labelDiv.style.cssText = "position:absolute;font-size:10px;top:0;height:auto;text-align:center;left:0;color:#A7A5A6";
	else
		labelDiv.style.cssText = "position:absolute;font-size:11px;top:0;height:auto;text-align:center;left:0;color:#0D658B";
	
	data.btnDiv.appendChild(labelDiv);

	$(labelDiv).css('margin-top', + ($(data.imgDiv).height() - $(labelDiv).height())/ 2 + "px");
	$(labelDiv).width($(data.imgDiv).width());
}


_this.cleanUp = function()
{
	
}