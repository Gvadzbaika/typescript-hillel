import { Advertisement } from '../servises/advertisement';

// Mock data for clients
const mockClientsData = [
  { name: 'Client1', contactInfo: 'client1@example.com' },
  { name: 'Client2', contactInfo: 'client2@example.com' },
  { name: 'Client3', contactInfo: 'client3@example.com' },
];

class MockClients {
  clients: any[];

  constructor(clients: any[]) {
    this.clients = clients;
  }
}

describe('Advertisement', () => {
  let advertisement: Advertisement;
  let mockClients: MockClients;

  beforeEach(() => {
    mockClients = new MockClients(mockClientsData);
    advertisement = new Advertisement(mockClients);
  });

  test('should send news to all clients', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    advertisement.sendNews();
    expect(consoleSpy).toHaveBeenCalledTimes(mockClientsData.length);
    mockClientsData.forEach((client) => {
      expect(consoleSpy).toHaveBeenCalledWith(
        `Sending news to ${client.name}: Welcome to our zoo!`,
      );
    });
    consoleSpy.mockRestore();
  });

  test('should send promotions to all clients', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    advertisement.sendPromotions();
    expect(consoleSpy).toHaveBeenCalledTimes(mockClientsData.length);
    mockClientsData.forEach((client) => {
      expect(consoleSpy).toHaveBeenCalledWith(
        `Sending promotions to ${client.name}: Check out our latest discounts!`,
      );
    });
    consoleSpy.mockRestore();
  });
});
