import { Types } from 'mongoose';

export type ICow = {
  cow: Types.ObjectId;
  buyer: Types.ObjectId;
};
