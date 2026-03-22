function findLongestWord(text) {
    return text
    .toLowerCase() 
    .replace(/[^\w\s]/g, "") // ลบ ! , . ?
    .split(" ")
    .reduce((acc,cur) => cur.length > acc.length ? cur : acc,"")
 };
 
 let result1 = findLongestWord("I love programming very much");
 console.log(result1); // "programming"
 
 let result2 = findLongestWord("TechUp helps people switch careers");
 console.log(result2); // "careers"