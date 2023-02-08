const express = require( 'express' );
const route = express.Router();
const { shop, cart, checkout, productslist, productdetails, getIndex } = require( '../controllers/shop' );


route.get( '/shop', shop ); 
route.get( '/getindex', getIndex ); 
route.get( '/products', productslist ); 
route.get( '/productdetails', productdetails ); 

route.get( '/cart', cart  )
route.get( '/checkout', checkout  )

module.exports = route