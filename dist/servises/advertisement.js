"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Advertisement = void 0;
class Advertisement {
    constructor(clientsList) {
        this.clientsList = clientsList;
    }
    sendNews() {
        for (const client of this.clientsList.clients) {
            // Логіка відправки новин
            console.log(`Sending news to ${client.name}: Welcome to our zoo!`);
        }
    }
    sendPromotions() {
        for (const client of this.clientsList.clients) {
            // Логіка відправки рекламних акцій
            console.log(`Sending promotions to ${client.name}: Check out our latest discounts!`);
        }
    }
}
exports.Advertisement = Advertisement;
