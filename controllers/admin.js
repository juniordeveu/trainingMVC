const Product = require ( '../models/products' )

let addProduct = ( req, res ) => {
    res.render( 'admin/edit-product.ejs', 
                { titlePage:'Add Product',
                path:'/admin/addproduct',
                editing: false } 
                );
    return res.end();
}  




let productInadmin = ( req, res ) => {
    Product.fetchAll( (products)=>{
        res.render( 'admin/productsinadmin.ejs',
        {
            titlePage:'Admin products',
            onPage: products,   
        } );       
        return res.end();
    });
}


let postProduct = ( req, res ) => {
    let { name_product , imageurl,  title_product, price_product, description_product } = req.body 
    const product = new Product( null, name_product, imageurl, title_product, price_product, description_product );
    product.save();
    res.redirect( '/shop' );
}

let editproduct = ( req, res ) => {

    const editMode = req.query.edit
    if ( !editMode ) {
        return res.redirect( '/' );
      }
    const proId = req.params.idProduct;
    Product.findById( proId,  products  => {
        console.log(products)
        res.render( 'admin/edit-product.ejs', 
        { titlePage:'Add Product',
        path:'/admin/addproduct',
        editing: editMode,
        products: products
        } );
        return res.end();
    })
}

let postEditProduct = ( req, res ) => {
    const { idProductUpd, nameProduct, imageUrl, titleProduct, priceProduct, descProduct } = req.body; 
    const productUpdate = new Product( idProductUpd.idProduct, 
                                 nameProduct.nameProduct, 
                                 imageUrl.imageurl, 
                                 titleProduct.title_product, 
                                 priceProduct.price_product, 
                                 descProduct.description_product );
    productUpdate.save();   
    res.redirect( '/' )    
}


module.exports = {
    addProduct,
    postProduct,
    editproduct,
    productInadmin,
    postEditProduct
}