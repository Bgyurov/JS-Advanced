function solve(propsArr) {
    let result = {};

    for(let i = 0; i < propsArr.length-1; i++){
        if(i%2 == 0){
            result[propsArr[i]] = Number(propsArr[i+1]);
        }
    }

    console.log(result);
}