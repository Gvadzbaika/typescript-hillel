import { Employee } from './servises/models/employee';
import { Animal } from './servises/models/animal';
import { Accountant } from './servises/accounting';
import { Visitor } from './servises/models/visitor';
import { TicketOffice } from './servises/ticketOffice';
import { ConcreteAdministration } from './servises/administration';
import { ZooBudget } from './servises/budget';

// Приклад створення списку працівників
const employees: Employee[] = [
  { name: 'John', position: 'Manager', salary: 5000 },
  { name: 'Alice', position: 'Zookeeper', salary: 3000 },
  // Додайте інших працівників, які вам потрібні
];

// Приклад створення списку тварин
const animals: Animal[] = [
  { name: 'Lion', species: 'Panthera leo', foodCost: 100 },
  { name: 'Elephant', species: 'Loxodonta africana', foodCost: 200 },
  // Додайте інших тварин, які вам потрібні
];

// Приклад створення бюджету зоопарку
const zooBudget = new ZooBudget(10000); // Передаємо початковий бюджет

// Створення екземпляру класу Accountant з використанням створених даних
const accountant = new Accountant(employees, animals, zooBudget);

// Приклад виклику методів класу Accountant
accountant.paySalary(employees[0]); // Виплата зарплати
accountant.purchaseFood(10, 5); // Покупка їжі
accountant.addTicketSale({ recipient: 'Visitor1', amount: 50 }); // Додавання запису про продаж квитка

// Виклик методу управління бюджетом
accountant.manageBudget();

// Виклик методу для генерації фінансового звіту
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

// Створення об'єкту адміністрації
const administration = new ConcreteAdministration();

// Додавання співробітників
administration.addEmployee({ name: 'John', position: 'Manager', salary: 5000 });
administration.addEmployee({
  name: 'Alice',
  position: 'Caretaker',
  salary: 3000,
});

// Додавання тварин
administration.addAnimal({ name: 'Lion', species: 'Panthera leo' });
administration.addAnimal({ name: 'Elephant', species: 'Loxodonta africana' });

// Створення списку клієнтів
const clients: Visitor[] = [
  { name: 'Bob', age: 40, contactInfo: 'ddf@gmail.com' },
  { name: 'Carol', age: 35, contactInfo: 'wrqedf@gmail.com' },
  { name: 'David', age: 12, contactInfo: 'dddsvgf@gmail.com' },
];

// Відправлення новин клієнтам
administration.sendNewsToClients('Welcome to our zoo!', clients);

// Повідомлення спостерігачам про закриття зоопарку
administration.notifyObservers();
