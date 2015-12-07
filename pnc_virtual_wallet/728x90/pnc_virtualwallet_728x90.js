var ctr = (function (window){
    
    //PREVENT IE9 CONSOLE.LOG ERRORS
    if (!window.console) {window.console = {};} if (!console.log) {console.log = function() {};}
	
	//DEFINE MODULE GLOBAL VARIABLES
    var debug = false;
	var clickTagUrl = 'http://www.cnn.com',
       // $click, //for ClickTag
       
        $legalpanel,
        $legaltab,
        $legaltext,
        $ctaHolder,
        $cta,
        $ctaarrow,
       


        loaded = 0,
        isLegalPanelOpen = false,
        t;
        var $footer;
        var $mytablet;
       var  $copy1;
       var $copy2;
       var $copy3;
    
       var $mclegal;
        var imgArr;
        var $mcLegal;

	
	//INTITIALIZE
	var init = function(){
        console.log("INITING!");
        
//        ACTIVATE FOR DOUBLE CLICK
/*		if (Enabler.isInitialized()) {
		    loadSpriteSheet();
		} else {
		    Enabler.addEventListener(studio.events.StudioEvent.INIT, loadSpriteSheet());
		}*/
        
//        ACTIVATE FOR SIZMEK
        /*if (!EB.isInitialized()) {
            EB.addEventListener(EBG.EventName.EB_INITIALIZED, loadSpriteSheet);
            // This code checks whether the EB object is initialized, if the object is initialized, it launches the function "onInit", otherwise it registers to the "EB_INITIALIZED" event. }
            else {
                loadSpriteSheet()
            }
        }  */     
        
        loadSpriteSheet();
	};
        
	
	//PRELOAD SPRITESHEETS
	var loadSpriteSheet = function(){
		var loadedImages = 0;
		imageArr = [
			'logo.png',"applynow.png", "arrow.png", "computer.png", "copy1.png","copy2.png","copy3.png", "mclegal.png"
		];

		preloadImages();

		function preloadImages(){
			for(var i = 0; i<imageArr.length;i++){
				var tempImage = new Image();
				tempImage.src = imageArr[i];
				tempImage.onload = function (){
					trackProgress();
				}
			}
		}

		function trackProgress(){
			loadedImages++;
			if(loadedImages == imageArr.length){
				enablerInitHandler();
				console.log('ELEMENTS SET AND LOADED'+ imageArr);
			}
		}

	};
    
	//CHECK IF ASSETS LOADED
	var enablerInitHandler = function(){
        document.querySelector('.container').style.visibility = "visible";
		setupElements();
	};
    
	//SETUP ELEMENTS
	var setupElements = function(){
		//Set variables
     
  		$click = document.querySelector('.click');//for ClickTag
		
		$mcLegal = document.querySelector('.mcLegal');
		
        $legalpanel = document.querySelector('#legalpanel');
        $legaltab = document.querySelector('#legaltab');
        $legaltext = document.querySelector('#legaltext');
        $ctaHolder = document.querySelector('.ctaHolder');
        $cta = document.querySelector('.cta');
        $ctaarrow = document.querySelector('.ctaarrow');
        $mytablet = document.querySelector('.mytablet');
        $footer = document.querySelector('.footer');
        $mcLegal = document.querySelector('.mcLegal');
        $copy1 = document.querySelector('.copy1');
         $copy2 = document.querySelector('.copy2');
       $copy3 = document.querySelector('.copy3');
		
		//Configure initial properties

		//Define clicktags
//		clickTagArr = [$click];
//		for(var i = 0; i<clickTagArr.length; i++){
//			clickTagArr[i].addEventListener("click", function(){
////                UNCOMMENT BELOW IF USING EITHER DOUBLECLICK OR SIZMEK
//                /*if (Enabler.isInitialized()) {
//				    Enabler.exit('exit', clickTagUrl);
//                } else if (EB.isInitialized()) {
//                    EB.clickthrough("exit", clickTagUrl);
//                }*/
//                console.log("clicktag clicked");
//			});
//		}
		
		//LOAD REMAINING JAVASCRIPT AND CSS	FILES
		
        //Use for online testing
        /*
		loadJsCssFile('pnc_virtualwallet.css');
		loadJsCssFile('//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js', removeLoader);
        */
		
		//Use for local and online testing remote file loading is not allowed on the DoubleClick platform
		//loadJsCssFile('pnc_virtualwallet.css', removeLoader);
		//loadJsCssFile('https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js', tmLoaded);//load TweenLite
       // loadJsCssFile('TweenLite.min.js', tmLoaded);//load TweenMax

		$mcLegal.style.visibility = "visible";
        addMouseEvents();
        seqinit();

	};
    /*
    var tmLoaded = function(){

        loadJsCssFile('TweenSprite.js', removeLoader);
      
    }
	
	var removeLoader = function(){
		//console.log('ELEMENTS SET AND LOADED');
		//$loader.remove();
		addMouseEvents();
		seqinit();

        //someBodyStopMe();
	};
	*/
	// MOUSE EVENTS
	var addMouseEvents = function(){

        $click.addEventListener("click", onExitClick);
        
	};
    function onExitClick(e) {


console.log("Firing the Enabler exi function ");
Enabler.exit("myClickThrough");

    }
    //TIMER TO STOP ALL ANIMATION AT 15 SECONDS
	/*var someBodyStopMe = function(){
		setInterval(function(){
			//kill tweens of array foo
			for(var i = 0; i<foo.length; i++){
				TweenLite.killTweensOf(foo[i]);
			}
		},15000);
	};*/

	//ANIMATION
    
    var seqinit= function() {
        console.log("INIT SEQUENCE");
        t = TweenLite;
        //t.set($mcBgPic,{scale:1.15, transformOrigin: "50% 50%", force3D:"auto", rotation: 0.01 });
        t.set($legalpanel, {top:-$legalpanel.offsetHeight});
       // t.set($mcBgPic,{transformOrigin: "50% 50%", force3D:"auto", rotation: 0.01 });
        //t.set($mcOrange,{scaleX:0, scaleY:0.25, force3D:"auto", rotation: 0.01 });
        //t.set($mcCopy1, {left:"-=300"});
        //t.set([$clovermobile, $clovermini, $cloverstation], {left:"-=300", force3D:"auto", rotation: 0.01});
        //t.set([$b1, $b2, $b3, $headline1], {left:"+=300"});
       // t.to($copy2, .1, {scale:.10, transformOrigin: "50% 50%", ease:Linear.easeNone});
       
        t.delayedCall(.3, seq1);
    }


    var seq1 = function(){
        console.log("SEQ 1");
        setInteractions();

         $mytablet.style.visibility = "visible";
         $footer.style.visibility = "visible";
         $copy1.style.visibility = "visible";
         
         $copy3.style.visibility = "visible";
        

        //$mcOrange.style.display = "block";
       // $mcCopy1.style.display = "block";

       // t.spriteSheet( $mcHeadline, { 
          //  width: 1360, 
           // offsetX: 0,
            //offsetY: 0,
            //stepX: 272, 
            //stepY: 38, 
            //count: 25
        //}, 1, { delay:0 });

        t.from($mytablet, 0.75, {left:-250, ease:Quart.easeOut, delay:0});
        
        t.from($copy1, 0.3, {left:301, opacity:0, ease:Quart.easeOut, delay:.75});
        t.delayedCall(1.25, my300Reveal);
     
      t.from($copy3, 0.3, {left:301, opacity:0, ease:Quart.easeOut, delay:1.75, onComplete:seq2});

    
       // t.delayedCall(3.5, seq2);
    }

    function my300Reveal () {

      $copy2.style.visibility = "visible";
       t.from($copy2, 0.3, {scale:.1, ease:Bounce.easeOut, delay:0});

}

 var seq2 = function() {
        console.log("SEQ 3");
        $legalpanel.style.visibility = "visible";
        t.to($legalpanel, 0.5, {top:-$legaltext.offsetHeight, ease:Bounce.easeOut, delay:.5});
    }
    
    

   
    
	// CALLBACK FUNCTIONS
    var setInteractions = function(){
        console.log("SET INTERACTIONS IS CALLED");
        if (isDevice()){
            $legalpanel.addEventListener("click", showHideLegalPanel);
            $legaltab.innerHTML = "TAP FOR DETAILS";
        } else {
            $click.addEventListener("mouseover", function (e){  
            console.log("I AM MOUSE OVER");  
                t.to($ctaarrow, 0.25, {left:93});
            });
            $click.addEventListener("mouseout", function (e){   
            console.log("I AM MOUSE OUT"); 
                t.to($ctaarrow, 0.25, {left:90});
            });
            $legalpanel.addEventListener("mouseover", showHideLegalPanel);
            $legalpanel.addEventListener("mouseout", showHideLegalPanel);
        }
    }
    
    // OTHER FUNCTIONS

    var showHideLegalPanel = function(e){
        switch(e.type) {
            case "mouseover":
                t.to($legalpanel, .25, {top:0});
                break;
            case "mouseout":
                t.to($legalpanel, .25, {top:-$legaltext.offsetHeight});
                break;
            case "click":
                isLegalPanelOpen = !isLegalPanelOpen;
                if (!isLegalPanelOpen) {
                    $legaltab.innerHTML = "TAP FOR DETAILS";
                    t.to($legalpanel, .25, {top:-$legaltext.offsetHeight});
                } else {
                    $legaltab.innerHTML = "TAP TO CLOSE";
                    t.to($legalpanel, .25, {top:0});
                }
                break;
        }
    }
    
    var isDevice = function(){
	   var isAndroid = navigator.userAgent.toUpperCase().indexOf('ANDROID')>=0;
	   var isIos = navigator.userAgent.match(/(iPhone|iPod|iPad)/i)?true:false;
	   if (isAndroid === false && isIos === false ) { return false; }
	   return true;
    }

	
	//DYNAMICALLY LOAD JS/CSS + CALLBACK
	//Source: http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
	var loadJsCssFile = function(filename,func){
		var filetype = filename.substring(filename.lastIndexOf('.')+1);
		if(filetype == 'js'){
			var fileref = document.createElement('script');
			fileref.setAttribute('type','text/javascript')
			fileref.setAttribute('src', filename);
		}
		else if(filetype == 'css'){
			var fileref = document.createElement('link');
			fileref.setAttribute('rel','stylesheet');
			fileref.setAttribute('type', 'text/css')
			fileref.setAttribute('href', filename);
		}
		if(typeof fileref!= 'undefined'){
			if(func){
				if(fileref.readyState){//IE 8, 9, 10
					fileref.onreadystatechange = fileref.onload = function(){
						if(fileref.readyState == 'loaded' || fileref.readyState == 'complete'){
							fileref.onreadystatechange = null;
							func();
						}
					};
				}
				else{//other browsers
					fileref.onload = function (){
					func();
					}
				}
			}
			document.getElementsByTagName('head')[0].appendChild(fileref);
		}
	}
	
	return {
		init: init 
	};	
	
})(window);
		
//ctr.init(); //Run Animation