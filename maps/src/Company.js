"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const faker_1 = require("@faker-js/faker");
class Company {
    constructor() {
        this.color = 'red';
        this.companyName = faker_1.faker.company.name();
        this.catchPhrase = faker_1.faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker_1.faker.address.latitude()),
            lng: parseFloat(faker_1.faker.address.longitude())
        };
    }
    markerContent() {
        return `
			<div>
				<h1>Company Name: ${this.companyName}</h1>
				<h3>CatchPhrase: ${this.catchPhrase}</h3>
			</div>`;
    }
}
exports.Company = Company;
