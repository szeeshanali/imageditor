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
		return this.each(function() {
			var $this = $(this);
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
			var hRulerWidth = canvas.getWidth() + 26; 
			$hRule.width(hRulerWidth)
			// Horizontal ruler ticks
			var tickLabelPos = settings.vRuleSize;
			var newTickLabel = "";
			var hLabelValue = 0; 
			var prevLogoSize = null; 
			var logoSize = $(".logo-size").text()?.split('x');
			let logoWidth = parseFloat(logoSize[0]);
			let logoHeight = parseFloat(logoSize[1]);
			let area = hRulerWidth;
			
			let pxLogoWidth =  (area-26)/logoWidth;
			let inchesCounter = Math.ceil(logoWidth);
			
			var major = tickLabelPos;
			const marker = (logoHeight<=4 && logoWidth<=4)?4:8;
			for(var i=0;i<=inchesCounter;i++)
			{

					
					console.log("logoSize",logoSize);
					var val = (logoWidth*hLabelValue);
					newTickLabel = "<div class='tickLabel'>" + hLabelValue + "''</div>";
					// if(logoWidth<2)
					// {
					// 	newTickLabel = "<div class='majorLabel'>" + hLabelValue + "''</div>";
					// }
					
					$(newTickLabel).css( "left", tickLabelPos+"px" ).appendTo($hRule);
					for(var j=0;j<marker;j++)
					{
						newTickLabel = "<div class='tickMajor'></div>";
				 		$(newTickLabel).css( "left", major +"px" ).appendTo($hRule);
						 major = major + (pxLogoWidth/marker)
					}
				tickLabelPos = (tickLabelPos + pxLogoWidth);	
				hLabelValue += 1; 
			}

			let vTickLabelPos = settings.hRuleSize;
			newTickLabel = "";
			let vLabelValue =0;
		
			let vArea = $vRule.height();
			let pxLogoHeight = vArea/logoHeight;
			let inchesHeightCounter = Math.ceil(logoHeight);
			var vMaker = vTickLabelPos;
			for(var i=0;i<=inchesHeightCounter;i++)
			{
					
				newTickLabel = "<div class='tickLabel'>" + vLabelValue + "''</div>";
				$(newTickLabel).css( "top", vTickLabelPos+"px" ).appendTo($vRule);
				for(var j=0;j<marker;j++)
				{
					newTickLabel = "<div class='tickMajor'></div>";
					 $(newTickLabel).css( "top", vMaker +"px" ).appendTo($vRule);
					//tickLabelPos = (tickLabelPos + pxLogoHeight);	
					 vMaker = vMaker + (pxLogoHeight/marker)
				}
				vTickLabelPos = (vTickLabelPos + pxLogoHeight);	
				vLabelValue += 1; 		
			}
							
		});//each				
	};//ruler
})( jQuery );