const Product = require ( '../models/products' );

let shop = ( req, res) => {
    const getProduct = Product.fetchAll();
    res.render( 'shop.ejs',
                {
                    onPage: getProduct,
                    
                } );
                
    return res.end();
}


module.exports = {
    shop
}