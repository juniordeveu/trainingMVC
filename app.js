/* config start server */
let config = {
    port : 7777
}
const bodyParser = require('body-parser');
/* end */

const express = require( 'express' )
const app = express();

app.use(bodyParser.urlencoded({extended:false}));












/* ---------------------------------------------------------------------- */
app.listen( config.port, ( err ) => {
    ( err ) ? err : console.log( `Server run on port ${ config.port }` );
} )