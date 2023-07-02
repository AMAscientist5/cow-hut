import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { IOrder } from './order.interface';
import Order from './order.model';
import mongoose from 'mongoose';

const createOrder = async (orderData: IOrder): Promise<IOrder | null> => {
  const ar = [];
  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const createdOrder = Order.create(orderData);

    if (!createdOrder) {
      throw new ApiError(
        httpStatus.EXPECTATION_FAILED,
        'failed to create Order'
      );
    } else {
      ar.push(createdOrder);
    }

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  return ar[0];
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
