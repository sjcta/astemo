/* **************************************************

Name: header_tw_zhtw.js

Description: JavaScript for Header

Create: 2015.03.02
Update: XXXX.XX.XX

Copyright 2015 Hitachi, Ltd.

***************************************************** */

(function($){

var hd = {
	"common"	: "http://www.hitachi.com/js/en/r1/hd_common.js",
	"search"	: "http://www.hitachi.com.tw/js/cn/r1/hd_search_tw_zhtw.js",
	"network"	: "http://www.hitachi.com/js/en/r1/hd_network.js",
	"products"	: "http://www.hitachi.com.tw/js/cn/r1/hd_products_tw_zhtw.js",
	"about"		: "http://www.hitachi.com.tw/js/cn/r1/hd_about_tw_zhtw.js"
}

var hd1 = '<script type="text/javascript" src="';
var hd2 = '" charset="utf-8"></script>';
$("head").append(hd1 + hd.search + hd2 + hd1 + hd.network + hd2 + hd1 + hd.products + hd2 + hd1 + hd.about + hd2 + hd1 + hd.common + hd2);

})(jQuery);
