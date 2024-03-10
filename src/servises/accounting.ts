import { Employee } from './models/employee';
import { Animal } from './models/animal';
import { Payment } from './models/accounting';
import { ZooBudget } from './budget';

export class Accountant {
  employees: Employee[] = [];
  animals: Animal[] = [];
  payments: Payment[] = [];
  expenses = 0;
  zooBudget: ZooBudget;

  constructor(employees: Employee[], animals: Animal[], zooBudget: ZooBudget) {
    this.employees = employees;
    this.animals = animals;
    this.zooBudget = zooBudget;
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
  manageBudget(): void {
    // Логіка управління бюджетом
    // Наприклад, розподіл коштів на оплату співробітників, закупівлю корму та інші витрати
    const totalExpenses = this.calculateTotalExpenses();
    const remainingBudget = this.zooBudget.budget - totalExpenses;

    if (remainingBudget < 0) {
      console.log(`Warning: Budget deficit detected!`);
    } else {
      console.log(`Remaining budget: ${remainingBudget}`);
    }
  }

  private calculateTotalExpenses(): number {
    // Припустимо, що витрати складаються з оплати співробітників та інших витрат
    let totalExpenses = 0;

    // Сума витрат на оплату співробітників
    for (const employee of this.employees) {
      totalExpenses += employee.salary;
    }

    // Враховуємо інші витрати, наприклад, закупівлю корму (якщо потрібно)
    // Тут можна додати будь-яку логіку для розрахунку інших витрат

    return totalExpenses;
  }
}
