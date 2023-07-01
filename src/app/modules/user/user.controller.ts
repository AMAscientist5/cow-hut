import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { UserService } from './user.service'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'

const createStudent: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { student } = req.body
    const result = await UserService.createStudent(student)

    sendResponse<IUser>(res, {
      statusCode: 200,
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  }
)

export const UserController = {
  createStudent,
}
