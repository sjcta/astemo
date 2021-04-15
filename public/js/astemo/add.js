/* add.js
=========================================================================================== */

var random = "?r=" + Math.random();
var _togBrandingURL = "/parts/toppage_branding.html";
var _fatMenuURL = "/parts/sitemap.html";
var _blockList = "/parts/blocklist.html";
var _newsList = "/news/press/index.html #newsPage .Section";
var _rightBar = "/parts/rightbar.html";

var _hash = window.location.hash;
if(_hash!="") {
  _hash = _hash.replace("#","");
}

$(document).ready(function() {
  var copyright = "&copy; Hitachi Astemo Automotive Systems (China) Ltd. 2021. All rights reserved."
  // Copyright
  if ($("#Footer").length > 0 && $("#TopPage").length > 0) {
    $("#Footer p").html(copyright + '<br /><a href="http://beian.miit.gov.cn">沪ICP备2021010162号</a>');
    
  }else{
    $("#Footer p").html(copyright);
  }


  fatLoader = function(){
    if($(".FatMenu").length > 0){
        $(".FatMenu").load(_fatMenuURL + random);
    }
  };
  blockLoader = function(){
    if($(".blockLoader").length > 0){
        $(".blockLoader").load(_blockList + random);
    }
  };
  rightBarLoader = function(){
    if($("#rightBarLoader").length > 0){
        $("#rightBarLoader").load(_rightBar + random);
    }
  };
  newsLoader = function(){
    if($(".newsLoader").length > 0){

      console.log("get newsloader");

      $('.newsLoader').load("/news/index.html #newsArea dl:lt(5)");
    }
  };

  blockLoader();
  fatLoader();
  newsLoader();
  rightBarLoader();

});

