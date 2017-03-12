const router = require('express').Router();
const Hotel = require('../models/hotel.js');


router.get('/', (req,res,next) =>{
	Hotel.findAll()
		.then( result => res.json(result))
})

module.exports = router;