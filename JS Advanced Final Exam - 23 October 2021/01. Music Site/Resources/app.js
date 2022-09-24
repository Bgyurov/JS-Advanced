window.addEventListener('load', solve);

function solve() {
    let input = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    }

    let selections = {
        allhits: document.querySelector('#all-hits .all-hits-container'),
        saved: document.querySelector('#saved-hits .saved-container'),
        totalLikes: document.querySelector('.likes p')

    }
    let totalLikes = 0
    let addBtn = document.getElementById('add-btn')
    addBtn.addEventListener('click', onClick)

    function onClick(event) {
        event.preventDefault();


        let genre = input.genre.value
        let name = input.name.value
        let author = input.author.value
        let date = input.date.value


        //validation input fields

        if (genre == '' || name == '' || author == '' || date == '') {
            return
        }

        //create element

        let div = document.createElement('div')
        div.className = 'hits-info'
        div.innerHTML = `<img src="./static/img/img.png"> 
        <h2>Genre: ${genre}</h2>
        <h2>Name: ${name}</h2>
        <h2>Author: ${author}</h2>
        <h3>Date: ${date}</h3>
        <button class="save-btn">Save song</button>
        <button class="like-btn">Like song</button>
        <button class="delete-btn">Delete</button>`

        selections.allhits.appendChild(div)

        //clear input fields
        input.genre.value = ''
        input.name.value = ''
        input.author.value = ''
        input.date.value = ''
            //add functionality to buttons
        let saveBtn = div.querySelector('.save-btn')
        saveBtn.addEventListener('click', onSave)
        let likeBtn = div.querySelector('.like-btn')
        likeBtn.addEventListener('click', onLike)
        let deleteBtn = div.querySelector('.delete-btn')
        deleteBtn.addEventListener('click', onDelete)



        function onSave() {
            selections.saved.appendChild(div)
            likeBtn.remove();
            saveBtn.remove();
        }

        function onLike() {

            totalLikes++
            selections.totalLikes.textContent = `Total Likes: ${totalLikes}`
            likeBtn.disabled = true
        }

        function onDelete() {

            div.remove()
        }

    }

}