const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
const flash = require('express-flash');

const Pool = pg.Pool;

app.engine('handlebars', exphbs());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
   
// initialising necessary middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(express.static('public'));

//start everything up
const PORT = process.env.PORT || 3011;
app.listen(PORT, function () {
    console.log('App started at PORT: ', PORT);
});