/**
 * Created by DB405T3A-F08C on 2016-12-28.
 */

$(function(){
  $('.chin-img').mouseenter(function(){
    $('.chin-img').css({width : 432 , height : 559}).attr('src' , '../images/sub/p-menu-chin-hover.PNG');
    $('.chin-talk').css({ display:'block' })
  });

  $('.chin-img').mouseleave(function(){
    $('.chin-img').css({width : 432 , height : 559}).attr('src' , '../images/sub/p-menu-chin.PNG');
    $('.chin-talk').css({ display:'none' })
  });

  $('.bak-img').mouseenter(function(){
    $('.bak-img').css({width : 388 , height : 568}).attr('src' , '../images/sub/p-menu-bak-hover.PNG');
    $('.bak-talk').css({ display:'block' })
  });

  $('.bak-img').mouseleave(function(){
    $('.bak-img').css({width : 388 , height : 563}).attr('src' , '../images/sub/p-menu-bak.PNG');
    $('.bak-talk').css({ display:'none' })
  });

  $('.in-img').mouseenter(function(){
    $('.in-img').css({width : 439 , height : 562}).attr('src' , '../images/sub/p-menu-in-hover.PNG');
    $('.in-talk').css({ display:'block' })
  });

  $('.in-img').mouseleave(function(){
    $('.in-img').css({width : 439 , height : 562}).attr('src' , '../images/sub/p-menu-in.PNG');
    $('.in-talk').css({ display:'none' })
  });

  $('.rapunzel-img').mouseenter(function(){
    $('.rapunzel-img').css({width : 313 , height : 562}).attr('src' , '../images/sub/p-menu-rapunzel-hover.PNG');
    $('.rapunzel-talk').css({ display:'block' })
  });

  $('.rapunzel-img').mouseleave(function(){
    $('.rapunzel-img').css({width : 313 , height : 562}).attr('src' , '../images/sub/p-menu-rapunzel.PNG');
    $('.rapunzel-talk').css({ display:'none' })
  });

});
