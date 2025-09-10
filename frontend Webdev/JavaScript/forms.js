let formEl=    document.querySelector("form")


formEl.addEventListener("submit", (e) =>{
    e.preventDefault()

    //  loacte store data
    let  data =  {
        name:formEl[0].value,
         email:formEl[1].value,
          pass:formEl[2].value
    }

    console.log(data);
    localStorage.setItem("formData", JSON.stringify(data))
    


//    console.log(formEl[0].value); 
//    console.log(formEl[1].value);
//    console.log(formEl[2].value);
})


// local Store 

// localStorage.setItem("key","data")

// loaal  store me kya save  ha pata kar  na ha tho  
// localStorage.getItem("key")
// console.log(data);
