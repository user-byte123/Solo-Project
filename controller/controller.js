const Drug = require('../models/drugModel.js');

const controller = {};

controller.addDrug = async (req, res, next) => {
    const { name, strength, measurement, route, tier, alternatives } = req.body;
    try {
        const drugAdded = await Drug.create({  name, strength, measurement, route, tier, alternatives });
        res.drugAdded = drugAdded;
        return next();
    }catch(err) {
        next({
            log: 'error in addDrug middleware',
            status: 400,
            message: 'Invalid entry, unable to add drug'
        })
    }

}

controller.findDrug = async (req, res, next) => {
    const { name } = req.params;
    try {
        const drugFound = await Drug.find({name}, {_id:false});
        res.drugFound = drugFound[0];
        return next();
    }catch(err) {
        next({
            log: 'Error in findDrug middleware',
            status: 400,
            message: 'No drug found'
        })
    }
}

controller.deleteDrug = async (req, res, next) => {
    const { name } = req.params;
    try {
        await Drug.delete({name});
        res.deletedDrug = `Successfully deleted ${name} from formulary`
        return next();
    }
    catch(err) {
        next({
            log: 'Error in deleteDrug middleware',
            status: 400,
            message: 'Drug unable to be deleted'
        })
    }
}

controller.updateDrug = async (req, res, next) =>  {
    const { drugId } = req.params;
    const { name, strength, measurement, route, tier, alternatives } = req.body;
    const updateField = {};
    if (name) updateField.name = name;
    if (strength) updateField.strength = strength;
    if (measurement) updateField.measurement = measurement;
    if (route) updateField.route = route;
    if (tier) updateField.tier = tier;
    if (alternatives) updateField.alternatives = alternatives;
    try {
        //new:true --> return the updated info to variable updateDrug 
        const updateDrug = await Drug.findByIdAndUpdate(drugId,{$set:updateField},{new:true});
        if (!updateDrug) {
            return next({
                log: 'Drug not found',
                status: 404,
                message: 'Invalid update'
            })
        } 
        res.updateDrug = `Successfully updated ${updateDrug}`
        return next()
    } catch(err) {
        next({
            log: 'Error occurred in updateDrug middleware',
            status: 404, 
            message: 'Error occurred in updateDrug middleware'
        })
    }
}

module.exports = controller;