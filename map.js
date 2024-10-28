  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop

let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()

const multiplyByTwo = function(num) {
  return num * 2;
}

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified w/ map()

const simplified = nums.map(function(num) {return num * 2});
console.log(simplified);

// Simplified w/ map() + arrow function

const simpleMap = nums.map(n => n * 2);
console.log(simpleMap);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

const objStudents = students.map(student => ({
  id: student.id,
  name: student.name
}));
console.log(objStudents);

const addAge = students.map(student => ({
  ...student,
  age: 22 + student.id * 2
}));
console.log(addAge);