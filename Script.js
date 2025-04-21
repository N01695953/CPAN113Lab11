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
    //Part 3: Static Methods and Properties
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * discount; // Apply discount
        });
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
}
// Creating instances of PerishableProductProperties
const milk = new PerishableProductProperties("Milk", 1.50, 10, "2024-12-31");
const bread = new PerishableProductProperties("Bread", 2.00, 20, "2024-01-15");

//Part 4: Store Management
// Create a Store ClassProperties inventory (array)
class Store {
    constructor() {
        this.inventory = []; // Array to store products
    }

    // Method to add a product to the inventory
    addProduct(product) {
        this.inventory.push(product);
    }

    // Method to get total value of all products in inventory
    getInventoryValue() {
        return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }

    // Method to find a product by its name
    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}

//Part 5: Testing the System
//Testing the system
let store = new Store();

// Creating products
const Cookie = new ProductProperties("Cookie", 2.50, 50);
const Cake = new ProductProperties("Cake", 1.75, 30);
const Potato = new PerishableProductProperties("Potato", 3.00, 15, "2024-05-01");

// Adding products to the store
store.addProduct(Cookie);
store.addProduct(Cake);
store.addProduct(milk);
store.addProduct(bread);
store.addProduct(Potato);

// Print total inventory value before discount
console.log("Total Inventory Value before discount: $", store.getInventoryValue().toFixed(2));

// Apply a 15% discount
ProductProperties.applyDiscount(store.inventory, 0.15);

// Print total inventory value after discount
console.log("Total Inventory Value after discount: $", store.getInventoryValue().toFixed(2));

// Find and print details of a specific product
const productName = "Milk";
const foundProduct = store.findProductByName(productName);
if (foundProduct) {
    console.log("Found Product:", foundProduct.toString());
} else {
    console.log("Product not found.");
}