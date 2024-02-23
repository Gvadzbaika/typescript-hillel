// Define CurrencyTypeEnum
enum CurrencyTypeEnum {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP'
  }
  
  // Define ICurrencyConversionStrategy interface
  interface ICurrencyConversionStrategy {
    convert(amount: number, targetCurrency: CurrencyTypeEnum): number;
  }
  
  // Define ConcreteCurrencyConversionStrategy implementing ICurrencyConversionStrategy
  class ConcreteCurrencyConversionStrategy implements ICurrencyConversionStrategy {
    convert(amount: number, targetCurrency: CurrencyTypeEnum): number {
      // Implement conversion logic here
      return amount; // For simplicity, returning same amount without conversion
    }
  }
  
  // Define BankClient interface
  interface BankClient {
    firstName: string;
    lastName: string;
  }
  
  // Define IObservable and IObserver interfaces
  interface IObservable {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
  }
  
  interface IObserver {
    update(observable: IObservable): void;
  }
  
  // Define Observable class implementing IObservable
  abstract class Observable implements IObservable {
    private readonly observers: IObserver[] = [];
  
    public attach(observer: IObserver): void {
      const isExist = this.observers.includes(observer);
  
      if (isExist) return console.log('Observable: Observer has been attached already.');
  
      this.observers.push(observer);
      console.log('Observable:: Attached an observer.');
    }
  
    public detach(observer: IObserver): void {
      const observerIndex = this.observers.indexOf(observer);
  
      if (observerIndex === -1) return console.log('Observable: Nonexistent observer.');
  
      this.observers.splice(observerIndex, 1);
      console.log('Observable: Detached an observer.');
    }
  
    public notify(): void {
      console.log('Observable: Notifying observer...');
      for (const observer of this.observers) {
        observer.update(this);
      }
    }
  }
  
  // Define Bank class (Singleton)
  class Bank {
    private static instance: Bank;
    private accounts: BankAccount[] = [];
  
    private constructor() {}
  
    public static getInstance(): Bank {
      if (!Bank.instance) {
        Bank.instance = new Bank();
      }
      return Bank.instance;
    }
  
    public createAccount(client: BankClient, currency: CurrencyTypeEnum, conversionStrategy: ICurrencyConversionStrategy): BankAccount {
      const account = new BankAccount(client, currency, conversionStrategy);
      this.accounts.push(account);
      return account;
    }
  
    public closeAccount(account: BankAccount): void {
      const index = this.accounts.indexOf(account);
      if (index !== -1) {
        this.accounts.splice(index, 1);
        console.log('Account closed successfully.');
      } else {
        console.log('Account not found.');
      }
    }
  }
  
  // Define BankAccount class extending Observable
  class BankAccount extends Observable {
    private readonly currency: CurrencyTypeEnum;
    private readonly number: number;
    private balance = 1000;
    private _holderName!: string;
    private _conversionStrategy!: ICurrencyConversionStrategy;
  
    constructor(client: BankClient, currency: CurrencyTypeEnum, conversionStrategy: ICurrencyConversionStrategy) {
      super();
      this.currency = currency;
      this._holderName = `${client.lastName} ${client.firstName}`;
      this.number = 12345678;
      this._conversionStrategy = conversionStrategy;
    }
  
    public get balanceInfo(): string {
      return `${this.currency}${this.balance}`;
    }
  
    public get holderName(): string {
      return this._holderName;
    }
  
    public set holderName({ firstName, lastName }: BankClient) {
      if (!firstName.trim()) throw new Error(`Client first name can't be empty!`);
      if (!lastName.trim()) throw new Error(`Client last name can't be empty!`);
  
      this._holderName = `${lastName} ${firstName}`;
    }
  
    public set conversionStrategy(strategy: ICurrencyConversionStrategy) {
      this._conversionStrategy = strategy;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
    }
  
    public withdraw(amount: number): void {
      if (this.balance < amount)
        throw new Error(
          `Sorry ${this._holderName}, you don't have enough funds!`
        );
  
      this.balance -= amount;
    }
  
    public makeTransaction(amount: number, targetCurrency: CurrencyTypeEnum): void {
      const convertAmount = this._conversionStrategy.convert(
        amount,
        targetCurrency
      );
      this.balance -= convertAmount;
  
      console.log(
        `Transaction: ${amount} ${this.currency} => ${targetCurrency}, Converted Amount: ${convertAmount} ${targetCurrency}, Balance: ${this.balance} ${this.currency}`
      );
      this.notify();
    }
  }
  
  // Define Notification classes implementing IObserver
  class SMSNotification implements IObserver {
    update(account: BankAccount): void {
      console.log(`SMS notification: Your account balance has changed. Current balance ${account.balanceInfo}`);
    }
  }
  
  class EmailNotification implements IObserver {
    update(account: BankAccount): void {
      console.log(`Email notification: Your account balance has changed. Current balance ${account.balanceInfo}`);
    }
  }
  
  class PushNotification implements IObserver {
    update(account: BankAccount): void {
      console.log(`Push notification: Your account balance has changed. Current balance ${account.balanceInfo}`);
    }
  }
  
  // Usage
  const bank = Bank.getInstance();
  
  const client1: BankClient = { firstName: 'John', lastName: 'Doe' };
  const client2: BankClient = { firstName: 'Jane', lastName: 'Doe' };
  
  const account1 = bank.createAccount(client1, CurrencyTypeEnum.USD, new ConcreteCurrencyConversionStrategy());
  const account2 = bank.createAccount(client2, CurrencyTypeEnum.EUR, new ConcreteCurrencyConversionStrategy());
  
  const smsNotification = new SMSNotification();
  const emailNotification = new EmailNotification();
  
  account1.attach(smsNotification);
  account1.attach(emailNotification);
  account2.attach(emailNotification);
  
  account1.makeTransaction(500, CurrencyTypeEnum.EUR);
  account2.makeTransaction(1000, CurrencyTypeEnum.USD);
  
  bank.closeAccount(account1);
  