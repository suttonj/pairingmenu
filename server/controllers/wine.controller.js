import Wine from '../models/wine';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all wines
 * @param req
 * @param res
 * @returns void
 */
export function getWines(req, res) {
  Wine.find().exec((err, wines) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ wines });
  });
}

/**
 * Save a wine
 * @param req
 * @param res
 * @returns void
 */
export function addWine(req, res) {
  if (!req.body.wine.name || !req.body.wine.attributes || !req.body.wine.flavors) {
    res.status(403).end();
  }

  const newWine = new Wine(req.body.wine);

  // Let's sanitize inputs
  newWine.name = sanitizeHtml(slug(newWine.name.toLowerCase(), { lowercase: true }));
  newWine.attributes = sanitizeHtml(newWine.attributes);
  newWine.flavors = sanitizeHtml(newWine.flavors);
  if (newWine.accepts) {
  	newWine.accepts = sanitizeHtml(newWine.accepts);
  }

  newWine.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ wine: saved });
  });
}

/**
 * Get a single wine
 * @param req
 * @param res
 * @returns void
 */
export function getWine(req, res) {
  Wine.findOne({ name: req.params.name }).exec((err, wine) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ wine });
  });
}

/**
 * Delete a wine
 * @param req
 * @param res
 * @returns void
 */
export function deleteWine(req, res) {
  Wine.findOne({ name: req.params.name }).exec((err, wine) => {
    if (err) {
      res.status(500).send(err);
    }

    wine.remove(() => {
      res.status(200).end();
    });
  });
}
