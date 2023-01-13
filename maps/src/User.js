"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const faker_1 = require("@faker-js/faker");
class User {
    constructor() {
        this.color = 'red';
        this.name = faker_1.faker.name.firstName();
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude())
        };
    }
    markerContent() {
        return `User Name: ${this.name}`;
    }
}
exports.User = User;
