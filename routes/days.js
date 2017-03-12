const router = require('express').Router();
const Day = require('../models/day.js');


router.get('/', (req,res,next) =>{
	Day.findAll({include: [{all:true}]})
		.then( result => res.json(result))
});

router.post('/', (req,res,next)=>{
const body = req.body;
Day.create(body).then(day => res.json(day));
});

router.post('/:id/:type/:typeId', (req,res,next)=>{
	const id = req.params.id;
	const typeId = req.params.typeId;
	const type = req.params.type;
	const funcName = 'add' + type;
//	console.log(funcName);

	Day.findOne({where:{ id}})
		.then((result) => result['add' + type](typeId))
		.then(()=>Day.findById(id, {include:[{all:true}]}))
		.then(result => res.json(result)).catch(next);
});


module.exports = router;