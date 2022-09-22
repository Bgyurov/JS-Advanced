function solve() {
    let input = {
        fname: document.getElementById('fname'),
        lname: document.getElementById('lname'),
        email: document.getElementById('email'),
        date: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
    }

    let tableBody = document.getElementById('tbody');
    let budget = document.getElementById('sum');
    let budgetTotal = 0;
    let hireBtn = document.getElementById('add-worker');
    hireBtn.addEventListener('click', onHire);


    function onHire(event) {
        event.preventDefault()

        // get info from input form
        let fName = input.fname.value
        let lname = input.lname.value
        let email = input.email.value
        let date = input.date.value
        let position = input.position.value
        let salary = input.salary.value

        //validate
        for (const item in input) {
            if (input[item].value == '') {
                return
            }

        }
        //create table row
        let tr = document.createElement('tr')
        tr.innerHTML = `   
        <td>${lname}</td>
        <td>${fName}</td>
        <td>${email}</td>
        <td>${date}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td><button class="fired">Fired</button> 
        <button class="edit">Edit</button></td>
        `
        tableBody.appendChild(tr)



        // clear input fields
        input.fname.value = ''
        input.lname.value = ''
        input.email.value = ''
        input.date.value = ''
        input.position.value = ''
        input.salary.value = ''


        budgetTotal += Number(salary);
        budget.textContent = budgetTotal.toFixed(2);
        // add functionality to btns
        let firedBtn = tr.querySelector('button.fired')
        let editBtn = tr.querySelector('button.edit')
        firedBtn.addEventListener('click', onFired)
        editBtn.addEventListener('click', edit)

        function onFired() {
            tr.remove();
            budgetTotal -= salary;
            budget.textContent = budgetTotal.toFixed(2);
        }

        function edit() {
            input.fname.value = fName;
            input.lname.value = lname;
            input.email.value = email;
            input.date.value = date;
            input.position.value = position;
            input.salary.value = salary;
            tr.remove();
            budgetTotal -= salary;
            budget.textContent = budgetTotal.toFixed(2);
        }


    }
}