const router = require('express').Router();
const Restaurant = require('../models/restaurant.js');


router.get('/', (req,res,next) =>{
	Restaurant.findAll()
		.then( result => res.json(result))
})

module.exports = router;