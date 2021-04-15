(function($) {
	
	
/* Modal Image
-----------------------------------------------------------------------*/
var modalImage = function() {
	
	var imageObj = $("<img>"), imageSrc = "";
	var imageWidth = 0, imageHeight = 0, imageTitle = "";
	
//	var isAndroid = ua("android");
	var isAndroid = false;
	var isLtIE8 = false;
	if (ua("ie")) {
		var ver = /MSIE ([0-9]+)/.exec(navigator.userAgent)[1];
		if (ver <= 8) {
			isLtIE8 = true;
		}
	}
	
	
	var html = '<div id="ModalImageCover"></div>';
	html += '<div id="ModalImageLoader"><img src="/static/add_image/icon_loader.gif" width="32" height="32" alt="Loading" /></div>';
	html += '<div id="ModalImage">';
	html += '<div class="Inner">';
	html += '<div class="Image"></div>';
	html += '<div class="Title"><p></p></div>';
	html += '<p class="BtnClose"><a href="javascript:void(0);">Close</a></p>';
	
	if (isLtIE8) {
		html += '<div class="l"></div>';
		html += '<div class="r"></div>';
		html += '<div class="t"></div>';
		html += '<div class="b"></div>';
		html += '<div class="lt"></div>';
		html += '<div class="lb"></div>';
		html += '<div class="rt"></div>';
		html += '<div class="rb"></div>';
	}
	
	html += '</div>';
	html += '</div>';
	
	$("body").append(html);
	
	
	$("#ModalImageCover, #ModalImage").on("click", function() {
		
		$("#ModalImage").hide();
		$("#ModalImage .Image").empty();
		
		if (isAndroid) {
			$("body > div:not('#ModalImageCover, #ModalImage')").css({visibility: "visible"});
		}
		
		$("#ModalImageCover").stop().animate({opacity: 0}, 300, function() {
			
			$(this).hide();
			$("#ModalImageLoader").hide();
			
			imageObj.off("load");
			$(window).off("resize.lightbox");
			
		});
		
		return false;
		
	});
	
	
	$("#ModalImage .Image, #ModalImage .Title").on("click", function(event) {
		
		event.stopPropagation();
		
	});
	
	
	$(".ModalImageLink").on("click", function() {
		
		var bodyHeight = $("body").height();
		$("#ModalImageCover").css({height: bodyHeight, opacity: 0}).show().animate({opacity: 0.8}, 300);
		
		var screenHeight = $(window).height();
		var screenTop = $(window).scrollTop();
		$("#ModalImageLoader").css({top: screenTop + screenHeight / 2 - 16}).show();
		
		//imageTitle = $(this).attr("title") || "";
		imageTitle = $(this).find(".ModalTitle").text();
		
		var src = $(this).attr("href");
		if (src == imageSrc) {
			
			imageObj.appendTo("#ModalImage .Image");
			fixSize(true);
			
		} else {
			
			imageSrc = src;
			
			imageObj.on("load", function() {
				
				var tmpImage = new Image();
				tmpImage.src = imageSrc;
				imageWidth = tmpImage.width;
				imageHeight = tmpImage.height;
				
				$(this).appendTo("#ModalImage .Image");
				fixSize(true);
				
			}).attr("src", imageSrc).attr("alt", imageTitle);
			
		}
		
		return false;
		
	});
	
	
	var openImage = function(screenTop) {
		
		$("#ModalImageLoader").hide();
		
		$("#ModalImage .Title p").text(imageTitle);
		
		if (isAndroid) {
			$("body > div:not('#ModalImageCover, #ModalImage')").css({visibility: "hidden"});
		}
		
		$("#ModalImage").show();
		$(window).one("scroll", function() { $(window).scrollTop(screenTop); } );
		$("#ModalImage .BtnClose a").focus();
		$(window).on("resize.lightbox", function() { fixSize(false); });
		
	}
	
	
	var fixSize = function(open) {
		
		var screenWidth = $(window).width();
		var screenHeight = $(window).height();
		var screenTop = $(window).scrollTop();
		
		var boxPaddingLR = parseInt($("#ModalImage").css("paddingLeft"));
		var boxPaddingTB = 50;
		var bottomHeight = 50;
		
		if (imageWidth + boxPaddingLR * 2 > screenWidth) {
			var ratio = imageWidth / (screenWidth - boxPaddingLR * 2);
			var boxWidth = imageWidth / ratio;
			var boxHeight = imageHeight / ratio + bottomHeight;
		} else {
			var boxWidth = imageWidth;
			var boxHeight = imageHeight + bottomHeight;
		}
		
		if (boxHeight + boxPaddingTB * 2 > screenHeight) {
			var top = screenTop;
		} else {
			var top = (screenHeight - boxHeight) / 2 - boxPaddingTB + screenTop;
		}
		
		$("#ModalImage").css({
			width: boxWidth,
			height: boxHeight,
			top: top,
			left: (screenWidth - boxWidth) / 2 - boxPaddingLR
		});
		
		var coverHeight = Math.max($("body").height(), screenTop + boxHeight + boxPaddingTB * 2);
		$("#ModalImageCover").height(coverHeight);
		
		if (open) {
			openImage(screenTop);
		}
		
	};
	
};



/* Execution
=========================================================================================== */

$(document).ready(function() {
	
	if ($(".ModalImageLink")[0]) modalImage();
	
});

	
/* Modal YouTube
-----------------------------------------------------------------------*/
var modalYouTube = function() {

	var movieWidth = 853, movieHeight = 480, movieTitle = "";

//	var isAndroid = ua("android");
	var isAndroid = false;
	var isLtIE8 = false;
	if (ua("ie")) {
		var ver = /MSIE ([0-9]+)/.exec(navigator.userAgent)[1];
		if (ver <= 8) {
			isLtIE8 = true;
		}
	}


	var html = '<div id="ModalMovieCover"></div>';
	html += '<div id="ModalMovie">';
	html += '<div class="Inner">';
	html += '<div class="Movie"></div>';
	html += '<div class="Title"><p></p></div>';
	html += '<p class="BtnClose"><a href="javascript:void(0);">Close</a></p>';

	if (isLtIE8) {
		html += '<div class="l"></div>';
		html += '<div class="r"></div>';
		html += '<div class="t"></div>';
		html += '<div class="b"></div>';
		html += '<div class="lt"></div>';
		html += '<div class="lb"></div>';
		html += '<div class="rt"></div>';
		html += '<div class="rb"></div>';
	}

	html += '</div>';
	html += '</div>';

	$("body").append(html);


	$("#ModalMovieCover, #ModalMovie").on("click", function() {

		$("#ModalMovie iframe").attr("src", "/image/jp/r1/corp_id.gif"); // for IE8
		$("#ModalMovie").hide();
		$("#ModalMovie .Movie").empty();

		if (isAndroid) {
			$("body > div:not('#ModalMovieCover, #ModalMovie')").css({visibility: "visible"});
		}

		$("#ModalMovieCover").stop().animate({opacity: 0}, 300, function() {

			$(this).hide();
			$(window).off("resize.lightbox");

		});

		return false;

	});


	$("#ModalMovie .Movie, #ModalMovie .Title").on("click", function(event) {

		event.stopPropagation();

	});


	$(".ModalMovieLink").on("click", function() {

		var bodyHeight = $("body").height();
		$("#ModalMovieCover").css({height: bodyHeight, opacity: 0}).show().animate({opacity: 0.8}, 300);

		movieTitle = $(this).find(".ModalTitle").text();

		var url = $(this).attr("href");
		var id = /[0-9A-Za-z_-]{11}/.exec(url);
		var rel = url.indexOf("rel=0") !== -1 ? 0 : 1;
		var autoplay = url.indexOf("autoplay=1") !== -1 ? 1 : 0;

		$("#ModalMovie .Movie").html('<iframe width="' + movieWidth + '" height="' + movieHeight + '" src="http://www.youtube.com/embed/' + id + '?autoplay=' + autoplay + '&rel=' + rel + '&wmode=transparent" frameborder="0" allowfullscreen></iframe>');

		fixSize(true);

		return false;

	});


	var openMovie = function(screenTop) {

		$("#ModalMovie .Title p").text(movieTitle);

		if (isAndroid) {
			$("body > div:not('#ModalMovieCover, #ModalMovie')").css({visibility: "hidden"});
		}

		$("#ModalMovie").show();
		$(window).one("scroll", function() { $(window).scrollTop(screenTop); } );
		$("#ModalMovie .BtnClose a").focus();
		$(window).on("resize.lightbox", function() { fixSize(false); });

	};


	var fixSize = function(open) {

		var screenWidth = $(window).width();
		var screenHeight = $(window).height();
		var screenTop = $(window).scrollTop();

		var boxPaddingLR = parseInt($("#ModalMovie").css("paddingLeft"));
		var boxPaddingTB = 50;
		var bottomHeight = 50;

		if (movieWidth + boxPaddingLR * 2 > screenWidth) {
			var ratio = movieWidth / (screenWidth - boxPaddingLR * 2);
			var boxWidth = movieWidth / ratio;
			var boxHeight = movieHeight / ratio + bottomHeight;
		} else {
			var boxWidth = movieWidth;
			var boxHeight = movieHeight + bottomHeight;
		}

		if (boxHeight + boxPaddingTB * 2 > screenHeight) {
			var top = screenTop;
		} else {
			var top = (screenHeight - boxHeight) / 2 - boxPaddingTB + screenTop;
		}

		$("#ModalMovie").css({
			width: boxWidth,
			height: boxHeight,
			top: top,
			left: (screenWidth - boxWidth) / 2 - boxPaddingLR
		});

		$("#ModalMovie iframe").css({
			height: boxHeight - bottomHeight
		});

		var coverHeight = Math.max($("body").height(), screenTop + boxHeight + boxPaddingTB * 2);
		$("#ModalMovieCover").height(coverHeight);

		if (open) {
			openMovie(screenTop);
		}

	};

};


// on load
$(document).ready(function() {
	
	// YouTube
	modalYouTube();

});


})(jQuery);
