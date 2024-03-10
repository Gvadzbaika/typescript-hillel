import { Accountant } from '../servises/accounting';
import { Employee } from '../servises/models/employee';
import { Animal } from '../servises/models/animal';

describe('Accountant', () => {
  let accountant: Accountant;

  beforeEach(() => {
    const employees: Employee[] = [
      { name: 'John', salary: 2000 },
      { name: 'Alice', salary: 1500 },
    ];

    const animals: Animal[] = [
      { name: 'Lion', species: 'Panthera leo' },
      { name: 'Elephant', species: 'Loxodonta africana' },
    ];

    accountant = new Accountant(employees, animals);
  });

  describe('paySalary', () => {
    test('should pay salary to employee', () => {
      const john: Employee = { name: 'John', salary: 2000 };
      accountant.paySalary(john);
      expect(accountant.payments.length).toBe(1);
      expect(accountant.payments[0].recipient).toBe('John');
      expect(accountant.payments[0].amount).toBe(2000);
    });
  });

  describe('purchaseFood', () => {
    test('should purchase food for animals', () => {
      accountant.purchaseFood(10, 100);
      expect(accountant.expenses).toBe(1000);
    });
  });

  describe('incurExpenses', () => {
    test('should incur additional expenses', () => {
      accountant.incurExpenses(500);
      expect(accountant.expenses).toBe(500);
    });
  });

  describe('generateFinancialReports', () => {
    test('should generate financial reports', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      accountant.generateFinancialReports();
      expect(consoleSpy).toHaveBeenCalledWith('Financial Report:');
      expect(consoleSpy).toHaveBeenCalledWith('Total Expenses: 0');
      consoleSpy.mockRestore();
    });
  });
});
