const express = require( 'express' );
const route = express.Router();
const { addProduct, postProduct , editproduct, productInadmin} = require( '../controllers/admin' )


route.get( '/admin/addproduct', addProduct );
route.get( '/admin/editproduct', editproduct );
route.get( '/admin/productadmin', productInadmin );

route.post( '/product', postProduct ) 

module.exports = route;