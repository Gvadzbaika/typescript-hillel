import { TicketOffice } from '../servises/ticketOffice';
import { Visitor } from '../servises/models/visitor';

describe('TicketOffice', () => {
  let ticketOffice: TicketOffice;

  beforeEach(() => {
    ticketOffice = new TicketOffice(10, 5, 15);
  });

  test('should sell adult ticket correctly', () => {
    const visitor: Visitor = {
      name: 'John',
      age: 30,
      contactInfo: 'ddd@gmail.com',
    };
    ticketOffice.sellTicket('adult', visitor);
    expect(ticketOffice.getCurrentVisitors()).toContain(visitor);
    expect(ticketOffice.getClients()).toContain(visitor);
  });

  test('should sell child ticket correctly', () => {
    const visitor: Visitor = {
      name: 'Alice',
      age: 8,
      contactInfo: 'hhhh@gmail.com',
    };
    ticketOffice.sellTicket('child', visitor);
    expect(ticketOffice.getCurrentVisitors()).toContain(visitor);
    expect(ticketOffice.getClients()).toContain(visitor);
  });

  test('should sell family ticket correctly', () => {
    const visitor: Visitor = {
      name: 'Smith Family',
      age: null,
      contactInfo: 'dffd@gmail.com',
    };
    ticketOffice.sellTicket('family', visitor);
    expect(ticketOffice.getCurrentVisitors()).toContain(visitor);
    expect(ticketOffice.getClients()).toContain(visitor);
  });
});
