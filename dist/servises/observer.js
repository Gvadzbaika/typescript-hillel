"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationSubject = exports.NotificationObserver = void 0;
// Клас спостерігача для сповіщення
class NotificationObserver {
    update(notification) {
        console.log(`Received notification: ${notification}`);
    }
}
exports.NotificationObserver = NotificationObserver;
// Клас спостережуваного об'єкта (Суб'єкта)
class NotificationSubject {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(notification) {
        this.observers.forEach((observer) => {
            observer.update(notification);
        });
    }
}
exports.NotificationSubject = NotificationSubject;
