const models = require('../models/drugModel');

const controller = {};
controller.getDrugs = (req, res, next) => {
  models.Diabetes.find()
    .then((drugs) => {
        res.findDrug = drugs;
        return next();
    })
    .catch((err) => {
        return next({
            log: 'Error occurred in getDrugs middleware',
            status: 404,
            message: 'Could not obtain drugs'
        });
    });
}

controller.addDrugs = (req, res, next) => {
  const { name, strength, measurement, route, tier } = req.body;
    models.Diabetes.create({name, strength, measurement, route, tier})
    .then((drug) => {
        res.addedDrug = drug;
        next();
    })
    .catch((err) => {
        return next({
            log: 'Error occurred in addDrugs middleware',
            status: 400,
            message: 'Could not add drug'
        });
    });
}

module.exports = controller;