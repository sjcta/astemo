/* **************************************************

Name: hd_search.js

Description: Search Box for Header

Create: 2014.05.31
Update: 2014.06.24

Copyright 2014 Hitachi, Ltd.

***************************************************** */



var _SText = '<div id="SearchArea">';
_SText += '<div id="SearchSet">';
_SText += '<dl>';
_SText += '<dt>在日立集?全部网站中搜索</dt>';
_SText += '<dd>';
_SText += '<form action="https://search.hitachi.co.jp/sitesearch/RGN-CHINA" method="get">';
_SText += '<fieldset>';
_SText += '<legend>搜索表?</legend>';
_SText += '<input type="hidden" name="SITE" value="RGN-CHINA" />';
_SText += '<input type="hidden" name="SC" value="RGN-CHINA" />';
_SText += '<input type="hidden" name="LANG" value="CN" />';
_SText += '<input type="hidden" name="PL" value="CN" />';
_SText += '<input type="text" name="Q" size="20" maxlength="40" accesskey="s" title="在日立集?全部网站中搜索" class="SearchTextBox" /><input type="submit" value="搜索" class="BtnSearch" />';
_SText += '</fieldset>';
_SText += '</form>';
_SText += '</dd>';
_SText += '</dl>';
_SText += '<p class="BtnClose"><a href="javascript:void(0);">??</a></p>';
_SText += '</div>';
_SText += '</div>';