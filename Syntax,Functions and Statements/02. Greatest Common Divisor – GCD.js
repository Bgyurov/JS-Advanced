function gcd(num1, num2){
   
    while(num2>0){
        let divider = num2;
        num2 = num1 % num2;
        num1 = divider;
    }

    console.log(num1);
    
}