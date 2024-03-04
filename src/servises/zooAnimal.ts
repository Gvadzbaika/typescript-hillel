import { Animal } from './models/animal';

export class ZooAnimal implements Animal {
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public health: string,
  ) {}
}
