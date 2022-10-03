function solve(arr){
    arr.sort((a,b) => a.localeCompare(b));

    let order = 1;

    for (const name of arr) {
        console.log(`${order}.${name}`);
        order++;
    }
}