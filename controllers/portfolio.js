let portfolio = ( req, res ) => {
    res.send( "portfolio" );
    return res.end();
}


let contact =  ( req, res ) => {
    res.send( "contact" );
    return res.end();
}



module.exports = {
    portfolio,
    contact
}