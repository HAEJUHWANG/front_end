//가로스크롤
var sss = 0;

function ScrollControl() {
    var xpos = event.wheelDelta;
    window.scrollBy(-xpos, 0);
}
document.onmousewheel = ScrollControl;


//인어공주 스프라이트

$(function(){

  var pos = 0;
  var num = 0;

  $(document).on('scroll', function(){

    if( num >= 9 ){
      num = 0;
    }

    pos = num * 490;

    $('.mermaid-image').css({
      'background-position' : '0 ' + -pos + 'px'
    });

    num++;


//떨어지는 왕자모션
    console.log($(document).scrollLeft());

    if( $(document).scrollLeft() >= 2160 ){
      $('.man').addClass('motion');
    }


  });

});




//물고기들
$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 12){
            i = 1;
        }
        $('.crab11').attr('src', '../images/little_mermaid/sprite/crab/crab' + i + '.png');
        i++;

    }, 80);

});



$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 12){
            i = 1;
        }
        $('.orangefish').attr('src', '../images/little_mermaid/sprite/orangefish/orangefish' + i + '.png');
        i++;

    }, 80);

});




$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 7){
            i = 1;
        }
        $('.tropicalfish').attr('src', '../images/little_mermaid/sprite/tropicalfish/tropicalfish' + i + '.png');
        i++;

    }, 80);

});


$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.yellowfish').attr('src', '../images/little_mermaid/sprite/yellowfish/yellowfish' + i + '.png');
        i++;

    }, 80);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.fish4').attr('src', '../images/little_mermaid/sprite/yellowfish/yellowfish' + i + '.png');
        i++;

    }, 80);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.fish5').attr('src', '../images/little_mermaid/sprite/orangefish/orangefish' + i + '.png');
        i++;

    }, 80);

});


























$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.princess').attr('src', 'images/img_sprite/king/king' + i + '.png');
        i++;

    }, 520);

});

//
//$(function(){
//    $(document).on('scroll',function() {
//        console.log($(document).scrollLeft());
//
//        if ($(document).scrollLeft() >= 2160) {
//            $('.man').addClass('motion');
//        }
//});



























$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if (i > 4) {
            i = 1;
        }
        $('.bottle').attr('src', 'images/img_sprite/bottle/bottle' + i + '.png');
        i++;

    }, 520);
    });


