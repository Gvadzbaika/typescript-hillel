import {
  Administration,
  ConcreteAdministration,
} from './servises/administration';
import { Employee } from './servises/models/employee';
import { Animal } from './servises/models/animal';
import { Visitor } from './servises/models/visitor';

describe('Administration', () => {
  let admin: Administration;
  let employee1: Employee;
  let employee2: Employee;
  let animal1: Animal;
  let animal2: Animal;

  beforeEach(() => {
    admin = new Administration();
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
  let concreteAdmin: ConcreteAdministration;
  let clients: Visitor[];
  let news: string;

  beforeEach(() => {
    concreteAdmin = new ConcreteAdministration();
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
    expect(consoleSpy).toHaveBeenCalledWith(
      `Sending news to client Visitor1: ${news}`,
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      `Sending news to client Visitor2: ${news}`,
    );
  });
});
