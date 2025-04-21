//Part 1: Setting Up Classes
// Base Class: ProductProperties
class ProductProperties {
    //Constructor Method
    constructor(name, price, quantity) {
        this.name = name; //Name of the product.
        this.price = price; //Price of the product.
        this.quantity = quantity; //Quantity available in stock.
    }
    // Method to calculate total value of the product in stock
    getTotalValue() {
        return this.price * this.quantity;
    }
    // Method to return string representation of the product
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}