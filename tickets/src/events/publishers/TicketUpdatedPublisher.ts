import {
  BasePublisher,
  Subjects,
  TicketUpdatedEvent,
} from '@willyhui94-development/common';

export class TicketUpdatedPublisher extends BasePublisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
