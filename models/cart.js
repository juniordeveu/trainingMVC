const fs = require( 'fs' );
const path = require( 'path' );
const pathCart = path.join(
                           path.dirname( require.main.filename ),
                           'data', 
                           'cart.json'
                           );

class Cart {
 static addProduct( id, productPrice ){
    fs.readFile( pathCart, ( err, cartContent) => {
        let cart = { productsInCart: [] , totalPriceCart: 0 }
        if( !err ) {
            cart = JSON.parse( cartContent );
        }

        const existingProductIndex = cart.productsInCart.findIndex( p => p.idProduct === id  );
        const existingProduct = cart.productsInCart[ existingProductIndex ];
        let updateProduct;
        if( existingProduct ){
            updateProduct = { ...existingProduct }
            updateProduct.qty = updateProduct.qty + 1
            cart.productsInCart = [ ...cart.productsInCart ]
            cart.productsInCart[ existingProductIndex ] = updateProduct;
        } else {
            console.log("ok")
            updateProduct = { idProduct : id, qty: 1 }
            cart.productsInCart = [...cart.productsInCart, updateProduct]
          
        }
        cart.totalPriceCart = cart.totalPriceCart + +productPrice;

        fs.writeFile( pathCart, JSON.stringify( cart ), ( err ) => {
            console.log( "seve err" , err)
        })
       
    } )
 }

}



module.exports = Cart