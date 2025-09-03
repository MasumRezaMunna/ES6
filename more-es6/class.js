/**
 * class --> template
 * properties
 * method ( a special type of function inside a class without the function keyword )
 * 
 * 
 * 
 * 
 * 
 * 
 * object
 */


class player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
        
        // console.log('calling the constructor method',  name)
    }
    goal(){
        console.log('score a goal')
    }
    getTeamName(){
        return 'Borsa'
    }
}


const player1 = new player('Tom', 23)
const player2 = new player('o santo', 11)

console.log(player1 instanceof player)
console.log(player2)

// player1.goal()
// console.log(player1)