// let res=eval(5-4+5*3-5)
//         console.log(res);
let inp=document.querySelector("input")
let button=document.querySelectorAll("button")
console.log(button);
for (let btn of button){
    btn.addEventListener("click",()=>{
        // console.log("hehehe");
        let txt=btn.innerText
        // console.log(txt);
      if(txt=="C"){
        inp.value=""
      }else if(txt=="="){
        inp.value=eval(inp.value)
      }
      else{
        inp.value=inp.value+txt
      }
    })
}