import { Employee } from './models/employee';
import { Animal } from './models/animal';
import { Visitor } from './models/visitor';
import { Observer, Subject } from './observer';

export abstract class Administration implements Subject {
  private employees: Employee[] = [];
  private animals: Animal[] = [];
  private notifications: string[] = [];
  private clients: Visitor[] = [];
  private observers: Observer[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
    console.log(`Employee ${employee.name} added successfully.`);
  }

  removeEmployee(employee: Employee): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
      console.log(`Employee ${employee.name} removed successfully.`);
    } else {
      console.log(`Employee ${employee.name} not found.`);
    }
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
    console.log(`Animal ${animal.name} added successfully.`);
  }

  removeAnimal(animal: Animal): void {
    const index = this.animals.indexOf(animal);
    if (index !== -1) {
      this.animals.splice(index, 1);
      console.log(`Animal ${animal.name} removed successfully.`);
    } else {
      console.log(`Animal ${animal.name} not found.`);
    }
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getAnimals(): Animal[] {
    return this.animals;
  }

  // Абстрактний метод для відправлення новин клієнтам
  abstract sendNewsToClients(news: string, clients: Visitor[]): void;

  // Реалізація методів спостерігача
  addObserver(observer: Observer): void {
    this.observers.push(observer);
    console.log('Observer added.');
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
      console.log('Observer removed.');
    } else {
      console.log('Observer not found.');
    }
  }

  notifyObservers(): void {
    console.log('Notifying observers...');
    this.observers.forEach((observer) => {
      observer.update(this.notifications.join('\n'));
    });
  }
}

export class ConcreteAdministration extends Administration {
  constructor() {
    super();
  }

  // Реалізація абстрактного методу sendNewsToClients
  sendNewsToClients(news: string, clients: Visitor[]): void {
    clients.forEach((client) => {
      console.log(`Sending news to client ${client.name}: ${news}`);
    });
  }
}
