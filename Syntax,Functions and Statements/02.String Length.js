function solve(str1, str2, str3) {
    let allStringLength = str1.length + str2.length + str3.length
    console.log(allStringLength);
    console.log(Math.floor(allStringLength / 3));
}
solve('chocolate', 'ice cream', 'cake')