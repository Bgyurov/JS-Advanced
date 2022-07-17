function solve(num, num2, separator) {
    let result;

    switch (separator) {
        case '+':
            result = num + num2
            break;
        case '-':
            result = num - num2
            break;
        case '*':
            result = num * num2
            break;
        case '/':
            result = num / num2
            break;
        case '%':
            result = num % num2
            break;
        case '**':
            result = num ** num2
            break;
        default:
            break;
    }
    console.log(result);

}