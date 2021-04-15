// JavaScript Document
/* **************************************************

Name: add.js

Description: js for hcmc

Create: 2016.10.28
Update: XXXX.XX.XX

Copyright 2016 Hitachi, Ltd.

***************************************************** */
	
$(document).ready(function(e) {
	//产品介绍干燥机
	if($("#bd").length>0){
		
		var is_click = false, 
			 timeout = false;
		$(window).scroll(function(){
			
			//导航吸附效果
			var HotSpot_Height = $(window).scrollTop();
			if( HotSpot_Height > 512){
				$("ul.HotSpot").addClass("FixedTop");
				//$("p.Slogan").css({"margin-top":"106px"});
			}else {
				$("ul.HotSpot").removeClass("FixedTop");
				//$("p.Slogan").css({"margin-top":"0"});
			}
		});
		
		// 标记导航active
		function activeNav(num) {
			var num = num + 512, // 顶部悬浮导航条的高度 + 距离目标块的边距
				$nav = $('ul.HotSpot li');
			$('div[data-connect=nav]').each(function () {
				var $this = $(this),
					id = $this.attr('id');
				if (num >= $this.data('num')) {
					$('ul.HotSpot li a').parent().addClass('active').siblings().removeClass('active');
					//$('ul.HotSpot li a.active').removeClass('active');
					$('a[href=#'+id+']').parent().addClass('active');
				} else {
					$('a[href=#'+id+']').parent().removeClass('active');
				}
			})
		}
		
		function ScrollTo(target, time) {
			$('html,body').animate({scrollTop: target}, time);
		}
		var is_click = false, 
			 timeout = false;
			 
		//锚点滑块
		$('ul.HotSpot li a').on('click', function () {
				$(this).parent().addClass('active').siblings().removeClass('active');
				//$(this).removeClass('active');
				//$(this).addClass('active');
				ScrollTo($($(this).attr("href")).offset().top-150, 500);
				is_click = true;
				return false;
		});
		
		// 在每个块上添加 data-num 标记该块的 offset().top， activeNav() 中会用到
		$('div[data-connect=nav]').each(function () {
			$(this).data('num', $(this).offset().top);		
		});
		
		// 监听滚动事件
		$(window).on('scroll', function () {
			if (timeout) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(function () {
				var num =  $(this).scrollTop();
				if (!is_click) {
					activeNav(num);
				}
				is_click = false;
			}, 20);
		});
		
		

	

	}
	
	
});