
let  btn =document.querySelector("button")
let  inp  =  document.querySelector("input")
btn.addEventListener("click",() =>{
let  searchText=  inp.value
fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
.then((data) =>{
    return data.json()
}).then((res)=>{
    console.log(res);
    show(res)
})

})



function show(res){

    for(let  i  of res){

    let  img =  document.querySelector("img")
    
    // console.log(res[0].show.image.medium);
    let  link  =  res[i].show.image.medium
    img.setAttribute("src",link)}
    
}