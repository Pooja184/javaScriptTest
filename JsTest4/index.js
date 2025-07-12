//reverse a number without using inbuilt method

const reverse=()=>{
    
}
reverse()

const reverseNum=(num)=>{

}
reverseNum(66)


//find the longest words in sentence
const longestWord=(sentence)=>{
    let words=sentence.split(" ");
    let longestWord="";
    for(let word of words){
        // console.log(word)
        console.log(word.length,"word length",longestWord.length,"longest length")
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }
    console.log(longestWord);
}
longestWord("hello worlddd");   


//check if two strings are Anagrams
function isAnagram(str1, str2) {
    let newArray= []
    for(i=0; i<str2.length;i++){
        newArray.push(str2[i])
    }

    for(j=0; j<str1.length;j++){
        if(str1.length === str2.length && newArray.includes(str1[j])){
            return true;
        }
        else{
            return false
        }
    }
}
console.log(isAnagram("listen", "silent")); // Output: true

//non-repeating
const nonRepeating=()=>{
    let str="heeeyy";
    let str1=""
    for(let i=0;i<=str.length-1;i++){
        if(str[i]===str[i]){
            str1=str[i]
            // console.log(str)
        }
    }
    console.log(str1)
}
nonRepeating()