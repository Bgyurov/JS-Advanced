function solve(arr){
    let rowSumToCompare = sumNums(arr[0]); //15
    let isMagical = true;

    for (const nestedArr of arr ) {
        if(sumNums(nestedArr) !== rowSumToCompare){
            isMagical = false;
        }
    }

    let columnSumToCompare = 0;
    let counter = 0;

    while (counter < arr.length){
        for (const nestedArr of arr) {
            columnSumToCompare += nestedArr[counter];
        }
        if(columnSumToCompare!== rowSumToCompare) {
            isMagical = false;
        }
        counter++;
        columnSumToCompare = 0;
    }


    console.log(isMagical);


    function sumNums(arr) {
        let sum = arr.reduce((partialSum, a) => partialSum + a, 0)
        return sum;
    }
}
