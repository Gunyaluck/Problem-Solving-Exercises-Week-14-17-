function countVowels(text) {
    let litteText = text.toLowerCase();
    let result = 0;
    let vowels = "aeiou";

    for (let i = 0; i < litteText.length; i++) {
        if (vowels.includes(litteText[i])) {
            result++;
        }
    }

    return result;
}
 
 let result1 = countVowels("hello");
 console.log(result1); // 2
 
 let result2 = countVowels("TECHUP");
 console.log(result2); // 2