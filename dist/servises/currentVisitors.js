"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentVisitorsList = void 0;
class CurrentVisitorsList {
    constructor() {
        this.visitors = [];
    }
    addVisitor(visitor) {
        this.visitors.push(visitor);
    }
    notifyBeforeClosing() {
        for (const visitor of this.visitors) {
            // Логіка оповіщення перед закриттям
            console.log(`Notification sent to ${visitor.name}: The zoo will be closing in 15 minutes.`);
        }
    }
    notifyBeforeDeparture() {
        for (const visitor of this.visitors) {
            // Логіка оповіщення перед відходом
            console.log(`Notification sent to ${visitor.name}: Thank you for visiting the zoo. Have a great day!`);
        }
    }
}
exports.CurrentVisitorsList = CurrentVisitorsList;
