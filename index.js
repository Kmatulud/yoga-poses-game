const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

const Pool = pg.Pool;

// initialising necessary middleware
app.engine('handlebars', exphbs({layoutsDir: "views/layouts/"}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', function (req, res) {
  res.render('index', {});
});

//start everything up
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('App started at PORT: ', PORT);
});
