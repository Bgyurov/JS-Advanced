function toggle() {
    let textElement = document.getElementById('extra')
    let butttonElement = document.getElementsByClassName('button')[0]
    if (butttonElement.textContent == 'More') {

        textElement.style.display = 'block'
        butttonElement.textContent = 'Less'
    } else {
        textElement.style.display = 'none'
        butttonElement.textContent = 'More'
    }
}