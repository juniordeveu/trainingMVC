const error404 = ( req, res ) =>{
    res.statusCode = 404;
    res.render( 'error404.ejs',
                {titlePage: 'error 404 '} );
    return res.end();
} 

module.exports = {
    error404
}