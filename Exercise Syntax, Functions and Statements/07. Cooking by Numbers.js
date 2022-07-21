function solve(number, ...commands) {

    number = Number(number)

    let chop = x => x / 2
    let dice = x => Math.sqrt(x)
    let spice = x => ++x;
    let bake = x => x * 3
    let fillet = x => x - x * 0.2

    for (let i = 0; i < commands.length; i++) {


        switch (commands[i]) {
            case 'chop':
                number = chop(number)
                console.log(number);
                break;
            case 'dice':
                number = dice(number)
                console.log(number);
                break;
            case 'spice':
                number = spice(number)
                console.log(number);
                break;
            case 'bake':
                number = bake(number)
                console.log(number);
                break;
            case 'fillet':
                number = fillet(number)
                console.log(number);
                break;

            default:
                break;
        }
    }
}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')