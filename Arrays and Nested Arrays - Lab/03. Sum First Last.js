function solve(array) {

    let first = array.shift()
    let last = array.pop()
    console.log(Number(first) + Number(last));

}
solve(['20', '30', '40'])