function solve(year, mouth, day) {
    let date = new Date(year, mouth - 1, day)
    date.setDate(date.getDate() - 1)

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
solve(2016, 9, 30)