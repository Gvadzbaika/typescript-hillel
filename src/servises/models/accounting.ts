
import { Employee } from './employee';
import { Animal } from './animal';

export interface FinancialReport {
    generateReport(): void;
}
export interface Payment {
        recipient: string;
        amount: number;
        date?: Date;
        description?: string;
    }
    export abstract class Accounting {
    abstract employees: Employee[];
    abstract animals: Animal[];
    abstract payments: Payment[];
    
    abstract generateFinancialReports(): void;
}
