import { Router } from 'express';
import * as FoodController from '../controllers/food.controller';

const router = new Router();

// Get all Foods
router.route('/foods').get(FoodController.getFoods);

// Get one food by name
router.route('/foods/:name').get(FoodController.getFood);

// Add a new Food
router.route('/foods').post(FoodController.addFood);

// Delete a food by name
router.route('/foods/:name').delete(FoodController.deleteFood);

export default router;
