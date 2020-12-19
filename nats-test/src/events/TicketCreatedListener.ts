import { Message } from 'node-nats-streaming';
import { BaseListener } from './BaseListener';
import { TicketCreatedEvent } from './TicketCreatedEvent';
import { Subjects } from './Subjects';

export class TicketCreatedListener extends BaseListener<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queneGroupName = 'payment-service';

  onMessage = (data: TicketCreatedEvent['data'], msg: Message) => {
    console.log(`Event data!`, data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  };
}
