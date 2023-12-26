var BudgetTypeEnum;
(function (BudgetTypeEnum) {
    BudgetTypeEnum["Debit"] = "debit";
    BudgetTypeEnum["Credit"] = "credit";
})(BudgetTypeEnum || (BudgetTypeEnum = {}));
class PreHireEmployee {
    constructor(id, firstName, lastName, salary, bankAccount) {
        this._balance = 0;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.bankAccount = bankAccount;
    }
    updateBalance(amount, bankAccount) {
        if (bankAccount) {
            this._balance += amount;
        }
    }
}
class Employee {
    constructor(id, firstName, lastName, paymentInfo, salary, status, department) {
        this.balance = 0;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.paymentInfo = paymentInfo;
        this.salary = salary;
        this.status = status;
        this.department = department;
    }
    updateBalance(amount, paymentInfo) {
        if (paymentInfo) {
            this.balance += amount;
        }
    }
}
class Department {
    get employees() {
        return this._employees;
    }
    constructor(id, name, domain) {
        this._employees = [];
        this._pre_hire_employees = [];
        this._budget = {
            debit: 0,
            credit: 0,
        };
        this._id = id;
        this._name = name;
        this._domain = domain;
    }
    addBudget(amount, type) {
        if (type === BudgetTypeEnum.Debit) {
            this._budget.debit += amount;
        }
        if (type === BudgetTypeEnum.Credit) {
            this._budget.credit += amount;
        }
    }
    removeBudget(amount, type) {
        if (type === BudgetTypeEnum.Debit) {
            this._budget.debit -= amount;
        }
        if (type === BudgetTypeEnum.Credit) {
            this._budget.credit -= amount;
        }
    }
    addEmployee(employee) {
        if (employee instanceof Employee) {
            this._employees = [...this._employees, employee];
        }
        if (employee instanceof PreHireEmployee) {
            this._pre_hire_employees = [...this._pre_hire_employees, employee];
        }
        this.addBudget(employee.salary, BudgetTypeEnum.Debit);
    }
    movePreHireEmployeeToEmployees(preHireEmployee, paymentInfo, status, department) {
        const { id, firstName, lastName, salary } = preHireEmployee;
        this._employees = [
            ...this._employees,
            new Employee(id, firstName, lastName, paymentInfo, salary, status, department),
        ];
    }
}
class AccountingDepartment extends Department {
    constructor(id, balance) {
        super(id, 'Accounting', 'Finance');
        this._balance = balance;
    }
    paySalaries(searchingEmployee) {
        if (searchingEmployee instanceof Employee) {
            this._employees.forEach(employee => {
                if (employee.status === 'Active') {
                    this.removeBudget(employee.salary, BudgetTypeEnum.Debit);
                    if (employee.id === searchingEmployee.id) {
                        employee.updateBalance(employee.salary, employee.paymentInfo);
                    }
                }
            });
        }
        if (searchingEmployee instanceof PreHireEmployee) {
            this._pre_hire_employees.forEach(employee => {
                this.removeBudget(employee.salary, BudgetTypeEnum.Debit);
                if (employee.id === searchingEmployee.id) {
                    employee.updateBalance(employee.salary, employee.bankAccount);
                }
            });
        }
    }
}
class Company {
    get departments() {
        return this._departments;
    }
    get employees() {
        return this._departments.reduce((employees, department) => {
            return employees.concat(department._employees);
        }, []).filter(employee => employee.status === 'Active');
    }
    get preHireEmployees() {
        return this._departments.reduce((preHireEmployees, department) => {
            return preHireEmployees.concat(department._pre_hire_employees);
        }, []);
    }
    constructor(name) {
        this._departments = [];
        this._employees = [];
        this._pre_hire_employees = [];
        this._name = name;
    }
    addDepartment(department) {
        this._departments = [...this._departments, department];
    }
    removeDepartment(id) {
        this._departments = this._departments.filter(department => department._id !== id);
    }
}

const company = new Company('MyCompany');
const accounting = new AccountingDepartment(1, 10000);
const hr = new Department(2, 'HR', 'Human Resources');
company.addDepartment(accounting);
company.addDepartment(hr);
const preHireEmployee = new PreHireEmployee(1, 'John', 'Doe', 5000, '12345');
const employee = new Employee(2, 'Jane', 'Smith', null, 6000, 'Active', hr);
accounting.addEmployee(preHireEmployee);
hr.addEmployee(employee);
accounting.paySalaries(employee);
console.log(employee.balance);
console.log(preHireEmployee._balance); 
console.log(accounting._budget.debit); 
console.log(accounting._budget.credit); 
