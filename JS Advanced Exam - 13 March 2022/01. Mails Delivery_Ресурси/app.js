function solve() {

    let input = {
        name: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    }

    let lists = {
        list: document.getElementById('list'),
        sentList: document.querySelector('ul.sent-list'),
        deleteList: document.querySelector('ul.delete-list')

    }

    document.getElementById('add').addEventListener('click', add)
    document.getElementById('reset').addEventListener('click', clear)

    function clear(event) {
        event.preventDefault()
            //clear input fields
        input.name.value = ''
        input.title.value = ''
        input.message.value = ''
    }

    function add(event) {
        event.preventDefault()
        let name = input.name.value
        let title = input.title.value
        let message = input.message.value

        if (name == '' || title == '' || message == '') {
            return
        }

        let li = document.createElement('li')
        li.className = 'list-mails'
        li.innerHTML = `<h4>Title:${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`

        lists.list.appendChild(li)

        //add functionality
        let sentBtn = li.querySelector('#send')
        let deleteBtn = li.querySelector('#delete')
        sentBtn.addEventListener('click', sent)
        deleteBtn.addEventListener('click', remove)


        function sent() {

            lists.sentList.appendChild(li);

            li.innerHTML = `<span>To: ${name}</span>
            <span>Title: ${title}</span>
            <div class="btn">
                <button type="submit" class="delete">Delete</button>
            </div>`;

            li.querySelector('.delete').addEventListener('click', remove);

        }

        function remove() {
            lists.deleteList.appendChild(li);
            li.innerHTML = ` <span>To: ${name}</span>
            <span>Title: ${title}</span>`;
        }


    }


}
solve()