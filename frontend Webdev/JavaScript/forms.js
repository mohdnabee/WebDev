let formEl=    document.querySelector("form")


formEl.addEventListener("submit", (e) =>{
    e.preventDefault()
   console.log(formEl[0].value); 
   console.log(formEl[1].value);
   console.log(formEl[2].value);
})