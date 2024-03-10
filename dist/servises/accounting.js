"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accountant = void 0;
class Accountant {
    constructor(employees, animals, zooBudget) {
        this.employees = [];
        this.animals = [];
        this.payments = [];
        this.expenses = 0;
        this.employees = employees;
        this.animals = animals;
        this.zooBudget = zooBudget;
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
    addTicketSale(payment) {
        this.payments.push(payment);
        console.log(`Ticket sale recorded successfully.`);
    }
    manageBudget() {
        // Логіка управління бюджетом
        // Наприклад, розподіл коштів на оплату співробітників, закупівлю корму та інші витрати
        const totalExpenses = this.calculateTotalExpenses();
        const remainingBudget = this.zooBudget.budget - totalExpenses;
        if (remainingBudget < 0) {
            console.log(`Warning: Budget deficit detected!`);
        }
        else {
            console.log(`Remaining budget: ${remainingBudget}`);
        }
    }
    calculateTotalExpenses() {
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
exports.Accountant = Accountant;
