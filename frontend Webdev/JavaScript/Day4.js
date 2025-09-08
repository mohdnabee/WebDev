// for (var i=1 ;i<=5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000*i);
// }


// console.log(window)
// console.log(this)

// let obj={
//     id :1,
//     name:"hello",
//     sum:function(){
//         console.log(this); 
//     }
// }
// obj.sum()


// let  obj={
//     id:1, 
//     name :"hello",
//     sum:() =>{
//         console.log(this);
//     }
// }

// obj.sum()



// a= 5 
// let  obj={
//     a:10, 
//     sum:()=>{
//         console.log(this.a); 
//     },
//     id:1,  
//     name:"hello",
//     sum : ()=> {
//     }

// }



// let  arr=[1,2,3,4]
// arr.map((a)=> {
//     console.log(a)
// })

// let arr = [1,2,3,4,5]

// Array.prototype.myMap = function(callback){
//     let res =[]
//     for(let i = 0; i<this.length;i++){
//         res.push(callback(this[i],i,this))

//     }
//     return res
// }
//     let data = arr.myMap((a,b,c)=>{
//         return c
//     })
//     console.log(data);

// let arr = [1,2,3,4,5]

// Array.prototype.myfilter = function(callback){
//     let res =[]
//     for(let i = 0; i<this.length;i++){
//         if((callback(this[i]))){
//             res.push(this[i])
//         }

//     }
//     return res
// }
//     let data = arr.myfilter((a,b,c)=>{
//         return a>2
//     })
//     console.log(data);
    


// 04-09-2025 

// let  arr=[1,2,3,5,6,7]
// Array.prototype.myFillter= function(cb){
//     let  res=[]
//     for (let i=0; i<this.length; i++){
//         if(cb(this[i], i,this)){
//             res.push(this[i])
//         }
//     }
//     return res
// }

// let data =  arr.myFillter((a,b,c) =>{
//     return a%2 == 1
// })

// console.log(data); 

// Asynchronus programming
function step1(fn){
    setTimeout(() => {
        console.log("Select a Photo");
        fn()
        
    }, 3000);
}
function step2(fn){
    setTimeout(() => {
        console.log("Caption");
        fn()
    }, 2000);
}
function step3(fn){
    setTimeout(() => {
        console.log("Filterrrrrrrrrr");
        fn()
    }, 1000);
}
function step4(){
    setTimeout(() => {
        console.log("Post");
    }, 1000);
}
//Callback Hell
step1(()=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })
})












