function findMode(arr) {
    //return ตัวที่เจอบ่อยที่สุดใน array ถ้าได้ผลลัพธ์ > 1 ให้เอาตัวที่เจอก่อน
    let count = {};
    let maxCount = 0;
    let mode = arr[0];

    for(let i=0; i<arr.length; i++){
        let num = arr[i];

        count[num] = (count[num] || 0) + 1 ;

        if(count[num] > maxCount){
            maxCount = count[num];
            mode = num;
        }
    }
    return mode;
 };
 
 let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
 console.log(result1); // 3
 
 let result2 = findMode([7, 7, 1, 1, 7]);
 console.log(result2); // 7
 
 let result3 = findMode([7, 7, 1, 1, 7, 1]);
 console.log(result3); // 7