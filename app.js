const { config } = require( './config/config' );
const { error404 } = require( './controllers/error' );
const {  contact } = require( './controllers/portfolio' );
/* route */
const routesPortfolio = require( './routes/portfolio' );
const routeContact = require( './routes/contacts' );
const bodyParser = require( 'body-parser' );


const express = require( 'express' );
const app = express();

app.use( bodyParser.urlencoded({ extended:false }) );

app.use( routeContact )

app.use( routesPortfolio )

app.use( '*', error404)


/* ---------------------------------------------------------------------- */
app.listen( config.port, ( err ) => {
    ( err ) ? err : console.log( `Server run on port ${ config.port }` );
} )