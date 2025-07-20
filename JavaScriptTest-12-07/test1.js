const findEle = () => {
  let arr = [4, 5, 1, 2, 0, 4, 1, 0];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  // console.log(obj);

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      return arr[i];
    }
  }
  // for(let ele in obj){
  //     if(obj[ele]===1){
  //         console.log(ele);
  //         break
  //     }
  // }
};
// console.log(findEle())

const mergeArr=()=>{
    //     Merge Two Arrays and Remove Duplicates
    // Input: [1, 2, 3], [2, 3, 4]
    // Output: [1, 2, 3, 4]
    //  Use Set or object keys for uniqueness

    let arr1=[1, 2, 3];
    let arr2= [2, 3, 4];
    let newArr=arr1.concat(arr2);
    // console.log(newArr)
    let uniqueArr=[];
    for(let i=0;i<newArr.length;i++){
        if(!uniqueArr.includes(newArr[i])){
            uniqueArr.push(newArr[i])
            // console.log(newArr[i])
        }
       
    }
    console.log(uniqueArr)

}
// mergeArr()


const binarySearch=()=>{
  let arr=[1,2,3,4,5,6,7];
  let target=6;

  let left=0;
  let right=arr.length-1;

  while (left<=right) {
    let middleIdx=Math.round(left+right)/2;
    // console.log(middleIdx)
    if (target===arr[middleIdx]) {
      return middleIdx;
    }else if(target>arr[middleIdx]){
      left=middleIdx+1
    }else if(target<arr[middleIdx]){
      right=middleIdx-1;
    }
  }
}
console.log(binarySearch())

