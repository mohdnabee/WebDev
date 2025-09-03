// for (var i=1 ;i<=5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000*i);
// }


// console.log(window)
// console.log(this)

let obj={
    id :1,
    name:"hello",
    sum:function(){
        console.log(this); 
    }
}
obj.sum()