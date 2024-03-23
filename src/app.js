const path = require('path')

let express = require('express')
let app = express();
const router = require('./router');

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(router);


module.exports = app

