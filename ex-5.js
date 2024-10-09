const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  return students.reduce((acc,cur) => acc += cur.score,0) /students.length
}

getAverageStudentScore(students); // Output: 87.5

console.log(getAverageStudentScore(students))