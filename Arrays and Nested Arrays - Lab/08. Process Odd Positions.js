function solve(input) {
    let resultArr = []
    for (let index = 0; index <= input.length; index++) {

        if (index % 2 == 1) {

            resultArr.push(input[index] * 2)
        }


    }
    console.log(resultArr.reverse().join(" "));
}