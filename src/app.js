const path = require('path')

let express = require('express')
let app = express();
const router = require('./router');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));
app.use(router);


/*app.get('/', (req,res) => {
    res.render('index')
})*/


module.exports = app

