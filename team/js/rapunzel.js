//���ν�ũ��
var sss = 0;

function ScrollControl() {
    var xpos = event.wheelDelta;
    window.scrollBy(-xpos, 0);
}
document.onmousewheel = ScrollControl;


//��Ǭ�� ��������Ʈ


$(document).ready(function(){

    var i = 1;

    setInterval(function(){

        if(i >=8){
            i=1;
        }
        $('.rapunzel').attr('src', 'sprite/rapunzel' + i + '.png');
        i++

    }, 120);

});


//��������Ʈ


$(document).ready(function() {

    var i = 1;
    var timeId

    timeId = setInterval(function () {

        if( i > 15){
            i = 1;
        }
        $('.badpeople').attr('src', '../images/rapunzel/sprite/badpeople/badpeople' + i + '.png');
        i++;

      if( i>=15 ) clearInterval(timeId);

    }, 300);



});




$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 7){
            i = 1;
        }
        $('.mother').attr('src', '../images/rapunzel/sprite/mother/mother' + i + '.png');
        i++;

    }, 300);

});





$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 8){
            i = 1;
        }
        $('.hair-tower').attr('src', '../images/rapunzel/sprite/hair-tower/hair-tower' + i + '.png');
        i++;

    }, 300);

});






$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i > 10){
            i = 1;
        }
        $('.tower-2').attr('src', '../images/rapunzel/sprite/tower-2/tower-2-' + i + '.png');
        i++;

    }, 100);

});

