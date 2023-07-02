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

const updateCow = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const cow = await Cow.findById(id);
  if (!cow) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cow not found!');
  }
  Object.assign(cow, payload);

  const result = await cow.save();
  return result;
};

const deleteCow = async (id: string): Promise<ICow | null> => {
  const isExist = await Cow.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cow not found!');
  }

  const cow = await Cow.findOneAndDelete({ _id: id });

  if (!cow) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete cow');
  }

  return cow;
};
export const CowService = {
  createCow,
  getSingleCow,
  updateCow,
  deleteCow,
};
