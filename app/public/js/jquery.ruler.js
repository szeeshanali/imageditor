/**
 * jQuery.Ruler v1.1
 * Add Photoshop-like rulers and mouse position to a container element using jQuery.
 * http://ruler.hilliuse.com
 * 
 * Dual licensed under the MIT and GPL licenses.
 * Copyright 2013 Hillius Ettinoffe http://hilliuse.com
 */
 ;(function( $ ){
	$.fn.ruler = function(options) {
	
		var defaults = {
			vRuleSize: 18,
			hRuleSize: 18,
			showCrosshair : true,
			showMousePos: true
		};//defaults
		var settings = $.extend({},defaults,options);
		
		var hRule = '<div class="ruler hRule"></div>',
				vRule = '<div class="ruler vRule"></div>',
				corner = '<div class="ruler corner"></div>',
				vMouse = '<div class="vMouse"></div>',
				hMouse = '<div class="hMouse"></div>',
				mousePosBox = '<div class="mousePosBox">x: 50%, y: 50%</div>';
		
		if (!Modernizr.touch) {
			// Mouse crosshair
			if (settings.showCrosshair) {
				$('body').append(vMouse, hMouse);
			}
			// Mouse position
			if (settings.showMousePos) {
				$('body').append(mousePosBox);
			}
			// If either, then track mouse position
			if (settings.showCrosshair || settings.showMousePos) {
				$(window).mousemove(function(e) {
					if (settings.showCrosshair) {
						$('.vMouse').css("top",e.pageY-($(document).scrollTop())+1);
						$('.hMouse').css("left",e.pageX+1);
						//-($(window).scrollTop())
					}
					if (settings.showMousePos) {
						$('.mousePosBox').html("x:" + (e.pageX-settings.vRuleSize) + ", y:" + (e.pageY-settings.hRuleSize) ).css({
							top: e.pageY-($(document).scrollTop()) + 16,
							left: e.pageX + 12
						});
					}
				});
			}
		}
		
		// //resize
		// $(window).resize(function(e){
		// 	var $hRule = $('.hRule');
		// 	var $vRule = $('.vRule');
		// 	$hRule.empty();
		// 	$vRule.empty().height(0).outerHeight($vRule.parent().outerHeight());
		// 	//var logoSize = parseFloat($(".logo-size").text())
		// 	var logoSize = $(".logo-size").text()?.split('x');
		// 	let logoWidth = parseFloat(logoSize[0]);
		// 	let logoHeight = parseFloat(logoSize[1]);

		// 	// Horizontal ruler ticks
		// 	var tickLabelPos = settings.vRuleSize;
		// 	var newTickLabel = "";
		// 	var hLabelValue =0;  
		// 	while ( tickLabelPos <= $hRule.width() ) {
		// 		if ((( tickLabelPos - settings.vRuleSize ) %50 ) == 0 ) {
		// 			hLabelValue += 1; 
		// 			console.log(hLabelValue);
		// 			var val = (logoWidth*hLabelValue)/10;
		// 		   console.log(val);
		// 			newTickLabel = "<div class='tickLabel'>" + val.toFixed(1) + "''</div>";
		// 			$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
		// 		} else if ((( tickLabelPos - settings.vRuleSize ) %10 ) == 0 ) {
		// 			newTickLabel = "<div class='tickMajor'></div>";
		// 			$(newTickLabel).css("left",tickLabelPos+"px").appendTo($hRule);
		// 		} else if ((( tickLabelPos - settings.vRuleSize ) %5 ) == 0 ) {
		// 			newTickLabel = "<div class='tickMinor'></div>";
		// 			$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
		// 		}
		// 		tickLabelPos = (tickLabelPos + 5);				
		// 	}//hz ticks

			
		// 	// Vertical ruler ticks
		// 	tickLabelPos = settings.hRuleSize;

		// 	newTickLabel = "";
		// 	var vLabelValue = 0;
		// 	while (tickLabelPos <= $vRule.height()) {
		// 		if ((( tickLabelPos - settings.hRuleSize ) %50 ) == 0) {
		// 			vLabelValue += 1; 
		// 			var val = (logoHeight*vLabelValue)/10;
		// 			newTickLabel = "<div class='tickLabel'>" + val.toFixed(1) + "''</div>";
		// 			$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
		// 		} else if (((tickLabelPos - settings.hRuleSize)%10) == 0) {
		// 			newTickLabel = "<div class='tickMajor'></div>";
		// 			$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
		// 		} else if (((tickLabelPos - settings.hRuleSize)%5) == 0) {
		// 			newTickLabel = "<div class='tickMinor'></div>";
		// 			$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
		// 		}
		// 		tickLabelPos = ( tickLabelPos + 5 );				
		// 	}//vert ticks
		// });//resize
		
		return this.each(function() {
			var $this = $(this);
			
			// Attach rulers
			
			// Should not need 1 min padding-top of 1px but it does
			// will figure it out some other time
			$this.css("padding-top", settings.hRuleSize + 1 + "px");
			if (settings.hRuleSize > 0) {				
				$(hRule).height(settings.hRuleSize).prependTo($this);
			}
			
			if (settings.vRuleSize > 0) {
				var oldWidth = $this.outerWidth();
				$this.css("padding-left", settings.vRuleSize + 1 + "px").outerWidth(oldWidth);
				$(vRule).width(settings.vRuleSize).height($this.outerHeight()).prependTo($this);
			}
			
			if ( (settings.vRuleSize > 0) && (settings.hRuleSize > 0) ) {
				$(corner).css({
					width: settings.vRuleSize,
					height: settings.hRuleSize
				}).prependTo($this);
			}
			
			
			var $hRule = $this.children('.hRule');
			var $vRule = $this.children('.vRule');
		
			// Horizontal ruler ticks
			var tickLabelPos = settings.vRuleSize;
			var newTickLabel = "";
			var hLabelValue = 0; 
			var prevLogoSize = null; 
			var logoSize = $(".logo-size").text()?.split('x');
			let logoWidth = parseFloat(logoSize[0]);
			let logoHeight = parseFloat(logoSize[1]);
			let area = 500;
			let pxLogoWidth =  area/logoWidth;
			let inchesCounter = Math.floor(logoWidth);
			let cmValues = (area-pxLogoWidth*inchesCounter);
			var major = tickLabelPos;
			for(var i=0;i<=inchesCounter;i++)
			{

					hLabelValue += 1; 
					console.log("logoSize",logoSize);
					var val = (logoWidth*hLabelValue);
					newTickLabel = "<div class='tickLabel'>" + hLabelValue + "''</div>";
					$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
					for(var j=0;j<8;j++)
					{
						newTickLabel = "<div class='tickMajor'></div>";
				 		$(newTickLabel).css( "left", major +"px" ).appendTo($hRule);
						 major = major + (pxLogoWidth/8)
					}
				tickLabelPos = (tickLabelPos + pxLogoWidth);	
			}
			
			// while ( tickLabelPos <= $hRule.width() ) {
			// 	if ((( tickLabelPos - settings.vRuleSize ) % 50 ) == 0 ) {
			// 		hLabelValue += 1; 
			// 		console.log("logoSize",logoSize);
			// 		var val = (logoWidth*hLabelValue)/10;
			// 	   console.log(val);
			// 		newTickLabel = "<div class='tickLabel'>" + val.toFixed(1) + "''</div>";
			// 		$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
			// 	} else if ((( tickLabelPos - settings.vRuleSize ) %10 ) == 0 ) {
			// 		newTickLabel = "<div class='tickMajor'></div>";
			// 		$(newTickLabel).css("left",tickLabelPos+"px").appendTo($hRule);
			// 	} else if ((( tickLabelPos - settings.vRuleSize ) %5 ) == 0 ) {
			// 		newTickLabel = "<div class='tickMinor'></div>";
			// 		$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
			// 	}
			// 	tickLabelPos = (tickLabelPos + 5);				
			// }
			// Vertical ruler ticks

			let vTickLabelPos = settings.hRuleSize;
			newTickLabel = "";
			let vLabelValue =0;
		
			let vArea = $vRule.height();
			let pxLogoHeight = vArea/logoHeight;
			let inchesHeightCounter = Math.floor(logoHeight);
			var vMaker = vTickLabelPos;
			for(var i=0;i<=inchesHeightCounter;i++)
			{
				vLabelValue += 1; 			
				newTickLabel = "<div class='tickLabel'>" + vLabelValue + "''</div>";
				$(newTickLabel).css( "top", vTickLabelPos+"px" ).appendTo($vRule);
				for(var j=0;j<8;j++)
				{
					newTickLabel = "<div class='tickMajor'></div>";
					 $(newTickLabel).css( "top", vMaker +"px" ).appendTo($vRule);
					//tickLabelPos = (tickLabelPos + pxLogoHeight);	
					 vMaker = vMaker + (pxLogoHeight/8)
				}
				vTickLabelPos = (vTickLabelPos + pxLogoHeight);	
			}
			// while (tickLabelPos <= $vRule.height()) {
			// 	if ((( tickLabelPos - settings.hRuleSize ) %50 ) == 0) {
			// 		vLabelValue += 1; 
			// 		console.log(vLabelValue);
			// 		var val = (logoHeight*vLabelValue)/10;
			// 	   console.log(vLabelValue)

			// 		newTickLabel = "<div class='tickLabel'><span>" + + val.toFixed(1) + "''</span></div>";
			// 		$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
			// 	} else if (((tickLabelPos - settings.hRuleSize)%10) == 0) {
			// 		newTickLabel = "<div class='tickMajor'></div>";
			// 		$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
			// 	} else if (((tickLabelPos - settings.hRuleSize)%5) == 0) {
			// 		newTickLabel = "<div class='tickMinor'></div>";
			// 		$(newTickLabel).css( "top", tickLabelPos+"px" ).appendTo($vRule);
			// 	}
				
			// 	tickLabelPos = ( tickLabelPos + 5 );				
			// }			
			//vert ticks						
		});//each				
	};//ruler
})( jQuery );