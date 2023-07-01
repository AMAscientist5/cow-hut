import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'
import httpStatus from 'http-status'

const createUser = (userData: IUser): Promise<IUser | null> => {
  const createdUser = User.create(userData)

  if (!createdUser) {
    throw new ApiError(
      httpStatus.EXPECTATION_FAILED,
      'failed to create User first'
    )
  }

  return createdUser
}

export const UserService = {
  createUser,
}
