import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import httpStatus from 'http-status';

const createUser = (userData: IUser): Promise<IUser | null> => {
  const createdUser = User.create(userData);

  if (!createdUser) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create User first'
    );
  }

  return createdUser;
};

const getAllUsers = async (): Promise<IUser[] | null> => {
  const allUsers = User.find();

  if (!allUsers) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to get all Users'
    );
  }

  return allUsers;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await User.findOne({ _id: id });

  return result;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
  }
  Object.assign(user, payload);

  const result = await user.save();
  return result;
};

// const deleteUser = async (id: string): Promise<IUser | null> => {
//   const isExist = await User.findOne({ id });

//   if (!isExist) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'User not found !');
//   }

//   const user = await User.findOneAndDelete({ id }); //
//   if (!user) {
//     throw new ApiError(404, 'Failed to delete student');
//   }

//   await User.deleteOne({ id });

//   return user;
// };
const deleteUser = async (id: string): Promise<IUser | null> => {
  const isExist = await User.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found!');
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to delete user');
  }

  return user;
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
