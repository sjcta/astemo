/* **************************************************

Name: identity.js

Description: JavaScript for Hitachi Group Identity Page
- //www.hitachi.com.cn/about/identity/index.html

Create: 2014.10.XX
Update: XXXX.XX.XX

Copyright 2014 Hitachi, Ltd.

***************************************************** */




(function($){




/* [-] Initialize
=========================================================================================== */


var winH = $(window).height();

var sections = {
	contents: {
		id: "#Contents",
		top: 0
	},
	about: {
		id: "#IdentityAbout",
		top: 0,
		height: 0
	},
	mission: {
		id: "#IdentityMission",
		top: 0,
		height: 0
	},
	values: {
		id: "#IdentityValues",
		top: 0,
		height: 0
	},
	vision: {
		id: "#IdentityVision",
		top: 0,
		height: 0
	},
	movie: {
		id: "#IdentityMovie",
		top: 0,
		height: 0
	}
}

var resizeTimer = false;
var ugNaviTimer = false;
var resizeLock = 0; // for IE8

var isIE = false;
if (navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/Trident/)) { // can detect IE11
	isIE = true;
}


var getSectionPos = function() {
	
	$.each(sections, function(key, val) {
		sections[key]["top"] = Math.floor($(val["id"]).offset().top);
	});
	
	getSectionHeight();
	
}


var getSectionHeight = function() {
	
	var lastOffsetTop = $(document).height() - winH;
	
	sections["about"]["height"] = sections["mission"]["top"] - sections["about"]["top"];
	sections["mission"]["height"] = sections["values"]["top"] - sections["mission"]["top"];
	sections["values"]["height"] = sections["vision"]["top"] - sections["values"]["top"];
	sections["vision"]["height"] = sections["movie"]["top"] - sections["vision"]["top"];
	sections["movie"]["height"] = lastOffsetTop - sections["movie"]["top"];
	
}




/* [-] Slider
=========================================================================================== */


var slideItems = {
	
	about: {
		wrapper: "#IdentityAboutSliderDiv",
		slider: "#IdentityAboutSlider",
		pages: ["#IdentityAbout1", "#IdentityAbout2"],
		pos: 0
	},
	
	values: {
		wrapper: "#IdentityValuesSliderDiv",
		slider: "#IdentityValuesSlider",
		pages: ["#IdentityValues1", "#IdentityValues2"],
		pos: 0
	}
	
};

var sliding = false;


var slide = function(id) {
	
	if (sliding) {
		return false;
	}
	sliding = true;
	
	var section = "", item = {}, newPos = 0;
	$.each(slideItems, function(key, val) {
		var n = $.inArray(id, val["pages"]);
		if (n >= 0) {
			section = key;
			item = val;
			newPos = n;
			return false;
		}
	});
	if (!section) {
		sliding = false;
		return false;
	}
	
	printSettingBeforeSlide(section);
	
	var currentHeight = $(item["pages"][item["pos"]]).height();
	var newHeight = $(item["pages"][newPos]).height();
	
	slideItems[section]["pos"] = newPos;
	
	if (currentHeight < newHeight) {
		$(item["wrapper"]).animate({ height: newHeight }, 400, "swing");
	}
	
	$(item["slider"] + " .IdentityButtonNext").fadeOut(200);
	$(item["slider"] + " .IdentityButtonBack").fadeOut(200);
	
	if (section == "about") {
		var t = $("#IdentityAbout" + (newPos + 1) + " .IdentityTriangleWithText").position().top;
		$("#IdentityAboutTriangle").animate({ top: t }, 1000, "easeInOutQuart");
	} else if (section == "values") {
		var t = $("#IdentityValues" + (newPos + 1) + " .IdentityTriangle").position().top + 500;
		$("#IdentityValuesTriangle").animate({ top: t }, 1000, "easeInOutQuart");
	}
	
	$(item["slider"]).animate({ left: -965 * newPos }, 1000, "easeInOutQuart", function() {
		if (currentHeight > newHeight) {
			$(item["wrapper"]).animate({ height: newHeight }, 400, "swing", function() {
				trianglePosition = "";
				printSettingAfterSlide(section);
				getSectionPos();
			});
		} else {
			trianglePosition = "";
			printSettingAfterSlide(section);
			getSectionPos();
		}
		$(item["slider"] + " .IdentityButtonNext").fadeIn(200);
		$(item["slider"] + " .IdentityButtonBack").fadeIn(200);
		sliding = false;
	});
	
}


var printSettingBeforeSlide = function(section) { // for IE
	
	if (!isIE) return;
	
	for (var i = 0, len = slideItems[section]["pages"].length; i < len; i++) {
		if (i != slideItems[section]["pos"]) {
			$(slideItems[section]["pages"][i]).show();
		}
	}
	
	$(slideItems[section]["slider"]).css({ left: -965 * slideItems[section]["pos"], width: 1930 });
	
}


var printSettingAfterSlide = function(section) { // for IE
	
	if (!isIE) return;
	
	for (var i = 0, len = slideItems[section]["pages"].length; i < len; i++) {
		if (i != slideItems[section]["pos"]) {
			$(slideItems[section]["pages"][i]).hide();
		}
	}
	
	$(slideItems[section]["slider"]).css({ left: 0, width: 965 });
	
}




/* [-] Contents Navigation
=========================================================================================== */


var navFixed = false;
var navPosition = "";


var fixNavigation = function() {
	
	var scrollTop = $(window).scrollTop();
	
	if (scrollTop >= sections["about"]["top"]) {
		
		if (!navFixed) {
			$("body").addClass("NaviFixed");
			navFixed = true;
		}
		
		var ratio = 0;
		var left = 0;
		
		if (scrollTop >= sections["movie"]["top"]) {
			ratio = (scrollTop - sections["movie"]["top"]) / sections["movie"]["height"];
			left = 172 * ratio - 172;
			if (navPosition != "movie") {
				$("#IdentityNavi01, #IdentityNavi02, #IdentityNavi03, #IdentityNavi04, #IdentityNavi05").addClass("Current");
				navPosition = "movie";
			}
		} else if (scrollTop >= sections["vision"]["top"]) {
			ratio = (scrollTop - sections["vision"]["top"]) / sections["vision"]["height"];
			left = 193 * ratio - 365;
			if (navPosition != "vision") {
				$("#IdentityNavi01, #IdentityNavi02, #IdentityNavi03, #IdentityNavi04").addClass("Current");
				$("#IdentityNavi05").removeClass("Current");
				navPosition = "vision";
			}
		} else if (scrollTop >= sections["values"]["top"]) {
			ratio = (scrollTop - sections["values"]["top"]) / sections["values"]["height"];
			left = 193 * ratio - 558;
			if (navPosition != "values") {
				$("#IdentityNavi01, #IdentityNavi02, #IdentityNavi03").addClass("Current");
				$("#IdentityNavi04, #IdentityNavi05").removeClass("Current");
				navPosition = "values";
			}
		} else if (scrollTop >= sections["mission"]["top"]) {
			ratio = (scrollTop - sections["mission"]["top"]) / sections["mission"]["height"];
			left = 193 * ratio - 751;
			if (navPosition != "mission") {
				$("#IdentityNavi01, #IdentityNavi02").addClass("Current");
				$("#IdentityNavi03, #IdentityNavi04, #IdentityNavi05").removeClass("Current");
				navPosition = "mission";
			}
		} else {
			ratio = (scrollTop - sections["about"]["top"]) / sections["about"]["height"];
			left = 193 * ratio - 944;
			if (navPosition != "about") {
				$("#IdentityNavi01").addClass("Current");
				$("#IdentityNavi02, #IdentityNavi03, #IdentityNavi04, #IdentityNavi05").removeClass("Current");
				navPosition = "about";
			}
		}
		
		$("#IdentityNavi ul").css({ backgroundPosition: left + "px 0"} );
		
		
	} else if (navFixed) {
		
		$("body").removeClass("NaviFixed");
		navFixed = false;
		navPosition = "top";
		
		$("#IdentityNavi01, #IdentityNavi02, #IdentityNavi03, #IdentityNavi04, #IdentityNavi05").removeClass("Current");
		$("#IdentityNavi ul").css({ backgroundPosition: "-944px 0"} );
		
	}
	
}


var clickNavigation = function() {
	
	$("a[href='#IdentityMission'], a[href='#IdentityValues'], a[href='#IdentityVision'], a[href='#IdentityMovie']").off().on("click", function() {
		var id = $(this).attr("href");
		var top = $(id).offset().top;
		$("html, body").stop().animate({scrollTop: top}, 800, "easeInOutCubic", function() {
			location.href = id;
		});
		return false;
	});
	
}




/* [-] Triangle
=========================================================================================== */


var initTriangle = function() {
	
	var div = $("#IdentityAbout1 .IdentityTriangleWithText").clone();
	div.find("p").css({ display: "block" });
	var t = $("#IdentityAbout1 .IdentityTriangleWithText").position().top;
	div.attr({ id: "IdentityAboutTriangle" }).css({ top: t }).appendTo("#IdentityAboutSliderDiv");
	
	var div = $("#IdentityValues1 .IdentityTriangle").clone();
	div.find("p").css({ display: "block" });
	var t = $("#IdentityValues1 .IdentityTriangle").position().top + 500;
	div.attr({ id: "IdentityValuesTriangle" }).css({ top: t }).appendTo("#IdentityValuesSliderDiv");
	
}




/* [-] Movie
=========================================================================================== */


var playYouTube = function() {
	
	var cover = '<div id="ModalYouTube"></div>';
	cover += '<div id="ModalCover"><div></div></div>';
	$("body").append(cover);

	$(".LinkMovie").click(function() {
		
		var id = $(this).attr("href").substring(29);
		var title = $(this).find("img").attr("alt");
		$("#ModalYouTube").html('<div class="Inner"><iframe width="853" height="480" src="http://player.youku.com/embed/' + id + '" frameborder="0" allowfullscreen></iframe><div class="Title"><p>' + title + '</p></div><p class="BtnClose"><a href="#">关闭</a><p></div>');
		$("#ModalYouTube, #ModalCover div").show();
		$("#ModalYouTube .BtnClose a").focus();
		$("#ModalCover").css({display:"block", opacity:"0"}).stop().animate({opacity:"0.8"}, 300);
		
		$("#ModalCover, #ModalYouTube .BtnClose a").click(function() {
			$("#ModalYouTube iframe").attr("src", "/image/cn/r1/corp_id.gif"); // for IE8
			$("#ModalYouTube").html("").hide();
			$("#ModalCover div").hide();
			$("#ModalCover").stop().animate({opacity:"0"}, 300, function() {
				$(this).hide();
			});
			return false;
		});
		
		return false;
		
	});
	
	// for IE6
	$(window).on("load resize scroll", function() {
		if (!ua("ie6")) return false;
		$("#ModalCover").width(getBrowserWidth()).height($("body").height());
		$("#ModalCover div, #ModalYouTube").css({top:($("html").scrollTop() + getBrowserHeight()/2)+"px"});
	});
	
}




/* [-] Confetti
=========================================================================================== */


var moveConfetti = function() {
	
	var scrollTop = $(window).scrollTop();
	
	if (scrollTop < 500) {
		
		var x1 = scrollTop / 5 - 20, y1 = scrollTop / 10;
		var x2 = scrollTop / 3 - 120, y2 = scrollTop / 5;
		
		$("#IdentityTitleBg2").css({ left: x1, top: y1 });
		$("#IdentityTitleBg3").css({ left: x2, top: y2 });
		
	} else if (scrollTop > sections["vision"]["top"] - winH && scrollTop < sections["vision"]["top"] + 500) {
		
		var ratio = (scrollTop - (sections["vision"]["top"] - winH)) / (winH * 2);
		
		var x1 = 490 + 60 * ratio, y1 = 140 - 320 * ratio;
		var x2 = 550 - 60 * ratio, y2 = 230 - 500 * ratio;
		var x3 = 470 + 100 * ratio, y3 = 280 - 600 * ratio;
		var x4 = 570 - 100 * ratio, y4 = 380 - 800 * ratio;
		
		$("#IdentityVisual042").css({ left: x1, top: y1 });
		$("#IdentityVisual043").css({ left: x2, top: y2 });
		$("#IdentityVisual044").css({ left: x3, top: y3 });
		$("#IdentityVisual045").css({ left: x4, top: y4 });
		
	} else if (scrollTop > sections["movie"]["top"] - (winH - 250) && scrollTop < sections["movie"]["top"] + 500) {
		
		var ratio = (scrollTop - (sections["movie"]["top"] - winH)) / (winH * 2);
		
		var x1 = 140 + 80 * ratio, y1 = 300 + 50 * ratio;
		var x2 = 180 - 80 * ratio, y2 = 320 - 50 * ratio;
		
		$("#IdentityVisual052").css({ left: x1, top: y1 });
		$("#IdentityVisual053").css({ left: x2, top: y2 });
		
	}
	
}




/* [-] On Load
=========================================================================================== */


$(document).ready(function() {
	
	
	// Print Fix
	
	if (isIE) {
		
		$("html").addClass("IE");
		
	} else if (ua("chrome")) {
		
		var img = [];
		var files = [
			"./image/identity_triangle_01_print.png",
			"./image/identity_visual_02_print.jpg",
			"./image/identity_triangle_02_print.png",
			"./image/identity_visual_03-1_print.jpg",
			"./image/identity_visual_03-2_print.jpg",
			"./image/identity_triangle_03_print.png",
			"./image/identity_visual_04_print.jpg",
			"./image/identity_triangle_04_print.png",
			"./image/identity_visual_05_print.jpg"
		];
		for (var i = 0; i < files.length; i++) {
			img[i] = new Image();
			img[i].src = files[i];
		}
		
	}
	
	
	// Slider
	
	$.each(slideItems, function(key, val) {
		
		$(val["wrapper"]).height($(val["pages"][0]).height());
		
		for (var i = 0, len = val["pages"].length; i < len; i++) {
			$(val["slider"] + " a[href='" + val["pages"][i] + "']").on("click", function() {
				slide($(this).attr("href"));
				return false;
			});
		}
		
	});
	
	printSettingAfterSlide("about");
	printSettingAfterSlide("values");
	
	
	// Get positions of each section
	
	getSectionPos();
	
	
	// Get positions again when Ultra Global Navigation opens/closes
	
	$(".BtnOpen a, .BtnClose a").on("click", function() {
		clearTimeout(ugNaviTimer);
		ugNaviTimer = setTimeout(getSectionPos, 1000);
	});
	
	
	// Triangle, Navigation, Confetti
	
	$(window).on("scroll", function() {
		fixNavigation();
		moveConfetti();
	}).on("resize", function() {
		if (resizeTimer !== false) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(function() {
			if (!resizeLock++) { // for IE8
				winH = $(window).height();
				getSectionHeight();
				setTimeout(function() { resizeLock = 0; }, 2000); // for IE8
			}
		}, 1000);
	});
	
	fixNavigation();
	moveConfetti();
	
	
	// Triangle
	
	initTriangle();
	
	
	// Navigation
	
	clickNavigation();
	
	
	// Movie
	
	playYouTube();
	
	
});




})(jQuery);
