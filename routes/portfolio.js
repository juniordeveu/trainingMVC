const express = require( 'express' );
const route = express.Router();
const { portfolio } = require( '../controllers/portfolio' );

route.get('/',portfolio)

module.exports = route;