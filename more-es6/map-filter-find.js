const students = [
    { id: 1, name: "abul", marks: 50 },
    { id: 2, name: "nbul", marks: 55 },
    { id: 3, name: "dbul", marks: 95 },
    { id: 4, name: "kbul", marks: 15 }
];
const names = students.map(student => student.marks * 0.75)
const goodStudent = students.filter(student => student.marks > 50)
const goodStudents = students.find(student => student.marks > 50)
console.log(goodStudents)