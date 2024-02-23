// Define CurrencyTypeEnum
var CurrencyTypeEnum;
(function (CurrencyTypeEnum) {
    CurrencyTypeEnum["USD"] = "USD";
    CurrencyTypeEnum["EUR"] = "EUR";
    CurrencyTypeEnum["GBP"] = "GBP";
})(CurrencyTypeEnum || (CurrencyTypeEnum = {}));
// Define ConcreteCurrencyConversionStrategy implementing ICurrencyConversionStrategy
class ConcreteCurrencyConversionStrategy {
    convert(amount, targetCurrency) {
        // Implement conversion logic here
        return amount; // For simplicity, returning same amount without conversion
    }
}
// Define Observable class implementing IObservable
class Observable {
    constructor() {
        this.observers = [];
    }
    attach(observer) {
        const isExist = this.observers.includes(observer);
        if (isExist)
            return console.log('Observable: Observer has been attached already.');
        this.observers.push(observer);
        console.log('Observable:: Attached an observer.');
    }
    detach(observer) {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1)
            return console.log('Observable: Nonexistent observer.');
        this.observers.splice(observerIndex, 1);
        console.log('Observable: Detached an observer.');
    }
    notify() {
        console.log('Observable: Notifying observer...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}
// Define Bank class (Singleton)
class Bank {
    constructor() {
        this.accounts = [];
    }
    static getInstance() {
        if (!Bank.instance) {
            Bank.instance = new Bank();
        }
        return Bank.instance;
    }
    createAccount(client, currency, conversionStrategy) {
        const account = new BankAccount(client, currency, conversionStrategy);
        this.accounts.push(account);
        return account;
    }
    closeAccount(account) {
        const index = this.accounts.indexOf(account);
        if (index !== -1) {
            this.accounts.splice(index, 1);
            console.log('Account closed successfully.');
        }
        else {
            console.log('Account not found.');
        }
    }
}
// Define BankAccount class extending Observable
class BankAccount extends Observable {
    constructor(client, currency, conversionStrategy) {
        super();
        this.balance = 1000;
        this.currency = currency;
        this._holderName = `${client.lastName} ${client.firstName}`;
        this.number = 12345678;
        this._conversionStrategy = conversionStrategy;
    }
    get balanceInfo() {
        return `${this.currency}${this.balance}`;
    }
    get holderName() {
        return this._holderName;
    }
    set holderName({ firstName, lastName }) {
        if (!firstName.trim())
            throw new Error(`Client first name can't be empty!`);
        if (!lastName.trim())
            throw new Error(`Client last name can't be empty!`);
        this._holderName = `${lastName} ${firstName}`;
    }
    set conversionStrategy(strategy) {
        this._conversionStrategy = strategy;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance < amount)
            throw new Error(`Sorry ${this._holderName}, you don't have enough funds!`);
        this.balance -= amount;
    }
    makeTransaction(amount, targetCurrency) {
        const convertAmount = this._conversionStrategy.convert(amount, targetCurrency);
        this.balance -= convertAmount;
        console.log(`Transaction: ${amount} ${this.currency} => ${targetCurrency}, Converted Amount: ${convertAmount} ${targetCurrency}, Balance: ${this.balance} ${this.currency}`);
        this.notify();
    }
}
// Define Notification classes implementing IObserver
class SMSNotification {
    update(account) {
        console.log(`SMS notification: Your account balance has changed. Current balance ${account.balanceInfo}`);
    }
}
class EmailNotification {
    update(account) {
        console.log(`Email notification: Your account balance has changed. Current balance ${account.balanceInfo}`);
    }
}
class PushNotification {
    update(account) {
        console.log(`Push notification: Your account balance has changed. Current balance ${account.balanceInfo}`);
    }
}
// Usage
const bank = Bank.getInstance();
const client1 = { firstName: 'John', lastName: 'Doe' };
const client2 = { firstName: 'Jane', lastName: 'Doe' };
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
