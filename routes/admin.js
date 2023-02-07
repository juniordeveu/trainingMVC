const express = require( 'express' );
const route = express.Router();
const { addProduct } = require( '../controllers/addProduct' )


route.get( '/addproduct', addProduct );

module.exports = route;