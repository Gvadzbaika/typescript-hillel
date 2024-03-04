import { Visitor } from './models/visitor';

export class CurrentVisitorsList {
  private visitors: Visitor[] = [];

  addVisitor(visitor: Visitor): void {
    this.visitors.push(visitor);
  }

  notifyBeforeClosing(): void {
    for (const visitor of this.visitors) {
      // Логіка оповіщення перед закриттям
      console.log(
        `Notification sent to ${visitor.name}: The zoo will be closing in 15 minutes.`,
      );
    }
  }

  notifyBeforeDeparture(): void {
    for (const visitor of this.visitors) {
      // Логіка оповіщення перед відходом
      console.log(
        `Notification sent to ${visitor.name}: Thank you for visiting the zoo. Have a great day!`,
      );
    }
  }
}
