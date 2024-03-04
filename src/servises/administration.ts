import { Employee } from './models/employee';
import { Animal } from './models/animal';
import { Administrator } from './models/administrator';
import { Visitor } from './models/visitor';
import { Clients } from './models/visitor';

export class Administration implements Administrator {
  private employees: Employee[] = [];
  private animals: Animal[] = [];
  private notifications: string[] = [];
  private clients: Clients[] = [];

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

  sendNewsToClients(news: string, clients: Visitor[]): void {
    clients.forEach((client) => {
      console.log(`Sending news "${news}" to ${client.name}`);
      // Логіка надсилання новин
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
