"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteAdministration = exports.Administration = void 0;
class Administration {
    constructor() {
        this.employees = [];
        this.animals = [];
        this.notifications = [];
        this.clients = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(`Employee ${employee.name} added successfully.`);
    }
    removeEmployee(employee) {
        const index = this.employees.indexOf(employee);
        if (index !== -1) {
            this.employees.splice(index, 1);
            console.log(`Employee ${employee.name} removed successfully.`);
        }
        else {
            console.log(`Employee ${employee.name} not found.`);
        }
    }
    addAnimal(animal) {
        this.animals.push(animal);
        console.log(`Animal ${animal.name} added successfully.`);
    }
    removeAnimal(animal) {
        const index = this.animals.indexOf(animal);
        if (index !== -1) {
            this.animals.splice(index, 1);
            console.log(`Animal ${animal.name} removed successfully.`);
        }
        else {
            console.log(`Animal ${animal.name} not found.`);
        }
    }
    getEmployees() {
        return this.employees;
    }
    getAnimals() {
        return this.animals;
    }
    sendNewsToClients(news, clients) {
        clients.forEach((client) => {
            console.log(`Sending news "${news}" to ${client.name}`);
            // Логіка надсилання новин
        });
    }
}
exports.Administration = Administration;
class ConcreteAdministration extends Administration {
    constructor() {
        super();
    }
    // Реалізація абстрактного методу sendNewsToClients
    sendNewsToClients(news, clients) {
        clients.forEach((client) => {
            console.log(`Sending news to client ${client.name}: ${news}`);
        });
    }
}
exports.ConcreteAdministration = ConcreteAdministration;
