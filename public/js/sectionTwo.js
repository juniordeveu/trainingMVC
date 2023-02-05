let show = function() {
    let getElementSection = document.querySelectorAll( '.largeTwo' );
    let wH = window.innerHeight;
    let getPositionTop = getElementSection[0].getBoundingClientRect().top;
    let point = 100;
    if (getPositionTop < wH - point ) {
        getElementSection[0].classList.add( 'showSection' );
    } else {
        getElementSection[0].classList.remove( 'showSection' );
    }

}
window.addEventListener( "scroll", show );