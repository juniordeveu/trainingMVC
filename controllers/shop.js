const Product = require ( '../models/products' );


let cart = ( req, res ) => {
    res.render( 'shop/cart.ejs', {
        titlePage:'Your cart',
    } );
    return res.end();
}

let checkout = ( req, res ) => {
    res.render( 'shop/checkout.ejs',{
        titlePage:'CheckOut',
    } );
    return res.end();
}

let productslist = ( req, res ) => {
    res.render( 'shop/product-list.ejs' );
    return res.end();
}
let productdetails = ( req, res ) => {
    res.render( 'shop/product-details.ejs' );
    return res.end();
}

let shop = ( req, res) => {
    Product.fetchAll( (products)=>{
        res.render( 'shop/product-list.ejs',
        {
            titlePage:'All products',
            onPage: products,   
        } );       
        return res.end();
    });

}

let getIndex = (req, res, next) =>{
    Product.fetchAll( (products)=>{
        res.render( 'shop/index.ejs',
        {
            titlePage:'shop',
            onPage: products,   
        } );       
        return res.end();
    });  
}


module.exports = {
    shop,
    cart,
    checkout,
    productslist,
    productdetails,
    getIndex
}