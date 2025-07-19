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

