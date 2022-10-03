function same(num) {
    let numAsString = String(num);
    let compareNum = numAsString[0];
    let sumOfDigits = Number(compareNum);

    let isSame = true;

    for(let i = 1; i < numAsString.length; i++){
        sumOfDigits += Number(numAsString[i]);
        if (compareNum !== numAsString[i]){
            isSame = false;
        } 
    }

    console.log(isSame);
    console.log(sumOfDigits);
}