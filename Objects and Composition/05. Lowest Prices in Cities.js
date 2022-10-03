function solve(input){

    let register = {};

    for (const town of input) {
        let [townName, prodName, prodPrice] = town.split(' | ');
        prodPrice = Number(prodPrice);

        if(!register.hasOwnProperty(prodName)){
            register[prodName] = {};
        }

        register[prodName][townName] = prodPrice;
    }

    //console.log(register);

    for (const prod in register) {
        let entries = Object.entries(register[prod]);

        entries.sort((a,b) => a[1]-b[1]);
        console.log(`${prod} -> ${entries[0][1]} (${entries[0][0]})`)
    }
}