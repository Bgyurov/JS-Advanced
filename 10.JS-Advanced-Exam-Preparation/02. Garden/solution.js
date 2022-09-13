class Garden {

    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error(`Not enough space in the garden.`);
        } else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return (`The ${plantName} has been successfully planted in the garden.`)
        }
    }
    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(p => p.plantName == plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        if (plant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`)
        } else {
            plant.ripe = true;
            plant.quantity += quantity;
        }

        if (quantity < 2) {
            return (`${quantity} ${plantName} has successfully ripened.`)
        } else {
            return (`${quantity} ${plantName}s have successfully ripened.`)
        }
    }
    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.plantName == plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        let index = this.plants.indexOf(plant);
        this.storage.push(`${plant.plantName} (${plant.quantity})`);
        this.plants.splice(index, 1);
        this.spaceAvailable += plant.spaceRequired;
        return (`The ${plantName} has been successfully harvested.`)
    }
    generateReport() {
        let report = [];
        report.push(`The garden has ${this.spaceAvailable} free space left.`)

        let sorted = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let inGarden = [];
        sorted.forEach(s => inGarden.push(s.plantName));
        report.push(`Plants in the garden: ${inGarden.join(', ')}`);
        report.push(`Plants in storage: ${this.storage.join(', ')}`);

        return report.join('\n');
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());