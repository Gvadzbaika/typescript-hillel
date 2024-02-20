class PersonnelManager {
    hireEmployee(employeeDetails) {
        console.log("Найм працівника: ", employeeDetails);
    }
    terminateEmployee(employeeId) {
        console.log("Звільнення працівника з ID ", employeeId);
    }
}
class PayrollSystem {
    processPayroll(employeeId, amount) {
        console.log("Обробка виплати для працівника з ID ", employeeId, " на суму ", amount);
    }
}
class TrainingAndDevelopment {
    enrollEmployeeInTraining(employeeId, trainingDetails) {
        console.log("Запис працівника з ID ", employeeId, " на навчання: ", trainingDetails);
    }
}
class TimeTrackingSystem {
    trackEmployeeTime(employeeId, hours) {
        console.log("Реєстрація ", hours, " годин робочого часу для працівника з ID ", employeeId);
    }
}
class HRMFacade {
    constructor() {
        this.personnelManager = new PersonnelManager();
        this.payrollSystem = new PayrollSystem();
        this.trainingAndDevelopment = new TrainingAndDevelopment();
        this.timeTrackingSystem = new TimeTrackingSystem();
    }
    hireEmployee(employeeDetails) {
        this.personnelManager.hireEmployee(employeeDetails);
    }
    terminateEmployee(employeeId) {
        this.personnelManager.terminateEmployee(employeeId);
    }
    processPayroll(employeeId, amount) {
        this.payrollSystem.processPayroll(employeeId, amount);
    }
    enrollEmployeeInTraining(employeeId, trainingDetails) {
        this.trainingAndDevelopment.enrollEmployeeInTraining(employeeId, trainingDetails);
    }
    trackEmployeeTime(employeeId, hours) {
        this.timeTrackingSystem.trackEmployeeTime(employeeId, hours);
    }
    requestVacation(employeeId, startDate, endDate) {
        console.log(`Запит на відпустку для працівника з ID ${employeeId} з ${startDate} по ${endDate}`);
    }
    cancelVacation(employeeId, vacationId) {
        console.log(`Скасування відпустки для працівника з ID ${employeeId}, ID відпустки: ${vacationId}`);
    }
    evaluateEmployeePerformance(employeeId, evaluationDetails) {
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
