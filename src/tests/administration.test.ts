import { ConcreteAdministration } from '../servises/administration';

describe('ConcreteAdministration', () => {
  let administration: ConcreteAdministration;

  beforeEach(() => {
    administration = new ConcreteAdministration();
  });

  test('addEmployee should add employee to the list', () => {
    const employee = { name: 'John', id: 1, salary: 3000 };
    administration.addEmployee(employee);
    expect(administration.getEmployees()).toContain(employee);
  });

  test('removeEmployee should remove employee from the list', () => {
    const employee = { name: 'Alice', id: 2, salary: 3000 };
    administration.addEmployee(employee);
    administration.removeEmployee(employee);
    expect(administration.getEmployees()).not.toContain(employee);
  });

  test('addAnimal should add animal to the list', () => {
    const animal = { name: 'Tiger', species: 'Panthera tigris' };
    administration.addAnimal(animal);
    expect(administration.getAnimals()).toContain(animal);
  });

  test('removeAnimal should remove animal from the list', () => {
    const animal = { name: 'Lion', species: 'Panthera leo' };
    administration.addAnimal(animal);
    administration.removeAnimal(animal);
    expect(administration.getAnimals()).not.toContain(animal);
  });

  test('sendNewsToClients should send news to clients', () => {
    const news = 'Welcome to our zoo!';
    const clients = [
      { name: 'Visitor1', id: 1, age: 30, contactInfo: 'Dfkb@gmail.com' },
      { name: 'Visitor2', id: 2, age: 30, contactInfo: 'Dfkb@gmail.com' },
    ];
    const spy = jest.spyOn(console, 'log');
    administration.sendNewsToClients(news, clients);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(news));
  });

  test('registerObserver should register observer', () => {
    const observer = { update: jest.fn() };
    administration.addObserver(observer);
    expect(administration['observers']).toContain(observer);
  });

  test('removeObserver should remove observer', () => {
    const observer = { update: jest.fn() };
    administration.addObserver(observer);
    administration.removeObserver(observer);
    expect(administration['observers']).not.toContain(observer);
  });

  test('notifyObservers should notify all observers', () => {
    const observer1 = { update: jest.fn() };
    const observer2 = { update: jest.fn() };
    administration.addObserver(observer1);
    administration.addObserver(observer2);
    administration.notifyObservers();
    expect(observer1.update).toHaveBeenCalled();
    expect(observer2.update).toHaveBeenCalled();
  });
});
