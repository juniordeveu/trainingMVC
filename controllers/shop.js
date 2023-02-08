const Product = require ( '../models/products' );

let shop = ( req, res) => {
    const getProduct = Product.fetchAll();
    console.log('Pobrane daden ze sklepu ', getProduct)
    res.render( 'shop.ejs' );
    return res.end();
}


module.exports = {
    shop
}