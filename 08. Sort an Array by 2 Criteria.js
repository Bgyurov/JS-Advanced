function solve(arr) {
    arr.sort(twoCriteriaSort)
    return arr.join('\n');

    function twoCriteriaSort(current, next) {
        if (current.length === next.length) {
            return current.localeCompare(next)
        }
        return current.length - next.length
    }
}
console.log(solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]))