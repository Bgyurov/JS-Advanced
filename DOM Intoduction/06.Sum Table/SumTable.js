function sumTable() {
    let sum = 0;

    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1)
    for (let row of rows) {
        const value = Number(row.lastElementChild.textContent)
        sum += value

    }
    document.getElementById('sum').textContent = sum

}