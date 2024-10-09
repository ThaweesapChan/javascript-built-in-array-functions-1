const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let score = students.reduce((acc,cur)=> acc+cur.score,0);
  return score/students.length
}

// function sumNegativeNumbers(numbers) {
//   return numbers
//     .filter((cur) => cur < 0) // เลือกเฉพาะตัวเลขที่น้อยกว่าศูนย์
//     .reduce((acc, cur) => acc + cur, 0); // รวมค่าของตัวเลขที่กรองออกมา
// }

console.log(getAverageStudentScore(students)); // Output: 87.5