function solve(array) {
    return array.sort((a, b) => b - a).slice(0, array.length % 2 == 0 ? array.length / 2 : array.length / 2 + 1).reverse()

}
console.log(solve([3, 19, 14, 7, 2, 19, 6]))