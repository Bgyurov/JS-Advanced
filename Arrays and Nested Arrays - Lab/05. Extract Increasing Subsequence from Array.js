function solve(arr) {
    let result = [];

    result.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let currBiggest = result[result.length - 1];

        if (arr[i] >= currBiggest) {
            result.push(arr[i]);
        }
    }

    //    console.log(result);

    return result;
}