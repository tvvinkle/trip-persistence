const router = require('express').Router();
const Activity = require('../models/activity.js');


router.get('/', (req,res,next) =>{
	Activity.findAll()
		.then( result => res.json(result))
})

module.exports = router;