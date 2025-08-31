function sum (num1=0, num2=0){
    const total = num1 + num2;
    console.log(num1, num2, total)
}
sum(10, 40)

function multiply (num1=1, num2=1){
    const result = num1 * num2;
    console.log(result)
}
multiply(10, 10)


function fullName (first, last){
    const name = first + '' + last;
    console.log(name)
}
fullName('Kamruzzaman')

/**
 * some thumb rule of default value. may be useful
 * add, substract --> 0
 * 
 * multiply --> 1
 * 
 * string --> ''
 * 
 * array = []
 * 
 * object = {}
 */