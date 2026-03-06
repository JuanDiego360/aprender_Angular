import { taxCalculation, type Product } from "./06-function-destructuring";

const shoppingCart: Product[] = [{
    description: 'Notebook',
    price: 100
}, {
    description: 'Phone',
    price: 200
}];

const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log('Total', total);
console.log('Tax', tax);

