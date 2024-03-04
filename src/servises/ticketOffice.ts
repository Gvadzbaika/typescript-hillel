import { Visitor } from './models/visitor';

export class TicketOffice {
  private currentVisitorsList: Visitor[] = [];
  private clientsList: Visitor[] = [];

  constructor(
    private adultTicketPrice: number,
    private childTicketPrice: number,
    private familyTicketPrice: number,
  ) {}

  sellTicket(ticketType: 'adult' | 'child' | 'family', visitor: Visitor): void {
    let ticketPrice: number;

    switch (ticketType) {
      case 'adult':
        ticketPrice = this.adultTicketPrice;
        break;
      case 'child':
        ticketPrice = this.childTicketPrice;
        break;
      case 'family':
        ticketPrice = this.familyTicketPrice;
        break;
      default:
        throw new Error('Invalid ticket type');
    }

    // Додавання відвідувача у поточні відвідувачі та клієнти
    this.currentVisitorsList.push(visitor);
    this.clientsList.push(visitor);

    console.log(`Ticket sold: ${ticketType}, Price: ${ticketPrice}`);
  }
  // Метод, який повертає поточних відвідувачів
  getCurrentVisitors(): Visitor[] {
    return this.currentVisitorsList;
  }

  // Метод, який повертає клієнтів
  getClients(): Visitor[] {
    return this.clientsList;
  }
}
