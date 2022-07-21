function solve(string) {

    let regexWords = /[A-Za-z]+/g;
    let regexMatches = string.match(regexWords);
    console.log(regexMatches.join(', ').toUpperCase());

}
solve('Hi, how are you?')