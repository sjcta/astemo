/* **************************************************

Name: wide.js

Description: Settings for Wide Web Design

Create: 2019.02.19

Copyright 2019 Hitachi, Ltd.

***************************************************** */

/* Append to DOM
=========================================================================================== */

function _checkWIDE(width) {
	
	var checkWIDE = {
		1305 :$("#U1305").css("display") == "block"
	}
	return checkWIDE[width];
	
}


(function($){

	$("head meta[name=viewport]").attr("content", "width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0");

	var under1305 = function() {
	
		if (_checkWIDE(1305)) {
			$("html[class!='Under1305']").addClass("Under1305");
		} else {
			$("html[class*='Under1305']").removeClass("Under1305");
		}
	}

	$(document).ready(function() {

	$("html").addClass("OptionWide");
	if($("#GlobalNaviTopButtonSP").length) $("html").addClass("OptionWideRWD");

		$("body").append('<div id="U1305"></div>');
		under1305();
		
		$(window).on("load resize", under1305);

	});

})(jQuery);