import Food from '../models/food';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

import Wine from '../models/wine';
import { calculateScore } from '../util/scoring';

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


export function getPairings(req, res) {
	const name = req.params.name;
	if (!name) {
		res.status(400).send('Need target value');
	}
	//TODO: move this into shared methods file
	Food.findOne({ name: name }).exec((err, food) => {
		if (err) {
      res.status(500).send(err);
    }
    // const attributesAccepted = food.accepts;

    // Wine.find({ $or: [ 
				// 	{ 'attributes.body': attributesAccepted.body }, 
				// 	{ 'attributes.sweet': attributesAccepted.sweet },
				// 	{ 'attributes.acid': attributesAccepted.acid }, 
				// 	{ 'attributes.fruit': attributesAccepted.fruit },
				// 	{ 'attributes.oak': attributesAccepted.oak }, 
				// 	{ 'attributes.tannin': attributesAccepted.tannin }
    // 		] })
    // 	.exec((err, wines) => {
    // 		if (err) {
		  //     res.status(500).send(err);
		  //   }
		  //   console.log(wines.length);
		  //   res.json({ wines });
    // 	});
    Wine.find().exec((err, wines) => {
    		if (err) {
		      res.status(500).send(err);
		    }
		    if (!wines.length) {
		    	res.status(400).send();
		    }
		    
		    const wineScores = [];

		    for (let i = 0; i<wines.length; i++ ) {
		    	const wine = wines[i];
		    	const score = calculateScore(food, wine);
		    	console.log(wine.name + ': ' + score);
		    	wineScores.push({ wine, score });
		    }

		    const topWines = 
		   		wineScores.sort((a, b) => { return a.score < b.score ? 1 : (b.score < a.score ? -1 : 0) })
		    		.splice(5)
		    		.reverse();

		    res.json({ topWines });
    	});
	});
}