// import MySQL connection.
var connection = require('../config/connection.js');

// helper function for SQL syntax.
function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push('?')
	};
	return arr.toString();
};

// helper function for SQL syntax.
function objToSql(ob){
	var arr = [];
	for (var key in ob) {
		arr.push(key + '=' + ob[key]);
	};
	return arr.toString();
};

// Object for all our SQL statement functions.
var orm = {
	createTable: function(){
		var queryString = "CREATE TABLE IF NOT EXISTS burgers (";
		queryString += "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,";
		queryString += "burger_name VARCHAR(255),";
		queryString += "devoured BOOLEAN NOT NULL DEFAULT 0,";
		queryString += "date TIMESTAMP);";

		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
		});
	},	
	all: function(tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput;

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	},
	create: function(table, col, vals, cb) {
		var queryString = 'INSERT INTO ' + table;
		queryString = queryString + ' (';
		queryString = queryString + col.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		connection.query(queryString, vals, function(err, result) {
			if(err) throw err;
			cb(result);
		});
	},
	update: function(table, objColVals, condition, cb) {
		var queryString = 'UPDATE ' + table;
		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if(err) throw err;
			cb(result);
		});
	}
};

// Export the orm object for the model.
module.exports = orm;