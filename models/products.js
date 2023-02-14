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
    constructor ( idProduct ,name, imageurl , title, price, description ) {
        this.idProduct   =   idProduct
        this.name        =     name,
        this.imageurl    =     imageurl,
        this.title       =     title,
        this.price       =     price,
        this.description =     description
    }

    save() {
        
        getProductFromFile( products => {
            if (this.idProduct) {
                const existingProductIndex = products.findById( prod => prod.id === this.idProduct );
                const updatePrduct = [...products]
                updatePrduct[existingProductIndex] = this;

                fs.writeFile(getPath, JSON.stringify( updatePrduct ), err => {
                    console.log(err)
                })
            } else {
                
                this.idProduct = Math.floor( Math.random () * 7777 ).toString();
                products.push( this );
                fs.writeFile(getPath, JSON.stringify( products ), err => {
                    console.log(err)
                })
            }
         
        } )

    }

    static fetchAll( cb ) {
        getProductFromFile( cb );
    }

    static findById( id, cb ) {
        
        getProductFromFile( products => {
           const product = products.find( p => p.idProduct === id );

           cb( product )
         
        })
    }
}
module.exports = Product