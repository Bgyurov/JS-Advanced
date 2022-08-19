function validate() {
    let inputElem = document.getElementById('email');
    inputElem.addEventListener('change', validatorHandler);
    let pattern = /[a-z]+@[a-z]+.[a-z]+/;



    function validatorHandler() {
        if (inputElem.value.match(pattern)) {
            inputElem.className = '';
        } else {
            inputElem.className = 'error';
        }
    }

}