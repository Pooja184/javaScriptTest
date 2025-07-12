//swap two variables without using a third variable

//half
const swap=(a,b)=>{
    a=a+b;
    // a=b-a
    console.log(a)
    a=a-b;
    console.log(b)
}
swap(3,2)

//find largest of three numbers
console.log("find largest of three numbers")
const large=()=>{
    let n1=34,n2=45,n3=88;
    if(n1>n2 && n1>n3){
        console.log(`${n1} is greater`)
    }else if(n2>n1 && n2>n3){
        console.log(`${n2} is greater`)
    }else{
        console.log(`${n3} is greater`)
    }

}
large()

console.log("check if a number is prime")
//wrong output
const prime=(num)=>{
    console.log(num)
    if(num%1==0 && num%num==0){
        console.log(`${num} is prime`)
    }else{
        console.log(`${num} is not prime`)
    }
}
prime(4)

//reverse an array without using built in methods
console.log("reverse an array without using built in methods");

const reverseA=()=>{
    let arr=[1,3,5,6];
    let newArr=[];
    for(let i=arr.length-1;i>=0;i--){
    //    console.log(arr[i])
     newArr[arr.length-i-1]=arr[i]
    }
    console.log(newArr)
}
reverseA()

//sum of all even numbers in an array
console.log("sum of all even numbers in an array")
const sumE=()=>{
    let arr=[2,4,1,2];
    let sum=0;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]%2==0){
            sum+=arr[i]
        }
    }
    console.log(sum)

}
sumE()

//factorial
console.log("Factorial")
const fac=()=>{
    let num=5;
    let facN=1;
    for(let i=num;i>=1;i--){
        facN*=i
    }
    console.log(facN)
}
fac()

//numbers of vowels in string
const vowels=(str)=>{
    // let str="awdiz";
    for(let i=0;i<=str.length-1;i++){
        // console.log(str[i])
        if(str[i]=="o" || str[i]=="O" || str[i]=="a" || str[i]=="A" || str[i]=="e" || str[i]=="E" || str[i]=="i" || str[i]=="I" || str[i]=="u" || str[i]=="U"){
            console.log(`${str[i]} is vowel`)
        }
    }
}
vowels("awdiz")

//remove duplicates from an array
const duplicateArray=()=>{
    let arr=[3,5,2,1,2];
    let arr2=[arr[0]];
    for(let i=0;i<=arr.length-1;i++){
        console.log(arr[i+1]);
        if(arr[i]!==arr[i+1]){
            arr2.push(arr[i])

        }
        
    }

    console.log(arr2,"arr2")

}
duplicateArray()

//remove dupliactes
const removeDuplicates=()=>{
    let arr=[3,5,2,1,2];
    let arr2=[];
    for(let i=0;i<=arr.length-1;i++){
        if(!arr2.includes(arr[i])){
            arr2.push(arr[i])
        }
    }
    console.log(arr2)
}