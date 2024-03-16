const indexController = require('../src/controller/indexController')
const express = require('express');
const router = express.Router();

/*router.get('/', (req,res) => {
    res.render('index')
})*/

router.get("/", indexController.showIndex)

module.exports = router;