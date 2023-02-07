let shop = ( req, res) => {
    res.render( 'shop.ejs' );
    return res.end();
}


module.exports = {
    shop
}