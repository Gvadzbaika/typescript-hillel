import { Accountant } from '../servises/accounting';
import { Employee } from '../servises/models/employee';
import { Animal } from '../servises/models/animal';
import { Payment } from '../servises/models/accounting';
import { ZooBudget } from '../servises/budget';

describe('Accountant', () => {
  let accountant: Accountant;
  let mockEmployees: Employee[];
  let mockAnimals: Animal[];
  let mockZooBudget: ZooBudget;

  beforeEach(() => {
    // Мокуємо дані
    mockEmployees = [
      { name: 'Employee1', salary: 1000 },
      { name: 'Employee2', salary: 1500 },
    ];
    mockAnimals = [
      { species: 'volf', name: 'Animal1', foodCost: 50 },
      { species: 'lion', name: 'Animal2', foodCost: 75 },
    ];
    mockZooBudget = new ZooBudget(5000); // Ініціалізуємо мокований об'єкт ZooBudget

    // Ініціалізуємо об'єкт Accountant з мокованими даними
    accountant = new Accountant(mockEmployees, mockAnimals, mockZooBudget);
  });

  test('constructor should initialize employees, animals, and zooBudget properties', () => {
    expect(accountant.employees).toEqual(mockEmployees);
    expect(accountant.animals).toEqual(mockAnimals);
    expect(accountant.zooBudget).toBe(mockZooBudget);
  });

  test('paySalary method should add payment to payments array', () => {
    accountant.paySalary(mockEmployees[0]);
    expect(accountant.payments).toContainEqual({
      recipient: 'Employee1',
      amount: 1000,
    });
  });

  test('purchaseFood method should increase expenses', () => {
    accountant.purchaseFood(10, 5); // 10 units of food at $5 per unit
    expect(accountant.expenses).toBe(50);
  });

  test('incurExpenses method should increase expenses', () => {
    accountant.incurExpenses(200);
    expect(accountant.expenses).toBe(200);
  });

  test('generateFinancialReports method should log financial report', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    accountant.generateFinancialReports();
    expect(consoleSpy).toHaveBeenCalledWith('Financial Report:');
    expect(consoleSpy).toHaveBeenCalledWith('Total Expenses: 0'); // Expenses will be 0 as no purchases made in the test
    consoleSpy.mockRestore();
  });

  test('addTicketSale method should add payment to payments array', () => {
    const mockPayment: Payment = { recipient: 'Recipient', amount: 500 };
    accountant.addTicketSale(mockPayment);
    expect(accountant.payments).toContainEqual(mockPayment);
  });

  test('manageBudget method should log remaining budget or budget deficit warning', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    accountant.manageBudget();
    expect(consoleSpy).toHaveBeenCalled(); // Check if any log is made
    consoleSpy.mockRestore();
  });

  test('calculateTotalExpenses method should return the sum of employee salaries', () => {
    const totalExpenses = accountant['calculateTotalExpenses']();
    const expectedExpenses = mockEmployees.reduce(
      (acc, curr) => acc + curr.salary,
      0,
    );
    expect(totalExpenses).toBe(expectedExpenses);
  });
});
