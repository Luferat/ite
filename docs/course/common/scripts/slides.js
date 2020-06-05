// This JS loads the xml file for HTML pages and invoke the appropriate template for HTML pages	
	var url=location.href;	
	var mediaPath = url.substr(0, url.lastIndexOf('/'));	
	url=url.split("/");
	url=url[url.length-3];
	var xmlFile='media_'+url+'.xml';
	var data, rootContainer, stage, dataObject;
	
	function init(){
		$.ajaxSetup({
			cache: true
		});
		if(!swfobject.hasFlashPlayerVersion("1")){
			createjs.Ticker.addListener(this);
			$.ajax({
				type: "GET",
				crossDomain:false, //edit 24/01 : this property must be set to false
				url: xmlFile,
				dataType: "xml",
				success: initHTMLPage,
				error: erFun
			});
		}
	}	
	function loadJSFiles (scripts, callback, _this)
	{
		var loadCount = scripts.length;

		function done(){
			loadCount -=1;
			if (loadCount==0){ 
				callback(_this);
			}
		}

		for ( var i=0; i<scripts.length; i++){
			$.getScript(scripts[i], done);
		}

	}
	
	function initHTMLPage(xmlData)
	{
		data = xmlData;
		loadJSFiles(["../../../common/scripts/templates/RootContainer.js"],initTemplate, this);		
	}
	
	function initTemplate()
	{		
		var _slide, _scripts;				
		var canvas = document.getElementById("canvas");
		dataObject = getData();
		stage = new createjs.Stage(canvas);	
		rootContainer = new RootContainer();	
		stage.addChild(rootContainer);
		
		if (createjs.Touch.isSupported()) { createjs.Touch.enable(stage); }
		switch(dataObject.templateType)
		{  		
			case "IMAGE":
					_scripts = ["../../../common/scripts/templates/slide/ImageSlideNew.js","../../../common/scripts/templates/comp/MultipleImageComp.js", "../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/ImageComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);									
				break;
				
			case "MULTI_BUTTON":
					_scripts = ["../../../common/scripts/templates/slide/MultiButtonSlide.js","../../../common/scripts/templates/comp/ButtonComp.js","../../../common/scripts/templates/comp/TextComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);		
				break;
				
			case "MULTI_BAR":		
					_scripts = ["../../../common/scripts/templates/slide/MultiBarSlide.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);
				break;
				
			case "TABLE":	
					_scripts = ["../../../common/scripts/templates/slide/TableSlideNew.js","../../../common/scripts/templates/comp/TableComp.js","../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/ImageComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);
				break;
			
			case "DESCRIPTION":				
					_scripts = ["../../../common/scripts/templates/slide/DescriptionSlide.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/TextBoxComp.js","../../../common/scripts/templates/comp/DraggableTextBoxComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);
				break;
			
			case "ANIMATION":
					var _scripts = ["../../../common/scripts/templates/slide/AnimationSlide.js","../../../common/scripts/templates/comp/ImageComp.js","../../../common/scripts/templates/comp/TextComp.js","../../../common/scripts/templates/comp/MultipleImageComp.js","../../../common/scripts/templates/comp/AnimationComp.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);	
				break;

			case "DRAG_DROP":
					_scripts = ["../../../common/scripts/templates/comp/DragDropComp.js","../../../common/scripts/templates/slide/DragDropSlide.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);	
				break;
			case "INTERACTIVE":			
					_scripts = ["../../../common/scripts/templates/slide/Interactiveslide.js","../../../common/scripts/templates/slide/MultiButtonSlide.js"]
					loadJSFiles(_scripts, onLoadJavascript, this);					
				break;
				
			case "INTERACTIVEANIM":
					var animPath = mediaPath+'/Animation.js';						
					_scripts = ["../../../common/scripts/templates/slide/InteractiveAnimSlide.js","../../../common/scripts/templates/comp/AnimationControlComp.js","../../../common/js/jquery/jquery-ui-1.9.1.custom.min.js","../../../common/js/greensock/TweenMax.min.js",animPath]
					loadJSFiles(_scripts, onLoadJavascript, this);	
			    break;
			
			case undefined:
					alert("I think you forgot to update the template type in getData().. Please check..");
				break;	
		}
	}

function onLoadJavascript(_this)
{
	var _slide;
	switch(dataObject.templateType)
		{  		
			case "IMAGE":
					_slide = new ImageSlideNew(data, dataObject.slideObject);	
					rootContainer.addChild(_slide);					
				break;
				
			case "MULTI_BUTTON":		
					stage.enableMouseOver();		
					_slide = new MultiButtonSlide(data,dataObject);					
					rootContainer.addChild(_slide);
				break;
				
			case "MULTI_BAR":		
					stage.enableMouseOver();		
					_slide = new MultiBarSlide(data,dataObject);					
					rootContainer.addChild(_slide);
				break;
				
			case "TABLE":	
					_slide = new TableSlideNew(data,dataObject);
					rootContainer.addChild(_slide);
				break;
			
			case "DESCRIPTION":				
					_slide = new DescriptionSlide(data,dataObject);	
					rootContainer.addChild(_slide);
				break;
			
			case "ANIMATION":
					_slide = new AnimationSlide(data,dataObject);
					rootContainer.addChild(_slide);
				break;

			case "DRAG_DROP":
					if(typeof dataObject.instobj.noDefaultHelp == 'undefined' && dataObject.instobj.noDefaultHelp != true)						
						dataObject.isViewDD = 1;
					_slide = new DragDropSlide(data,dataObject);					
				break;
			case "INTERACTIVE":	
			
			_slide = new Interactiveslide(data,dataObject);
					
				break;
				
				case "INTERACTIVEANIM":					
				_slide = new InteractiveAnimSlide(data,dataObject.slideObject);
			    break;
			
			case undefined:
					alert("I think you forgot to update the template type in getData().. Please check..");
				break;	
		}
}	
function erFun(e){
	alert("Error"+e);
}
