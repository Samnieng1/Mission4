const express = require('express');
const Car = require('../models/Car');
const router = express.Router();
const carCont = require('../controllers/carController');

router.route('/').get(carCont.getCars).post(carCont.createCar);

router.route('/:id').get(carCont.getSingleCar);

module.exports = router;