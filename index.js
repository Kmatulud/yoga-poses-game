const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

const Pool = pg.Pool;

// initialising necessary middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
   
app.get('/', function(req, res) {

	res.render('index', {

	});
});

//start everything up
const PORT = process.env.PORT || 3011;
app.listen(PORT, function () {
    console.log('App started at PORT: ', PORT);
});