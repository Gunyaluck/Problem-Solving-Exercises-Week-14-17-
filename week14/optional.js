function isPalindrome(word) {
    let palindromeWord = word.split("").reverse().join("") ;
    return palindromeWord === word;
 };
 
 let result1 = isPalindrome("madam");
 console.log(result1); // true
 
 let result2 = isPalindrome("hello");
 console.log(result2); // false
 