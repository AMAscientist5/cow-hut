import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { cowController } from './cow.controller';
import { CowValidation } from './cow.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(CowValidation.createCowZodSchema),
  cowController.createCow
);

export const CowRoutes = router;
