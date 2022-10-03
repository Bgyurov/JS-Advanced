function solve(arr){
    let result = [];
    let num = 0;

    for (const cmd of arr) {
        switch(cmd){
            case 'add':
                num++;
                result.push(num);
            break;

            case 'remove':
                num++;
            result.pop();
            break;
        }
    }

    if(result.length == 0){
        console.log('Empty');
    } else {
        for (const el of result) {
            console.log(el);
        }
    }
}