function attachGradientEvents() {
    const gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', onMouseOver)
    const result = document.getElementById('result')

    function onMouseOver(ev) {
        result.textContent = Math.floor(ev.offsetX / gradient.clientWidth * 100) + '%'
    }
}