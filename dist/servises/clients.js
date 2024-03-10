"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsList = void 0;
const visitor_1 = require("./models/visitor");
class ClientsList extends visitor_1.Clients {
    constructor() {
        super(...arguments);
        this.clients = [];
    }
}
exports.ClientsList = ClientsList;
