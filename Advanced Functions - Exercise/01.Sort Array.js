function solve(arr, sortingType) {

    if (sortingType == 'asc') {
        arr.sort((a, b) => a - b)
    } else {
        arr.sort((a, b) => b - a)
    }


    return arr
}