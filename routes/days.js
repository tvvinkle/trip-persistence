const router = require('express').Router();
const Day = require('../models/day.js');


router.get('/', (req,res,next) =>{
	Day.findAll({
		order: [  'number' ],
		include: [{all:true}]})
		.then( result => res.json(result))
});

router.post('/', (req,res,next)=>{

	const body = req.body;
	Day.create(body).then(day => res.json(day));

});

router.delete('/:id', (req,res,next)=>{
	var id = req.params.id;

	Day.findById(req.params.id)
  .then(function (day) {
    return day.destroy();
  })
  .then(function () {
  	console.log('deleted')
    res.sendStatus(204);
  })
  .catch(next);

});

router.post('/:id/:type/:typeId', (req,res,next)=>{
	const id = req.params.id;
	const typeId = req.params.typeId;
	const type = req.params.type;
	const funcName = type === 'Hotel' ? 'set' + type : 'add' + type;


	Day.findOne({where:{ id }})
		.then((result) => result[funcName](typeId))
		.then(()=>Day.findById(id, {include:[{all:true}]}))
		.then(result => res.json(result)).catch(next);
});

router.delete('/:id/:type/:typeId', (req,res,next)=>{
	const id = req.params.id;
	const type = req.params.type;
		const typeId = type === 'Hotel' ? null : req.params.typeId;
		const funcName = type === 'Hotel' ? 'set' + type : 'remove' + type;
//	console.log(funcName);

	Day.findOne({where:{ id}})
		.then((result) => result[funcName](typeId))
		.then(()=>Day.findById(id, {include:[{all:true}]}))
		.then(result => res.json(result)).catch(next);
})

module.exports = router;