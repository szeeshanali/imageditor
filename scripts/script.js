var onanimate = false;

jQuery(function($){
	// var screenHeight = $(document).outerHeight();
	// var navHeight = $('#nav').outerHeight();
	// var colophonHeight = $('#colophon').outerHeight();
	// var mainHeight = screenHeight - navHeight - colophonHeight;
	// $('#main').css({
	// 	'min-height': mainHeight
	// });

	// Scroll to top button
	var scrollTimeout;
	
	$('a.scroll-top').click(function(){
		$('html,body').animate({scrollTop:0},500);
		return false;
	});

	$(window).scroll(function(){
		clearTimeout(scrollTimeout);
		if($(window).scrollTop()>400){
			scrollTimeout = setTimeout(function(){$('a.scroll-top:hidden').fadeIn()},100);
		}
		else{
			scrollTimeout = setTimeout(function(){$('a.scroll-top:visible').fadeOut()},100);	
		}
	});
	
	//Initial ScrollSpy, Carousel
	$('.nav-collapse').scrollspy();
	$('.carousel').carousel({interval:false});
	
	// Scroll to section onclick to menu
	
	$('#nav .nav a').click(function(e){
		if (!$(this).hasClass("no-scroll")) {
			e.preventDefault();
			var des = $(this).attr('href');
			goToSectionID(des);
		}
	})

	//Fix dropdown bootstrap
	$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); })
				.on('touchstart.dropdown', '.dropdown-submenu', function (e) {e.preventDefault();});
	if( 'ontouchstart' in document.documentElement ) {
		var clickable = null;
		$('#access .menu-item').each(function(){
			var $this = $(this);

			if( $this.find('ul.sub-menu').length > 0 ) {

				$this.find('a:first').unbind('click').bind('touchstart',function(event){
					if( clickable != this ) {
						clickable = this;
						event.preventDefault();
					} else {
						clickable = null;
					}
				});
			}
		});
	}


	//Trigger change url on scroll
	$('.nav-collapse').on('activate',function(e){
		if(onanimate) return;
		
		if(history.pushState) {
		    history.pushState(null, null, $('.nav-collapse .active a').attr('href'));
		}
		else {
			//var currenttop = $(window).scrollTop();
		  //  location.hash = $('.nav-collapse .active a').attr('href');
		  //$(window).scrollTop(currenttop);
		}
		
	})

	// Carousel Slider spy
	$('.carousel').on('slid',function(e){
		var t = $(this),
			item = t.find('.carousel-inner .active'),
			idx =	t.find('.carousel-inner .item').index(item);
		t.find('.carousel-nav > ul li').removeClass('active')
		t.find('.carousel-nav > ul li:eq('+idx+')').addClass('active')
	})

	// Generate slider pagination 
	
	$('.carousel').each(function(){
		var t = $(this);
		t.find('.carousel-nav > ul li').live('click',function(e){
			e.preventDefault();
			var idx = t.find('.carousel-nav > ul li').index($(this));
			t.carousel(idx);
		});
	}) 

	$('.carousel').each(function(){
		var t = $(this),
			nav = t.find('.carousel-nav > ul');
		t.find('.carousel-inner .item').each(function(i,j){
			var clss = (i==0)?'active':'';
			nav.append('<li class="img-circle '+clss+'"><a class="img-circle" href="#'+i+'"><span></span></a></li> ');
		});
	});

	$('.arrow-down, .next-section').on('click',function(event){
		event.preventDefault();
		var des = '#'+$(this).closest('.section').next().attr('id');
		goToSectionID(des);
	});

	$('.gotosection').on('click',function(event){
		var des = $(this).attr('href');
		goToSectionID(des);
	}); 

	/**
	 * Responsive Iframe 
	 */
	// function responsiveIframe() {
	//  // Fix responsive iframe
	// $('iframe').each(function(){
	//   var iwidth = $(this).width();
	//   var iheight = $(this).height();
	//   var iparent_width = $(this).parent().width();
	//   var irate = iparent_width/iwidth;
	//   var inew_height = Math.round(iheight*irate);
	//
	//   if (!$(this).hasClass('intercom-launcher-frame') && !$(this).is('#intercom-frame')) {
	// 	  $(this).css({
	// 		  'width': iparent_width,
	// 		  'height': inew_height,
	// 	  });
	//   }
	// });
	// }

	//responsiveIframe();

	//$(window).resize(function(){
	//	responsiveIframe();
	//});
});

/**
 * Scroll to section
 * @param  string des HTML identity of section block
 * @return void
 */
function goToSectionID(des){
	var os = (history.pushState)?51:0;
	os = (jQuery(window).width()>800)?os:0;

	var pos = (jQuery(des).length>0 )?jQuery(des).offset().top-os:0;
	onanimate = true;
	jQuery('html,body').animate({scrollTop:pos},1000,function(){
		if(history.pushState){
			history.pushState(null,null,des);
		}else		window.location.hash = des;
		jQuery(window).scrollTop(pos);
		onanimate=false
	});
}


