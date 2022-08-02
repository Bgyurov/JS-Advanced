function solve(pies, start, end) {
    const startIndex = pies.indexOf(start)
    const lastIndex = pies.indexOf(end) + 1

    return pies.slice(startIndex, lastIndex);

}