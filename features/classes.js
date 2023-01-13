"use strict";
class Vehicle {
    constructor(color) {
        this.color = color;
    }
    honk() {
        console.log('beep');
    }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);
class Cars extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log('vroom');
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const car1 = new Cars(4, 'red');
car1.startDrivingProcess();
