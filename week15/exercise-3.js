function getPassedStudents(students) {
    //return นักเรียนที่มีคะแนนมากกว่าเท่ากับ 50
    let passedStudent = [];

    for (let i=0; i<students.length; i++){
        if (students[i].score >= 50){
            passedStudent.push(students[i].name);
        }
    }

    return passedStudent;
 };
 
 let result1 = getPassedStudents([
    { name: "A", score: 80 },
    { name: "B", score: 45 },
    { name: "C", score: 60 }
 ]);
 console.log(result1); // ["A", "C"]