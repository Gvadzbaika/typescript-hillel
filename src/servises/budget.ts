export class ZooBudget {
  budget = 0;

  constructor(initialBudget: number) {
    this.budget = initialBudget;
  }

  manageBudget(expenses: number): void {
    // Логіка управління бюджетом
    this.budget -= expenses;
    console.log(`Budget managed. Remaining budget: ${this.budget}`);
  }

  generateFinancialReport(): void {
    console.log(`Financial Report: Total Budget - ${this.budget}`);
  }
}
