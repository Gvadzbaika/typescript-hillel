export interface Visitor {
    name: string;
    contactInfo: string;
    age: number;
}

export interface Notifier {
    notifyBeforeClosing(): void;
    notifyBeforeDeparture(): void;
}

export abstract class CurrentVisitors implements Notifier {
    abstract visitors: Visitor[];

    abstract notifyBeforeClosing(): void;
    abstract notifyBeforeDeparture(): void;
}

export abstract class Clients {
    abstract clients: Visitor[];
}

export abstract class AdvertisementDepartment {
    abstract sendNews(): void;
    abstract sendPromotions(): void;
}