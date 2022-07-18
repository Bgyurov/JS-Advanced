function solve(number) {

    let numberInString = number.toString()
    let isSame = true;
    let sum = 0

    let firstDigit = numberInString[0]
    for (let index = 0; index < numberInString.length; index++) {
        let currentDigit = Number(numberInString[index])
        sum += currentDigit
        if (firstDigit == currentDigit) {
            isSame = true;
        } else {
            isSame = false;
        }

    }
    console.log(isSame);
    console.log(sum);


}