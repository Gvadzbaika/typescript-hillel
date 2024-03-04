interface BudgetManagement {
    manageBudget(): void;
}
abstract class Budget implements BudgetManagement {
    abstract budget: number;
    
    abstract manageBudget(): void;
}