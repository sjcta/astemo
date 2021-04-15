function flatbanner() {
var fm='';

fm +='<ul>';
fm +='<li class="FirstItem">';
fm +='<a href="https://social-innovation.hitachi/zh-cn/?WT.ac=redtag">';
fm +='<img src="/image/ml_portal/top/banner1.jpg" alt="社会创新" />';
fm +='<strong>';
fm +='<span>社会创新</span>';
fm +='</strong>';
fm +='</a>';
fm +='</li>';
fm +='<li>';
fm +='<a href="/micro/recruit/index.asp"><img src="/image/ml_portal/top/banner2.jpg" alt="人才招聘" />';
fm +='<strong>';
fm +='<span>人才招聘</span>';
fm +='</strong>';
fm +='</a>';
fm +='</li>';
fm +='<li>';
fm +='<a href="/micro/hcrd/index.html"><img src="/image/ml_portal/top/banner3.jpg" alt="日立研发" />';
fm +='<strong>';
fm +='<span>日立研发</span>';
fm +='</strong>';
fm +='</a>';
fm +='</li>';
fm +='<li>';
fm +='<a href="/contact_support/index.html"><img src="/image/ml_portal/top/banner4.jpg" alt="联系我们" />';
fm +='<strong>';
fm +='<span>联系我们</span>';
fm +='</strong>';
fm +='</a>';
fm +='</li>';
fm +='</ul>';




var el = document.createElement('div');
el.setAttribute('class','FatBanner');
el.innerHTML = fm;
document.body.appendChild(el);
}