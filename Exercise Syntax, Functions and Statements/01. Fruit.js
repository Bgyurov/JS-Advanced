function solve(name, fruitInGrams, pricePerKg) {

    let fruitsPerKg = fruitInGrams / 1000
    let money = fruitsPerKg * pricePerKg
    console.log(`I need $${money.toFixed(2)} to buy ${fruitsPerKg.toFixed(2)} kilograms ${name}.`);

}

solve('orange', 2500, 1.8)