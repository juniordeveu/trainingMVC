const express = require( 'express' );
const route = express.Router();
const { addProduct, postProduct } = require( '../controllers/addProduct' )


route.get( '/addproduct', addProduct );

route.post( '/product', postProduct ) 

module.exports = route;