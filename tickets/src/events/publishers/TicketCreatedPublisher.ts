import {
  BasePublisher,
  Subjects,
  TicketCreatedEvent,
} from '@willyhui94-development/common';

export class TicketCreatedPublisher extends BasePublisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
