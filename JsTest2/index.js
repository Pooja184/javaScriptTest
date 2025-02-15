// console.log("multiply two numbers without using * operator");

// const multi=(a,b)=>{
//     let sum=0;
//     for(let i=0;i<b;i++){
//         // console.log(i,"i")
//         // console.log(b[i],"b[i]")
//         sum+=a;
//     }
//     console.log(sum)
// }
// multi(4,3)

// console.log("find the smallest of three numbers")
// const smallest=(num1,num2,num3)=>{
//       if(num1<num2 && num1>num3){
//         console.log(`${num1} is smallest`)
//       }else if(num2<num1 && num2<num3){
//         console.log(`${num2} is smallest`)
//       }else{
//         console.log(`${num3} is smallest`)
//       }
// }
// smallest(9,8,5)

// console.log("Reverse a string without using built in method")

// const reverseStr=()=>{
//     let str="awdiz";
//     let reverse=""
//     for(let i=str.length-1;i>=0;i--){
//          reverse += str[i]
//     }
//     console.log(reverse)
// }
// reverseStr()

// console.log("Find the Intersection of Two Arrays")
// const interSection=()=>{
//     let arr1=[2,5,1,5];
//     let arr2=[45,2,8,1];
//     let newArr=[];
//     for(let i=0;i<=arr1.length-1;i++){
//         // console.log(arr1[i])
//         for(let j=0;j<=arr2.length-1;j++){
//             // console.log(arr2[j],"j")
//             //  console.log(arr1[i],"i")

//             if(arr1[i]===arr2[j]){
//             //    console.log(arr1[i],"arr1")
//                newArr.push(arr1[i])
//             }
//         }

//     }
//     console.log(newArr)

// }
// interSection()

console.log("Count the occurences of each character in a string")
const countOccurence=(str)=>{
   for(let i=0;i<=str.length-1;i++){
    //    console.log(str[i])
    let count=0;
    for(let j=0;j<=str.length-1;j++){
        if(str[i]==str[j]){
            count++
        }
    }
    console.log(`${str[i]} = ${count} times`)
       
   }
 }
 countOccurence("lhlol")


// console.log("Count the occurences of each character in a string")
// const countOccurence=(str)=>{
//     let ob={}
//    for(let i=0;i<=str.length-1;i++){
//     //    console.log(str[i])
//     let count=0;
//     for(let j=0;j<=str.length-1;j++){
//         if(str[i]==str[j]){
//             count++
//         }
//     }
//     console.log(`${str[i]} = ${count} times`)
       
//    }
// }
// countOccurence("hello")