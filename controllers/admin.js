const Product = require ( '../models/products' )

let addProduct = ( req, res ) => {
    res.render( 'admin/addProduct.ejs', 
                { titlePage:'Add Product',
                path:'/admin/addproduct' } 
                );
    return res.end();
}

let editproduct = ( req, res ) => {
    res.render( 'admin/edit-product.ejs' )
    return res.end();
}
let productInadmin = ( req, res ) => {
    Product.fetchAll( (products)=>{
        res.render( 'admin/productsinadmin.ejs',
        {
            titlePage:'Admin products',
            onPage: products,   
        } );       
        return res.end();
    });
}


let postProduct = ( req, res ) => {
    let { name_product , title_product, price_product, description_product } = req.body 
    const product = new Product( name_product, title_product, price_product, description_product );
    product.save();
    res.redirect( '/shop' );
}

module.exports = {
    addProduct,
    postProduct,
    editproduct,
    productInadmin
}