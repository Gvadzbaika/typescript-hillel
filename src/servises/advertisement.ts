import { Clients } from './models/visitor';
import { AdvertisementDepartment } from './models/visitor';

export class Advertisement implements AdvertisementDepartment {
  constructor(private clientsList: Clients) {}

  sendNews(): void {
    for (const client of this.clientsList.clients) {
      // Логіка відправки новин
      console.log(`Sending news to ${client.name}: Welcome to our zoo!`);
    }
  }

  sendPromotions(): void {
    for (const client of this.clientsList.clients) {
      // Логіка відправки рекламних акцій
      console.log(
        `Sending promotions to ${client.name}: Check out our latest discounts!`,
      );
    }
  }
}
