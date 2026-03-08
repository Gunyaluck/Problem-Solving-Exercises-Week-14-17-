function sumEvenNumbers(numbers) {
    let result = 0;

    for (let i=0; i<numbers.length; i++){
        if (numbers[i] % 2 === 0){
            result += numbers[i]
        }
    }

    return result;
 };
 
 let result1 = sumEvenNumbers([1, 2, 3, 4]);
 console.log(result1); // 6
 
 let result2 = sumEvenNumbers([7, 11, 20, 8]);
 console.log(result2); // 28