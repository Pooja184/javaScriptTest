function MoveZero(arr){
    let arr2=[]
    let arr3=[]
    let final=[]
    for(i=0;i<arr.length;i++){
            if(arr[i]==0){
                arr2.push(arr[i])
            }
            if(arr[i]!=0){
                arr3.push(arr[i])
            }
    }
    final.push(...arr3,...arr2)
    return final
}

console.log(MoveZero([1,2,4,0,0,6,0,4]))

function getAllSubstrings(str) {
    let substrings = [];
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.substring(i, j));
        }
    }
    
    return substrings;
}

// Example usage
console.log(getAllSubstrings("abc"));
// Output: ["a", "ab", "abc", "b", "bc", "c"]

function romanToInt(roman) {
    const romanMap = {
        "I": 1, "V": 5, "X": 10, "L": 50, 
        "C": 100, "D": 500, "M": 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < roman.length; i++) {
        let current = romanMap[roman[i]];
        let next = romanMap[roman[i + 1]] || 0;
        
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    
    return total;
}

// Example
console.log(romanToInt("MCMXCIV"));