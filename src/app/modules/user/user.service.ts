import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = (userData: IUser): Promise<IUser | null> => {
  const createdUser = User.create(userData)

  if (!createdUser) {
    throw new Error('failed to create User first')
  }

  return createdUser
}

export const UserService = {
  createUser,
}
