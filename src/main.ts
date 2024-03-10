import { Employee } from './servises/models/employee';
import { Animal } from './servises/models/animal';
import { Accountant } from './servises/accounting';
import { Visitor } from './servises/models/visitor';
import { TicketOffice } from './servises/ticketOffice';
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
