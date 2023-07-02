import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { cowController } from './cow.controller';
import { CowValidation } from './cow.validation';

const router = express.Router();

router.get('/:id', cowController.getSingleCow);

router.post(
  '/',
  validateRequest(CowValidation.createCowZodSchema),
  cowController.createCow
);

router.patch(
  '/:id',
  validateRequest(CowValidation.createCowZodSchema),
  cowController.updateCow
);

export const CowRoutes = router;
