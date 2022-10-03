function solve(arr){

    let result = [];

    let ascendingArr = [];
    ascendingArr = [...arr].sort((a,b)=>a-b);


    let firstHalf = [];
    let secondHalf = [];
    for(let i = 0; i < ascendingArr.length/2; i++){
        firstHalf.push(ascendingArr[i]);
    }
    
    for(let j = ascendingArr.length-1; j >= ascendingArr.length/2; j--){
        secondHalf.push(ascendingArr[j]);
    }


    let counter = 0;

    while(counter < firstHalf.length){
        result.push(firstHalf[counter]);
        result.push(secondHalf[counter]);
        counter++;
    }

    //console.log(result);
    return result;
}