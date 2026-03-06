export interface Product {
    price: number;
    description: string;
}

const phone: Product = {
    price: 1000,
    description: 'Phone'
}

const tablet: Product = {
    price: 2000,
    description: 'Tablet'
}

interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15;

export function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {

    let total = 0;
    products.forEach(({ price }) => total += price);

    return [total, total * tax];
}

// const [totalResult, taxResult] = taxCalculation({
//     products: shoppingCart,
//     tax: tax
// });

// console.log('Total', totalResult);
// console.log('Tax', taxResult);
