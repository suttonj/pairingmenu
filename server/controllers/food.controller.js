import Food from '../models/food';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all foods
 * @param req
 * @param res
 * @returns void
 */
export function getFoods(req, res) {
  Food.find().sort('-name').exec((err, foods) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ foods });
  });
}

/**
 * Save a food
 * @param req
 * @param res
 * @returns void
 */
export function addFood(req, res) {
  if (!req.body.food.name || !req.body.food.accepts) {
    res.status(403).end();
  }

  const newFood = new Food(req.body.food);

  // Let's sanitize inputs
  newFood.name = sanitizeHtml(slug(newFood.name.toLowerCase(), { lowercase: true }));
  newFood.accepts = sanitizeHtml(newFood.accepts);
  if (newFood.flavors) {
  	newFood.flavors = sanitizeHtml(newFood.flavors);
  }

  newFood.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ food: saved });
  });
}

/**
 * Get a single food
 * @param req
 * @param res
 * @returns void
 */
export function getFood(req, res) {
  Food.findOne({ name: req.params.name }).exec((err, food) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ food });
  });
}

/**
 * Delete a food
 * @param req
 * @param res
 * @returns void
 */
export function deleteFood(req, res) {
  Food.findOne({ name: req.params.name }).exec((err, food) => {
    if (err) {
      res.status(500).send(err);
    }

    food.remove(() => {
      res.status(200).end();
    });
  });
}