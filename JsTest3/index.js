// find number

let nums=[1,2,3,4,5,6];
let target=6;

const binaryTarget=(nums,target)=>{
   let left=0;
   let right=nums.length-1; //last index
   
       
}

console.log(binaryTarget(nums,target));

// console.log("Find the second largest number in an array without sorting the array");
// let arr=[0,1,2,3,4,5,6,7,8,9,10,11];
//  const findLargest=(arr)=>{
//        let first=arr[0];
//        let second=arr[0];
//       //  console.log(first,"first")
//        for(let i=0;i<arr.length;i++){
//          // console.log(arr[0])
//           if(arr[i]>first){ //1>1
//             // console.log(arr[i])
//                 second=first;
//                //  console.log(second,"second")
//                 first=arr[i];
//           }
//           else if(arr[i]>second && arr[i]!==first){
//             // console.log(second,"second")
//                 second=arr[i];
//           }
//        }
//        return second;
//  }
// console.log(findLargest(arr));

// console.log("smallest")
console.log("Find the second smallest number in an array without sorting the array");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const findSecondSmallest = (arr) => {
    if (arr.length < 2) return "Not enough elements";

    let first = arr[0];
    let second = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second && arr[i] !== first) {
            second = arr[i];
        }
    }
    
    return second === Infinity ? "No second smallest element" : second;
}

console.log(findSecondSmallest(arr)); // Output: 2

 console.log("Reverse Words in a Sentence Without Using Built-in Methods. the output will be olleh dlrow");

let sentence="hello world";

const reverseSentence=(sentence)=>{
   // console.log(sentence.length-1)
   for(let i=sentence.length-1;i>=0;i--){
        console.log(sentence[i]);
   
   }

}

reverseSentence(sentence);


console.log("string compression");
 let str="aappaaa";

 const strC=(str)=>{
   let val=0;
     for(let i=0;i<=str.length-1;i++){
      // console.log(str[i])
      if(str[i]===str[i]){
          console.log(str[i],i)
      }
     }
   //   console.log(val)
 }

 strC(str);

console.log("Find the second largest number in an array without sorting the array");


const reverseNumber=(num)=>{
    let reversedNum=0;
    while(num>0){
        reversedNum=reversedNum*10+num%10;
        num=Math.floor(num/10);
    }
    return reversedNum;
}
console.log(reverseNumber(9403)) ;
