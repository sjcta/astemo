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
		/*$(window).scroll(function(){
			
			//导航吸附效果
			var HotSpot_Height = $(window).scrollTop();
			if( HotSpot_Height > 512){
				$("ul.HotSpot").addClass("FixedTop");
				//$("p.Slogan").css({"margin-top":"106px"});
			}else {
				$("ul.HotSpot").removeClass("FixedTop");
				//$("p.Slogan").css({"margin-top":"0"});
			}
		});*/
		
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





// 動画制御
$(function(){
	$("#video").on('ended',function(){
		$("#video").hide();
		$(".video_box .btn_skip").hide();
		$("#plantform").fadeIn();
		$('#video')[0].pause();
	});

	// Skipボタン
	$(".video_box .btn_skip a").click(function(){
		$("#video").hide();
		$(".video_box .btn_skip").hide();
		$("#plantform").fadeIn();
		$('#video')[0].pause();
	});
});



var videoScrollEventFlag = false;

// 動画の位置までスクロールしたら自動再生
function videoScrollEvent(){
	Hscroll = window.pageYOffset;
	if(Hscroll + ($(window).height() / 2) > $("#video").offset().top && videoScrollEventFlag == false){
		$("#video")[0].play();
		videoScrollEventFlag = true;
	}
}
$(function(){
	// スクロール時
	$(window).scroll(function (){			   
		videoScrollEvent();
	});

	// リサイズ時
	$(window).bind('resize',function(){
		videoScrollEvent();
	});
});


// 展示一覧高さ揃え
$(function(){
	$("#exhibit01 .copy, #exhibit02 .copy").tile();
	$("#exhibit03 .copy, #exhibit04 .copy").tile();
	$("#exhibit05 .copy, #exhibit06 .copy").tile();
});



// モーダルを開く
function modalOpen(target){
	$("#modal_close a").fadeIn();
	$("#modal_bg").fadeIn();
	$("#modal").addClass("active");
	$(target).show();
	modalSet();

	if(target.indexOf('movie') != -1){
		var targetMovie = $(target).get(0);
		targetMovie.play();
	}
}

// モーダルを閉じる
$(function(){
	$("#modal_close a, #modal_bg").click(function(){
		$("#modal video, #modal div").hide();
		$("#modal_close a").hide();
		$("#modal_bg").hide();
		$("#modal").removeClass("active");

		var movie1 = $('#modal #movie1').get(0);
		var movie2 = $('#modal #movie2').get(0);
		var movie3 = $('#modal #movie3').get(0);
		movie1.pause();
		movie2.pause();
		movie3.pause();
	});
});


function modalSet(){
	$("#modal").css("top", ($(window).height() - $("#modal").height()) / 2 );
}



// リサイズ時
$(window).bind('resize',function(){
	modalSet();
});
	



// アンカーリンク制御
$(function(){
	$(".HotSpot li a").unbind("click");
	$("area").unbind("click");

	$(".HotSpot li a, area").click(function(){
		var position = $($(this).attr("href")).offset().top - $(".HotSpot").height() - 20;
		$("html, body").animate({scrollTop:position}, 500);
		return false;
	});
});

function HotSpotSet(){
	Hscroll = window.pageYOffset;

	if(Hscroll > $(".HotSpotSpc").offset().top){
		$(".HotSpot").addClass("FixedTop");
		$(".HotSpotSpc").height($(".HotSpot").height());
		$(".HotSpotSpc").css("margin","0 0 30px");
	}
	else{
		$(".HotSpot").removeClass("FixedTop");
		$(".HotSpotSpc").height("auto");
		$(".HotSpotSpc").css("margin","0 0 0");
	}
}

// スクロール時
$(window).scroll(function (){			   
	HotSpotSet();
});

// リサイズ時
$(window).bind('resize',function(){
	HotSpotSet();
});

$(function(){
	HotSpotSet();
});