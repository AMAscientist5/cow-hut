import { IUser } from './user.interface'

const createStudent = async (student: IUser): Promise<IUser | null> => {
  console.log(student)
  return student
}

export const UserService = {
  createStudent,
}
