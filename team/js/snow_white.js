//가로스크롤

var sss = 0;

function ScrollControl() {
    var xpos = event.wheelDelta;
    window.scrollBy(-xpos, 0);
}
document.onmousewheel = ScrollControl;




//백설공주 스프라이트

$(function(){

  var pos = 0;
  var num = 0;

  $(document).on('scroll', function(){

    if( num >= 6 ){
      num = 0;
    }

    pos = num * 488;

    $('.snow-image').css({
      'background-position' : '0 ' + -pos + 'px'
    });

    num++;

  });

});




//스프라이트

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.fireplace').attr('src', '../images/snow_white/sprite/fireplace/fireplace' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.queen2').attr('src', '../images/snow_white/sprite/queen2/queen2-' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.dwarf1').attr('src', '../images/snow_white/sprite/dwarf1/dwarf1-' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 8){
            i = 1;
        }
        $('.dwarf2').attr('src', '../images/snow_white/sprite/dwarf2/dwarf2-' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 2){
            i = 1;
        }
        $('.dwarf3').attr('src', '../images/snow_white/sprite/dwarf3/dwarf3-' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 12){
            i = 1;
        }
        $('.dwarf4').attr('src', '../images/snow_white/sprite/dwarf4/dwarf4-' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.dwarf5').attr('src', '../images/snow_white/sprite/dwarf5/dwarf5-' + i + '.png');
        i++;

    }, 700);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 8){
            i = 1;
        }
        $('.dwarf6').attr('src', '../images/snow_white/sprite/dwarf6/dwarf6-' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 8){
            i = 1;
        }
        $('.dwarf7').attr('src', '../images/snow_white/sprite/dwarf7/dwarf7-' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.queen').attr('src', '../images/snow_white/sprite/queen/queen' + i + '.png');
        i++;

    }, 300);

});

$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 10){
            i = 1;
        }
        $('.bird1').attr('src', '../images/snow_white/sprite/bird1/bird1-' + i + '.png');
        i++;

    }, 300);

});


$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 8){
            i = 1;
        }
        $('.bird2').attr('src', '../images/snow_white/sprite/bird2/bird2-' + i + '.png');
        i++;

    }, 300);

});


$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 6){
            i = 1;
        }
        $('.prince').attr('src', '../images/snow_white/sprite/prince/prince' + i + '.png');
        i++;

    }, 300);

});
$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 8){
            i = 1;
        }
        $('.apple').attr('src', '../images/snow_white/sprite/apple/apple' + i + '.png');
        i++;

    }, 300);

});

