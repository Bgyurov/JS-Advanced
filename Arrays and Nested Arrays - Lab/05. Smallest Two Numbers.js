function solve(params) {
    let result = params.sort((a, b) => a - b).slice(0, 2).join(' ');


    console.log(result);
}
solve([30, 15, 50, 5])