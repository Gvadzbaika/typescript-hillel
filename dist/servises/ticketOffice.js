"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketOffice = void 0;
class TicketOffice {
    constructor(adultTicketPrice, childTicketPrice, familyTicketPrice) {
        this.adultTicketPrice = adultTicketPrice;
        this.childTicketPrice = childTicketPrice;
        this.familyTicketPrice = familyTicketPrice;
        this.currentVisitorsList = [];
        this.clientsList = [];
        this.ticketSales = [];
    }
    sellTicket(ticketType, visitor) {
        let ticketPrice;
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
    getCurrentVisitors() {
        return this.currentVisitorsList;
    }
    // Метод, який повертає клієнтів
    getClients() {
        return this.clientsList;
    }
    // Mетод для отримання даних про продажі квитків
    getTicketSales() {
        return this.ticketSales;
    }
}
exports.TicketOffice = TicketOffice;
