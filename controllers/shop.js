const Product = require ( '../models/products' );

let shop = ( req, res) => {
    Product.fetchAll( (products)=>{
        res.render( 'shop.ejs',
        {
            onPage: products,   
        } );       
        return res.end();
    });

}


module.exports = {
    shop
}