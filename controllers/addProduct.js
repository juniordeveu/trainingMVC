let addProduct = ( req, res ) => {
    res.render( 'addProduct.ejs' );
    return res.end();
}

module.exports = {
    addProduct
}