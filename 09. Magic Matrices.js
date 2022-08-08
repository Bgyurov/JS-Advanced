function solve(input) {
    let isMagic = false

    let firstArrSum = 0
    let secondArrSum = 0
    let thirdArrSum = 0

    for (let i = 0; i < input[0].length; i++) {
        firstArrSum += Number(input[0][i])
    }
    for (let i = 0; i < input[1].length; i++) {
        secondArrSum += Number(input[1][i])
    }
    for (let i = 0; i < input[2].length; i++) {
        thirdArrSum += Number(input[2][i])
    }

    if (firstArrSum == secondArrSum || firstArrSum == thirdArrSum) {
        isMagic = true
    }

    console.log(isMagic);

}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])
solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
])
solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
])