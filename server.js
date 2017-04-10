var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var orm = require('./config/orm.js');

var port = process.env.PORT || 3000;

var app = express();

// Serves static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false}));

// Overrides with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

orm.createTable();

app.listen(port);