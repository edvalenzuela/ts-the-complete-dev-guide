"use strict";
let apples = 5;
let speed = 'fast';
let hasnme = true;
let nothingMuch = null;
let nothing = undefined;
let now = new Date();
let colors = ['red', 'green', 'blue'];
let myNumbers = [1, 2, 3];
let truths = [true, true, false];
class Car {
}
let car = new Car();
let point = {
    x: 10,
    y: 20
};
const logNumber = (i) => {
    console.log(i);
};
const json = '{"x": 10, "y": 20"}';
const coordinates = JSON.parse(json);
console.log(coordinates);
let words = ['red', 'green', 'blue'];
let foundWord;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
    }
}
let numbers = [-10, -1, 12];
let numberAboveZero = false;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
        numberAboveZero = numbers[index];
    }
}
