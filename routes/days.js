const router = require('express').Router();
const Day = require('../models/day.js');


router.get('/', (req,res,next) =>{
	Day.findAll({include: [{all:true}]})
		.then( result => res.json(result))
})

module.exports = router;