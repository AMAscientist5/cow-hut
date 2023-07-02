import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICow } from './cow.interface';
import Cow from './cow.model';

const createCow = (userData: ICow): Promise<ICow | null> => {
  const createdUser = Cow.create(userData);

  if (!createdUser) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create User first'
    );
  }

  return createdUser;
};

const getSingleCow = async (id: string): Promise<ICow | null> => {
  const result = await Cow.findOne({ _id: id });

  return result;
};
export const CowService = {
  createCow,
  getSingleCow,
};
