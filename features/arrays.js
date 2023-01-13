"use strict";
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [];
const car2 = carMakers[0];
const myCar = carMakers.pop();
carMakers.push('100');
carMakers.map((car) => {
    return car.toUpperCase();
});
const importantDates = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
