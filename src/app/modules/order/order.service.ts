import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IOrder } from './order.interface';
import Order from './order.model';

const createOrder = (userData: IOrder): Promise<IOrder | null> => {
  const createdOrder = Order.create(userData);

  if (!createdOrder) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, 'failed to create Order');
  }

  return createdOrder;
};

const getAllOrders = async (): Promise<IOrder[] | null> => {
  const allOrders = Order.find();

  if (!allOrders) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Users'
    );
  }

  return allOrders;
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
