var displayed = false;
var left = document.getElementById( 'left' );
var right = document.getElementById( 'right' );

function menu() {

    if (displayed==false) {
        left.classList.remove('hidden');
        left.classList.remove('fadeOutDownBig');
        left.classList.add('fadeInDownBig');
        right.classList.remove('hidden');
        right.classList.remove('fadeOutUpBig');
        right.classList.add('fadeInUpBig');
        displayed = true;
    } else {
        left.classList.remove('fadeInDownBig');
        left.classList.add('fadeOutDownBig');
        right.classList.remove('fadeInUpBig');
        right.classList.add('fadeOutUpBig');
        displayed = false;
    }
}