/* **************************************************

Name: header.js

Description: JavaScript for Header

Create: 2014.02.13
Update: 2018.12.10

Copyright 2018 Hitachi, Ltd.

***************************************************** */

(function($){

var hd = {
	"common"	: "https://module.hitachi.com/js/en/r1/hd_common.js",
	"search"	: "https://module.hitachi.com/js/cn/r1/hd_search.js",
	"network"	: "https://module.hitachi.com/js/en/r1/hd_network.js",
	"products"	: "https://www.hitachi.com.cn/js/cn/r1/hd_solutions_2020.js",
	"about"		: "https://www.hitachi.com.cn/js/cn/r1/hd_about_2020.js"
}

var hd1 = '<script type="text/javascript" src="';
var hd2 = '" charset="utf-8"></script>';
$("head").append(hd1 + hd.search + hd2 + hd1 + hd.network + hd2 + hd1 + hd.products + hd2 + hd1 + hd.about + hd2 + hd1 + hd.common + hd2);

})(jQuery);
