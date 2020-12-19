import { Message } from 'node-nats-streaming';
import {
  Subjects,
  BaseListener,
  TicketCreatedEvent,
} from '@willyhui94-development/common';
import { Ticket } from '../../models/Ticket';
import { queneGroupName } from './queue-group-name';

export class TicketCreatedListener extends BaseListener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;

  queneGroupName = queneGroupName;

  async onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    const { id, title, price } = data;

    const ticket = Ticket.build({
      id,
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
