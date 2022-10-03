function solve(arr) {

    arr.sort((a,b)=> {
        if (a.length - b.length > 0) {
            return 1;
        } else if(a.length - b.length) {
            return -1;
        } else {

            return a.localeCompare(b);
        }
    });
    
    for (const el of arr) {
        console.log(el);
    }
}