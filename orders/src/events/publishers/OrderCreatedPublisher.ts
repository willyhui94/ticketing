import {
  BasePublisher,
  Subjects,
  OrderCreatedEvent,
} from '@willyhui94-development/common';

export class OrderCreatedPublisher extends BasePublisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
