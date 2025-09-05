const name = 'Tom Hanks'
if(true){
    const data = 58;
    console.log(data, name);
    doMath(88, 999)
}

// while (true){

// }

// for (const num of [1, 2, 5, 4, 6]){

// }

// function scope or local scope

function doMath (a, b){
    console.log(a, b)
    const sum = a + b;
    const total = sum + 10;
    function doubleIt(x){
        return x * 2
    }
    console.log(doubleIt(450))
}