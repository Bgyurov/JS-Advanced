function solve(arr, numOfRotations){
    let counter = 0;

    while(counter<numOfRotations){
        let removedElement = arr.pop();
        arr.unshift(removedElement);
        counter++;
    }

    console.log(arr.join(' '));
}