//���ν�ũ��
var sss = 0;

function ScrollControl() {
    var xpos = event.wheelDelta;
    window.scrollBy(-xpos, 0);
}
document.onmousewheel = ScrollControl;


//�ŵ����� ��������Ʈ

$(function(){

  var pos = 0;
  var num = 0;

  $(document).on('scroll', function(){

    if( num >= 10 ){
      num = 0;
    }

    pos = num * 481;

    $('.cin-image').css({
      'background-position' : '0 ' + -pos + 'px'
    });

    num++;


//ȣ�ڸ������
    console.log($(document).scrollLeft());

    if( $(document).scrollLeft() >= 2160 ){
      $('.carriage').addClass('motion');
    }


  });

});



//����� ��������Ʈ
$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i >= 8){
            i = 1;
        }
        $('.sister').attr('src', '../images/cinderella/sprite/sister/sister' + i + '.png');
        i++;

    }, 120);

});


$(document).ready(function() {

    var i = 1;

    setInterval(function () {

        if( i >= 6){
            i = 1;
        }
        $('.sisters').attr('src', '../images/cinderella/sprite/sisters/sisters' + i + '.png');
        i++;

    }, 100);

});