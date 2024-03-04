import { Employee } from './servises/models/employee';
import { Animal } from './servises/models/animal';
import { Accountant } from './servises/accounting';
import { Visitor } from './servises/models/visitor';
import { TicketOffice } from './servises/ticketOffice';
import { Administration } from './servises/administration';
import { ConcreteAdministration } from './servises/administration';

// Створюємо деяких працівників і тварин
const employees: Employee[] = [
  { name: 'John', salary: 2000 },
  { name: 'Alice', salary: 2500 },
];

const animals: Animal[] = [
  { name: 'Lion', species: 'Panthera leo' },
  { name: 'Elephant', species: 'Loxodonta africana' },
];

// Створюємо об'єкт бухгалтера
const accountant = new Accountant(employees, animals);

// Проводимо операції бухгалтерії
accountant.paySalary(employees[0]); // Платимо зарплату працівнику John
accountant.paySalary(employees[1]); // Платимо зарплату працівнику Alice

accountant.purchaseFood(100, 2); // Покупка їжі для тварин (100 одиниць за 2 гривні за одиницю)

accountant.incurExpenses(500); // Інші витрати на обслуговування зоопарку

// Генеруємо фінансовий звіт
accountant.generateFinancialReports();

// Створення об'єкту каси зоопарку з цінами на квитки
const ticketOffice = new TicketOffice(10, 5, 20);

// Створення відвідувачів
const adultVisitor: Visitor = {
  name: 'John',
  age: 30,
  contactInfo: 'john@example.com',
};
const childVisitor: Visitor = {
  name: 'Alice',
  age: 10,
  contactInfo: 'alice@example.com',
};
const familyVisitor: Visitor = {
  name: 'Smith Family',
  age: null,
  contactInfo: 'smith@example.com',
};
// Продаж квитків
ticketOffice.sellTicket('adult', adultVisitor);
ticketOffice.sellTicket('child', childVisitor);
ticketOffice.sellTicket('family', familyVisitor);

// Створення екземпляру класу адміністрації
const admin = new Administration();

// Створення та додавання співробітників
const employee1: Employee = {
  name: 'John Doe',
  position: 'Manager',
  salary: 5000,
};
const employee2: Employee = {
  name: 'Alice Smith',
  position: 'Zookeeper',
  salary: 3000,
};

admin.addEmployee(employee1);
admin.addEmployee(employee2);

// Видалення співробітника
admin.removeEmployee(employee1);

// Створення та додавання тварин
const animal1: Animal = { name: 'Lion', species: 'Panthera leo' };
const animal2: Animal = { name: 'Elephant', species: 'Loxodonta africana' };

admin.addAnimal(animal1);
admin.addAnimal(animal2);

// Видалення тварини
admin.removeAnimal(animal1);

// Виведення всіх співробітників, тварин
console.log('Employees:', admin.getEmployees());
console.log('Animals:', admin.getAnimals());

// Створення об'єкту адміністрації
const admin2: Administration = new ConcreteAdministration(); // Потрібно створити конкретний клас, який реалізує абстрактний клас адміністрації

// Створення списку клієнтів
const clients: Visitor[] = [
  { name: 'John', contactInfo: 'john@example.com', age: 30 },
  { name: 'Alice', contactInfo: 'alice@example.com', age: 25 },
  { name: 'Bob', contactInfo: 'bob@example.com', age: 35 },
];

// Відправка новин клієнтам
const news = "Welcome to our zoo! Don't miss our special events this weekend.";
admin2.sendNewsToClients(news, clients);
