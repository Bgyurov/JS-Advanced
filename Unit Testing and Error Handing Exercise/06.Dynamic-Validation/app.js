function validate() {
   document.getElementById('email').addEventListener('change',OnChange)
   function OnChange(event){
   const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm

   if(pattern.test(event.target.value)){
    event.target.classList.remove('error')
   }else{
    event.target.classList.add('error')
   }
   }
}