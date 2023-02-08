const fs = require ( 'fs' );
const { dirname } = require( 'path' );
const path = require( 'path' );
const getPathCount = path.join( path.dirname( require.main.filename ), 'data', 'count.txt' );

fs.readFile( getPathCount, ( err, actualNumber ) => {
    let parseVisit = parseInt( actualNumber )
    sumVisits.push( parseVisit )    
})

let couting = 0
let sumVisits = [];

let portfolio = ( req, res ) => {
    if ( req.url == '/' ) {
        fs.readFile( getPathCount, ( err, contentCount ) => {
            let sum = parseInt( contentCount ) + parseInt( couting )
            fs.writeFile( getPathCount, sum.toString() , ( err ) => {
            sumVisits.push( sum )
            })
         
        })
    if (couting == 1){
        couting--
    }
    couting++;
        

    }
    let vistsOnPage = sumVisits.pop() + 1;
    res.render( 'portfolio.ejs' ,{
        visits: vistsOnPage
    });
    return res.end();
}


let contact =  ( req, res ) => {
    res.render( 'contact.ejs' );
    return res.end();
}



module.exports = {
    portfolio,
    contact
}