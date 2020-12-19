import {
  Subjects,
  BasePublisher,
  ExpirationCompleteEvent,
} from '@willyhui94-development/common';

export class ExpirationCompletePublisher extends BasePublisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
