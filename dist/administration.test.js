"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const administration_1 = require("./servises/administration");
describe('Administration', () => {
    let admin;
    let employee1;
    let employee2;
    let animal1;
    let animal2;
    beforeEach(() => {
        admin = new administration_1.Administration();
        employee1 = { name: 'John', position: 'Manager', salary: 5000 };
        employee2 = { name: 'Alice', position: 'Veterinarian', salary: 3000 };
        animal1 = { name: 'Lion', species: 'Panthera leo' };
        animal2 = { name: 'Elephant', species: 'Loxodonta africana' };
    });
    test('should add and remove employees correctly', () => {
        admin.addEmployee(employee1);
        admin.addEmployee(employee2);
        expect(admin.getEmployees()).toContain(employee1);
        expect(admin.getEmployees()).toContain(employee2);
        admin.removeEmployee(employee1);
        expect(admin.getEmployees()).not.toContain(employee1);
    });
    test('should add and remove animals correctly', () => {
        admin.addAnimal(animal1);
        admin.addAnimal(animal2);
        expect(admin.getAnimals()).toContain(animal1);
        expect(admin.getAnimals()).toContain(animal2);
        admin.removeAnimal(animal1);
        expect(admin.getAnimals()).not.toContain(animal1);
    });
});
describe('ConcreteAdministration', () => {
    let concreteAdmin;
    let clients;
    let news;
    beforeEach(() => {
        concreteAdmin = new administration_1.ConcreteAdministration();
        clients = [
            { name: 'Visitor1', contactInfo: 'visitor1@example.com', age: 25 },
            { name: 'Visitor2', contactInfo: 'visitor2@example.com', age: 30 },
        ];
        news = 'Welcome to our zoo!';
    });
    test('should send news to clients correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        concreteAdmin.sendNewsToClients(news, clients);
        expect(consoleSpy).toHaveBeenCalledTimes(2); // Перевірка, що лог був викликаний двічі
        expect(consoleSpy).toHaveBeenCalledWith(`Sending news to client Visitor1: ${news}`);
        expect(consoleSpy).toHaveBeenCalledWith(`Sending news to client Visitor2: ${news}`);
    });
});
