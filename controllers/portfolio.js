

let portfolio = ( req, res ) => {
    res.render( 'portfolio.ejs' );
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