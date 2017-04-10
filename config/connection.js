var mysql = require('mysql');

var connection = mysql.createPool({
    host     : 'us-cdbr-iron-east-03.cleardb.net',
    user     : 'beae2059bf3c81',
    password : '23b497bc',
    database : 'heroku_1eae2da06330d06'
});


/*var connection = mysql.createConnection({
    root: 3000,
    host: 'localhost',
    user: 'root',
    password: '1choraliers2',
    database: 'burgers_db',
}); */


connection.getConnection(function(err, result) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        connection.release();
        return;
    }
    result.connect();
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
