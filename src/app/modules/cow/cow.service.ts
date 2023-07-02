import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICow } from './cow.interface';
import Cow from './cow.model';
import { IGenericResponse } from '../../../interface/common';
import { IPaginationOptions } from '../../../interface/pagination';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { SortOrder } from 'mongoose';

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

const getAllCows = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ICow[]>> => {
  // const result = await Cow.find();
  // if (!result) {
  //   throw new ApiError(httpStatus.EXPECTATION_FAILED, 'Failed to get all Cows');
  // }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const result = await Cow.find().sort(sortConditions).skip(skip).limit(limit);

  const total = await Cow.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// const getAllCows = async (): Promise<ICow[] | null> => {
//   const allUsers = Cow.find();

//   if (!allUsers) {
//     throw new ApiError(httpStatus.EXPECTATION_FAILED, 'failed to get all Cows');
//   }

//   return allUsers;
// };

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
  getAllCows,
  updateCow,
  deleteCow,
};
