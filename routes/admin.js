const express = require( 'express' );
const route = express.Router();
const { addProduct, postProduct , postEditProduct, editproduct, productInadmin} = require( '../controllers/admin' )


route.get( '/addproduct', addProduct );
route.get( '/editproduct/:idProduct', editproduct );
route.post( '/editproduct', postEditProduct );

route.get( '/productadmin', productInadmin );


route.post( '/product', postProduct ) 

module.exports = route;