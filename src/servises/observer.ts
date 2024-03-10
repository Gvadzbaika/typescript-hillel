// Інтерфейс спостерігача
export interface Observer {
  update(notification: string): void;
}

// Інтерфейс спостережуваного об'єкта (Суб'єкта)
export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(notification: string): void;
}

// Клас спостерігача для сповіщення
export class NotificationObserver implements Observer {
  update(notification: string): void {
    console.log(`Received notification: ${notification}`);
  }
}

// Клас спостережуваного об'єкта (Суб'єкта)
export class NotificationSubject implements Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(notification: string): void {
    this.observers.forEach((observer) => {
      observer.update(notification);
    });
  }
}
