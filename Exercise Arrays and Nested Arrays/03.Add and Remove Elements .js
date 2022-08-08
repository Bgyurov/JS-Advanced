function solve(input) {
    let resultArr = []
    let currentNum = 0
    for (let i = 0; i < input.length; i++) {
        currentNum++
        if (input[i] == 'add') {
            resultArr.push(currentNum)
        } else if (input[i] == 'remove') {
            resultArr.pop(currentNum)
        }

    }

    if (resultArr.length == 0) {
        console.log('Empty');
    }
    console.log(resultArr.join(`\n`));

}
solve(['add',
    'add',
    'add',
    'add'
])
solve(['remove',
    'remove',
    'remove'
])
solve(['add',
    'add',
    'remove',
    'add',
    'add'
])