import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ICow } from './cow.interface';
import { CowService } from './cow.service';

const createCow = catchAsync(async (req: Request, res: Response) => {
  const cow = req.body;
  const result = await CowService.createCow(cow);

  res.status(200).json({
    success: true,
    message: 'Cow created successfully',
    data: result,
  });

  sendResponse<ICow>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully!',
    data: result,
  });
});

export const cowController = {
  createCow,
};
