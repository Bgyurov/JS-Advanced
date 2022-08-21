function alert() {


    let button = document.querySelector('input[type="button"]')
    button.addEventListener('click', firstFunction)

    function firstFunction() {
        button.style.backgroundColor = 'green'
    }


}