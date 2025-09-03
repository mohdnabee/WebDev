// let arr = [1,2,3,"hello","hii",true,false]

// function getString(i){
//     return typeof i =="string"
// }
// function getNumber(i){
//     return typeof i =="number"
// }
// function getBoolean(i){
//     return typeof i =="boolean"
// }

// function getfun(arr,fn){
//     let res = []
//     for(let i of arr){
//         if(fn(i)){
//         res.push(i)

//         }
//     }
//     return res;
// }
// console.log(getfun(arr,getString));
// console.log(getfun(arr,getNumber));
// console.log(getfun(arr,getBoolean));

    for(let i = 1; i<= 5; i++){
        setTimeout(() =>{
        console.log(i);
        },1000*i)
        
    }

