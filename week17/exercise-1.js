function findCommon(arr1, arr2) {
    //ถ้าใน arr มีตัวซ้ำ ต้องจัดการก่อน >> ใช้ Set  จัดการตัวซ้ำใน arr
    //วนลูปใน arr1 แล้วเอา arr2 มาเทียบว่ามีไหม >> Set แค่ arr2
    let set2 = new Set(arr2);

    return arr1.filter(num => set2.has(num))
 };

 
 let result1 = findCommon([1, 2, 3], [2, 3, 4]);
 console.log(result1); // [2, 3]
 
 let result2 = findCommon([5, 6], [7, 8]);
 console.log(result2); // []