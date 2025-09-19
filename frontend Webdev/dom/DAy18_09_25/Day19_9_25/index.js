let p1=new Promise((res,rej)=>{
    res()
})
let p2=new Promise((res,rej)=>{
    // res()
    rej()
})
let p3=new Promise((res,rej)=>{
    res()
})
Promise.all([p1,p2,p3]).then(()=>{
    console.log(res);
    
})
// let arr=[-1,-2,-3,-4,-5]
// let sum=arr[0]
// let temp=arr[0]
// for (let i = 0; i < arr.length; i++) {
//     temp+=arr[i]
//     if(temp>sum){
//         sum=temp
//     }
    
// }
// console.log(sum);

// let n=arr.length
// let k=3
// let wSum=0
// for (let i = 0; i < k; i++) {
//     wSum+=arr[i]
    
// }
// let maxSum=wSum
// for (let i = k; i < n; i++) {
//     wSum=wSum+arr[i]-arr[i-k]
//     if(wSum>maxSum){
//         maxSum=wSum
//     }
    
// }
// console.log(maxSum);

// let k=3
// let n=arr.length
// // console.log(n);
// let maxSum=0
// for (let i = 0; i <=n-k; i++) {
//     let currSum = 0;
//     for (let j = i; j < i+k; j++) {
//         currSum+=arr[j];
//         if(currSum>maxSum){
//             maxSum=currSum
//         }
//     }
// }
// console.log(maxSum);
