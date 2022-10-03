function howMuch(fruitType, weightInGrams, pricePerKg) {
    let weightInKg = weightInGrams / 1000;

    let result = weightInKg * pricePerKg;

    console.log(`I need $${result.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}