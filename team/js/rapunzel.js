//���ν�ũ��
var sss = 0;

function ScrollControl() {
    var xpos = event.wheelDelta;
    window.scrollBy(-xpos, 0);
}
document.onmousewheel = ScrollControl;


//��������Ʈ


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