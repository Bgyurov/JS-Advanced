function solve(arr) {
    let result = []
    arr.sort((a, b) => b - a)

    while (arr.length !== 0) {
        result.push(arr.pop())
        result.push(arr.shift())
    }
    return result
}