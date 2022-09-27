class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsePower, price, mileage) {

        //validation for paramerers
        if (!model || horsePower < 0 || price < 0 || mileage < 0) {
            throw new Error("Invalid input!")
        }
        //add new cars in availableCars array
        else {
            this.availableCars.push({ model, horsePower, price, mileage })
            return `New car added: ${model} - ${horsePower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        }
    }

    sellCar(searchModel, desiredMileage) {
        //check availbleCars array to find searchModel
        let searched = this.availableCars.filter((x) => x.model == searchModel)[0];
        console.log(searched);
        if (!searched) {
            throw new Error(`${searchModel} was not found!`)
        }
        else {
            if (searched.mileage <= desiredMileage) {
                searched.price = searched.price
            }
            else if (searched.mileage - desiredMileage <= 40000) {
                searched.price *= 0.95
            }
            else if (searched.mileage - desiredMileage >= 40000) {
                searched.price *= 0.90
            }
        }
        let searchedModel = searched.model
        let searchedHP = searched.horsePower;
        let soldPrice = searched.price
        this.soldCars.push({ model: searchedModel, horsePower: searchedHP, soldPrice })
        this.totalIncome += soldPrice
        this.availableCars.splice(this.availableCars.indexOf(searched), 1)
        return `${searchModel} was sold for ${soldPrice.toFixed(2)}$`
    }
    currentCar() {
        if (this.availableCars.length <= 0) {
            return "There are no available cars"
        }
        else {
            let res = `-Available cars:\n`
            for (let i of this.availableCars) {
                res += `---${i.model} - ${i.horsePower} HP - ${i.mileage.toFixed(2)} km - ${i.price.toFixed(2)}$\n`
            }
            return res.trim()
        }
    }
    salesReport(criteria) {
        if (criteria == 'horsepower') {
            this.soldCars.sort((a, b) => b.horsePower - a.horsePower)
        }
        else if(criteria == 'model'){
            this.soldCars.sort((a,b) => a.model.localeCompare(b.model))
        }
        else {
            throw new Error("Invalid criteria!")
        }
        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:\n`
        for(let i of this.soldCars){
            result += `---${i.model} - ${i.horsePower} HP - ${i.soldPrice.toFixed(2)}$\n`
        }
        return result.trim()
    }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

 