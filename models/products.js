const products = [];

class Product {
    constructor (name , title, price, description) {
        this.name = name,
        this.title = title,
        this.price = price,
        this.description = description
    }

    save() {
        products.push( this );
        console.log( products );
    }

    static fetchAll() {
        return products;
    }
}
module.exports = Product