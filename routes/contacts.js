const express = require( 'express' );
const route = express.Router();
const { contact } = require( '../controllers/portfolio' );

route.get('/contact', contact)

module.exports = route;