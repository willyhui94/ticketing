import { Message } from 'node-nats-streaming';
import {
  Subjects,
  BaseListener,
  ExpirationCompleteEvent,
  OrderStatus,
} from '@willyhui94-development/common';
import { queneGroupName } from './queue-group-name';
import { Order } from '../../models/Order';
import { OrderCancelledPublisher } from '../publishers/OrderCancelledPublisher';

export class ExpirationCompleteListener extends BaseListener<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

  queneGroupName = queneGroupName;

  async onMessage(data: ExpirationCompleteEvent['data'], msg: Message) {
    const order = await Order.findById(data.orderId).populate('ticket');

    if (!order) {
      throw new Error('Order not found');
    }

    if (order.status === OrderStatus.Completed) {
      return msg.ack();
    }

    order.set({
      status: OrderStatus.Cancelled,
    });
    await order.save();

    await new OrderCancelledPublisher(this.client).publish({
      id: order.id,
      ticket: {
        id: order.ticket.id,
      },
      version: order.version,
    });

    msg.ack();
  }
}
