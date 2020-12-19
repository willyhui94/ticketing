import { Message } from 'node-nats-streaming';
import {
  Subjects,
  BaseListener,
  TicketUpdatedEvent,
} from '@willyhui94-development/common';
import { Ticket } from '../../models/Ticket';
import { queneGroupName } from './queue-group-name';

export class TicketUpdatedListener extends BaseListener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;

  queneGroupName = queneGroupName;

  async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    const { title, price } = data;
    ticket.set({
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
