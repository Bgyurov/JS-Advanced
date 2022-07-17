function solve(n, m) {

    let total = 0;
    let startNum = Number(n)
    let finalNum = Number(m)

    for (let i = startNum; i <= finalNum; i++) {
        total += i;

    }
    return total

}
console.log(solve('1', '5'))