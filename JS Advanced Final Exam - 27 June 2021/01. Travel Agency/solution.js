window.addEventListener('load', solution);

function solution() {

  let input = {
    fullName: document.getElementById('fname'),
    email: document.getElementById('email'),
    number: document.getElementById('phone'),
    address: document.getElementById('address'),
    code:document.getElementById('code')
  }
  
  let previewList = document.getElementById('infoPreview')
  
  let submitBtn = document.getElementById('submitBTN')
  let editBtn = document.getElementById('editBTN')
  let continueBtn = document.getElementById('continueBTN')
  let block = document.getElementById('block')

  submitBtn.addEventListener('click',add)


  function add(event){
      event.preventDefault()
      let fullName = input.fullName.value
      let email = input.email.value
      let number = input.number.value
      let address = input.address.value
      let code = input.code.value

      if(fullName !== '' || email !== ''){
        let li = document.createElement('li')
        li.innerHTML = `<li>Full Name: ${fullName} </li>
        <li>Email: ${email} </li>
        <li>Phone Number: ${number} </li>
        <li>Address: ${address} </li>
        <li>Postal Code: ${code}</li>`

        previewList.appendChild(li)

        submitBtn.disabled = true
        editBtn.disabled = false
        continueBtn.disabled = false


        //add functionality
        editBtn.addEventListener('click',edit)
        continueBtn.addEventListener('click', provide)


      input.fullName.value = ''
      input.email.value = ''
      input.number.value = ''
      input.address.value = ''
      input.code.value = ''

        function edit(event){
          event.preventDefault()
          input.fullName.value = fullName
          input.email.value = email
          input.number.value = number
          input.address.value = address
          input.code.value = code
          submitBtn.disabled = false
        editBtn.disabled = true
        continueBtn.disabled = true

          li.remove()
      }

        function provide(event){
          event.preventDefault()
          block.remove()
          let h3 = document.createElement('h3')
          h3.textContent = 'Thank you for your reservation!'
          document.body.appendChild(h3)


        }
      }
  }
}
