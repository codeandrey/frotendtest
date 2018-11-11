import jQuery from 'jquery';
import slick from 'slick-carousel';
import AOS from 'aos';

jQuery(function() {
    jQuery(".slider").slick({
    	dots: false,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		arrows: false
	});

	  jQuery(".menu-bars").click(function(){
	  	jQuery(".menu-mobile").toggle();

	  });

  AOS.init();
 
		

});