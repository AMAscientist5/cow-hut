import { Schema } from 'mongoose';

export type ISeller = {
  user: Schema.Types.ObjectId;
} & Document;
