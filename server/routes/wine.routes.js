import { Router } from 'express';
import * as WineController from '../controllers/wine.controller';

const router = new Router();

// Get all Wines
router.route('/wines').get(WineController.getWines);

// Get one wine by name
router.route('/wines/:name').get(WineController.getWine);

// Add a new Wine
router.route('/wines').post(WineController.addWine);

// Delete a wine by name
router.route('/wines/:name').delete(WineController.deleteWine);

export default router;
