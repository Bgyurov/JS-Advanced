function addItem() {
    let input = document.getElementById('newItemText').value
    const liElement = document.createElement('li')
    liElement.textContent = input.value
    const ul = document.querySelector('ul')
    ul.appendChild(liElement)
    input.value = ''
}