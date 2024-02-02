const express = require('express');
const router = express.Router();
const controller = require('../controller/controller.js')
const Drug = require('../models/drugModel');

router.get('/', controller.getDrugList, (req,res) => {
    res.status(200).json(res.drugList);
})

router.post('/drug', controller.addDrug, (req,res) => {
    res.status(200).json(res.drugAdded);
})

router.get('/drug/:id', controller.findDrug, (req,res) => {
    res.status(200).json(res.drugFound);
})

router.delete('/drug/:id', controller.deleteDrug, (req,res) => {
    res.status(200).json(res.deletedDrug)
})

router.patch('/drug/:drugId', controller.updateDrug, (req, res) => {
    res.status(200).json(res.updateDrug)
})

module.exports = router;