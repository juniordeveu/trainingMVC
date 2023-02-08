const Product = require ( '../models/products' )

let addProduct = ( req, res ) => {
    res.render( 'addProduct.ejs', 
                {titlePage:'Add Product'} 
                );
    return res.end();
}

let postProduct = ( req, res ) => {
    let { name_product , title_product, price_product, description_product } = req.body 
    const product = new Product( name_product, title_product, price_product, description_product );
    product.save();
    res.redirect('/shop');
}

module.exports = {
    addProduct,
    postProduct
}