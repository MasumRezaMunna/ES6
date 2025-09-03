const student = {
    name: 'Rafid',
    1: 50,
    "home-address": 'kochu khet',
    marks: 90
}

//DOT Notation

const studentName = student.name;
// console.log(student.1)

// bracket notation

const studentName2 = student['name']
console.log(student['home-address'])

for(const key in student){
    const value = student[key]
}

const propName = 'marks'
console.log(student[propName])