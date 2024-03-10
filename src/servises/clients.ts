import { Clients } from './models/visitor';
import { Visitor } from './models/visitor';

export class ClientsList extends Clients {
  clients: Visitor[] = [];
}
