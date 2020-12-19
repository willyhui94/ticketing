import { Message } from 'node-nats-streaming';
import {
  Subjects,
  BaseListener,
  PaymentCreatedEvent,
  OrderStatus,
} from '@willyhui94-development/common';
import { Order } from '../../models/Order';
import { queneGroupName } from './queue-group-name';

export class PaymentCreatedListener extends BaseListener<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;

  queneGroupName = queneGroupName;

  async onMessage(data: PaymentCreatedEvent['data'], msg: Message) {
    const order = await Order.findById(data.orderId);

    if (!order) {
      throw new Error('Order not found');
    }

    order.set({
      status: OrderStatus.Completed,
    });
    await order.save();

    msg.ack();
  }
}
