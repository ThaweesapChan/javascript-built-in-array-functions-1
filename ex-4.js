const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  return todos.filter((todo) => {
    return todo.completed === true;
  });
}

// function sumNegativeNumbers(numbers) {
//   return numbers
//     .filter((cur) => cur < 0) // เลือกเฉพาะตัวเลขที่น้อยกว่าศูนย์
//     .reduce((acc, cur) => acc + cur, 0); // รวมค่าของตัวเลขที่กรองออกมา
// }

console.log(getCompletedTodo(todos))

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
