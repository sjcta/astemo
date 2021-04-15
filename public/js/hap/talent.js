// JS for Talent
  var _sloganOffset;

  // Part1 Size(Height) Adjustment.
  function sizeFix() {
    var eleHeight = $("#Talent").offset().top;
    var winHeight = $(window).height();
    var _Height = winHeight-eleHeight < winHeight/2 ? winHeight : winHeight-eleHeight;
    $("#Talent .Part1").css({"height": _Height});
  }

  // Scroll Arrow animation control
  function scrollArrow(){
    var _this = $('.ScrollArrow');

    _this.stop().animate({'margin-bottom':'20px'}, 400, 'easeInOutQuad', function(){
          _this.stop().animate({'margin-bottom':0}, 800, 'easeOutElastic');
    });

    if(!_this.hasClass('stop'))
    {
        setTimeout("scrollArrow()",2000);
    }
  };
  // Pictures Animation Control
  function picEvent(){
    $(".Parts").each(function(){
      //console.log($(window).scrollTop(),$(this).height(),$(this).offset().top);
      var _img = $(this).children(".img");
      // part2~part5 animation
      if($(window).scrollTop()+$(this).height()-100 > $(this).offset().top) {
        _img.stop().animate({'opacity':1, 'margin-top':50}, 500)
      }else{
        _img.stop().animate({'opacity':0, 'margin-top':200}, 250)
      }
    })

    // part1 animation
    if($(window).scrollTop() < $(window).height()/2){
        var opacityVal = 100-Math.round($(window).scrollTop()*2/$(window).height()*100);

        //console.log(opacityVal);
        $(".Part1 .bg").css("opacity",opacityVal/100);
    }

    // slogan animation

    //console.log(_sloganOffset,$(window).scrollTop(),$(".slogan").offset().top);
    if($(window).scrollTop() < _sloganOffset){
      $(".slogan").css("margin-top", $(window).scrollTop());
    }else{
      $(".slogan").css("margin-top", _sloganOffset);
    }
  }

  // Employee info construction
  function avatarActive(){
      $(".Part6 ul li").each(function(){
        $(this).on("click",function(){

            $(".popup .info span.pic").html($(this).find("img").clone());
            $(".popup .info span.name").html($(this).find("span").clone());
            $(".popup .info p").html($(this).children("article").clone());
            showAvatarInfo(1);
        });
      })

      $(".popup button, .talentMask").on("mousedown",function(){
          showAvatarInfo(0);
      })
  }

  // Employee info window popup & mask control
  function showAvatarInfo(ev){
      if(ev){
        $(".popup .info").stop(1).css({"display":"block","opacity":0}).animate({opacity:1},500);
        $(".talentMask").stop(1).css({"display":"block","opacity":0}).animate({opacity:.7},500);
      }else{
        $(".popup .info, .talentMask").stop(1).css({"display":"none"}).animate({opacity:0},50);
      }
  }

  // window scroll action
  $(window).scroll(function(){

    if($(window).scrollTop() > 30 ){
      $('.ScrollArrow').addClass('stop').fadeOut(200);
    }else{
      $('.ScrollArrow').removeClass('stop').fadeIn(200);
      setTimeout("scrollArrow()",2000);
    };
    picEvent();
  });

  // window load & resize control
  $(window).on("load resize",function(){

      _sloganOffset = $(".slogan").offset().top;
      console.log("slogan:" + _sloganOffset);
      sizeFix();
      scrollArrow();
      avatarActive();
  });
