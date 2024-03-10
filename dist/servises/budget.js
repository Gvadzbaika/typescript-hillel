"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZooBudget = void 0;
class ZooBudget {
    constructor(initialBudget) {
        this.budget = 0;
        this.budget = initialBudget;
    }
    manageBudget(expenses) {
        // Логіка управління бюджетом
        this.budget -= expenses;
        console.log(`Budget managed. Remaining budget: ${this.budget}`);
    }
    generateFinancialReport() {
        console.log(`Financial Report: Total Budget - ${this.budget}`);
    }
}
exports.ZooBudget = ZooBudget;
