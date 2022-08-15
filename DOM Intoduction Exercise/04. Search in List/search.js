function search() {
    let listElements = document.querySelectorAll('ul#towns li')
    let resultElement = document.getElementById('result')
    let searchText = document.getElementById('searchText').value
    let matches = 0;

    for (const element of listElements) {
        element.style.fontWeight = 'normal'
        element.style.textDecoration = ''

    }

    for (const elements of listElements) {
        let text = elements.textContent
        if (text.match(searchText)) {
            matches++
            elements.style.fontWeight = 'bold'
            elements.style.textDecoration = 'underline'

        }
    }


    resultElement.textContent = matches + '' + ' matches found'
}