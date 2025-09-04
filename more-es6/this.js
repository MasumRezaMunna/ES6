#tin;
class Vehicle{
    constructor(type, brand, price){
        this.type = type
        this.brand = brand
        this.price = price
        this.#tin = '123456789'
    }
    getTin(){
        return this.#tin;
    }
    getThis(){
        console.log(this)
    }
    getPrice(){
        return this.price
    }
}

const car1 = new Vehicle('car', 'BMW', 50000000)
const toyota = new Vehicle('car', 'Toyota', 400000000)
// car1.getThis();
console.log(car1.price)
// console.log(car1.getPrice())
// console.log(toyota.getPrice())






const student = {
    namee: 'RAhul Gandhi',
    score: 10000,
    getScore: function(){
        console.log(this)
    },
    getScoreArrow: () => {
        console.log(this)
    }
}

// student.getScore();
// student.getScoreArrow();
// console.log('kjldfsj', this)