function subtract() {
    const n1 = document.getElementById('firstNumber').value
    const n2 = document.getElementById('secondNumber').value
    const result = document.getElementById('result')
    result.textContent = Number(n1) - Number(n2)
}