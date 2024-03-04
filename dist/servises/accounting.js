"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accountant = void 0;
class Accountant {
    constructor(employees, animals) {
        this.employees = [];
        this.animals = [];
        this.payments = [];
        this.expenses = 0;
        this.employees = employees;
        this.animals = animals;
    }
    paySalary(employee) {
        const salaryAmount = employee.salary;
        this.payments.push({ recipient: employee.name, amount: salaryAmount });
        console.log(`Salary paid to ${employee.name} successfully.`);
    }
    purchaseFood(amount, costPerUnit) {
        const totalCost = amount * costPerUnit;
        this.expenses += totalCost;
        console.log(`Food purchased successfully for ${amount} units.`);
    }
    incurExpenses(amount) {
        this.expenses += amount;
        console.log(`Expenses incurred successfully: ${amount}.`);
    }
    generateFinancialReports() {
        console.log('Financial Report:');
        console.log(`Total Expenses: ${this.expenses}`);
    }
}
exports.Accountant = Accountant;
