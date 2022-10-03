function cooking(num, op1, op2, op3, op4, op5) {

    let result = Number(num);
    let operations = [op1, op2, op3, op4, op5];

    for (const cmd of operations) {
        switch (cmd) {
            case 'chop':
                result /= 2;
                break;

            case 'dice':
                result = Math.sqrt(result);
                break;

            case 'spice':
                result += 1;
                break;

            case 'bake':
                result *= 3;
                break;

            case 'fillet':
                result = result - (result*0.2);
                break;

        }
        console.log(result);
    }
  
}
