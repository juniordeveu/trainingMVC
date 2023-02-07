const { config } = require( './config/config' );
const { error404 } = require( './controllers/error' );


/* route */
const routesPortfolio = require( './routes/portfolio' );
const routeContact = require( './routes/contacts' );
const routeShop = require ( './routes/shop' );
/* end Route */

const bodyParser = require( 'body-parser' );
const path = require( 'path' );

const express = require( 'express' );
const app = express();

app.set( 'view engine', 'ejs' )
app.set( 'views', 'views' )

/* middleware */
app.use( express.static( path.join( __dirname, 'public' ) ));
app.use( bodyParser.urlencoded({ extended:false }) );

app.use( routeContact )

app.use( routesPortfolio )
app.use( routeShop )

app.use( '*', error404)


/* ---------------------------------------------------------------------- */
app.listen( config.port, ( err ) => {
    ( err ) ? err : console.log( `Server run on port ${ config.port }` );
} )