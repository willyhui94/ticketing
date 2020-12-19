import {
  BasePublisher,
  Subjects,
  OrderCancelledEvent,
} from '@willyhui94-development/common';

export class OrderCancelledPublisher extends BasePublisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
