/* **************************************************

Name: sib_megamenu.js

Description: JavaScript for Megamenu

Create: 2018.06.28
Update: 

Copyright 2018 Hitachi, Ltd.

***************************************************** */




;(function($) {




// config


var html = '<dl id="MegaMenu">';
html += '<dt class="MMGlobalNaviStyle"><a href="/zh-cn/about/">关于社会创新事业</a></dt>';
html += '<dt class="MMGlobalNaviStyle Mega"><a href="/zh-cn/solutions/">解决方案</a></dt>';
html += '<dd class="MMSet">';
html += '<div class="MM2Container">';
html += '<ul class="MM2ColumnArea">';
html += '<li class="mm_security"><a href="/zh-cn/solutions/security/">安防</a></li>';
html += '<li class="mm_ai"><a href="/zh-cn/solutions/ai/">人工智能</a></li>';
html += '<li class="mm_analytics"><a href="/zh-cn/solutions/analytics/">大数据分析</a></li>';
html += '<li class="mm_robotics"><a href="/zh-cn/solutions/robotics/">机器人技术</a></li>';
html += '<li class="mm_water"><a href="/zh-cn/solutions/water/">水</a></li>';
html += '<li class="mm_energy"><a href="/zh-cn/solutions/energy/">能源</a></li>';
html += '<li class="mm_manufacturing"><a href="/zh-cn/solutions/manufacturing/">生产</a></li>';
html += '<li class="mm_life_economy"><a href="/zh-cn/solutions/life_economy/">生活与经济</a></li>';
html += '<li class="mm_rd"><a href="/zh-cn/solutions/rd/">研发</a></li>';
html += '<li class="mm_transportation"><a href="/zh-cn/solutions/transportation/">交通</a></li>';
html += '<li class="mm_urban"><a href="/zh-cn/solutions/urban_development/">城市发展</a></li>';
html += '</ul><!--/MM2ColumnArea-->';
html += '</div><!--/MM2Container-->';
html += '</dd><!--/MMSet-->';
html += '<dt class="MMGlobalNaviStyle"><a href="/zh-cn/case_studies/">项目事例</a></dt>';
// add 2020.8.31
html += '<dt class="MMGlobalNaviStyle"><a href="/zh-cn/feeler/">日立触角</a></dt>';
//html += '<dt class="MMGlobalNaviStyle"><a href="/zh-cn/events/?WT.ac=MM_event">Event</a></dt>';
html += '</dl>';


var _megaMenuEnabled = false;




// init


function initMegaMenu() {
	
	$("html").addClass("OptionRWD");
	
	$("#GlobalNaviTop").after(html).find("li").each(function(i) {
		if ($(this).hasClass("Current")) {
			var $this = $(".MMGlobalNaviStyle").eq(i);
			$this.addClass("Current");
			if ($(this).find("strong")[0]) {
				$this.find("a").html("<strong>" + $this.text() + "</strong>");
			} else if ($(this).find("em")[0]) {
				$this.find("a").html("<em>" + $this.text() + "</em>");
			}
		}
	}).parent().remove();
	
	var gn = "";
	$(".MMGlobalNaviStyle").each(function() {
		gn += '<li' + ($(this).hasClass("Current") ? ' class="Current"' : '') + '>' + $(this).html() + '</li>';
	});
	gn = '<ul id="GlobalNaviTopSP">' + gn + '</ul>';
	$("#GlobalNaviTopSP").remove(); // already added by responsive.js - from HTML
	$("#GlobalNaviSP").prepend(gn); // add again - from this file config
	
	if ($("#HorizontalLocalNavi")[0]) {
		var hln = '<ul id="HorizontalLocalNaviSP">';
		hln += $("#HorizontalLocalNavi").html();
		hln += '</ul>';
		$("#GlobalNaviTopSP li.Current").append(hln);
	}
	
	$("#MegaMenu .MMGlobalNaviStyle a strong").parent().addClass("Strong");
	
	$("#SiteIdentity").addClass("WithMMGlobalNaviStyle");
	
	var innerHTML = $("#MegaMenu").html();
	$("#MegaMenu").replaceWith('<div id="MegaMenu">' + innerHTML + '</div>');
	
	var id = 0;
	
	$("#MegaMenu .MMGlobalNaviStyle").each(function() {
		
		var set = $(this).next(".MMSet");
		
		if (set[0]) {
			
			$(this).addClass("MMSetMenu");
			
			set.attr({id: "MMSetMenu" + id});
			id++;
			
			$(this).add(set).wrapAll('<dl class="MMSetArea" />');
			
		} else {
			
			var innerHTML = $(this).html();
			var current = $(this).hasClass("Current") ? " Current" : "";
			$(this).replaceWith('<dl><dt class="MMGlobalNaviStyle' + current + '">' + innerHTML + '</dt></dl>');
			
		}
		
	});
	
	if (id > 0) {
		
		$(window).on("resize", initMegaMenu_PC);
		
		initMegaMenu_PC();
		initMegaMenu_SP();
		
	}
	
}




// PC


function initMegaMenu_PC() {
	
	
	if ($("#MegaMenu .MMGlobalNaviStyle").eq(0).css("float") == "none") {
		
		if (_megaMenuEnabled) {
			
			$("#MegaMenu .MMSetArea").off();
			$("#MegaMenu .MMGlobalNaviStyle a").off();
			$("#MegaMenu .MMSet").find("a:last").off();
			
			_megaMenuEnabled = false;
			
		}
		
		return;
		
	} else if (_megaMenuEnabled) {
		
		return;
		
	}
	
	_megaMenuEnabled = true;
	
	var megaMenuActiveId = "MMSetMenu0";
	var hideTimer;
	
	var hasHolLocNav = !!($("#HorizontalLocalNavi")[0]);
	
	
	// mouse
	
	$("#MegaMenu .MMSetArea").on("mouseenter", function() {
		
		clearTimeout(hideTimer);
		
		var top = hasHolLocNav ? $("#GlobalNavi").height() - $("#HorizontalLocalNavi").height() : $("#GlobalNavi").height();
		var thisId = $(this).children(".MMSet").attr("id");
		var thisH = $("#" + thisId).css({height: "auto"}).height();
		var currentH = (thisId == megaMenuActiveId) ? 0 : $("#" + megaMenuActiveId).height();
		
		$("#" + megaMenuActiveId).hide().css({ height: 0 });
		$("#" + thisId).css({ top: top, height: currentH }).show().stop().animate({ height: thisH }, 300, "easeOutQuart");
		
		$(this).find(".MMGlobalNaviStyle a").addClass("Active");
		
		megaMenuActiveId = thisId;
		
	}).on("mouseleave", function() {
		
		var $this = $(this);
		$this.find(".MMGlobalNaviStyle a").removeClass("Active");
		
		hideTimer = setTimeout(function() {
			hideMenu($this);
		}, 100);
		
	});
	
	function hideMenu($menu) {
		
		$menu.children(".MMSet").stop().animate({height: 0}, 200, "easeOutQuad", function() {
			$(this).hide();
		});
		
	}
	
	
	// tab key
	
	$("#MegaMenu .MMGlobalNaviStyle a").on("focus", function() {
		
		if ($(this).hasClass("Active")) {
			return;
		}
		
		$("#" + megaMenuActiveId).stop();
		
		var top = hasHolLocNav ? $("#GlobalNavi").height() - $("#HorizontalLocalNavi").height() : $("#GlobalNavi").height();
		var thisId = $(this).parents(".MMSetArea").children(".MMSet").attr("id");
		var thisH = $("#" + thisId).css({height: "auto"}).height();
		var currentH = (thisId == megaMenuActiveId) ? 0 : $("#" + megaMenuActiveId).height();
		
		$("#" + megaMenuActiveId).hide().css({height: 0});
		$("#" + thisId).css({top: top, height: currentH}).show().animate({height: thisH}, 300, "easeOutQuart");
		$(this).addClass("Active");
		
		megaMenuActiveId = thisId;
		
	}).on("keydown", function(e) {
		
		if (e.shiftKey && e.keyCode == 9) {
			$(this).removeClass("Active");
			$("#" + megaMenuActiveId).animate({height: 0}, 200, "easeOutQuad", function() {
				$(this).hide();
			});
		}
		
	});
	
	$("#MegaMenu .MMSet").each(function() {
		
		$(this).find("a:last").on("keydown", function(e) {
			
			if (!e.shiftKey && e.keyCode == 9) {
				$(this).parents(".MMSetArea").find(".MMGlobalNaviStyle a").removeClass("Active");
				$("#" + megaMenuActiveId).animate({height: 0}, 200, "easeOutQuad", function() {
					$(this).hide();
				});
			}
			
		});
		
	});
	
	
}




// SP


function initMegaMenu_SP() {
	
	var $pc = $("#MegaMenu dt");
	var $sp = $("#GlobalNaviTopSP > li");
	var action = false;
	
	$pc.each(function(i) {
		
		var $dd = $(this).next("dd");
		
		if ($dd[0]) {
			var html = '<button class="MegaMenuSpBtn"><span>Open</span></button><div class="MegaMenuSP"><ul>' + $dd.find("ul").html() + '</ul></div>';
			$sp.eq(i).addClass("hasMegaMenuSP").append(html);
		}
		
	});
	
	$(".MegaMenuSpBtn").on("click", function() {
		
		if (action) return;
		action = true;
		
		var $menu = $(this).next();
		var menuH = $menu.children().height();
		var navH = $("#UltraGlobalNavi").height();
		
		if ($(this).hasClass("open")) {
			
			$(this).removeClass("open");
			$menu.css({ height: 0 });
			
			navH -= menuH;
			
		} else {
			
			$(this).addClass("open");
			$menu.css({ height: menuH });
			
			navH += menuH;
			
		}
		
		$("#UltraGlobalNavi").animate({ height: navH }, 300);
		$("#HeaderArea").animate({ marginBottom: navH }, 300, function() {
			action = false;
		});
		
	});
	
	$(".BtnOpen a").on("click", function() {
		
		if ($("#HeaderArea").attr("style")) {
			$(".MegaMenuSpBtn.open").removeClass("open");
			$(".MegaMenuSP").css({ height: 0 });
		}
		
		return false;
		
	});
	
}




// on DOM ready

$(function() {
	
	initMegaMenu();
	
});




})(jQuery);
