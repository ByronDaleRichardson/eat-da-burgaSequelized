var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res) {
	db.Burger.findAll({})
	.then(function(dbBurger) {
		res.redirect('/burgers');
	});
});	


router.post('/burgers/create', function(req, res) {
	console.log(req.body);
	db.Burger.create({
		burger_name: req.body.title
	})
	.then(function(dbBurger) {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function(req, res) {
	db.Burger.update(req.body, 
		{
			where: {
				id:req.body.id
			}
		})
	.then(function(dbBurger) {
		res.redirect('/burgers');
	});
});	

module.exports = router;