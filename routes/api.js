const express = require('express');
const controller = require('../controllers/controller.js');
const router = express.Router();

router.get('/', controller.getDrugs, (req,res) => {
    res.status(200).json(res.findDrug)
});

router.post('/diabetes', controller.addDrugs, (req,res) => {
    res.status(200).json(res.addedDrug)
})


module.exports = router;