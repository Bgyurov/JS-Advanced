function solve(arguments) {
    let data = {}

    Array.from(arguments).forEach((line) => {
        let type = typeof line
        console.log(`${type}: ${line}`);

        if (!data[type]) {
            data[type] = 0
        } else {
            data[type] += 1
        }
    })
}
solve()