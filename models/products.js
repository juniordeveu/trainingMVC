const fs = require ( 'fs' );
const { dirname } = require('path');
const path = require('path');




class Product {
    constructor (name , title, price, description) {
        this.name = name,
        this.title = title,
        this.price = price,
        this.description = description
    }

    save() {
        const getPath = path.join(path.dirname(require.main.filename), 'data', 'product.json');
        fs.readFile( getPath, ( err, contentFile ) =>{
            let products = [];
            if ( !err ) {
                products = JSON.parse(contentFile)
            }
            products.push(this)
            fs.writeFile(getPath, JSON.stringify(products), ( err ) => {
                console.log( " ERROR => ", err, "<= END ERROR")
            })
        } );
    }

    static fetchAll( cb ) {
        const getPath = path.join( path.dirname( require.main.filename ), 'data', 'product.json');
        fs.readFile(getPath, (err, fileContent) => {
            if (err) {
                cb( [] )
            }
            cb( JSON.parse( fileContent ) );
        })
    }
}
module.exports = Product