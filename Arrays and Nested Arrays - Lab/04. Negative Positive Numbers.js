function solve(array) {
    let resultArr = []


    for (let i = 0; i < array.length; i++) {

        if (array[i] < 0) {
            resultArr.unshift(array[i])
        } else {
            resultArr.push(array[i])
        }

    }
    console.log(resultArr.join(`\n`));
}
solve([7, -2, 8, 9])