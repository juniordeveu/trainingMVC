
let getElementCollasible = document.getElementsByClassName( 'box-collasible')

for( let i = 0; i < getElementCollasible.length; i++ ) {
    getElementCollasible[i].addEventListener( "click", function() {
        let arrow = document.querySelectorAll( ".arrow" );
        let boxShadow = document.querySelectorAll( ".box-collasible" )
        boxShadow[i].classList.toggle( "addShadow" )
        arrow[i].classList.toggle( "animArrow" );
        getElementCollasible[i].classList.toggle( "changeColor" )
        var content = document.getElementsByClassName( 'collasible-content' )[i]
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
    })

}




