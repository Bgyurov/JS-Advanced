function solve(arr) {
    let biggestNum = Math.max(...arr.flat());
    console.log(biggestNum);
}
solve(
    [
        [20, 50, 10],
        [8, 33, 145]
    ]
);