const express = require('express');
const router = express.Router();
const Drug = require('../models/drugModel');

router.post('/drug', async (req,res) => {
  const drug = new Drug(req.body)
  try {
    await drug.save()
    res.status(200).json({status:'Success', data: {drug}})
  }catch(err) {
    res.status(500).json({
        status:'Faliled',
        message: err
    })
}
})
module.exports = router;