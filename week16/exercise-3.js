function groupAndCalculate(numbers) {
    //return เป็น{
    //   even: ผลคูณของเลขคู่ทั้งหมด (ยกเว้น 0),
    //    odd: ผลรวมของเลขคี่ทั้งหมด,
    //    zero: จำนวนเลขศูนย์ทั้งหมดที่พบ
    // }
    let even = 1; //ผลคูณ
    let odd = 0;
    let zero = 0;
    for(let i=0; i<numbers.length; i++){
        if (numbers[i] === 0) {
            zero++
        }
        else if (numbers[i] % 2 === 0 && numbers[i] !== 0){
            even *= numbers[i];
        } else {
            odd += numbers[i];
        }
    }
    return {
        even: even,
        odd: odd,
        zero: zero
    };
 };
 
 let result1 = groupAndCalculate([0, 2, 3, 0, 4, 5]);
 console.log(result1); // { even: 8, odd: 8, zero: 2 }
 
 let result2 = groupAndCalculate([0, 0, 1, 3, 5]);
 console.log(result2); // { even: 1, odd: 9, zero: 2 }
 
 let result3 = groupAndCalculate([2, 4, 6]);
 console.log(result3); // { even: 48, odd: 0, zero: 0 }