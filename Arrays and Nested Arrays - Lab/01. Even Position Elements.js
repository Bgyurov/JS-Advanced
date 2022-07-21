function solve(input) {

    let resultarr = []
    for (let i = 0; i < input.length; i += 2) {
        resultarr.push(input[i])
    }
    console.log(resultarr.join(" "));
}
solve(['10', '20', '30', '40', '50', '60', ])