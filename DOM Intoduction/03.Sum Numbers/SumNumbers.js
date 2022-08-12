function calc() {
    const n1 = document.getElementById('num1').value
    const n2 = document.getElementById('num2').value
    const result = Number(n1) + Number(n2)
    document.getElementById('sum').value = result
}