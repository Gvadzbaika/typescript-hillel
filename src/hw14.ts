class PersonnelManager {
    hireEmployee(employeeDetails: any) {
        console.log("Найм працівника: ", employeeDetails);
    }

    terminateEmployee(employeeId: number) {
        console.log("Звільнення працівника з ID ", employeeId);
    }
}

class PayrollSystem {
    processPayroll(employeeId: number, amount: number) {
        console.log("Обробка виплати для працівника з ID ", employeeId, " на суму ", amount);
    }
}

class TrainingAndDevelopment {
    enrollEmployeeInTraining(employeeId: number, trainingDetails: any) {
        console.log("Запис працівника з ID ", employeeId, " на навчання: ", trainingDetails);
    }
}

class TimeTrackingSystem {
    trackEmployeeTime(employeeId: number, hours: number) {
        console.log("Реєстрація ", hours, " годин робочого часу для працівника з ID ", employeeId);
    }
}

class HRMFacade {
    private personnelManager: PersonnelManager;
    private payrollSystem: PayrollSystem;
    private trainingAndDevelopment: TrainingAndDevelopment;
    private timeTrackingSystem: TimeTrackingSystem;

    constructor() {
        this.personnelManager = new PersonnelManager();
        this.payrollSystem = new PayrollSystem();
        this.trainingAndDevelopment = new TrainingAndDevelopment();
        this.timeTrackingSystem = new TimeTrackingSystem();
    }

    hireEmployee(employeeDetails: any) {
        this.personnelManager.hireEmployee(employeeDetails);
    }

    terminateEmployee(employeeId: number) {
        this.personnelManager.terminateEmployee(employeeId);
    }

    processPayroll(employeeId: number, amount: number) {
        this.payrollSystem.processPayroll(employeeId, amount);
    }

    enrollEmployeeInTraining(employeeId: number, trainingDetails: any) {
        this.trainingAndDevelopment.enrollEmployeeInTraining(employeeId, trainingDetails);
    }

    trackEmployeeTime(employeeId: number, hours: number) {
        this.timeTrackingSystem.trackEmployeeTime(employeeId, hours);
    }

    requestVacation(employeeId: number, startDate: Date, endDate: Date) {
        console.log(`Запит на відпустку для працівника з ID ${employeeId} з ${startDate} по ${endDate}`);
    }

    cancelVacation(employeeId: number, vacationId: number) {
        console.log(`Скасування відпустки для працівника з ID ${employeeId}, ID відпустки: ${vacationId}`);
    }

    evaluateEmployeePerformance(employeeId: number, evaluationDetails: any) {
        console.log(`Оцінка результативності працівника з ID ${employeeId}:`, evaluationDetails);
    }
}

const hrmFacade = new HRMFacade();

hrmFacade.hireEmployee({ id: 1, name: "John Doe" });
hrmFacade.processPayroll(1, 2000);
hrmFacade.enrollEmployeeInTraining(1, { course: "Leadership Skills", duration: "2 weeks" });
hrmFacade.trackEmployeeTime(1, 40);
hrmFacade.requestVacation(1, new Date('2024-03-01'), new Date('2024-03-14'));
hrmFacade.evaluateEmployeePerformance(1, { rating: 5, comments: "Excellent performance" });
hrmFacade.terminateEmployee(1);
