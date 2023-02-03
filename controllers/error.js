const error404 = ( req, res ) =>{
    res.statusCode = 404;
    res.send( "Error" );
    return res.end();
} 

module.exports = {
    error404
}