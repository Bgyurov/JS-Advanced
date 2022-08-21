function lockedProfile() {

    Array.from(document.querySelectorAll('.profile button'))
        .forEach(button => button.addEventListener('click', onClick))


    function onClick(ev) {
        let profile = ev.target.parentElement
        console.log(profile);
        let isActive = profile.querySelector('input[value="unlock"]').checked
        if (isActive) {
            let info = Array.from(profile.querySelectorAll('div')).find(p => p.id.includes('HiddenFields'))
            console.log(info);

            if (ev.target.textContent == 'Show more') {
                ev.target.textContent = 'Hide it'
                info.style.display = 'block'
            } else {
                ev.target.textContent = 'Show more'
                info.style.display = 'none'
            }
        }
    }

}