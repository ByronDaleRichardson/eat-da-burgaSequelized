var express = require('express');
var router = express.Router();
var db = require('../models');

// route for all database
router.get('/', function(req, res) {
	db.Burger.findAll({}).then(function(result) {
		var hbsObject = {
			burgers: result
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});	

// rout to create new burger
router.post('/', function(req, res) {
	db.Burger.create({
		burger_name: req.body.burger_name
	}).then(function() {
		res.redirect('/');
	});
});

// route to update burger
router.put('/:id', function(req, res) {
	console.log('id', req.params.id);
	db.Burger.update({
		devoured: true
	},
	{
		where: {
			id: req.params.id
		}
	}).then(function () {
		res.redirect('/');
	});
});	
	

module.exports = router;