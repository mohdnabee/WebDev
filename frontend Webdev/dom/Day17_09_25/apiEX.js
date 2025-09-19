//  A.P.I



let ul  =  document.querySelector('ul')

fetch("https://jsonplaceholder.typicode.com/todos")
.then((data) => {
    return data.json()


}).then((res)=>{
    console.log(res);
    show(res)
    
})

 
//    let  h4 =   document.createElement("h4")

function show(res){
    for(let  i  of res){
    let  li =   document.createElement("li")
  let  h3 =   document.createElement("h3")
    
    li.innerText=i.id
    h3.innerHTML= i.title
    ul.append(li,h3)

    }

}


