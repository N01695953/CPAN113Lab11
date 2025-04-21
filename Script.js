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

//Part 2: Adding Inheritance
// Subclass: PerishableProductProperties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // Call the constructor of the base class
        this.expirationDate = expirationDate; // New property for expiration date
    }
    // Override toString method to include expiration date
    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
    //Part 3: Static Methods and Properties
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount; // Apply discount
        });
    }
}
// Creating instances of PerishableProductProperties
const milk = new PerishableProductProperties("Milk", 1.50, 10, "2024-12-31");
const bread = new PerishableProductProperties("Bread", 2.00, 20, "2024-01-15");

// Create a Store ClassProperties inventory (array)
class Store {
    constructor() {
        this.inventory = []; // Array to store products
    }
    // Method to add a product to the inventory
    addProduct(product) {
        this.inventory.push(product);
    }
}