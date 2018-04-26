
$(document).ready(function(){
	
	var $win_w=$(window).width();
	var $win_h=$(window).height();

	$('.tab_body').css('height',$win_h - 80);

	setTimeout(function(){
		$('header').delay(300).animate({
			top: '0'
		},1000);
	},30)

/***********************nav*********************/	
	$('.top_nav').find('li').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	})
	var $dl=$('.text').siblings();
	if ($dl) {
		$('.text').parent().hover(function(){
			$(this).find('dl').addClass('active');
		},function(){
			$(this).find('dl').removeClass('active');
		})
	}

/*********************map******************/
	var city=$('.city');
	var point=$('.point');
	var cover=$('.hover_cover');
	cover.hover(function(){
		var num=$(this).index('.hover_cover');
		city.eq(num).animate({'opacity':'1'},300);
		point.eq(num).find('div').removeClass('a-bouncein shan').addClass('a-bounceout');
		point.eq(num).find('span').animate({'opacity':'1'},300);
	},function(){
		var num=$(this).index('.hover_cover');
		city.eq(num).animate({'opacity':'0'},300);
		point.eq(num).find('div').removeClass('a-bounceout shan').addClass('a-bouncein');
		point.eq(num).find('span').animate({'opacity':'0.7'},300);
	});  

/*********************tab******************/
	
	$('.tab_body').css('height',$win_h - 80);

	function showOTab(tab){
		$(tab).addClass('show');
		$('header').slideUp();
		$.fn.fullpage.setAllowScrolling(false);
	}
	function showMTab(btn,tab,that){
		$(tab).addClass('show');
		$(tab).find('a').removeClass('active');
		$(tab).find('a').eq(that).addClass('active');
		$(tab).find('.tab_inner').removeClass('show');
		$(tab).find('.tab_inner').eq(that).addClass('show');
		$('header').slideUp();
		$.fn.fullpage.setAllowScrolling(false);
	}


	$('.showtab1').click(function(){
		showOTab('.tab1');
	});
	$('.showtab2').click(function(){
		var that = $(this).index('.showtab2');		
		showMTab('.showtab2','.tab2',that);
	});	
	$('.showtab3').click(function(){
		var that = $(this).index('.showtab3');
		showMTab('.showtab3','.tab3',that);
	});	
	$('.showtab4').click(function(){
		showOTab('.tab4');
	});



	$('.back_btn').click(function(){
		$(this).parents('.tab').removeClass('show');
		$('header').slideDown();
		$.fn.fullpage.setAllowScrolling(true);
	});


	var more1btn=$('.tab_header').find('a');
	if (more1btn.length > 1) {
		more1btn.click(function(){
			more1btn.removeClass('active');
			$(this).addClass('active');
			var No=$(this).index() - 1;
			$(this).parent().siblings('.tab_body').find('.tab_inner').removeClass('show');
			$(this).parent().siblings('.tab_body').find('.tab_inner').eq(No).addClass('show');
		});
	}
});


