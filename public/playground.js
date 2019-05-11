class Car{
    constructor(){
        this.wheels = 4;
        this.seats = 8;
    }
}

class Ford extends Car{
    constructor(){
        super()
        this.people = 34
    }
}

const car = new Car()
console.log(car.wheels)
const ford = new Ford()
console.log(ford.people)