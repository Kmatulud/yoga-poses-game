const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

// const Pool = pg.Pool;

app.engine('handlebars', exphbs({layoutsDir: "views/layouts/"}))
app.set('view engine', 'handlebars');

// initialising necessary middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', {});
});

//start everything up
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('App started at PORT: ', PORT);
});
