import { Employee } from './employee';
import { Animal } from './animal';

export interface Administrator {
  addEmployee(employee: Employee): void;
  removeEmployee(employee: Employee): void;
  addAnimal(animal: Animal): void;
  removeAnimal(animal: Animal): void;
}
