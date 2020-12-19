import {
  Subjects,
  BasePublisher,
  PaymentCreatedEvent,
} from '@willyhui94-development/common';

export class PaymentCreatedPublisher extends BasePublisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
