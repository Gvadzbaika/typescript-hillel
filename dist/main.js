"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accounting_1 = require("./servises/accounting");
const ticketOffice_1 = require("./servises/ticketOffice");
const administration_1 = require("./servises/administration");
const administration_2 = require("./servises/administration");
// Створюємо деяких працівників і тварин
const employees = [
    { name: 'John', salary: 2000 },
    { name: 'Alice', salary: 2500 },
];
const animals = [
    { name: 'Lion', species: 'Panthera leo' },
    { name: 'Elephant', species: 'Loxodonta africana' },
];
// Створюємо об'єкт бухгалтера
const accountant = new accounting_1.Accountant(employees, animals);
// Проводимо операції бухгалтерії
accountant.paySalary(employees[0]); // Платимо зарплату працівнику John
accountant.paySalary(employees[1]); // Платимо зарплату працівнику Alice
accountant.purchaseFood(100, 2); // Покупка їжі для тварин (100 одиниць за 2 гривні за одиницю)
accountant.incurExpenses(500); // Інші витрати на обслуговування зоопарку
// Генеруємо фінансовий звіт
accountant.generateFinancialReports();
// Створення об'єкту каси зоопарку з цінами на квитки
const ticketOffice = new ticketOffice_1.TicketOffice(10, 5, 20);
// Створення відвідувачів
const adultVisitor = {
    name: 'John',
    age: 30,
    contactInfo: 'john@example.com',
};
const childVisitor = {
    name: 'Alice',
    age: 10,
    contactInfo: 'alice@example.com',
};
const familyVisitor = {
    name: 'Smith Family',
    age: null,
    contactInfo: 'smith@example.com',
};
// Продаж квитків
ticketOffice.sellTicket('adult', adultVisitor);
ticketOffice.sellTicket('child', childVisitor);
ticketOffice.sellTicket('family', familyVisitor);
// Створення екземпляру класу адміністрації
const admin = new administration_1.Administration();
// Створення та додавання співробітників
const employee1 = {
    name: 'John Doe',
    position: 'Manager',
    salary: 5000,
};
const employee2 = {
    name: 'Alice Smith',
    position: 'Zookeeper',
    salary: 3000,
};
admin.addEmployee(employee1);
admin.addEmployee(employee2);
// Видалення співробітника
admin.removeEmployee(employee1);
// Створення та додавання тварин
const animal1 = { name: 'Lion', species: 'Panthera leo' };
const animal2 = { name: 'Elephant', species: 'Loxodonta africana' };
admin.addAnimal(animal1);
admin.addAnimal(animal2);
// Видалення тварини
admin.removeAnimal(animal1);
// Виведення всіх співробітників, тварин
console.log('Employees:', admin.getEmployees());
console.log('Animals:', admin.getAnimals());
// Створення об'єкту адміністрації
const admin2 = new administration_2.ConcreteAdministration(); // Потрібно створити конкретний клас, який реалізує абстрактний клас адміністрації
// Створення списку клієнтів
const clients = [
    { name: 'John', contactInfo: 'john@example.com', age: 30 },
    { name: 'Alice', contactInfo: 'alice@example.com', age: 25 },
    { name: 'Bob', contactInfo: 'bob@example.com', age: 35 },
];
// Відправка новин клієнтам
const news = "Welcome to our zoo! Don't miss our special events this weekend.";
admin2.sendNewsToClients(news, clients);
