import { Employee } from './models/employee';
import { Animal } from './models/animal';
import { Payment } from './models/accounting';

export class Accountant {
  employees: Employee[] = [];
  animals: Animal[] = [];
  payments: Payment[] = [];
  expenses = 0;

  constructor(employees: Employee[], animals: Animal[]) {
    this.employees = employees;
    this.animals = animals;
  }

  paySalary(employee: Employee): void {
    const salaryAmount = employee.salary;
    this.payments.push({ recipient: employee.name, amount: salaryAmount });
    console.log(`Salary paid to ${employee.name} successfully.`);
  }

  purchaseFood(amount: number, costPerUnit: number): void {
    const totalCost = amount * costPerUnit;
    this.expenses += totalCost;
    console.log(`Food purchased successfully for ${amount} units.`);
  }

  incurExpenses(amount: number): void {
    this.expenses += amount;
    console.log(`Expenses incurred successfully: ${amount}.`);
  }

  generateFinancialReports(): void {
    console.log('Financial Report:');
    console.log(`Total Expenses: ${this.expenses}`);
  }

  addTicketSale(payment: Payment): void {
    this.payments.push(payment);
    console.log(`Ticket sale recorded successfully.`);
  }
}
