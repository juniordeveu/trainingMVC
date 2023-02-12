const fs = require ( 'fs' );
const { dirname } = require('path');
const path = require('path');
const getPath = path.join( path.dirname( require.main.filename ), 'data', 'product.json');
const getProductFromFile = cb => {
    
    fs.readFile(getPath, (err, fileContent) => {
        if (err) {
           cb( [] )
        } else {
            cb( JSON.parse( fileContent ) );
        }
    })
}



class Product {
    constructor (name, imageurl , title, price, description) {
        this.name        =     name,
        this.imageurl    =     imageurl,
        this.title       =     title,
        this.price       =     price,
        this.description =     description
    }

    save() {
        this.idProduct = Math.floor( Math.random () * 7777 ).toString()
        getProductFromFile( products => {
            products.push( this );
            fs.writeFile(getPath, JSON.stringify( products ), err => {
                console.log(err)
            })
        } )

    }

    static fetchAll( cb ) {
        getProductFromFile( cb );
    }
}
module.exports = Product