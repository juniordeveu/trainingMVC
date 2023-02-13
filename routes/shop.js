const express = require( 'express' );
const route = express.Router();
const { shop, cart,postCart, orders, checkout, productslist, productdetails, getIndex } = require( '../controllers/shop' );


route.get( '/shop', shop ); 
route.get( '/getindex', getIndex ); 
route.get( '/productslist', productslist ); 


route.get( '/products/:idProduct', productdetails ); 


route.get( '/cart', cart  )
route.post( '/cart', postCart  )

route.get( '/orders', orders  )
route.get( '/checkout', checkout  )

module.exports = route