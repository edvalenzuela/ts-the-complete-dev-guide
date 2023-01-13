"use strict";
const add = (a, b) => {
    return a + b;
};
const subtract = (a, b) => {
    return a - b;
};
function divide(a, b) {
    return a / b;
}
const multiply = function (a, b) {
    return a * b;
};
const logger = (message) => {
    console.log(message);
};
const throwError = (message) => {
    throw new Error(message);
};
const throwError2 = (message) => {
    if (!message) {
        throw new Error(message);
    }
};
const forecast = {
    date: new Date(),
    weather: 'sunny'
};
const logWeather = (forecast) => {
    console.log(forecast.date);
    console.log(forecast.weather);
};
const logWeather2 = ({ date, weather }) => {
    console.log(date);
    console.log(weather);
};
logWeather(forecast);
