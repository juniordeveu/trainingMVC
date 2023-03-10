const Product = require ( '../models/products' );
const Cart = require ( '../models/cart' );

let cart = ( req, res ) => {
    res.render( 'shop/cart.ejs', {
        titlePage: 'Your cart',
    } );
    return res.end();
}

let postCart = ( req, res ) => {
    const { idProduct } = req.body
    Product.findById( idProduct, ( products ) => {
        Cart.addProduct( idProduct, products.price )
    } )
    res.redirect( '/cart' );
    res.end();
}
let orders = ( req, res ) => {
    res.render( 'shop/orders.ejs', {
        titlePage: 'Your cart',
    } );
    return res.end();
}

let checkout = ( req, res ) => {
    res.render( 'shop/checkout.ejs',{
        titlePage: 'CheckOut',
    } );
    return res.end();
}

let productslist = ( req, res ) => {
    Product.fetchAll( ( products ) => {
        res.render( 'shop/product-list.ejs',
        {
            titlePage: 'product list',
            onPage: products,   
        } );       
        return res.end();
    });
}
let productdetails = ( req, res ) => {
    const prodID = req.params.idProduct;
    Product.findById( prodID, product => {
        res.render( 'shop/product-details.ejs', 
                    {   onPageId : prodID,
                        onPageProduct  : product   
                    } );
    return res.end();
    } )
  
}

let shop = ( req, res) => {
    Product.fetchAll( ( products ) => {
        res.render( 'shop/product-list.ejs',
        {
            titlePage: 'All products',
            onPage: products,   
        } );       
        return res.end();
    });
}

let getIndex = (req, res, next) =>{
    Product.fetchAll( ( products ) => {
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
    postCart,
    orders,
    checkout,
    productslist,
    productdetails,
    getIndex
}